const BASE100_2026 = {
  "framework": "BASE-100",
  "revision": "2026.1",
  "schema_version": "2.0",
  "about": "The Open Standard for Business Maturity",
  "copyright": "2026 BASE-100 Institute",
  "authors": "BASE-100 Institute and Quinten -Q- Marcelis",
  "framework_description": "The BASE-100 Global Standard is an open, humand and machine-readable reference model for business operational maturity. It provides a universal 10x10 matrix that maps a company's evolution from founder-dependent heroics to a self-sustaining, sovereign asset. The framework is built on the philosophy that the vast majority of business operations—the 'Systemic Core'—consist of universal, solved sciences. By standardizing this core, the framework liberates the 'Differentiated Edge'—the unique vision and insight where true competitive advantage lives.",
  "governance_and_curation": {
    "expert_review": "Every milestone in this 10x10 matrix is curated and reviewed by a global council of world-leading CXOs, operators, and institutional researchers. Their mandate is to identify the 100 highest-leverage actions that separate high-value, predictable assets from fragile, amateur operations.",
    "the_rising_bar": "As technology and global markets evolve, the 'Floor' of business excellence rises. The BASE-100 is updated annually to ensure that Level 5 in 2026 represents the current global competitive standard, not yesterday's best practices."
  },
  "purpose_and_utility": {
    "what_it_is_for": "It is designed for founders, operators, and AI agents to objectively identify the single greatest constraint in a business system. It provides a pre-defined path of 100 milestones, each verified by evidence, functioning as the 'ISO standard' for internal operations.",
    "what_it_is_not": "It is not a creative strategy or a marketing playbook. It does not dictate *what* you should build; it ensures the *machine* that builds and sells it is engineered for maximum predictability and valuation."
  },
  "alignment": {
    "rigidity": "Critics may argue the system is too rigid for 'creative' firms. This is a misunderstanding of the standard: BASE-100 does not dictate the 'how' (tactics), but defines the 'what' (functional requirements). By standardizing the boring 99%, the framework actually liberates the creative 1% from administrative friction.",
    "uniqueness": "The 'we are different' argument is addressed by separating the business 'Engine' from the 'Driver.' While every destination is unique, every engine requires fuel, timing, and exhaust. BASE-100 is the blueprint for that engine.",
    "post_ai": "In the post-AI economy, human labor is no longer the primary constraint; operational context is. This framework provides the 'Common Context Protocol' (CCP) that allows AI agents to understand exactly where they sit in a company's evolution. It transforms a messy human organization into a structured digital environment where AI can execute tasks with 100% alignment to the founder's intent."
  },
  "definitions": {
    "product": "Any repeatable unit of value delivered to a customer, whether a physical good, software, or a professional service.",
    "offer": "A specific combination of one or more products, a price, and a defined target audience.",
    "customer": "An entity that has provided currency in exchange for an offer.",
    "lead": "A documented entity that has expressed intent to purchase but has not yet provided currency.",
    "currency": "The primary medium of exchange (Money) used in the business's legal jurisdiction.",
    "evidence": "The observable, verifiable artifact (document, system, or record) that proves a level has been achieved.",
    "complexity": "1-10 scale of the cognitive or technical difficulty to implement the level.",
    "impact": "1-10 scale of the increase in company valuation or profit potential upon completion.",
    "CRM": "The central database for all sales leads and customer history.",
    "SOP": "A step-by-step recipe for completing a recurring task.",
    "KPI": "A numeric metric that signals success or failure of a specific objective.",
    "P&L": "Profit and Loss statement showing income vs. expenses.",
    "LTV/CAC": "The value of a customer over time vs. the cost to acquire them.",
    "frequency": "A numeric value representing the required audit cycles per calendar year (e.g., 1 = Annual, 12 = Monthly, 52 = Weekly, 250 = Daily/Per Business Day).",
    "system": "The collection of the 10 domains working in synchronous logic.",
    "maturity": "The degree to which a process is documented and independent of individual heroics.",
    "constraint": "The specific cell currently limiting the throughput of the entire system."
  },
  "stages": {
    "SURVIVAL": "Levels 1-3. Focus: Cash & Clarity.",
    "GROWTH": "Levels 4-7. Focus: Systems & Delegation.",
    "SCALE": "Levels 8-10. Focus: Governance & Independence."
  },
  "extensions": [
    {
      "gap": "Your 1% of uniqueness is 99% of the value",
      "solution": "Your secret sauce or added value resides largely in product, operations and assets, from where it radiates to marketing and sales."
    },
    {
      "gap": "Specific Industry 'How-To'",
      "solution": "Industry-specific SOP Libraries (e.g., ISO 9001 for Manufacturing, SOC2 for SaaS)."
    },
    {
      "gap": "Human & Cultural Change",
      "solution": "Leadership Coaching and Organizational Development Frameworks."
    },
    {
      "gap": "Technical Implementation",
      "solution": "Software-specific implementation partners (e.g., CRM Consultants, ERP Integrators)."
    }
  ],
  "domains": [
    {
      "id": "LD",
      "name": "Vision & Leadership",
      "purpose": "The Intent",
      "cxo_persona": "Chief Executive Officer",
      "description": "How the organization is led, how decisions are made, and how strategy turns into action.",
      "levels": [
        {
          "level": 0,
          "headline": "Strategic Foundation",
          "observation": "Mature organizations operate from a documented Strategic Intent that defines the mission, 10-year vision, and core values as the permanent logic for all leadership decisions.",
          "weights": {
            "impact": 10,
            "complexity": 5,
            "time_to_implement": 5,
            "direct_cost": 1
          },
          "audit_binary": "Is the mission, 10-year vision, and core values documented and signed by the founder?",
          "evidence": "Strategic Intent Document.",
          "failure_signal": "The organization lacks a 'North Star,' causing team members to pull in different directions or prioritize low-value tasks.",
          "prerequisite": null,
          "review_frequency": 1,
          "questions_to_answer": [
            "What specific problem does this business exist to solve?",
            "Where will this company be in 10 years?",
            "What are the 3-5 non-negotiable behavioral values?",
            "What is our unique Strategic Angle?",
            "How will the Founder's role evolve through the 10 levels?"
          ]
        },
        {
          "level": 1,
          "headline": "Moving Beyond Survival",
          "observation": "Stable firms eliminate the 'survival' mindset by documenting a single goal for the current 90-day period, providing a target for independent action.",
          "weights": {
            "impact": 10,
            "complexity": 1,
            "time_to_implement": 1,
            "direct_cost": 1
          },
          "audit_binary": "Is there one written goal for the current 90-day period visible to the entire team?",
          "evidence": "Quarterly Objective Document.",
          "failure_signal": "The plan is simply to 'survive.' Everyone waits for the founder to tell them what to do today.",
          "prerequisite": "LD.0",
          "review_frequency": 4
        },
        {
          "level": 2,
          "headline": "Out of the Founder's Head",
          "observation": "Successful leadership establishes a weekly pulse by putting current priorities in writing, stopping the team from guessing what is most important.",
          "weights": {
            "impact": 8,
            "complexity": 2,
            "time_to_implement": 1,
            "direct_cost": 1
          },
          "audit_binary": "Does the leader publish the top company priority in writing every week?",
          "evidence": "Weekly Leadership Announcement Archive.",
          "failure_signal": "Priorities change frequently based on the founder's mood; the team often guesses what is most important.",
          "prerequisite": "LD.1",
          "review_frequency": 52
        },
        {
          "level": 3,
          "headline": "Functional Accountability",
          "observation": "Predictable companies use an Accountability Chart to define roles and decision rights, ensuring the ultimate owner of every outcome is known.",
          "weights": {
            "impact": 9,
            "complexity": 4,
            "time_to_implement": 3,
            "direct_cost": 1
          },
          "audit_binary": "Is there a visual chart showing a single name owning every core function of the business?",
          "evidence": "Functional Accountability Chart.",
          "failure_signal": "Roles are roughly defined; people often step over each other or assume someone else is handling a task.",
          "prerequisite": "LD.0",
          "review_frequency": 4
        },
        {
          "level": 4,
          "headline": "Management Rhythm",
          "observation": "Institutions at this level run fixed leadership meetings with standard agendas, recording all decisions to prevent status-update drift.",
          "weights": {
            "impact": 7,
            "complexity": 5,
            "time_to_implement": 4,
            "direct_cost": 2
          },
          "audit_binary": "Do leadership meetings happen on a fixed, unbreakable schedule with written minutes?",
          "evidence": "Leadership Meeting Minutes.",
          "failure_signal": "Meetings happen sporadically or without agendas; decisions are often forgotten or re-debated a week later.",
          "prerequisite": "LD.3",
          "review_frequency": 52
        },
        {
          "level": 5,
          "headline": "Metric-Based Ownership",
          "observation": "Mature organizations empower managers with specific targets (KPIs) and report on them monthly, removing the founder as the only decision-maker.",
          "weights": {
            "impact": 9,
            "complexity": 6,
            "time_to_implement": 5,
            "direct_cost": 3
          },
          "audit_binary": "Does every department head own at least one numeric target that they report on monthly?",
          "evidence": "Monthly KPI Performance Reports.",
          "failure_signal": "Managers check in with the Founder before making any decision; the Founder is a bottleneck for approvals.",
          "prerequisite": "LD.3",
          "review_frequency": 12
        },
        {
          "level": 6,
          "headline": "Data-First Decisions",
          "observation": "High-leverage leaders use dashboards rather than opinions to make choices, resulting in a forecasting accuracy of ~80%.",
          "weights": {
            "impact": 8,
            "complexity": 7,
            "time_to_implement": 6,
            "direct_cost": 5
          },
          "audit_binary": "Are all major strategic decisions supported by a written data report before approval?",
          "evidence": "Decision Log linked to Dashboard Data.",
          "failure_signal": "Arguments in meetings are based on who has the loudest voice or best intuition rather than facts.",
          "prerequisite": "TI.5",
          "review_frequency": 12
        },
        {
          "level": 7,
          "headline": "Founder Exits Operations",
          "observation": "High-valuation assets operate with the founder removed from daily tactical control, with department heads managing their own budgets.",
          "weights": {
            "impact": 10,
            "complexity": 8,
            "time_to_implement": 10,
            "direct_cost": 7
          },
          "audit_binary": "Can the business operate at full capacity for 30 days without any contact from the Founder?",
          "evidence": "30-Day Founder Absence Log.",
          "failure_signal": "The company stops growing or quality fails when the founder is offline or on vacation.",
          "prerequisite": "OP.5",
          "review_frequency": 12
        },
        {
          "level": 8,
          "headline": "External Governance",
          "observation": "Sovereign assets utilize external advisors or non-executives to review strategy quarterly, enforcing written policies.",
          "weights": {
            "impact": 6,
            "complexity": 7,
            "time_to_implement": 5,
            "direct_cost": 6
          },
          "audit_binary": "Does an external group of experts review the company strategy at least 4 times per year?",
          "evidence": "Quarterly Advisory Board Minutes.",
          "failure_signal": "Leadership has 'groupthink' or ignores market risks because no one is there to challenge them.",
          "prerequisite": "FR.3",
          "review_frequency": 4
        },
        {
          "level": 9,
          "headline": "Leadership Backup",
          "weights": {
            "impact": 7,
            "complexity": 9,
            "time_to_implement": 8,
            "direct_cost": 7
          },
          "observation": "Valuable institutions build redundancy for every key role; any leader can be replaced without the business suffering.",
          "audit_binary": "Is there a designated and trained successor for every key leadership role?",
          "evidence": "Succession Matrix and Training Logs.",
          "failure_signal": "The departure of one key leader would cause a >20% drop in revenue or a total stop in delivery.",
          "prerequisite": "LD.3",
          "review_frequency": 1
        },
        {
          "level": 10,
          "headline": "Independent Institution",
          "weights": {
            "impact": 10,
            "complexity": 10,
            "time_to_implement": 10,
            "direct_cost": 9
          },
          "observation": "Theoretical perfection occurs when the company runs entirely on a documented governance system. It is a fully independent asset.",
          "audit_binary": "Does the company run entirely on a documented governance system rather than individual heroics?",
          "evidence": "Company Constitution.",
          "failure_signal": "Strategic decisions still require a 'genius' or 'hero' to intervene rather than following protocol.",
          "prerequisite": "AI.10",
          "review_frequency": 1
        }
      ]
    },
    {
      "id": "PR",
      "name": "Product & Innovation",
      "purpose": "The Value",
      "cxo_persona": "Chief Product Officer",
      "description": "How the business defines, builds, and evolves its repeatable units of value.",
      "levels": [
        {
          "level": 0,
          "headline": "Product Intent & Market Fit",
          "observation": "Mature organizations operate from a documented Product Strategy that defines the unit of value, the target niche, and the economic logic required for the business to scale profitably.",
          "weights": {
            "impact": 10,
            "complexity": 6,
            "time_to_implement": 6,
            "direct_cost": 2
          },
          "audit_binary": "Is the core offer's value proposition, target audience, and competitive edge documented and validated?",
          "evidence": "Product Strategy Document.",
          "failure_signal": "Product development is driven by random 'feature requests' rather than strategic intent; the company struggles to explain its competitive edge.",
          "prerequisite": "LD.0",
          "review_frequency": 1,
          "questions_to_answer": [
            "What is the one primary 'Product' or 'Service' we are building around?",
            "Who is the 'Ideal Customer' (and who is it definitely NOT for)?",
            "What are the top 3 results the customer gets (Outcomes, not features)?",
            "How much does it cost us to deliver (Time/Materials), and what is the target profit margin?",
            "How is this different or better than existing alternatives?",
            "What is the 'Minimum Viable Version' of this product we can sell right now?"
          ]
        },
        {
          "level": 1,
          "headline": "End of Custom Invention",
          "observation": "Stable companies eliminate the cost of 'inventing the solution' for every new client by defining one repeatable core offer, standardizing the unit of work.",
          "weights": {
            "impact": 10,
            "complexity": 2,
            "time_to_implement": 2,
            "direct_cost": 1
          },
          "audit_binary": "Is there a single, written 'Standard Offer' that the company sells to 100% of new leads?",
          "evidence": "Standard Offer Menu.",
          "failure_signal": "Everything is custom; we invent a unique solution for every new client and margins are a guess.",
          "prerequisite": "PR.0",
          "review_frequency": 4
        },
        {
          "level": 2,
          "headline": "Price Standardization",
          "observation": "Successful firms establish a fixed pricing logic. This ensures consistency and trust while removing the need for the founder to 'calculate' prices during sales calls.",
          "weights": {
            "impact": 8,
            "complexity": 3,
            "time_to_implement": 2,
            "direct_cost": 1
          },
          "audit_binary": "Does every customer pay based on the same public or internal price list?",
          "evidence": "Master Price Sheet.",
          "failure_signal": "We reuse old quotes, but every deal looks slightly different; pricing feels arbitrary to the customer.",
          "prerequisite": "PR.1",
          "review_frequency": 4
        },
        {
          "level": 3,
          "headline": "Target Margin Enforcement",
          "observation": "Data-literate organizations calculate the exact labor and materials required for one unit. They raise prices or reduce costs if the gross margin falls below the strategic floor.",
          "weights": {
            "impact": 9,
            "complexity": 4,
            "time_to_implement": 3,
            "direct_cost": 1
          },
          "audit_binary": "Is the gross margin known and met for every individual sale?",
          "evidence": "Unit Profitability Log.",
          "failure_signal": "The company has a standard base offer but realizes too late that specific jobs were unprofitable due to hidden costs.",
          "prerequisite": "PR.2",
          "review_frequency": 12
        },
        {
          "level": 4,
          "headline": "Tiered Packaging",
          "weights": {
            "impact": 7,
            "complexity": 5,
            "time_to_implement": 4,
            "direct_cost": 2
          },
          "observation": "Mature businesses sell defined packages (e.g., Bronze, Silver, Gold). They prohibit 'pick and mix' scopes to prevent custom work from breaking the delivery system.",
          "audit_binary": "Are there three clear, fixed packages with standard scopes visible in sales materials?",
          "evidence": "Tiered Sales Deck.",
          "failure_signal": "Clients frequently negotiate the scope outside of set packages, creating operational 'debt' and delivery delays.",
          "prerequisite": "PR.1",
          "review_frequency": 4
        },
        {
          "level": 5,
          "headline": "Standardized Workflows",
          "observation": "At this level, the majority of revenue comes from standard offers with documented 'recipes.' The team executes work without requiring founder intervention on 70%+ of tasks.",
          "weights": {
            "impact": 8,
            "complexity": 7,
            "time_to_implement": 6,
            "direct_cost": 3
          },
          "audit_binary": "Does >70% of revenue come from standard offers where the team follows a Master Production Manual?",
          "evidence": "Master Production Manual.",
          "failure_signal": "The team must ask 'how do I do this?' for common tasks; quality is inconsistent based on who is working.",
          "prerequisite": "OP.1",
          "review_frequency": 12
        },
        {
          "level": 6,
          "headline": "Product Feedback Loop",
          "observation": "Successful organizations update their products every 90 days based on systematic customer feedback, ensuring the value proposition remains superior to market alternatives.",
          "weights": {
            "impact": 7,
            "complexity": 5,
            "time_to_implement": 4,
            "direct_cost": 2
          },
          "audit_binary": "Is customer feedback collected systematically and used to update the product every 90 days?",
          "evidence": "Product Improvement Log.",
          "failure_signal": "The product is stagnant; we only find out about needed improvements when a customer cancels.",
          "prerequisite": "CS.5",
          "review_frequency": 4
        },
        {
          "level": 7,
          "headline": "The Value Ladder",
          "observation": "High-valuation firms design a 'Next Buy' product that naturally solves the customer's next problem, increasing lifetime value without additional acquisition cost.",
          "weights": {
            "impact": 8,
            "complexity": 6,
            "time_to_implement": 5,
            "direct_cost": 4
          },
          "audit_binary": "Is there a logical 'Next Buy' product that increases the Lifetime Value (LTV) of a customer?",
          "evidence": "Product Value Map.",
          "failure_signal": "We have logical upsells, but clients don't buy them; retention or repeat purchase rates are below 70%.",
          "prerequisite": "PR.4",
          "review_frequency": 2
        },
        {
          "level": 8,
          "headline": "Data-Driven R&D",
          "observation": "Mature firms allocate a dedicated budget for testing new product variations. They use small-scale experiments to prove demand before committing to full production.",
          "weights": {
            "impact": 6,
            "complexity": 8,
            "time_to_implement": 7,
            "direct_cost": 6
          },
          "audit_binary": "Is there a dedicated budget and process for testing new product variations?",
          "evidence": "R&D Experiment Dashboard.",
          "failure_signal": "The company spends significant capital building features based on 'gut feeling' that eventually fail in the market.",
          "prerequisite": "FR.5",
          "review_frequency": 4
        },
        {
          "level": 9,
          "headline": "Modular Architecture",
          "observation": "Advanced businesses build products from standard 'components.' This allows for the instant launch of new variations by rearranging existing modules rather than custom engineering.",
          "weights": {
            "impact": 8,
            "complexity": 9,
            "time_to_implement": 9,
            "direct_cost": 8
          },
          "audit_binary": "Is the product built from standard 'components' that can be combined without custom engineering?",
          "evidence": "Modular Architecture Map.",
          "failure_signal": "Launching a new offer combination requires weeks of custom development or process redesign.",
          "prerequisite": "TI.6",
          "review_frequency": 1
        },
        {
          "level": 10,
          "headline": "Autonomous Optimization",
          "observation": "Theoretical perfection is reached when the product suite adjusts its features and pricing automatically based on real-time market data and usage signals.",
          "weights": {
            "impact": 10,
            "complexity": 10,
            "time_to_implement": 10,
            "direct_cost": 10
          },
          "audit_binary": "Does the product suite adjust its features and pricing automatically based on market and usage data?",
          "evidence": "Automated Product Management System Logs.",
          "failure_signal": "Pricing and features are manually updated once a year; the product is slow to respond to competitor movements.",
          "prerequisite": "TI.10",
          "review_frequency": 4
        }
      ]
    },
    {
      "id": "BM",
      "name": "Brand & Marketing",
      "purpose": "The Attraction",
      "cxo_persona": "Chief Marketing Officer",
      "description": "How the business generates attention, establishes authority, and creates a predictable flow of leads.",
      "levels": [
        {
          "level": 0,
          "headline": "Marketing Intent & Audience",
          "observation": "Mature organizations operate from a documented understanding of who they serve and why they are the superior choice. Strategic intent ensures every marketing unit spent targets the highest-value audience with high-precision messaging.",
          "weights": {
            "impact": 10,
            "complexity": 5,
            "time_to_implement": 5,
            "direct_cost": 2
          },
          "audit_binary": "Are the Ideal Customer Profile (ICP), the Core Message, and the Competitive Position documented?",
          "evidence": "Brand Strategy Document.",
          "failure_signal": "Messaging is disjointed and fails to resonate with a specific group; the company changes its 'angle' every few weeks.",
          "prerequisite": "LD.0",
          "review_frequency": 1,
          "questions_to_answer": [
            "Who is the Ideal Customer Profile (ICP) in terms of their problems and industry?",
            "What is the one 'Big Promise' that separates the brand from all alternatives?",
            "What are the top 3 'Authority Pillars' (topics) the brand must be known for?",
            "Where does the target audience spend their time online and offline?",
            "What is the 'Visual Soul' (tone and mood) that reflects company values?",
            "What is the brand's 'Category Name' (e.g., Consultant, Tool, or Platform)?"
          ]
        },
        {
          "level": 1,
          "headline": "Moving from Unknown Entity",
          "observation": "Successful brands eliminate market confusion by using a single, clear sentence to explain what they do and for whom. They ensure consistent identity across all touchpoints to remove friction.",
          "weights": {
            "impact": 10,
            "complexity": 1,
            "time_to_implement": 1,
            "direct_cost": 1
          },
          "audit_binary": "Does the public brand explain what you do and for whom in one clear sentence?",
          "evidence": "Value Proposition Header (Screenshot).",
          "failure_signal": "No logo consistency; people cannot explain what the company does in one sentence.",
          "prerequisite": "BM.0",
          "review_frequency": 4
        },
        {
          "level": 2,
          "headline": "Credible Digital Storefront",
          "observation": "At this level, organizations maintain a digital presence that acts as an automated trust-builder. They move beyond a 'digital business card' to a professional storefront that generates initial interest.",
          "weights": {
            "impact": 7,
            "complexity": 3,
            "time_to_implement": 3,
            "direct_cost": 3
          },
          "audit_binary": "Is the digital presence (Website/Socials) clearly credible, consistent, and professional?",
          "evidence": "Live Website and Social Profiles following Brand Guide.",
          "failure_signal": "Digital presence looks amateur, quiet, or inconsistent; links are broken and profiles are outdated.",
          "prerequisite": "BM.1",
          "review_frequency": 4
        },
        {
          "level": 3,
          "headline": "Defined Audience Engagement",
          "observation": "Stable organizations provision value to a specific niche, moving away from 'broadcasting to everyone.' They create content pillars that speak directly to the ICP's identified problems.",
          "weights": {
            "impact": 8,
            "complexity": 5,
            "time_to_implement": 6,
            "direct_cost": 3
          },
          "audit_binary": "Is content specifically designed for and reaching the documented ICP?",
          "evidence": "Audience Engagement/Reach Report.",
          "failure_signal": "Content is posted but we don't track who reads it; inbound leads don't match the ICP.",
          "prerequisite": "BM.0",
          "review_frequency": 12
        },
        {
          "level": 4,
          "headline": "The Lead Capture System",
          "observation": "Data-driven brands turn 'visitors' into 'leads' without requiring an immediate purchase. They offer high-value educational assets in exchange for contact information to build a proprietary audience.",
          "weights": {
            "impact": 9,
            "complexity": 4,
            "time_to_implement": 4,
            "direct_cost": 2
          },
          "audit_binary": "Is there a functioning way for visitors to download/sign-up in exchange for contact info?",
          "evidence": "Live Opt-in Form/Lead Magnet.",
          "failure_signal": "Visitors leave the website without leaving any trace; we have to pay for the same audience over and over.",
          "prerequisite": "TI.3",
          "review_frequency": 12
        },
        {
          "level": 5,
          "headline": "Consistent Demand Rhythm",
          "observation": "Mature organizations establish a 'Drumbeat.' They show up on a fixed schedule with consistent visuals, ensuring the brand remains top-of-mind within the target market.",
          "weights": {
            "impact": 8,
            "complexity": 6,
            "time_to_implement": 8,
            "direct_cost": 5
          },
          "audit_binary": "Is marketing activity happening on a fixed, documented, and fully executed schedule?",
          "evidence": "Marketing Calendar (last 30 days).",
          "failure_signal": "Marketing is inconsistent (feast or famine); the team only posts or runs ads when sales are slow.",
          "prerequisite": "PR.1",
          "review_frequency": 12
        },
        {
          "level": 6,
          "headline": "Automated Nurturing",
          "observation": "Sovereign assets automate the education of new leads. Systems deliver tailored content over time to move prospects closer to a buying decision without manual intervention.",
          "weights": {
            "impact": 7,
            "complexity": 6,
            "time_to_implement": 5,
            "direct_cost": 4
          },
          "audit_binary": "Do new leads receive a series of automated emails designed to educate and convert?",
          "evidence": "Automated Welcome Sequence Workflow.",
          "failure_signal": "Leads get 'cold' because follow-up is manual and inconsistent; the team spends hours answering basic questions.",
          "prerequisite": "TI.6",
          "review_frequency": 4
        },
        {
          "level": 7,
          "headline": "Multi-Channel Engine",
          "observation": "Advanced brands build redundancy in their lead sources. If one algorithm or platform fails, the company still receives demand from a second, independent channel.",
          "weights": {
            "impact": 7,
            "complexity": 7,
            "time_to_implement": 7,
            "direct_cost": 7
          },
          "audit_binary": "Does the company receive leads from at least two independent, active channels?",
          "evidence": "Lead Source Distribution Report.",
          "failure_signal": "Total dependence on one platform (e.g., Facebook Ads or LinkedIn); an algorithm change is an existential threat.",
          "prerequisite": "BM.5",
          "review_frequency": 4
        },
        {
          "level": 8,
          "headline": "Market Authority Status",
          "weights": {
            "impact": 9,
            "complexity": 8,
            "time_to_implement": 10,
            "direct_cost": 5
          },
          "observation": "At this stage, expertise is converted into authority. Customers seek the brand because of its reputation; inbound interest exceeds the effort of outbound sales.",
          "audit_binary": "Are inbound leads the primary driver of growth over outbound prospecting?",
          "evidence": "Inbound vs Outbound Ratio Report (>1:1).",
          "failure_signal": "The company is treated as a commodity; it only wins by having the lowest price or the loudest sales pitch.",
          "prerequisite": "BM.3",
          "review_frequency": 4
        },
        {
          "level": 9,
          "headline": "Brand Equity Moat",
          "observation": "Mature organizations treat the brand itself as a proprietary asset. Competitors try to copy the messaging, and the brand's name alone reduces customer acquisition cost.",
          "weights": {
            "impact": 8,
            "complexity": 9,
            "time_to_implement": 9,
            "direct_cost": 8
          },
          "audit_binary": "Is the brand consistently cited/featured by influencers or third-party publications?",
          "evidence": "Press/Mention Log and Trademark Registry.",
          "failure_signal": "Competitors easily steal our 'vibe' and messaging; the market sees us as interchangeable with others.",
          "prerequisite": "AI.6",
          "review_frequency": 1
        },
        {
          "level": 10,
          "headline": "Category Default Status",
          "weights": {
            "impact": 10,
            "complexity": 10,
            "time_to_implement": 10,
            "direct_cost": 10
          },
          "observation": "Theoretical perfection occurs when the brand becomes the 'default choice' in its niche. At this level, valuation is driven heavily by brand recognition and trust.",
          "audit_binary": "Is the brand name the dominant search term for the category in its market?",
          "evidence": "Market Share Leader Data and Brand Search Volume.",
          "failure_signal": "Potential clients still ask 'Who are you?' after searching for our specific category of solution.",
          "prerequisite": "AI.10",
          "review_frequency": 1
        }
      ]
    },
    {
      "id": "RS",
      "name": "Revenue & Sales",
      "purpose": "The Conversion",
      "cxo_persona": "Chief Revenue Officer",
      "description": "How the business converts leads into paying customers, manages the sales pipeline, and forecasts future income.",
      "levels": [
        {
          "level": 0,
          "headline": "Sales Intent & Revenue Model",
          "observation": "Mature organizations operate from a documented Revenue Strategy that defines the sales methodology and ensures the team only pursues prospects meeting strict 'Ideal Deal' criteria.",
          "weights": {
            "impact": 10,
            "complexity": 5,
            "time_to_implement": 5,
            "direct_cost": 2
          },
          "audit_binary": "Are the sales methodology, revenue targets, and ideal deal criteria documented and validated?",
          "evidence": "Revenue Strategy Document.",
          "failure_signal": "The company routinely accepts 'Bad Fit' clients who are difficult to serve; revenue feels unpredictable and dependent on founder heroics.",
          "prerequisite": "LD.0",
          "review_frequency": 1,
          "questions_to_answer": [
            "What is our primary Revenue Model (Subscription, Performance, One-time)?",
            "What are the 3 'Must-Have' criteria for a lead to be 'Qualified'?",
            "What is the target Sales Cycle length (Days from first contact to cash)?",
            "What is our Value-Based sales message (Why us over a cheaper option)?",
            "What is the maximum Customer Acquisition Cost (CAC) we accept per deal?",
            "Who has final authority for contracts and discounts?"
          ]
        },
        {
          "level": 1,
          "headline": "Transition from Instinctive Selling",
          "observation": "Stable companies eliminate 'Founder-Instinct' selling by recording every active opportunity in a single, visible pipeline, ensuring data lives in a system rather than an inbox.",
          "weights": {
            "impact": 10,
            "complexity": 2,
            "time_to_implement": 2,
            "direct_cost": 2
          },
          "audit_binary": "Is every active sales opportunity recorded in one central, shared location?",
          "evidence": "Central Sales Pipeline (CRM or Digital Board).",
          "failure_signal": "No formal tracking; deals live in the founder's head or personal inbox; we 'feel' who will buy rather than knowing.",
          "prerequisite": "RS.0",
          "review_frequency": 52
        },
        {
          "level": 2,
          "headline": "Standard Sales Stages",
          "observation": "Successful firms use a structured CRM with formalized sales stages. They move away from 'forgetting to update' by making the system the mandatory source of truth for every stage transition.",
          "weights": {
            "impact": 8,
            "complexity": 3,
            "time_to_implement": 3,
            "direct_cost": 1
          },
          "audit_binary": "Are there 5 clear stages defined for every sale, and is every deal mapped to one?",
          "evidence": "Active CRM with 100% stage mapping.",
          "failure_signal": "Deals are tracked but status is vague; leadership cannot see exactly where deals are 'stuck' without asking a salesperson.",
          "prerequisite": "RS.1",
          "review_frequency": 52
        },
        {
          "level": 3,
          "headline": "Weighted Pipeline Visibility",
          "observation": "Data-literate firms project revenue based on the mathematical probability of deals in each stage. This moves leadership from 'hoping' for revenue to 'managing' a forecast.",
          "weights": {
            "impact": 7,
            "complexity": 4,
            "time_to_implement": 4,
            "direct_cost": 1
          },
          "audit_binary": "Is next month’s revenue projected based on the probability of deals in the pipeline?",
          "evidence": "Weighted Revenue Forecast Report.",
          "failure_signal": "Leadership has only a 'rough idea' of next month's cash flow; there is no distinction between a lead and a high-probability demo.",
          "prerequisite": "RS.2",
          "review_frequency": 52
        },
        {
          "level": 4,
          "headline": "Professional Sales Outputs",
          "observation": "Mature organizations standardize closing materials. They use branded templates for 100% of proposals and contracts, presenting an institutional image during the final decision phase.",
          "weights": {
            "impact": 8,
            "complexity": 5,
            "time_to_implement": 5,
            "direct_cost": 3
          },
          "audit_binary": "Does the team use standard, branded templates for 100% of proposals and contracts?",
          "evidence": "Master Proposal and Contract Template Library.",
          "failure_signal": "Proposals are 'freestyled' each time; they look inconsistent and take hours to create.",
          "prerequisite": "BM.2",
          "review_frequency": 4
        },
        {
          "level": 5,
          "headline": "Quota Discipline",
          "observation": "Predictable companies assign individual targets and track them weekly. They move the business from 'hoping' for sales to 'managing' for them through objective accountability.",
          "weights": {
            "impact": 9,
            "complexity": 6,
            "time_to_implement": 6,
            "direct_cost": 4
          },
          "audit_binary": "Are sales targets assigned to individuals and tracked weekly?",
          "evidence": "Weekly Sales Scorecards vs Quota.",
          "failure_signal": "Salespeople work without specific numeric goals; performance is only evaluated when revenue is low.",
          "prerequisite": "TC.3",
          "review_frequency": 52
        },
        {
          "level": 6,
          "headline": "Systemic Sales Training (The Playbook)",
          "observation": "High-leverage firms document 'The Way We Sell.' New hires are trained on scripts and objection-handling, ensuring closing is a repeatable process rather than a personality trait.",
          "weights": {
            "impact": 8,
            "complexity": 7,
            "time_to_implement": 8,
            "direct_cost": 4
          },
          "audit_binary": "Is there a written 'Way We Sell' manual that includes scripts and objection handling?",
          "evidence": "Written Sales Playbook.",
          "failure_signal": "Every salesperson uses their own style; new hires take months to become effective; the founder is still the 'only one who can close'.",
          "prerequisite": "AI.3",
          "review_frequency": 4
        },
        {
          "level": 7,
          "headline": "Activity-Based Management",
          "observation": "Organizations at this level manage the inputs that lead to money. They track leading indicators (calls, demos) to make revenue a mathematical certainty.",
          "weights": {
            "impact": 7,
            "complexity": 7,
            "time_to_implement": 5,
            "direct_cost": 3
          },
          "audit_binary": "Are leading indicators (Calls, Meetings, Demos) tracked and managed daily?",
          "evidence": "Sales Activity Dashboard.",
          "failure_signal": "Management only focuses on 'lagging' results (revenue); there is no visibility into the daily work creating that revenue.",
          "prerequisite": "TI.5",
          "review_frequency": 250
        },
        {
          "level": 8,
          "headline": "Integrated Revenue Operations",
          "observation": "Sovereign assets automate the hand-off between departments. When a deal is 'Won', the project and invoice are created automatically without human data entry.",
          "weights": {
            "impact": 7,
            "complexity": 8,
            "time_to_implement": 7,
            "direct_cost": 6
          },
          "audit_binary": "Is the sales pipeline digitally connected to the delivery/operations system?",
          "evidence": "Automated Sales-to-Ops Integration Logs.",
          "failure_signal": "Ops is often 'surprised' when a new client signs; data is typed twice; manual emails are required to start a project.",
          "prerequisite": "TI.6",
          "review_frequency": 12
        },
        {
          "level": 9,
          "headline": "Scalable Engine (Founder-Free Sales)",
          "observation": "At this stage, the sales process is entirely independent of the Founder. The system produces growth regardless of who is operating it, making the firm a transferable asset.",
          "weights": {
            "impact": 9,
            "complexity": 9,
            "time_to_implement": 10,
            "direct_cost": 8
          },
          "audit_binary": "Does the sales team close 100% of deals without any direct closing calls from the Founder?",
          "evidence": "90-Day Revenue Report with 0% Founder-assisted closing.",
          "failure_signal": "The Founder still has to jump on 'big calls' to win; growth stalls if the Founder is busy or offline.",
          "prerequisite": "LD.7",
          "review_frequency": 12
        },
        {
          "level": 10,
          "headline": "Theoretical Perfection",
          "observation": "Theoretical perfection is reached when revenue is a utility. >70% of income is recurring and forecast accuracy is ±5%, requiring minimal oversight to sustain.",
          "weights": {
            "impact": 10,
            "complexity": 10,
            "time_to_implement": 10,
            "direct_cost": 10
          },
          "audit_binary": "Is >70% of revenue derived from recurring contracts with automated billing?",
          "evidence": "Recurring Revenue Audit showing <5% churn.",
          "failure_signal": "The company still relies on 'chasing new business' every single month to cover basic overhead.",
          "prerequisite": "FR.10",
          "review_frequency": 4
        }
      ]
    },
    {
      "id": "OP",
      "name": "Operations",
      "purpose": "The Delivery",
      "cxo_persona": "Chief Operating Officer",
      "description": "How the business fulfills its promises, manages workflows, and ensures consistent quality in every delivery.",
      "levels": [
        {
          "level": 0,
          "headline": "Operational Intent & Delivery Logic",
          "observation": "High-performance organizations are designed with a specific 'Operational DNA' that defines non-negotiable fulfillment standards, ensuring quality benchmarks are never compromised by volume growth.",
          "weights": {
            "impact": 10,
            "complexity": 5,
            "time_to_implement": 5,
            "direct_cost": 2
          },
          "audit_binary": "Are the delivery standards, primary workflow constraints, and quality benchmarks documented and validated?",
          "evidence": "Operations Strategy Document.",
          "failure_signal": "The organization prioritizes volume at the expense of quality; there is no clear internal definition of a 'perfect' delivery.",
          "prerequisite": "LD.0",
          "review_frequency": 1,
          "questions_to_answer": [
            "What is our 'Primary Metric' for delivery success (Speed, Accuracy, or Low Cost)?",
            "What are the 5-10 non-negotiable steps required to deliver our core product?",
            "What is the maximum capacity of our current system before quality drops?",
            "How do we define a 'Defect' or 'Failed Delivery,' and what is our target error rate?",
            "Which delivery steps are 'Core' (Internal) and which are 'Context' (Outsourceable)?",
            "Who is the final authority on 'Quality Control' before the product reaches the customer?"
          ]
        },
        {
          "level": 1,
          "headline": "Documented Workflow",
          "observation": "Mature operations eliminate 'Heroic Effort' by externalizing the steps of the most frequent tasks, ensuring quality is a result of the system rather than the individual.",
          "weights": {
            "impact": 10,
            "complexity": 2,
            "time_to_implement": 2,
            "direct_cost": 1
          },
          "audit_binary": "Is the most repeated task in the company documented step-by-step in writing?",
          "evidence": "Primary Process SOP.",
          "failure_signal": "Quality depends entirely on who is working that day; work stops or errors spike if a specific person is absent.",
          "prerequisite": "LD.1",
          "review_frequency": 4
        },
        {
          "level": 2,
          "headline": "Visual Work-Board Tracking",
          "observation": "Successful firms move away from manual tracking to a shared digital board, providing immediate visibility into every active project and preventing missed deadlines.",
          "weights": {
            "impact": 8,
            "complexity": 3,
            "time_to_implement": 2,
            "direct_cost": 2
          },
          "audit_binary": "Is every active project or task visible on a shared digital board with clear 'Status' columns?",
          "evidence": "Live Operations Board (Kanban/Project Tool).",
          "failure_signal": "Deadlines are often missed; leadership must ask 'What is the status of X?' because work status is hidden in private lists.",
          "prerequisite": "TI.3",
          "review_frequency": 52
        },
        {
          "level": 3,
          "headline": "Checklist Integration",
          "observation": "At this level, firms use interactive checklists for 100% of recurring tasks, ensuring no step is missed regardless of the task's commonality.",
          "weights": {
            "impact": 7,
            "complexity": 4,
            "time_to_implement": 4,
            "direct_cost": 1
          },
          "audit_binary": "Are checklists used for every recurring delivery task to ensure no steps are missed?",
          "evidence": "Library of Active Checklists in Workflow Tool.",
          "failure_signal": "Minor steps are frequently forgotten; 'simple' mistakes cause rework or customer complaints.",
          "prerequisite": "OP.1",
          "review_frequency": 12
        },
        {
          "level": 4,
          "headline": "Internal Quality Control (QC)",
          "observation": "Professional organizations utilize a 'Gatekeeper' where a second person verifies work against Level 0 standards before it ever reaches the customer.",
          "weights": {
            "impact": 8,
            "complexity": 5,
            "time_to_implement": 5,
            "direct_cost": 3
          },
          "audit_binary": "Does a second person (not the creator) check the work before it is delivered to the customer?",
          "evidence": "QC Approval Log/Sign-off.",
          "failure_signal": "Customers are often the ones who find errors; there is no internal review process before delivery.",
          "prerequisite": "LD.3",
          "review_frequency": 250
        },
        {
          "level": 5,
          "headline": "Operational Source of Truth",
          "observation": "At this level, the organization operates from a 'Single Source of Truth,' with all tasks and communications contained within one central system.",
          "weights": {
            "impact": 9,
            "complexity": 6,
            "time_to_implement": 6,
            "direct_cost": 4
          },
          "audit_binary": "Is 100% of the company's work managed in one central project system (no 'side' lists)?",
          "evidence": "System Audit of PM Tool.",
          "failure_signal": "Staff use private spreadsheets; project data is fragmented across different tools and chats.",
          "prerequisite": "TI.3",
          "review_frequency": 12
        },
        {
          "level": 6,
          "headline": "Capacity & Resource Planning",
          "observation": "Data-driven firms manage resources proactively, balancing workload across the team to prevent bottlenecks and burnout.",
          "weights": {
            "impact": 7,
            "complexity": 7,
            "time_to_implement": 7,
            "direct_cost": 3
          },
          "audit_binary": "Is team workload measured and balanced weekly to prevent bottlenecks?",
          "evidence": "Team Workload/Resource Map.",
          "failure_signal": "Some team members are consistently overwhelmed while others are idle; deadlines are missed due to capacity issues.",
          "prerequisite": "OP.2",
          "review_frequency": 52
        },
        {
          "level": 7,
          "headline": "Integrated Fulfillment",
          "observation": "Advanced operations are linked directly to sales, with fulfillment needs forecasted based on the sales pipeline.",
          "weights": {
            "impact": 8,
            "complexity": 8,
            "time_to_implement": 7,
            "direct_cost": 6
          },
          "audit_binary": "Is the sales pipeline automatically triggering the project setup in Operations?",
          "evidence": "Sales-to-Ops Automation Logs.",
          "failure_signal": "The ops team feels blindsided by new sales; there is zero communication between sales and delivery.",
          "prerequisite": "RS.8",
          "review_frequency": 12
        },
        {
          "level": 8,
          "headline": "Continuous Process Improvement",
          "observation": "Sovereign assets operate self-healing processes where every error triggers a Post-Mortem to update SOPs and prevent recurrence.",
          "weights": {
            "impact": 8,
            "complexity": 8,
            "time_to_implement": 8,
            "direct_cost": 5
          },
          "audit_binary": "Is there a documented 'Post-Mortem' process to update SOPs every time an error occurs?",
          "evidence": "Error & Improvement Log.",
          "failure_signal": "The same mistakes happen repeatedly; the team 'fixes errors' but never 'fixes systems.'",
          "prerequisite": "OP.1",
          "review_frequency": 12
        },
        {
          "level": 9,
          "headline": "Exception Management Dashboards",
          "observation": "Scale-ready firms make bottlenecks visible in real-time, allowing leadership to intervene only when the system flags a 'Red' status.",
          "weights": {
            "impact": 9,
            "complexity": 9,
            "time_to_implement": 9,
            "direct_cost": 8
          },
          "audit_binary": "Does the system automatically flag delayed tasks or quality drops to leadership before they fail?",
          "evidence": "Exception-only Operations Dashboard.",
          "failure_signal": "Leadership spends all day 'checking in' on successful tasks; they only find failures after customer complaints.",
          "prerequisite": "TI.5",
          "review_frequency": 250
        },
        {
          "level": 10,
          "headline": "Elastic Scale Engine",
          "observation": "Theoretical perfection is an operations system that detects and corrects its own errors, allowing 2x volume increases without added management headcount.",
          "weights": {
            "impact": 10,
            "complexity": 10,
            "time_to_implement": 10,
            "direct_cost": 10
          },
          "audit_binary": "Can the system handle a 2x increase in volume without adding any management headcount?",
          "evidence": "Volume Scaling vs Management Cost Audit.",
          "failure_signal": "Scaling linearly increases management burden on the founder; complexity grows faster than revenue.",
          "prerequisite": "TI.10",
          "review_frequency": 1
        }
      ]
    },
    {
      "id": "CS",
      "name": "Customer Success",
      "purpose": "The Retention",
      "cxo_persona": "Chief Success Officer",
      "description": "How the business ensures customers achieve their goals, remains loyal, and refers others to the brand.",
      "levels": [
        {
          "level": 0,
          "headline": "Success Intent & Relationship Strategy",
          "observation": "Success-led organizations define the 'Aha! Moment' for their customers. They build a proactive strategy to drive users toward value realization, ensuring that retention is a planned outcome rather than a lucky accident.",
          "weights": {
            "impact": 10,
            "complexity": 5,
            "time_to_implement": 5,
            "direct_cost": 2
          },
          "audit_binary": "Are the definition of 'Customer Success,' the retention goals, and the health-score criteria documented and validated?",
          "evidence": "Success Strategy Document.",
          "failure_signal": "The company has no clear definition of what 'success' looks like for a client; we only talk to customers when they are angry or when it is time to renew.",
          "prerequisite": "LD.0",
          "review_frequency": 1,
          "questions_to_answer": [
            "What is the specific 'Value Realization' point where a customer feels they got their money's worth?",
            "What is our target 'Net Revenue Retention' (NRR) percentage for the next 12 months?",
            "What are the 3 main reasons customers leave us (Churn), and how do we plan to counter them?",
            "How do we define a 'Healthy' vs. an 'At-Risk' customer based on their behavior?",
            "What is our policy for handling a 'Critical Failure' in delivery that impacts the relationship?",
            "What is the specific reward for a customer who refers a new lead?"
          ]
        },
        {
          "level": 1,
          "headline": "Centralized Intake",
          "observation": "Professional organizations eliminate 'Firefighting' by forcing all client issues into a single, professional intake point. They protect leadership focus by ensuring clients never text the founder directly for tactical support.",
          "weights": {
            "impact": 10,
            "complexity": 2,
            "time_to_implement": 2,
            "direct_cost": 1
          },
          "audit_binary": "Is there one single, professional channel where all customer issues are collected?",
          "evidence": "Shared Support Inbox or Central Intake Channel.",
          "failure_signal": "Clients text or call the founder when angry; there are no central logs of issues or complaints.",
          "prerequisite": "LD.3",
          "review_frequency": 52
        },
        {
          "level": 2,
          "headline": "Named Issue Ownership",
          "observation": "At this level, firms assign a specific 'Owner' to every logged issue. This ensures accountability for the resolution and prevents customer questions from being ignored in a shared inbox.",
          "weights": {
            "impact": 7,
            "complexity": 3,
            "time_to_implement": 2,
            "direct_cost": 1
          },
          "audit_binary": "Does every logged customer issue have a specific person assigned to solve it?",
          "evidence": "Support Log showing 100% assigned ownership.",
          "failure_signal": "Response times are random; support emails often go unanswered for days because everyone assumes someone else is handling it.",
          "prerequisite": "CS.1",
          "review_frequency": 52
        },
        {
          "level": 3,
          "headline": "Professional Ticketing System",
          "observation": "Mature organizations use dedicated helpdesk tools to track historical data. This allows the team to see a customer’s full history of interactions so clients never have to repeat their story.",
          "weights": {
            "impact": 6,
            "complexity": 5,
            "time_to_implement": 4,
            "direct_cost": 3
          },
          "audit_binary": "Is every client interaction logged in a dedicated system that tracks historical data?",
          "evidence": "Active Helpdesk/Ticketing Tool.",
          "failure_signal": "All issues are logged, but the team is slow to close them; there is no visibility into which clients have recurring problems.",
          "prerequisite": "TI.1",
          "review_frequency": 12
        },
        {
          "level": 4,
          "headline": "Response Time Standards (SLAs)",
          "observation": "Reliable firms establish written standards for speed. They measure every interaction against a 'Service Level Agreement' (SLA) to ensure that customer trust is maintained through consistent responsiveness.",
          "weights": {
            "impact": 7,
            "complexity": 5,
            "time_to_implement": 4,
            "direct_cost": 2
          },
          "audit_binary": "Is there a written standard for how fast a customer must receive a response?",
          "evidence": "SLA Performance Report.",
          "failure_signal": "Management doesn't know the average time it takes to respond to a client; recurring complaints about 'slow service' are common.",
          "prerequisite": "CS.3",
          "review_frequency": 12
        },
        {
          "level": 5,
          "headline": "Systematic Satisfaction Tracking",
          "observation": "Data-driven companies survey clients after every major service milestone. This allows them to catch 'silent churn' and resolve dissatisfaction before it leads to a cancellation.",
          "weights": {
            "impact": 8,
            "complexity": 6,
            "time_to_implement": 4,
            "direct_cost": 2
          },
          "audit_binary": "Is customer happiness (CSAT or NPS) measured and recorded after every major interaction?",
          "evidence": "Satisfaction Dashboard and Manager Follow-up Log.",
          "failure_signal": "Issues are resolved, but we don't know if the client is actually happy; we are 'surprised' by cancellations.",
          "prerequisite": "OP.4",
          "review_frequency": 12
        },
        {
          "level": 6,
          "headline": "Proactive Health Checks",
          "observation": "High-leverage firms reach out to clients before problems are reported. They follow a schedule of proactive reviews to ensure the client is still aligned with the value proposition.",
          "weights": {
            "impact": 8,
            "complexity": 7,
            "time_to_implement": 6,
            "direct_cost": 3
          },
          "audit_binary": "Do staff perform scheduled check-ins with customers before any problems are reported?",
          "evidence": "Proactive Check-in Log.",
          "failure_signal": "We only talk to clients when they complain; we have no data on client 'sentiment' until they stop paying.",
          "prerequisite": "CS.5",
          "review_frequency": 12
        },
        {
          "level": 7,
          "headline": "Retention & Expansion Quotas",
          "observation": "Advanced success teams are managed as profit centers. They have specific targets for renewals and upsells, ensuring the existing customer base is the primary engine of revenue growth.",
          "weights": {
            "impact": 9,
            "complexity": 8,
            "time_to_implement": 7,
            "direct_cost": 5
          },
          "audit_binary": "Are success staff managed against specific targets for renewals and upsells?",
          "evidence": "Retention/Expansion Individual Scorecards.",
          "failure_signal": "Account managers have no specific targets for growth; upselling is an ad-hoc process rather than a standard system.",
          "prerequisite": "RS.5",
          "review_frequency": 12
        },
        {
          "level": 8,
          "headline": "Automated Churn Prediction",
          "observation": "Sovereign assets use behavior data to flag 'At-Risk' customers automatically. The system triggers human intervention to save the account before the cancellation happens.",
          "weights": {
            "impact": 8,
            "complexity": 9,
            "time_to_implement": 8,
            "direct_cost": 6
          },
          "audit_binary": "Does the system automatically flag 'At-Risk' customers based on their behavior or data signals?",
          "evidence": "Customer Health Dashboard with Automated Alerts.",
          "failure_signal": "Clients cancel with zero warning; we didn't know they had stopped using the service three months ago.",
          "prerequisite": "TI.8",
          "review_frequency": 52
        },
        {
          "level": 9,
          "headline": "Unified Customer View",
          "observation": "At this level, the data silos between Sales, Support, and Ops are dissolved. Any staff member can see a unified history of every interaction, ensuring a seamless experience.",
          "weights": {
            "impact": 9,
            "complexity": 9,
            "time_to_implement": 10,
            "direct_cost": 8
          },
          "audit_binary": "Can Sales, Operations, and Success staff see a 100% unified history of every customer interaction?",
          "evidence": "Centralized Customer Data Platform (CDP) or Synced Stack.",
          "failure_signal": "The support team doesn't know what sales promised; the client has to repeat their history every time they talk to a new person.",
          "prerequisite": "TI.6",
          "review_frequency": 4
        },
        {
          "level": 10,
          "headline": "Referral Engine",
          "observation": "Theoretical perfection is reached when churn is near zero and existing clients are the primary source of new business. The system rewards advocacy automatically.",
          "weights": {
            "impact": 10,
            "complexity": 10,
            "time_to_implement": 10,
            "direct_cost": 9
          },
          "audit_binary": "Is >50% of new business derived from a documented, automated customer referral system?",
          "evidence": "Referral Performance Report.",
          "failure_signal": "We have to spend a lot of money on ads to get new clients because our old clients don't tell their friends about us.",
          "prerequisite": "RS.10",
          "review_frequency": 1
        }
      ]
    },
    {
      "id": "TC",
      "name": "Talent & Culture",
      "purpose": "The Capacity",
      "cxo_persona": "Chief People Officer",
      "description": "How the business recruits, trains, manages, and retains the people required to execute the company strategy.",
      "levels": [
        {
          "level": 0,
          "headline": "Talent Intent & Cultural Laws",
          "observation": "Mature organizations operate from a documented 'People Strategy' that defines behavioral laws (Core Values) and hiring philosophy, ensuring the organization grows in a unified direction.",
          "weights": {
            "impact": 10,
            "complexity": 5,
            "time_to_implement": 5,
            "direct_cost": 1
          },
          "audit_binary": "Are the hiring philosophy, behavioral values, and performance standards documented and validated?",
          "evidence": "People Strategy Document.",
          "failure_signal": "The organization suffers from toxic behaviors or cultural misalignment; team members are technically skilled but operate in silos.",
          "prerequisite": "LD.0",
          "review_frequency": 1,
          "questions_to_answer": [
            "What are the 3-5 'Core Values' every employee must demonstrate?",
            "Do we hire for potential or for proven experience?",
            "How do we define 'High Performance' vs. 'Average Performance'?",
            "What is our target 'Employee Retention' rate for the next 12 months?",
            "How will we resolve internal conflicts between team members fairly?",
            "What is the 'Employee Value Proposition' (Why work for us)?"
          ]
        },
        {
          "level": 1,
          "headline": "Outcome-Based Job Descriptions",
          "observation": "Successful firms eliminate role ambiguity by defining every position by its expected results. They move away from 'hiring friends' toward hiring for specific, measurable capacity requirements.",
          "weights": {
            "impact": 10,
            "complexity": 2,
            "time_to_implement": 2,
            "direct_cost": 1
          },
          "audit_binary": "Does every active team member have a written job description focused on results?",
          "evidence": "Library of Role Scorecards.",
          "failure_signal": "We hire whoever is available immediately; team members are busy but lack clarity on what specific results they are paid to achieve.",
          "prerequisite": "LD.3",
          "review_frequency": 4
        },
        {
          "level": 2,
          "headline": "Administrative & Payroll Hygiene",
          "observation": "Stable companies maintain a professional foundation where all contracts are signed and payroll is 100% accurate and on-time, building basic institutional trust.",
          "weights": {
            "impact": 6,
            "complexity": 3,
            "time_to_implement": 2,
            "direct_cost": 2
          },
          "audit_binary": "Are all staff contracts signed, and is payroll 100% accurate and on-time?",
          "evidence": "90-Day Clean Payroll Record and Secure Contract Archive.",
          "failure_signal": "Contracts are missing or verbal; payroll is occasionally late or tax calculations are inconsistent.",
          "prerequisite": "LD.3",
          "review_frequency": 12
        },
        {
          "level": 3,
          "headline": "Individual KPI Scorecards",
          "observation": "Data-literate firms assign every person at least one numeric metric to track and report weekly. This ensures every individual knows if they are 'winning' or 'losing' their job.",
          "weights": {
            "impact": 8,
            "complexity": 4,
            "time_to_implement": 3,
            "direct_cost": 1
          },
          "audit_binary": "Does every person have at least one numeric metric they track and report weekly?",
          "evidence": "Weekly Individual Scorecard Reports.",
          "failure_signal": "Performance feedback is subjective or infrequent; staff don't know they are underperforming until a manager gets angry.",
          "prerequisite": "TC.1",
          "review_frequency": 52
        },
        {
          "level": 4,
          "headline": "Standardized Onboarding",
          "observation": "At this level, firms use a repeatable 'First-Week' curriculum to rapidly teach company values and tools, ensuring new hires become productive without draining manager time.",
          "weights": {
            "impact": 7,
            "complexity": 5,
            "time_to_implement": 4,
            "direct_cost": 2
          },
          "audit_binary": "Is there a written 'First-Week' curriculum that every new hire completes?",
          "evidence": "Onboarding Checklist with 100% completion for recent hires.",
          "failure_signal": "New hires spend their first week 'shadowing' because there is no plan; onboarding is inconsistent between departments.",
          "prerequisite": "AI.3",
          "review_frequency": 4
        },
        {
          "level": 5,
          "headline": "Documented Performance Reviews",
          "observation": "Mature organizations run formal reviews at least twice per year, documenting alignment between Level 3 KPIs and Level 0 Values to remove surprises regarding career progress.",
          "weights": {
            "impact": 7,
            "complexity": 6,
            "time_to_implement": 5,
            "direct_cost": 2
          },
          "audit_binary": "Are formal 1-on-1 performance meetings held and documented at least twice per year?",
          "evidence": "Performance Review Archive.",
          "failure_signal": "Staff have no idea how to earn raises; performance is only discussed during 'salary negotiation' season.",
          "prerequisite": "TC.3",
          "review_frequency": 2
        },
        {
          "level": 6,
          "headline": "Data-Driven Capacity Planning",
          "observation": "High-leverage firms use workload data to trigger recruitment. They hire based on reaching 80% capacity to ensure new staff are trained before the current team burns out.",
          "weights": {
            "impact": 8,
            "complexity": 7,
            "time_to_implement": 6,
            "direct_cost": 3
          },
          "audit_binary": "Is new hiring triggered by operational data (workload) rather than 'feeling busy'?",
          "evidence": "Hiring Plan linked to Revenue and Delivery Metrics.",
          "failure_signal": "The company 'panic-hires' when quality is already failing due to staff burnout.",
          "prerequisite": "OP.6",
          "review_frequency": 12
        },
        {
          "level": 7,
          "headline": "Internal Growth Paths",
          "observation": "Sovereign assets maintain a written 'Career Ladder,' defining senior levels and promotion criteria within each department to retain top talent.",
          "weights": {
            "impact": 7,
            "complexity": 7,
            "time_to_implement": 8,
            "direct_cost": 4
          },
          "audit_binary": "Is there a written 'Career Ladder' showing how staff can earn raises or better titles?",
          "evidence": "Career Progression Framework.",
          "failure_signal": "High-performers leave because they feel they have 'hit a ceiling' or don't see a future at the firm.",
          "prerequisite": "TC.5",
          "review_frequency": 1
        },
        {
          "level": 8,
          "headline": "Systematic Engagement Surveys",
          "observation": "Institutions at this level measure team sentiment anonymously. They use survey results to catch 'cultural rot' or tool gaps before they lead to quitting.",
          "weights": {
            "impact": 7,
            "complexity": 8,
            "time_to_implement": 6,
            "direct_cost": 3
          },
          "audit_binary": "Is team sentiment measured anonymously at least once per quarter?",
          "evidence": "Quarterly Cultural Health Reports.",
          "failure_signal": "Leadership is 'surprised' by resignations; there is a hidden lack of trust in leadership.",
          "prerequisite": "LD.4",
          "review_frequency": 4
        },
        {
          "level": 9,
          "headline": "The Leadership Bench",
          "observation": "Advanced firms protect their future by maintaining a successor matrix. They ensure every manager has a trained 'Number 2' ready to step in within 48 hours.",
          "weights": {
            "impact": 9,
            "complexity": 9,
            "time_to_implement": 9,
            "direct_cost": 6
          },
          "audit_binary": "Does every manager have a trained 'Successor' or a pipeline of candidates ready?",
          "evidence": "Talent Pipeline/Succession Matrix.",
          "failure_signal": "A single manager leaving creates a 'knowledge vacuum' that stalls the entire department.",
          "prerequisite": "LD.9",
          "review_frequency": 2
        },
        {
          "level": 10,
          "headline": "Self-Correcting Culture",
          "observation": "Theoretical perfection is a team that manages its own performance and cultural standards without intervention. Peer accountability ensures low-performers either improve or depart.",
          "weights": {
            "impact": 10,
            "complexity": 10,
            "time_to_implement": 10,
            "direct_cost": 8
          },
          "audit_binary": "Does the team manage its own performance and cultural standards without founder intervention?",
          "evidence": "Documented Peer-to-Peer Accountability instances.",
          "failure_signal": "The founder is still the 'police officer' for behavior; the team waits for the boss to fire low-performers.",
          "prerequisite": "LD.10",
          "review_frequency": 1
        }
      ]
    },
    {
      "id": "TI",
      "name": "Technology",
      "purpose": "The Infrastructure",
      "cxo_persona": "Chief Information Officer",
      "description": "How the business uses software, hardware, and data to automate work and provide a single version of the truth.",
      "levels": [
        {
          "level": 0,
          "headline": "Technology Intent & Tool Strategy",
          "observation": "Mature organizations operate from a documented 'Digital Blueprint' that prevents software bloat and ensures all data remains clean and accessible for future AI agent deployment.",
          "weights": {
            "impact": 10,
            "complexity": 5,
            "time_to_implement": 4,
            "direct_cost": 2
          },
          "audit_binary": "Are the core software stack, data security rules, and integration goals documented and validated?",
          "evidence": "Technology Strategy Document.",
          "failure_signal": "Data is fragmented across multiple tools that do not talk to each other; teams buy 'Shadow IT' software without permission.",
          "prerequisite": "LD.0",
          "review_frequency": 1,
          "questions_to_answer": [
            "What is our 'Master Software Stack' (The 3-5 core apps)?",
            "What is our 'Single Source of Truth' for customer data?",
            "How do we protect company data from unauthorized access?",
            "What is our policy on 'Shadow IT'?",
            "How will we ensure different software tools 'talk' to each other?",
            "What are our rules for using AI and automation in daily workflows?"
          ]
        },
        {
          "level": 1,
          "headline": "Software Inventory & Governance",
          "observation": "Successful firms maintain a master list of all paid software and access owners. They eliminate duplicate costs and ensure all accounts use company-owned email addresses.",
          "weights": {
            "impact": 9,
            "complexity": 2,
            "time_to_implement": 2,
            "direct_cost": 1
          },
          "audit_binary": "Is there a master list of all paid software, costs, and access owners?",
          "evidence": "Active SaaS Inventory Spreadsheet.",
          "failure_signal": "The company pays for duplicate tools; former employees still have active logins to core systems.",
          "prerequisite": "TI.0",
          "review_frequency": 12
        },
        {
          "level": 2,
          "headline": "Access & Security Vault",
          "observation": "Stable organizations secure their digital doors using professional password managers and mandatory 2-Factor Authentication (2FA), allowing for instant revocation of access.",
          "weights": {
            "impact": 7,
            "complexity": 3,
            "time_to_implement": 2,
            "direct_cost": 2
          },
          "audit_binary": "Is a company-wide password manager used, and is access revoked for ex-employees in <1 hour?",
          "evidence": "Security Audit showing 100% staff adoption of Password Vault.",
          "failure_signal": "Passwords are shared insecurely via chat or sticky notes; it takes hours or days to secure the system after a resignation.",
          "prerequisite": "TI.1",
          "review_frequency": 12
        },
        {
          "level": 3,
          "headline": "The Central Cloud Drive",
          "observation": "At this level, firms eliminate local file silos. All documents are stored in an organized cloud system with strict naming rules, allowing data discovery in under 30 seconds.",
          "weights": {
            "impact": 7,
            "complexity": 4,
            "time_to_implement": 3,
            "direct_cost": 1
          },
          "audit_binary": "Are all company files stored in a single, organized cloud system with standard naming rules?",
          "evidence": "Cloud Drive with standard Folder Hierarchy Map.",
          "failure_signal": "Important files live on individual desktops; folders are messy with names like 'New_Doc_Final_FINAL'.",
          "prerequisite": "TI.2",
          "review_frequency": 4
        },
        {
          "level": 4,
          "headline": "Automated Scheduled Reporting",
          "observation": "Data-literate organizations automate the delivery of metrics. Systems are configured to email summary reports to leaders on a fixed schedule, ensuring a shared version of the truth.",
          "weights": {
            "impact": 6,
            "complexity": 5,
            "time_to_implement": 4,
            "direct_cost": 2
          },
          "audit_binary": "Do the most important department metrics get emailed to leaders automatically on a fixed schedule?",
          "evidence": "History of Automated Weekly Reports from CRM/PM tools.",
          "failure_signal": "Reports lag by a week; leadership must manually 'clean' data before every strategy meeting.",
          "prerequisite": "RS.2",
          "review_frequency": 52
        },
        {
          "level": 5,
          "headline": "Company Command Center",
          "observation": "High-leverage firms use live dashboards to visualize real-time KPIs from all departments on a single screen, providing a total view of business health at a glance.",
          "weights": {
            "impact": 9,
            "complexity": 6,
            "time_to_implement": 6,
            "direct_cost": 4
          },
          "audit_binary": "Is there one live dashboard that shows real-time KPIs from all departments on a single screen?",
          "evidence": "Live Company Dashboard (e.g., Databox/Looker).",
          "failure_signal": "Key numbers are only visible once a month in static reports; leadership has no real-time view of business health.",
          "review_frequency": 250
        },
        {
          "level": 6,
          "headline": "Inter-App Data Flow (APIs)",
          "observation": "Advanced organizations eliminate manual data entry through API integrations. Data moves automatically between Sales, Operations, and Finance to reduce human error.",
          "weights": {
            "impact": 8,
            "complexity": 7,
            "time_to_implement": 7,
            "direct_cost": 4
          },
          "audit_binary": "Do your core software tools 'talk' to each other automatically without human data entry?",
          "evidence": "List of Active Integrations (Zapier/Make/Native APIs).",
          "failure_signal": "Staff must type the same data (e.g., client names) into multiple systems; data is frequently out of sync.",
          "prerequisite": "TI.5",
          "review_frequency": 4
        },
        {
          "level": 7,
          "headline": "System-Based Decision Logic",
          "observation": "Mature organizations prioritize work based on system metrics. Staff check personal dashboards to prioritize their daily tasks, ensuring effort is always aligned with Level 3 (TC) KPIs.",
          "weights": {
            "impact": 7,
            "complexity": 7,
            "time_to_implement": 6,
            "direct_cost": 3
          },
          "audit_binary": "Does the team check system metrics to start their daily work, and is 'I think' banned for quantitative facts?",
          "evidence": "Staff Dashboard Access Logs.",
          "failure_signal": "Work is prioritized based on 'who is yelling the loudest' rather than quantitative facts from the system.",
          "prerequisite": "TC.3",
          "review_frequency": 52
        },
        {
          "level": 8,
          "headline": "Predictive Forecasting Intelligence",
          "observation": "Sovereign assets use historical data to forecast future trends. The system identifies upcoming inventory, cash, or staffing needs with >85% verified accuracy.",
          "weights": {
            "impact": 8,
            "complexity": 9,
            "time_to_implement": 8,
            "direct_cost": 7
          },
          "audit_binary": "Does the system automatically forecast future trends based on historical data?",
          "evidence": "Predictive Forecast Reports with accuracy verification logs.",
          "failure_signal": "The company is constantly 'reacting' to shortages; there is zero visibility into future capacity requirements.",
          "prerequisite": "TI.6",
          "review_frequency": 12
        },
        {
          "level": 9,
          "headline": "Autonomous Security & Compliance",
          "observation": "At this level, the stack protects itself. Digital security and data privacy (GDPR) are monitored and audited automatically, blocking threats without human intervention.",
          "weights": {
            "impact": 7,
            "complexity": 9,
            "time_to_implement": 9,
            "direct_cost": 8
          },
          "audit_binary": "Is digital security and data privacy monitored and audited automatically by the system?",
          "evidence": "Automated Security Health/GDPR Audit Reports.",
          "failure_signal": "Security is reactive (changing passwords after a hack); compliance is a manual once-a-year panic.",
          "prerequisite": "TI.2",
          "review_frequency": 4
        },
        {
          "level": 10,
          "headline": "Intelligent Autonomous Stack",
          "observation": "Theoretical perfection is a self-managing brain where AI agents handle 99% of routine cognitive work and self-correcting workflows with minimal human oversight.",
          "weights": {
            "impact": 10,
            "complexity": 10,
            "time_to_implement": 10,
            "direct_cost": 10
          },
          "audit_binary": "Does AI handle routine cognitive tasks and self-correcting workflows with <10% human oversight?",
          "evidence": "AI Agent Activity/Decision Logs.",
          "failure_signal": "The business still relies on human labor for routine data verification or simple decision-making tasks.",
          "prerequisite": "TI.8",
          "review_frequency": 1
        }
      ]
    },
    {
      "id": "FR",
      "name": "Finance & Risk",
      "purpose": "The Protection",
      "cxo_persona": "Chief Financial Officer",
      "description": "How the business manages its money, ensures legal compliance, and protects its assets from external or internal threats.",
      "levels": [
        {
          "level": 0,
          "headline": "Financial Intent & Risk Appetite",
          "observation": "Mature organizations operate on a documented 'Economic Logic.' This defines profit targets and risk thresholds, ensuring the business never grows into a 'hollow' entity with high revenue but no safety.",
          "weights": {
            "impact": 10,
            "complexity": 5,
            "time_to_implement": 5,
            "direct_cost": 2
          },
          "audit_binary": "Are the profit targets, tax strategy, and primary risk thresholds documented and approved?",
          "evidence": "Financial Strategy Document.",
          "failure_signal": "Spending is reactive; the company has high revenue but frequently struggles to explain where the profit went.",
          "prerequisite": "LD.0",
          "review_frequency": 1,
          "questions_to_answer": [
            "What is our 'Minimum Target Profit Margin' for the total business?",
            "How much 'Cash Runway' (months of survival) do we intend to keep in the bank?",
            "What are our primary tax obligations in every jurisdiction of operation?",
            "What are the 3 biggest 'Existential Risks' to the firm and how are they monitored?",
            "Who has final authority for approving spend above specific thresholds?",
            "What is our 'Dividend vs. Reinvestment' policy for excess profits?"
          ]
        },
        {
          "level": 1,
          "headline": "Separation of Capital",
          "observation": "Successful institutions maintain total separation between business and personal funds. This ensures that the accounting data is clean and reflects the true economic health of the entity.",
          "weights": {
            "impact": 10,
            "complexity": 1,
            "time_to_implement": 1,
            "direct_cost": 1
          },
          "audit_binary": "Are business funds kept in a dedicated legal account with zero personal transaction mixing?",
          "evidence": "Clean Business Bank Statement.",
          "failure_signal": "The founder uses the company card for private groceries or home rent; personal and business expenses are blurred.",
          "prerequisite": "LD.3",
          "review_frequency": 12
        },
        {
          "level": 2,
          "headline": "Digital Receipt & Tax Hygiene",
          "observation": "Stable firms capture 100% of receipts digitally. They match every bank transaction to a proof of purchase monthly, ensuring the company is perpetually prepared for government audits.",
          "weights": {
            "impact": 7,
            "complexity": 3,
            "time_to_implement": 3,
            "direct_cost": 2
          },
          "audit_binary": "Are 100% of receipts captured digitally and reconciled to bank transactions monthly?",
          "evidence": "Digital Accounting Archive (e.g., Xero/QuickBooks).",
          "failure_signal": "Receipts are kept in physical boxes or missing entirely; tax season requires a 'panic' search for documents.",
          "prerequisite": "FR.1",
          "review_frequency": 12
        },
        {
          "level": 3,
          "headline": "Monthly Profit Pulse",
          "observation": "Data-literate firms review a Profit & Loss (P&L) statement every 30 days. This allows leadership to identify margin drift or cost spikes before they become a threat to the cash runway.",
          "weights": {
            "impact": 8,
            "complexity": 4,
            "time_to_implement": 4,
            "direct_cost": 2
          },
          "audit_binary": "Is a P&L generated and reviewed by leadership within 15 days of every month-end?",
          "evidence": "Monthly Financial Statements signed by CEO/CFO.",
          "failure_signal": "Leadership only knows if the company made money at the end of the fiscal year; monthly health is a guess.",
          "prerequisite": "FR.2",
          "review_frequency": 12
        },
        {
          "level": 4,
          "headline": "Rolling Cash Forecasting",
          "observation": "Reliable companies maintain a 13-week rolling forecast. They predict exactly when currency will enter and leave the bank, preventing 'Sudden Death' due to lack of liquidity.",
          "weights": {
            "impact": 9,
            "complexity": 5,
            "time_to_implement": 4,
            "direct_cost": 1
          },
          "audit_binary": "Is there a weekly-updated 13-week forecast showing predicted bank balances?",
          "evidence": "13-Week Cash Flow Document.",
          "failure_signal": "The company is 'profitable' on paper but frequently lacks the cash to pay vendors or staff on time.",
          "prerequisite": "FR.3",
          "review_frequency": 52
        },
        {
          "level": 5,
          "headline": "Departmental Budgeting",
          "observation": "Mature organizations decentralize spending. Department heads are given a fixed budget based on the strategy and are held accountable for variances monthly.",
          "weights": {
            "impact": 8,
            "complexity": 6,
            "time_to_implement": 5,
            "direct_cost": 3
          },
          "audit_binary": "Does every owner on the Accountability Map have a written, enforced monthly budget?",
          "evidence": "Budget vs. Actual Variance Reports.",
          "failure_signal": "All spending requests must go to the Founder; there is no upper limit on what a department can spend without individual permission.",
          "prerequisite": "LD.5",
          "review_frequency": 12
        },
        {
          "level": 6,
          "headline": "Standardized Risk Transfer",
          "observation": "Sovereign assets protect the machine by transferring risk to third parties through adequate insurance and liability-limited contracts for 100% of deals.",
          "weights": {
            "impact": 7,
            "complexity": 6,
            "time_to_implement": 4,
            "direct_cost": 5
          },
          "audit_binary": "Are all major enterprise risks insured and all client/vendor deals under standard contracts?",
          "evidence": "Insurance Portfolio and MSA Folder.",
          "failure_signal": "The business operates on 'handshake deals'; a single lawsuit or physical accident could bankrupt the company.",
          "prerequisite": "LD.0",
          "review_frequency": 1
        },
        {
          "level": 7,
          "headline": "Strategic Financial Modeling",
          "observation": "Advanced firms model strategic moves in 'What-If' scenarios. They approve new spending only after proving the business survives a 'Worst Case' sales drop.",
          "weights": {
            "impact": 8,
            "complexity": 8,
            "time_to_implement": 7,
            "direct_cost": 4
          },
          "audit_binary": "Are all major strategic investments supported by a multi-scenario financial model before approval?",
          "evidence": "Scenario Impact Reports.",
          "failure_signal": "Hiring or expansion decisions are based on 'feeling optimistic' about future sales without stress-testing the bank account.",
          "prerequisite": "FR.3",
          "review_frequency": 4
        },
        {
          "level": 8,
          "headline": "Fast-Close Accounting Hygiene",
          "observation": "High-valuation institutions close their books within 5 business days of month-end, providing a primary signal of operational quality to investors.",
          "weights": {
            "impact": 7,
            "complexity": 8,
            "time_to_implement": 9,
            "direct_cost": 6
          },
          "audit_binary": "Are all company books fully reconciled and closed within 5 business days of month-end?",
          "evidence": "Month-End Closing Log.",
          "failure_signal": "Final numbers for the previous month aren't ready until the 25th of the next month; errors are frequently discovered later.",
          "prerequisite": "TI.6",
          "review_frequency": 12
        },
        {
          "level": 9,
          "headline": "The Sovereign Reserve",
          "observation": "Bulletproof firms maintain a liquid 'War Chest' of >6 months of operating expenses, making the company immune to market recessions or the loss of major customers.",
          "weights": {
            "impact": 9,
            "complexity": 9,
            "time_to_implement": 10,
            "direct_cost": 9
          },
          "audit_binary": "Does the company hold liquid cash reserves equal to >6 months of operating expenses in a separate account?",
          "evidence": "Reserve Account Statement.",
          "failure_signal": "The company lives 'month-to-month'; any delay in customer payments creates a payroll crisis.",
          "prerequisite": "FR.3",
          "review_frequency": 4
        },
        {
          "level": 10,
          "headline": "Continuous Diligence Readiness",
          "observation": "Theoretical perfection is operating as a fully transferable property with an external Data Room kept perpetually updated for instant investor review.",
          "weights": {
            "impact": 10,
            "complexity": 10,
            "time_to_implement": 10,
            "direct_cost": 10
          },
          "audit_binary": "Is there a digital Data Room containing all current legal and financial documents in a buyer-ready state?",
          "evidence": "Active Investor Data Room.",
          "failure_signal": "Selling the company would require months of 'cleaning the books' and locating missing contracts.",
          "prerequisite": "AI.10",
          "review_frequency": 2
        }
      ]
    },
    {
      "id": "AI",
      "name": "Assets & IP",
      "purpose": "The Value Multiplier.",
      "cxo_persona": "Chief Knowledge Officer",
      "description": "How the business documents its 'Secret Sauce,' protects its legal trademarks, and organizes its knowledge so the business is a valuable, independent asset.",
      "levels": [
        {
          "level": 0,
          "headline": "Asset Intent & Valuation Strategy",
          "observation": "Mature organizations operate from a documented 'Asset Strategy' that identifies proprietary know-how and brand elements requiring protection to maximize eventual valuation.",
          "weights": {
            "impact": 10,
            "complexity": 5,
            "time_to_implement": 5,
            "direct_cost": 2
          },
          "audit_binary": "Are the core Intellectual Property (IP) goals, brand protection rules, and exit/succession intent documented?",
          "evidence": "Asset Strategy Document.",
          "failure_signal": "The company has no strategy for capturing daily improvements; valuation is based purely on current cash flow with zero proprietary multiplier.",
          "prerequisite": "LD.0",
          "review_frequency": 1,
          "questions_to_answer": [
            "What is the specific 'Know-How' or process we have that competitors do not?",
            "What brand elements (Names, Logos, Slogans) must be legally protected?",
            "If the most experienced person left tomorrow, what knowledge would we lose?",
            "What is our strategy for 'Capturing' improvements made by the team?",
            "How do we organize our library so an outsider understands the firm in 48 hours?",
            "What is the valuation 'Multiple' goal we are building toward?"
          ]
        },
        {
          "level": 1,
          "headline": "End of Oral Tradition",
          "observation": "Successful institutions eliminate dependence on individual memory by recording critical 'Linchpin' knowledge in writing or video.",
          "weights": {
            "impact": 10,
            "complexity": 2,
            "time_to_implement": 2,
            "direct_cost": 1
          },
          "audit_binary": "Is the most critical 'Secret' or 'How-to' knowledge recorded in writing or video?",
          "evidence": "Knowledge Archive.",
          "failure_signal": "Critical knowledge lives only in people's heads; if a key employee leaves, the business is in immediate trouble.",
          "prerequisite": "LD.1",
          "review_frequency": 12,
          "example": "A recording of the founder explaining the specific nuances of closing high-value deals."
        },
        {
          "level": 2,
          "headline": "Digital Organization Standards",
          "observation": "Stable firms enforce strict naming and storage protocols across a shared drive, ensuring any team member (or AI agent) can locate the 'Source of Truth' instantly.",
          "weights": {
            "impact": 6,
            "complexity": 3,
            "time_to_implement": 3,
            "direct_cost": 1
          },
          "audit_binary": "Is the shared drive organized by department with a strict naming rule enforced for 100% of files?",
          "evidence": "Folder Map and Naming Protocol.",
          "failure_signal": "The central drive is a mess; staff spend hours asking each other where specific documents are located.",
          "prerequisite": "TI.3",
          "review_frequency": 4
        },
        {
          "level": 3,
          "headline": "The Central Company Wiki",
          "observation": "At this level, firms use a searchable internal knowledge base for all company rules and guides, stopping the inefficient cycle of answering the same questions repeatedly.",
          "weights": {
            "impact": 8,
            "complexity": 5,
            "time_to_implement": 4,
            "direct_cost": 2
          },
          "audit_binary": "Is there one central, searchable website or tool for all company rules and guides?",
          "evidence": "Live Company Wiki (e.g., Notion/Guru).",
          "failure_signal": "Guidelines are scattered across emails and chat history; new hires have no single place to learn company policy.",
          "prerequisite": "TI.2",
          "review_frequency": 12
        },
        {
          "level": 4,
          "headline": "Asset Uniformity (Templates)",
          "observation": "Mature organizations ban 'freestyle' work by using standard templates for 100% of recurring communications and documents, ensuring a consistent professional voice.",
          "weights": {
            "impact": 7,
            "complexity": 4,
            "time_to_implement": 4,
            "direct_cost": 1
          },
          "audit_binary": "Does the team use standard templates for 100% of recurring documents and emails?",
          "evidence": "Template Library.",
          "failure_signal": "Outputs look inconsistent; every email or report is written from scratch, wasting hundreds of hours annually.",
          "prerequisite": "BM.2",
          "review_frequency": 4
        },
        {
          "level": 5,
          "headline": "The Complete Playbook",
          "observation": "High-leverage firms document all 'Core Processes' as SOPs. The entire company could be handed to a new team who would know exactly how to run it without the founder.",
          "weights": {
            "impact": 9,
            "complexity": 7,
            "time_to_implement": 8,
            "direct_cost": 3
          },
          "audit_binary": "Are all 'Core Processes' from all departments written as Standard Operating Procedures (SOPs)?",
          "evidence": "Master Playbook with Table of Contents.",
          "failure_signal": "The 'Instruction Manual' for the business is incomplete; many departments still run on unwritten assumptions.",
          "prerequisite": "OP.5",
          "review_frequency": 4
        },
        {
          "level": 6,
          "headline": "Legal IP Protection",
          "observation": "Sovereign assets legally protect their names, logos, and proprietary inventions through trademarks or patents, preventing competitors from stealing market reputation.",
          "weights": {
            "impact": 7,
            "complexity": 6,
            "time_to_implement": 5,
            "direct_cost": 6
          },
          "audit_binary": "Are all logos, brand names, and proprietary inventions legally protected by trademarks or patents?",
          "evidence": "Trademarks & IP Registry.",
          "failure_signal": "A competitor could use our brand name or core process tomorrow with no legal recourse available to us.",
          "prerequisite": "BM.9",
          "review_frequency": 1
        },
        {
          "level": 7,
          "headline": "Searchable Intelligence",
          "observation": "Advanced firms use AI or advanced indexing to make the playbook 'alive.' Staff can ask questions and receive instant answers from the internal knowledge base.",
          "weights": {
            "impact": 8,
            "complexity": 8,
            "time_to_implement": 6,
            "direct_cost": 4
          },
          "audit_binary": "Can any piece of company knowledge be found instantly via a central, secure search bar?",
          "evidence": "Internal AI/Search System.",
          "failure_signal": "The playbook exists but is rarely used because it is difficult to navigate or search quickly.",
          "prerequisite": "TI.10",
          "review_frequency": 12
        },
        {
          "level": 8,
          "headline": "Franchise Readiness",
          "observation": "Data-ready firms link SOPs directly to tasks in the project management tool. The 'How' is embedded in the 'Work,' making the business model easily replicable.",
          "weights": {
            "impact": 9,
            "complexity": 9,
            "time_to_implement": 9,
            "direct_cost": 5
          },
          "audit_binary": "Are all SOPs and checklists linked directly to the daily tasks in the project management tool?",
          "evidence": "System Audit of Task-SOP integration.",
          "failure_signal": "Staff must leave their work tool to find instructions in the wiki; the 'theory' and 'practice' of work are disconnected.",
          "prerequisite": "OP.8",
          "review_frequency": 4
        },
        {
          "level": 9,
          "headline": "Cross-Functional Sync Mapping",
          "observation": "High-valuation firms visualize the entire value chain. They map how data and work flow between all 10 departments, ensuring systemic alignment.",
          "weights": {
            "impact": 8,
            "complexity": 9,
            "time_to_implement": 9,
            "direct_cost": 6
          },
          "audit_binary": "Is there a visual map showing how data and work flow between all 10 departments?",
          "evidence": "Value-Chain Map/Systems Diagram.",
          "failure_signal": "Changes in one department (e.g., Sales) often break processes in another (e.g., Ops) because dependencies are unmapped.",
          "prerequisite": "LD.3",
          "review_frequency": 1
        },
        {
          "level": 10,
          "headline": "Sovereign Exit-Ready Asset",
          "observation": "Theoretical perfection is reached when the business is a fully documented, proprietary property that requires zero input from the owner to generate value.",
          "weights": {
            "impact": 10,
            "complexity": 10,
            "time_to_implement": 10,
            "direct_cost": 10
          },
          "audit_binary": "Is the business fully documented and systemized so it operates as a proprietary, transferable property?",
          "evidence": "Due Diligence Data Room (100% Complete).",
          "failure_signal": "The company cannot be sold at a premium because the buyer sees it is still dependent on the founder's daily genius.",
          "prerequisite": "FR.10",
          "review_frequency": 2
        }
      ]
    }
  ]
};