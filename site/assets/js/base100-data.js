(function () {
    const frameworks = {
        2026: {
            year: 2026,
            departments: [
                { id: 'leadership', symbol: 'Ld', color: '#0ea5e9', name: 'Vision & Leadership', summary: 'Strategy & direction', icon: 'fa-regular fa-compass', desc: `How clearly the organization is led, how decisions are made, and how strategy turns into action.`, levels: [
                    { level: 1, headline: `No Written Goals`, action: `Write one company goal and one weekly leadership priority.`, evidence: `The plan is "survive." No regular management cadence. Everyone waits for the founder to tell them what to do today.` },
                    { level: 2, headline: `Goals Exist in Founder’s Head`, action: `Put current goals in writing and repeat them weekly.`, evidence: `Priorities change frequently. The team often guesses what is most important this week.` },
                    { level: 3, headline: `Basic Vision Defined`, action: `Publish a one-page vision, roles, and annual target.`, evidence: `An annual goal exists on paper. Roles are roughly defined, but people often step outside them.` },
                    { level: 4, headline: `Regular Management Cadence`, action: `Run fixed leadership meetings with agenda, decisions, and owners.`, evidence: `Leadership meetings happen on a schedule. Basic metrics are tracked, but decisions are still top-down.` },
                    { level: 5, headline: `Delegated Accountability`, action: `Give managers targets and clear decision rights.`, evidence: `Managers have their own targets (KPIs) and report on them monthly. The Founder is not the only decision maker.` },
                    { level: 6, headline: `Data-Driven Decisions`, action: `Use KPI dashboards as the basis for weekly decisions.`, evidence: `Leaders use dashboards, not opinions, to make choices. Forecasting accuracy is improving (~80%).` },
                    { level: 7, headline: `Founder Exits Operations`, action: `Move daily operating control to department heads with budget ownership.`, evidence: `Department heads manage their own budgets. The company runs smoothly for a month without the Founder.` },
                    { level: 8, headline: `External Governance`, action: `Add external review and written governance policies.`, evidence: `Advisors or non-executives review strategy quarterly. Policies are written and enforced.` },
                    { level: 9, headline: `Full Redundancy`, action: `Build leadership redundancy for every key role.`, evidence: `Any leader (including the CEO) can be replaced or take leave without the business suffering.` },
                    { level: 10, headline: `Theoretical Perfection`, action: `Run leadership through governance and systems, not heroics.`, evidence: `The company runs entirely on governance and strategy. It is a fully independent asset.` }
                ] },
                { id: 'innovation', symbol: 'Pr', color: '#8b5cf6', name: 'Product & Innovation', summary: 'Offer & innovation', icon: 'fa-solid fa-microchip', desc: `How you define, standardize, and improve what you sell to ensure profitability and market fit.`, levels: [
                    { level: 1, headline: `Everything is Custom`, action: `Define one repeatable core offer and stop reinventing each job.`, evidence: `We invent the solution for every new client. No standard pricing list.` },
                    { level: 2, headline: `Loose Consistency`, action: `Reuse proven scope and pricing rules instead of custom quoting.`, evidence: `We reuse old quotes, but every deal looks slightly different. Margins are a guess.` },
                    { level: 3, headline: `Standard Base Offer`, action: `Set a standard offer with target time and target margin.`, evidence: `We have a standard price list for core services. We know roughly how much time a job should take.` },
                    { level: 4, headline: `Scoped Packages`, action: `Sell clear packages with scope, price, and profitability review.`, evidence: `We sell defined packages (Scope A, B, or C). We track if a project was profitable or not.` },
                    { level: 5, headline: `Standardized Workflows`, action: `Move most revenue onto standard offers with standard workflows.`, evidence: `70% of revenue comes from standard offers. The team doesn\'t need to ask "how do I do this?"` },
                    { level: 6, headline: `Feedback Loop`, action: `Install a recurring client feedback loop into product updates.`, evidence: `We systematically collect client feedback and use it to update the product regularly.` },
                    { level: 7, headline: `Strategic Portfolio`, action: `Build logical upsells and a managed product portfolio.`, evidence: `We have logical upsells. Clients naturally buy more from us over time (Retention > 70%).` },
                    { level: 8, headline: `Data-Driven R&D`, action: `Fund and measure structured product experiments.`, evidence: `We have a budget for testing new ideas. We know exactly which products bring the best customers.` },
                    { level: 9, headline: `Modular Scale`, action: `Design modular offers that combine without custom rebuilds.`, evidence: `Customization is minimal (<10%). We can launch new combinations of products instantly.` },
                    { level: 10, headline: `Theoretical Perfection`, action: `Continuously optimize the offer mix and margins from market data.`, evidence: `The product suite manages itself. Margins are optimized continuously based on market data.` }
                ] },
                { id: 'brand', symbol: 'Br', color: '#ec4899', name: 'Brand & Authority', summary: 'Market position', icon: 'fa-solid fa-bullhorn', desc: `How the market perceives you and how consistently you generate attention.`, levels: [
                    { level: 1, headline: `Unknown Entity`, action: `Define one clear sentence that explains what you do and for whom.`, evidence: `No logo consistency. People cannot explain what we do in one sentence.` },
                    { level: 2, headline: `Digital Business Card`, action: `Make the website and socials clearly credible and consistent.`, evidence: `We have a website/socials, but they don\'t generate leads. We look legitimate, but quiet.` },
                    { level: 3, headline: `Defined Audience`, action: `Pick one audience and one message to repeat consistently.`, evidence: `We know exactly who we want to sell to. We post content, but don\'t track who reads it.` },
                    { level: 4, headline: `Occasional Campaigns`, action: `Run campaigns with simple source tracking.`, evidence: `We run ads or promos sometimes. Leads come in, but we don\'t know which source worked best.` },
                    { level: 5, headline: `Consistent Presence`, action: `Show up on a schedule with consistent visual identity.`, evidence: `We post on a schedule. Visuals are consistent. We know roughly what it costs to get a lead.` },
                    { level: 6, headline: `Automated Nurturing`, action: `Nurture leads automatically by interest segment.`, evidence: `Leads get automatic emails based on their interest. We segment our audience.` },
                    { level: 7, headline: `Multi-Channel Engine`, action: `Build multiple active channels so demand is not fragile.`, evidence: `We are active on multiple platforms. If one channel turns off, we still get leads.` },
                    { level: 8, headline: `Market Authority`, action: `Turn expertise into authority that brings inbound demand.`, evidence: `Customers come to us because of our reputation. Inbound leads > Outbound effort.` },
                    { level: 9, headline: `Brand Equity`, action: `Protect and strengthen brand assets that competitors cannot easily copy.`, evidence: `The brand itself is an asset. Competitors try to copy our messaging.` },
                    { level: 10, headline: `Theoretical Perfection`, action: `Become the default name in your niche.`, evidence: `Our brand is the default choice in our niche. Valuation is driven heavily by brand recognition.` }
                ] },
                { id: 'sales', symbol: 'Rv', color: '#10b981', name: 'Sales & Revenue', summary: 'Sales & cash flow', icon: 'fa-solid fa-chart-pie', desc: `How you convert interest into cash flow predictably.`, levels: [
                    { level: 1, headline: `Founder Sells Instinctively`, action: `Put every live opportunity in one visible pipeline.`, evidence: `No tracking. Deals live in the Founder\'s inbox/head. "I just feel who will buy."` },
                    { level: 2, headline: `Partial Tracking`, action: `Use one CRM consistently with basic sales stages.`, evidence: `We have a Sales Tool (CRM), but people forget to update it. No formal sales stages.` },
                    { level: 3, headline: `Visible Pipeline`, action: `Review pipeline weekly and project next month’s revenue.`, evidence: `We can see all active deals. We have a rough idea of next month\'s revenue.` },
                    { level: 4, headline: `Basic Targets`, action: `Set quotas, win-rate tracking, and standard proposals.`, evidence: `Salespeople have quotas. We track win rates. Proposals look professional and consistent.` },
                    { level: 5, headline: `Predictable Monthly Revenue`, action: `Forecast monthly revenue within a reasonable band.`, evidence: `We verify deals against a checklist. We hit our monthly forecast within 20% accuracy.` },
                    { level: 6, headline: `Sales Playbook`, action: `Document the sales playbook and train every seller to it.`, evidence: `New hires are trained on "The Way We Sell." Everyone uses the same scripts and steps.` },
                    { level: 7, headline: `Metrics-Driven Management`, action: `Manage sales by activity, conversion, and quota metrics.`, evidence: `80% of reps hit quota. We know exactly how many activities it takes to get 1 deal.` },
                    { level: 8, headline: `Integrated Revenue Ops`, action: `Connect marketing, sales, and delivery handoffs.`, evidence: `Sales and Marketing share data. Handoffs to Operations are automated.` },
                    { level: 9, headline: `Scalable Engine`, action: `Remove dependence on hero sellers with a repeatable process.`, evidence: `Growth does not depend on "Hero Salespeople." The process works for anyone.` },
                    { level: 10, headline: `Theoretical Perfection`, action: `Run a highly predictable, mostly recurring revenue engine.`, evidence: `Forecast accuracy ±5%. >70% of revenue is recurring/contracted. The machine runs itself.` }
                ] },
                { id: 'success', symbol: 'Sc', color: '#06b6d4', name: 'Customer Success & Retention', summary: 'Retention & expansion', icon: 'fa-solid fa-shield-halved', desc: `How you ensure clients stay, buy more, and refer others.`, levels: [
                    { level: 1, headline: `Firefighting`, action: `Create one place to log and own client issues.`, evidence: `Clients text the founder when angry. No central logs of issues.` },
                    { level: 2, headline: `Shared Inbox`, action: `Give support a shared inbox and a named owner.`, evidence: `We have a support email, but response times are random. No one "owns" the problem.` },
                    { level: 3, headline: `Ticketing System`, action: `Use a ticketing system for every client issue.`, evidence: `All issues are logged in a tool. We can see open tickets, but we are slow to close them.` },
                    { level: 4, headline: `Basic Metrics`, action: `Track response time and recurring complaints.`, evidence: `We measure response time (e.g., <24h). We identify recurring complaints.` },
                    { level: 5, headline: `Satisfaction Tracking`, action: `Measure satisfaction and close issues consistently.`, evidence: `We survey clients after service. Issues are resolved predictably.` },
                    { level: 6, headline: `Proactive Check-ins`, action: `Check in before problems surface and track sentiment.`, evidence: `We contact clients *before* they complain. We track client sentiment regularly.` },
                    { level: 7, headline: `Retention Focus`, action: `Give owners clear renewal and expansion responsibility.`, evidence: `Account managers have renewal targets. Upselling is a standard process.` },
                    { level: 8, headline: `Churn Prediction`, action: `Use health signals to spot churn risk early.`, evidence: `Data tells us a client is unhappy before they cancel. We have "Health Scores" for clients.` },
                    { level: 9, headline: `Unified Customer View`, action: `Unify customer history across sales, support, and delivery.`, evidence: `Sales, Support, and Ops all see the same client history. No "let me transfer you."` },
                    { level: 10, headline: `Theoretical Perfection`, action: `Turn clients into a durable referral engine.`, evidence: `Churn is near zero. Clients are our biggest marketing channel (Referrals).` }
                ] },
                { id: 'talent', symbol: 'Tl', color: '#ff6b35', name: 'Talent & Performance', summary: 'People & performance', icon: 'fa-solid fa-users', desc: `How you recruit, train, and manage your people.`, levels: [
                    { level: 1, headline: `Hiring Who We Know`, action: `Write basic role descriptions before hiring again.`, evidence: `No Job Descriptions. We hire friends or whoever is available immediately.` },
                    { level: 2, headline: `Basic Admin`, action: `Keep contracts and payroll clean and start simple onboarding.`, evidence: `Contracts are signed. Payroll works. No formal onboarding or review process.` },
                    { level: 3, headline: `Defined Roles`, action: `Define each role and how success is measured.`, evidence: `Everyone has a Job Description. They know *what* to do, but not how success is measured.` },
                    { level: 4, headline: `Structured Hiring`, action: `Standardize hiring, references, and onboarding.`, evidence: `We use interview templates. We check references. Onboarding is standardized.` },
                    { level: 5, headline: `Performance Reviews`, action: `Run regular documented performance reviews.`, evidence: `Every employee gets a formal review regularly. Feedback is documented.` },
                    { level: 6, headline: `Capacity Planning`, action: `Plan hiring from capacity and forecast, not pain.`, evidence: `We hire *before* the team burns out. Hiring aligns with sales forecasts.` },
                    { level: 7, headline: `Internal Growth`, action: `Create internal growth paths and promotion criteria.`, evidence: `We promote from within. We have clear career paths for staff.` },
                    { level: 8, headline: `Data-Driven HR`, action: `Track retention, engagement, and hiring quality.`, evidence: `We track turnover and engagement scores. Retention is high and predictable.` },
                    { level: 9, headline: `Talent Bench`, action: `Build a ready bench for critical roles.`, evidence: `We have a pipeline of candidates ready for key roles. No panic hiring.` },
                    { level: 10, headline: `Theoretical Perfection`, action: `Make performance standards self-sustaining through culture.`, evidence: `Teams manage their own performance. The culture sustains itself without the Founder.` }
                ] },
                { id: 'operations', symbol: 'Op', color: '#ef4444', name: 'Operations & Logistics', summary: 'Delivery & logistics', icon: 'fa-solid fa-wrench', desc: `How you deliver your product/service consistently.`, levels: [
                    { level: 1, headline: `Heroic Effort`, action: `Document the most repeated workflow and follow it every time.`, evidence: `We just "get it done." Quality depends entirely on who is working that day.` },
                    { level: 2, headline: `Manual Tracking`, action: `Replace ad hoc tracking with one shared delivery board.`, evidence: `We use spreadsheets/whiteboards to track projects. Deadlines are often missed.` },
                    { level: 3, headline: `Basic Templates`, action: `Use checklists and templates for common delivery work.`, evidence: `We have checklists for common tasks. Most work is delivered on time.` },
                    { level: 4, headline: `Quality Control`, action: `Add quality checks before work reaches the client.`, evidence: `Someone checks the work before it goes to the client. Errors are caught internally.` },
                    { level: 5, headline: `Standardized Delivery`, action: `Run delivery through a standard project system.`, evidence: `We use a Project Management tool consistently. Clients get regular status updates.` },
                    { level: 6, headline: `Resource Management`, action: `Plan workload and resources proactively.`, evidence: `We know who is busy and who is free. Workload is balanced proactively.` },
                    { level: 7, headline: `Integrated Ops`, action: `Connect the sales pipeline to delivery planning.`, evidence: `Delivery is linked to Sales. We forecast resource needs based on the pipeline.` },
                    { level: 8, headline: `Continuous Improvement`, action: `Review and improve core processes every quarter.`, evidence: `We audit our processes. Efficiency improves measurably every year.` },
                    { level: 9, headline: `Real-Time Visibility`, action: `Make project status and bottlenecks visible in real time.`, evidence: `Dashboards show the status of every project live. Bottlenecks are flagged automatically.` },
                    { level: 10, headline: `Theoretical Perfection`, action: `Build delivery that can double volume without breaking.`, evidence: `The system detects errors and corrects them. Can scale volume 2x without breaking.` }
                ] },
                { id: 'tech', symbol: 'Tc', color: '#6366f1', name: 'Technology & Intelligence', summary: 'Data & automation', icon: 'fa-solid fa-network-wired', desc: `How your software stack supports and automates the business.`, levels: [
                    { level: 1, headline: `Fragmented Tools`, action: `Consolidate core tools and secure access.`, evidence: `Data is everywhere (sticky notes, personal emails). Passwords are shared insecurely.` },
                    { level: 2, headline: `Shadow IT`, action: `Stop teams from choosing disconnected duplicate systems.`, evidence: `Teams pick their own tools. Duplicate data entries are common. No admin control.` },
                    { level: 3, headline: `Core Stack`, action: `Standardize the core stack and backups.`, evidence: `Everyone uses the same email/file system. We have backups.` },
                    { level: 4, headline: `Manual Reporting`, action: `Turn manual reporting into scheduled reporting.`, evidence: `We have data, but we have to export/import files to see it. Reports lag by a week.` },
                    { level: 5, headline: `Central Dashboards`, action: `Give the business daily dashboards it trusts.`, evidence: `Key numbers are visible daily. We trust the data in our systems.` },
                    { level: 6, headline: `Integrated Systems`, action: `Integrate core systems and automate data entry.`, evidence: `Our Sales tool talks to our Accounting tool. Automations handle basic data entry.` },
                    { level: 7, headline: `Data Culture`, action: `Make metrics part of daily work, not monthly review.`, evidence: `Staff checks metrics before starting work. Decisions are backed by system data.` },
                    { level: 8, headline: `Predictive Analytics`, action: `Use systems to forecast needs and trends.`, evidence: `The system forecasts trends (e.g., inventory needs, cash flow) automatically.` },
                    { level: 9, headline: `Secure & Compliant`, action: `Automate security, permissions, and audit trails.`, evidence: `Audit logs exist. Security is automated. We pass external IT audits easily.` },
                    { level: 10, headline: `Theoretical Perfection`, action: `Use intelligent automation for routine cognitive work.`, evidence: `AI agents handle routine cognitive tasks. The stack corrects itself.` }
                ] },
                { id: 'finance', symbol: 'Fn', color: '#14b8a6', name: 'Finance & Risk', summary: 'Risk & capital', icon: 'fa-solid fa-clipboard-check', desc: `How you manage money, compliance, and legal exposure.`, levels: [
                    { level: 1, headline: `Bank Balance Accounting`, action: `Categorize money properly and stop managing from bank balance alone.`, evidence: `We check the bank app to see if we can spend money. No categorization.` },
                    { level: 2, headline: `Tax Compliance Only`, action: `Review basic reports, not only year-end tax filings.`, evidence: `An accountant files our taxes once a year. We don\'t review reports.` },
                    { level: 3, headline: `Monthly P&L`, action: `Close monthly numbers and read the P&L.`, evidence: `We get a Profit & Loss statement every month. We know if we made money.` },
                    { level: 4, headline: `Cash Flow Forecasting`, action: `Forecast cash 90 days ahead.`, evidence: `We project cash 3 months out. We categorize expenses to see where money goes.` },
                    { level: 5, headline: `Budgeting`, action: `Set a budget and review variance monthly.`, evidence: `We set a budget at the start of the year and track variance monthly.` },
                    { level: 6, headline: `Risk Coverage`, action: `Standardize contracts and cover major operating risks.`, evidence: `Insurance is adequate. Contracts are standardized and signed for every deal.` },
                    { level: 7, headline: `Strategic Finance`, action: `Run major decisions through financial scenarios.`, evidence: `Decisions (hiring, expansion) are run through financial scenarios first.` },
                    { level: 8, headline: `Audit-Ready`, action: `Close books fast and keep every transaction supported.`, evidence: `Books are closed quickly after month-end. Every transaction has a receipt.` },
                    { level: 9, headline: `Proactive Risk Mgmt`, action: `Build contingency plans and maintain real cash runway.`, evidence: `We have contingency plans for recession or loss of key clients. Runway > 6 months.` },
                    { level: 10, headline: `Theoretical Perfection`, action: `Keep the business diligence-ready at all times.`, evidence: `Audited financials. Clean Data Room. Ready for Due Diligence at any moment.` }
                ] },
                { id: 'assets', symbol: 'As', color: '#a855f7', name: 'Knowledge & Assets', summary: 'Knowledge & IP', icon: 'fa-solid fa-book-open', desc: `How you document knowledge so the business doesn’t depend on memory.`, levels: [
                    { level: 1, headline: `Oral Tradition`, action: `Put critical know-how in writing outside people’s heads.`, evidence: `If you want to know how to do something, you ask Bob. If Bob leaves, we are in trouble.` },
                    { level: 2, headline: `Scattered Files`, action: `Clean up the shared drive and naming structure.`, evidence: `We have a central drive, but it\'s a mess. "I think I wrote that down somewhere."` },
                    { level: 3, headline: `Basic Documentation`, action: `Keep documentation and meeting notes in one organized place.`, evidence: `We have a shared folder structure. Meeting notes are kept centrally.` },
                    { level: 4, headline: `Standard Templates`, action: `Use standard templates and clear communication channels.`, evidence: `We use the same templates for common docs. Communication channels are organized.` },
                    { level: 5, headline: `Central Wiki / Playbook`, action: `Build a central playbook for core processes.`, evidence: `Core processes are written down (SOPs). New hires can read how to do the job.` },
                    { level: 6, headline: `Compliance & Safety`, action: `Document compliance, privacy, and safety rules.`, evidence: `Data privacy and safety rules are documented and followed.` },
                    { level: 7, headline: `Integrated Knowledge`, action: `Make knowledge searchable and access-controlled.`, evidence: `Search works. You can find any file quickly. Single Sign-On (SSO) used.` },
                    { level: 8, headline: `Systemized Operations`, action: `Put checklists behind most recurring work.`, evidence: `90% of recurring work has a checklist. The business is franchise-ready.` },
                    { level: 9, headline: `Cross-Functional Sync`, action: `Map dependencies between teams and handoffs.`, evidence: `Teams know how their work affects others. Dependencies are mapped.` },
                    { level: 10, headline: `Theoretical Perfection`, action: `Treat documentation as protected operating IP.`, evidence: `The business operates fully documented. Anyone can step in. True IP asset.` }
                ] }
            ]
        }
    };

    const activeYear = 2026;
    const framework = frameworks[activeYear];
    const departmentMap = Object.fromEntries(framework.departments.map((department) => [department.id, department]));

    window.BASE100_DATA = {
        activeYear,
        frameworks,
        year: framework.year,
        departments: framework.departments,
        departmentMap,
        getLevel(departmentId, level) {
            return departmentMap[departmentId]?.levels.find((item) => item.level === level) || null;
        }
    };
})();