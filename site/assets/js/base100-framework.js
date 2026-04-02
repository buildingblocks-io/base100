/**
 * BASE-100 Framework Data Bundle
 * AUTO-GENERATED — do not edit by hand.
 * Run: node scripts/build-framework-data.js
 *
 * Generated: 2026-04-02 13:44
 *
 * Usage in HTML:
 *   <script src="site/assets/js/base100-framework.js"></script>
 *   // window.BASE100_FRAMEWORK is then available globally.
 */
/* global window */
window.BASE100_FRAMEWORK = {
  "_generated": "2026-04-02T13:44:53.873Z",
  "meta": {
    "framework": {
      "id": "BASE-100",
      "name": "BASE-100",
      "full_name": "BASE-100 Global Standard for Business Maturity",
      "revision": "2026.1",
      "schema_version": "3.0",
      "status": "draft",
      "language": "en",
      "copyright": "2026 BASE-100 Institute",
      "authors": [
        "BASE-100 Institute",
        "Quinten 'Q' Marcelis"
      ],
      "about": "The Open Standard for Business Maturity"
    },
    "framework_description": {
      "summary": "BASE-100 is an open, human-readable and machine-readable standard for measuring business maturity. It maps a company across 10 universal business domains and 11 maturity levels, from Level 0 to Level 10, creating a total score from 0 to 100.",
      "purpose": "The purpose of BASE-100 is to help founders, operators, investors, advisors, and AI agents identify the current maturity of a business, detect its main constraint, and follow a clear path toward a more scalable, predictable, and transferable company.",
      "core_thesis": "A business is not just a creative project. It is also an engineered system. Most of the work required to run a valuable company is universal, measurable, and improvable.",
      "design_principle": "BASE-100 standardizes the universal operating core of a company so that leadership can focus on the differentiated edge where true market advantage is created.",
      "what_it_is": [
        "A universal maturity model",
        "A scoring framework",
        "An evidence-based operating standard",
        "A business audit structure",
        "A shared context layer for humans and AI"
      ],
      "what_it_is_not": [
        "A substitute for product vision",
        "A guarantee of product-market fit",
        "A creative strategy generator",
        "A software-specific implementation guide",
        "A promise that every company becomes a unicorn"
      ]
    },
    "positioning": {
      "category": "Open business maturity standard",
      "standard_type": "Reference model",
      "intended_use": [
        "Self-assessment",
        "Advisory audits",
        "Operational due diligence",
        "Maturity benchmarking",
        "Roadmap planning",
        "AI operating context"
      ],
      "primary_outcome": "To transform a founder-dependent business into a scalable, governable, and transferable asset.",
      "secondary_outcomes": [
        "Increased clarity",
        "Reduced operational fragility",
        "Better delegation",
        "Higher predictability",
        "Improved valuation readiness"
      ]
    },
    "governance_and_curation": {
      "governance_model": "Annual revision by the BASE-100 Institute with expert review and public commentary.",
      "expert_review": "Each milestone in the framework is reviewed against real-world operating practice, auditability, and relevance across multiple industries.",
      "annual_revision_principle": "The standard is revised annually so that the required level of maturity reflects current business reality rather than outdated best practice.",
      "change_control": {
        "revision_cycle": "annual",
        "proposal_sources": [
          "Institute research",
          "Operator feedback",
          "Advisor feedback",
          "Audit observations",
          "Market and technology shifts"
        ],
        "backward_compatibility_goal": "High, unless a definition is no longer defensible or useful."
      }
    },
    "philosophy": {
      "operating_beliefs": [
        "Maturity is not the same as size.",
        "A larger company can be less mature than a smaller one.",
        "A company becomes more valuable when it becomes less dependent on individual heroics.",
        "The weakest important constraint limits the performance of the whole system.",
        "Good judgment is strengthened by evidence, not replaced by opinion.",
        "Standardization should reduce friction, not remove creativity.",
        "A company becomes more transferable as its logic becomes more explicit."
      ],
      "design_goals": [
        "Simple enough to understand",
        "Strict enough to audit",
        "Flexible enough for multiple industries",
        "Useful for humans and machines",
        "Aspirational but defensible"
      ]
    },
    "scope": {
      "applies_to": [
        "Startups",
        "SMEs",
        "Service businesses",
        "Software companies",
        "Agencies",
        "Product businesses",
        "Industrial firms",
        "Multi-entity companies"
      ],
      "not_limited_by": [
        "Industry",
        "Country",
        "Headcount",
        "Revenue model",
        "Technology stack"
      ],
      "important_limits": [
        "BASE-100 measures operational maturity, not market size.",
        "BASE-100 does not replace legal, tax, regulatory, or industry-specific compliance frameworks.",
        "BASE-100 does not determine whether the product is good enough to win its market.",
        "BASE-100 is strongest when used together with operator judgment and market reality."
      ]
    },
    "definitions": {
      "business": "A legal and operational entity that creates and delivers value in exchange for money.",
      "domain": "One of the 10 universal areas of business operation measured by the framework.",
      "cell": "The intersection of one domain and one maturity level.",
      "level": "A maturity state from 0 to 10 within a domain.",
      "maturity": "The degree to which a business activity is designed, organized, measured, improved, and independent of specific individuals.",
      "constraint": "The domain-level weakness currently limiting the performance, scalability, or transferability of the business.",
      "evidence": "A verifiable artifact that proves a maturity claim is true.",
      "audit": "The process of checking whether a maturity claim is supported by acceptable evidence.",
      "artifact": "A document, system record, workflow log, dashboard, policy, template, or other observable proof.",
      "operator": "A person responsible for running part or all of the business.",
      "founder_dependence": "A condition in which important business activity requires direct founder intervention to function reliably.",
      "transferable": "Able to continue operating successfully under a new owner or leadership structure.",
      "product": "A repeatable unit of value delivered to a customer, whether physical, digital, or service-based.",
      "offer": "A clearly defined commercial package combining product or service, target customer, scope, and pricing logic.",
      "lead": "A documented prospect who has shown relevant commercial interest.",
      "customer": "A person or entity that has already paid for an offer.",
      "SOP": "A written standard operating procedure describing how a recurring task is completed.",
      "KPI": "A numeric metric used to measure performance against an expected result.",
      "command_center": "A live view of key business metrics across domains.",
      "source_of_truth": "The approved system or document where the official current version of information lives.",
      "review_frequency": "How often a cell should be checked to confirm it remains true."
    },
    "maturity_model": {
      "scale_name": "BASE-100 maturity scale",
      "level_range": {
        "min": 0,
        "max": 10
      },
      "total_possible_score": 100,
      "scoring_unit": "One point per validated cell level per domain",
      "interpretation": "Each domain is scored from 0 to 10. Total maturity is the sum of all 10 domain scores.",
      "important_note": "A high total score does not cancel out a critical weakness in a core domain."
    },
    "universal_level_logic": {
      "0": {
        "name": "Designed",
        "definition": "The domain has a written design, intent, and success definition."
      },
      "1": {
        "name": "Defined",
        "definition": "The core object, process, or rule exists in basic written form."
      },
      "2": {
        "name": "Organized",
        "definition": "Information is stored in one place with basic order and operational hygiene."
      },
      "3": {
        "name": "Owned",
        "definition": "A named person owns the domain outcome and visibility exists."
      },
      "4": {
        "name": "Standardized",
        "definition": "The work follows a defined method, template, or repeatable process."
      },
      "5": {
        "name": "Measured",
        "definition": "Numeric targets and regular reporting exist."
      },
      "6": {
        "name": "Proactive",
        "definition": "The business prevents problems through planning, forecasting, or structured intervention."
      },
      "7": {
        "name": "Integrated",
        "definition": "The domain works in sync with other domains through shared workflows, systems, or decision rules."
      },
      "8": {
        "name": "Improving",
        "definition": "The domain systematically improves through feedback loops and regular refinement."
      },
      "9": {
        "name": "Independent",
        "definition": "The domain continues performing with low key-person risk."
      },
      "10": {
        "name": "Transferable",
        "definition": "The domain is highly autonomous, governable, and ready for external transfer or institutional oversight."
      }
    },
    "stage_model": {
      "note": "Stages are descriptive groupings of typical business maturity, not hard requirements by size.",
      "stages": {
        "discovery": {
          "stage_order": 1,
          "base100_levels": "0-2",
          "base100_score": "0-20",
          "universal_terms": [
            "Discovery",
            "Search",
            "Startup"
          ],
          "focus": "Problem-solution fit and initial business design",
          "management_model": "Founder-led",
          "primary_crisis": "Existence",
          "typical_scale": {
            "revenue": "$0-$500K",
            "headcount": "1-5",
            "profit_margin": "Negative to break-even",
            "founder_role": "Builder / Operator"
          }
        },
        "validation": {
          "stage_order": 2,
          "base100_levels": "3-4",
          "base100_score": "21-40",
          "universal_terms": [
            "Validation",
            "Early Stage",
            "Market Validation"
          ],
          "focus": "Repeatable sales and basic operating control",
          "management_model": "Founder-led organization",
          "primary_crisis": "Leadership",
          "typical_scale": {
            "revenue": "$500K-$3M",
            "headcount": "3-15",
            "profit_margin": "0%-10%",
            "founder_role": "Seller / Director"
          }
        },
        "systemization": {
          "stage_order": 3,
          "base100_levels": "5-6",
          "base100_score": "41-60",
          "universal_terms": [
            "Systemization",
            "Growth Stage",
            "Manager-led Company"
          ],
          "focus": "Documented management, repeatability, and proactive control",
          "management_model": "Manager-led",
          "primary_crisis": "Autonomy",
          "typical_scale": {
            "revenue": "$3M-$15M",
            "headcount": "10-50",
            "profit_margin": "10%-20%",
            "founder_role": "Manager / Architect"
          }
        },
        "scaling": {
          "stage_order": 4,
          "base100_levels": "7-8",
          "base100_score": "61-80",
          "universal_terms": [
            "Scaling",
            "Expansion",
            "System-led Organization"
          ],
          "focus": "Integration, automation, and predictable growth",
          "management_model": "System-led",
          "primary_crisis": "Control",
          "typical_scale": {
            "revenue": "$15M-$100M",
            "headcount": "40-250",
            "profit_margin": "15%-30%",
            "founder_role": "Strategist / Governor"
          }
        },
        "institution": {
          "stage_order": 5,
          "base100_levels": "9-10",
          "base100_score": "81-100",
          "universal_terms": [
            "Institution",
            "Enterprise Platform",
            "Transferable Asset"
          ],
          "focus": "Governance, resilience, and transferability",
          "management_model": "Governed asset",
          "primary_crisis": "Renewal",
          "typical_scale": {
            "revenue": "$100M+",
            "headcount": "150+",
            "profit_margin": "20%-40%",
            "founder_role": "Owner / Steward"
          }
        }
      }
    },
    "scoring_principles": {
      "base_rule": "A cell is only counted when the evidence standard is met.",
      "evidence_rule": "A verbal claim is not enough. A maturity claim must be supported by a current artifact.",
      "freshness_rule": "Evidence should be current enough to prove the business still operates at that level.",
      "constraint_rule": "A weak core domain can limit the practical value of strength in other domains.",
      "anti-vanity_rule": "Activity is not maturity. A company does not score higher merely because it is busy or uses many tools.",
      "copy_rule": "Buying software does not count unless the process is actually implemented and adopted.",
      "inheritance_rule": "Higher levels should not contradict lower levels. If a lower foundational level has clearly collapsed, higher claims should be reviewed.",
      "review_rule": "A maturity level must remain true over time, not only on the day of an audit."
    },
    "evidence_standards": {
      "accepted_evidence_types": [
        "Strategy document",
        "Policy",
        "SOP",
        "Template",
        "Checklist",
        "Meeting minutes",
        "Dashboard",
        "System screenshot",
        "System log",
        "Report",
        "Contract",
        "Financial statement",
        "Training record",
        "Board record",
        "Data room structure",
        "Recorded workflow",
        "Folder structure map"
      ],
      "minimum_evidence_quality": [
        "Specific",
        "Current",
        "Verifiable",
        "Relevant to the exact claim",
        "Accessible to the people who use it"
      ],
      "non_evidence_examples": [
        "A verbal explanation with no artifact",
        "A blank template never used in practice",
        "A document that exists but is outdated and ignored",
        "A tool subscription with no implementation",
        "A one-time action presented as a system"
      ]
    },
    "audit_model": {
      "audit_style": "Binary by cell, judgment by system",
      "cell_result_types": [
        "pass",
        "fail",
        "partial",
        "not_applicable"
      ],
      "binary_rule": "Each cell should be written so the main audit question can be answered yes or no.",
      "partial_use": "Partial may be used internally during drafting, but the published standard should aim for pass/fail clarity.",
      "review_frequencies": {
        "1": "Annual",
        "2": "Twice per year",
        "4": "Quarterly",
        "12": "Monthly",
        "52": "Weekly",
        "250": "Per business day"
      }
    },
    "cell_schema": {
      "required_fields": [
        "level",
        "headline",
        "plain_english",
        "observation",
        "why_it_matters",
        "audit_binary",
        "evidence",
        "evidence_example",
        "example",
        "common_fake_good",
        "failure_signal",
        "prerequisite",
        "review_frequency",
        "weights"
      ],
      "field_definitions": {
        "level": "Integer from 0 to 10.",
        "headline": "Short name of the maturity milestone.",
        "plain_english": "Simple explanation understandable by non-native operators.",
        "observation": "The operating reality that should exist at this level.",
        "why_it_matters": "Business reason this milestone increases quality, scalability, or transferability.",
        "audit_binary": "Main yes/no question used to validate the level.",
        "evidence": "Name of the required artifact.",
        "evidence_example": "What acceptable evidence looks like in practice.",
        "example": "A 90% best-practice implementation example that can be copied without naming brands.",
        "common_fake_good": "A misleading version that looks mature but is not.",
        "failure_signal": "Observable real-world sign that the level is not actually achieved.",
        "prerequisite": "The cell or condition that should exist first, or null if none.",
        "review_frequency": "Numeric review frequency code.",
        "weights": "Relative implementation profile for prioritization."
      },
      "weights_schema": {
        "impact": "1-10 impact on value, profit potential, or system strength",
        "complexity": "1-10 implementation difficulty",
        "time_to_implement": "1-10 expected effort duration",
        "direct_cost": "1-10 direct financial cost"
      }
    },
    "writing_rules": {
      "rule_1": "Every cell must be understandable by a competent non-native English operator.",
      "rule_2": "Every cell must describe a visible operating reality, not a vague aspiration.",
      "rule_3": "Every audit question must be verifiable in a practical audit.",
      "rule_4": "Every evidence field must name a concrete artifact.",
      "rule_5": "Every example must be tool-agnostic and copyable.",
      "rule_6": "Every failure signal must describe what broken reality looks like.",
      "rule_7": "Every level must align with the universal level logic.",
      "rule_8": "Avoid industry-specific assumptions unless clearly marked.",
      "rule_9": "Avoid magic numbers unless they are broadly defensible or explicitly illustrative.",
      "rule_10": "Level 10 should be aspirational but still defensible."
    },
    "implementation_guidance": {
      "recommended_usage_order": [
        "Score the current state honestly",
        "Identify the main constraint",
        "Prioritize the next few highest-leverage cells",
        "Collect evidence as implementation progresses",
        "Re-audit on the defined frequency",
        "Use the framework as a roadmap, not just a score"
      ],
      "important_note": "Companies should not try to complete every possible improvement at once. The framework is most useful when it helps leadership focus on the next constraint."
    },
    "extensions": [
      {
        "name": "Industry Implementation Packs",
        "description": "Optional guidance layers for sector-specific implementation without changing the core standard."
      },
      {
        "name": "Audit Profiles",
        "description": "Different audit depth levels for self-assessment, advisory review, lender review, or investor due diligence."
      },
      {
        "name": "AI Context Profiles",
        "description": "Structured operating context for AI agents working inside the business."
      },
      {
        "name": "Benchmarking Layers",
        "description": "Future comparative datasets by company type, maturity stage, and operating model."
      }
    ],
    "known_limitations": [
      "A mature company can still fail if the market is wrong.",
      "A great product can still be run through immature operations.",
      "Some industry-specific controls must be added outside the base standard.",
      "The framework measures maturity, not genius, timing, or luck.",
      "The framework is strongest when used repeatedly over time, not once."
    ],
    "future_domain_structure": {
      "domain_count": 10,
      "expected_domain_fields": [
        "id",
        "name",
        "purpose",
        "cxo_persona",
        "description",
        "levels"
      ],
      "placeholder": "Domains to be completed one by one in later revisions."
    },
    "domains": []
  },
  "schema": {
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$id": "https://base100.org/schemas/base100_2026.schema.json",
    "title": "BASE100 Domain Standard Schema",
    "type": "object",
    "additionalProperties": false,
    "required": [
      "schema_version",
      "language",
      "domains"
    ],
    "properties": {
      "schema_version": {
        "type": "string",
        "pattern": "^\\d+\\.\\d+$"
      },
      "language": {
        "type": "string",
        "minLength": 2
      },
      "domains": {
        "type": "array",
        "minItems": 1,
        "items": {
          "$ref": "#/$defs/domain"
        }
      }
    },
    "$defs": {
      "frequency": {
        "type": "integer",
        "enum": [
          1,
          2,
          4,
          12,
          52,
          250
        ]
      },
      "weights": {
        "type": "object",
        "additionalProperties": false,
        "required": [
          "impact",
          "complexity",
          "time_to_implement",
          "direct_cost"
        ],
        "properties": {
          "impact": {
            "type": "integer",
            "minimum": 1,
            "maximum": 10
          },
          "complexity": {
            "type": "integer",
            "minimum": 1,
            "maximum": 10
          },
          "time_to_implement": {
            "type": "integer",
            "minimum": 1,
            "maximum": 10
          },
          "direct_cost": {
            "type": "integer",
            "minimum": 1,
            "maximum": 10
          }
        }
      },
      "direction": {
        "type": "object",
        "additionalProperties": false,
        "required": [
          "name",
          "purpose",
          "required_outputs",
          "primary_owner",
          "minimum_standard",
          "review_frequency",
          "questions_to_answer"
        ],
        "properties": {
          "name": {
            "type": "string",
            "minLength": 1
          },
          "purpose": {
            "type": "string",
            "minLength": 1
          },
          "required_outputs": {
            "type": "array",
            "minItems": 1,
            "items": {
              "type": "string",
              "minLength": 1
            },
            "uniqueItems": true
          },
          "primary_owner": {
            "type": "string",
            "minLength": 1
          },
          "contributors": {
            "type": "array",
            "items": {
              "type": "string",
              "minLength": 1
            },
            "uniqueItems": true
          },
          "minimum_standard": {
            "type": "string",
            "minLength": 1
          },
          "review_frequency": {
            "$ref": "#/$defs/frequency"
          },
          "questions_to_answer": {
            "type": "array",
            "minItems": 1,
            "items": {
              "type": "string",
              "minLength": 1
            }
          }
        }
      },
      "level": {
        "type": "object",
        "additionalProperties": false,
        "required": [
          "level",
          "headline",
          "plain_english",
          "observation",
          "why_it_matters",
          "audit_binary",
          "evidence",
          "evidence_example",
          "example",
          "false_positive_signals",
          "failure_signals",
          "prerequisite",
          "review_frequency",
          "weights"
        ],
        "properties": {
          "level": {
            "type": "integer",
            "minimum": 1,
            "maximum": 10
          },
          "headline": {
            "type": "string",
            "minLength": 1
          },
          "plain_english": {
            "type": "string",
            "minLength": 1
          },
          "observation": {
            "type": "string",
            "minLength": 1
          },
          "why_it_matters": {
            "type": "string",
            "minLength": 1
          },
          "audit_binary": {
            "type": "string",
            "minLength": 1
          },
          "evidence": {
            "type": "string",
            "minLength": 1
          },
          "evidence_example": {
            "type": "string",
            "minLength": 1
          },
          "example": {
            "type": "string",
            "minLength": 1
          },
          "false_positive_signals": {
            "type": "array",
            "minItems": 1,
            "items": {
              "type": "string",
              "minLength": 1
            }
          },
          "failure_signals": {
            "type": "array",
            "minItems": 1,
            "items": {
              "type": "string",
              "minLength": 1
            }
          },
          "prerequisite": {
            "oneOf": [
              {
                "type": "null"
              },
              {
                "type": "string",
                "pattern": "^[A-Z]{2}\\.([1-9]|10)$"
              }
            ]
          },
          "review_frequency": {
            "$ref": "#/$defs/frequency"
          },
          "weights": {
            "$ref": "#/$defs/weights"
          }
        }
      },
      "domain": {
        "type": "object",
        "additionalProperties": false,
        "required": [
          "id",
          "name",
          "purpose",
          "cxo_persona",
          "description",
          "direction",
          "levels"
        ],
        "properties": {
          "id": {
            "type": "string",
            "enum": [
              "LD",
              "PR",
              "BM",
              "RS",
              "OP",
              "CS",
              "TC",
              "TI",
              "FR",
              "AI"
            ]
          },
          "name": {
            "type": "string",
            "minLength": 1
          },
          "purpose": {
            "type": "string",
            "minLength": 1
          },
          "cxo_persona": {
            "type": "string",
            "minLength": 1
          },
          "description": {
            "type": "string",
            "minLength": 1
          },
          "direction": {
            "$ref": "#/$defs/direction"
          },
          "levels": {
            "type": "array",
            "minItems": 10,
            "maxItems": 10,
            "items": {
              "$ref": "#/$defs/level"
            }
          }
        }
      }
    }
  },
  "domains": {
    "AI": {
      "id": "AI",
      "name": "Assets & IP",
      "purpose": "Convert the company's operational output into durable assets that increase enterprise value independently of the people who created them.",
      "cxo_persona": "Chief Executive Officer",
      "description": "How the company identifies, documents, protects, and develops the intellectual property, brand equity, proprietary data, and institutional knowledge that give it lasting competitive advantage. This is the domain that separates a business from a person with a business. Every other domain creates value through activity. This domain captures that value and converts it into something the company owns permanently. A mature assets and IP domain means an acquirer can assess and price the company's value from its documented assets alone, without needing the founder to explain what makes the company worth buying.",
      "direction": {
        "name": "Asset and IP Strategy",
        "purpose": "Define how the company transforms operational output into long-term assets that increase enterprise value, protect competitive advantage, and make the company genuinely transferable.",
        "required_outputs": [
          "institutional_knowledge_base",
          "asset_catalogue",
          "ip_protection_strategy",
          "process_asset_library",
          "proprietary_data_strategy",
          "brand_asset_compounding_plan",
          "asset_valuation_framework",
          "asset_review_rhythm"
        ],
        "primary_owner": "Chief Executive Officer",
        "contributors": [
          "product_lead",
          "technology_lead",
          "finance_lead",
          "marketing_lead"
        ],
        "minimum_standard": "One documented understanding exists of which company outputs should become long-term assets, which assets are currently protected, and how the asset base is being deliberately developed.",
        "review_frequency": 4,
        "questions_to_answer": [
          "What knowledge or systems does this company own that a well-funded competitor could not replicate in 12 months?",
          "Which outputs of the company's daily operations are becoming assets, and which are evaporating as soon as they are produced?",
          "What proprietary data does the company collect that competitors do not have, and is it being organized and protected?",
          "If the founder left tomorrow, which assets would stay with the company and which would effectively leave with them?",
          "What legal protections exist for the company's core brand, methodology, and intellectual property, and when do they expire?",
          "What is the company's brand worth independently of the founder's personal reputation, and is that number growing?",
          "What would an acquirer value most in this company beyond the revenue it generates, and is that thing documented, protected, and measurably growing?",
          "How does the company systematically capture the learning from every delivery, every client, and every operational improvement as a permanent asset rather than a temporary benefit?"
        ]
      },
      "levels": [
        {
          "level": 1,
          "headline": "Institutional Knowledge Documented",
          "plain_english": "The knowledge that would walk out the door with the founder is written down and stored where the company can access it.",
          "observation": "At Level 1, the company has begun converting founder knowledge into company knowledge. This is not process documentation, which belongs in operations, and it is not product documentation, which belongs in product. It is the institutional knowledge that exists only in the founder's experience: why key strategic decisions were made, what the company has learned about its market and customers that is not obvious to outsiders, the reasoning behind the current positioning, and the lessons from the most significant failures and successes. A new leader joining the company could read this knowledge base and understand the company's accumulated intelligence without a series of conversations with the founder.",
          "why_it_matters": "Every hour of founder knowledge that is not written down is an asset the company does not own. It belongs to the founder personally. When they leave, retire, or step back, it leaves with them. Documenting institutional knowledge is not about bureaucracy. It is about converting a personal asset into a company asset, one document at a time. This is where enterprise value begins to separate from personal value.",
          "audit_binary": "Is there a written institutional knowledge base containing at least the reasoning behind the company's top five strategic decisions, the most important customer and market insights accumulated to date, and the key lessons from significant operational failures or pivots, updated within the past six months?",
          "evidence": "Institutional Knowledge Base",
          "evidence_example": "A document or wiki section containing: the reasoning behind at least five major strategic decisions with the context at the time and the outcome, at least 10 customer and market insights not available from public sources, and at least three documented lessons from significant failures or changes in direction. Updated within six months.",
          "example": "A knowledge base section called Company Intelligence containing three chapters. Strategic decisions: why the company moved from a retainer model to a project model in 2022, including the client conversations that prompted the change and what happened to retention afterward. Market insights: seven observations about how the target market buys, including which triggers indicate readiness to buy and which concerns always appear before a decision. Lessons learned: three pivots, each documented with the original assumption, what the data showed, what changed, and what would be done differently.",
          "false_positive_signals": [
            "Process documents and SOPs exist in operations but the strategic reasoning, market insights, and accumulated experience of the founder have never been written down anywhere.",
            "A knowledge base was started during a documentation sprint two years ago and contains three articles that were never added to, making it a folder rather than a functioning resource."
          ],
          "failure_signals": [
            "When the founder takes a holiday, new strategic questions arise that nobody else can answer because the context and reasoning behind past decisions exists only in the founder's memory.",
            "A new senior hire spends their first three months asking the founder questions about the market, the positioning, and past decisions that should all be findable in writing."
          ],
          "prerequisite": "OD.3",
          "review_frequency": 2,
          "weights": {
            "impact": 7,
            "complexity": 3,
            "time_to_implement": 4,
            "direct_cost": 1
          }
        },
        {
          "level": 2,
          "headline": "Asset Catalogue Organized",
          "plain_english": "Every asset the company owns is listed in one catalogue: brand assets, IP registrations, proprietary documents, content, data, and tools.",
          "observation": "At Level 2, a complete asset catalogue exists. It covers every category of company-owned asset: brand assets including logo files, domain names, and social media profiles; any registered trademarks or filed patents; proprietary documents including methodologies, frameworks, and templates; the content library of published articles, case studies, and whitepapers; proprietary data collected through operations; and any software or automation tools the company has built. A new owner looking at this catalogue would know what they are buying beyond the revenue stream. Nothing is assumed to be obvious.",
          "why_it_matters": "An asset catalogue is what separates a business from a person who runs a business. A person with a business has skills, relationships, and experience. A business has documented, catalogued assets that belong to the legal entity. The catalogue itself changes how leadership thinks about the company. When assets are listed, their value becomes visible. When their value is visible, their development becomes intentional. When they are not listed, they are invisible, unprotected, and likely to be undervalued at any transaction.",
          "audit_binary": "Is there a current asset catalogue covering at minimum brand assets, any registered IP, proprietary documents and frameworks, content library, proprietary data, and any company-built tools, updated within the past six months and accessible to leadership without requesting it?",
          "evidence": "Company Asset Catalogue",
          "evidence_example": "A structured document listing assets by category, each with: asset name, description, legal owner, location or registration number where applicable, and last reviewed date. Updated within six months.",
          "example": "Asset catalogue with six categories. Brand assets: primary and secondary logo in vector and raster formats, three domain names, LinkedIn company page, and two social media handles. IP registrations: trademark application filed for the company name in the Benelux, pending. Proprietary documents: the delivery methodology in 12 stages, four client diagnostic frameworks, eight proposal templates, and three pricing calculators. Content library: 47 published articles, six case studies, two whitepapers, and one research report. Data: a customer outcome dataset covering 214 completed engagements with anonymized input and output metrics. Tools: one custom reporting automation built internally. All listed with location and access information.",
          "false_positive_signals": [
            "The company has many of these assets but they exist in different locations across different tools and nobody has ever compiled a complete list, making the total asset base invisible.",
            "An asset catalogue was created for a pitch or a due diligence process and has not been updated since, meaning it reflects the asset base at a point in time rather than the current state."
          ],
          "failure_signals": [
            "During a potential acquisition conversation, the founder struggles to list what the company actually owns beyond its client list and its team, because no asset catalogue exists.",
            "The company discovers that a domain name or social media handle it considers core to the brand has expired or been taken by a third party because no one was tracking the renewal schedule."
          ],
          "prerequisite": "AI.1",
          "review_frequency": 2,
          "weights": {
            "impact": 7,
            "complexity": 3,
            "time_to_implement": 3,
            "direct_cost": 1
          }
        },
        {
          "level": 3,
          "headline": "Named Asset Owner and Basic IP Protection",
          "plain_english": "One person is accountable for the company's asset and IP portfolio, core brand trademarks are filed, and all employees and contractors have signed IP assignment agreements.",
          "observation": "At Level 3, two things are true. One named person owns the asset and IP function. They can answer, at any moment, what the company owns, what is protected, and what is at risk. And the basic legal protection layer is in place: trademark applications have been filed for the core brand name and logo in the company's primary markets, every employee and full-time contractor has signed a contract containing an IP assignment clause transferring any work they produce for the company to the company, and any third party who accesses proprietary information has signed an NDA before receiving it.",
          "why_it_matters": "IP assignment clauses in employment contracts cost almost nothing to implement and are catastrophically expensive to add retroactively after a dispute arises. Without them, a developer who built a core tool, a consultant who created a key methodology, or a marketer who designed the brand identity may have a credible claim to partial ownership of those assets. The NDA policy matters for the same reason: proprietary information shared without protection is no longer protectable. The named asset owner ensures these protections do not drift back into informality as the company grows.",
          "audit_binary": "Is there one named person accountable for asset and IP management, have trademark applications been filed for the core brand name and logo in at least the primary operating market, and do all current employees and contractors have signed contracts containing an IP assignment clause?",
          "evidence": "Asset Ownership Assignment, Trademark Application Records, and IP Assignment Clause Confirmation",
          "evidence_example": "A written ownership assignment naming the asset and IP owner. Trademark application records showing filings for the core brand name and logo. A confirmation from the people function that all current employees and contractors have signed contracts containing an IP assignment clause, with a record of the clause template used.",
          "example": "The CEO is named as asset and IP owner in the accountability chart. Trademark: the company name and primary logo are registered trademarks in the Benelux, registration number and renewal date recorded in the asset catalogue. IP assignment: all employee contracts include a standard IP assignment clause transferring any work produced in the scope of employment to the company. The clause template was reviewed by an IP attorney two years ago. Confirmed by the HR lead that all nine current employees and three active contractors have signed contracts containing this clause. NDA policy: any external party accessing proprietary methodology, pricing, or customer data receives an NDA before the first material sharing.",
          "false_positive_signals": [
            "The founder believes the company owns its brand, tools, and methodology because the company paid for them, without realizing that without IP assignment clauses, the legal position may be more complex.",
            "A trademark application was discussed and a budget was allocated but the filing has been delayed for six months because nobody owns the action and it keeps being deprioritized."
          ],
          "failure_signals": [
            "A former employee or contractor claims ownership of or rights to something they built while working for the company, and the company cannot produce an IP assignment agreement to counter the claim.",
            "A competitor begins using a brand name or visual identity that is confusingly similar to the company's, and the company has no trademark registration to use as the basis for a legal response."
          ],
          "prerequisite": "AI.2",
          "review_frequency": 4,
          "weights": {
            "impact": 9,
            "complexity": 4,
            "time_to_implement": 4,
            "direct_cost": 3
          }
        },
        {
          "level": 4,
          "headline": "Standardized Asset Creation",
          "plain_english": "Operational experience is systematically captured as reusable assets through a defined process, and a content creation process converts company knowledge into published intellectual capital.",
          "observation": "At Level 4, the company creates assets deliberately rather than accidentally. Two standard processes exist. A process library workflow defines how operational experience becomes a reusable asset: after every significant engagement, delivery, or project, a defined review extracts the learnings and either creates a new template, updates an existing framework, or adds to the knowledge base. A content creation process defines how company knowledge becomes published thought leadership: who can propose topics, how they are reviewed and approved, how they are produced, and how they are published and catalogued. Both processes run on a regular cycle rather than only when someone has time.",
          "why_it_matters": "Every delivery the company completes contains learnings. Every client conversation surfaces insights. Every operational problem that gets solved creates knowledge. Without a defined process for capturing that learning as an asset, it evaporates at the same pace it is created. The company that implements this process gets smarter with every engagement. The company that does not keeps relearning the same lessons at the same cost indefinitely. Content as intellectual capital matters for a related reason: published knowledge attracts clients, builds authority, and compounds into brand equity in a way that operational excellence alone never does.",
          "audit_binary": "Is there a defined process library workflow that has produced at least three new reusable assets in the past quarter, and a content creation process that has published at least four pieces of intellectual capital in the past 60 days, each catalogued in the asset catalogue?",
          "evidence": "Process Library with Creation Log and Content Creation Process with Publication Archive",
          "evidence_example": "A process library document showing at least 10 reusable assets and a creation log showing at least three new or updated assets in the past quarter. A content creation process document and a publication archive showing at least four pieces published in the past 60 days, each catalogued with its location and the date added to the asset catalogue.",
          "example": "Process library: the workflow requires a 30-minute post-project review after every engagement above 10,000 euros. The review extracts: one reusable template or checklist, one addition to the knowledge base, and one update to the relevant SOP if a better method was found. Last quarter: a new client diagnostic questionnaire created after three projects revealed the same gap in the current version, two SOP updates based on delivery improvements, and one new pricing calculator built from a particularly effective estimation method. Content creation: a monthly content review proposes topics from the market intelligence repository, the knowledge base, and recent client conversations. Topics approved by the CEO. Produced by the author, reviewed by one senior team member, published to the company blog and LinkedIn, and catalogued. Last 60 days: four articles published on topics sourced from recent client conversations, all catalogued with their publication date and platform.",
          "false_positive_signals": [
            "Post-project reviews happen informally in team conversations but nothing is written down and no new asset results from the review, meaning learning evaporates at the same rate it is created.",
            "Content is produced and published when someone has inspiration or time, but no defined process exists and the publication rate varies from four pieces per month to zero depending on the team's workload."
          ],
          "failure_signals": [
            "The same mistake recurs across engagements because no process exists to capture the lesson from the first occurrence as a permanent asset.",
            "The company's content output has been zero for more than 30 days because the content creation process depends on the founder's personal time and initiative rather than a defined team workflow."
          ],
          "prerequisite": "AI.3",
          "review_frequency": 4,
          "weights": {
            "impact": 8,
            "complexity": 5,
            "time_to_implement": 5,
            "direct_cost": 2
          }
        },
        {
          "level": 5,
          "headline": "Asset Value Measured",
          "plain_english": "The company tracks at least four asset value metrics quarterly, including brand reach growth, IP portfolio coverage, process library size, and data asset depth.",
          "observation": "At Level 5, the company measures its assets rather than simply possessing them. Four metrics are tracked quarterly at minimum. Brand reach: the growth in the primary channel audience size, content engagement rate, and inbound lead volume attributable to brand authority. IP portfolio: the number of registered trademarks, the geographic coverage, and the renewal schedule compliance. Process library: the number of reusable assets, the quarterly addition rate, and the documented time-saving or quality improvement attributed to the library. Data asset: the volume, uniqueness, and decision-making utility of the proprietary dataset. All four have targets. All are reviewed quarterly.",
          "why_it_matters": "An asset you cannot measure is an asset you cannot develop intentionally. Without metrics, the asset base grows or shrinks based on whatever activity happens to produce or erode it. With metrics, the company can set targets, identify which assets are compounding and which are decaying, and make deliberate investment decisions about where to focus asset development effort. Asset measurement is also what makes the company's value legible to any external party: an investor or acquirer who sees measured, growing assets assigns a multiple to them. One who sees undescribed, unmeasured assets discounts them.",
          "audit_binary": "Are at least four asset value metrics covering brand reach, IP portfolio coverage, process library growth, and data asset depth tracked quarterly with defined targets, reviewed by leadership, and showing a trend over at least two consecutive quarters?",
          "evidence": "Asset Value Metrics Report with Quarterly Review Records",
          "evidence_example": "A quarterly asset metrics report for at least two consecutive quarters showing at least four metrics with targets, actuals, and trend. A record of leadership review of the report.",
          "example": "Q3 asset metrics. Brand reach: LinkedIn audience 4,800 followers, up from 4,100 in Q2. Content engagement rate 3.4%, target above 2.5%. Inbound leads attributable to content: 9 of 21 total leads this quarter cited a piece of published content as the first point of contact. IP portfolio: two registered trademarks, both renewal dates confirmed more than 12 months out. No geographic coverage gaps identified for current operating markets. Process library: 34 reusable assets, up from 29 in Q2. New assets added this quarter: five. Time saving attributed to library use: estimated 12 hours per month across the delivery team. Data asset: 241 completed engagement records in the outcome dataset, up from 214 in Q2. Uniqueness confirmed: no comparable dataset exists in the public domain for this market segment.",
          "false_positive_signals": [
            "Assets exist and are used but no metrics have ever been defined to track whether they are growing or declining, meaning the company cannot tell an investor whether its assets are more or less valuable than they were a year ago.",
            "Brand metrics such as follower count are tracked in marketing but are not connected to the asset framework and have no target tied to brand equity development."
          ],
          "failure_signals": [
            "When asked how much the company's brand is worth, leadership can only reference revenue or client count because no brand equity metrics have ever been tracked.",
            "The process library has not grown in two consecutive quarters despite multiple completed projects, revealing that the asset creation process from Level 4 is not running consistently."
          ],
          "prerequisite": "FR.5",
          "review_frequency": 4,
          "weights": {
            "impact": 8,
            "complexity": 5,
            "time_to_implement": 5,
            "direct_cost": 2
          }
        },
        {
          "level": 6,
          "headline": "Proactive Asset Development",
          "plain_english": "The company actively builds two asset categories that competitors cannot easily replicate: a proprietary dataset and a compounding brand authority strategy.",
          "observation": "At Level 6, asset development is proactive rather than incidental. Two strategies operate. Proprietary data: the company has identified what unique data it collects through normal operations and has a documented strategy for organizing, enriching, and protecting it as a competitive asset. This is not data collected for compliance or operational necessity. It is data collected because competitors do not have it and because its accumulation creates a growing advantage. Brand compounding: a documented strategy defines how each content and visibility action builds on the last, creating a flywheel where published authority generates speaking opportunities, speaking generates media mentions, media generates inbound trust, and inbound trust generates referrals and content topics.",
          "why_it_matters": "Proprietary data is the asset class that most companies collect and fewest companies deliberately protect and develop. A company that has three years of anonymized customer outcome data for a specific market segment owns something that a new competitor cannot buy at any price. Brand authority compounds in the same way: a brand that has published 200 relevant articles, spoken at 15 industry events, and been cited in six media pieces is not three times as valuable as one that has done a third of that. It is ten times as valuable, because the authority is self-reinforcing. Both strategies require intention. Neither happens by accident.",
          "audit_binary": "Is there a written proprietary data strategy defining what data is collected, how it is organized, and how it creates competitive advantage, and a written brand compounding strategy defining how each visibility action builds toward the next, with evidence that both have produced measurable asset growth in the past two quarters?",
          "evidence": "Proprietary Data Strategy Document and Brand Compounding Strategy with Growth Evidence",
          "evidence_example": "A proprietary data strategy document defining: what data is collected, the collection mechanism, how it is organized and stored, and the competitive advantage it creates. A brand compounding strategy document defining the flywheel and the planned sequence of asset actions. Growth evidence showing measurable increase in both the data asset and brand authority indicators over the past two quarters.",
          "example": "Proprietary data strategy: the company collects anonymized input and output data from every completed engagement. Inputs include company size, founder working hours, and team structure at engagement start. Outputs include the same metrics 90 days after completion. No competitor in this market segment has access to this pre-post dataset because they do not deliver structured engagements with defined outcome measurements. The dataset now covers 241 engagements and is growing by approximately 25 per quarter. Brand compounding strategy: the flywheel runs in this sequence. Published articles generate speaking invitations. Speaking invitations produce recorded talks. Recorded talks are repurposed as content. Content generates media interview requests. Media interviews generate inbound inquiries that become content topics. Three full cycles of the flywheel have been completed in the past 18 months.",
          "false_positive_signals": [
            "Customer data is collected as part of normal operations but is stored in a way that makes it impossible to analyze at a portfolio level, meaning the data exists but the asset does not.",
            "A content strategy exists but is designed around lead generation rather than authority compounding, meaning each piece of content is isolated rather than part of a building flywheel."
          ],
          "failure_signals": [
            "A competitor launches with a similar methodology and the company has no proprietary data advantage that makes its approach demonstrably more effective, because the data was collected but never organized as an asset.",
            "Despite years of content production, the company has no measurable brand authority in its market because the content has been reactive and isolated rather than strategic and compounding."
          ],
          "prerequisite": "AI.5",
          "review_frequency": 4,
          "weights": {
            "impact": 9,
            "complexity": 6,
            "time_to_implement": 6,
            "direct_cost": 3
          }
        },
        {
          "level": 7,
          "headline": "Cross-Domain Asset Capture",
          "plain_english": "Every domain produces assets that are formally captured, catalogued, and protected, converting the company's operational output into a growing portfolio of permanent intellectual property.",
          "observation": "At Level 7, the assets and IP function formally captures the output of every other domain. Leadership and direction produces governance documents and decision frameworks that become institutional IP. Product and innovation produces proprietary methodologies and product data that become protected intellectual property. Brand and market produces content, case studies, and brand assets that are catalogued and legally protected. Revenue and sales produces a sales playbook and customer intelligence that are owned by the company. Operations and delivery produces SOPs and delivery playbooks that form the process asset library. Customer success produces outcome data that grows the proprietary dataset. Talent and culture produces a people methodology and culture framework. Technology produces automation tools and data infrastructure. Finance produces financial models and unit economics that constitute intellectual capital. In each case, a formal capture step converts operational output into a permanent company-owned asset.",
          "why_it_matters": "Most companies produce valuable intellectual capital every day and convert almost none of it into owned assets. Insights from client conversations stay in the consultant's notes. Operational improvements stay in the practitioner's head. Financial models that took months to build are rebuilt from scratch for every new planning cycle. The cross-domain asset capture function is what changes that. It is the institutional mechanism that says: when this domain produces something of lasting value, that thing gets captured, catalogued, and protected. Over time, this mechanism is what makes the company's cumulative knowledge more valuable than any individual team member's knowledge.",
          "audit_binary": "Is there a documented asset capture process for at least six domains, with evidence that at least one new or updated asset was captured from each of those domains in the past quarter and added to the asset catalogue?",
          "evidence": "Cross-Domain Asset Capture Process with Quarterly Capture Records",
          "evidence_example": "A written asset capture process for at least six domains, each defining what type of asset is captured, when, and by whom. A quarterly asset capture log showing at least one new or updated asset captured from each of those domains in the past quarter.",
          "example": "Asset capture process for seven domains. LD: governance documents and decision frameworks reviewed annually and added to the institutional knowledge base. PI: product methodology and experiment findings reviewed after each major experiment and added to the IP library. BM: all published content catalogued within 48 hours of publication. RS: sales playbook updated quarterly from win and loss analysis. OD: delivery SOPs updated after every improvement cycle and version-controlled in the process library. CS: customer outcome data added to the proprietary dataset after every completed engagement. FR: financial models and unit economics updated quarterly. Last quarter capture log: six assets captured or updated across seven domains. One domain, TC, produced no new asset this quarter. Flagged for review.",
          "false_positive_signals": [
            "Good work is produced across all domains but no formal capture step exists, meaning the value of that work contributes to current operational quality but does not accumulate as a permanent asset.",
            "Assets are captured informally when someone thinks to document something, but no systematic process ensures that every domain contributes to the asset catalogue on a regular cycle."
          ],
          "failure_signals": [
            "A senior team member leaves and their departure reveals that a significant portion of the company's operational methodology existed only in their personal documents and memory, because no cross-domain capture process extracted it as a company asset while they were present.",
            "The asset catalogue grows only through deliberate documentation projects rather than through continuous capture from normal operations, meaning the company's asset base is always behind its operational capability."
          ],
          "prerequisite": "AI.6",
          "review_frequency": 4,
          "weights": {
            "impact": 9,
            "complexity": 7,
            "time_to_implement": 7,
            "direct_cost": 3
          }
        },
        {
          "level": 8,
          "headline": "Systematic Asset Portfolio Management",
          "plain_english": "The company conducts an annual asset portfolio review that produces a development plan identifying which assets to grow, protect, renew, and retire.",
          "observation": "At Level 8, the asset base is managed as a portfolio rather than accumulated as a collection. An annual asset portfolio review examines every asset category: What is growing and should be invested in further? What is stagnating and needs renewal or retirement? What legal protections are expiring and need renewal? What new asset types should be developed? What is the estimated enterprise value contribution of each category? The review produces a written asset development plan covering the following 12 months, with specific investments, timelines, and named owners for each initiative.",
          "why_it_matters": "Assets decay if they are not managed. A trademark not renewed is a trademark lost. A content library not updated becomes irrelevant. A methodology not refined becomes outdated. A proprietary dataset not enriched becomes less unique as the market generates more data independently. Portfolio management is what converts asset accumulation into asset compounding. The annual review is also the moment when the company looks at its asset base through the eyes of an external buyer: what would they value most, what would they discount, and what gap needs to be closed before the next valuation conversation?",
          "audit_binary": "Has an annual asset portfolio review been conducted in the past 12 months producing a written asset development plan with specific initiatives, owners, and timelines, and has at least two initiatives from the prior year's plan been completed and their impact documented?",
          "evidence": "Annual Asset Portfolio Review Report and Asset Development Plan with Prior Year Completion Records",
          "evidence_example": "An annual asset portfolio review report assessing each asset category for growth, health, and legal status. A 12-month asset development plan with specific initiatives, named owners, timelines, and success criteria. Records of at least two initiatives from the prior year's plan that were completed with their impact documented.",
          "example": "Annual portfolio review conducted in January. Findings by category. Brand assets: growing, primary channel audience up 38% year over year. Initiative: expand geographic trademark coverage to France and Germany before market entry planned for Q3. IP registrations: two trademarks current, one expiring in eight months, renewal filed. Process library: 34 assets, growth rate slowing. Initiative: introduce a quarterly asset sprint to produce six new assets per quarter. Proprietary data: 241 records, quality high, coverage limited to one service line. Initiative: extend data collection to two additional service lines by Q3. Development plan: four initiatives with named owners and quarterly milestones. Prior year completion: the methodology trademark was filed as planned and is now registered. The case study series was completed and produced three pieces that together generated 14 qualified inbound leads.",
          "false_positive_signals": [
            "An asset review is conducted during an annual strategy day as one agenda item among many, producing a discussion but no written development plan with specific owners and timelines.",
            "A development plan exists on paper but no review was conducted of the prior year's plan, meaning the company does not know whether the previous year's asset investments produced results."
          ],
          "failure_signals": [
            "A significant legal protection, such as a trademark or domain name, expires without renewal because no systematic review process was monitoring the renewal schedule.",
            "The company's proprietary dataset has not grown in two quarters because the data collection mechanism broke and nobody detected it, because no portfolio review was monitoring the data asset's health."
          ],
          "prerequisite": "AI.7",
          "review_frequency": 1,
          "weights": {
            "impact": 9,
            "complexity": 7,
            "time_to_implement": 7,
            "direct_cost": 4
          }
        },
        {
          "level": 9,
          "headline": "Founder-Independent Asset Compounding",
          "plain_english": "The company's asset base grows and compounds without founder involvement, and no material asset is personally associated with or dependent on the founder.",
          "observation": "At Level 9, the asset base compounds on its own. The process library is maintained and extended by the team, not by the founder. The proprietary dataset grows through the systematic capture process, not through founder curation. The content engine publishes and builds authority under the company brand, not the founder's personal profile. The IP portfolio is reviewed and renewed by the IP attorney on a scheduled basis, not triggered by the founder remembering. The brand authority metrics are improving on a trajectory that does not require the founder's personal participation. An informed observer watching the company's asset base for six months would see it growing, and they would not be able to attribute that growth to any single individual.",
          "why_it_matters": "The test for asset independence is simple: would the asset base continue growing if the founder was removed from the company tomorrow? If the brand is primarily the founder's personal reputation, the answer is no. If the content engine runs on a team-managed system, the answer is yes. If the proprietary data grows through a process, the answer is yes. If it grows because the founder personally selects and curates what gets added, the answer is no. Every material asset that is personally associated with the founder is a liability in a transaction and a vulnerability in a succession. Every asset that belongs unambiguously to the company compounds its value.",
          "audit_binary": "Is there evidence that the primary asset categories, specifically the process library, proprietary dataset, brand authority metrics, and IP portfolio, have all grown or been maintained in the past two quarters without documented founder involvement in any of the growth activities?",
          "evidence": "Asset Independence Record with Growth Evidence Across Primary Asset Categories",
          "evidence_example": "Asset growth records for the past two quarters showing improvement in at least four asset categories, with evidence that each growth activity was driven by the team or by systematic processes rather than by founder involvement.",
          "example": "Past two quarters without founder involvement in asset activities. Process library: four new assets added through the quarterly asset sprint process, run by the operations lead. No founder involvement in creation or review. Proprietary dataset: 47 new records added through the standard post-engagement data capture process. The founder did not review or approve any submissions. Brand: 21 pieces of content published under the company brand by three different team members. The founder did not write or approve any content. Engagement metrics improved: audience up 8%, inbound leads from content up 14%. IP portfolio: trademark renewal filed by the IP attorney on schedule under standing instructions. Founder was notified after filing, not before.",
          "false_positive_signals": [
            "The company's asset metrics are growing but nearly all of the content is written by the founder, meaning the brand authority is the founder's personal brand dressed in company colors.",
            "The process library is maintained but only when the founder or a specific senior team member initiates a documentation sprint, meaning the growth is person-dependent rather than process-dependent."
          ],
          "failure_signals": [
            "When the founder takes a month offline, the content publication rate drops to near zero and no new process assets are created, revealing that asset development is personally rather than systematically driven.",
            "The primary inbound trust signal the company has in its market is the founder's personal LinkedIn following, meaning a leadership transition would visibly reduce the company's market presence before the transition is even announced."
          ],
          "prerequisite": "AI.8",
          "review_frequency": 2,
          "weights": {
            "impact": 10,
            "complexity": 8,
            "time_to_implement": 9,
            "direct_cost": 4
          }
        },
        {
          "level": 10,
          "headline": "Sovereign Enterprise Asset",
          "plain_english": "The company functions as a transferable and durable asset. Every material asset is legally owned by the entity, independently operable, measurably growing, and assessed by an external party as ready for transfer.",
          "observation": "At Level 10, the company has crossed the threshold from a founder-led business into a sovereign enterprise. All material assets are legally owned by the legal entity, not by the founder personally. Every asset category is documented, protected, valued, and compounding. Leadership and operations are governed by a constitution rather than by an individual. The cumulative asset base has been assessed by an external party, whether an M&A advisor, a strategic investor, or an independent valuer, and confirmed as ready for transfer to a new owner without disruption to the assets' value or trajectory. An acquirer evaluating this company can assess and price every material asset from the documentation alone.",
          "why_it_matters": "Every level of the BASE100 framework builds toward this point. A sovereign enterprise asset is a company whose value exists independently of the people who created it. The revenue is predictable because the systems that generate it are documented and governed. The brand authority is compounding because an institutional system maintains it. The IP is protected and renewals are managed. The proprietary data is organized and growing. The process library is maintained and extended. The governance constitution ensures continuity through any leadership change. An acquirer pays a premium for a sovereign enterprise because they are buying certainty, not hope. They are paying for the company, not the person.",
          "audit_binary": "Has an external party, whether an M&A advisor, strategic investor, or independent valuer, assessed the company's asset base and enterprise value in the past 24 months and confirmed that all material assets are legally owned by the entity, independently operable, and ready for transfer, with any identified gaps documented and resolved?",
          "evidence": "Enterprise Value Assessment Report with External Party Confirmation and Gap Resolution Records",
          "evidence_example": "A formal enterprise value assessment report from an external party conducted within the past 24 months, identifying the company's material assets by category, confirming legal ownership, assessing transferability, and noting any gaps. Records confirming that all identified gaps have been resolved or have a documented resolution timeline.",
          "example": "Enterprise value assessment conducted by an M&A advisory firm in Q2. Findings: all material assets legally owned by the entity. Brand trademarks registered and current in four markets. Proprietary dataset assessed as a meaningful competitive differentiator with 241 records covering a market segment where no comparable dataset exists publicly. Process library assessed as institutionally maintained, not founder-dependent. Governance constitution confirmed as operational with three documented independent governance decisions in the past 12 months. Technology infrastructure documented and assessed as transferable. Two gaps identified: one trademark had not been filed in a market the company plans to enter. One key supplier contract had no assignment clause. Both resolved within 60 days of the report. Assessed enterprise value range: 6.5 to 7.8 times trailing EBITDA, with the asset quality cited as a primary driver of the multiple above the sector average of 4.5 times.",
          "false_positive_signals": [
            "The company has strong operations and financials but the primary brand asset is the founder's personal reputation, meaning any transaction would require a buyer to manage the risk of the founder's departure reducing the brand value they paid for.",
            "An enterprise value assessment was conducted but identified significant gaps in IP ownership or asset documentation that have not been resolved, meaning the assessment confirmed risk rather than readiness."
          ],
          "failure_signals": [
            "A potential acquirer's due diligence reveals that several assets the company considers core to its value are not legally owned by the entity, or are personally associated with the founder in a way that creates transfer risk.",
            "The enterprise value multiple offered in a transaction is materially below what the company's financial performance would suggest, with the discount attributed to founder dependency and undocumented or unprotected assets."
          ],
          "prerequisite": "LD.10",
          "review_frequency": 1,
          "weights": {
            "impact": 10,
            "complexity": 10,
            "time_to_implement": 10,
            "direct_cost": 8
          }
        }
      ]
    },
    "BM": {
      "id": "BM",
      "name": "Brand & Market",
      "purpose": "Build market awareness, establish authority, and generate consistent demand for the company's product.",
      "cxo_persona": "Chief Marketing Officer",
      "description": "How the company communicates its value to the right audience, builds a recognizable and trusted brand, and generates demand systematically rather than reactively. A mature brand and market domain means the company is visible to the right people before they are ready to buy, and the demand it generates does not depend on the founder's personal presence or activity.",
      "direction": {
        "name": "Market Positioning and Brand Strategy",
        "purpose": "Define how the company wants to be perceived by the market, who it speaks to, what it says, which channels it uses, and how it builds compounding brand authority over time.",
        "required_outputs": [
          "target_audience_definition",
          "brand_positioning_statement",
          "core_message_and_proof_points",
          "channel_strategy",
          "content_strategy",
          "brand_guidelines",
          "marketing_metrics_framework",
          "marketing_review_rhythm"
        ],
        "primary_owner": "Chief Marketing Officer",
        "contributors": [
          "CEO",
          "product_lead",
          "sales_lead"
        ],
        "minimum_standard": "One written marketing direction exists defining the target audience, brand positioning, core message, and primary acquisition channel, reviewed at least quarterly.",
        "review_frequency": 4,
        "questions_to_answer": [
          "What does the ideal customer currently believe about their problem before they find the company, and what belief must change for them to buy?",
          "Who specifically should notice this company, described in observable terms that a media buyer or event organizer could act on immediately?",
          "What is the single most important thing the market should associate with this brand in one year, and in five years?",
          "Why would an ideal customer choose this company over doing nothing, and over the most credible alternative available to them?",
          "Where do ideal customers go when they are actively looking for a solution like this one, and is the company visible there?",
          "What content or signal builds the most trust with the specific audience before a sales conversation starts?",
          "What is the one marketing metric that, if it doubled, would most directly drive revenue growth?",
          "What would it take for this brand to become the default reference in its category, and what is the first concrete step toward that?"
        ]
      },
      "levels": [
        {
          "level": 1,
          "headline": "Problem Communicated Externally",
          "plain_english": "Every external touchpoint leads with the customer's problem in their own words, not with the company's solution.",
          "observation": "A stranger lands on the website, reads the company LinkedIn page, or picks up a pitch deck. Within 10 seconds, they know whether this company is describing their problem or someone else's. At Level 1, all primary external touchpoints open with the same customer problem, written in language the customer would use themselves. The company's name, history, and credentials come second.",
          "why_it_matters": "Marketing cannot create demand for something the market does not recognize as solving their problem. The first job of any external communication is not to explain the product. It is to make the right person feel seen. When the problem description resonates, they lean in. When it does not, they move on within seconds and the company never knows they were there.",
          "audit_binary": "Do all primary external touchpoints, including the website homepage, the company LinkedIn page, and the primary pitch or sales document, open with a description of the customer's problem in customer language, consistent with the agreed problem statement from the product domain?",
          "evidence": "External Touchpoint Audit Record",
          "evidence_example": "A documented review of at least three primary external touchpoints confirming each opens with or prominently features the customer problem in customer language, consistent with the PI.1 problem statement. Reviewed within the past six months.",
          "example": "A consultancy's website headline reads: Most agency founders are the most expensive employee in their own business. The LinkedIn company page opens with the same framing. The pitch deck leads with a single slide showing that problem. A stranger reading any of the three knows within 10 seconds whether this is for them.",
          "false_positive_signals": [
            "The website homepage opens with the company name, a tagline about passion or excellence, or a description of the product rather than the customer's problem.",
            "The problem is described in industry terminology the company uses internally but that a frustrated customer would not naturally say about their own situation."
          ],
          "failure_signals": [
            "Visitors spend more than 10 seconds on the homepage looking for what the company actually does for them.",
            "Sales teams regularly open discovery calls by explaining what the company does rather than asking about the customer's situation, because the external materials did not do that work already."
          ],
          "prerequisite": "PI.1",
          "review_frequency": 2,
          "weights": {
            "impact": 10,
            "complexity": 2,
            "time_to_implement": 2,
            "direct_cost": 1
          }
        },
        {
          "level": 2,
          "headline": "Market Intelligence Organized",
          "plain_english": "All market-facing knowledge lives in one place: who the audience is, what they believe, where they spend time, and how competitors describe themselves.",
          "observation": "At Level 2, there is a market intelligence repository. It is not the product knowledge base and it is not the sales CRM. It holds the information needed to make marketing decisions: a behavioral audience profile, a competitive positioning map, a customer language bank of exact phrases from interviews and reviews, a record of which channels the audience actually uses, and an archive of past campaign performance. Anyone can brief an agency or freelancer from this repository without a phone call.",
          "why_it_matters": "Marketing decisions made without organized market intelligence are guesses dressed as strategy. Which channel should the company use? Whoever has the strongest opinion wins. What message should it lead with? Whatever the founder wrote on the last pitch. A market intelligence repository makes those decisions evidence-based and makes the marketing function transferable to anyone who joins the team.",
          "audit_binary": "Is there a single market intelligence repository containing a behavioral audience profile, a competitive positioning overview, a customer language bank with at least 20 direct quotes, a channel research record, and a campaign performance archive, accessible to every marketing team member and updated within the past 90 days?",
          "evidence": "Market Intelligence Repository",
          "evidence_example": "A shared folder, wiki, or document containing the five required components, each updated within 90 days. The customer language bank shows direct quotes organized by theme. The campaign archive shows at least three past campaigns with their results.",
          "example": "A marketing wiki with five sections. Audience: behavioral profile showing the target customer reads management newsletters, follows three specific thought leaders on LinkedIn, attends two regional business events per year, and is skeptical of consultants who have never run a business. Competitors: a positioning map showing how four competitors describe themselves, with a column for what they do not claim. Language bank: 34 phrases collected from client interviews and online reviews, organized under themes like freedom, control, and time. Channels: research showing LinkedIn and referral are where the audience discovers solutions like this one, based on 12 client intake surveys. Archive: results from the last four campaigns with conversion rates noted.",
          "false_positive_signals": [
            "A target audience document exists describing demographics but contains no behavioral data, no language bank, and no information about where the audience spends attention.",
            "Market intelligence is scattered across a Google Drive folder, a Notion page, and several email threads, with no single authoritative location."
          ],
          "failure_signals": [
            "Marketing decisions about channel, message, and format are made based on what competitors are doing or what feels right rather than organized audience research.",
            "A new marketing hire or external agency has to interview the founder for two hours to understand the market before they can do any useful work."
          ],
          "prerequisite": "BM.1",
          "review_frequency": 4,
          "weights": {
            "impact": 8,
            "complexity": 3,
            "time_to_implement": 3,
            "direct_cost": 1
          }
        },
        {
          "level": 3,
          "headline": "Named Marketing Owner",
          "plain_english": "One person is accountable for market awareness and lead generation, has visibility into channel performance, and can make messaging decisions without asking the founder.",
          "observation": "At Level 3, there is a named marketing owner. They do not need to be a professional marketer or carry a CMO title. In a small company this might be a founder who has explicitly assigned themselves the role while they build the function. What matters is that one person owns the marketing outcomes, has access to channel performance data and the market intelligence repository, is accountable for a lead or awareness target, and can approve a new piece of content or a channel decision without routing it through the founder first.",
          "why_it_matters": "Marketing owned by everyone is owned by no one. Without a named owner, content goes up when someone has time, campaigns run when someone has energy, and lead generation is an afterthought between client work. One accountable owner does not guarantee great marketing. It guarantees that marketing is treated as a real function with a real owner who can be held to a real result.",
          "audit_binary": "Is there one named person accountable for a marketing target, with documented visibility into channel performance data, who made at least three marketing decisions in the past 90 days without founder approval?",
          "evidence": "Marketing Ownership Assignment with Decision Records",
          "evidence_example": "A written ownership assignment naming the marketing owner and their target, plus a decision log showing at least three marketing decisions made by that person in the past 90 days with a brief rationale for each.",
          "example": "The marketing lead is named in the accountability chart with a target of 15 qualified conversations per month from marketing channels. They have access to the channel performance dashboard and the market intelligence repository. Last quarter they made three documented decisions: rejected a podcast sponsorship because the audience profile did not match the behavioral research, moved the content cadence from weekly to twice per week based on engagement data, and updated the LinkedIn company page description without asking the founder.",
          "false_positive_signals": [
            "A marketing manager holds the title but routes every content piece, channel decision, and campaign concept through the founder for approval before anything goes live.",
            "The named marketing owner exists but has no access to channel performance data and no visibility into what is actually working."
          ],
          "failure_signals": [
            "When the founder is busy or traveling, marketing output stops or slows to near zero because there is no one else with the authority or context to keep it moving.",
            "Nobody can name the company's monthly qualified lead count from marketing without pulling the founder into the conversation."
          ],
          "prerequisite": "BM.2",
          "review_frequency": 4,
          "weights": {
            "impact": 9,
            "complexity": 3,
            "time_to_implement": 3,
            "direct_cost": 1
          }
        },
        {
          "level": 4,
          "headline": "Brand Identity System",
          "plain_english": "Every piece of marketing output follows one visual and verbal standard, specific enough that an external designer can produce on-brand work without a briefing call.",
          "observation": "At Level 4, a brand identity system exists and is actively used. It defines the visual rules, the verbal rules, and the boundaries. Visual: logo usage, color codes, typography specifications, and image style. Verbal: tone of voice, the core claim, the proof points, the language to use, and the language to avoid. The test is practical: hand the document to an external designer or a new team member and ask them to produce a LinkedIn post, a slide, and a one-page summary. All three should be recognizably from the same company without any additional guidance.",
          "why_it_matters": "Brand identity is placed here, before channel execution and metrics, because it is a prerequisite for consistency, not a reward for scale. A company that runs campaigns before establishing a consistent identity creates fragmented impressions at every scale of activity. Recognition is built through repetition of the same stimulus. If the stimulus changes every time, there is nothing to remember.",
          "audit_binary": "Is there a brand identity document specific enough that an external designer produced a conforming asset from it without verbal briefing in the past 12 months, and do all current primary external materials conform to the same visual and verbal standard?",
          "evidence": "Brand Identity Document with External Supplier Conformance Record",
          "evidence_example": "A brand identity document covering logo files and usage rules, primary and secondary color codes, typography specifications, image style description, tone of voice with do and do not examples, and the core claim. Plus evidence that at least one external supplier produced a conforming asset using it without revision in the past 12 months.",
          "example": "A brand identity document containing: vector logo files with clear space rules, three color codes in HEX and CMYK, two typeface names with weight specifications, a five-sentence tone of voice description with three written examples showing the right and wrong version of the same sentence, and the core claim written out in full. Last quarter an event organizer produced a banner and a social card from this document without a briefing call. Both passed the brand review on first submission.",
          "false_positive_signals": [
            "Brand guidelines exist as a PDF but external suppliers and new team members still require a briefing call before producing anything because the guidelines are too abstract to apply without interpretation.",
            "The website follows the brand system but social content, pitch decks, and event materials each look noticeably different from each other."
          ],
          "failure_signals": [
            "External suppliers regularly return first drafts that require significant revision because the brand document does not give them enough to work from independently.",
            "A visitor who follows the company on LinkedIn and then visits the website has a noticeable discontinuity in visual experience between the two."
          ],
          "prerequisite": "BM.3",
          "review_frequency": 2,
          "weights": {
            "impact": 7,
            "complexity": 5,
            "time_to_implement": 5,
            "direct_cost": 4
          }
        },
        {
          "level": 5,
          "headline": "Channel Performance Measured",
          "plain_english": "Marketing results are tracked monthly with at least four metrics tied to lead generation, not audience size, and missing a target triggers a documented response.",
          "observation": "At Level 5, marketing performance is measured by what it produces for the business, not by how much activity it generates. Four metrics are tracked monthly at minimum: qualified leads or conversations generated by channel, cost per qualified lead, lead-to-opportunity conversion rate, and one channel-specific engagement metric that has demonstrated a correlation with lead generation. All four have numeric targets. All four are reviewed in a fixed monthly meeting. A metric missing its target for two consecutive months triggers a documented root cause investigation.",
          "why_it_matters": "Followers, impressions, and likes measure audience size and content engagement. They are not wrong to track but they are not marketing performance. Marketing performance is measured by what enters the sales pipeline. A company that tracks only vanity metrics can run an active, expensive marketing function and have no idea whether it is generating revenue or consuming budget. Metrics tied to lead generation make the investment defensible and the improvement cycle possible.",
          "audit_binary": "Are at least four marketing metrics, including qualified leads generated by channel and cost per qualified lead, tracked monthly with numeric targets, reviewed in a fixed monthly meeting, and has a metric missing its target for two consecutive months triggered a documented investigation in the past six months?",
          "evidence": "Marketing Metrics Dashboard with Monthly Review Records and Investigation Log",
          "evidence_example": "Monthly marketing metrics reports for at least three consecutive months showing at least four metrics with targets, actuals, and trend. Plus at least one documented investigation triggered by a metric missing target for two consecutive months.",
          "example": "Monthly metrics reviewed on the first Monday of each month. Qualified conversations from LinkedIn: 14, target 12. Cost per qualified lead: 58 euros, target 80 euros. Lead-to-opportunity conversion rate: 29%, target 32%, missed for two months. Investigation opened: discovery call recordings reviewed, pattern identified that leads from organic content convert at 41% while leads from direct outreach convert at 18%. Content strategy adjusted to prioritize inbound. Recontact cadence for outreach leads extended. Results to be reviewed in 60 days.",
          "false_positive_signals": [
            "Marketing reports show follower growth, post impressions, and engagement rates as the primary performance indicators, with no data on qualified leads or pipeline contribution.",
            "A marketing dashboard exists and is well-designed but has never triggered any documented action because all metrics are treated as informational rather than accountable."
          ],
          "failure_signals": [
            "Leadership cannot immediately state how many qualified leads marketing generated last month without pulling in the marketing owner for a briefing.",
            "Marketing budget decisions are made based on what the company did last year or what competitors appear to be doing, rather than on current performance data."
          ],
          "prerequisite": "TI.5",
          "review_frequency": 12,
          "weights": {
            "impact": 9,
            "complexity": 5,
            "time_to_implement": 5,
            "direct_cost": 3
          }
        },
        {
          "level": 6,
          "headline": "Proactive Demand Generation",
          "plain_english": "The company publishes educational content on a fixed schedule through one primary channel, building trust with the audience before they are ready to buy.",
          "observation": "At Level 6, demand generation is proactive rather than reactive. A primary acquisition channel has been selected based on where the target audience actually spends attention, not where it is easiest to post. A content calendar governs what is published and when. Topics come from the market intelligence repository, specifically from real audience questions, sales conversation themes, and customer language, not from what the team finds interesting to write about. The content schedule does not stop when the team is busy. It runs because a system governs it.",
          "why_it_matters": "Reactive demand generation means the company only reaches potential customers when it is actively prospecting. Proactive demand generation means potential customers encounter the company's thinking before they have a need, so when the need arises, the company is already familiar and credible. Content that educates builds the kind of trust that shortens sales cycles and makes pricing defensible. It compounds in a way that paid advertising does not.",
          "audit_binary": "Is one primary acquisition channel designated based on documented audience research, and has the company published at least eight pieces of genuinely educational content through that channel in the past 60 days, each traceable to a real audience question, sales conversation theme, or customer language entry from the market intelligence repository?",
          "evidence": "Primary Channel Strategy Document with Content Calendar and Published Content Archive",
          "evidence_example": "A written channel strategy naming the primary channel and the audience research supporting the choice. A content calendar showing planned topics for the next four weeks. Links or screenshots of at least eight published pieces from the past 60 days, each with a source note linking it to the market intelligence repository.",
          "example": "LinkedIn designated as primary channel based on intake survey data showing 11 of the last 14 clients discovered the company there. Content calendar built from the top 12 questions asked on discovery calls and the six most common objections in sales conversations. Published in the past 60 days: eight long-form posts on topics including why delegation fails without accountability structures, what a 30-day founder absence actually reveals about a business, and the meeting that replaces 20 individual check-ins. Each topic is tagged to its source in the market intelligence repository.",
          "false_positive_signals": [
            "Content is published consistently but topics are chosen by what the team wants to write or what performed well for a competitor, with no connection to documented audience questions or sales themes.",
            "A primary channel is named but the company is simultaneously running regular activity on three other channels at comparable effort levels, meaning no channel receives focused execution."
          ],
          "failure_signals": [
            "The company has gone more than 21 consecutive days without publishing on its primary channel because delivery work took priority.",
            "Published content generates internal appreciation from the team but produces no measurable inbound leads or qualified conversations month after month."
          ],
          "prerequisite": "BM.5",
          "review_frequency": 12,
          "weights": {
            "impact": 8,
            "complexity": 5,
            "time_to_implement": 5,
            "direct_cost": 3
          }
        },
        {
          "level": 7,
          "headline": "Cross-Domain Marketing Integration",
          "plain_english": "Marketing formally connects to sales, customer success, product, and finance through shared artifacts that are used in real decisions every quarter.",
          "observation": "At Level 7, marketing does not operate in isolation. Four integration points exist and each is backed by an artifact used in the past quarter. Sales shares lead quality data showing which leads convert and why, which feeds back into channel and content decisions. Customer success provides satisfied clients who participate in testimonials and referrals, creating a structured advocacy pipeline. Product reviews the value proposition against what is actually converting, so the message stays accurate as the product evolves. Finance reviews marketing budget against pipeline contribution, making investment decisions evidence-based rather than intuition-based.",
          "why_it_matters": "The most expensive marketing failures are cross-domain failures. Marketing generates leads that sales cannot close because the message attracted the wrong audience. Marketing claims something the product no longer delivers. Satisfied customers exist who would refer and advocate but nobody ever asks them. Each of these failures is preventable with a formal integration point. Without the integration, four functions optimize individually and produce outcomes none of them would have chosen deliberately.",
          "audit_binary": "Do documented integration artifacts connect BM to RS, CS, PI, and FR, with evidence that each artifact was used to inform a marketing decision in the past quarter?",
          "evidence": "Cross-Domain Marketing Integration Artifacts: Lead Quality Report, Customer Advocacy Pipeline Record, Value Proposition Validation Record, and Marketing Budget ROI Review",
          "evidence_example": "Four artifacts, each with evidence of use in the past quarter: a lead quality report shared by sales showing conversion rates by source and lead type, a customer advocacy pipeline record showing at least three clients engaged for testimonials or referrals, a value proposition validation record showing the core marketing message was reviewed against conversion data, and a marketing budget ROI review conducted jointly with finance.",
          "example": "RS integration: a monthly lead quality report from the sales lead showing conversion rates by channel and ICP match score. Last quarter this report caused the marketing owner to reduce direct outreach volume by 40% and increase content investment after showing that inbound leads convert at twice the rate of outbound leads. CS integration: a quarterly advocacy session identifying clients with NPS above 8 and inviting them to contribute a case study or referral. Three clients enrolled last quarter. PI integration: the core marketing claim reviewed against the past quarter's conversion data before the website copy was updated. One claim was retired because no client had cited it as a buying reason in 12 months. FR integration: a quarterly 30-minute meeting with the finance lead reviewing marketing spend against pipeline contribution, with a cost per qualified lead figure agreed as the primary budget efficiency measure.",
          "false_positive_signals": [
            "Marketing and sales have a good working relationship and speak regularly, but no structured lead quality artifact exists and conversion data does not formally feed marketing decisions.",
            "The company has satisfied clients who would happily advocate but there is no pipeline or process for activating them, so advocacy happens occasionally by accident."
          ],
          "failure_signals": [
            "Marketing is describing the product using language that the sales team recognizes as outdated or inaccurate, but no review process exists to catch and correct it.",
            "Satisfied clients are never asked for a referral or testimonial because nobody owns the process of identifying and activating them."
          ],
          "prerequisite": "BM.6",
          "review_frequency": 4,
          "weights": {
            "impact": 8,
            "complexity": 7,
            "time_to_implement": 6,
            "direct_cost": 3
          }
        },
        {
          "level": 8,
          "headline": "Systematic Marketing Improvement",
          "plain_english": "Every major campaign is followed by a written retrospective, and findings are used to update the channel strategy, the message, or the audience definition.",
          "observation": "At Level 8, marketing gets measurably better over time through a documented improvement cycle. Every significant campaign or channel initiative is followed within two weeks by a written retrospective covering what the hypothesis was, what the result was, what worked, what did not, and what changes for next time. Findings update the market intelligence repository. The audience definition is refined quarterly based on who actually converted rather than who the company hoped would. A second acquisition channel is added only after the primary channel has produced consistent results for at least three months.",
          "why_it_matters": "A marketing function that does not learn from its campaigns is paying for the same education repeatedly. Campaign retrospectives convert marketing experience into institutional knowledge. Audience refinement based on actual conversion data is the mechanism that corrects the gap between the customer the company hoped to attract and the customer who actually buys. Multi-channel expansion built on evidence rather than ambition produces resilient demand rather than scattered effort.",
          "audit_binary": "Has every major campaign in the past six months been followed by a written retrospective within two weeks, and have those retrospectives produced at least two documented changes to the channel strategy, message, or audience definition, with a second acquisition channel added only after the primary channel showed consistent results for at least three months?",
          "evidence": "Campaign Retrospective Log with Improvement Decision Records and Multi-Channel Performance Report",
          "evidence_example": "A retrospective log with entries for every major campaign in the past six months, each showing: the hypothesis, the result, what worked, what did not, and the change applied. Plus a record of at least two improvements made to strategy, message, or audience as a direct result. Plus, if a second channel exists, evidence it was added only after the primary channel showed three months of consistent results.",
          "example": "Campaign retrospective for Q2 LinkedIn campaign: hypothesis was that posts about operational systems would outperform posts about founder mindset. Result: operational posts generated 2.3 times the qualified conversations. Change: content calendar shifted to 70% operational topics. Audience update: intake data from Q2 shows that clients with 8 to 20 staff convert at 3 times the rate of clients with 3 to 7 staff. ICP tightened in the market intelligence repository and in the BM direction document. Second channel: referral program added in Q3 after LinkedIn produced consistent results for five consecutive months. Referral program generated 8 qualified introductions in its first month.",
          "false_positive_signals": [
            "Campaign results are discussed informally in team meetings but no written retrospective exists and no documented change to strategy, message, or audience has resulted.",
            "A second channel was launched because a competitor is using it or because the team was excited about it, before the primary channel had demonstrated consistent results."
          ],
          "failure_signals": [
            "The same type of content or campaign consistently underperforms but the team keeps producing it because no retrospective process exists to surface the pattern.",
            "The audience definition has not been updated in more than six months despite the company having conversion data that would refine it."
          ],
          "prerequisite": "BM.7",
          "review_frequency": 4,
          "weights": {
            "impact": 8,
            "complexity": 7,
            "time_to_implement": 6,
            "direct_cost": 4
          }
        },
        {
          "level": 9,
          "headline": "Independent Marketing Leadership",
          "plain_english": "A dedicated marketing leader runs the marketing function independently. Demand generation continues at the same rate when the founder is not involved.",
          "observation": "At Level 9, a named marketing leader owns the content calendar, the channel strategy, and the marketing budget. They run the monthly marketing review without the founder in the room. They make channel decisions, content approvals, and budget allocations without routing them through the founder. The founder receives a monthly performance summary but does not attend marketing reviews or approve individual decisions. Remove the founder from all marketing activity for 90 days. At Level 9, the qualified lead volume stays the same.",
          "why_it_matters": "Founder-led marketing creates a hard ceiling. Marketing output is limited by the founder's time, energy, and personal brand. A dedicated marketing leader decouples demand generation from the founder's schedule and, crucially, from the founder's identity. It signals to the market that the brand is a company asset rather than a personal platform. It also makes the company more attractive to investors and acquirers, who view founder-dependent marketing as a valuation risk.",
          "audit_binary": "Is there a named marketing leader with documented authority over channel strategy, content calendar, and marketing budget who has run at least three consecutive monthly marketing reviews without founder attendance, and has qualified lead volume remained stable during any period in the past 12 months when the founder reduced their personal marketing activity?",
          "evidence": "Marketing Leadership Authority Document with Independent Review Records and Lead Volume Stability Record",
          "evidence_example": "A written role description granting marketing authority, records of at least three consecutive monthly marketing reviews without the founder present, a decision log showing at least two channel or content decisions made independently, and evidence that qualified lead volume held steady during a period when the founder's personal posting or activity was reduced.",
          "example": "The Head of Marketing owns the content calendar, channel strategy, and a monthly marketing budget of 3,500 euros. The founder receives the monthly performance summary on the fifth of each month and has not attended a marketing review in five months. Last two independent decisions: exited Twitter entirely as an active channel after three months of zero qualified lead attribution, and shifted 25% of budget from paid promotion to event sponsorship based on attribution data. When the founder took four weeks offline in August, qualified lead volume held at 13 per month versus the 14 per month average for the prior quarter.",
          "false_positive_signals": [
            "A marketing manager holds the title but the founder's personal LinkedIn posting is still the primary source of inbound leads, meaning the brand is the founder's personal brand with a company page attached.",
            "The marketing leader runs the reviews independently but calls the founder after every session for informal validation before implementing anything."
          ],
          "failure_signals": [
            "Qualified lead volume drops measurably during any period when the founder reduces their personal posting or public activity, revealing that the demand engine is personal rather than institutional.",
            "The company's market presence is primarily the founder's profile reach, meaning a change in founder visibility would directly and immediately impact pipeline."
          ],
          "prerequisite": "TC.6",
          "review_frequency": 2,
          "weights": {
            "impact": 9,
            "complexity": 8,
            "time_to_implement": 8,
            "direct_cost": 6
          }
        },
        {
          "level": 10,
          "headline": "Institutional Brand and Demand Engine",
          "plain_english": "The company operates a self-sustaining marketing system that produces growing qualified demand and measurable brand authority year over year, independently of the founder.",
          "observation": "At Level 10, all marketing systems run together and produce compound results. Brand authority is measurable and growing. Multi-channel demand generation is operating with at least two proven channels contributing consistent results. The content engine runs on a system, not on individual initiative. Marketing performance is documented and governed. The founder is not a dependency in any part of the marketing system. The brand exists independently of any individual, including the founder.",
          "why_it_matters": "An institutional brand engine is a compounding asset. Each piece of content adds to a library. Each satisfied customer who shares their story adds to a reputation. Each year of consistent presence in the market adds to a brand that becomes progressively harder to displace. A company whose marketing depends on the founder's personal brand has a liability that is fully revealed the moment the founder steps back or the company changes hands. A company whose brand operates independently of any individual has built something that increases in value every year regardless of who is running it.",
          "audit_binary": "Has the marketing system, covering brand governance, content production, channel performance measurement, cross-domain integration, and campaign retrospectives, operated without founder involvement for at least four consecutive quarters, with measurable year-over-year growth in both qualified lead volume and at least one brand authority indicator, documented in an annual marketing governance report?",
          "evidence": "Annual Marketing Governance Report",
          "evidence_example": "An annual report showing: qualified lead volume by quarter for four quarters with year-over-year comparison, at least one brand authority measure such as inbound-to-outbound ratio, branded search volume, share of voice, or primary channel audience size with year-over-year change, campaign retrospective completion record, cross-domain integration artifact status, and a record of founder non-involvement across all four quarters.",
          "example": "Annual marketing report: qualified leads grew from an average of 12 per month to 21 per month year over year, a 75% increase. Inbound-to-outbound ratio shifted from 35% inbound to 58% inbound, indicating growing brand pull without proportional increase in outbound effort. LinkedIn audience grew from 2,100 to 4,800 followers with engagement rate stable at 3.2%. Content produced by a team of two without founder involvement. Four campaign retrospectives completed. All cross-domain integration artifacts current. Founder has not approved a piece of content, attended a marketing review, or been consulted on a channel decision in 16 months. Three enterprise clients in the past year cited the company's content as the reason they made first contact.",
          "false_positive_signals": [
            "Marketing results are strong and growing but are primarily driven by the founder's personal LinkedIn following. Remove the founder's posting and the inbound lead volume drops significantly.",
            "Qualified lead volume is growing but the growth is driven by increasing paid spend rather than by improving brand authority, meaning the demand engine requires constant cash input rather than compounding."
          ],
          "failure_signals": [
            "Qualified lead volume has been flat or declining for two consecutive quarters with no documented root cause investigation or response.",
            "Brand authority indicators such as inbound ratio or channel audience are not growing year over year despite consistent content investment, suggesting the content is reaching people but not building the trust or recognition that drives inbound demand."
          ],
          "prerequisite": "BM.9",
          "review_frequency": 1,
          "weights": {
            "impact": 10,
            "complexity": 9,
            "time_to_implement": 9,
            "direct_cost": 8
          }
        }
      ]
    },
    "CS": {
      "id": "CS",
      "name": "Customer Success & Retention",
      "purpose": "Ensure every customer achieves the promised outcome, stays long-term, and becomes a source of growth.",
      "cxo_persona": "Chief Customer Officer",
      "description": "How the company defines customer success, onboards new customers effectively, monitors health across the customer base, intervenes before problems become churn, and converts satisfied customers into advocates and expansion revenue. A mature customer success domain means retention is a managed outcome rather than a hoped-for result, and the metric that proves it is Net Revenue Retention consistently above 100%.",
      "direction": {
        "name": "Customer Success Model",
        "purpose": "Define how the company ensures every customer achieves the promised outcome, remains a long-term client, and contributes to growth through retention, expansion, and advocacy.",
        "required_outputs": [
          "customer_success_outcome_definition",
          "customer_onboarding_model",
          "customer_health_framework",
          "early_warning_intervention_protocol",
          "retention_and_expansion_strategy",
          "customer_feedback_system",
          "advocacy_and_referral_model",
          "customer_success_review_rhythm"
        ],
        "primary_owner": "Chief Customer Officer",
        "contributors": [
          "CEO",
          "product_lead",
          "operations_lead",
          "revenue_lead",
          "marketing_lead"
        ],
        "minimum_standard": "One documented customer success model exists describing how customers are onboarded, how their health is monitored, how problems are detected early, and how retention is actively managed.",
        "review_frequency": 4,
        "questions_to_answer": [
          "What specific outcome should a customer have achieved 90 days after purchase, described in measurable terms?",
          "At what point in the customer journey is churn most likely to begin, and what signal reliably predicts it?",
          "What is the current Net Revenue Retention rate, and is it above or below 100%?",
          "What percentage of customers are actively achieving the promised outcome, and what is preventing the others from doing so?",
          "How does the company currently detect an unhappy customer before they decide to cancel?",
          "Which customers are candidates for expansion, and does the company have a structured process for identifying and approaching them?",
          "What do churned customers have in common, and has the company changed anything as a result of analyzing them?",
          "How are satisfied customers currently contributing to new revenue through referrals, testimonials, or advocacy?"
        ]
      },
      "levels": [
        {
          "level": 1,
          "headline": "Customer Success Outcome Defined",
          "plain_english": "The company has a written definition of what a successful customer looks like, with a specific result and a specific timeframe.",
          "observation": "Ask anyone in this company what a successful customer looks like six months after purchase. At Level 1, they all give the same answer, and they can show it in writing. The definition names a specific, measurable result and a specific timeframe. It is used in sales conversations to set expectations, in delivery to guide execution, and in customer success to measure whether it was achieved. Vague satisfaction is not a success definition. A before-and-after with a timeframe is.",
          "why_it_matters": "Customer success cannot be managed without a definition of what success means. A company that cannot describe what a successful customer looks like cannot measure whether customers are succeeding, cannot identify who is at risk, and cannot make a credible case for renewal when the time comes. The success definition is the foundation that every customer success activity is built on.",
          "audit_binary": "Is there a written customer success definition stating the specific measurable outcome a customer should achieve and the timeframe in which they should achieve it, agreed by sales, delivery, and leadership, and used consistently across sales conversations and customer reviews?",
          "evidence": "Customer Success Outcome Definition",
          "evidence_example": "A written definition stating: who the customer is, what specific result they should achieve, by when after purchase, and how that result will be measured or verified. Used in sales proposals, onboarding documents, and customer review conversations.",
          "example": "Within 90 days of purchase, an agency founder with 5 to 15 staff should have an accountability chart in place, a weekly leadership meeting running, and at least two department SOPs documented. They should be able to report working 10 fewer hours per week in delivery. This definition appears in the sales proposal, the onboarding welcome document, and the 90-day review template. Any sales team member can recite it.",
          "false_positive_signals": [
            "Customer success is described as the customer being happy or satisfied, without any specific measurable result or timeframe that could be verified.",
            "A success definition exists in the product documentation but is not used in sales conversations or customer reviews, making it a theoretical statement rather than an operational standard."
          ],
          "failure_signals": [
            "Different team members describe a successful customer differently when asked, revealing no shared definition exists in practice.",
            "Renewal conversations are awkward because neither the company nor the customer has a clear reference point for whether the promised value was delivered."
          ],
          "prerequisite": "PI.1",
          "review_frequency": 2,
          "weights": {
            "impact": 10,
            "complexity": 2,
            "time_to_implement": 2,
            "direct_cost": 1
          }
        },
        {
          "level": 2,
          "headline": "Customer Information Organized",
          "plain_english": "All customer information lives in one place that any team member can use to pick up a customer relationship without asking anyone.",
          "observation": "At Level 2, there is a central customer repository. It holds the record for every customer: contact information, purchase history, current status, open issues, communication history, and progress toward their success outcome. A team member covering for a colleague who is sick or on leave can pick up any customer relationship within minutes without calling the founder or the absent colleague. The information is in the system, not in someone's head or inbox.",
          "why_it_matters": "A customer relationship that exists only in one team member's memory or email is a relationship the company does not actually own. It belongs to that individual. When they are unavailable, the customer waits or goes without contact. When they leave the company, the relationship leaves with them. Centralizing customer information is the first act of converting individual customer relationships into company-owned assets.",
          "audit_binary": "Is there a single central system containing a current record for every customer with contact information, purchase history, current status, open issues, and success outcome progress, accessible to every customer-facing team member and updated within the past 30 days for every active customer?",
          "evidence": "Customer Information Repository",
          "evidence_example": "A CRM or equivalent system with a current record for every active customer, each updated within 30 days, showing contact details, purchase history, current engagement status, any open support issues, and a note on where they are in their success journey.",
          "example": "A CRM with a record for each of 47 active clients. Every record shows: primary contact and backup contact, contract value and renewal date, current phase of the engagement, any open support tickets, the last communication date, and a one-line status note updated monthly by the CS team. A team member covering for a colleague can read any record and know exactly where that client stands within five minutes.",
          "false_positive_signals": [
            "Customer information is spread across the CRM, a separate support tool, a billing system, and individual team members' email inboxes, with no single location that gives a complete picture.",
            "A CRM exists but records are updated only when something urgent happens, meaning the status information is months out of date for most clients."
          ],
          "failure_signals": [
            "When a team member is away, their clients receive slower or less informed responses because the covering team member cannot reconstruct the relationship context without calling the absent colleague.",
            "Leadership asks for a summary of the customer base and receives a spreadsheet that someone has to assemble manually because no organized system exists."
          ],
          "prerequisite": "CS.1",
          "review_frequency": 4,
          "weights": {
            "impact": 8,
            "complexity": 2,
            "time_to_implement": 3,
            "direct_cost": 2
          }
        },
        {
          "level": 3,
          "headline": "Named Customer Success Owner",
          "plain_english": "One person is accountable for customer outcomes across the whole base and can report on the health of every client relationship at any moment.",
          "observation": "At Level 3, one named person owns the customer success function and its outcomes. They do not need to be a dedicated CS manager in a small company. What matters is that one person has a clear view of every customer relationship, knows which clients are healthy and which are at risk, and is accountable for the overall retention result. When a client is struggling, this person knows about it. When the team asks how customers are doing, this person can answer immediately.",
          "why_it_matters": "Customer success without a named owner defaults to whoever has time or whoever the client contacts most often. That means the customer base is managed reactively and unevenly. Some clients get excellent attention because they are demanding. Others who are quietly struggling receive none because they never complain. A named owner converts customer success from a reactive activity into an accountable function with a clear owner who can see the whole picture.",
          "audit_binary": "Is there one named person accountable for customer success outcomes who can produce a current health summary of every active customer relationship without gathering information from other team members, and who has made at least three documented customer success decisions in the past 90 days?",
          "evidence": "CS Ownership Assignment with Customer Health Summary and Decision Records",
          "evidence_example": "A written ownership assignment naming the CS owner and their accountability. A current one-page health summary of the customer base showing the status of every active relationship. A decision log showing at least three CS decisions made by that person in the past 90 days.",
          "example": "The customer success lead is named in the accountability chart as owner of retention and customer outcomes. They produce a monthly customer health summary showing every client's status: green for on track, amber for needs attention, red for at risk. Last quarter they made three documented decisions: escalated a struggling client to a senior consultant after two consecutive amber ratings, paused the expansion conversation with another client until their onboarding milestone was met, and approved a complimentary session for a client who experienced a delivery delay.",
          "false_positive_signals": [
            "Customer success is listed as a shared responsibility between the delivery team and the account team, meaning no single person has a complete view of the customer base or owns the retention outcome.",
            "A CS team member exists but spends most of their time on reactive support rather than owning proactive customer outcomes."
          ],
          "failure_signals": [
            "When leadership asks how customers are doing overall, nobody can answer without spending time gathering information from multiple people.",
            "A client has been struggling for two months but no one on the team identified it as a risk because no single person was watching the whole base."
          ],
          "prerequisite": "CS.2",
          "review_frequency": 4,
          "weights": {
            "impact": 9,
            "complexity": 3,
            "time_to_implement": 3,
            "direct_cost": 1
          }
        },
        {
          "level": 4,
          "headline": "Standardized Onboarding and Support",
          "plain_english": "Every new customer follows the same onboarding sequence, and every customer request for help reaches a defined channel with a written response time commitment.",
          "observation": "At Level 4, two standard methods exist for serving customers. Onboarding: a written sequence of steps guides every new customer from purchase to first value, with a named owner for each step and a defined completion milestone. Every customer goes through the same sequence. Support: a defined channel exists for customer questions and problems, with a written response time commitment that the team consistently meets. Customers know how to reach the company, and the company knows when it has responded.",
          "why_it_matters": "The onboarding period is when most customers decide whether they made the right purchase decision. A structured sequence that gets every customer to first value quickly is the single highest-leverage retention investment a company can make. Support reliability is the floor of customer trust. A company that responds to some customers within hours and leaves others waiting for days is building inconsistency into the relationship from the start. Both standards are required to give every customer an equal chance of success.",
          "audit_binary": "Is there a written onboarding sequence followed consistently for every new customer with defined steps, a named owner per step, and a completion milestone, and is there a defined support channel with a written response time commitment met for at least 90% of requests in the past 90 days?",
          "evidence": "Customer Onboarding Process Document and Support Channel Response Time Records",
          "evidence_example": "A written onboarding sequence showing every step, the owner, the timeline, and the completion milestone. Support channel records from the past 90 days showing response times against the commitment, with at least 90% of requests meeting the standard.",
          "example": "Onboarding sequence: kickoff call within 48 hours of purchase, setup and configuration completed by day five, first use guided session in week two, 30-day check-in call, and 60-day milestone review. Each step has a named owner and a defined output. Every new client receives the same sequence. Support channel: a dedicated email address monitored by the CS team. Written commitment: urgent issues responded to within four hours, standard requests within one business day. Last quarter: 94% of requests met the commitment. Six that did not were all on the same day due to a public holiday, noted in the support log.",
          "false_positive_signals": [
            "Onboarding varies significantly depending on which team member handles the new client, meaning some clients receive a structured experience and others receive an informal introduction.",
            "A support email exists but response times are not tracked and the commitment is verbal rather than written, making it impossible to know whether the standard is being met."
          ],
          "failure_signals": [
            "Early churn is concentrated in the first 60 days, suggesting that the onboarding period is not successfully establishing the value of the product before clients start questioning their decision.",
            "Clients contact multiple people in the company to get help because there is no designated support channel, creating inconsistency and gaps in the support record."
          ],
          "prerequisite": "CS.3",
          "review_frequency": 4,
          "weights": {
            "impact": 9,
            "complexity": 4,
            "time_to_implement": 4,
            "direct_cost": 2
          }
        },
        {
          "level": 5,
          "headline": "Customer Health Metrics",
          "plain_english": "The company tracks at least three customer health metrics monthly covering retention, satisfaction, and outcome achievement, and monitors Net Revenue Retention as the primary indicator of customer base health.",
          "observation": "At Level 5, customer health is measured across three categories. Retention: the monthly churn rate and renewal rate. Satisfaction: NPS or CSAT score and outcome achievement rate, meaning the percentage of customers who have reached the defined success outcome from Level 1. Engagement: a signal such as product usage frequency, support ticket volume, or communication response rate that indicates how actively customers are using and engaging with the product. Net Revenue Retention is also calculated and tracked: it captures the full picture of whether the existing customer base is growing, stable, or shrinking when expansion and contraction are combined with churn.",
          "why_it_matters": "NRR is the most important metric in customer success. An NRR above 100% means that even with zero new customers, the business would grow. An NRR below 100% means the company is running a leaky bucket: new customer acquisition is filling the top while churn empties the bottom. At 90% NRR, the company loses 10% of its revenue base every year from existing customers alone, and growth requires new sales simply to stay flat. Knowing this number at Level 5 allows the company to address the leak before it becomes structural.",
          "audit_binary": "Are at least three customer health metrics covering retention, satisfaction, and outcome achievement tracked monthly with numeric targets, is NRR calculated and reviewed monthly, and has a metric declining for two consecutive months triggered a documented investigation in the past six months?",
          "evidence": "Customer Health Dashboard with Monthly Review Records, NRR Calculation, and Investigation Log",
          "evidence_example": "Monthly customer health reports for at least three consecutive months showing at least three metrics with targets, actuals, and trend. A monthly NRR calculation showing the formula inputs and result. At least one documented investigation triggered by a metric declining for two consecutive months.",
          "example": "Monthly metrics reviewed on the first Monday of each month. Churn rate: 3.2%, target below 3.5%. NPS: 41, target above 40. Outcome achievement rate: 68%, target 75%, declined for two consecutive months. Investigation opened: CS lead reviewed outcome data for all clients who had not reached the milestone, found that seven of ten were stuck at the same point in the process, specifically the implementation of the accountability chart. Onboarding session added at that point. NRR this month: starting MRR 124,000 euros, plus expansion 8,000 euros, minus contraction 3,000 euros, minus churn 4,000 euros, equals 125,000 euros. NRR: 101%. Target: above 100%.",
          "false_positive_signals": [
            "Customer satisfaction is measured through NPS but no metric exists for whether customers are actually achieving the promised outcome, meaning the company knows how customers feel but not whether they are succeeding.",
            "NRR has never been calculated. The company tracks new revenue and gross churn separately but has never combined expansion, contraction, and churn into a single customer base health metric."
          ],
          "failure_signals": [
            "NRR is below 100% and has been for more than two consecutive quarters with no documented investigation or response plan. The customer base is shrinking faster than new sales can compensate.",
            "The outcome achievement rate has never been measured, meaning the company has no evidence that customers are actually reaching the success outcome that was promised at sale."
          ],
          "prerequisite": "TI.5",
          "review_frequency": 12,
          "weights": {
            "impact": 9,
            "complexity": 5,
            "time_to_implement": 5,
            "direct_cost": 2
          }
        },
        {
          "level": 6,
          "headline": "Proactive Retention",
          "plain_english": "The company detects unhappy customers through defined warning signals and intervenes before they decide to cancel.",
          "observation": "At Level 6, the company does not wait for a cancellation notice to discover that a customer is unhappy. A set of early warning thresholds is defined: when NPS drops below a certain score, when a customer has not engaged with the product in a defined number of days, when support ticket volume spikes above a threshold, or when a customer misses a milestone, a proactive contact is triggered within a defined timeframe. Every intervention is logged. The CS owner reviews the intervention log monthly and adjusts thresholds when they are missing signals.",
          "why_it_matters": "Most churn decisions are made weeks or months before the cancellation is communicated. By the time a customer says they are leaving, the decision is usually already made and the chance of reversal is low. An early warning system catches the signal before the decision. Reaching a dissatisfied customer at the right moment, with the right offer of help, converts a probable churner into a retained client at a fraction of the cost of acquiring a replacement. The intervention log is what makes this a system rather than an instinct.",
          "audit_binary": "Are at least three early warning thresholds defined in writing, each with a trigger condition and a required intervention within a defined timeframe, and has every triggered intervention been logged with its outcome in the past 90 days?",
          "evidence": "Early Warning Protocol with Intervention Log",
          "evidence_example": "A written early warning protocol listing at least three threshold conditions, the intervention required for each, the timeframe, and the owner. An intervention log from the past 90 days showing every trigger, the action taken, and the outcome.",
          "example": "Three early warning thresholds. First: NPS response below 7, intervention is a personal call from the CS lead within two business days to understand the issue. Second: no client login or engagement for 21 consecutive days for a SaaS product, or no response to two consecutive check-in messages for a service business, intervention is a re-engagement message within one business day. Third: client misses a defined onboarding milestone by more than 14 days, intervention is a milestone recovery session offered within five business days. Last quarter: 11 interventions triggered, nine completed within the required timeframe, two delayed due to team capacity. Seven of the 11 clients were retained after the intervention. Four churned anyway. All logged with outcome notes.",
          "false_positive_signals": [
            "The team is attentive to customers and picks up on unhappiness intuitively, but no written thresholds exist and interventions happen inconsistently depending on which team member is paying attention.",
            "An early warning system is described in the CS playbook but threshold triggers are not connected to any system that automatically flags them, meaning they rely on someone manually reviewing data and noticing."
          ],
          "failure_signals": [
            "Churn consistently surprises the team. Clients cancel without any prior warning signal having been detected, because the detection mechanism does not exist or is not working.",
            "Intervention is triggered after a client emails to say they want to cancel rather than before they reach that decision, revealing that the system is reactive rather than proactive."
          ],
          "prerequisite": "CS.5",
          "review_frequency": 12,
          "weights": {
            "impact": 9,
            "complexity": 6,
            "time_to_implement": 5,
            "direct_cost": 2
          }
        },
        {
          "level": 7,
          "headline": "Cross-Domain Customer Success Integration",
          "plain_english": "Customer success formally connects to product, sales, marketing, and operations through shared artifacts that are used in real decisions every quarter.",
          "observation": "At Level 7, customer success does not operate in isolation. Four integration points exist. Product receives outcome achievement data and early warning patterns that feed directly into the product roadmap, so that product decisions reflect what is actually preventing customers from succeeding. Sales receives a structured report on expansion opportunities and churn risk, allowing the revenue team to act on existing customer intelligence rather than only pursuing new logo acquisition. Marketing receives a pipeline of satisfied customers who are candidates for testimonials, case studies, and referrals. Operations receives early warning signals that trace back to delivery quality issues, enabling the root cause to be fixed rather than just the symptom.",
          "why_it_matters": "Customer success data is the most underused intelligence in most companies. The CS function sits closest to the customer and sees what is working, what is not, and who is thriving. Without formal integration points, that intelligence stays inside the CS function. With them, it improves the product, fuels the sales pipeline, powers the marketing engine, and fixes operational problems. A satisfied customer base that never becomes a marketing or sales asset is value left on the table.",
          "audit_binary": "Do documented integration artifacts connect CS to PI, RS, BM, and OD, with evidence that each artifact was used to inform a decision in the past quarter?",
          "evidence": "Cross-Domain CS Integration Artifacts: Outcome Data Report for Product, Expansion and Churn Signal Report for Sales, Advocacy Pipeline for Marketing, and Delivery Quality Signal for Operations",
          "evidence_example": "Four artifacts, each with evidence of use in the past quarter: an outcome achievement report shared with the product owner showing which milestones customers are failing to reach, an expansion and churn signal report shared with the sales lead listing clients ready for expansion and clients at elevated churn risk, an advocacy pipeline record showing clients nominated for testimonials or referrals, and a delivery quality signal report shared with the operations lead linking specific CS issues to delivery problems.",
          "example": "PI integration: a quarterly outcome data report showing the three milestones where most clients stall, shared with the product owner before the roadmap review. Last quarter this report led to the addition of a guided session at the stall point. RS integration: a monthly one-page report to the sales lead listing three clients who have hit their success milestone and expressed satisfaction, flagged as expansion candidates, and two clients in the amber zone, flagged as churn risks to avoid approaching for upsell. BM integration: a quarterly advocacy session identifying all clients with NPS above 8 and tenure above six months. Four enrolled in the testimonial program last quarter, two agreed to be reference customers. OD integration: a monthly note to the operations lead flagging any CS issue where the root cause appears to trace back to delivery rather than product or relationship, so that the operations improvement cycle can address it.",
          "false_positive_signals": [
            "Customer success shares information with other teams informally and occasionally, but no structured artifacts exist and the information does not reliably reach the people who could act on it.",
            "Satisfied clients are known to the CS team and occasionally mentioned in marketing conversations, but no pipeline or process exists to systematically convert their satisfaction into advocacy."
          ],
          "failure_signals": [
            "The product team is adding features based on sales requests and founder intuition while customer outcome data showing where clients are actually failing sits unused in the CS function.",
            "The sales team is pursuing expansion with clients that the CS lead knows are at churn risk, because no signal process connects CS intelligence to sales targeting."
          ],
          "prerequisite": "CS.6",
          "review_frequency": 4,
          "weights": {
            "impact": 8,
            "complexity": 7,
            "time_to_implement": 6,
            "direct_cost": 2
          }
        },
        {
          "level": 8,
          "headline": "Systematic Churn Analysis and Customer Advocacy",
          "plain_english": "Every churned customer is analyzed to find the pattern, findings update the CS system, and satisfied customers are enrolled in a structured program that turns their loyalty into growth.",
          "observation": "At Level 8, two improvement cycles operate. First, churn analysis: every churned customer above a defined contract value is reviewed within 30 days of cancellation to identify why they left, at what point in the journey they disengaged, and what signal preceded the churn that the early warning system missed. Findings update the early warning thresholds, the onboarding process, or the integration artifact sent to product. Second, customer advocacy: a structured program identifies satisfied clients meeting defined criteria, invites them to participate in testimonials, case studies, or referrals, tracks their participation, and attributes any resulting revenue to the program.",
          "why_it_matters": "Churn analysis is the improving mechanism that makes the early warning system more accurate over time. Each churned customer is a lesson. If the lesson is documented and applied, the same churn pattern becomes harder to repeat. Without churn analysis, the early warning thresholds are set once based on assumption and never refined. Customer advocacy matters because a satisfied customer who refers one new client has contributed more to revenue than any marketing campaign the company could run at equivalent cost, and most companies never ask them.",
          "audit_binary": "Has every churned customer above a defined contract value been analyzed within 30 days, with findings documented and at least two updates made to the CS system in the past six months as a result, and is there a structured advocacy program with at least five active participants in the past quarter?",
          "evidence": "Churn Analysis Log with System Update Records and Customer Advocacy Program Record",
          "evidence_example": "A churn analysis log with an entry for every churned customer above the defined threshold in the past six months, each showing why they left, where they disengaged, and what signal was missed. At least two documented updates to the early warning protocol or onboarding process made as a result. An advocacy program record showing at least five clients who participated in testimonials, case studies, or referrals in the past quarter.",
          "example": "Churn analysis from the past two quarters: seven clients analyzed. Three common patterns found. Pattern one: clients who did not complete the 60-day milestone review churned at four times the rate of those who did. Response: 60-day review now required rather than optional, and a reminder is triggered automatically 10 days before the scheduled date. Pattern two: clients who raised more than two support tickets in month one churned at higher rates. Response: a new early warning threshold added for two support tickets in the first 30 days. Advocacy program: eight clients enrolled this quarter meeting the criteria of NPS above 8 and tenure above six months. Three case studies published, two reference calls provided to sales, four referrals submitted of which two converted to paying clients.",
          "false_positive_signals": [
            "Churned clients are occasionally discussed in team meetings and their departure is noted, but no structured analysis is conducted and no system update results from the conversation.",
            "Satisfied clients are occasionally asked for a testimonial when a team member thinks of it, but no structured program exists to identify, invite, track, or attribute advocacy activity."
          ],
          "failure_signals": [
            "The same churn pattern appears repeatedly in the customer base without any change to the early warning thresholds or onboarding process, revealing that churn analysis is happening without producing any learning.",
            "The company has clients who would happily refer new business but has never systematically asked them, leaving a growth channel entirely untapped."
          ],
          "prerequisite": "CS.7",
          "review_frequency": 4,
          "weights": {
            "impact": 8,
            "complexity": 7,
            "time_to_implement": 6,
            "direct_cost": 3
          }
        },
        {
          "level": 9,
          "headline": "Independent Customer Success Leadership",
          "plain_english": "A dedicated CS leader owns retention and NRR targets, manages interventions and expansions independently, and the company's most important client relationships are not personally dependent on the founder.",
          "observation": "At Level 9, a named CS leader owns the retention rate, NRR target, intervention decisions, and expansion conversations without founder involvement. They run the monthly CS review, manage the early warning system, lead the advocacy program, and make commercial decisions such as offering a retention incentive or approving a complimentary session. The three most important client relationships are not personally dependent on the founder. If the founder left the company, those clients would remain because the relationship belongs to the company, not to an individual.",
          "why_it_matters": "Founder-dependent customer relationships are a valuation risk that is easy to overlook. A company can have excellent CS metrics while those metrics depend entirely on the founder knowing every key client personally. If the founder steps back, those relationships are at risk. An acquirer will identify this immediately during due diligence and discount accordingly. True CS independence means the retention rate would hold under a leadership change because the system, not the personality, is retaining customers.",
          "audit_binary": "Is there a named CS leader with documented authority over retention targets, intervention decisions, and expansion offers who has run the monthly CS review without founder involvement for at least two consecutive quarters, and is there evidence that the three largest client relationships are not personally dependent on the founder?",
          "evidence": "CS Leadership Authority Document with Independent Review Records and Client Relationship Audit",
          "evidence_example": "A written role description granting CS authority, records of at least six consecutive monthly CS reviews without founder attendance, a decision log showing at least three retention or expansion decisions made independently, and a client relationship audit confirming the three largest clients have a primary relationship with a CS team member rather than the founder.",
          "example": "The Head of Customer Success owns the 95% monthly retention target and the NRR target of 102% or above. They have run the monthly CS review for eight consecutive months without the founder. Last quarter independent decisions: approved a complimentary strategy session for a client at churn risk, offered a two-month payment plan to a client facing cash flow difficulties, and initiated an expansion conversation with a client who reached their 90-day milestone ahead of schedule. Client relationship audit: the three largest clients by contract value each have their primary relationship with the CS lead or a senior CS team member. The founder has not spoken directly with any of them in six months.",
          "false_positive_signals": [
            "A CS leader exists and runs the operational aspects of the function independently, but the three most important client relationships still run through the founder personally.",
            "The CS function is independent operationally but the founder is still consulted before any retention incentive is offered or any expansion conversation is initiated."
          ],
          "failure_signals": [
            "A key client threatens to leave and the first instinct of the CS team is to call the founder to manage the relationship, revealing that the real retention mechanism is still the founder's personal relationship.",
            "NRR has been below 100% for two consecutive quarters with no documented intervention plan, suggesting that ownership of the NRR target is nominal rather than real."
          ],
          "prerequisite": "TC.6",
          "review_frequency": 2,
          "weights": {
            "impact": 9,
            "complexity": 8,
            "time_to_implement": 7,
            "direct_cost": 5
          }
        },
        {
          "level": 10,
          "headline": "Institutional Customer Success Engine",
          "plain_english": "The company runs a self-sustaining customer success system with NRR consistently above 100% for at least four consecutive quarters, governed and reviewed annually by an external party.",
          "observation": "At Level 10, all CS systems are running together and producing compound results. Customer outcomes are defined and measured. Health is monitored across three metric categories. Early warning interventions are active and improving through churn analysis. Cross-domain integrations are live. The advocacy program is producing referrals. Leadership is independent. And the whole system is documented in an annual CS governance report reviewed by an external party. NRR has been above 100% for at least four consecutive quarters, meaning the existing customer base is growing on its own, and each new client acquired adds to a compounding asset rather than replacing one that left.",
          "why_it_matters": "NRR above 100% for four consecutive quarters is not just a retention metric. It is proof that the company has built something customers want to keep and expand. It means the revenue engine has two cylinders: new customer acquisition and organic growth from the existing base. Companies with sustained NRR above 110% are valued at fundamentally different multiples than those with NRR below 100%, because their revenue is more predictable, more durable, and less dependent on continuous acquisition spend.",
          "audit_binary": "Has the customer success system operated without founder involvement for at least four consecutive quarters, with NRR above 100% in each quarter, all three health metric categories stable or improving, and has the system been documented in an annual CS governance report reviewed by at least one external party?",
          "evidence": "Annual Customer Success Governance Report with External Review Record",
          "evidence_example": "An annual report showing: quarterly NRR for four quarters, quarterly churn rate, NPS and outcome achievement rate trends, early warning intervention volume and outcomes, churn analysis findings and system updates, advocacy program results including referrals generated and revenue attributed, and a record of founder non-involvement across all four quarters. Reviewed and noted by at least one external advisor or board member.",
          "example": "Annual CS governance report. NRR: Q1 103%, Q2 101%, Q3 104%, Q4 106%, all above the 100% target. Churn rate: average 2.8% per month, stable across all four quarters. Outcome achievement rate: improved from 68% to 79% over the year following onboarding updates from churn analysis. Early warning system: 38 interventions triggered across four quarters, 29 clients retained. Churn analysis: eight clients analyzed, four system updates made. Advocacy program: 12 clients participated, seven referrals generated, four converted to new clients representing 96,000 euros in new contract value. Founder involvement: zero CS decisions in the past 12 months. Reviewed by an independent advisor who recommended expanding the early warning thresholds to include payment delay as a churn predictor. Threshold added.",
          "false_positive_signals": [
            "NRR is above 100% but is driven almost entirely by a few large clients expanding, while the majority of the customer base is churning at an elevated rate. Aggregate NRR masks a fragile underlying distribution.",
            "CS metrics are strong and the system appears institutional, but the two or three largest clients still have their primary relationship with the founder personally, making the retention of those clients founder-dependent."
          ],
          "failure_signals": [
            "NRR has dropped below 100% for two consecutive quarters with no documented corrective plan. The customer base is now shrinking even before churn from new clients is considered.",
            "A prospective acquirer identifies that the majority of retained revenue depends on personal founder relationships or on one or two key CS team members whose departure would put those relationships at risk."
          ],
          "prerequisite": "CS.9",
          "review_frequency": 1,
          "weights": {
            "impact": 10,
            "complexity": 9,
            "time_to_implement": 9,
            "direct_cost": 6
          }
        }
      ]
    },
    "FR": {
      "id": "FR",
      "name": "Finance & Risk",
      "purpose": "Maintain financial control, visibility, and long-term economic stability of the business.",
      "cxo_persona": "Chief Financial Officer",
      "description": "How the company records its financial activity, organizes and reports its financial position, manages cash, plans ahead, and builds the financial controls that make the numbers trustworthy. A mature finance and risk domain means leadership makes decisions from accurate, timely financial data, the company never runs out of cash by surprise, and the financial system can be handed to any external party and stand up to scrutiny without the founder having to explain it.",
      "direction": {
        "name": "Financial Strategy and Risk Management",
        "purpose": "Define how the company manages financial health, allocates capital, protects itself from financial and operational risks, and provides leadership with the financial visibility needed to make confident strategic decisions.",
        "required_outputs": [
          "revenue_model_and_unit_economics",
          "cost_structure_and_drivers",
          "financial_reporting_model",
          "cash_management_strategy",
          "annual_budget_process",
          "rolling_forecast_model",
          "risk_management_framework",
          "financial_review_rhythm"
        ],
        "primary_owner": "Chief Financial Officer",
        "contributors": [
          "CEO",
          "revenue_lead",
          "operations_lead"
        ],
        "minimum_standard": "One documented financial model exists explaining how the company earns money, spends money, tracks cash, and manages financial risk, reviewed at least quarterly.",
        "review_frequency": 4,
        "questions_to_answer": [
          "What is the gross margin on the core product, and is it improving or deteriorating quarter over quarter?",
          "How many months of cash runway does the company have today, and what is the earliest date at which that number becomes a constraint?",
          "What are the three largest cost lines, and what would it take to reduce each of them by 20%?",
          "What financial risk, if it materialized today, would most threaten the company's ability to operate?",
          "At what revenue level does the company become structurally profitable, and how far is it from that level?",
          "How accurate have the financial forecasts been in the past four quarters, and what assumptions were consistently wrong?",
          "What would a bank, investor, or acquirer need to see to have full confidence in the financial position, and can the company produce it today?",
          "What are the payment terms with the top five clients, and is the accounts receivable aging creating any cash flow risk?"
        ]
      },
      "levels": [
        {
          "level": 1,
          "headline": "Accurate Financial Records",
          "plain_english": "Every transaction the company makes is recorded accurately in an accounting system and reconciled within 30 days of the period end.",
          "observation": "At Level 1, the company's financial records reflect reality. Every sale, every expense, every payment in and out is recorded in an accounting system, not a personal spreadsheet. The books are reconciled monthly: bank statements match accounting records, and any discrepancy is investigated and resolved before the next month begins. Leadership can ask what the company earned and spent last month and receive an accurate answer from the system within minutes.",
          "why_it_matters": "Every financial decision the company makes, from pricing to hiring to investment, rests on the assumption that the numbers are accurate. A company operating from an unreconciled spreadsheet is making decisions based on an approximation that may be significantly wrong. Accurate financial records are not an accounting obligation. They are the foundation of every commercial decision the company will ever make.",
          "audit_binary": "Are all transactions recorded in an accounting system, with bank statements reconciled and books closed within 30 days of each month end, for the past six consecutive months?",
          "evidence": "Accounting System Records with Reconciliation Log",
          "evidence_example": "An accounting system showing complete transaction records for the past six months, with a reconciliation log confirming bank statements were matched and books closed within 30 days of each month end. No unreconciled items older than 30 days.",
          "example": "All income and expenses are entered into the accounting system by the bookkeeper within five business days of the transaction. Month-end close happens by the 15th of the following month. The reconciliation log shows the close date for each of the past six months. Last month's close: completed on the 12th. No unreconciled items. Leadership can pull the income statement for any of the past six months in under two minutes.",
          "false_positive_signals": [
            "Transactions are tracked in a spreadsheet that is kept roughly current, but it has never been reconciled against the actual bank statements and may be missing transactions.",
            "An accounting system is in use but month-end close happens quarterly rather than monthly, leaving leadership three months behind on the actual financial position for most of the year."
          ],
          "failure_signals": [
            "Leadership cannot state last month's revenue and expenses without checking with the bookkeeper or accountant first, because no current records are accessible to them.",
            "A discrepancy between the accounting records and the bank balance has existed for more than 30 days and has not been investigated."
          ],
          "prerequisite": null,
          "review_frequency": 12,
          "weights": {
            "impact": 10,
            "complexity": 2,
            "time_to_implement": 2,
            "direct_cost": 2
          }
        },
        {
          "level": 2,
          "headline": "Monthly Financial Statements Organized",
          "plain_english": "The profit and loss statement, balance sheet, and cash position for the past three months are accessible to leadership in one place without requesting them.",
          "observation": "At Level 2, financial statements are produced monthly and stored in a location that leadership can access without asking. The P&L shows revenue, costs, and net result for each month. The balance sheet shows assets, liabilities, and equity. The cash position shows the current bank balance. All three are available for at least the past three months. A founder preparing for a bank meeting, an investor call, or a leadership discussion can pull the numbers themselves in under five minutes.",
          "why_it_matters": "Financial statements that exist only on the accountant's computer or are produced only when someone requests them are not available to the company in any meaningful sense. Monthly statements in an accessible location convert financial reporting from a service that someone provides to a resource that leadership uses. The regularity matters as much as the accessibility. Quarterly statements leave three months of unknowns between each look. Monthly statements make the trend visible and make surprises rare.",
          "audit_binary": "Are monthly P&L statements, balance sheets, and cash position reports for the past six months stored in a single accessible location, available to leadership without requesting them from the bookkeeper or accountant?",
          "evidence": "Monthly Financial Statement Archive",
          "evidence_example": "A shared folder or financial system containing monthly P&L, balance sheet, and cash position reports for at least the past six months, with each report dated and accessible to leadership without an intermediary.",
          "example": "A shared finance folder containing a subfolder for each month. Each subfolder holds three documents: the monthly P&L, the balance sheet, and a one-page cash summary. Produced by the bookkeeper by the 15th of the following month and uploaded immediately. The folder is bookmarked by the CEO and the operations lead. The last time anyone requested a financial report verbally rather than pulling it themselves was seven months ago.",
          "false_positive_signals": [
            "Monthly statements are produced by the accountant and exist in their system, but leadership receives them only when they ask or when a tax deadline approaches.",
            "A P&L is produced monthly but the balance sheet and cash position are only available quarterly, leaving two of the three essential financial views invisible for most of the year."
          ],
          "failure_signals": [
            "Leadership discovers a financial problem, such as a cost overrun or a margin compression, three months after it began because statements are not reviewed monthly.",
            "A bank or investor meeting requires the finance team to scramble to produce statements that should be routinely available, because no organized archive exists."
          ],
          "prerequisite": "FR.1",
          "review_frequency": 12,
          "weights": {
            "impact": 9,
            "complexity": 2,
            "time_to_implement": 2,
            "direct_cost": 2
          }
        },
        {
          "level": 3,
          "headline": "Named Finance Owner and Cash Flow Visibility",
          "plain_english": "One person is accountable for the company's financial health, and the cash position, 90-day cash projection, and months of runway are reviewed every month.",
          "observation": "At Level 3, two things are true. One named person owns the financial function and can answer, at any moment, what the current cash position is, how many months of runway the company has, and what the top three cost drivers are. They do not need to be a CFO. In a small company this might be the founder explicitly accepting accountability while they build the function. And a monthly cash review covers three numbers: current cash balance, expected cash in and out over the next 90 days, and the resulting runway in months. These three numbers are reviewed in the first leadership meeting of every month.",
          "why_it_matters": "Cash flow is the oxygen of the business. Revenue and profit are important, but a profitable company can still run out of cash if its collection cycles are too long or its costs hit before its revenue arrives. A company that does not know its runway is a company that can be surprised into a crisis. Reviewing these three numbers monthly takes 10 minutes and is the single most valuable financial habit a founder can build.",
          "audit_binary": "Is there one named person accountable for the financial function who can state the current cash position, 90-day projection, and months of runway without preparation, and are these three numbers reviewed in the first leadership meeting of every month with a written record for each of the past three months?",
          "evidence": "Finance Ownership Assignment and Monthly Cash Review Records",
          "evidence_example": "A written ownership assignment naming the finance owner. Monthly cash review records for the past three months, each showing: current cash balance, 90-day projected inflows and outflows, projected closing cash, and months of runway at current burn rate.",
          "example": "The CEO owns the finance function for now with the bookkeeper as their operational support. Monthly cash review: current cash 183,000 euros. Expected inflows next 90 days: 94,000 euros from three signed contracts and one renewal due. Expected outflows: 112,000 euros from payroll, contractor fees, software, rent, and tax. Projected cash in 90 days: 165,000 euros. Runway at current burn: 11.4 months. Reviewed at the first Monday meeting of each month and recorded in the finance folder.",
          "false_positive_signals": [
            "The current bank balance is known because the founder checks it regularly, but no 90-day projection exists and the concept of runway has never been formally calculated.",
            "Cash flow is reviewed when someone asks about it or when a large payment is due, rather than as a fixed monthly rhythm with a written record."
          ],
          "failure_signals": [
            "The company has run short of cash unexpectedly in the past 12 months because no forward projection revealed the gap before it occurred.",
            "When asked how many months of runway the company has, leadership gives an answer based on a rough mental estimate rather than a recent calculation."
          ],
          "prerequisite": "FR.2",
          "review_frequency": 12,
          "weights": {
            "impact": 10,
            "complexity": 3,
            "time_to_implement": 3,
            "direct_cost": 1
          }
        },
        {
          "level": 4,
          "headline": "Standardized Financial Process",
          "plain_english": "The company operates with an annual budget agreed before the year begins and a consistent month-end close process that runs the same way every month.",
          "observation": "At Level 4, two standards govern how financial information is produced. The annual budget is prepared before each financial year begins, covering planned revenue and expenditure by category and month. It is the standard against which actual performance is compared throughout the year. The month-end close process follows the same steps in the same order by the same deadline every month, owned by the finance function and not dependent on whoever has time. Both standards mean that financial information is produced consistently rather than variably.",
          "why_it_matters": "A budget converts business goals into financial commitments. Without one, spending decisions are reactive and performance has no agreed benchmark to measure against. The month-end close process matters because inconsistent closing means inconsistent quality of financial information. A company that closes the books by the 15th in some months and the last day of the following month in others does not have monthly financial visibility. It has occasional financial visibility. Standardizing both creates the reliability that makes financial management possible.",
          "audit_binary": "Is there a current annual budget covering planned revenue and expenditure by month, produced before the financial year began, reviewed quarterly against actuals, and does a written month-end close process exist that has been followed within the same five-day window for each of the past six months?",
          "evidence": "Annual Budget with Quarterly Variance Reviews and Month-End Close Process Document with Timing Records",
          "evidence_example": "A budget document covering the current financial year with monthly breakdowns of planned revenue and expenditure by category. Quarterly variance reviews comparing actuals to budget. A month-end close process document showing the steps and deadline. Close timing records for the past six months confirming the deadline was met each time.",
          "example": "Annual budget prepared each December for the following year. Covers: monthly revenue targets by service line, payroll costs by role, contractor budget, technology spend, marketing budget, and overhead. Reviewed against actuals in the first week of each new quarter. Last quarter review: revenue 4% ahead of budget, gross margin 1.2% behind budget due to higher contractor costs than planned. Month-end close process: seven steps, owner is the bookkeeper, deadline is the 12th of the following month. Past six months: closed on the 10th, 11th, 12th, 9th, 13th, and 11th. All within the agreed window.",
          "false_positive_signals": [
            "An annual budget was created at the start of the year but has not been reviewed against actuals since January, making it a historical artifact rather than an active management tool.",
            "Month-end close happens whenever the bookkeeper gets to it, ranging from the 10th to the 25th of the following month depending on how busy they are, making the timing of financial visibility unpredictable."
          ],
          "failure_signals": [
            "The company has no annual budget and spending decisions are made based on current cash balance rather than a planned allocation, meaning cost discipline is reactive rather than intentional.",
            "Significant variances from plan have occurred in multiple budget categories without any documented review or corrective action, suggesting the budget exists but is not used as a management tool."
          ],
          "prerequisite": "FR.3",
          "review_frequency": 4,
          "weights": {
            "impact": 8,
            "complexity": 4,
            "time_to_implement": 4,
            "direct_cost": 1
          }
        },
        {
          "level": 5,
          "headline": "Financial Performance Metrics",
          "plain_english": "The company tracks at least five financial health metrics monthly beyond revenue, including gross margin, operating margin, and accounts receivable days.",
          "observation": "At Level 5, the company measures financial health rather than just financial activity. Five metrics are tracked monthly at minimum. Gross margin: what percentage of revenue remains after direct costs. Operating margin: what percentage remains after all operating costs. Revenue growth rate: month-over-month and year-over-year. Accounts receivable days: how many days on average does it take to collect cash after invoicing. Runway: months of operating capacity at the current net burn rate. All five have numeric targets. All are reviewed in the monthly finance meeting. A metric declining for two consecutive months triggers a documented investigation.",
          "why_it_matters": "Revenue alone is the most misleading financial metric a company can track. A business with growing revenue and shrinking gross margin is growing its way toward insolvency. A business with strong margins and a 90-day average collection period may have a cash crisis while appearing profitable. Gross margin trend is the single most important financial signal for a service or product business: it shows whether the core business model is becoming more or less efficient over time. The other metrics together reveal whether the company is collecting its money, managing its costs, and sustaining its operations.",
          "audit_binary": "Are at least five financial health metrics, including gross margin, operating margin, revenue growth rate, accounts receivable days, and runway, tracked monthly with numeric targets, reviewed in a fixed monthly meeting, and has a metric declining for two consecutive months triggered a documented investigation in the past six months?",
          "evidence": "Financial Metrics Dashboard with Monthly Review Records and Investigation Log",
          "evidence_example": "Monthly financial metrics reports for at least three consecutive months showing at least five metrics with targets, actuals, and trend. At least one documented investigation triggered by a metric declining for two consecutive months.",
          "example": "Monthly financial metrics reviewed on the first Monday of each month. Gross margin: 63%, target 65%, declined for two months. Investigation opened: bookkeeper reviewed direct cost entries and found that three subcontractor invoices had been categorized as direct costs in months when they should have been overhead. Reclassified. Gross margin recalculated at 66.2%. No structural margin issue. Operating margin: 21%, target 20%. Revenue growth rate: 8% month-over-month, target 5%. AR days: 34 days, target below 40. Runway: 10.8 months, target above 9.",
          "false_positive_signals": [
            "Revenue, expenses, and net profit are tracked monthly but no ratios or health metrics are calculated, meaning the company knows its financial results but not its financial condition.",
            "Gross margin is calculated annually as part of the tax process but never tracked monthly, meaning margin compression can run for a full year before anyone notices the trend."
          ],
          "failure_signals": [
            "The company discovers its gross margin has been declining for six months only when the annual accounts are prepared, because no monthly metric tracking existed to surface the trend earlier.",
            "Accounts receivable aging has extended to 60 or 70 days without triggering any collection action or management concern, because the metric is not being tracked."
          ],
          "prerequisite": "TI.5",
          "review_frequency": 12,
          "weights": {
            "impact": 9,
            "complexity": 5,
            "time_to_implement": 5,
            "direct_cost": 2
          }
        },
        {
          "level": 6,
          "headline": "Rolling Financial Forecast and Risk Register",
          "plain_english": "The company maintains a 12-month rolling financial forecast updated quarterly and a risk register identifying the top financial and operational risks with a mitigation plan for each.",
          "observation": "At Level 6, finance looks forward rather than backward. A 12-month rolling forecast is updated each quarter based on current actuals, known pipeline, confirmed contracts, and planned costs. It projects revenue, expenses, and cash position month by month for the next 12 months. A risk register runs alongside it: at minimum 10 identified risks covering financial, operational, market, and compliance categories. Each risk has a likelihood rating, an impact rating, a named mitigation owner, and a mitigation action. Both are reviewed by leadership quarterly.",
          "why_it_matters": "A budget tells the company what it planned. A forecast tells the company what it now expects. The difference between the two, updated quarterly, is the most useful financial planning tool available. It answers the question every founder needs to answer continuously: if things keep going the way they are going, where will we be in six months? The risk register addresses the other half of that question: what could derail the forecast, and what is the company doing about it? Together they convert financial management from a rearview mirror into a windscreen.",
          "audit_binary": "Is there a 12-month rolling financial forecast updated within the past 90 days based on current actuals and pipeline, and does a risk register exist with at least 10 identified risks each having a likelihood rating, impact rating, named mitigation owner, and mitigation action, reviewed by leadership in the past quarter?",
          "evidence": "Rolling Financial Forecast with Update History and Risk Register with Quarterly Review Record",
          "evidence_example": "A financial forecast document showing 12 months of projected revenue, expenses, and cash position, with an update log showing it was revised within the past 90 days based on current data. A risk register with at least 10 risks, each showing likelihood, impact, owner, and mitigation action, with a record of leadership review in the past quarter.",
          "example": "Rolling forecast: updated in October based on Q3 actuals and current pipeline. Projects revenue of 2.4M euros for the next 12 months, up from 2.2M in the July update. Three scenarios modeled: base case 2.4M, downside if the two largest renewal contracts are lost 1.9M, upside if the pipeline converts at 10% above current rate 2.7M. Cash position in all three scenarios remains above six months of runway. Risk register: 12 risks identified. Top risk: revenue concentration, two clients represent 38% of total revenue, rated high likelihood and high impact. Mitigation: active client diversification target of top two clients representing less than 25% by year end, owned by the sales lead. Reviewed in the Q3 leadership meeting last month.",
          "false_positive_signals": [
            "An annual budget exists and is used, but no rolling forecast is maintained between annual planning cycles, leaving the company operating from a plan that becomes more obsolete with each passing month.",
            "A risk register was created 12 months ago and lists the same risks with the same mitigations that have never been actioned, revealing it is a compliance document rather than a management tool."
          ],
          "failure_signals": [
            "The company is surprised by a financial shortfall that a current rolling forecast would have predicted three months in advance, because the forecast is updated annually rather than quarterly.",
            "A significant business risk materializes and leadership says they knew about it, but no risk register entry exists showing it was formally identified, assessed, or mitigated."
          ],
          "prerequisite": "FR.5",
          "review_frequency": 4,
          "weights": {
            "impact": 8,
            "complexity": 6,
            "time_to_implement": 5,
            "direct_cost": 2
          }
        },
        {
          "level": 7,
          "headline": "Cross-Domain Financial Integration",
          "plain_english": "Finance formally connects to revenue, operations, people, and technology through shared data that makes unit economics, budget performance, and investment decisions evidence-based.",
          "observation": "At Level 7, finance does not operate as an isolated reporting function. Four integration points exist. Revenue and sales receives a joint quarterly unit economics review covering LTV:CAC, payback period, and gross margin by customer segment, informing pricing and sales investment decisions. Operations receives actual cost-of-delivery data that makes the gross margin calculation accurate and enables pricing to reflect true unit economics rather than estimates. People receives a total people cost analysis covering salary, benefits, and overhead cost per head compared to budget, informing hiring and compensation decisions. Technology receives an ROI review of automation investments measuring time saved against cost, confirming that technology investment is producing financial returns.",
          "why_it_matters": "Finance without cross-domain integration produces accurate reports of the past. Finance with cross-domain integration shapes the future. When the unit economics review shows that a customer segment is unprofitable, sales stops pursuing it. When cost-of-delivery data shows that a service line has a 40% margin rather than the assumed 60%, pricing changes. When the people cost analysis shows that the company is above budget on headcount costs, hiring decisions are made more deliberately. Each integration point converts financial data from a historical record into a current decision input.",
          "audit_binary": "Do documented integration artifacts connect FR to RS, OD, TC, and TI, with evidence that each artifact was used to inform a business decision in the past quarter?",
          "evidence": "Cross-Domain Financial Integration Artifacts: Unit Economics Review with RS, Cost-of-Delivery Report with OD, People Cost Analysis with TC, and Technology ROI Review with TI",
          "evidence_example": "Four artifacts, each with evidence of use in the past quarter: a unit economics review shared with the sales lead showing LTV:CAC and margin by segment, a cost-of-delivery report shared with the operations lead showing actual gross margin per service line, a people cost analysis showing total cost per head versus budget, and a technology investment ROI review.",
          "example": "RS integration: a quarterly unit economics review presented jointly with the sales lead. Q3 findings: enterprise clients generate an LTV:CAC of 5.8:1 and a gross margin of 71%. SME clients generate an LTV:CAC of 2.4:1 and a gross margin of 52%. Decision: sales targeting adjusted to prioritize enterprise segment. OD integration: actual delivery cost per project calculated monthly and shared with the operations lead. Q3 finding: average cost per project is 3,200 euros against an assumed 2,800 euros, compressing margin by 5%. Investigation opened into why actual costs exceed assumptions. TC integration: total people cost analysis showing that the team is 8% above the headcount budget following two hires that were made slightly above the planned salary range. Freeze on further hiring until Q1 budget is set. TI integration: quarterly review of automation investments. The five workflows built in Q2 are saving an estimated 28 hours per month at an average blended cost of 65 euros per hour, generating an estimated 1,820 euros per month in saved time against a one-time build cost of 4,200 euros. Payback period: 2.3 months.",
          "false_positive_signals": [
            "Finance produces accurate reports that all domains can access, but no joint review sessions exist and the data does not formally feed decisions in other domains beyond general awareness.",
            "Unit economics have been calculated once at a company level but have never been broken down by customer segment or service line, leaving pricing and sales targeting decisions based on blended averages rather than segment-specific data."
          ],
          "failure_signals": [
            "Pricing has not been reviewed in 18 months despite delivery costs having increased, because no integration point exists between finance and operations to surface the margin compression.",
            "The sales team is pursuing a customer segment that finance knows is unprofitable at current pricing, but no formal unit economics review connects the two functions."
          ],
          "prerequisite": "FR.6",
          "review_frequency": 4,
          "weights": {
            "impact": 8,
            "complexity": 7,
            "time_to_implement": 6,
            "direct_cost": 2
          }
        },
        {
          "level": 8,
          "headline": "Financial Controls and External Review",
          "plain_english": "The company operates documented financial controls covering authorization, segregation of duties, and reconciliation, and has completed an external financial review in the past 24 months.",
          "observation": "At Level 8, the financial system is designed to catch and prevent errors and fraud, not just to report results. Financial controls define: which spend amounts require whose approval, that no single person can both authorize and execute a payment, that bank accounts are reconciled by one person and reviewed by a different person, and that the books are reviewed quarterly by someone not involved in producing them. An external financial review, whether a full audit or an independent accountant's review, has been completed in the past 24 months with findings documented and addressed.",
          "why_it_matters": "Financial controls are what make the numbers trustworthy, not just accurate. A company where the same person approves spending, makes the payment, and reconciles the account has a structural risk regardless of the integrity of the people involved. Controls are not about distrust. They are about designing a system that protects the company and its stakeholders from the consequences of errors, judgment lapses, and the rare but real threat of fraud. An external review is the independent proof that the controls are working and the numbers can be trusted.",
          "audit_binary": "Are documented financial controls in place covering expenditure authorization levels, segregation of payment duties, and independent reconciliation review, and has an external financial review been completed in the past 24 months with all identified issues resolved?",
          "evidence": "Financial Controls Policy and External Financial Review Report with Remediation Records",
          "evidence_example": "A written financial controls policy covering authorization thresholds, segregation of duties, and reconciliation procedures. An external financial review or audit report from within the past 24 months. Records confirming all findings from that review have been addressed.",
          "example": "Financial controls policy: expenses below 500 euros: team member authority. Between 500 and 5,000 euros: department lead approval. Between 5,000 and 25,000 euros: CFO or equivalent approval. Above 25,000 euros: CEO and CFO joint approval. Payments are executed by the bookkeeper but authorized by the finance owner, never the same person. Bank reconciliation is performed by the bookkeeper monthly and reviewed by the CEO or CFO before the books are closed. External review: an independent accountant reviewed the financial statements and controls in March. Two findings: one minor categorization inconsistency corrected, one missing authorization record for a payment in December retroactively documented and process updated to prevent recurrence. Both findings resolved and confirmed by the reviewer.",
          "false_positive_signals": [
            "A financial controls policy exists in writing but the founder routinely approves and executes their own expense claims without a second review, undermining the segregation principle in the most visible way possible.",
            "The company has never had an external financial review because it has always been too small, despite having revenue above 1M euros and external investors or lenders who rely on the financial statements."
          ],
          "failure_signals": [
            "A payment error or an unauthorized expense is discovered only during the annual accounting process months after it occurred, because no reconciliation review existed to catch it sooner.",
            "An investor or bank requests audited or independently reviewed financial statements and the company cannot produce them, creating a delay in a time-sensitive process."
          ],
          "prerequisite": "FR.7",
          "review_frequency": 4,
          "weights": {
            "impact": 9,
            "complexity": 7,
            "time_to_implement": 6,
            "direct_cost": 5
          }
        },
        {
          "level": 9,
          "headline": "Independent Finance Leadership",
          "plain_english": "Finance is led by a dedicated or fractional CFO who owns reporting, forecasting, controls, and external relationships without founder involvement.",
          "observation": "At Level 9, a named finance leader, whether internal or fractional, owns the full financial function. They produce and present the monthly financial summary, maintain the rolling forecast, manage the risk register, oversee the controls process, manage the relationship with the external accountant and auditor, and make financial decisions up to a defined threshold without the founder. The founder receives the monthly financial summary and reviews the quarterly forecast, but does not prepare financial information, manage banking relationships, or approve routine financial decisions.",
          "why_it_matters": "Founder-managed finances are a common and significant valuation risk. When the founder is the person who understands the numbers, produces the reports, and manages the bank, the financial function is founder-dependent in the most fundamental way. An acquirer or investor who discovers this treats it the same way they treat any other key-person dependency: as a risk that reduces the multiple they are willing to pay. A dedicated finance leader converts financial management from a founder skill into a company capability.",
          "audit_binary": "Is there a named finance leader, internal or fractional, who produces the monthly financial summary, maintains the rolling forecast, and manages external financial relationships independently, with at least four consecutive months of leadership review conducted without the founder preparing or presenting the financial information?",
          "evidence": "Finance Leadership Authority Document with Independent Review Records",
          "evidence_example": "A written authority document naming the finance leader and their decision threshold. Records of at least four consecutive monthly financial reviews where the finance leader presented independently. A record of external financial relationships managed by the finance leader rather than the founder.",
          "example": "A fractional CFO engaged for three days per month. Owns: monthly financial close oversight, production of the leadership financial summary, rolling forecast maintenance, risk register updates, and the bank relationship. Decision authority: up to 10,000 euros per transaction without founder approval. Last four monthly summaries: all presented by the fractional CFO at the leadership meeting without founder preparation. The CEO reviewed the summary and asked questions but did not produce any of the content. Banking: the fractional CFO manages the bank relationship and made the last two credit facility renewal discussions independently. The founder was informed of the outcome but was not part of the conversations.",
          "false_positive_signals": [
            "A bookkeeper or accountant handles the financial records independently, but all financial interpretation, decision-making, and external relationships are still managed by the founder, meaning operational finance is delegated but strategic finance is not.",
            "A fractional CFO is engaged for advice but the founder still produces the monthly financial summary and presents it to the team, making the engagement advisory rather than ownership-level."
          ],
          "failure_signals": [
            "The company's bank, accountant, or investor calls the founder directly for financial information because they have no relationship with anyone else in the financial function.",
            "A financial decision that falls within normal business operations requires waiting for the founder's return from travel because no defined authority level exists for the finance function."
          ],
          "prerequisite": "TC.6",
          "review_frequency": 2,
          "weights": {
            "impact": 9,
            "complexity": 8,
            "time_to_implement": 7,
            "direct_cost": 6
          }
        },
        {
          "level": 10,
          "headline": "Institutional Financial System",
          "plain_english": "The company operates a complete, governed financial system with clean audited accounts, independent CFO leadership, and financial documentation that any investor, lender, or acquirer can trust without the founder explaining it.",
          "observation": "At Level 10, all financial systems are running together under independent leadership and external validation. Accurate records close monthly. Statements are organized and accessible. Cash flow is reviewed monthly. A budget governs spending. Financial health metrics are tracked. A rolling forecast and risk register are active. Cross-domain financial integration is live. Controls are in place. An external audit is completed annually. The fractional or dedicated CFO presents the annual financial governance report to the advisory board. An investor, lender, or acquirer can conduct financial due diligence on this company without requiring the founder to explain the numbers.",
          "why_it_matters": "Institutional financial governance is the proof that the company is a business, not a personal enterprise. When every financial figure can be traced to a reconciled accounting system, every decision can be traced to an authorization log, and every risk is documented with an owner and a mitigation, the financial function has become an institutional asset rather than a founder skill. This is what allows the company to raise debt, attract investment, and be sold at a multiple that reflects the real value of the business rather than the personal credibility of the person who built it.",
          "audit_binary": "Has the financial function operated without founder involvement in reporting, forecasting, or external relationships for at least four consecutive quarters, has an annual external audit been completed in the past 12 months with a clean or minor-findings opinion, and can a complete financial due diligence package be produced within five business days without founder involvement?",
          "evidence": "Annual Financial Governance Report with External Audit Record and Due Diligence Package Readiness Confirmation",
          "evidence_example": "An annual financial governance report covering: monthly close performance, financial metrics trend, forecast accuracy, risk register status, controls compliance, and external audit outcome. An external audit report from within the past 12 months. A confirmation from the finance leader that a standard due diligence package can be produced within five business days.",
          "example": "Annual financial governance report. Monthly close: completed within 12 days in 11 of 12 months. Financial metrics: gross margin stable at 64%, operating margin improved from 18% to 23% over the year. Forecast accuracy: average 7% variance from actuals across four quarters. Risk register: 12 risks tracked, two resolved, three new risks added. Controls: no authorization breaches, all reconciliations completed independently, two segregation of duties improvements implemented. External audit: completed in November, clean opinion, two immaterial findings both resolved within 30 days. Due diligence readiness: the fractional CFO confirmed a standard data room can be populated within three business days. Founder involvement: zero financial decisions, presentations, or external relationship interactions in the past 14 months. Report presented to the advisory board in December.",
          "false_positive_signals": [
            "The financial system is well-managed and controls are in place, but the annual audit has only been completed once and the company has returned to reviewing accounts independently rather than maintaining an annual external audit cycle.",
            "Financial governance looks strong internally but an investor who requests due diligence materials still receives a call from the founder who explains the numbers rather than a clean package from the finance function."
          ],
          "failure_signals": [
            "A potential acquirer begins financial due diligence and the process stalls because financial records are not in a format that can be shared directly, or because key financial context exists only in the founder's memory.",
            "The external audit produces a qualified opinion or significant findings for a second consecutive year, suggesting the underlying financial controls or records do not yet meet an institutional standard."
          ],
          "prerequisite": "FR.9",
          "review_frequency": 1,
          "weights": {
            "impact": 10,
            "complexity": 9,
            "time_to_implement": 9,
            "direct_cost": 7
          }
        }
      ]
    },
    "LD": {
      "id": "LD",
      "name": "Leadership & Direction",
      "purpose": "Set the direction, make the decisions, and hold every function accountable to a shared goal.",
      "cxo_persona": "Chief Executive Officer",
      "description": "How the organization is led, how strategy turns into action, and how decisions get made consistently regardless of who is in the room. A mature leadership domain means the company moves in one direction, learns from experience, and eventually runs itself.",
      "direction": {
        "name": "Strategic Direction",
        "purpose": "The living leadership blueprint of the company. It defines why the business exists, where it is going, which opportunities it will refuse, and how leaders make trade-offs. It gets updated as the business learns and grows.",
        "required_outputs": [
          "mission",
          "vision",
          "core_values",
          "strategic_angle",
          "current_priorities",
          "decision_rights",
          "leadership_structure",
          "review_rhythm"
        ],
        "primary_owner": "Chief Executive Officer",
        "contributors": [
          "Founder",
          "Executive Team",
          "Board or Advisors"
        ],
        "minimum_standard": "One current written leadership direction document exists that defines why the business exists, where it is going, what it values, how it wins, what it will refuse, and how leaders make trade-offs.",
        "review_frequency": 4,
        "questions_to_answer": [
          "What specific problem does this business exist to solve, and for exactly whom?",
          "What must be true about the company in 3 years for the 10-year vision to still be believable?",
          "Which customers, markets, and opportunities will be actively refused, and why?",
          "What is the single constraint that, if removed today, would most accelerate the company?",
          "What is the unique strategic angle that makes this company the obvious choice for the ideal customer?",
          "Who has the authority to approve what, and at what threshold does a decision escalate?",
          "How will the leadership team know if the current strategy is wrong, and what would trigger a change?",
          "What must the founder stop doing in the next 12 months for the company to grow?"
        ]
      },
      "levels": [
        {
          "level": 1,
          "headline": "Current Priority Defined",
          "plain_english": "The company has one written goal for the next 90 days that every team member can see and repeat.",
          "observation": "Walk into this business and ask three different people what the company is focused on right now. At Level 1, they all give the same answer, and they can point to where it is written down. One priority. One owner. Visible to everyone.",
          "why_it_matters": "A team without a shared priority optimizes for different things simultaneously. Progress fragments. Effort cancels out. A single written priority is the cheapest and fastest leadership tool available, and most companies skip it.",
          "audit_binary": "Is there one written 90-day company priority, visible to every team member today, with a named owner and at least one measurable outcome?",
          "evidence": "Quarterly Priority Document",
          "evidence_example": "A written 90-day objective pinned in the team workspace, referenced in at least one meeting in the past two weeks, with a named owner and 3 to 5 measurable outcomes listed.",
          "example": "A one-page document titled 'Q3 Priority' with one company goal, one named owner, and four success metrics. It sits at the top of the company's shared workspace and gets referenced at the start of every weekly meeting.",
          "false_positive_signals": [
            "A list of five to eight priorities is presented as equally important, with no single primary focus identified.",
            "The priority exists in the founder's notes or head but has never been shared with the team in writing."
          ],
          "failure_signals": [
            "Three team members give three different answers when asked what the company is focused on this quarter.",
            "The team is reacting to daily fires with no articulated direction beyond this week."
          ],
          "prerequisite": null,
          "review_frequency": 4,
          "weights": {
            "impact": 10,
            "complexity": 1,
            "time_to_implement": 1,
            "direct_cost": 1
          }
        },
        {
          "level": 2,
          "headline": "Strategic Information Organized",
          "plain_english": "All important company direction information lives in one place that anyone on the team can find.",
          "observation": "At Level 2, there is one document or folder that serves as the company's strategic home base. It holds the mission, the values, the current priorities, recent leadership decisions, and anything else the team needs to understand where the company is going. Nobody hunts through old emails or asks the founder to remember what was decided.",
          "why_it_matters": "Strategic information scattered across emails, chats, and memory is not really available. It exists in theory and disappears in practice. Organizing it in one place is the first step toward a company that can operate without the founder being the sole source of institutional memory.",
          "audit_binary": "Is there one central location containing the company mission, values, current priorities, and a log of recent leadership decisions, accessible to every team member and updated within the past 90 days?",
          "evidence": "Company Direction Repository",
          "evidence_example": "A shared document, folder, or wiki page containing: mission statement, core values, current 90-day priority, and at least 10 recent leadership decisions with dates and owners. Last updated within 90 days.",
          "example": "A shared folder called 'Company Direction' containing: a one-page mission and values document, the current quarterly priority sheet, and a running decision log with entries from the past 6 months. Every team member has the link bookmarked.",
          "false_positive_signals": [
            "A direction document was created 18 months ago but has not been updated since and no longer reflects current reality.",
            "Information exists across multiple tools with no single authoritative source, requiring the founder to be asked when something is unclear."
          ],
          "failure_signals": [
            "New team members spend their first week piecing together what the company stands for from conversations rather than finding it in a written source.",
            "Leadership decisions made 3 months ago cannot be recalled or located by anyone on the team."
          ],
          "prerequisite": "LD.1",
          "review_frequency": 4,
          "weights": {
            "impact": 8,
            "complexity": 2,
            "time_to_implement": 2,
            "direct_cost": 1
          }
        },
        {
          "level": 3,
          "headline": "Named Function Owners",
          "plain_english": "Every core business function has one named person responsible for it. Not a team. One person.",
          "observation": "An accountability chart exists and is current. Every core function of the business has exactly one name next to it. Leadership can look at this chart and immediately know who owns what, who to hold accountable when something fails, and who decides what.",
          "why_it_matters": "Shared ownership is no ownership. When two people own the same function, neither acts with full accountability. One named owner per function is the minimum condition for delegation to work at any scale.",
          "audit_binary": "Is there a current accountability chart with exactly one named owner per core business function, updated within the past 90 days and used to resolve ownership disputes when they arise?",
          "evidence": "Functional Accountability Chart",
          "evidence_example": "A one-page chart showing every core function with a single name per box, no shared entries, updated within 90 days. Core functions include at minimum: leadership, product, marketing, sales, operations, finance, people, and technology.",
          "example": "A one-page accountability map reviewed every quarter. Each function has one box with one name. At the last team meeting, a task fell between marketing and operations. The chart was opened, the owner was identified in 30 seconds, and the conversation moved on.",
          "false_positive_signals": [
            "An org chart exists showing reporting lines but not who owns each function and its outcomes.",
            "The chart lists two co-owners for any function, even temporarily while a role is being filled."
          ],
          "failure_signals": [
            "When a critical task is missed, the team debates whose responsibility it was rather than immediately knowing.",
            "The founder is the default owner of more than two functions because no one else has been clearly assigned."
          ],
          "prerequisite": "LD.2",
          "review_frequency": 4,
          "weights": {
            "impact": 9,
            "complexity": 3,
            "time_to_implement": 3,
            "direct_cost": 1
          }
        },
        {
          "level": 4,
          "headline": "Standardized Leadership Rhythm",
          "plain_english": "Leadership meets on a fixed weekly schedule with the same agenda every time, and every decision gets written down.",
          "observation": "A weekly leadership meeting happens at the same time every week. The agenda never changes. Decisions made in the meeting are recorded with a named owner and a deadline. At the start of the following week, those decisions are reviewed first. The meeting does not require the founder to call it.",
          "why_it_matters": "Without a fixed rhythm, leadership runs on the founder's mood and availability. Decisions evaporate. The same problems get rediscussed. A standardized meeting with a written record creates the institutional memory that allows the company to move forward without everything depending on one person.",
          "audit_binary": "Has the leadership team met weekly on a fixed schedule with the same agenda for at least 12 consecutive weeks, with written minutes recording every decision, its owner, and its deadline?",
          "evidence": "Leadership Meeting Minutes Archive",
          "evidence_example": "At least 12 consecutive weekly meeting records, each containing the date, standard agenda items, decisions made, named owner per decision, and a deadline. Stored in the central direction repository.",
          "example": "Every Monday at 9am, a 30-minute leadership meeting follows five fixed items: scorecard review, priority update, blockers raised, decisions required this week, and carry-forward from last week. Minutes are published to the shared folder within two hours. The meeting runs whether the founder is present or not.",
          "false_positive_signals": [
            "Meetings happen weekly but the agenda changes every time and decisions are not recorded anywhere.",
            "The founder makes all real decisions in individual one-on-ones after the group meeting, making the group meeting ceremonial."
          ],
          "failure_signals": [
            "The same problem is discussed in three consecutive meetings without a recorded decision or named owner.",
            "Team members cannot recall what was decided in last week's leadership meeting when asked."
          ],
          "prerequisite": "LD.3",
          "review_frequency": 52,
          "weights": {
            "impact": 8,
            "complexity": 4,
            "time_to_implement": 3,
            "direct_cost": 1
          }
        },
        {
          "level": 5,
          "headline": "Metric-Based Accountability",
          "plain_english": "Every function owner has a number they are responsible for, and they report on it every month.",
          "observation": "Each person who owns a function also owns at least one numeric KPI. Actual versus target is reported in writing at the monthly leadership meeting. Missing a target requires a written explanation and a corrective plan. The founder is no longer the only judge of whether things are going well.",
          "why_it_matters": "Opinion-based management does not scale. When performance is judged subjectively, feedback is political and accountability is personal. Numeric ownership makes performance objective, makes coaching specific, and removes the founder as the sole arbiter of what is working.",
          "audit_binary": "Does every function owner have at least one numeric target assigned by name, with written actual-versus-target reported at the monthly leadership meeting for at least three consecutive months?",
          "evidence": "Monthly Leadership Scorecard",
          "evidence_example": "Three consecutive monthly scorecards showing every function owner's name, their KPI, their target, their actual result, the variance, and a written note explaining any gap and what changes next month.",
          "example": "A one-page monthly scorecard. Sales lead owns closed revenue of 40K per month. Operations lead owns delivery time under 18 days. Customer success lead owns retention above 94%. Each reports actual versus target with one line on any gap and what changes next month. Reviewed in the first 10 minutes of the monthly leadership meeting.",
          "false_positive_signals": [
            "A shared dashboard exists with many metrics but no single name is attached to each number as its owner.",
            "Metrics are reviewed monthly but missing targets produce no required explanation or corrective plan."
          ],
          "failure_signals": [
            "Function owners check with the founder before making decisions that their KPI ownership should make obvious.",
            "There is no written record of why a target was missed or what changed the following month."
          ],
          "prerequisite": "LD.4",
          "review_frequency": 12,
          "weights": {
            "impact": 9,
            "complexity": 5,
            "time_to_implement": 4,
            "direct_cost": 2
          }
        },
        {
          "level": 6,
          "headline": "Data-Driven Decision Making",
          "plain_english": "Every major leadership decision is supported by written evidence before it is approved, and the decision is logged with the data used.",
          "observation": "Before any major decision is approved, a short written data brief exists summarizing the relevant evidence. The decision, the data used, the expected outcome, and the owner are logged in a searchable register. Leadership can open that register and explain the reasoning behind their last ten major decisions.",
          "why_it_matters": "Decisions made without evidence are guesses. Guesses made by the loudest voice in the room are politics. A data brief requirement before major decisions reduces bias, prevents the same mistakes from being made twice, and creates the institutional memory that future leaders need to understand why things are the way they are.",
          "audit_binary": "Are all major strategic decisions logged in a written register showing the decision, the data used, the owner, and the expected outcome, with at least six entries from the past six months?",
          "evidence": "Leadership Decision Log with Data References",
          "evidence_example": "A shared decision register with at least six entries from the past six months, each containing: the decision made, the date, the owner, the evidence or data referenced, and the expected outcome to review in a future meeting.",
          "example": "A shared decision log where every major choice, such as a new hire, a pricing change, a new service line, or entering a new market, is recorded with a link to the supporting data. Reviewed quarterly to check whether the expected outcomes materialized. Last entry: pricing increase to 9,500, supported by margin analysis showing 61% gross margin below the 65% target.",
          "false_positive_signals": [
            "A dashboard is maintained and looks impressive but is never referenced in actual decision records.",
            "The decision log exists but contains only minor operational decisions while major strategic choices are made informally."
          ],
          "failure_signals": [
            "The same strategic mistake is made twice because there is no record of what was tried before and why it failed.",
            "Leadership cannot produce the evidence behind a major decision when asked by an investor or advisor."
          ],
          "prerequisite": "TI.5",
          "review_frequency": 12,
          "weights": {
            "impact": 8,
            "complexity": 6,
            "time_to_implement": 5,
            "direct_cost": 3
          }
        },
        {
          "level": 7,
          "headline": "Cross-Domain Leadership Integration",
          "plain_english": "Leadership connects all functions through shared goals, a cross-domain review rhythm, and decision rules that every function uses.",
          "observation": "Leadership does not just manage functions in isolation. At Level 7, there is a quarterly company-wide review where all domain owners present their metrics together, cross-domain dependencies are surfaced, and shared priorities are agreed. Decision rules exist that all functions follow, so that conflicts between domains are resolved by a documented principle rather than an escalation to the founder.",
          "why_it_matters": "A company where each function optimizes independently produces local wins and systemic losses. Sales overpromises because it has no connection to operations capacity. Marketing generates the wrong leads because it has no feedback from sales. Leadership integration is the connective tissue that makes the whole system perform better than the sum of its parts.",
          "audit_binary": "Is there a documented quarterly cross-domain review where all function owners present together, shared priorities are agreed, and at least one cross-domain conflict in the past six months was resolved using a written decision rule rather than founder escalation?",
          "evidence": "Quarterly Cross-Domain Review Minutes and Decision Rules Document",
          "evidence_example": "Records from the past two quarterly cross-domain reviews showing all function owners present, shared metrics reviewed, cross-domain topics discussed, and agreed actions. Plus a decision rules document with at least three principles used to resolve domain conflicts without founder involvement.",
          "example": "A quarterly company review held the third week of each quarter. All function owners present their domain scorecard. Cross-domain items, such as a mismatch between sales pipeline and operations capacity, are flagged and resolved in the meeting using a written priority framework. Last quarter: sales wanted to close two large clients simultaneously but operations flagged a capacity constraint. The decision rule, prioritize delivery quality over short-term revenue, resolved it in 20 minutes without the founder being asked.",
          "false_positive_signals": [
            "A quarterly all-hands meeting exists where results are presented but no cross-domain conflicts are surfaced or resolved.",
            "Decision rules exist on paper but every real cross-domain conflict still escalates to the founder for resolution."
          ],
          "failure_signals": [
            "Functions regularly optimize for their own metrics in ways that damage another function's performance, with no mechanism to surface or resolve it.",
            "The founder is the only person who can resolve disagreements between two function owners."
          ],
          "prerequisite": "LD.5",
          "review_frequency": 4,
          "weights": {
            "impact": 8,
            "complexity": 7,
            "time_to_implement": 6,
            "direct_cost": 4
          }
        },
        {
          "level": 8,
          "headline": "Systematic Strategy Improvement",
          "plain_english": "The leadership team reviews its own decisions and strategy on a fixed cycle and improves based on what it learns.",
          "observation": "Once per quarter, the leadership team reviews its major decisions from the prior quarter against their expected outcomes. What worked? What did not? What assumption was wrong? The findings update the strategic direction document. Twice per year, an external group of experienced operators challenges the strategy and leadership must respond in writing to every challenge raised.",
          "why_it_matters": "A leadership team that does not examine its own decisions is accumulating unexamined assumptions. Markets change, customers change, and strategies that worked at 1M revenue fail at 5M. The external challenge element is critical because internal teams develop blind spots that feel like convictions. A written response requirement ensures challenges are taken seriously rather than politely heard and forgotten.",
          "audit_binary": "Has the leadership team conducted a quarterly decision retrospective for the past two quarters with documented findings that updated the strategy, and has an external group challenged the strategy at least twice in the past 12 months with written leadership responses to each challenge?",
          "evidence": "Quarterly Decision Retrospective Reports and External Challenge Session Minutes",
          "evidence_example": "Two quarterly retrospective reports showing decisions reviewed, outcomes versus expectations, and at least one strategic update made as a result. Plus two external challenge session records from the past 12 months, each showing the challenges raised and written leadership responses.",
          "example": "Each quarter, the leadership team spends 90 minutes reviewing the top five decisions from the prior quarter. For each decision: was the expected outcome achieved? If not, what assumption was wrong? Last quarter: the assumption that a new pricing tier would attract larger clients was wrong. Clients cited the price, not the tier. Strategy updated: introduce a payment plan option. External challenge session held in May and November with three experienced operators who do not work for the company. All challenges documented and responded to in writing within two weeks.",
          "false_positive_signals": [
            "Retrospectives happen informally in leadership conversations but no findings are documented or used to update strategy.",
            "An advisory board exists but sessions are presentations to supportive advisors who rarely raise genuine challenges."
          ],
          "failure_signals": [
            "The leadership team is surprised by a market development that a structured retrospective would have flagged six months earlier.",
            "The same strategic assumption has been wrong twice with no record of the lesson being learned."
          ],
          "prerequisite": "LD.6",
          "review_frequency": 4,
          "weights": {
            "impact": 7,
            "complexity": 7,
            "time_to_implement": 6,
            "direct_cost": 5
          }
        },
        {
          "level": 9,
          "headline": "Founder-Independent Operations",
          "plain_english": "The business runs at full capacity without the founder for at least 30 days, and there is a trained successor for every key leadership role.",
          "observation": "Two things are true at Level 9. First, the business has operated for a documented 30-day period at full capacity without any founder contact, and the team can describe the systems that made that possible. Second, a succession matrix exists with a named, partially trained backup for every key leadership role. Each backup has completed defined development activities, not just been identified on paper.",
          "why_it_matters": "Founder independence and succession are both expressions of the same principle: the business is a system, not a person. A business where the founder cannot leave for 30 days is not yet an asset. A business where no leader has a trained backup is one resignation away from a crisis. Both conditions must be true for the leadership domain to be genuinely independent.",
          "audit_binary": "Is there documented evidence of the business operating at full capacity for a continuous 30-day period without founder contact, and does a current succession matrix name a partially trained successor for every key leadership role?",
          "evidence": "30-Day Founder Absence Log and Succession Matrix with Development Records",
          "evidence_example": "A log from a completed 30-day period showing normal operations maintained with no founder involvement, plus a succession matrix for all key roles showing named successors with their readiness level and at least one completed development activity each.",
          "example": "The founder spent 30 days fully offline. The operations log shows: delivery on time, all approvals made by designated owners, two client escalations resolved by the customer success lead using the documented protocol, no founder contact of any kind. On return, the team produced a one-page note describing which systems they relied on. Succession matrix: COO backup is the operations lead, readiness level 2, has run two monthly operations reviews independently. Sales director backup is the senior account manager, readiness level 1, currently shadowing all pipeline reviews.",
          "false_positive_signals": [
            "The founder was physically absent for 30 days but responded to messages within hours every day when the team reached out.",
            "Successors are named in a document but have never taken on any expanded responsibility or development activity."
          ],
          "failure_signals": [
            "Revenue or quality declines measurably within two weeks of the founder stepping back from daily involvement.",
            "Any single leadership departure would leave a function with no internal candidate capable of covering the role for more than a week."
          ],
          "prerequisite": "LD.7",
          "review_frequency": 2,
          "weights": {
            "impact": 10,
            "complexity": 8,
            "time_to_implement": 9,
            "direct_cost": 5
          }
        },
        {
          "level": 10,
          "headline": "Governance-Led Institution",
          "plain_english": "The company runs through a documented governance system, not through individuals. Major decisions have been made and recorded by that system without the founder.",
          "observation": "A governance constitution exists and is actively used. It defines who can approve what, how strategic reviews work, how leadership disagreements are resolved, and how succession is triggered. The proof that it is active, not aspirational, is a decision log showing at least three significant decisions made by the governance system without founder involvement in the past 12 months.",
          "why_it_matters": "An institution is a company that is larger than the person who built it. When decisions flow from a documented system rather than from an individual, the company becomes transferable, independently valuable, and fundable at institutional multiples. A governance document that has never produced a decision is not governance. It is a document.",
          "audit_binary": "Does the company have a current governance constitution covering authority levels, decision rights, escalation paths, review rhythms, and succession logic, with at least three significant decisions documented as made by the governance system without founder involvement in the past 12 months?",
          "evidence": "Company Governance Constitution and Independent Decision Log",
          "evidence_example": "A current governance constitution reviewed within the past 12 months, plus a decision log showing at least three significant decisions from the past year, each identifying the decision, the governance process used, and the approving party, with no founder involvement recorded.",
          "example": "The governance constitution defines four authority levels with spend thresholds, a structured process for strategic decisions above a defined impact level, a conflict resolution protocol between function owners, and a succession trigger procedure. Last year the executive committee approved a new market entry under their defined authority. The COO hired a senior operations manager within their hiring authority. The commercial committee approved a new pricing tier. None required founder sign-off. All three are in the decision log.",
          "false_positive_signals": [
            "A governance document exists but every significant decision still involves a call or message to the founder before it is finalized.",
            "The governance system has been documented for a year but has never been used to produce a recorded decision."
          ],
          "failure_signals": [
            "A prospective acquirer cannot find evidence of independent governance and discounts the valuation on the grounds of founder dependency.",
            "The governance constitution has not been reviewed or updated in more than 18 months, suggesting it describes the past rather than governing the present."
          ],
          "prerequisite": null,
          "review_frequency": 1,
          "weights": {
            "impact": 10,
            "complexity": 10,
            "time_to_implement": 10,
            "direct_cost": 8
          }
        }
      ]
    },
    "OD": {
      "id": "OD",
      "name": "Operations & Delivery",
      "purpose": "Deliver the product or service reliably, consistently, and at any scale without depending on individual heroics.",
      "cxo_persona": "Chief Operating Officer",
      "description": "How the company produces and delivers its product, maintains quality, manages capacity, and builds a delivery system that any trained person can run. A mature operations and delivery domain means customers receive a consistent experience regardless of who handles their work, and the founder can step away from delivery entirely without quality declining.",
      "direction": {
        "name": "Operational Model",
        "purpose": "Define how the company consistently delivers its product or service with quality, efficiency, and the ability to scale without proportional increases in cost or founder involvement.",
        "required_outputs": [
          "core_delivery_process",
          "operational_responsibility_matrix",
          "standard_operating_procedures",
          "quality_standards_and_check_protocol",
          "operational_metrics_framework",
          "capacity_model",
          "operational_risk_register",
          "operations_review_rhythm"
        ],
        "primary_owner": "Chief Operating Officer",
        "contributors": [
          "CEO",
          "product_lead",
          "customer_success_lead",
          "technology_lead",
          "finance_lead"
        ],
        "minimum_standard": "One documented operational model exists describing how the company delivers value to customers, including defined steps, quality standards, named owners, and the capacity to deliver without founder involvement.",
        "review_frequency": 4,
        "questions_to_answer": [
          "What are the exact steps required to deliver the product or service from signed contract to completed delivery, and who owns each step?",
          "What does a good delivery look like, described specifically enough that anyone can check whether the standard was met?",
          "What is the maximum volume the current delivery system can handle before quality or speed degrades, and how much headroom exists today?",
          "What are the three most likely things that could disrupt delivery in the next 90 days, and what is the contingency for each?",
          "Which delivery steps currently depend on a single person, and what happens to delivery if that person is unavailable for two weeks?",
          "How do operational quality failures get detected, root-caused, and prevented from recurring?",
          "How does the cost of delivery change as volume increases, and is the unit economics improving or deteriorating?",
          "What would an acquirer discover about delivery reliability and consistency if they spent a week inside the operations function?"
        ]
      },
      "levels": [
        {
          "level": 1,
          "headline": "Delivery Process Documented",
          "plain_english": "The steps required to deliver the product or service are written down in the right order.",
          "observation": "Ask someone in this company to explain how delivery works from start to finish. At Level 1, they can show you a written document rather than describing it from memory. The document lists the steps in sequence, what happens at each step, and roughly how long each step takes. It does not need to be a manual. A one-page workflow that gives a new team member the shape of delivery is enough.",
          "why_it_matters": "Delivery that exists only in people's heads leaves the company when those people do. It cannot be trained, improved, or delegated. Writing the process down is not about bureaucracy. It is the first act of converting founder knowledge into company knowledge, and it is the foundation that every other operational capability is built on.",
          "audit_binary": "Is there a written delivery process document listing every step from accepted contract to completed delivery in sequence, with a named role and an approximate duration for each step, reviewed within the past six months?",
          "evidence": "Delivery Process Document",
          "evidence_example": "A written document, flowchart, or checklist showing every delivery step in sequence with a named role and approximate duration per step. Updated within the past six months to reflect how delivery actually works today.",
          "example": "A service firm documents its delivery in seven steps: kickoff call on day one, discovery session in week one, draft deliverable by week three, internal review in week three, client review in week four, revision by week five, and final sign-off in week six. Each step lists the role responsible and the standard duration. A new team member reads this on their first day and immediately understands the shape of every client engagement.",
          "false_positive_signals": [
            "A delivery process document was created during the company's early days and has not been updated since, meaning it describes how delivery used to work rather than how it works today.",
            "The process exists as a verbal description that the founder or most experienced team member gives during onboarding, but nothing written exists that a new hire could consult independently."
          ],
          "failure_signals": [
            "Two team members describe the delivery process differently when asked to walk through it, revealing that the actual process varies by person rather than following a shared standard.",
            "When a new team member joins, they spend their first two weeks watching other people work rather than reading a process document, because no written version exists."
          ],
          "prerequisite": "PI.4",
          "review_frequency": 2,
          "weights": {
            "impact": 10,
            "complexity": 2,
            "time_to_implement": 3,
            "direct_cost": 1
          }
        },
        {
          "level": 2,
          "headline": "Operational Information Organized",
          "plain_english": "Everything the team needs to run delivery lives in one place that any team member can find without asking the founder.",
          "observation": "At Level 2, there is a central operational repository. It holds the delivery process, the responsibility matrix, the templates and tools used in delivery, supplier and partner contacts, the quality standards, and records of past deliveries and their outcomes. A team member going on leave can hand off to a colleague in under an hour because everything that colleague needs is in one accessible location. Nobody needs to call the founder to find out where something is.",
          "why_it_matters": "Operational knowledge scattered across personal drives, email threads, and memory is not really available to the company. It is available to the individuals who hold it. Every time a team member has to ask where something is, how something works, or who to contact, the company is paying a tax on disorganized information. Organizing operational knowledge in one place is the first concrete step toward a delivery function that can run without the founder.",
          "audit_binary": "Is there a single operational repository containing the delivery process, responsibility matrix, delivery templates, supplier contacts, quality standards, and a record of at least five recent deliveries, accessible to every delivery team member and updated within the past 90 days?",
          "evidence": "Operational Information Repository",
          "evidence_example": "A shared folder, wiki, or system containing the six required components, each updated within 90 days. The delivery records section shows at least five recent completed deliveries with notes on any issues encountered.",
          "example": "An operations wiki with six sections. Process: the step-by-step delivery workflow from Level 1. Responsibilities: a matrix showing who owns each step. Templates: the kickoff call agenda, the discovery session guide, the revision request form, and the sign-off checklist. Suppliers: contacts for three freelancers used for overflow capacity, with their rates and availability notes. Quality: the 12-point delivery checklist used before every client handover. Records: notes from the last eight deliveries showing what went well, what did not, and what was done differently.",
          "false_positive_signals": [
            "Operational information exists across a Google Drive folder, a Notion page, a Slack channel, and several email threads, with no single location that is considered authoritative.",
            "An operational repository was set up but team members do not use it because it is not maintained, so they default to asking the founder or the most experienced team member instead."
          ],
          "failure_signals": [
            "When a team member is absent, colleagues spend significant time trying to locate files, contacts, and context that should be in a central location but are not.",
            "Delivery inconsistencies trace back to team members using different versions of the same template because no single authoritative source exists."
          ],
          "prerequisite": "OD.1",
          "review_frequency": 4,
          "weights": {
            "impact": 8,
            "complexity": 2,
            "time_to_implement": 3,
            "direct_cost": 1
          }
        },
        {
          "level": 3,
          "headline": "Delivery Ownership Assigned",
          "plain_english": "Every step in the delivery process has one named person responsible for its outcome. One person also owns overall delivery quality.",
          "observation": "At Level 3, a responsibility matrix exists showing one named person per delivery step. When something goes wrong at a specific step, there is no debate about whose responsibility it is. One person also holds overall ownership of delivery quality and can answer the question of how delivery is performing right now without needing to gather information from multiple people first.",
          "why_it_matters": "A delivery step with no owner is a delivery step waiting to fail. Shared ownership means that everyone involved assumes someone else is monitoring the quality and timeline. One named owner per step does not mean that person does all the work. It means that person is accountable when the step does not happen or does not meet the standard. That accountability is what makes delegation real rather than nominal.",
          "audit_binary": "Is there a responsibility matrix showing exactly one named owner per delivery step, with no shared entries, and is there one person who can report on overall delivery performance at any moment without having to gather information from multiple sources?",
          "evidence": "Operational Responsibility Matrix",
          "evidence_example": "A written responsibility matrix listing every delivery step with one named owner per step and no shared entries. A separate designation showing who owns overall delivery quality and performance visibility.",
          "example": "A responsibility matrix for a seven-step delivery process. Project manager owns steps one, two, and seven. Senior consultant owns steps three and six. Client manager owns steps four and five. No step has two owners. The project manager also holds overall delivery quality ownership and presents a delivery performance summary at the monthly operations meeting. When a quality problem occurs at step three, the senior consultant owns the explanation and the corrective action without anyone needing to debate responsibility.",
          "false_positive_signals": [
            "A responsibility matrix exists but lists two or more people as owners of the same step, meaning accountability is shared and therefore diffuse.",
            "Overall delivery quality ownership is assumed to belong to the founder rather than being explicitly assigned to an operational team member."
          ],
          "failure_signals": [
            "When a delivery step fails, the team spends time debating whose fault it was rather than immediately knowing who owned it and who is responsible for the fix.",
            "Leadership must ask multiple people to understand current delivery performance because no single person holds that visibility."
          ],
          "prerequisite": "OD.2",
          "review_frequency": 4,
          "weights": {
            "impact": 9,
            "complexity": 3,
            "time_to_implement": 3,
            "direct_cost": 1
          }
        },
        {
          "level": 4,
          "headline": "Standardized Delivery",
          "plain_english": "Every critical delivery task has a written procedure, and every delivery passes a quality check before it reaches the customer.",
          "observation": "At Level 4, two things are standardized. First, SOPs exist for every critical delivery task. A trained person can follow these procedures and produce work to an acceptable standard without supervision. Second, a quality standard defines what good delivery looks like, and a quality check step sits inside the delivery process before any work reaches the customer. Quality problems are caught internally, not discovered by clients.",
          "why_it_matters": "SOPs and quality standards together address different failure modes. SOPs prevent inconsistency by ensuring that different people perform the same task the same way. Quality checks prevent delivery failures from reaching customers by catching problems at the last internal step. A company with SOPs but no quality check ships consistently mediocre work. A company with a quality check but no SOPs relies on one senior person's judgment for every review. Both are required for delivery to be reliably good at scale.",
          "audit_binary": "Do written SOPs exist for every critical delivery task, and is there a quality check step in the delivery process with a written standard that every delivery must meet before it reaches the customer, applied consistently in the past 10 deliveries?",
          "evidence": "SOP Library and Quality Standards Document with Quality Check Records",
          "evidence_example": "A set of written SOPs for all critical delivery tasks, each listing the steps, the required inputs, and the acceptable output standard. A quality standards document defining the minimum bar per deliverable type. Quality check records from the past 10 deliveries confirming the check was applied.",
          "example": "A web agency has SOPs for: project kickoff, client discovery, design handoff to development, pre-launch review, and client sign-off. Each SOP was written by the person who does the task best and reviewed by the project lead. Quality standard for every website delivery: 14-point checklist covering mobile responsiveness, page speed score, brand conformance, link integrity, and form functionality. Every site is checked against all 14 points before the client review call. Last 10 deliveries: 10 quality checks completed, two sites required internal revision before the check was passed. Neither issue reached the client.",
          "false_positive_signals": [
            "SOPs exist for minor or infrequent tasks but not for the most critical or complex delivery steps, which are still performed based on individual experience and judgment.",
            "A quality checklist exists but is skipped under deadline pressure, with team members marking it complete without performing the checks."
          ],
          "failure_signals": [
            "Clients regularly discover quality issues that an internal review step would have caught, indicating either no quality check exists or it is not being performed consistently.",
            "New team members cannot perform critical delivery tasks to an acceptable standard without constant supervision because no SOP exists to guide them."
          ],
          "prerequisite": "OD.3",
          "review_frequency": 4,
          "weights": {
            "impact": 9,
            "complexity": 5,
            "time_to_implement": 5,
            "direct_cost": 2
          }
        },
        {
          "level": 5,
          "headline": "Operational Performance Measured",
          "plain_english": "The company tracks at least three operational metrics monthly covering speed, quality, and capacity, and a declining metric triggers a documented investigation.",
          "observation": "At Level 5, operational performance is measured across three categories. Speed: how long does delivery take versus the target? Quality: what percentage of deliveries pass the quality check on the first attempt, and what is the rework rate? Capacity: what percentage of the team's delivery capacity is currently utilized, and how close is the ceiling? All three categories have numeric targets. All are reviewed in a fixed monthly meeting. A metric declining for two consecutive months triggers a documented investigation rather than an informal conversation.",
          "why_it_matters": "Measuring only one category creates blind spots. A company that tracks delivery speed but not quality can be delivering fast and badly simultaneously. A company that tracks quality but not capacity will discover it is overloaded only when deliveries start slipping. All three categories are needed to see the full operational picture. The investigation trigger is what converts measurement into management. Without it, metrics become reporting rather than accountability.",
          "audit_binary": "Are at least three operational metrics, covering delivery speed, delivery quality, and capacity utilization, tracked monthly with numeric targets, reviewed in a fixed monthly meeting, and has a metric declining for two consecutive months triggered a documented investigation in the past six months?",
          "evidence": "Operations Dashboard with Monthly Review Records and Investigation Log",
          "evidence_example": "Monthly operational metrics reports for at least three consecutive months showing at least one metric per category, with targets, actuals, and trend. At least one documented investigation triggered by a metric declining for two consecutive months.",
          "example": "Monthly metrics reviewed on the first Monday of each month. Speed: average delivery time 19 days, target 18 days. Quality: first-pass quality check rate 87%, target 90%, declined for two consecutive months. Investigation opened: project lead reviewed the 12 failed quality checks, found that six related to mobile responsiveness, specifically on a new device type not previously included in the standard. Quality checklist updated to include the new device. Rework rate returned to within target the following month. Capacity: 78% utilization, target range 70% to 85%. Within range, no action required.",
          "false_positive_signals": [
            "Delivery speed is tracked as the primary operational metric but quality and capacity are not measured, creating a system that can be optimizing for speed while quality degrades invisibly.",
            "All three metrics are tracked and displayed on a dashboard but declining numbers have never triggered a documented investigation. Measurement exists without consequence."
          ],
          "failure_signals": [
            "Client complaints about delivery quality appear before the team discovers the quality problem internally, revealing that the quality metric is either not tracked or not reviewed with enough frequency.",
            "The team discovers it is significantly overloaded only when deliveries start slipping, because no capacity metric warned of the approaching ceiling."
          ],
          "prerequisite": "TI.5",
          "review_frequency": 12,
          "weights": {
            "impact": 9,
            "complexity": 5,
            "time_to_implement": 5,
            "direct_cost": 2
          }
        },
        {
          "level": 6,
          "headline": "Proactive Capacity and Risk Management",
          "plain_english": "The company knows its delivery ceiling before it hits it, and has identified and mitigated the three most likely things that could disrupt delivery.",
          "observation": "At Level 6, two proactive mechanisms operate. First, a capacity model shows current utilization, maximum theoretical capacity, and the projected gap at current growth rates. When a new sales opportunity would push capacity above 85%, the operations function is consulted before the deal is committed. Second, an operational risk register identifies the most likely delivery disruptions: key person absence, supplier failure, tool dependency, regulatory change, or demand spike. Each risk has a mitigation plan and a named owner. Both are reviewed monthly.",
          "why_it_matters": "Reactive capacity management means the company discovers it is overloaded when quality starts declining or clients start waiting longer than promised. By then, the problem is already visible to customers. Capacity planning is not about forecasting demand perfectly. It is about knowing the ceiling before the company runs into it, so that sales, hiring, and client commitments can be made with accurate information. Risk management prevents the same disruptions from being surprises every time they occur.",
          "audit_binary": "Is there a current capacity model showing utilization, maximum capacity, and projected gap at current growth rate, consulted before any new commitment that would push utilization above 85%, and is there an operational risk register with at least five identified risks, each with a mitigation plan and named owner, reviewed within the past 30 days?",
          "evidence": "Capacity Model and Operational Risk Register with Monthly Review Record",
          "evidence_example": "A capacity model document showing current team capacity in hours or units, current utilization rate, maximum sustainable capacity, and the projected utilization in 30, 60, and 90 days at current growth. An operational risk register with at least five risks, each listing the risk, likelihood, impact, mitigation action, and owner. Both reviewed within the past 30 days.",
          "example": "Capacity model: current team handles a maximum of 48 active projects at full quality. Current load: 38 projects, 79% utilization. At current growth rate of three new projects per month, the ceiling is reached in approximately three months. Three new hires are planned for next quarter based on this data. Risk register: five risks identified. Key person risk: senior consultant is sole owner of the discovery SOP. Mitigation: second team member cross-trained by end of month. Tool dependency: project management software is single source of failure. Mitigation: monthly data export to backup location. Both reviewed in the monthly operations meeting last week.",
          "false_positive_signals": [
            "Capacity planning happens informally when the team feels busy, rather than through a model that provides objective visibility before the ceiling is reached.",
            "A risk register was created six months ago and has not been reviewed since, making it a historical document rather than an active management tool."
          ],
          "failure_signals": [
            "The company consistently discovers it is overloaded only when delivery timelines start slipping or client satisfaction drops, with no prior warning from a capacity measurement.",
            "The same operational disruption, such as a key team member being unavailable, causes a delivery crisis every time it occurs because no mitigation plan was ever prepared."
          ],
          "prerequisite": "OD.5",
          "review_frequency": 12,
          "weights": {
            "impact": 8,
            "complexity": 6,
            "time_to_implement": 5,
            "direct_cost": 2
          }
        },
        {
          "level": 7,
          "headline": "Cross-Domain Operational Integration",
          "plain_english": "Operations formally connects to sales, customer success, product, and finance through shared artifacts that are used in real decisions every quarter.",
          "observation": "At Level 7, operations does not operate in isolation from the rest of the company. Four integration points exist. Sales delivers a completed handoff checklist to operations before any delivery begins, ensuring the delivery team knows exactly what was sold, what was promised, and who the key contacts are. Operations feeds quality and delivery signals to customer success, enabling early intervention when a delivery is at risk of producing a dissatisfied client. Product receives operational quality failure reports that indicate whether the product or offer definition is causing recurring delivery problems. Finance receives accurate cost-of-delivery data that makes unit economics calculations real rather than estimated.",
          "why_it_matters": "The handoff from sales to operations is the single most underrated integration point in most companies. When sales sells something and operations delivers something different, the gap lands on the customer. That gap is not a delivery failure. It is a handoff failure. The other integrations prevent equally costly but less visible problems: customer success intervening too late because they did not know delivery was struggling, product making the same offer design mistake repeatedly because quality failures were not being reported back, and finance making hiring decisions based on estimated rather than actual delivery costs.",
          "audit_binary": "Do documented integration artifacts connect OD to RS, CS, PI, and FR, with evidence that each artifact was used to inform a decision in the past quarter?",
          "evidence": "Cross-Domain Operational Integration Artifacts: Sales Handoff Checklist, Delivery Quality Signal Report, Product Quality Failure Log, and Operational Cost Report",
          "evidence_example": "Four artifacts, each with evidence of use in the past quarter: a completed sales-to-delivery handoff checklist for at least three recent clients, a delivery quality signal report shared with customer success showing at-risk deliveries, a product quality failure log showing recurring issues reported back to the product owner, and an operational cost report submitted to finance showing actual cost per delivery.",
          "example": "RS integration: a 14-item handoff checklist completed by the sales lead and countersigned by the project manager before any project begins. Covers scope confirmed, promises made, key contacts, agreed timeline, and any special client requirements. Last quarter: two projects flagged during handoff because promised timelines did not match available capacity. Both timelines renegotiated before the kickoff call rather than after the client noticed. CS integration: a weekly at-risk delivery report shared with the customer success lead listing any project behind schedule or below quality target. Three clients received a proactive call from customer success last quarter based on this report. PI integration: a quarterly quality failure log sent to the product owner showing the five most common reasons deliveries fail the quality check. Last quarter this led to a revision of the discovery SOP after three failures traced to unclear client brief collection. FR integration: a monthly cost-of-delivery report showing total delivery labor hours, external costs, and cost per project, submitted to the finance lead for unit economics tracking.",
          "false_positive_signals": [
            "Sales and operations communicate about new clients but the communication is informal and verbal, meaning nothing about what was sold or promised is written down before delivery begins.",
            "Operations shares occasional updates with customer success but no structured signal process exists, so customer success only learns about delivery problems when clients complain."
          ],
          "failure_signals": [
            "Delivery teams regularly discover mid-project that the client's expectations differ from what operations was briefed on, because the handoff from sales was verbal rather than documented.",
            "The same offer design problem causes delivery failures repeatedly because no mechanism exists to report quality failures back to the product owner."
          ],
          "prerequisite": "OD.6",
          "review_frequency": 4,
          "weights": {
            "impact": 8,
            "complexity": 7,
            "time_to_implement": 6,
            "direct_cost": 2
          }
        },
        {
          "level": 8,
          "headline": "Systematic Operational Improvement",
          "plain_english": "Every operational failure triggers a root cause analysis, a documented fix, and a verification that the fix worked. The same problem does not occur twice.",
          "observation": "At Level 8, the operations function has a formal improvement cycle. When any delivery problem occurs, a structured root cause analysis is conducted to identify the system cause rather than attributing the failure to individual error. A fix is defined, assigned to an owner, and implemented by updating the relevant SOP or process step. In the following review cycle, the metrics confirm whether the fix worked. Every investigation, fix, and verification is documented. The goal is that the same operational error does not appear twice in the quality failure log.",
          "why_it_matters": "The same operational error recurring twice is a system failure, not a people failure. When the first occurrence is investigated and fixed at the process level, the second occurrence should be prevented. When it is not investigated, the team corrects the individual instance but leaves the system unchanged, guaranteeing the error will occur again. A systematic improvement cycle converts operational experience into institutional learning and is what separates an operation that gets better from one that merely stays busy.",
          "audit_binary": "Has every operational failure in the past six months been followed by a documented root cause analysis, a defined fix assigned to an owner, and a verification that the fix resolved the problem in the subsequent review cycle, with evidence that no single failure type has recurred more than once?",
          "evidence": "Operational Improvement Log with Root Cause Analyses, Fix Records, and Verification Outcomes",
          "evidence_example": "An improvement log with entries for every operational failure in the past six months, each showing: the problem, the root cause finding, the fix applied, the owner, and the verification outcome from the next review cycle. No single failure type appearing more than once in the log.",
          "example": "Improvement log from the past two quarters. Entry 1: three consecutive deliveries ran two days over the target timeline. Root cause: discovery sessions consistently running 90 minutes over the two-hour allocation because the brief template did not cover technical requirements. Fix: brief template updated to include a technical requirements section, allocated an additional 30 minutes to discovery for technical products. Verification: the following eight deliveries all completed within the target timeline. Entry 2: two quality checks failed on mobile layout for a new screen size. Root cause: the quality checklist did not include the new device. Fix: checklist updated. Verification: all subsequent checks passed. Neither failure type has reappeared.",
          "false_positive_signals": [
            "Delivery problems are discussed in the monthly operations meeting and resolved on a case-by-case basis, but no root cause analysis is documented and the SOP or process is never updated as a result.",
            "An improvement log exists but most entries describe what happened without a root cause or a defined fix, making it a record of events rather than a learning system."
          ],
          "failure_signals": [
            "The same type of delivery failure appears in the quality log more than once across consecutive quarters, revealing that the first occurrence was corrected individually rather than fixed at the process level.",
            "Team members describe recurring delivery problems as just how things go rather than as system failures requiring investigation, because no improvement cycle exists to challenge that assumption."
          ],
          "prerequisite": "OD.7",
          "review_frequency": 4,
          "weights": {
            "impact": 8,
            "complexity": 7,
            "time_to_implement": 6,
            "direct_cost": 2
          }
        },
        {
          "level": 9,
          "headline": "Founder and Key-Person Independent Delivery",
          "plain_english": "Delivery runs at full quality without the founder for at least 60 days, and no single team member owns more than 40% of delivery capacity.",
          "observation": "At Level 9, two conditions are met. First, the company has completed a documented 60-day period where delivery ran at full quality and full capacity without any founder involvement. All escalations were handled by the team using documented protocols. All quality checks were performed and passed. No client noticed any difference. Second, delivery capacity is distributed across the team so that no single person handles more than 40% of active projects. If any one person were unavailable for two weeks, delivery would continue without a crisis.",
          "why_it_matters": "Sixty days is the right benchmark for delivery independence because it covers a full delivery cycle for most service businesses, tests the team through at least two or three client escalations, and reveals whether the documented systems actually function without the founder or whether they relied on informal founder availability. Key-person independence is equally important. A delivery function that is founder-independent but collapses when the lead consultant is sick has the same structural fragility. Both conditions must hold for delivery to be genuinely independent.",
          "audit_binary": "Is there documented evidence of delivery operating at full quality and full capacity for a continuous 60-day period without founder involvement, and does no single team member currently account for more than 40% of active delivery capacity?",
          "evidence": "60-Day Delivery Independence Log and Delivery Capacity Distribution Report",
          "evidence_example": "A log from a completed 60-day period showing: delivery metrics during the period, quality check results, escalations handled and how they were resolved, and explicit confirmation of zero founder involvement. A current capacity distribution report showing active project load per team member, with no individual above 40%.",
          "example": "The founder took 60 days fully offline. Delivery log: 14 projects active during the period, all completed within target timelines, quality check pass rate 91%, three client escalations handled by the project manager using the documented escalation protocol, zero founder contact. Capacity distribution: project manager handling 32% of active projects, senior consultant handling 35%, two junior consultants handling 17% each. No individual above the 40% threshold. Dedicated operations lead produced a written post-absence summary confirming which systems were relied on and what, if anything, needed updating.",
          "false_positive_signals": [
            "The founder was officially offline for 60 days but remained reachable by phone and responded to operational questions, meaning the team was using founder availability as a safety net rather than the documented systems.",
            "Delivery ran without the founder but relied heavily on one senior team member who informally became the decision-maker, simply transferring the key-person dependency from the founder to that individual."
          ],
          "failure_signals": [
            "Delivery quality or timeline adherence declines measurably within two weeks of the founder stepping back, revealing that documented systems are not sufficient to maintain standards without founder oversight.",
            "A single team member's two-week absence causes delivery disruption because no other team member has sufficient knowledge of that person's active projects to step in."
          ],
          "prerequisite": "TC.6",
          "review_frequency": 2,
          "weights": {
            "impact": 10,
            "complexity": 8,
            "time_to_implement": 9,
            "direct_cost": 4
          }
        },
        {
          "level": 10,
          "headline": "Institutional Delivery System",
          "plain_english": "Operations runs through a fully documented, self-improving delivery system that maintains quality and efficiency at any volume, governed and reviewed annually by an external party.",
          "observation": "At Level 10, all operational systems are running together and producing stable, measurable results. The delivery process is documented. Operational knowledge is organized. Ownership is assigned. SOPs and quality standards are enforced. Three metric categories are tracked monthly. Capacity planning and risk management are active. Cross-domain integrations are live. The improvement cycle is running. Leadership is independent. And the entire system is documented in an annual operational governance report reviewed by an external party, confirming that the delivery function would survive a complete change of ownership without disruption to quality or customer experience.",
          "why_it_matters": "An acquirer evaluating this company does not just want to know that delivery works today. They want evidence that it will continue working after the transaction, when the current team may be distracted, some staff may leave, and new ownership brings different priorities. An institutional delivery system provides that evidence through documented processes, verified quality standards, consistent metrics, and an independent leadership structure. Operational predictability is one of the clearest signals of enterprise value.",
          "audit_binary": "Has the delivery system operated without founder involvement for at least four consecutive quarters with stable or improving metrics across all three categories, is the system documented in an annual operational governance report, and has that report been reviewed by at least one external party in the past 12 months?",
          "evidence": "Annual Operational Governance Report with External Review Record",
          "evidence_example": "An annual report showing: quarterly delivery metrics across speed, quality, and capacity categories, improvement cycle activity and outcomes, capacity model status, risk register review history, cross-domain integration artifact status, and a record of founder non-involvement across all four quarters. Reviewed and noted by at least one external advisor, board member, or operational auditor.",
          "example": "Annual operations report. Average delivery time: 17 days versus the 18-day target, improving. First-pass quality check rate: 91%, stable. Capacity utilization: 76% average, within the target range of 70% to 85%. Improvement cycle: eight root cause investigations conducted, eight fixes verified, zero recurring failure types in the past two quarters. Risk register: reviewed monthly, two new risks added, one risk retired after mitigation verified. Cross-domain integrations: all four artifacts current. Four consecutive quarters without founder involvement in delivery decisions. Report reviewed by an independent operational advisor who noted the capacity model assumptions and recommended stress-testing the ceiling at 95% utilization. Stress test scheduled for Q2.",
          "false_positive_signals": [
            "Delivery performs well and metrics are stable, but delivery quality depends on two or three senior individuals whose departure would significantly disrupt operations, revealing key-person dependency that the metrics alone do not show.",
            "An annual operations report is produced and reviewed internally but has never been presented to or challenged by any external party, meaning there is no independent validation of the claims it contains."
          ],
          "failure_signals": [
            "A prospective acquirer's operational due diligence identifies undocumented processes, unmeasured quality standards, or key-person dependencies as risks that reduce confidence in the reliability of future delivery.",
            "Operational metrics have deteriorated for more than two consecutive quarters with no documented improvement cycle response, suggesting the system is reporting problems but not solving them."
          ],
          "prerequisite": "OD.9",
          "review_frequency": 1,
          "weights": {
            "impact": 10,
            "complexity": 9,
            "time_to_implement": 9,
            "direct_cost": 6
          }
        }
      ]
    },
    "PI": {
      "id": "PI",
      "name": "Product & Innovation",
      "purpose": "Define what the company sells, validate that it solves a real problem, and build the capability to improve it continuously.",
      "cxo_persona": "Chief Product Officer",
      "description": "How the company defines its product, organizes its product knowledge, standardizes what it sells and how it builds, measures whether the product actually works for customers, and develops the systematic capability to keep getting better. A mature product domain means the company innovates on evidence, not instinct, and the product improves whether the founder is involved or not. Metric names and examples should be adapted to the business model. The principles apply equally to services, SaaS, physical products, and marketplaces.",
      "direction": {
        "name": "Product Direction",
        "purpose": "Define what value the company creates for customers, who it is for, and how that value will be maintained and improved over time through a structured, evidence-driven process.",
        "required_outputs": [
          "customer_problem_statement",
          "ideal_customer_profile",
          "product_value_proposition",
          "core_offer_definition",
          "product_success_metrics",
          "product_improvement_process",
          "innovation_principles",
          "product_review_rhythm"
        ],
        "primary_owner": "Chief Product Officer",
        "contributors": [
          "CEO",
          "marketing_lead",
          "sales_lead",
          "customer_success_lead",
          "technology_lead"
        ],
        "minimum_standard": "One written product direction exists that clearly defines the problem solved, the target customer, the specific outcome the customer should achieve, and how the product will be improved over time.",
        "review_frequency": 4,
        "questions_to_answer": [
          "What specific problem does the product solve, stated in the exact words a frustrated customer would use to describe it?",
          "Who is the ideal customer, described precisely enough that a salesperson can disqualify a non-fit in under two minutes?",
          "What measurable outcome should the customer achieve, and by when after purchase?",
          "What would make a customer choose this over doing nothing, and over the most credible alternative?",
          "Does the current pricing model reflect the full value the product delivers, and which customer segment is underpriced?",
          "How does customer feedback currently flow into product decisions, and how fast does a signal become a change?",
          "What are the three metrics that prove the product is working, and what triggers a formal product intervention when they decline?",
          "What would make the current product obsolete in three years, and is anyone building that already?"
        ]
      },
      "levels": [
        {
          "level": 1,
          "headline": "Customer Problem Defined",
          "plain_english": "The company has a written statement of the problem it solves, in the customer's own words, that the whole team agrees on.",
          "observation": "Ask three people in this company what problem the product solves. At Level 1, they all give the same answer, and they can show you where it is written down. The statement uses language a frustrated customer would use, not internal jargon. It describes a specific situation, a specific consequence, and a specific type of person it happens to.",
          "why_it_matters": "Every product decision, every sales conversation, and every marketing message flows from a shared understanding of the problem being solved. A problem statement written in company language instead of customer language is a silent source of product drift. When the team disagrees on the problem, they build different things and nobody notices until customers stop buying.",
          "audit_binary": "Is there a written customer problem statement in the customer's own language, agreed by leadership, that every team member can recite consistently, and has it been validated against at least three real customer conversations in the past six months?",
          "evidence": "Customer Problem Statement with Validation Record",
          "evidence_example": "A written 2 to 3 sentence statement describing who experiences the problem, what the specific situation is, and what the cost or consequence is. Plus a record of at least three customer conversations in the past six months confirming the statement still resonates, with direct quotes where available.",
          "example": "Agency founders with 5 to 15 staff spend 6 to 10 hours per week inside client delivery work they should have delegated. This prevents them from working on the business, creates a revenue ceiling, and makes every holiday feel like a liability. Validated in four customer interviews last quarter. All four recognized the framing immediately without prompting.",
          "false_positive_signals": [
            "The problem statement is written in the company's technical or marketing language rather than words a frustrated customer would actually say.",
            "The statement has not been tested with a real customer in more than six months and is assumed to still be accurate."
          ],
          "failure_signals": [
            "Customers read the product description and say it does not quite describe their situation, or they are not sure it is for them.",
            "Sales teams spend the first part of every discovery call explaining what the problem is rather than confirming the customer already feels it."
          ],
          "prerequisite": null,
          "review_frequency": 2,
          "weights": {
            "impact": 10,
            "complexity": 2,
            "time_to_implement": 2,
            "direct_cost": 1
          }
        },
        {
          "level": 2,
          "headline": "Product Knowledge Organized",
          "plain_english": "All important product information lives in one place that any team member can find without asking the founder.",
          "observation": "At Level 2, there is a product knowledge base that holds everything the company knows about its product and its customers: the problem statement, the ideal customer profile, the value proposition, past customer research, competitive observations, and the rationale behind past product decisions. A new team member can join and understand the product context in a day without a single briefing call.",
          "why_it_matters": "Product knowledge that lives in the founder's head leaves with the founder. Every time a team member has to ask what the product is for, who it serves, or why a past decision was made, the company is paying a tax on disorganized information. Organized product knowledge is the foundation that makes every downstream product activity faster and less dependent on one person.",
          "audit_binary": "Is there a single product knowledge repository containing the problem statement, ideal customer profile, value proposition, at least five customer research records, a competitive overview, and a log of past product decisions, accessible to every team member and updated within the past 90 days?",
          "evidence": "Product Knowledge Repository",
          "evidence_example": "A shared folder, wiki, or document containing: the problem statement, ICP, value proposition, research notes from at least five customer conversations, a competitive landscape summary, and a product decision log with at least five entries. Last updated within 90 days.",
          "example": "A product wiki with six sections: Problem, Customer, Offer, Research, Competitors, and Decision Log. The Research section holds notes from 18 customer conversations organized by theme. The Decision Log has 12 entries from the past year, each showing the decision, the reasoning, and the expected outcome. Any new hire reads it on day one.",
          "false_positive_signals": [
            "A product document was created once during the company's early days and has not been updated since, making it a historical artifact rather than a working resource.",
            "Product knowledge exists across multiple tools with no single authoritative location, requiring the founder or product lead to be asked when something is unclear."
          ],
          "failure_signals": [
            "New team members spend their first two weeks piecing together product context from conversations and old emails rather than finding it in a single source.",
            "The team cannot explain why a significant product decision was made six months ago because no record exists."
          ],
          "prerequisite": "PI.1",
          "review_frequency": 4,
          "weights": {
            "impact": 8,
            "complexity": 2,
            "time_to_implement": 3,
            "direct_cost": 1
          }
        },
        {
          "level": 3,
          "headline": "Named Product Owner",
          "plain_english": "One named person is responsible for product decisions and can answer the question: what are we building and why?",
          "observation": "At Level 3, there is a named product owner who is accountable for what gets built and why. They do not need to be a professional product manager. In a small company, this might be the founder explicitly naming themselves until they can hand it over. What matters is that one person owns product decisions, has visibility into customer feedback and product performance, and can answer the question of what the company is building next and why, without hesitation.",
          "why_it_matters": "Without a named product owner, product decisions default to whoever shouts loudest. Sales pushes for features that close deals. The founder changes priorities based on the last client call. Developers build what feels interesting. Nobody is wrong individually. But the product ends up pulled in every direction simultaneously. One named owner does not need to be right about everything. They need to be accountable for making a call.",
          "audit_binary": "Is there one named person accountable for product decisions who can demonstrate current visibility into customer feedback and product performance, and who made at least three documented product decisions in the past 90 days?",
          "evidence": "Product Ownership Assignment with Decision Records",
          "evidence_example": "A written role assignment naming the product owner, plus a product decision log showing at least three decisions made by that person in the past 90 days, each with a rationale.",
          "example": "The Head of Product is named as product owner in the accountability chart. They run the weekly product review, have access to customer feedback reports and product usage data, and made three documented decisions last quarter: deprioritized one roadmap item after customer feedback showed low demand, added a new onboarding step after churn analysis revealed a gap, and rejected a sales-requested feature because it served one client rather than the broader ICP.",
          "false_positive_signals": [
            "A product manager holds the title but every significant product decision still requires the founder to weigh in before it is confirmed.",
            "The named product owner has the accountability but lacks access to customer feedback or product performance data, so they are making decisions blind."
          ],
          "failure_signals": [
            "Different team members give different answers when asked what the product priority is this quarter and why.",
            "Product decisions are made reactively, driven by the most recent client complaint or the loudest internal voice, with no named person filtering them."
          ],
          "prerequisite": "PI.2",
          "review_frequency": 4,
          "weights": {
            "impact": 9,
            "complexity": 3,
            "time_to_implement": 3,
            "direct_cost": 1
          }
        },
        {
          "level": 4,
          "headline": "Standardized Offer and Build Process",
          "plain_english": "The company sells one clearly defined offer that every customer receives, and product improvements follow a repeatable process.",
          "observation": "Two things are standardized at Level 4. First, the offer: a written document defines exactly what is included, what is excluded, how it is delivered, how long it takes, and what the customer has at the end. Every customer receives this same scope. Second, the process: a written workflow defines how a product improvement moves from idea to release, who approves each step, and what the minimum quality bar is before something reaches a customer.",
          "why_it_matters": "A company with an undefined offer reinvents its product on every sale. Margins are invisible, delivery is inconsistent, and operations cannot scale because every delivery is bespoke. A company with no build process ships whatever is ready, breaks things for existing customers, and has no way to learn what works because improvements are never tested consistently. Standardizing both is what converts a founder-led product into a company-owned one.",
          "audit_binary": "Is the core offer documented with explicit inclusions, exclusions, delivery process, timeline, and price, delivered consistently to at least three recent customers without material scope changes, and is there a written product improvement process showing how ideas move from input to release?",
          "evidence": "Core Offer Definition and Product Improvement Process Document",
          "evidence_example": "A written offer document listing inclusions, exclusions, delivery steps, timeline, and price, confirmed as delivered consistently to at least three recent customers. Plus a written product improvement process showing each step from idea intake to release, with named owners and approval points.",
          "example": "The offer document for the 90-Day Operating System: 10 structured sessions over 12 weeks, includes accountability chart, three department SOPs, 90-day scorecard, and weekly meeting rhythm setup. Excludes software implementation, recruitment, and financial consulting. Price: 12,000 fixed. Delivered by any trained consultant using the delivery playbook. Improvement process: ideas submitted to the product log, reviewed monthly by the product owner, prioritized against outcome metrics, approved items scoped by the product owner, built or drafted, reviewed by one senior team member, released with a client communication template. Six steps, two approval points, one release owner.",
          "false_positive_signals": [
            "An offer is described on the website but every sale involves significant custom scoping before the contract is signed, making the published offer a starting point for negotiation rather than the actual product.",
            "A build process exists on paper but new features regularly skip steps under deadline pressure, making the process descriptive rather than enforced."
          ],
          "failure_signals": [
            "Delivery teams receive different briefs for every client because scope was negotiated differently at sale each time.",
            "A product improvement reached a customer and broke something for existing users because no review step caught the dependency."
          ],
          "prerequisite": "PI.3",
          "review_frequency": 4,
          "weights": {
            "impact": 9,
            "complexity": 5,
            "time_to_implement": 5,
            "direct_cost": 3
          }
        },
        {
          "level": 5,
          "headline": "Product Outcome Metrics",
          "plain_english": "The company tracks at least three metrics that measure whether customers are succeeding, not whether the team is busy.",
          "observation": "At Level 5, product performance is measured by what customers achieve, not by what the team ships. The specific metrics depend on the business model: for a service business this might be activation rate, 90-day retention, and outcome achievement rate; for a marketplace it might be listing activation, repeat transaction rate, and buyer satisfaction. All three have numeric targets. All three are reviewed monthly. A metric declining for two consecutive months triggers a documented product response.",
          "why_it_matters": "Output metrics, such as features shipped, updates released, and bugs fixed, measure how busy the product team is. Outcome metrics measure whether the product is actually working. A product team that ships 40 updates a quarter while retention is declining is building faster in the wrong direction. Outcome metrics are the only reliable signal of whether the product deserves the price it charges.",
          "audit_binary": "Are at least three product outcome metrics tracked monthly with numeric targets, reviewed in a fixed monthly meeting, and has a metric declining for two consecutive months triggered a documented product response in the past six months?",
          "evidence": "Product Metrics Dashboard with Monthly Review Records and Intervention Log",
          "evidence_example": "Monthly metrics reports for at least three consecutive months showing at least three outcome metrics with targets, actuals, and trend. Plus at least one documented product intervention triggered by a metric declining for two consecutive months.",
          "example": "For a consulting business: activation rate, defined as percentage of clients completing all onboarding milestones within 14 days, target 80%; 90-day retention rate, target 88%; outcome achievement rate, defined as percentage of clients reporting their target outcome achieved at the 90-day review, target 72%. Reviewed on the first Monday of each month. Last month, outcome achievement dropped to 64% for the second month running. Intervention triggered: product owner reviewed 12 client delivery records, identified a pattern in session 4, and updated the session guide within two weeks.",
          "false_positive_signals": [
            "The product team tracks features shipped, releases, and bug counts as their primary performance metrics, with no measure of whether customers are succeeding.",
            "Outcome metrics are displayed on a dashboard but declining numbers have never triggered any documented product response."
          ],
          "failure_signals": [
            "The product team cannot answer whether customers are more or less successful with the product than they were six months ago.",
            "Churn is rising but the product team's quarterly priorities are not connected to the churn data."
          ],
          "prerequisite": "TI.5",
          "review_frequency": 12,
          "weights": {
            "impact": 9,
            "complexity": 6,
            "time_to_implement": 5,
            "direct_cost": 3
          }
        },
        {
          "level": 6,
          "headline": "Proactive Product Management",
          "plain_english": "The company collects structured customer signals before problems become churn, and plans product improvements at least one quarter ahead.",
          "observation": "Two proactive mechanisms exist at Level 6. First, a structured feedback process collects signals from customers at defined points in their journey, not just when something goes wrong. Results are reviewed monthly and linked to roadmap decisions. Where possible, customers who gave feedback are told what changed as a result. Second, a rolling roadmap plans improvements at least 90 days ahead, is visible to the team, and has a change log showing why priorities shifted when they did.",
          "why_it_matters": "Reactive product management means the company learns about problems when customers complain or cancel. By then, trust is already damaged. A structured feedback loop catches signals earlier. A rolling roadmap prevents the product from lurching between whatever was requested last. Together they shift product management from firefighting to steering.",
          "audit_binary": "Is structured customer feedback collected at defined journey points at least monthly, reviewed in a fixed meeting, linked to at least one roadmap decision in the past 90 days, and is there a rolling roadmap covering at least the next 90 days with a change log recording every reprioritization and its reason?",
          "evidence": "Feedback Review Log with Decision Links and Rolling Roadmap with Change Log",
          "evidence_example": "Monthly feedback summaries for at least three consecutive months, each showing the collection method, response volume, top themes, and a log entry linking the feedback to a roadmap decision. Plus a roadmap document updated within 30 days, visible to the team, with a change log containing at least two entries.",
          "example": "A 5-question survey sent automatically at day 30 and at project completion. Reviewed the first Monday of each month. Last month: seven clients cited unclear guidance after session three. Outcome: onboarding checklist updated and sent proactively at session two. Those seven clients received a follow-up message explaining the change. Roadmap: maintained in the project system, visible to the full team, reviewed monthly. Last change log entry: moved automated reporting to Q3 because feedback showed clients value the live review call more than the report itself. Decision recorded with rationale.",
          "false_positive_signals": [
            "Feedback surveys are sent and stored but nobody reviews them or acts on them, and customers never hear what changed as a result of their input.",
            "A roadmap document exists but has not been updated in more than 45 days and the change log has no entries, meaning priorities shifted without being recorded."
          ],
          "failure_signals": [
            "The same customer complaints appear in feedback for two or more consecutive months without a documented product response.",
            "The team is surprised by a product problem that structured early signals would have caught three months earlier."
          ],
          "prerequisite": "PI.5",
          "review_frequency": 12,
          "weights": {
            "impact": 9,
            "complexity": 6,
            "time_to_implement": 6,
            "direct_cost": 2
          }
        },
        {
          "level": 7,
          "headline": "Cross-Domain Product Integration",
          "plain_english": "Product formally connects to customer success, sales, marketing, and technology through shared artifacts and regular integration points.",
          "observation": "At Level 7, the product function does not operate in isolation. Four integration points exist, each backed by a real artifact used in the past quarter. Customer success shares outcome data and churn signals that feed the roadmap. Sales shares objection themes and offer feedback that inform the offer definition. Marketing reviews the value proposition against what actually converts, not just what sounds good internally. Technology shares build feasibility and technical constraint data before items are committed to the roadmap.",
          "why_it_matters": "The most expensive product failures are cross-domain failures. A product that is technically excellent but described incorrectly in marketing will not sell. A product that sells well but sets expectations delivery cannot meet will churn. A product team that receives no churn data from customer success will keep improving the wrong things. Integration points convert domain-specific knowledge into shared decisions, and shared decisions produce better outcomes than four functions optimizing independently.",
          "audit_binary": "Do documented integration artifacts connect PI to CS, RS, BM, and TI, with evidence that each artifact was used to inform a product decision in the past quarter?",
          "evidence": "Cross-Domain Product Integration Artifacts: CS Outcome Report, RS Offer Feedback Log, BM Message Validation Record, TI Feasibility Input",
          "evidence_example": "Four artifacts, each with evidence of use in the past quarter: a customer success outcome and churn signal report used in a roadmap review, a sales objection and offer feedback log reviewed before the last offer update, a marketing message validation record showing the value proposition was tested against conversion data, and a technology feasibility note for at least one roadmap item confirmed before it was committed.",
          "example": "CS integration: monthly outcome report from the customer success lead showing goal achievement rates by client segment, reviewed by the product owner at the monthly product meeting. Three roadmap items in the past quarter were directly traceable to signals in this report. RS integration: a quarterly offer feedback session with the sales lead covering the top five objections and any scope questions that came up during sales conversations. BM integration: value proposition reviewed against the past quarter's conversion data before the website copy was updated. TI integration: a written feasibility note from the technology lead for every roadmap item above a defined complexity threshold, submitted before the item is confirmed in the roadmap.",
          "false_positive_signals": [
            "Product and customer success have a good working relationship and talk regularly, but no artifact exists showing how outcome data formally feeds the roadmap.",
            "The product owner attends a marketing meeting once per quarter but no structured message validation process or artifact exists."
          ],
          "failure_signals": [
            "Marketing is describing the product using language the product team recognizes as outdated, but no formal review point exists to catch and correct it.",
            "A roadmap item was built and released but the technology team had flagged a feasibility concern informally that was never formally reviewed."
          ],
          "prerequisite": "PI.6",
          "review_frequency": 4,
          "weights": {
            "impact": 8,
            "complexity": 7,
            "time_to_implement": 6,
            "direct_cost": 3
          }
        },
        {
          "level": 8,
          "headline": "Structured Experimentation",
          "plain_english": "Every significant product change is tested with a written hypothesis and a pre-defined success criterion before it reaches all customers.",
          "observation": "At Level 8, the company has a defined experimentation protocol. Any product change above an agreed impact threshold requires a written experiment brief before it is built: a hypothesis, a test group, a success criterion defined before results are known, and a timeline. Results are logged. The decision to roll out, iterate, or abandon is made against the pre-defined criterion, not against how the team feels about the result. Findings feed back into the product knowledge base and update the roadmap.",
          "why_it_matters": "Shipping to all customers simultaneously makes every significant product change an irreversible bet. An experiment converts that bet into a test with limited downside. Over time, a company that runs structured experiments learns faster and wastes less than one that ships and hopes. The pre-defined success criterion is the most important element. Defining success after seeing the results is not experimentation. It is rationalization.",
          "audit_binary": "Is there a documented experimentation protocol that has been applied to at least two product changes in the past six months, each with a written hypothesis, a defined test group, a success criterion defined before results were known, and a recorded outcome and rollout decision?",
          "evidence": "Product Experimentation Log",
          "evidence_example": "An experimentation log with at least two entries from the past six months, each showing: the change tested, the hypothesis, the test group and selection method, the pre-defined success criterion, the result, and the rollout decision made.",
          "example": "Experiment: adding a structured mid-program check-in call at week six. Hypothesis: clients who receive a week-six check-in will show a 10 percentage point improvement in outcome achievement at 90 days. Test group: next 20 new clients, randomly selected. Success criterion: outcome achievement rate for test group above 82% versus current baseline of 71%. Timeline: 90 days. Result: test group achieved 79%. Below the threshold. Decision: week-six call not made mandatory. Learning logged: timing may matter more than the call itself. Follow-up experiment planned for week four.",
          "false_positive_signals": [
            "The team tries things with some clients and not others informally, but no written hypothesis or success criterion exists, making it observation rather than experimentation.",
            "Success criteria are described after the results are known, allowing the team to declare any result a success by adjusting what they were looking for."
          ],
          "failure_signals": [
            "A significant product change was released to all customers and then reversed within 60 days because it did not work as expected, a problem a test group would have caught.",
            "The team cannot cite the specific evidence that any product improvement in the past year achieved its intended effect."
          ],
          "prerequisite": "PI.7",
          "review_frequency": 4,
          "weights": {
            "impact": 8,
            "complexity": 7,
            "time_to_implement": 7,
            "direct_cost": 4
          }
        },
        {
          "level": 9,
          "headline": "Independent Product Leadership",
          "plain_english": "A dedicated product leader owns the roadmap and runs product reviews independently. The product does not stall when the founder is unavailable.",
          "observation": "At Level 9, a named product leader, not the founder, owns the product roadmap. They lead the monthly product review, are accountable for the outcome metrics, and have documented authority to add, remove, or reprioritize roadmap items without founder approval. The founder receives a quarterly product summary but does not attend monthly sessions. Product velocity does not change when the founder is focused elsewhere.",
          "why_it_matters": "Founder-controlled product development is the most common product bottleneck in growing companies. Every roadmap decision that requires the founder creates a queue. A product leader with real authority decouples innovation speed from the founder's schedule. It also signals something important to the team: the product is a company capability, not a founder preference.",
          "audit_binary": "Is there a named product leader with documented roadmap authority who has run at least three consecutive monthly product reviews without founder involvement, and made at least two roadmap-level decisions, meaning additions, removals, or sequence changes, independently and on record?",
          "evidence": "Product Leadership Authority Document with Independent Review Records and Decision Log",
          "evidence_example": "A written role description granting roadmap authority, records of at least three consecutive monthly product reviews without the founder present, and a decision log showing at least two roadmap-level decisions made and logged independently.",
          "example": "The Head of Product owns the roadmap. The founder attends the quarterly product strategy review only. In the past three monthly reviews: two features were deprioritized based on low engagement data, one new item was added after a customer success signal, and one experiment was launched. All four decisions are in the product decision log with rationale. The founder was informed in the monthly summary, not consulted before the decisions were made.",
          "false_positive_signals": [
            "A product manager holds the title but escalates every roadmap decision to the founder, who makes the real call informally before the product manager announces it.",
            "The founder does not attend product reviews but the product leader messages the founder afterward for validation before implementing anything."
          ],
          "failure_signals": [
            "Product velocity slows noticeably when the founder is traveling or focused on another part of the business.",
            "The product team waits for the founder's view before committing to a roadmap decision, even when the product leader has the formal authority to decide."
          ],
          "prerequisite": "TC.6",
          "review_frequency": 2,
          "weights": {
            "impact": 9,
            "complexity": 8,
            "time_to_implement": 8,
            "direct_cost": 5
          }
        },
        {
          "level": 10,
          "headline": "Institutional Innovation Engine",
          "plain_english": "The company runs a self-sustaining product improvement system that produces measurable gains in customer outcomes year over year, without founder involvement.",
          "observation": "At Level 10, all product systems are running together and producing compound results. Customer insight is collected continuously. Experiments run on a quarterly cycle. The roadmap is governed and maintained. Outcome metrics are improving year over year. Product leadership is independent. An external product review challenges the product strategy at least once per year, similar to how an advisory board challenges business strategy. The founder receives an annual product report. They do not produce it.",
          "why_it_matters": "An innovation engine is a compounding asset. Each cycle of insight, experiment, and improvement builds on the last. A company with a working innovation engine does not depend on founder inspiration or individual brilliance. It produces better products systematically. This is the difference between a company that has a product and a company that has an innovation capability. An acquirer pays a premium for the second one.",
          "audit_binary": "Has the product innovation system, covering customer insight, experimentation, a governed roadmap, and outcome metrics, operated independently of the founder for at least four consecutive quarters, with measurable improvement in at least two product outcome metrics compared to the prior year or the baseline established at system launch, and has an external product review been conducted in the past 12 months?",
          "evidence": "Annual Product Innovation Report with External Review Record",
          "evidence_example": "An annual report showing: number of customer insight sessions conducted, experiments run and their outcomes, roadmap decisions made and logged, year-over-year or baseline-versus-current change in at least two outcome metrics, and a record of founder non-involvement across all four quarters. Plus a record of an external product review conducted by at least one person outside the company.",
          "example": "A product team of three runs 12 customer interviews per year, four quarterly experimentation cycles, a maintained three-quarter roadmap reviewed monthly, and a product metrics dashboard. Year over year: activation rate improved from 74% to 83%, outcome achievement from 68% to 77%. An external product advisor reviewed the product strategy in October and produced three written challenges. The product owner responded to each in writing within two weeks. The founder read the annual report. They had no involvement in producing it and made no changes to its conclusions.",
          "false_positive_signals": [
            "A product team exists and ships regularly but cannot demonstrate measurable improvement in customer outcome metrics from one year to the next.",
            "The innovation system works when the founder is present and attentive but output quality and decision speed decline when their focus shifts."
          ],
          "failure_signals": [
            "Outcome metrics have been flat or declining for more than two quarters with no documented root cause analysis or formal product response.",
            "Competitors are releasing meaningful improvements at a pace the company cannot explain or match, and the team has no structured process for diagnosing why."
          ],
          "prerequisite": "PI.9",
          "review_frequency": 1,
          "weights": {
            "impact": 10,
            "complexity": 9,
            "time_to_implement": 9,
            "direct_cost": 7
          }
        }
      ]
    },
    "RS": {
      "id": "RS",
      "name": "Revenue & Sales",
      "purpose": "Convert market demand into predictable, scalable, and healthy revenue through a system that works independently of any individual.",
      "cxo_persona": "Chief Revenue Officer",
      "description": "How the company qualifies prospects, manages the pipeline, closes deals, forecasts revenue, and builds a revenue organization that grows without founder dependence. The framework is model-neutral and applies equally to transactional, retainer, subscription, and project-based revenue models. The goal is not just more revenue but healthier revenue: predictable, well-distributed, and with a sustainable and improving ratio of customer lifetime value to acquisition cost.",
      "direction": {
        "name": "Revenue Strategy",
        "purpose": "Define how the company consistently converts demand into revenue, what the unit economics of that conversion are, how revenue risk is managed, and how the sales system evolves from founder-led to institutionally scalable.",
        "required_outputs": [
          "revenue_model_definition",
          "pricing_strategy_and_exceptions_policy",
          "sales_process_with_stage_exit_criteria",
          "qualification_criteria",
          "pipeline_management_method",
          "revenue_targets_and_concentration_limits",
          "sales_compensation_model",
          "revenue_review_rhythm"
        ],
        "primary_owner": "Chief Revenue Officer",
        "contributors": [
          "CEO",
          "marketing_lead",
          "finance_lead",
          "product_lead",
          "customer_success_lead"
        ],
        "minimum_standard": "One written revenue strategy exists defining the revenue model, pricing, the sales process with stage-exit criteria, qualification criteria, and monthly targets, reviewed at least quarterly.",
        "review_frequency": 4,
        "questions_to_answer": [
          "What is the revenue model, and is there an opportunity to convert one-time revenue into recurring revenue that has not yet been captured?",
          "What is the current LTV:CAC ratio, what is the payback period, and are both improving or deteriorating quarter over quarter?",
          "What is the maximum acceptable revenue concentration for a single client, and does the current portfolio comply?",
          "At what exact point in a sales conversation does a prospect become genuinely likely to close, and how consistently can the team identify that moment?",
          "What does a salesperson need to believe, know, and be able to do independently by day 60, and does the current onboarding reliably produce that?",
          "What is the handoff protocol from sales to delivery, and what promises are salespeople currently making that delivery cannot keep?",
          "What would a better-funded competitor need to do to take the top 10 clients, and how exposed is the company right now?",
          "What is the single sales metric that, if improved by 20%, would have the largest compounding impact on annual revenue?"
        ]
      },
      "levels": [
        {
          "level": 1,
          "headline": "Pricing Defined",
          "plain_english": "The company has a written price that every sales conversation starts from, with a clear rule for who can authorize a discount.",
          "observation": "Walk into any sales conversation in this company and the price is the same starting point every time. It is written down, available to every salesperson, and treated as the anchor, not the opening bid. When a client pushes back on price, the salesperson knows exactly how far they can move without asking anyone, and knows exactly who they need to call if they want to go further. Every exception is logged.",
          "why_it_matters": "When pricing exists only in the founder's head or is negotiated fresh on every call, three things happen. Clients who compare notes discover inconsistencies and trust erodes. Salespeople learn that the published price is negotiable and start discounting preemptively. And margins become invisible because every deal is priced differently. A written price with an exception policy is the most basic act of turning revenue into a system rather than a series of individual negotiations.",
          "audit_binary": "Is pricing documented in a current written document that every salesperson starts from, and is there a written exception policy naming who can authorize discounts at defined thresholds, with all exceptions logged in a central system?",
          "evidence": "Pricing Document and Exception Authorization Policy with Exception Log",
          "evidence_example": "A current pricing document listing all tiers or packages with prices, inclusions, and conditions. A written exception policy specifying authorization thresholds and named approvers. An exception log in the CRM or equivalent showing all discounts granted in the past 90 days with the approver and reason recorded.",
          "example": "Standard: 8,500 euros. Professional: 12,000 euros. Enterprise: custom, minimum 18,000 euros. Discounts up to 10%: salesperson authority, logged in CRM. Between 10% and 20%: sales lead approval required, logged with reason. Above 20%: CEO approval required, logged with written rationale. Every salesperson opens every pricing conversation from this document. Last quarter: four exceptions logged, three approved, one rejected.",
          "false_positive_signals": [
            "A pricing document exists on the website but the founder negotiates every significant deal from a different starting point, making the document a public-facing decoration rather than an internal operating standard.",
            "Pricing is documented but no exception policy exists, so discounts are granted based on whoever asks most persistently or has the best relationship with the founder."
          ],
          "failure_signals": [
            "Two clients who bought the same product in the same month are paying materially different prices with no documented rationale for the difference.",
            "Salespeople quote a price lower than the standard rate before the client has raised any objection, because they have learned the real price is whatever it takes to close."
          ],
          "prerequisite": "PI.3",
          "review_frequency": 2,
          "weights": {
            "impact": 10,
            "complexity": 2,
            "time_to_implement": 2,
            "direct_cost": 1
          }
        },
        {
          "level": 2,
          "headline": "Pipeline Centralized",
          "plain_english": "Every lead and active deal lives in one central system that leadership can read at any moment without asking a salesperson.",
          "observation": "At Level 2, the pipeline is a company asset, not a collection of personal assets. Every lead is logged from first contact. Every active deal has a stage, a value, an expected close date, and a last-touch date, all in one system. A salesperson who leaves tomorrow does not take the pipeline with them. Leadership can open the system on any day and read the full picture without scheduling a briefing.",
          "why_it_matters": "A pipeline that lives in spreadsheets, notebooks, or salespeople's email inboxes is not a company pipeline. It is a set of personal pipelines that happen to be working for the company right now. The moment any of those people leaves, is sick, or goes on holiday, the visibility disappears. Centralizing the pipeline is the foundational act of making revenue a company-owned capability rather than an individual-owned one.",
          "audit_binary": "Is every active lead and deal recorded in a single central system with current stage, value, expected close date, and last-touch date, updated within the past seven days, and can leadership access a complete pipeline view without requesting information from any individual salesperson?",
          "evidence": "Centralized Pipeline Registry with Recency Audit",
          "evidence_example": "A CRM or equivalent system showing every active lead and deal with stage, value, expected close date, and last activity date. A recency audit confirming all entries were updated within the past seven days.",
          "example": "A CRM with 24 active deals. Every Monday morning, salespeople spend 15 minutes updating their entries. Any deal without a logged activity in seven days triggers an automatic flag to the sales lead. Leadership opens the pipeline view every Monday before the weekly meeting. The last time anyone requested a manual pipeline summary was four months ago because the system now makes that conversation unnecessary.",
          "false_positive_signals": [
            "A CRM subscription exists but salespeople update their entries only in the days before the monthly review meeting, giving leadership one accurate snapshot per month surrounded by three weeks of stale data.",
            "The CRM contains all deals but expected close dates are never updated, so 60% of deals show close dates that have already passed with no explanation."
          ],
          "failure_signals": [
            "When a salesperson is sick or leaves, leadership cannot reconstruct their active pipeline without going through their email and calendar.",
            "Leadership must ask each salesperson individually to understand the current pipeline state before any revenue conversation can happen."
          ],
          "prerequisite": "RS.1",
          "review_frequency": 52,
          "weights": {
            "impact": 9,
            "complexity": 2,
            "time_to_implement": 2,
            "direct_cost": 2
          }
        },
        {
          "level": 3,
          "headline": "Revenue Owned and Qualified",
          "plain_english": "One person is accountable for whether the company hits its revenue target, and there are written criteria that determine which prospects deserve selling time.",
          "observation": "Two things are true at Level 3. First, one named person owns the monthly revenue number. Not the founder and the sales manager jointly. One person. When the target is missed, there is no ambiguity about who owns the explanation and the corrective plan. Second, written qualification criteria define which leads enter the active pipeline. The criteria are specific enough that two different salespeople evaluating the same prospect independently reach the same pass or fail conclusion. A pipeline full of hope is not a pipeline. It is a wish list.",
          "why_it_matters": "Without a named revenue owner, revenue is everyone's responsibility and therefore no one's. Without qualification criteria, salespeople fill the pipeline to look productive rather than to reflect genuine probability. Both conditions together create the same outcome: missed targets with no clear explanation and no clear owner. Named ownership and qualification criteria together convert revenue from an event into a managed outcome.",
          "audit_binary": "Is there one named person accountable for the monthly revenue target, and are there written qualification criteria specific enough that two salespeople evaluating the same lead independently reach the same pass or fail conclusion, applied consistently to every deal currently in the active pipeline?",
          "evidence": "Revenue Ownership Assignment and Qualification Criteria Document with Pipeline Audit",
          "evidence_example": "A written document or role assignment naming the revenue owner with their target. A qualification criteria document with binary pass or fail criteria. Evidence that every deal currently in the active pipeline meets the minimum qualification standard.",
          "example": "Revenue owner: Head of Sales, accountable for 180,000 euros per month. Qualification criteria: confirmed budget in range, decision-maker confirmed on a call, problem matches the ICP definition, timeline under six months. Any lead missing two or more criteria moves to a nurture list rather than the active pipeline. Last pipeline audit: three deals moved to nurture after failing the timeline criterion. Pipeline cleaned from 31 to 28 active deals.",
          "false_positive_signals": [
            "Revenue responsibility is shared between the founder and a sales manager, so when targets are missed, accountability is diffuse and the conversation about why becomes a negotiation rather than a diagnosis.",
            "Qualification criteria exist but are written in qualitative language such as good fit or seems interested, making consistent application impossible across different salespeople."
          ],
          "failure_signals": [
            "Pipeline volume grows month over month but closed revenue does not, because unqualified deals are filling the system and creating false confidence in the forecast.",
            "When the revenue target is missed, no single person owns the explanation and the corrective plan without being asked by the founder."
          ],
          "prerequisite": "RS.2",
          "review_frequency": 4,
          "weights": {
            "impact": 9,
            "complexity": 3,
            "time_to_implement": 3,
            "direct_cost": 1
          }
        },
        {
          "level": 4,
          "headline": "Standardized Sales Process",
          "plain_english": "The company has a written sales process where every stage has a defined action and a specific exit criterion, and every active deal is staged correctly against it.",
          "observation": "A sales process without stage-exit criteria is a list of labels, not a process. At Level 4, every stage has three things: what the salesperson does at that stage, what information must be confirmed before moving forward, and what specific customer action or evidence is required to advance the deal. A manager can look at any deal in the pipeline and verify in under two minutes whether it belongs in the stage it is sitting in, or whether it is parked there out of optimism.",
          "why_it_matters": "Stage-exit criteria are what make coaching specific rather than motivational. Without them, a manager can only say work harder on that deal. With them, a manager can say that deal is in Stage 3 but the proposal was never explicitly requested by the prospect. That is a Stage 2 deal. Go back and close that gap before you invest more time. That conversation is only possible when the criteria exist in writing and are enforced consistently.",
          "audit_binary": "Is there a written sales process where each stage has a defined salesperson action and a specific exit criterion, and does every deal in the active pipeline sit in the correct stage based on those criteria, verifiable in a pipeline audit conducted within the past 30 days?",
          "evidence": "Sales Process Document with Stage-Exit Criteria and Pipeline Conformance Record",
          "evidence_example": "A sales process document with named stages and binary exit criteria per stage. A pipeline audit record from the past 30 days confirming every active deal is correctly staged, with any incorrectly staged deals identified and corrected.",
          "example": "Stage 1, Qualified: ICP criteria confirmed. Exit criterion is a discovery call booked and attended. Stage 2, Discovery complete: problem, budget, timeline, and decision-maker confirmed in writing in the CRM. Exit criterion is a proposal explicitly requested by the prospect. Stage 3, Proposal sent: written proposal delivered within 48 hours of request. Exit criterion is a follow-up call booked within five business days. Stage 4, Decision pending: verbal or written intent received. Exit criterion is contract sent. Stage 5, Closed won or lost: contract signed or formal decline documented. Last pipeline audit found two deals sitting in Stage 3 that had never received an explicitly requested proposal. Both moved back to Stage 2.",
          "false_positive_signals": [
            "A sales process document exists but stage advancement is based on the salesperson's feeling about the deal rather than the documented exit criteria, meaning the stages reflect optimism rather than reality.",
            "The pipeline contains deals that have been in the same stage for more than twice the average sales cycle length with no recorded activity, because no exit criterion is forcing a decision."
          ],
          "failure_signals": [
            "Two salespeople describe the company's sales process differently when asked to walk through it step by step, revealing that the written process is not the actual process.",
            "Deals regularly skip stages or sit in early stages for months, suggesting the process exists on paper but is not enforced in day-to-day selling."
          ],
          "prerequisite": "RS.3",
          "review_frequency": 4,
          "weights": {
            "impact": 9,
            "complexity": 4,
            "time_to_implement": 4,
            "direct_cost": 1
          }
        },
        {
          "level": 5,
          "headline": "Sales Outcome Metrics and Unit Economics",
          "plain_english": "The company tracks at least four outcome metrics monthly and has calculated its LTV:CAC ratio, because scaling a revenue model you have not measured is how companies grow their way into trouble.",
          "observation": "At Level 5, sales performance is measured by outcomes, not activity. Four metrics are tracked monthly at minimum: lead-to-opportunity conversion rate, opportunity-to-close rate, average deal size, and average sales cycle length. All four have numeric targets. All four are reviewed in a fixed monthly meeting. A metric declining for two consecutive months triggers a documented investigation. And the LTV:CAC ratio is calculated, documented, and has a defined target. The minimum acceptable ratio is 3:1. Below that, the payback period can exceed the average client relationship length, meaning the company is paying more to acquire clients than those clients will ever return.",
          "why_it_matters": "Activity metrics measure effort. A salesperson who makes 100 calls and closes two deals is less effective than one who makes 30 calls and closes eight. Outcome metrics measure effectiveness and make coaching specific. The LTV:CAC ratio answers the most important question in any revenue operation: is acquiring each customer creating or destroying value? A company that does not know this ratio is scaling a model it has not validated. If the ratio is below 3:1 and the company is adding salespeople, it is accelerating the problem.",
          "audit_binary": "Are at least four sales outcome metrics tracked monthly with numeric targets, reviewed in a fixed monthly meeting, has a declining metric triggered a documented investigation in the past six months, and is the LTV:CAC ratio calculated, documented with a defined target, and currently above 3:1?",
          "evidence": "Sales Metrics Dashboard with Monthly Review Records, Investigation Log, and LTV:CAC Calculation",
          "evidence_example": "Monthly sales metrics reports for at least three consecutive months showing four outcome metrics with targets, actuals, and trend. At least one documented investigation triggered by a metric declining for two consecutive months. A written LTV:CAC calculation showing the inputs, the ratio, and the trend over at least two quarters.",
          "example": "Monthly metrics reviewed on the first Monday of each month. Lead-to-opportunity rate: 34%, target 35%. Win rate: 38%, target 40%, missed two months. Investigation opened: discovery call recordings reviewed, pattern found that proposals were sent before budget was confirmed in 40% of lost deals. Process updated to require budget confirmation as a Stage 2 exit criterion. LTV:CAC calculation: average contract value 24,000 euros per year, average client retention 2.1 years, gross margin 62%. LTV equals 31,248 euros. Fully loaded CAC including salesperson time, marketing spend, and onboarding cost: 6,800 euros. Ratio: 4.6:1. Target: maintain above 4:1.",
          "false_positive_signals": [
            "Activity metrics such as calls made, emails sent, and LinkedIn messages are tracked and presented as sales performance data with no conversion or outcome figures alongside them.",
            "An LTV:CAC ratio has been calculated once as a planning exercise but is not tracked quarterly or used in any hiring, pricing, or channel decision."
          ],
          "failure_signals": [
            "The LTV:CAC ratio has never been calculated. The company is adding salespeople and marketing spend without knowing whether acquiring each customer creates or destroys value.",
            "The ratio is below 3:1 and there is no documented plan to correct it. The company is building pipeline on an acquisition model that does not yet pay for itself."
          ],
          "prerequisite": "TI.5",
          "review_frequency": 12,
          "weights": {
            "impact": 9,
            "complexity": 6,
            "time_to_implement": 5,
            "direct_cost": 3
          }
        },
        {
          "level": 6,
          "headline": "Proactive Revenue Management",
          "plain_english": "The company produces a monthly revenue forecast from pipeline data and uses it during the month to intervene in at-risk deals before the month closes.",
          "observation": "There are two types of revenue management. The first type discovers the revenue number at month end and reacts to it. The second type produces a forecast from pipeline data at the start of the month, reviews it at mid-month, identifies which specific deals are at risk of slipping, and intervenes before the month is over. At Level 6, the company does the second type. The forecast is not a reporting exercise. It is a steering mechanism.",
          "why_it_matters": "A forecast that is only consulted at month end is a postmortem, not a planning tool. The value of forecasting is in what it enables during the month. When a weighted pipeline review on day 15 shows that two deals flagged as 70% probability have not been contacted in eight days, a sales leader who intervenes that day can still save the month. A sales leader who discovers the same information on day 31 cannot. Variance analysis is the learning mechanism: each gap between forecast and actual is a lesson about which stage probabilities are wrong and which deal types slip.",
          "audit_binary": "Is a revenue forecast produced monthly from pipeline stage probabilities, used during the month to trigger specific interventions in at-risk deals, and is there a documented variance analysis for each of the past three months identifying the specific cause of the gap and the calibration applied to the following month?",
          "evidence": "Monthly Revenue Forecast with Mid-Month Intervention Records and Variance Analysis",
          "evidence_example": "Three consecutive monthly forecasts showing: pipeline-weighted revenue estimate, mid-month intervention records for at-risk deals, actual result, variance amount and percentage, specific cause of variance, and the calibration applied to the next month's probability weightings.",
          "example": "Month 3 forecast: 187,000 euros weighted from pipeline. Mid-month review on day 15: two Stage 4 deals flagged as at-risk because no contact was logged in eight days. Sales lead called both clients that afternoon. One re-engaged and closed by day 28. One confirmed slipping to the following month. Actual result: 164,000 euros. Variance: minus 23,000. Root cause: enterprise deals in Stage 4 are being assigned 70% probability but historical data shows they close at 45% because legal review adds two to four weeks. Calibration: enterprise Stage 4 probability reduced to 45% from the following month. Next forecast immediately more conservative on that deal type.",
          "false_positive_signals": [
            "A forecast is produced each month and presented at the month-end review, but it is never used during the month to trigger any action. It describes what happened rather than shaping what will happen.",
            "Forecast variance is acknowledged each month but attributed to external factors or luck rather than a specific pipeline or process cause being identified and corrected."
          ],
          "failure_signals": [
            "Forecast accuracy is consistently worse than 25% off actuals across multiple months with no improvement trend, indicating the pipeline stage data is not reliable enough to forecast from.",
            "The finance team refuses to use the sales forecast as a planning input for cash flow or hiring because it has been wrong too many times without a credible explanation."
          ],
          "prerequisite": "RS.4",
          "review_frequency": 12,
          "weights": {
            "impact": 8,
            "complexity": 6,
            "time_to_implement": 5,
            "direct_cost": 2
          }
        },
        {
          "level": 7,
          "headline": "Cross-Domain Revenue Integration",
          "plain_english": "Sales formally connects to marketing, delivery, customer success, and finance through shared artifacts that are used in real decisions every quarter.",
          "observation": "At Level 7, revenue does not operate in isolation. Four integration points exist. Marketing shares lead quality data showing which sources convert and why, which informs channel and targeting decisions. Operations receives a completed handoff checklist from sales before any project begins, ensuring what was sold matches what is delivered. Customer success feeds churn signals and expansion opportunities back to sales, creating a closed loop between retention and acquisition. Finance and sales review unit economics jointly each quarter, making budget and hiring decisions on shared data rather than separate assumptions.",
          "why_it_matters": "The most expensive revenue failures happen at domain boundaries. Sales overpromises to close and delivery is set up to fail. Marketing optimizes for lead volume rather than lead quality because no one tells them which sources actually convert. Customer success sees churn signals that sales could act on for expansion, but the information never crosses the boundary. Each of these failures is preventable with a formal integration point. Without the integration, four functions optimize individually and produce outcomes none of them would have chosen deliberately.",
          "audit_binary": "Do documented integration artifacts connect RS to BM, OD, CS, and FR, with evidence that each artifact was used to inform a decision in the past quarter?",
          "evidence": "Cross-Domain Revenue Integration Artifacts: Lead Quality Report, Sales-to-Delivery Handoff Checklist, CS Revenue Signal Record, and Joint Unit Economics Review",
          "evidence_example": "Four artifacts, each with evidence of use in the past quarter: a lead quality report shared with marketing showing conversion rates by source and ICP match, a completed sales-to-delivery handoff checklist for at least three recent clients, a record of customer success churn or expansion signals reviewed by the sales lead, and minutes from a joint sales-finance unit economics review.",
          "example": "BM integration: a monthly lead quality report sent to the marketing owner showing conversion rate by channel and ICP match score. Last quarter this report caused the marketing team to shift budget away from direct outreach after data showed content-sourced leads convert at 2.3 times the rate of outbound leads. OD integration: a 12-item handoff checklist completed by sales and countersigned by the delivery lead before any project begins, covering scope confirmed, promises made to client, key contacts, and agreed timeline. CS integration: a monthly one-page report from the customer success lead flagging expansion opportunities and early churn signals, reviewed by the sales lead each month. Two expansion deals last quarter originated from this report. FR integration: a quarterly 30-minute meeting with the finance lead reviewing LTV:CAC, payback period, and margin by deal type.",
          "false_positive_signals": [
            "Sales and marketing have good communication and meet regularly, but no structured lead quality artifact exists and conversion data does not formally influence marketing channel or content decisions.",
            "A handoff process is described in the sales training but no completed handoff checklist exists for any recent client, meaning the handoff happens informally and inconsistently."
          ],
          "failure_signals": [
            "Delivery teams regularly receive clients with scope expectations that differ from what operations was briefed on, because the sales-to-delivery handoff is informal and relies on memory.",
            "Marketing continues investing in channels based on lead volume data while sales is privately aware that leads from certain sources rarely close, but no artifact exists to communicate that back."
          ],
          "prerequisite": "RS.6",
          "review_frequency": 4,
          "weights": {
            "impact": 8,
            "complexity": 7,
            "time_to_implement": 6,
            "direct_cost": 3
          }
        },
        {
          "level": 8,
          "headline": "Systematic Sales Improvement",
          "plain_english": "The company runs a formal win and loss analysis on every significant deal and uses the findings to update the sales playbook every quarter.",
          "observation": "At Level 8, the sales function learns from its own data. Every deal above a defined size threshold is reviewed after closing, whether won or lost. Findings are aggregated quarterly into a written analysis covering why deals were won, why deals were lost, which objections appeared most frequently, and at which stage the most deals were lost. Those findings update the sales playbook directly. The playbook is not a document written once. It is a living record of what has actually worked in this market with this product at this price point, revised every quarter.",
          "why_it_matters": "A sales team that does not examine its losses is paying tuition on the same lessons repeatedly. Win and loss analysis converts anecdotal experience into institutional knowledge. When the playbook is updated from actual deal evidence each quarter, it gets more accurate over time. When it is not, it slowly becomes a description of how the company used to sell rather than how it sells now. The connection between analysis and playbook update is the critical step. Analysis without a changed behavior is just reporting.",
          "audit_binary": "Is a win and loss analysis conducted on every deal above a defined threshold, aggregated into a quarterly findings report, and has that report produced at least two documented changes to the sales playbook or qualification criteria in the past six months?",
          "evidence": "Win and Loss Analysis Reports with Playbook Update Log",
          "evidence_example": "Quarterly win and loss analysis reports for at least two consecutive quarters, each showing deals analyzed, win reasons, loss reasons, top objections, and stage where most deals were lost. A playbook update log showing at least two changes made based on the findings, with the specific finding that prompted each change.",
          "example": "Q3 win and loss analysis: 24 deals analyzed, 9 won, 15 lost. Win reasons: strong ROI case cited in 8 of 9 wins, founder referral cited in 6 of 9. Loss reasons: competitor offered a payment plan option in 7 of 15 losses, proposal took more than five days in 5 of 15 losses. Playbook update 1: ROI calculation template added to the proposal stage, required for all deals above 10,000 euros. Playbook update 2: 48-hour proposal delivery standard added as a formal commitment, with a calendar block system to support it. Both changes tracked in the playbook update log with the source finding noted.",
          "false_positive_signals": [
            "Post-deal conversations happen informally after significant wins or losses, but findings are not documented or aggregated, making them anecdotes rather than a learning system.",
            "A win and loss log exists but findings have never produced a documented change to the playbook, qualification criteria, or coaching approach. The analysis is happening but the learning is not."
          ],
          "failure_signals": [
            "The same objections appear in lost deals for two or more consecutive quarters with no documented change to how the sales team handles them.",
            "The sales playbook has not been updated in more than six months despite win and loss data being available, suggesting the analysis is not connected to the playbook in practice."
          ],
          "prerequisite": "RS.7",
          "review_frequency": 4,
          "weights": {
            "impact": 8,
            "complexity": 7,
            "time_to_implement": 6,
            "direct_cost": 3
          }
        },
        {
          "level": 9,
          "headline": "Founder and Key-Person Independent Revenue",
          "plain_english": "The entire sales function operates without the founder and without dependency on any single salesperson, with no client above 25% of revenue and LTV:CAC above 3:1.",
          "observation": "Independence at Level 9 has two dimensions and both must be true. First, founder independence: the founder has not been involved in a pipeline review, a deal strategy conversation, or a pricing decision for at least two consecutive quarters. Second, key-person independence: no single salesperson is responsible for more than 40% of closed revenue. If the top performer left tomorrow, the system would absorb the loss without a crisis. Revenue concentration is also within policy: no single client accounts for more than 25% of total revenue, and LTV:CAC is above 3:1 before the company scales headcount further.",
          "why_it_matters": "A sales function that works without the founder but collapses if the top salesperson leaves has not achieved independence. It has transferred the dependency. True independence means the system produces results regardless of which specific individuals are currently in the roles. Revenue concentration matters for the same reason: a business where one client represents 30% of revenue is not a scalable sales system. It is one client relationship away from a significant problem. And LTV:CAC above 3:1 is the gate that must be cleared before scaling makes economic sense.",
          "audit_binary": "Has the entire sales function operated without founder involvement for at least two consecutive quarters, with no single salesperson above 40% of closed revenue, no single client above 25% of total revenue, and LTV:CAC above 3:1?",
          "evidence": "Sales Independence Record with Revenue Concentration Report",
          "evidence_example": "A record of sales leadership activity for two consecutive quarters confirming no founder involvement in deal reviews, deal coaching, or closing decisions. A revenue concentration report showing no salesperson above 40% of closed revenue and no client above 25% of total revenue. The current LTV:CAC calculation confirming the ratio is above 3:1.",
          "example": "Q2 and Q3: Head of Sales ran all pipeline reviews, managed three salespeople independently, supervised or closed all 51 deals. Founder reviewed the monthly revenue summary only. Salesperson concentration: top performer closed 34% of revenue, within the 40% limit. Client concentration: largest client represents 19% of revenue, within the 25% limit. LTV:CAC: 4.3:1, stable from prior quarter. No founder involvement in any deal decision documented across both quarters.",
          "false_positive_signals": [
            "The founder is not in pipeline reviews but is still the relationship owner for the three largest clients, meaning the revenue base is operationally independent but relationally founder-dependent.",
            "No single salesperson dominates closed revenue, but the sales leader is so central to the function that their departure would be the equivalent of a founder departure in terms of disruption."
          ],
          "failure_signals": [
            "LTV:CAC is below 3:1 and the company is adding salespeople anyway. It is scaling the cost of acquiring customers faster than the economics can support.",
            "A single salesperson departure would reduce monthly closed revenue by more than 30% with no system or pipeline capable of redistributing the workload."
          ],
          "prerequisite": "TC.6",
          "review_frequency": 2,
          "weights": {
            "impact": 9,
            "complexity": 9,
            "time_to_implement": 8,
            "direct_cost": 7
          }
        },
        {
          "level": 10,
          "headline": "Institutional Revenue Engine",
          "plain_english": "The company operates a self-governing revenue system that produces predictable, growing, and healthy revenue independently of the founder, with LTV:CAC above 4:1 and forecast accuracy within 15%.",
          "observation": "At Level 10, the revenue system is complete and self-sustaining. Pricing is documented and enforced. The pipeline is centralized and current. A named owner holds the revenue target. The process has stage-exit criteria and is audited regularly. Outcome metrics and LTV:CAC are reviewed monthly. Forecasting happens mid-month and drives interventions. Cross-domain integrations are active. Win and loss analysis updates the playbook every quarter. Leadership is independent. And all of this is documented in an annual revenue governance report reviewed by an external party, confirming the system would survive a full change of ownership without disruption.",
          "why_it_matters": "Predictable, founder-independent, well-distributed revenue with a 4:1 or better LTV:CAC is the financial proof of a transferable business. An acquirer, investor, or lender looking at this company does not just see a revenue number. They see a system that will continue producing that revenue after the current team changes. That is what converts a revenue number into a valuation multiple. A ratio above 4:1 means the company is creating meaningful value with every customer it acquires, and improving that ratio over time means the system is getting better, not just bigger.",
          "audit_binary": "Has the revenue system operated without founder involvement for at least four consecutive quarters, with LTV:CAC above 4:1, forecast accuracy within 15% in each quarter, no client above 25% of total revenue, no salesperson above 40% of closed revenue, and has the system been documented in an annual revenue governance report reviewed by at least one external party?",
          "evidence": "Annual Revenue Governance Report with External Review Record",
          "evidence_example": "An annual report showing: quarterly revenue results and trend, forecast accuracy per quarter, LTV:CAC and payback period trend, revenue concentration by client and by salesperson, ramp performance for new hires in the period, win and loss summary, and a record of founder non-involvement across all four quarters. Reviewed and signed by at least one external advisor or board member.",
          "example": "Annual revenue governance report. Revenue grew from 2.1 million to 2.8 million euros, up 33%. Forecast accuracy: Q1 93%, Q2 88%, Q3 94%, Q4 91%, all within the 15% target. LTV:CAC: 4.7:1, up from 4.1:1 the prior year. Payback period: 7.2 months. Largest client: 19% of revenue. Top salesperson: 34% of closed revenue. Four new hires onboarded, all reached 80% of quota by day 62. Win rate improved from 34% to 41% following the Q2 playbook update. Report reviewed by an advisory board member who flagged one concentration risk in the enterprise segment. Action plan documented. Founder last involved in a sales decision: 18 months ago.",
          "false_positive_signals": [
            "Revenue is growing strongly and operational metrics are all healthy, but LTV:CAC is below 4:1. The engine is producing volume but not yet compounding value at an institutional rate.",
            "The revenue system is fully documented and operationally independent, but the three largest clients are personally connected to the founder. Revenue transferability depends on relationship transition, not system transition."
          ],
          "failure_signals": [
            "LTV:CAC is below 4:1 or has declined for two consecutive quarters. The revenue engine is growing in volume while deteriorating in quality.",
            "A prospective acquirer's due diligence identifies revenue concentration, founder-dependent client relationships, or forecast unreliability as grounds for a valuation discount."
          ],
          "prerequisite": "RS.9",
          "review_frequency": 1,
          "weights": {
            "impact": 10,
            "complexity": 9,
            "time_to_implement": 9,
            "direct_cost": 8
          }
        }
      ]
    },
    "TC": {
      "id": "TC",
      "name": "Talent & Culture",
      "purpose": "Build and maintain the human system that allows the company to operate, grow, and endure beyond any individual.",
      "cxo_persona": "Chief People Officer",
      "description": "How the company defines roles, recruits people consistently, onboards them effectively, measures and develops their performance, builds an intentional culture, and creates leadership depth that reduces dependence on any single person. A mature talent and culture domain means the company attracts and retains the right people systematically, develops leaders from within, and maintains a culture that does not depend on the founder's presence to hold together.",
      "direction": {
        "name": "People and Culture Strategy",
        "purpose": "Define how the company attracts, develops, and retains the people required to achieve its mission, and how the culture is deliberately built and maintained as the company grows.",
        "required_outputs": [
          "role_definition_model",
          "hiring_criteria_and_process",
          "employee_onboarding_program",
          "company_values_and_behavioral_standards",
          "performance_management_system",
          "leadership_development_model",
          "compensation_framework",
          "people_review_rhythm"
        ],
        "primary_owner": "Chief People Officer",
        "contributors": [
          "CEO",
          "operations_lead",
          "department_heads"
        ],
        "minimum_standard": "One documented people strategy exists covering role definitions, hiring standards, onboarding, performance expectations, and the intended company culture, reviewed at least quarterly.",
        "review_frequency": 4,
        "questions_to_answer": [
          "What type of person thrives in this company, described in observable behavioral terms rather than personality adjectives?",
          "What behaviors define the culture the company wants, and what behaviors are incompatible with it regardless of performance?",
          "What does the voluntary attrition rate reveal about whether the company is retaining the right people?",
          "Which current team members have the potential to lead a function in 12 to 24 months, and what is being done to prepare them?",
          "What does the company do when a high performer consistently violates the stated values?",
          "Is the current compensation structure attracting and retaining the quality of people the company needs, and how does it compare to the market?",
          "What would happen to each core function if the person currently running it left this week?",
          "What would a new employee conclude about the company culture from their first 30 days, without anyone telling them what it is supposed to be?"
        ]
      },
      "levels": [
        {
          "level": 1,
          "headline": "Roles Defined",
          "plain_english": "Every person in the company has a written description of what their role is for, what they are responsible for, and what good performance looks like.",
          "observation": "At Level 1, a role definition exists for every current position. Each one states the purpose of the role, its five to eight key responsibilities, the reporting line, and what the role is expected to produce. Before any new hire begins, their role definition exists in writing. Nobody joins the company without a clear written answer to the question of what they are there to do.",
          "why_it_matters": "A job title without a role definition is a label. It tells someone what they are called but not what they own, what they are responsible for producing, or how their work connects to the company's goals. Without role definitions, overlap and gaps are inevitable. People either duplicate effort or leave work undone, each assuming it belongs to someone else. The role definition is the first act of making expectations explicit.",
          "audit_binary": "Does every current employee have a written role definition covering purpose, key responsibilities, reporting line, and the primary output the role is expected to produce, reviewed within the past 12 months?",
          "evidence": "Role Definition Library",
          "evidence_example": "A set of written role definitions, one per current employee or role type, each covering: role purpose in one sentence, five to eight key responsibilities, reporting line, and the primary measurable output. Last reviewed within 12 months.",
          "example": "A company with eight employees has eight role cards in a shared document. Each lists: what the role exists to achieve, what the person does weekly, who they report to, and what the most important thing they produce is. When a role changes significantly, the card is updated before the person is told about the change. Every new hire reads their role card on day one.",
          "false_positive_signals": [
            "Job titles and reporting lines exist in an org chart but no written description of responsibilities or expected outputs accompanies them.",
            "Role definitions were written during the company's founding and have not been updated since, meaning they describe the original vision of each role rather than what people actually do today."
          ],
          "failure_signals": [
            "Employees frequently ask who is responsible for specific decisions or tasks because the boundaries between roles are unclear.",
            "Performance conversations are difficult or avoided because there is no written reference point for what the role is supposed to produce."
          ],
          "prerequisite": "LD.3",
          "review_frequency": 2,
          "weights": {
            "impact": 9,
            "complexity": 2,
            "time_to_implement": 2,
            "direct_cost": 1
          }
        },
        {
          "level": 2,
          "headline": "People Information Organized",
          "plain_english": "All information about the company's people lives in one place that any authorized team member can access without hunting.",
          "observation": "At Level 2, there is a central people repository. It holds everything the company needs to manage its workforce: role definitions, employment records, contracts, compensation information, performance history, training and development records, and leave and availability data. An HR question about any employee can be answered in under five minutes without emailing the founder or searching through multiple tools. The information is current, organized, and in one place.",
          "why_it_matters": "People information scattered across email threads, personal drives, and memory is not actually available to the company. It is available to the individuals who hold it. When a manager needs to review someone's employment history, check their current salary against their performance, or confirm their notice period before a difficult conversation, that information needs to be findable in seconds. Organized people information is the foundation of professional HR management and of any people decision that needs to be made under time pressure.",
          "audit_binary": "Is there a single people information repository containing current records for every employee covering role definition, employment terms, performance history, and training records, accessible to authorized team members and updated within the past 90 days?",
          "evidence": "People Information Repository",
          "evidence_example": "A shared HR system, folder, or equivalent containing current records for every employee with at minimum: role definition, contract or employment terms summary, most recent performance review, and any training or development activities completed. Updated within 90 days.",
          "example": "A shared HR folder organized by employee with six standard documents per person: role definition, contract summary, most recent performance review, a training log, a compensation record, and a one-page onboarding completion record. Updated when anything changes. A manager preparing for a performance conversation can pull the complete history for any team member in under three minutes without asking anyone.",
          "false_positive_signals": [
            "Employee records exist across a payroll system, a separate performance tool, a Google Drive folder, and the founder's email, with no single location that is considered the authoritative source.",
            "A people repository exists but records for some employees have not been updated in more than six months, making it a partial picture rather than a complete and current one."
          ],
          "failure_signals": [
            "When a difficult HR conversation needs to happen, the manager has to spend time reconstructing the employee's history before they can have it, because the information is not organized or accessible.",
            "An employment dispute arises and the company cannot quickly produce a complete and accurate record of the relevant history because no organized repository exists."
          ],
          "prerequisite": "TC.1",
          "review_frequency": 4,
          "weights": {
            "impact": 8,
            "complexity": 2,
            "time_to_implement": 3,
            "direct_cost": 2
          }
        },
        {
          "level": 3,
          "headline": "People Function Owned and Hiring Criteria Defined",
          "plain_english": "One person is accountable for talent and culture outcomes, and every role has written hiring criteria that any interviewer can apply consistently.",
          "observation": "At Level 3, two things are true. One named person owns the people function and can answer, at any moment, what the current team looks like, which roles are open, who is performing well, and who is at risk of leaving. And for every role in the company, a set of hiring criteria exists in writing: the skills, experience, and behavioral qualities a successful candidate must demonstrate, described specifically enough that two different interviewers evaluating the same candidate reach the same conclusion.",
          "why_it_matters": "Hiring without written criteria is pattern-matching to whoever hired last. Interviewers unconsciously favor candidates who remind them of existing team members, or who are personally likeable, regardless of whether those qualities predict job performance. Written criteria replace subjective impression with structured evaluation. Over time, consistent criteria produce a more diverse, higher-performing team than gut-feel hiring does. And a named people owner means that talent and culture have an accountable steward rather than being everyone's informal responsibility.",
          "audit_binary": "Is there one named person accountable for the talent and culture function who can produce a current people health summary without gathering information from others, and do written hiring criteria exist for every current role type that two interviewers could apply independently to reach the same hiring decision?",
          "evidence": "People Ownership Assignment with People Health Summary and Hiring Criteria Documents",
          "evidence_example": "A written ownership assignment naming the people owner and their accountability. A current people health summary showing team composition, open roles, and performance status. Hiring criteria documents for every role type currently filled or being recruited for.",
          "example": "The HR lead is named in the accountability chart as owner of talent and culture outcomes. They produce a quarterly people health summary showing: current headcount by function, open roles and days open, average tenure, and a traffic light rating for each team member based on performance and engagement signals. Hiring criteria for Account Manager include: demonstrated experience managing a B2B sales pipeline with documented conversion data, can describe a structured discovery process they use, has worked in a company with fewer than 50 staff, and displays specific behaviors in the interview such as preparing questions about the role and following up within 24 hours. Each criterion is rated yes, partial, or no in the post-interview debrief form.",
          "false_positive_signals": [
            "Hiring decisions are made by whichever manager has the open role, with no shared criteria and no central visibility into the overall hiring picture across the company.",
            "Hiring criteria exist for some roles but not others, and are written at a level of abstraction such as must be a team player that cannot be consistently evaluated across interviewers."
          ],
          "failure_signals": [
            "New hires frequently fail to meet performance expectations within the first 90 days, suggesting the hiring criteria are not predicting job performance accurately.",
            "When leadership asks about the state of the team, nobody can answer comprehensively without spending time gathering information from multiple managers."
          ],
          "prerequisite": "TC.2",
          "review_frequency": 4,
          "weights": {
            "impact": 9,
            "complexity": 3,
            "time_to_implement": 3,
            "direct_cost": 1
          }
        },
        {
          "level": 4,
          "headline": "Standardized Hiring, Onboarding, and Values",
          "plain_english": "Every candidate goes through the same hiring process, every new employee follows the same onboarding program, and the company's values are written as observable behaviors that are used in hiring and performance decisions.",
          "observation": "At Level 4, three standards govern how people enter the company and understand what it stands for. Hiring: every candidate for a given role goes through the same stages in the same order, is evaluated against the same written criteria, and the hiring decision is recorded with a rationale. Onboarding: every new employee follows the same program in their first 30 days covering company direction, role expectations, tools and systems, and the key relationships they need to build. Values: the company's values are written as specific observable behaviors, not abstract nouns, and are actively used in both the hiring evaluation and the performance review rather than living only on a wall or a website.",
          "why_it_matters": "Standardizing hiring, onboarding, and values together is what creates a coherent culture rather than a collection of individual subcultures shaped by whoever manages each team. When the same values are used to evaluate candidates at the front door and to evaluate performance quarterly, culture becomes a system rather than an aspiration. An employee who joined six months ago and one who joined six years ago should both be able to describe the company's values through the same concrete behaviors, because they experienced those values being applied consistently from day one.",
          "audit_binary": "Does every candidate go through a documented hiring process with a written decision record, does every new employee complete the same 30-day onboarding program with a signed completion checklist, and are the company's values written as observable behaviors actively used in the most recent round of hiring evaluations and the most recent performance reviews?",
          "evidence": "Hiring Process Document with Decision Records, Employee Onboarding Program with Completion Checklists, and Values Document with Active Usage Evidence",
          "evidence_example": "A hiring process document showing stages and evaluation criteria. Decision records for the last three hires showing the rationale. An onboarding program document with the 30-day schedule. Signed completion checklists from the last three new hires. A values document with behavioral descriptions, plus evidence that values criteria appeared in the last hiring evaluation form and the last round of performance reviews.",
          "example": "Hiring process: application review, a 30-minute values and culture call, a structured skills interview using the written criteria, a practical task, and a final decision debrief. Every decision is recorded with a score per criterion and a written rationale. Onboarding: week one covers company direction, the accountability chart, and tool access. Week two includes shadowing at least two colleagues in different functions. Week three covers the role's first 90-day deliverable. A 30-day check-in with the manager closes the program. Values: three company values written as behaviors. Ownership means: when you say you will do something, you do it, and if something changes you communicate before the deadline, not after. Used in the interview debrief rubric and in the quarterly performance review under each employee's name.",
          "false_positive_signals": [
            "Company values are displayed on the website and in the office but cannot be found on any hiring evaluation form or performance review template, revealing they are decoration rather than an operating standard.",
            "Onboarding exists in principle but varies significantly between managers and between departments, meaning some new hires receive a structured introduction and others figure things out by asking colleagues."
          ],
          "failure_signals": [
            "Employees who have been with the company for six months describe the company's values differently from each other, revealing that the values were communicated inconsistently during onboarding.",
            "A hiring decision is challenged internally because different interviewers applied different standards, revealing that the hiring process is not standardized in practice."
          ],
          "prerequisite": "TC.3",
          "review_frequency": 4,
          "weights": {
            "impact": 9,
            "complexity": 5,
            "time_to_implement": 5,
            "direct_cost": 2
          }
        },
        {
          "level": 5,
          "headline": "Performance Measured",
          "plain_english": "Every employee has a numeric performance target, receives a structured quarterly review, and the company tracks four people metrics monthly including voluntary attrition rate.",
          "observation": "At Level 5, performance is measured rather than felt. Every role has a scorecard with at least one numeric KPI linked to the role's primary output. Quarterly reviews happen for all employees using a standard format: results against the scorecard, behavioral feedback referenced against the values, one development goal, and the priorities for the next quarter. Four people metrics are tracked monthly: voluntary attrition rate, time-to-hire for open roles, eNPS where feasible, and internal promotion rate over a rolling 12-month window.",
          "why_it_matters": "Voluntary attrition rate is the people equivalent of churn rate in customer success. A company losing 25% of its team annually through voluntary departures is rebuilding a quarter of itself every year, at enormous cost in hiring, onboarding, and lost institutional knowledge. Tracking it monthly means the trend is visible before it becomes structural. eNPS answers the question that attrition answers too late: would your team recommend working here? Internal promotion rate measures whether the company is developing people or consuming them.",
          "audit_binary": "Does every employee have a numeric performance target reviewed quarterly using a standard format, are four people metrics including voluntary attrition rate tracked monthly, and has a metric declining for two consecutive months triggered a documented people investigation in the past six months?",
          "evidence": "Performance Scorecard Library with Quarterly Review Records and People Metrics Dashboard",
          "evidence_example": "Written scorecards for every current employee with at least one numeric KPI. Quarterly review records for all employees in the past 12 months. A monthly people metrics report for at least three consecutive months showing voluntary attrition rate, time-to-hire, eNPS or equivalent, and internal promotion rate.",
          "example": "Every role has a scorecard. Account Manager scorecard: primary KPI is closed revenue per month with a target of 40,000 euros, secondary KPI is pipeline stage accuracy with a target of 90% of deals correctly staged. Quarterly reviews use a standard four-section form: KPI results, values rating with specific behavioral examples, development goal agreed for next quarter, and top three priorities. Monthly people metrics: voluntary attrition rate 12% annualized, target below 15%. Time-to-hire for last three roles: 28 days average, target below 35 days. eNPS from last quarterly pulse: 31, target above 20. Internal promotion rate over 12 months: 2 of 4 leadership openings filled internally, target above 50%.",
          "false_positive_signals": [
            "Annual performance reviews happen but quarterly check-ins are informal and unrecorded, meaning performance conversations happen too infrequently to catch and correct problems before they become serious.",
            "People metrics such as headcount and open roles are tracked but voluntary attrition rate is not calculated separately from total departures, hiding whether the company is losing people by choice or by necessity."
          ],
          "failure_signals": [
            "Voluntary attrition is above 20% annualized with no documented investigation into why people are leaving or what pattern exists across departures.",
            "Employees report in exit interviews that they were unclear about their performance expectations and had not received useful feedback, revealing that the review process is happening on paper without being meaningful in practice."
          ],
          "prerequisite": "LD.5",
          "review_frequency": 4,
          "weights": {
            "impact": 9,
            "complexity": 5,
            "time_to_implement": 5,
            "direct_cost": 2
          }
        },
        {
          "level": 6,
          "headline": "Proactive Talent Development",
          "plain_english": "High-potential employees have structured development plans and are being tested in expanded roles, and the company maintains relationships with candidates for key positions before those positions become vacant.",
          "observation": "At Level 6, talent development is proactive rather than reactive. High-potential employees are formally identified in the annual talent review, given a written development plan showing the target role, the timeline, and the specific activities that will prepare them, and tested through meaningful expanded responsibilities rather than just theoretical training. Separately, the company maintains a candidate pipeline for its two or three most critical and frequently hired roles, with active relationships that can be activated when a vacancy opens rather than starting from zero.",
          "why_it_matters": "Reactive talent development means the company promotes people when positions open rather than when they are ready. The result is consistently promoted-too-soon leaders who struggle at the next level and drag their teams down with them. Proactive development means the company knows who its next leaders are, is actively preparing them, and has tested their readiness before they are needed. The candidate pipeline matters for the same reason: a company that starts recruiting from zero when a role opens consistently makes worse hires under time pressure than one that activates existing relationships.",
          "audit_binary": "Are at least two high-potential employees formally identified with a written development plan showing a target role, timeline, and specific activities, tested in at least one expanded responsibility in the past 90 days, and does an active candidate pipeline exist for at least two key roles with at least three candidates per role contacted within the past 90 days?",
          "evidence": "Leadership Development Plans with Expanded Role Records and Candidate Pipeline Log",
          "evidence_example": "Written development plans for at least two identified high-potential employees, each showing target role, timeline, development activities, and evidence of at least one expanded responsibility completed in the past 90 days. A candidate pipeline log for at least two key roles showing at least three candidates per role with last contact date within 90 days.",
          "example": "Annual talent review identified two high-potential employees. First: operations coordinator identified as potential operations manager in 18 months. Development plan: lead the monthly operations review for the next two quarters, complete one external management training program, shadow the current operations manager on all cross-domain integration activities. Already leading the monthly review independently for three months. Second: senior account manager identified as potential sales lead in 24 months. Development plan: manage two junior salespeople, lead the weekly pipeline review, produce the monthly sales metrics report. Candidate pipeline: for the account manager role, six candidates are tracked in a CRM. Three have been contacted in the past 60 days with a warm message. When the next vacancy opens, the first call is to these six rather than posting a job advertisement.",
          "false_positive_signals": [
            "High-potential employees are informally recognized in management conversations but no written development plan exists and they have not been given any expanded responsibility to test their readiness.",
            "A candidate pipeline is described as existing but consists of LinkedIn connections rather than active relationships with people who have been contacted and have expressed interest."
          ],
          "failure_signals": [
            "When a leadership role becomes vacant, the company has no internal candidate ready and spends 60 to 90 days searching externally under time pressure, often making a compromise hire.",
            "A talented employee leaves the company citing lack of growth opportunity, revealing that their potential was recognized informally but never translated into a structured development plan or timeline."
          ],
          "prerequisite": "TC.5",
          "review_frequency": 4,
          "weights": {
            "impact": 8,
            "complexity": 6,
            "time_to_implement": 6,
            "direct_cost": 3
          }
        },
        {
          "level": 7,
          "headline": "Cross-Domain People Integration",
          "plain_english": "The people function formally connects to leadership, sales, operations, and customer success through shared artifacts that are used in real decisions every quarter.",
          "observation": "At Level 7, the people function does not operate in isolation. Four integration points exist. Leadership receives a current succession matrix showing who is being developed for every key role and their readiness level, updated at least twice per year. Sales receives new hire ramp records showing how long it took each recent hire to reach their performance target, informing future hiring and onboarding decisions. Operations receives a skill coverage map showing which critical delivery tasks are covered by more than one trained person and which represent single-point-of-failure risk. Customer success receives a development plan for every customer-facing team member aligned to the skills that drive customer outcomes.",
          "why_it_matters": "People decisions affect every domain but are rarely made with input from every domain. A hiring decision made without understanding operational skill coverage can create a new gap while filling an old one. A development plan built without understanding what skills drive customer outcomes can invest in the wrong capabilities. Cross-domain people integration converts the people function from an administrative support role into a strategic contributor that shapes organizational capability across the whole company.",
          "audit_binary": "Do documented integration artifacts connect TC to LD, RS, OD, and CS, with evidence that each artifact was used to inform a decision in the past quarter?",
          "evidence": "Cross-Domain People Integration Artifacts: Succession Matrix for Leadership, Ramp Performance Records for Sales, Skill Coverage Map for Operations, and Customer-Facing Development Plans for Customer Success",
          "evidence_example": "Four artifacts, each with evidence of use in the past quarter: a succession matrix shared with leadership showing readiness levels for all key roles, ramp performance records shared with the sales lead showing time-to-quota for recent hires, a skill coverage map shared with the operations lead showing single-point-of-failure risks, and development plans for customer-facing team members aligned to CS outcome drivers.",
          "example": "LD integration: the succession matrix is reviewed in the Q3 leadership strategy session. Last quarter it revealed that the finance function has no internal successor, prompting the decision to include a finance management module in the operations lead's development plan. RS integration: ramp records for the last four sales hires show an average of 52 days to reach 80% of quota. Shared with the sales lead, who used this to set a formal 60-day ramp target and adjust the onboarding program. OD integration: the skill coverage map shows that only one person is trained to conduct the technical discovery session. Shared with the operations lead, who scheduled cross-training for a second team member. CS integration: the development plan for the customer success lead includes training in renewal conversation facilitation after CS data showed renewal conversations as the function's weakest performance area.",
          "false_positive_signals": [
            "HR communicates with other departments about people matters informally and responsively, but no structured artifacts exist and people intelligence does not formally feed decisions in other domains.",
            "A succession matrix exists and is maintained by HR but is never shared with leadership or used in the strategic planning process."
          ],
          "failure_signals": [
            "A key operational team member leaves and the company discovers too late that they were the only person trained for a critical delivery task, a risk the skill coverage map would have surfaced.",
            "Sales ramp times are consistently longer than expected but the onboarding program has not been updated because no formal feedback loop exists between sales performance and people program design."
          ],
          "prerequisite": "TC.6",
          "review_frequency": 4,
          "weights": {
            "impact": 8,
            "complexity": 7,
            "time_to_implement": 6,
            "direct_cost": 3
          }
        },
        {
          "level": 8,
          "headline": "Systematic People Improvement",
          "plain_english": "The company measures culture through regular employee surveys, analyzes every voluntary departure, and benchmarks compensation against the market, with findings used to update people programs quarterly.",
          "observation": "At Level 8, the people function improves through three systematic cycles. Culture measurement: a quarterly pulse survey and annual eNPS generate data on how the team experiences the company. The results are reviewed by the people owner, shared with leadership, and used to identify and address cultural gaps before they drive attrition. Departure analysis: every voluntary departure is analyzed within two weeks to understand the reason, the point at which the employee began disengaging, and whether an early signal was missed. Compensation benchmarking: market compensation data for every key role is reviewed annually and the company's compensation structure is adjusted where gaps threaten retention.",
          "why_it_matters": "Culture is the sum of what people actually experience at work, not the sum of what the company says it values. The only way to know whether the experienced culture matches the intended culture is to measure it. Departure analysis is the equivalent of churn analysis: each voluntary departure is a lesson. If it is analyzed and the lesson is applied, the same departure reason becomes less likely to recur. Compensation benchmarking prevents the slow drain of losing high performers to competitors offering 20% more for equivalent work, not because the company did not value those people, but because nobody checked.",
          "audit_binary": "Is a culture pulse survey conducted at least quarterly with results reviewed by leadership and at least two documented people program updates made as a result in the past six months, has every voluntary departure been analyzed within two weeks with findings documented, and has compensation been benchmarked against market data in the past 12 months with adjustments made where gaps were identified?",
          "evidence": "Culture Survey Results with Leadership Review Records and Program Update Log, Departure Analysis Log, and Compensation Benchmarking Report",
          "evidence_example": "Quarterly culture survey results for at least two consecutive quarters with leadership review records and at least two documented program updates. A departure analysis log with an entry for every voluntary departure in the past six months. A compensation benchmarking report from the past 12 months showing market comparison by role and any adjustments made.",
          "example": "Culture pulse survey sent every quarter with 10 questions covering clarity, autonomy, recognition, growth, and management quality. Last quarter: average score 6.8 out of 10, down from 7.2. Two lowest scores: recognition and growth opportunity. Leadership reviewed the results. Two program updates: a monthly peer recognition message added to the all-hands meeting, and a biannual career conversation added to the performance review cycle. Departure analysis: three voluntary departures in the past six months. Common theme in two of three: the employees felt their growth path was unclear. Finding applied: career pathing conversation added to the onboarding program at the 90-day mark. Compensation benchmarking: all roles benchmarked against market data in January. Two roles found to be more than 15% below market. Salaries adjusted in the Q2 compensation review.",
          "false_positive_signals": [
            "An annual engagement survey is conducted but results are shared with leadership once and then archived, with no documented program changes made as a result.",
            "Departure conversations happen informally but findings are not documented and no pattern analysis is conducted, meaning each departure is treated as a one-off event rather than a data point."
          ],
          "failure_signals": [
            "Voluntary attrition has been above target for two consecutive quarters but no root cause analysis has been conducted, no departure pattern has been identified, and no program has been changed in response.",
            "The company has lost two or three high performers in the past 12 months who cited compensation as a reason for leaving, but no market benchmarking has been conducted to understand whether the pattern will continue."
          ],
          "prerequisite": "TC.7",
          "review_frequency": 4,
          "weights": {
            "impact": 8,
            "complexity": 7,
            "time_to_implement": 6,
            "direct_cost": 4
          }
        },
        {
          "level": 9,
          "headline": "Independent People Leadership",
          "plain_english": "A dedicated people leader owns hiring, development, culture, and retention without founder involvement, and a current succession matrix covers every key role in the company.",
          "observation": "At Level 9, a named people leader owns the full talent and culture function independently. They make hiring decisions, approve exits, manage the performance review cycle, run culture surveys, maintain the candidate pipeline, and update the succession matrix without routing decisions through the founder. The founder reviews the quarterly people health summary and the annual people governance report, but is not involved in individual people decisions. The succession matrix is current, names a trained candidate for every key role, and is reviewed at least twice per year.",
          "why_it_matters": "Founder involvement in individual people decisions is one of the most subtle forms of founder dependency, and one of the hardest to remove. When team members know that the founder is the real decision-maker on who gets hired, promoted, or let go, they bypass the people function and go directly to the founder. That defeats the purpose of having a people function entirely. True independence means the people leader has real authority, the team respects it, and the founder's involvement is governance-level rather than operational.",
          "audit_binary": "Has the people leader made at least four significant people decisions in the past two quarters without founder involvement, is the succession matrix current with a named and partially developed candidate for every key role, and has the voluntary attrition rate been within target for at least two consecutive quarters under independent people leadership?",
          "evidence": "People Leadership Independence Record with Decision Log, Current Succession Matrix, and Attrition Performance Record",
          "evidence_example": "A decision log showing at least four significant people decisions made by the people leader independently in the past two quarters with no founder involvement. A current succession matrix reviewed within the past six months. Attrition rate records for the past two quarters showing performance within the defined target.",
          "example": "The Head of People made four independent decisions in the past two quarters: hired a new project manager from the candidate pipeline without founder interview, approved an exit process for an underperforming team member, adjusted the compensation for two roles following the benchmarking exercise, and launched a leadership development cohort for three identified high-potential employees. The founder was informed of each decision through the quarterly people health summary but was not consulted beforehand. Succession matrix: reviewed in June and December. Every key role has a named candidate with a readiness level and at least one development activity completed. Voluntary attrition: 11% annualized in Q2, 9% in Q3, both within the 15% target.",
          "false_positive_signals": [
            "A Head of People holds the title and runs HR operations independently, but every hiring decision above a certain level and every exit decision still requires the founder's approval before proceeding.",
            "The succession matrix names candidates for key roles but nobody has been given any expanded responsibility or tested in a meaningful way, making the matrix aspirational rather than evidence-based."
          ],
          "failure_signals": [
            "Team members bypass the people leader and go directly to the founder for career conversations, compensation questions, and role change requests, revealing that the founder is still the real decision-maker in people matters.",
            "A key role has been vacant for more than 60 days because the hiring process requires founder involvement at multiple stages and the founder's schedule is the bottleneck."
          ],
          "prerequisite": "LD.9",
          "review_frequency": 2,
          "weights": {
            "impact": 9,
            "complexity": 8,
            "time_to_implement": 8,
            "direct_cost": 5
          }
        },
        {
          "level": 10,
          "headline": "Institutional Talent System",
          "plain_english": "The company runs a self-sustaining people system with stable or improving culture metrics, voluntary attrition below target, and more than half of leadership openings filled internally, governed and reviewed annually by an external party.",
          "observation": "At Level 10, all people systems are running together and producing compound results. Roles are defined. People information is organized. Hiring and onboarding are standardized. Values are lived rather than stated. Performance is reviewed quarterly. Leadership is being developed from within. Culture is measured and improving. Compensation is benchmarked annually. Cross-domain integration is active. People leadership is independent. And the results are documented in an annual people governance report reviewed by an external party, confirming that the human system of the company is as reliable and as transferable as any other operating system.",
          "why_it_matters": "The talent system is the company's compounding human asset. Each person hired well, onboarded consistently, developed deliberately, and retained long enough to contribute meaningfully adds to an organizational capability that is harder to replicate than any product or process. An acquirer evaluating this company does not just see headcount. They see a system that reliably produces capable, culturally aligned people at every level. An internal promotion rate above 50% is the most concrete evidence that this system is working: the company is not consuming people, it is developing them.",
          "audit_binary": "Has the people system operated without founder involvement for at least four consecutive quarters, with voluntary attrition within target, eNPS above a defined threshold, and more than 50% of leadership openings filled internally, documented in an annual people governance report reviewed by at least one external party?",
          "evidence": "Annual People Governance Report with External Review Record",
          "evidence_example": "An annual report showing: quarterly voluntary attrition rate, quarterly eNPS or equivalent, internal vs. external hire ratio for leadership roles, succession matrix readiness scores, departure analysis findings and program updates made, compensation benchmarking outcomes, and a record of founder non-involvement across all four quarters. Reviewed by at least one external HR advisor, board member, or organizational consultant.",
          "example": "Annual people governance report. Voluntary attrition: Q1 11%, Q2 9%, Q3 10%, Q4 8%, all within the 15% target and showing an improving trend. eNPS: Q1 28, Q2 31, Q3 34, Q4 37, improving every quarter. Leadership openings filled in the past year: four openings, three filled internally from the development pipeline, one filled externally for a specialist skill not available internally. Internal rate: 75%. Succession matrix: all six key roles have a candidate at readiness level 2 or above. Departure analysis: eight voluntary departures, five analyzed, two common patterns found, two program updates made. Compensation benchmarked in February, two adjustments made. Founder involvement in people decisions: zero in the past 12 months. Report reviewed by an independent HR advisor who recommended formalizing the career pathing conversation into a bi-annual structured session. Added to the people calendar for Q2.",
          "false_positive_signals": [
            "People metrics are positive and the system appears mature, but most leadership positions are still filled externally because the internal development program has not yet produced candidates who are ready when openings arise.",
            "An annual people report is produced and reviewed internally but has never been presented to an external party, meaning there is no independent validation of the data or the conclusions."
          ],
          "failure_signals": [
            "Voluntary attrition has risen above target for two consecutive quarters with no documented root cause analysis, no departure pattern identified, and no program changes made in response.",
            "An external review of the people function identifies that the culture described in the governance report differs materially from what employees report experiencing, revealing a gap between the documented system and the lived reality."
          ],
          "prerequisite": "TC.9",
          "review_frequency": 1,
          "weights": {
            "impact": 10,
            "complexity": 9,
            "time_to_implement": 9,
            "direct_cost": 7
          }
        }
      ]
    },
    "TI": {
      "id": "TI",
      "name": "Technology & Infrastructure",
      "purpose": "Provide the systems, data, and automation that allow the company to operate efficiently, make decisions from evidence, and scale without proportional increases in manual work.",
      "cxo_persona": "Chief Technology Officer",
      "description": "How the company selects, manages, integrates, and evolves its technology stack, from the basic inventory of tools through to a connected data platform that supports every other domain. Technology and infrastructure is the only domain whose maturity directly enables the measurement level of every other domain. TI.5, the business intelligence dashboard level, appears as a prerequisite across leadership, product, brand, revenue, operations, and customer success because dashboards are what converts activity into visible, manageable performance.",
      "direction": {
        "name": "Technology and Infrastructure Strategy",
        "purpose": "Define how technology supports the company's operations, data visibility, automation, and long-term scalability, and how the technology stack evolves deliberately as the company grows.",
        "required_outputs": [
          "system_inventory",
          "data_management_model",
          "access_control_policy",
          "integration_architecture",
          "automation_program",
          "business_intelligence_framework",
          "security_and_monitoring_model",
          "technology_roadmap"
        ],
        "primary_owner": "Chief Technology Officer",
        "contributors": [
          "CEO",
          "operations_lead",
          "product_lead",
          "finance_lead"
        ],
        "minimum_standard": "One documented technology strategy exists covering the system inventory, data management approach, access control policy, and a 12-month technology roadmap reviewed at least quarterly.",
        "review_frequency": 4,
        "questions_to_answer": [
          "What systems run the business today, and which three would cause the most damage if they failed for 48 hours?",
          "Where does every category of critical business data live, and who has access to it?",
          "What manual work is performed repeatedly each week that technology could eliminate, and what is the estimated cost of not automating it?",
          "How would the company know if a mission-critical system started degrading before a failure occurred?",
          "What technology decisions made in the past 12 months are creating technical debt that will need to be resolved in the next 12?",
          "If the company doubled in size next year, which systems would break first and what would it take to prevent that?",
          "How would the company respond if its most critical system was unavailable for a full business day?",
          "What proprietary data is the company collecting that could become a competitive asset, and is it being organized and protected accordingly?"
        ]
      },
      "levels": [
        {
          "level": 1,
          "headline": "System Inventory Documented",
          "plain_english": "Every software tool the company uses is listed in one document with its purpose, owner, and cost.",
          "observation": "At Level 1, a system inventory exists. It lists every software tool the company uses, what it is used for, who owns it, what it costs per month, and who has access to it. The inventory covers every category: communication, project management, CRM, accounting, file storage, HR, design, and any specialized tools. It reflects the actual stack today, not an aspirational one. Nothing is missing because nobody thought to add it.",
          "why_it_matters": "A company that cannot list its technology tools cannot manage them. It cannot control security because it does not know which systems hold sensitive data. It cannot control cost because subscriptions accumulate unnoticed. It cannot plan integrations because the map does not exist. The system inventory is not a technology exercise. It is the minimum act of organizational hygiene that makes every subsequent technology decision possible.",
          "audit_binary": "Is there a current written system inventory listing every software tool in use with its purpose, primary owner, monthly cost, and who has access, updated within the past six months?",
          "evidence": "System Inventory Document",
          "evidence_example": "A document or spreadsheet listing every tool with at minimum: tool name, category, primary use case, named owner, monthly or annual cost, and the team or individuals with access. Updated within the past six months.",
          "example": "A 14-row inventory covering: CRM, project management, accounting, communication, email, file storage, design, e-signature, invoicing, payments, marketing automation, HR records, video conferencing, and password management. Each row shows the tool name, what it is used for, who owns the subscription, the monthly cost, and which team members have access. Reviewed every six months. Last update added two tools that had been added informally and billed to personal credit cards.",
          "false_positive_signals": [
            "An IT person or the founder knows which tools are in use, but no written inventory exists that another team member could find and read without asking anyone.",
            "An inventory was created 18 months ago and has not been updated since, meaning four tools have been added and one has been cancelled without being recorded."
          ],
          "failure_signals": [
            "Leadership cannot immediately state the company's monthly technology spend or the number of active software subscriptions without manually checking bank statements.",
            "A team member leaves and the offboarding process reveals access to three tools that nobody knew they had because no inventory tracked it."
          ],
          "prerequisite": null,
          "review_frequency": 2,
          "weights": {
            "impact": 7,
            "complexity": 1,
            "time_to_implement": 1,
            "direct_cost": 1
          }
        },
        {
          "level": 2,
          "headline": "Critical Data Centralized",
          "plain_english": "Every category of critical business data lives in a shared company system, not on personal drives or in individual email inboxes.",
          "observation": "At Level 2, critical business records have a designated shared home. Customer data lives in the CRM or equivalent, not in individual contact lists. Financial records live in the accounting system, not in personal spreadsheets. Contracts live in a shared folder or document management system, not in the sales lead's inbox. Operational documents live in the shared workspace, not on the founder's laptop. Any team member with the right access can find any critical record without asking anyone.",
          "why_it_matters": "Data that lives on personal drives or in individual inboxes is not company data in any meaningful sense. It exists at the pleasure of the individual who holds it. When that person is sick, on holiday, or leaving the company, the data disappears from the company's view until they return or until someone asks for it. Centralizing critical data is the first act of converting individual information into a company asset, and it is the prerequisite for every subsequent data integration and business intelligence capability.",
          "audit_binary": "Is there a written data map showing where each category of critical business data lives, confirmed that no critical records exist only on personal drives or in individual inboxes, with at least one named backup accessor for every data category?",
          "evidence": "Data Location Map with Backup Access Confirmation",
          "evidence_example": "A document listing each critical data category, the system it lives in, who has primary access, and who has backup access. Confirmation that the last three employee departures did not result in any critical data becoming inaccessible.",
          "example": "Data map: customer records live in the CRM, accessible to the sales team and leadership. Financial records live in the accounting system, accessible to the finance lead and CEO. Contracts live in a shared legal folder, accessible to the operations lead and CEO. Project files live in the project management tool, accessible to the full delivery team. No critical category has fewer than two people with access. When the previous sales lead left, all customer data remained fully accessible through the CRM. No data was held in personal email or local files.",
          "false_positive_signals": [
            "A CRM exists and is used but the sales lead maintains a personal Excel file as their primary working list because the CRM is not kept current, making the personal file the real source of truth.",
            "Contracts are stored in a shared folder but the most recent six months of contracts live in the sales lead's email drafts because nobody moved them over."
          ],
          "failure_signals": [
            "When a team member leaves, a period of scrambling follows to recover data from their personal drive or email before their account is closed.",
            "Different team members report different figures when asked a straightforward data question because each is pulling from their own local copy rather than a shared authoritative source."
          ],
          "prerequisite": "TI.1",
          "review_frequency": 4,
          "weights": {
            "impact": 8,
            "complexity": 3,
            "time_to_implement": 3,
            "direct_cost": 2
          }
        },
        {
          "level": 3,
          "headline": "Named Technology Owner and Access Control",
          "plain_english": "One person is accountable for the technology stack, and a written policy controls who can access which systems and ensures access is removed within 24 hours when someone leaves.",
          "observation": "At Level 3, two things are true. One named person owns technology: they are accountable for the system inventory, the security of the stack, and any technology decision above a defined cost threshold. They do not need to be a developer. In a small company this could be the most technically capable team member or a fractional advisor. And a written access control policy defines which roles access which systems, at what permission level, and what the procedure is when someone joins or leaves. The last three employee departures had all system access removed within 24 hours.",
          "why_it_matters": "Access control is not an IT administration task. It is a basic security and liability management obligation. A former employee with active access to the CRM, accounting system, or file storage is a security risk and potentially a legal liability. A company that manages access through informal requests and memory is relying on nobody forgetting to do something important. A written policy with a named owner converts access management from a hope into a system.",
          "audit_binary": "Is there one named person accountable for the technology stack, a written access control policy defining system access by role and the offboarding procedure, and evidence that the last three employee departures had all system access removed within 24 hours?",
          "evidence": "Technology Ownership Assignment, Access Control Policy, and Offboarding Access Removal Records",
          "evidence_example": "A written ownership assignment naming the technology owner. An access control policy listing each system, the roles with access, and the permission levels. Records from the last three employee departures confirming all system access was removed within 24 hours.",
          "example": "Technology owner: the operations lead, accountable for the system inventory and any technology spend above 500 euros per month. Access control policy: four roles defined. Full access: CEO and operations lead. Sales access: CRM and communication tools only. Delivery access: project management, file storage, and design tools only. Finance access: accounting system and payment tools only. Offboarding procedure: a 12-item checklist run by the operations lead within 24 hours of any departure, covering access removal from every system in the inventory. Last three departures: access fully removed on the day of departure in all three cases, confirmed in the offboarding log.",
          "false_positive_signals": [
            "Access is managed informally by whoever set up each tool, with no written policy and no single person accountable, meaning access removal depends on whoever remembers to do it.",
            "An access control policy exists in writing but has not been updated in 12 months and does not reflect the current team composition or the tools added since it was written."
          ],
          "failure_signals": [
            "A departed employee still has active access to one or more company systems more than 48 hours after their last day, discovered during a routine audit.",
            "A current employee has access to a system they do not need for their role because nobody thought to restrict permissions when they changed roles six months ago."
          ],
          "prerequisite": "TI.2",
          "review_frequency": 4,
          "weights": {
            "impact": 8,
            "complexity": 3,
            "time_to_implement": 3,
            "direct_cost": 1
          }
        },
        {
          "level": 4,
          "headline": "Systems Integrated and Routine Tasks Automated",
          "plain_english": "Core systems share data automatically without manual re-entry, and at least five high-frequency repetitive tasks have been replaced by automated workflows.",
          "observation": "At Level 4, two standardizations exist. Integration: when a deal is closed in the CRM, the invoice is created automatically in accounting. When a contract is signed, a project card opens in the project management tool. Data entered once flows to wherever it is needed without a human carrying it. Automation: at least five tasks that were previously done manually by a person, such as sending a reminder email, generating a weekly report, or adding a new client to a communication list, now run automatically through a workflow tool. Every automated task has a documented owner and is tested quarterly.",
          "why_it_matters": "Manual data re-entry between systems is the most visible sign of an unintegrated technology stack. It wastes time, introduces errors, and creates the data inconsistencies that make metrics untrustworthy. Every hour spent copying data from one system to another is an hour that compounds: the same person performs the same task every week, every month, every year. Automation does not need to be sophisticated to be valuable. A workflow that sends a reminder email automatically saves the same 10 minutes it saved the first time, every single time it runs, forever.",
          "audit_binary": "Are at least three core system pairs integrated so that data entered in one system flows automatically to the other without manual re-entry, and are at least five previously manual high-frequency tasks now automated through documented workflows with a named owner each?",
          "evidence": "Integration Architecture Document and Automation Workflow Library",
          "evidence_example": "A document or diagram showing at least three system integrations with a description of what data flows and how. A list of at least five automated workflows showing: the task automated, the tool used, the trigger, the estimated time saved per month, and the named owner.",
          "example": "Integrations: CRM to accounting, a closed deal automatically creates a draft invoice with client name, amount, and payment terms pre-filled. Project management to communication tool, a new project card sends a welcome message to the client via email. E-signature to file storage, a signed contract is automatically saved to the correct client folder. Automations: weekly pipeline report generated and emailed to the sales lead every Monday morning, saving 45 minutes per week. New client added to the onboarding email sequence automatically when marked active in the CRM, saving 15 minutes per client. Overdue invoice reminder sent automatically at day seven and day 14, saving 20 minutes per reminder per client. Monthly metrics dashboard refreshed and distributed automatically, saving 90 minutes per month. New team member added to all standard communication channels automatically when created in the HR system, saving 20 minutes per hire.",
          "false_positive_signals": [
            "Integration tools are subscribed to and connected but the automations are broken or unreliable, so team members have learned to perform the manual task anyway as a backup, running both the manual and automated version simultaneously.",
            "One or two automations exist but the majority of repetitive tasks are still performed manually because nobody has prioritized mapping and automating them."
          ],
          "failure_signals": [
            "Team members spend significant time each week manually copying data between systems that could be integrated, because no integration has been set up.",
            "Data inconsistencies between systems are a known ongoing problem, with different numbers reported by different tools because there is no single authoritative data flow."
          ],
          "prerequisite": "TI.3",
          "review_frequency": 4,
          "weights": {
            "impact": 9,
            "complexity": 6,
            "time_to_implement": 6,
            "direct_cost": 3
          }
        },
        {
          "level": 5,
          "headline": "Business Intelligence Dashboards",
          "plain_english": "Leadership can see the state of the business across all key metrics in one place, updated automatically, without pulling a manual report.",
          "observation": "At Level 5, a business intelligence layer exists. Key metrics from every operational domain are visible in one place or through a set of connected dashboards: revenue pipeline, delivery performance, customer health, team capacity, financial position, and marketing activity. The data is updated automatically from the underlying systems. Leadership can look at the dashboard on any morning and see whether the business is on track without asking anyone to prepare a report. This is the level that makes data-driven decisions possible, and it is why TI.5 is a prerequisite for measurement across every other domain.",
          "why_it_matters": "A company that makes decisions from last month's manually assembled spreadsheet is not a data-driven company. It is a company that aspires to be data-driven once someone finds the time to prepare the data. Business intelligence dashboards convert that aspiration into a reality by making the current state of the business continuously visible. Every other domain's ability to be measured, managed, and improved depends on data being visible without effort. This is TI's contribution to every other domain in the framework.",
          "audit_binary": "Is there a business intelligence layer, whether a single dashboard or a connected set, showing at minimum the key metrics from revenue, operations, customer success, and finance, updated automatically from source systems, and actively used in leadership decision-making at least weekly?",
          "evidence": "Business Intelligence Dashboard with Active Usage Records",
          "evidence_example": "A dashboard or connected set of dashboards showing metrics from at least four domains, updated automatically from integrated source systems. Records or observations confirming leadership references the dashboard at least weekly rather than requesting manual reports.",
          "example": "A connected dashboard showing six panels. Revenue: pipeline value, this month's closed revenue vs. target, and lead volume by channel. Operations: active project count, average delivery time vs. target, and capacity utilization. Customer success: monthly churn rate, NPS score, and number of clients at amber or red health status. Finance: current cash balance, accounts receivable outstanding, and gross margin this month. People: open roles and days open, and voluntary attrition rate rolling 12 months. Technology: system uptime for the three critical tools. Refreshed every morning from integrated source systems. Reviewed by the leadership team every Monday morning. The last time a manual report was requested was the month before this dashboard was built.",
          "false_positive_signals": [
            "Dashboards exist in each system separately, such as a CRM dashboard, an accounting dashboard, and a project management dashboard, but no single view exists that shows the state of the whole business in one place.",
            "A business intelligence tool is subscribed to and connected, but the dashboards are not actively used in leadership meetings because nobody trusted the data quality when it was first set up and the habit never formed."
          ],
          "failure_signals": [
            "Leadership requests a manual summary or report before every significant meeting because no automated view of business performance exists that can be trusted.",
            "Different team members report different figures for the same metric because each is pulling from their own domain's system rather than a shared authoritative dashboard."
          ],
          "prerequisite": "TI.4",
          "review_frequency": 12,
          "weights": {
            "impact": 9,
            "complexity": 6,
            "time_to_implement": 6,
            "direct_cost": 4
          }
        },
        {
          "level": 6,
          "headline": "Proactive System Monitoring and Security",
          "plain_english": "Mission-critical systems are monitored for uptime and performance, security events are detected and logged, and a documented incident response procedure exists for every critical system failure.",
          "observation": "At Level 6, the technology stack watches itself. Uptime monitoring alerts the technology owner within minutes if any mission-critical system goes offline. Performance monitoring detects degradation before users notice. A security monitoring tool logs unauthorized access attempts, unusual login patterns, and policy violations. And a written incident response plan exists for the top three most likely failure scenarios: what the team does, in what order, with which contacts, when a critical system fails. Proactive monitoring means the company finds out about system problems before customers do.",
          "why_it_matters": "Discovering a system failure when a team member tries to use the system and finds it down is reactive monitoring. By that point, the failure has already been affecting the business for an unknown period and users are already frustrated. Proactive monitoring converts system health from a reactive discovery into a managed metric. The incident response plan matters because a system failure handled without a plan is slower, more stressful, and more damaging than one handled with one. Both uptime and security monitoring together address the two most common sources of technology disruption.",
          "audit_binary": "Is uptime monitoring active for at least three mission-critical systems with alerts configured to notify the technology owner within 10 minutes of a failure, is a security monitoring tool logging access events, and does a written incident response plan exist for the top three critical failure scenarios, tested in the past 12 months?",
          "evidence": "System Monitoring Configuration Records, Security Event Log, and Incident Response Plan with Test Record",
          "evidence_example": "Configuration records showing uptime monitoring is active for mission-critical systems with sub-10-minute alert thresholds. A security event log showing access events being captured. A written incident response plan for at least three failure scenarios, with a record of the most recent test or tabletop exercise.",
          "example": "Uptime monitoring: three systems monitored with five-minute check intervals. CRM, accounting system, and project management tool. Any downtime triggers an immediate alert to the technology owner's phone and email. Last month: one alert triggered for a brief CRM outage at 6am on a Sunday. Resolved within 40 minutes before the working day began. Security monitoring: a security information tool logs all login events. Unusual login pattern from an unfamiliar IP address flagged last quarter, investigated, confirmed to be a team member working while traveling. No breach. Incident response plan: written procedures for three scenarios. CRM unavailable for more than two hours: manual pipeline tracking in a shared spreadsheet, vendor contacted within 15 minutes. Accounting system unavailable: payments delayed, vendor contacted, leadership notified. File storage unavailable: backup access via secondary cloud storage. Tabletop exercise conducted in March: all three scenarios walked through, two gaps identified and resolved.",
          "false_positive_signals": [
            "A monitoring tool subscription exists but alerts are configured with hour-long check intervals rather than minute-level intervals, meaning a failure could run for 59 minutes before detection.",
            "An incident response plan was written last year and described as available, but when asked, the technology owner cannot recall where it is stored or whether it has been updated since."
          ],
          "failure_signals": [
            "A system failure is discovered by a team member trying to use the system rather than by a monitoring alert, revealing that monitoring either does not exist or did not trigger.",
            "A security incident reveals that login events were not being logged, meaning the company cannot determine how long unauthorized access occurred or what was accessed."
          ],
          "prerequisite": "TI.5",
          "review_frequency": 12,
          "weights": {
            "impact": 8,
            "complexity": 7,
            "time_to_implement": 6,
            "direct_cost": 4
          }
        },
        {
          "level": 7,
          "headline": "Cross-Domain Technology Integration",
          "plain_english": "Technology provides formal data feeds to every other business domain, making the business intelligence dashboard the living nerve center of the company.",
          "observation": "At Level 7, technology is not just infrastructure. It is the connective tissue between every domain. The business intelligence dashboard is expanded to serve each function specifically: leadership sees cross-domain performance at a glance, product sees customer usage and outcome data, marketing sees lead attribution and channel performance, sales sees pipeline metrics in real time, operations sees delivery capacity and quality metrics, customer success sees health scores and engagement signals, people sees attrition and performance trends, and finance sees cash position and margin data. Every domain's data flows into the shared platform and each domain can pull its specific view without requesting anything from technology.",
          "why_it_matters": "Technology and infrastructure is unique in the BASE100 framework. Every other domain's Level 7 integration requires a relationship with other domains. TI's Level 7 integration means that technology has built the data infrastructure that makes every other domain's integration possible. A company where each domain extracts its data manually and independently is a company where the same data effort is repeated ten times. A company with a connected data platform does that work once and distributes the results to every function simultaneously.",
          "audit_binary": "Does the business intelligence platform provide a specific, automatically updated data view for at least six business domains, with evidence that each domain owner actively uses their view to make decisions rather than requesting manual data from the technology team?",
          "evidence": "Cross-Domain Dashboard Architecture Document with Domain Usage Records",
          "evidence_example": "A document showing the dashboard architecture and which data feeds each domain view. Records or observations from the past quarter confirming that at least six domain owners actively reference their dashboard view in meetings or decisions rather than requesting manual reports.",
          "example": "The business intelligence platform has eight domain-specific views. Leadership view: company-wide scorecard updated daily. Product view: feature adoption, activation rate, and outcome achievement rate updated weekly from the product database. Marketing view: leads by channel, cost per lead, and content engagement updated daily from the CRM and marketing tools. Sales view: pipeline value, close rate, and cycle time updated daily from the CRM. Operations view: delivery time, capacity utilization, and quality check pass rate updated weekly from the project management system. Customer success view: NPS, churn rate, and health scores updated weekly. People view: open roles, attrition rate, and eNPS updated monthly from the HR system. Finance view: cash position, accounts receivable, and gross margin updated daily from accounting. Each domain owner opens their view in their Monday morning domain review. The technology team received zero manual data requests in the past quarter.",
          "false_positive_signals": [
            "A single shared dashboard exists showing company-wide metrics but each domain still pulls its own data manually for its internal reviews because the shared dashboard does not show the domain-specific detail they need.",
            "Domain-specific views exist but are built by each domain independently using different tools and different data sources, creating inconsistency rather than a connected platform."
          ],
          "failure_signals": [
            "Domain owners still request custom data pulls from the technology team because the standard dashboards do not cover the metrics they need for their own domain management.",
            "The same metric is reported with different figures by two different domain dashboards because each is sourcing it from a different system without a single authoritative data feed."
          ],
          "prerequisite": "TI.6",
          "review_frequency": 4,
          "weights": {
            "impact": 9,
            "complexity": 8,
            "time_to_implement": 8,
            "direct_cost": 5
          }
        },
        {
          "level": 8,
          "headline": "Systematic Technology Improvement",
          "plain_english": "The technology stack improves through a documented quarterly audit cycle, a maintained 12-month roadmap, and a tracked technical debt register.",
          "observation": "At Level 8, technology evolves deliberately rather than reactively. A quarterly technology audit reviews the system inventory for redundancy, underuse, and risk. Redundant tools are cancelled. Underused tools are either trained on or replaced. New risks identified since the last audit are added to the risk register. The 12-month technology roadmap is updated based on the audit findings and the company's growth plans. A technical debt register tracks known limitations, workarounds, and aging systems that will need to be addressed, preventing the accumulation of invisible risk.",
          "why_it_matters": "Technical debt is not a developer problem. It is a business risk that compounds silently. A system that is five years old and no longer supported by the vendor is a security vulnerability. A workaround that two team members use to compensate for a broken integration is a key-person dependency. A tool that costs 300 euros per month and is used by one person twice per year is a budget drain. None of these are visible without a regular audit. The technology roadmap is what converts that visibility into planned action rather than eventual crisis.",
          "audit_binary": "Has a documented technology audit been conducted in the past quarter covering the full system inventory for redundancy, underuse, and risk, is there a current 12-month technology roadmap updated based on the most recent audit, and does a technical debt register exist with at least five items tracked with priority levels and resolution timelines?",
          "evidence": "Quarterly Technology Audit Report, 12-Month Technology Roadmap, and Technical Debt Register",
          "evidence_example": "A technology audit report from the past quarter showing: systems reviewed, redundancies found, underused tools identified, risks flagged, and decisions made. A 12-month roadmap showing planned technology investments and changes with quarterly timing. A technical debt register with at least five items, each showing: the issue, the business risk it creates, the priority level, and the planned resolution timeline.",
          "example": "Q3 technology audit: 14 systems reviewed. Two redundancies found: two communication tools with overlapping use cases, one cancelled saving 180 euros per month. One underused tool: the design tool was used by only one person, subscription changed to a seat license. Two risks flagged: the accounting system is three major versions behind current and the vendor ends support in eight months. Added to roadmap for upgrade in Q1. Technical debt register: five items. Item one, the CRM integration to accounting breaks occasionally and requires manual reconciliation once a week, priority high, target resolution Q4 by replacing with a more reliable integration tool. Item two, file naming conventions are inconsistent across the team making search unreliable, priority medium, target resolution Q2 through a naming convention SOP.",
          "false_positive_signals": [
            "The technology stack has not been formally reviewed in more than 12 months but the technology owner describes it as stable, meaning there is no active audit cycle and risks are accumulating without detection.",
            "A technology roadmap exists as a wish list of desirable upgrades but is not connected to the audit cycle or the company's growth plans, making it aspirational rather than operational."
          ],
          "failure_signals": [
            "A technology tool fails or is discontinued by the vendor and the company is caught by surprise, revealing that no audit cycle was monitoring the support and end-of-life status of the stack.",
            "The same workaround has been in use for more than 12 months without being addressed, suggesting no technical debt register exists to make it visible and prioritized."
          ],
          "prerequisite": "TI.7",
          "review_frequency": 4,
          "weights": {
            "impact": 8,
            "complexity": 7,
            "time_to_implement": 7,
            "direct_cost": 5
          }
        },
        {
          "level": 9,
          "headline": "Independent Technology Leadership",
          "plain_english": "Technology is led by a dedicated or fractional technology leader who owns the stack, the roadmap, and all technology decisions without founder involvement.",
          "observation": "At Level 9, a named technology leader, whether internal or fractional, owns the technology function with real authority. They manage the system inventory, maintain the access control policy, oversee the monitoring and incident response systems, run the quarterly technology audit, update the roadmap, and make technology purchase decisions up to a defined budget threshold without consulting the founder. They present a technology summary to leadership quarterly. Technology decisions are not made by whoever is most technically capable in the room on any given day.",
          "why_it_matters": "Technology decisions made without a dedicated owner accumulate in the worst possible way. Each individual decision may seem reasonable at the time, but without someone accountable for the overall architecture, the stack becomes a collection of tools chosen by different people for different reasons that do not work well together. A technology leader provides strategic coherence to technology investment, catches risks that others miss because they are looking at individual tools rather than the whole picture, and prevents the founder from becoming the default technology decision-maker by absence of anyone else.",
          "audit_binary": "Is there a named technology leader, internal or fractional, with documented authority over technology decisions up to a defined budget threshold, who has run at least two consecutive quarterly technology reviews without founder involvement and made at least three technology decisions independently in the past six months?",
          "evidence": "Technology Leadership Authority Document with Independent Review Records and Decision Log",
          "evidence_example": "A written authority document naming the technology leader and their decision threshold. Records of at least two consecutive quarterly technology reviews led by that person without founder attendance. A decision log showing at least three technology decisions made independently in the past six months.",
          "example": "A fractional CTO engaged for two days per month owns the technology function. Authority up to 2,000 euros per month in technology spend without founder approval. Led the Q2 and Q3 technology audits independently. Q2 decisions: cancelled two redundant subscriptions saving 340 euros per month, upgraded the CRM plan to add automation capacity, and initiated a security monitoring tool procurement. Q3 decisions: approved the migration to a new integrated accounting and payroll system, updated the incident response plan based on a near-miss event, and commissioned the technical debt resolution of the broken CRM-to-accounting integration. The founder reviewed the quarterly technology summary both times but did not attend the audit sessions or provide input before the decisions were made.",
          "false_positive_signals": [
            "A developer on the team handles technology questions and is informally considered the technology lead, but has no formal authority, no documented responsibility, and no structured review cycle.",
            "A fractional CTO is engaged for advice but all technology decisions still require founder approval before implementation, making the engagement advisory rather than ownership-level."
          ],
          "failure_signals": [
            "Technology decisions stall when the founder is unavailable because no one else has the authority to approve them.",
            "The technology stack has grown in an incoherent direction over the past 12 months because different team members made individual tool decisions without a coherent owner reviewing the overall architecture."
          ],
          "prerequisite": "TC.6",
          "review_frequency": 2,
          "weights": {
            "impact": 8,
            "complexity": 8,
            "time_to_implement": 7,
            "direct_cost": 6
          }
        },
        {
          "level": 10,
          "headline": "Institutional Technology Platform",
          "plain_english": "The company operates a governed, monitored, and continuously improved technology platform that supports every domain, passes an annual external security audit, and would survive a complete change of ownership without disruption.",
          "observation": "At Level 10, all technology systems are running together and producing compound results. The stack is documented, integrated, automated, monitored, and improving through a quarterly audit cycle. Business intelligence serves every domain. The technology leader operates independently. And the entire platform is subject to an annual external security audit that validates access control, data management, incident response, and system resilience. The result is a technology infrastructure that an acquirer, investor, or new management team could step into and operate without any founder or founder-adjacent knowledge transfer.",
          "why_it_matters": "Technology infrastructure is one of the most underappreciated elements of enterprise value in a small or mid-market company. An acquirer who discovers undocumented systems, uncontrolled access, no incident response capability, and a technology debt register full of unresolved risks will discount the business accordingly. An acquirer who finds a documented stack, clean access control, active monitoring, a current roadmap, and an external security audit on file will have confidence in the reliability of the operational infrastructure they are buying. Technology maturity at Level 10 is not about complexity. It is about governance.",
          "audit_binary": "Has the technology function operated without founder involvement for at least four consecutive quarters, does an annual external security audit exist from the past 12 months confirming access control, data management, and incident response meet defined standards, and are all technology systems documented, monitored, and governed under the technology leader's independent authority?",
          "evidence": "Annual Technology Governance Report with External Security Audit Record",
          "evidence_example": "An annual technology governance report covering: system inventory status, integration architecture, automation program savings, business intelligence coverage, security monitoring summary, quarterly audit findings and outcomes, technical debt register status, and technology roadmap completion. An external security audit report from the past 12 months with findings and any remediation actions taken.",
          "example": "Annual technology governance report. System inventory: 16 tools, all documented, two consolidated versus prior year. Integration architecture: nine active integrations, all tested quarterly. Automation program: 12 automated workflows saving an estimated 28 hours per month versus manual execution. Business intelligence: eight domain views active and used weekly. Security monitoring: 847 events logged, zero confirmed breaches, one suspicious pattern investigated and cleared. Quarterly audits completed in Q1, Q2, Q3, Q4 with findings documented. Technical debt register: seven items at start of year, five resolved, two new items added, net reduction. Technology roadmap: eight of ten planned Q1 to Q3 initiatives completed. External security audit completed in September by an independent security firm. Findings: two medium-risk items identified, both remediated within 30 days. One recommendation adopted: multi-factor authentication extended to all tools, not just email. Founder involvement: zero technology decisions in the past 14 months.",
          "false_positive_signals": [
            "The technology platform is sophisticated and well-managed but the technology leader is effectively the sole person who understands the full architecture, meaning their departure would create the same knowledge vacuum the platform was meant to prevent.",
            "An external security audit was completed but the findings included unresolved high-risk items that are still open, meaning the audit exists but the platform has not yet met the standard it should represent."
          ],
          "failure_signals": [
            "A prospective acquirer's technology due diligence identifies undocumented systems, unresolved access control gaps, or no incident response capability, leading to a risk discount in the valuation.",
            "The external security audit has not been repeated since the first one was done two years ago, meaning the security posture has evolved but has not been independently validated."
          ],
          "prerequisite": "TI.9",
          "review_frequency": 1,
          "weights": {
            "impact": 10,
            "complexity": 9,
            "time_to_implement": 9,
            "direct_cost": 7
          }
        }
      ]
    }
  }
};
