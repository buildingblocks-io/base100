// Newsletter Subscribe Component Handler
// Handles form submission, validation, and spam protection

(function() {
    'use strict';

    // Configuration
    const CONFIG = {
        submitUrl: '/api/subscribe.php',
        debounceDelay: 300,
        minNameLength: 2,
        maxNameLength: 100,
        maxRemarksLength: 500
    };

    // Rate limiting (prevent rapid submissions)
    const rateLimiter = new Map();

    function getRateLimitKey() {
        return 'subscribe_' + (new Date()).getMinutes();
    }

    function checkRateLimit() {
        const key = getRateLimitKey();
        const count = rateLimiter.get(key) || 0;
        if (count >= 3) return false; // Max 3 submissions per minute
        rateLimiter.set(key, count + 1);
        return true;
    }

    // Validation functions
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email) && email.length <= 254;
    }

    function validateName(name) {
        const trimmed = name.trim();
        return trimmed.length >= CONFIG.minNameLength && trimmed.length <= CONFIG.maxNameLength;
    }

    function validateForm(formData) {
        // Check honeypot (spam protection)
        if (formData.get('website') && formData.get('website').trim() !== '') {
            return { valid: false, error: 'Invalid submission' };
        }

        // Validate name
        if (!validateName(formData.get('name'))) {
            return { valid: false, error: 'Please enter a valid name (2-100 characters)' };
        }

        // Validate email
        if (!validateEmail(formData.get('email'))) {
            return { valid: false, error: 'Please enter a valid email address' };
        }

        // Validate remarks length
        const remarks = formData.get('remarks') || '';
        if (remarks.length > CONFIG.maxRemarksLength) {
            return { valid: false, error: 'Remarks too long (max 500 characters)' };
        }

        return { valid: true };
    }

    // Get device info
    function getDeviceInfo() {
        return {
            userAgent: navigator.userAgent,
            language: navigator.language,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            timestamp: new Date().toISOString()
        };
    }

    // Initialize form
    function initForm(form) {
        const submitBtn = form.querySelector('button[type="submit"]');
        const messageDiv = form.querySelector('.subscribe-message');
        const inputs = form.querySelectorAll('input[type="text"], input[type="email"], textarea');

        // Enable submit button when form has valid data
        function updateSubmitButton() {
            const name = form.querySelector('input[name="name"]').value.trim();
            const email = form.querySelector('input[name="email"]').value.trim();
            submitBtn.disabled = !name || !email;
        }

        inputs.forEach(input => {
            input.addEventListener('input', updateSubmitButton);
        });

        // Handle form submission
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Clear previous message
            messageDiv.className = 'subscribe-message';
            messageDiv.textContent = '';

            // Rate limiting check
            if (!checkRateLimit()) {
                showMessage(messageDiv, 'Too many submissions. Please wait a moment.', 'error');
                return;
            }

            // Validate form
            const formData = new FormData(form);
            const validation = validateForm(formData);
            if (!validation.valid) {
                showMessage(messageDiv, validation.error, 'error');
                return;
            }

            // Disable button and show loading state
            submitBtn.disabled = true;
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Subscribing...';

            try {
                // Prepare submission data
                const data = {
                    name: formData.get('name').trim(),
                    email: formData.get('email').trim(),
                    remarks: formData.get('remarks').trim(),
                    deviceInfo: getDeviceInfo()
                };

                // Submit to server
                const response = await fetch(CONFIG.submitUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Requested-With': 'XMLHttpRequest'
                    },
                    body: JSON.stringify(data)
                });

                const result = await response.json();

                if (response.ok && result.success) {
                    showMessage(messageDiv, '✓ Thank you! Check your email to confirm.', 'success');
                    form.reset();
                    updateSubmitButton();
                } else {
                    showMessage(messageDiv, result.error || 'Subscription failed. Please try again.', 'error');
                }
            } catch (error) {
                console.error('Subscribe error:', error);
                showMessage(messageDiv, 'Network error. Please try again.', 'error');
            } finally {
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            }
        });

        updateSubmitButton();
    }

    function showMessage(messageDiv, text, type) {
        messageDiv.textContent = text;
        messageDiv.className = `subscribe-message ${type}`;
    }

    // Initialize popup
    function initPopup() {
        const overlay = document.querySelector('[data-subscribe="popup"]');
        if (!overlay) return;

        const closeBtn = overlay.querySelector('.subscribe-popup-close');
        const form = overlay.querySelector('form');

        closeBtn.addEventListener('click', () => {
            overlay.classList.remove('active');
        });

        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.classList.remove('active');
            }
        });

        initForm(form);
    }

    // Show popup (can be called from other scripts)
    window.showSubscribePopup = function() {
        const overlay = document.querySelector('[data-subscribe="popup"]');
        if (overlay) {
            overlay.classList.add('active');
        }
    };

    // Initialize on DOM ready
    function init() {
        // Initialize inline form
        const inlineForm = document.querySelector('[data-subscribe="inline"] form');
        if (inlineForm) {
            initForm(inlineForm);
        }

        // Initialize popup
        initPopup();
    }

    // Watch for subscribe component being added to DOM
    function watchForComponent() {
        const observer = new MutationObserver(() => {
            const inlineForm = document.querySelector('[data-subscribe="inline"] form');
            const popupOverlay = document.querySelector('[data-subscribe="popup"]');

            if (inlineForm || popupOverlay) {
                init();
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });

        // Also try immediate init in case component is already there
        setTimeout(init, 100);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', watchForComponent);
    } else {
        watchForComponent();
    }
})();

