"use client";
import React, { useState, useMemo, useEffect, useRef } from "react";
import {
  X,
  Menu,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  HardHat,
  Shield,
  Target,
  ScrollText,
  GitFork,
  AlertTriangle,
  Key,
  Users,
  Workflow,
  Cpu,
  Gauge,
  LibraryBig,
  Lightbulb,
} from "lucide-react";
import { Icon } from "@iconify/react";


const SERVICE_DATA = [
  {
    id: "strategygovernance",
    title: "Strategy & Governance",
    items: [
      {
        id: "cybersecuritystrategy",
        title: "→ Cybersecurity Strategy",
        slides: [
          {
            title1: "Overview", // SLIDE 1: Overview
            title2: "What is Cybersecurity Strategy?",
            discription:
              "ISO/IEC 27001:2022 is the international standard for Information Security Management Systems (ISMS). It specifies requirements to establish, implement, maintain and continually improve an ISMS to protect information assets.",
            icons: [
              {
                icon: <Icon icon="mingcute:lock-line" width="36" height="36" />,
                iconheading: "Protection",
                icondiscription: "Protection Prevent unauthorized access.",
              },
              {
                icon: (
                  <Icon icon="jam:triangle-danger" width="36" height="36" />
                ),
                iconheading: "Risk Management",
                icondiscription: "Identify and minimize threats.",
              },
              {
                icon: <Icon icon="lucide:siren" width="36" height="36" />,
                iconheading: "Governance",
                icondiscription: "Define policies and accountability.",
              },
              {
                icon: (
                  <Icon icon="carbon:ai-governance-tracked" width="36" height="36" />
                ),
                iconheading: "Response & Recovery",
                icondiscription: "Prepare, respond, and recover.",
              },
              {
                icon: (
                  <Icon icon="carbon:ibm-cloud-continuous-delivery" width="36" height="36" />
                ),
                iconheading: "Continuous Improvement",
                icondiscription: "Review and enhance regularly.",
              },
            ],
            whowehelp: [
              {
                titleofwhohelp:
                  "Built for Businesses Driving Growth & Security",
                list: [
                  "SaaS & digital-first companies",
                  "Mid-market enterprises",
                  "Fintech & Regulated Industries",
                  "Cloud-native platforms",
                  "Startups scaling to enterprise level",
                ],
              },
            ],
            why: [
              {
                titl1: "Why Cybersecurity Strategy",
                title2: "Why Cybersecurity Strategy Matters",
                sections: [
                  {
                    heading: "Aligns with business goals",
                    discription: "Security investments that drive growth.",
                  },
                  {
                    heading: "Reduces cyber risks",
                    discription: "Proactive defense against evolving threats.",
                  },
                  {
                    heading: "Supports compliance needs",
                    discription: "Framework-ready for ISO, NIST, GDPR.",
                  },
                  {
                    heading: "Builds stakeholder trust",
                    discription: "Demonstrates resilience and accountability.",
                  },
                ],
              },
            ],
          },
          {
            title1: "Scope of Work", // SLIDE 2: NEW Scope of Work Slide
            scope: [
              {
                title: "Cybersecurity Strategy Services",
                discription:
                  "End-to-end support to design, implement, and sustain your security roadmap.",
                section: [
                  {
                    icons: <Icon icon="weui:setting-outlined" width="36" height="36" style={{ color: "#000" }} />,
                    heading: "Control Selection & Implementation",
                    p: "Map controls, plan resources, optimize spend.",
                  },
                  {
                    icons: (
                      <Icon icon="solar:link-outline" width="36" height="36" />
                    ),
                    heading: "Operationalization & Integration",
                    p: "Embed security into processes and vendors.",
                  },
                  {
                    icons: (
                      <Icon icon="mdi:report-multiple" width="36" height="36" />
                    ),
                    heading: "Monitoring & Continuous Improvement",
                    p: "Track metrics, test response, update regularly.",
                  },
                  {
                    icons: (
                      <Icon icon="typcn:warning-outline" width="36" height="36" />
                    ),
                    heading: "Risk & Threat Analysis",
                    p: "Identify threats and prioritize risks.",
                  },
                  {
                    icons: (
                      <Icon
                        icon="ant-design:search-outlined"
                        width="36"
                        height="36"
                      />
                    ),
                    heading: "Discovery & Current State Assessment",
                    p: "Evaluate assets, posture, and framework gaps.",
                  },
                  {
                    icons: (
                      <Icon
                        icon="fluent:document-one-page-20-regular"
                        width="36"
                        height="36"
                      />
                    ),
                    heading: "Strategy & Roadmap Design",
                    p: "Define governance, policies, and KPIs.",
                  },
                ],
              },
            ],
          },
          {
            title1: "Methodology", // SLIDE 3: Methodology (shifted index)
            methodology: [
              {
                heading: "Our 5-Phase Cybersecurity Strategy Journey",
                subsection: [
                  {
                    number: "01",
                    heading: "Scoping & Consultation",
                    discription:
                      "Define business objectives, stakeholders, systems, and compliance requirements.",
                  },
                  {
                    number: "02",
                    heading: "Current State & Gap Assessment",
                    discription:
                      "Review existing controls, processes, and posture against frameworks (NIST, ISO, CIS).",
                  },
                  {
                    number: "03",
                    heading: "Risk & Threat Modelling",
                    discription:
                      "Identify key risks, assess impacts, prioritize mitigation strategies.",
                  },
                  {
                    number: "04",
                    heading: "Strategy & Roadmap Design",
                    discription:
                      "Develop governance, security policies, controls, and measurable KPIs.",
                  },
                  {
                    number: "05",
                    heading: "Implementation & Continuous Improvement",
                    discription:
                      "Support integration, monitor performance, refine strategy over time.",
                  },
                ],
              },
            ],
            deliverables: [
              { li: "Cybersecurity Operating Model Blueprint" },
              { li: "Risk & Threat Matrix + Treatment Plan" },
              { li: "Security Strategy & Roadmap Document" },
              { li: "Policy & Governance Framework Templates" },
              { li: "Control Mapping (ISO, NIST, CIS)" },
              { li: "KPI Dashboard & Reporting Structure" },
              { li: "Incident Response & Recovery Playbooks" },
              { li: "Ongoing monitoring and review schedule" },
            ],
            whychooseus: [
              {
                title: "Why Choose Us – Practical, Business-Aligned Security",
                ul: [
                  { li: "Experienced strategists & certified experts" },
                  { li: "Business-first approach (not checkbox compliance)" },
                  {
                    li: "Multi-framework expertise (ISO 27001, NIST CSF, CIS, GDPR, HIPAA)",
                  },
                  { li: "Proven templates & accelerators for faster delivery" },
                  { li: "Ongoing support to keep strategy effective" },
                ],
              },
            ],
          },
          {
            title1: "FAQ",
            faqs: [
              {
                question: "What is a cybersecurity strategy?",
                answer:
                  "A cybersecurity strategy defines your organization's roadmap for managing and mitigating digital threats. It aligns with frameworks like ISO 27001 and NIST to ensure resilience.",
              },
              {
                question: "Why is a cybersecurity strategy important?",
                answer:
                  "It ensures proactive defense against cyber risks and helps maintain compliance with SOC 2 and GDPR requirements, protecting business reputation and assets.",
              },
              {
                question: "How does ISECURION develop a cybersecurity strategy?",
                answer:
                  "We assess your current maturity, map risks, and design a roadmap for secure digital transformation.",
              },
              {
                question: "Which industries benefit most from a cybersecurity strategy?",
                answer:
                  "All industries—BFSI, Healthcare, Government, and E-commerce—benefit from a robust cybersecurity roadmap to secure operations and meet compliance needs.",
              },
              {
                question: "How often should a cybersecurity strategy be reviewed?",
                answer:
                  "It’s best to review your cybersecurity roadmap annually or after major IT or regulatory changes.",
              },
              {
                question: "Can ISECURION align strategy with business goals?",
                answer:
                  "Yes, we ensure your cybersecurity investments deliver measurable ROI and business resilience.",
              },
              {
                question: "What frameworks does ISECURION follow?",
                answer:
                  "We implement global standards like ISO 27001, NIST CSF, and CIS Controls to enhance organizational maturity.",
              },
              {
                question: "Does ISECURION offer CISO advisory support?",
                answer:
                  "Yes, through our vCISO services, we provide executive-level strategic security guidance.",
              },
              {
                question: "How does cybersecurity strategy affect compliance?",
                answer:
                  "A well-defined strategy strengthens compliance readiness across SOC 2, PCI DSS, and ISO frameworks.",
              },
              {
                question: "How can we get started?",
                answer:
                  "You can contact our experts to begin a cybersecurity strategy consultation tailored to your business.",
              },
            ],

          }, // SLIDE 4: Placeholder
        ],
      },

      {
        id: "cybersecurityoperatingmodel",
        title: "→ Cybersecurity Operating Model",
        slides: [
          {
            title1: "Overview", // SLIDE 1: Overview - COPY START
            title2: "What is a Cybersecurity Operating Model?",
            discription:
              " A Cybersecurity Operating Model defines how people, processes, and technology align to manage cyber risk and ensure business resilience. It establishes a structured approach to implement, operate, and continually enhance your organization’s cybersecurity posture.",
            icons: [
              {
                icon: <Icon icon="formkit:people" width="36" height="36" />,
                icondiscription: "Empower teams with clear roles and skills",
              },
              {
                icon: <Cpu width="36" height="36" />,
                icondiscription: "Streamline workflows and response protocols.",
              },
              {
                icon: <Icon icon="streamline-plump:deepfake-technology-1" width="36" height="36" />,
                icondiscription:
                  "Enable secure, scalable, and automated systems.",
              },
              {
                icon: (
                  <Icon icon="icon-park-outline:palace" width="36" height="36" />
                ),
                icondiscription:
                  "Define accountability, ownership, and decision rights.",
              },
              {
                icon: <Icon icon="tdesign:secured" width="36" height="36" />,
                icondiscription:
                  "Foster a security-first mindset across the organization.",
              },
            ],
            whowehelp: [
              {
                titleofwhohelp:
                  " Built for organizations aiming to operationalize cybersecurity excellence:",
                list: [
                  "Digital-first enterprises & SaaS providers",
                  "Regulated sectors (Finance, HealthTech, Government)",
                  "Multi-cloud & hybrid IT environments",
                  "Global organizations with distributed teams",
                  "Startups targeting ISO or SOC compliance",
                ],
              },
            ],
            why: [
              {
                titl1: "Why Cybersecurity Strategy",
                title2: "Why Cybersecurity Strategy Matters",
                list: [
                  "Aligns cybersecurity with business and risk strategy",
                  "Enhances visibility, control, and accountability",
                  "Enables efficient use of security resources",
                  "Drives continuous improvement and adaptability",
                ],
              },
            ],
          },
          {
            title1: "Scope of Work", // SLIDE 2: NEW Scope of Work Slide
            scope: [
              {
                title: "Cybersecurity Operating Model Services",
                discription:
                  "Comprehensive support to design, build, and optimize your cybersecurity operating structure.",
                section: [
                  {
                    icons: (
                      <Icon icon="streamline-ultimate:module-hands-puzzle" width="36" height="36" />
                    ),
                    heading: "Governance Design & Alignment",
                    p: "Establish policies, committees, and accountability models.",
                  },
                  {
                    icons: (
                      <Icon icon="streamline-freehand:optimization-configuration" width="36" height="36" />
                    ),
                    heading: "Process Optimization & Automation",
                    p: "Streamline operations for detection, response, and reporting.",
                  },
                  {
                    icons: (
                      <Icon icon="carbon:skill-level" width="36" height="36" />
                    ),
                    heading: "People & Capability Development",
                    p: "Define roles, skill matrices, and training programs.",
                  },
                  {
                    icons: (
                      <Icon icon="carbon:ibm-webmethods-hybrid-integration" width="36" height="36" />
                    ),
                    heading: "Technology Integration",
                    p: "Align tools and platforms with operating processes.",
                  },
                  {
                    icons: (
                      <Icon icon="carbon:business-metrics" width="36" height="36" />
                    ),
                    heading: "Performance & Metrics Management",
                    p: "Track KPIs, KRIs, and operational maturity.",
                  },
                  {
                    icons: (
                      <Icon icon="carbon:ibm-cloud-continuous-delivery" width="36" height="36" />
                    ),
                    heading: "Continuous Evolution & Improvement",
                    p: "Regularly assess performance and refine model alignment.",
                  },
                ],
              },
            ],
          },
          {
            title1: "Methodology", // SLIDE 3: Methodology (shifted index)
            methodology: [
              {
                heading: "Our 5-Phase Cybersecurity Strategy Journey",
                subsection: [
                  {
                    number: "01",
                    heading: "Define & Align",
                    discription:
                      "Identify goals, stakeholders, and risk appetite.",
                  },
                  {
                    number: "02",
                    heading: "Assess & Baseline",
                    discription:
                      "Evaluate current operations, maturity, and tool stack.",
                  },
                  {
                    number: "03",
                    heading: "Design & Develop",
                    discription:
                      "Architect operating model structure, roles, and workflows.",
                  },
                  {
                    number: "04",
                    heading: "Implement & Integrate",
                    discription:
                      "Embed model into existing governance and technology ecosystems.",
                  },
                  {
                    number: "05",
                    heading: "Monitor & Evolve",
                    discription:
                      "Measure outcomes, track maturity, and refine continuously.",
                  },
                ],
              },
            ],
            deliverables: [
              { li: "Cybersecurity Operating Model Blueprint" },
              { li: "Governance & Role Definition Framework" },
              { li: "Process Maps & Automation Workflows" },
              { li: "Capability Maturity Assessment" },
              { li: "Technology Enablement Plan" },
              { li: "KPI / KRI Dashboard Templates" },
              { li: "Ongoing Review & Improvement Plan" },
              { li: "Executive Reporting Package" },
            ],
            whychooseus: [
              {
                title: "Why Choose Us – Practical, Business-Aligned Security",
                ul: [
                  {
                    li: "Deep expertise across security, risk, and governance functions",
                  },
                  {
                    li: "Proven frameworks for ISO 27001, NIST CSF, and CIS integration",
                  },
                  {
                    li: "Business-first approach ensuring measurable outcomes",
                  },
                  {
                    li: "Experienced strategists and certified implementation experts",
                  },
                  {
                    li: "Continuous partnership to evolve your cybersecurity maturity",
                  },
                ],
              },
            ],
          },
          {
            title1: "FAQ",
            faqs: [
              {
                question: "What is a cybersecurity operating model?",
                answer:
                  "It defines how your security processes, tools, and teams collaborate to detect and respond to threats efficiently.",
              },
              {
                question: "Why is a cybersecurity operating model critical?",
                answer:
                  "It ensures governance, accountability, and continuous monitoring across business units.",
              },
              {
                question: "How does ISECURION design the model?",
                answer:
                  "We assess existing controls, define clear roles, and align operations with ISO 27001 and NIST frameworks.",
              },
              {
                question: "Can this model integrate with existing frameworks?",
                answer:
                  "Yes, it’s adaptable to your current risk, compliance, and IT frameworks.",
              },
              {
                question: "What are the main components of the operating model?",
                answer:
                  "Governance structure, response workflows, and continuous metrics monitoring to improve maturity.",
              },
              {
                question: "How does it improve cybersecurity posture?",
                answer:
                  "It transforms your security from reactive to proactive with defined governance and accountability.",
              },
              {
                question: "How long does building the model take?",
                answer: "Typically 4–8 weeks, depending on complexity and business size.",
              },
              {
                question: "Is it suitable for startups and SMEs?",
                answer:
                  "Yes. We offer scalable models suitable for smaller teams with limited budgets.",
              },
              {
                question: "Can vCISO services complement this model?",
                answer:
                  "Yes. Our vCISO services strengthen governance execution.",
              },
              {
                question: "How to start implementing a cybersecurity operating model?",
                answer:
                  "Reach out to ISECURION to discuss your organization’s security operating needs.",
              },
            ],

          }, // SLIDE 4: Placeholder - COPY END
        ],
      },

      {
        id: "socmaturityassessment",
        title: "→ SOC Maturity Assessment",
        slides: [
          {
            title1: "Overview", // SLIDE 1: Overview - COPY START
            title2: "What is SOC Maturity Assessment?",
            discription:
              "A SOC Maturity Assessment evaluates the effectiveness, coverage, and scalability of your Security Operations Center (SOC). It identifies capability gaps across people, processes, and technology to enhance detection, response, and resilience against evolving cyber threats.",
            icons: [
              {
                icon: <Icon icon="carbon:ibm-aiops-insights" width="36" height="36" />,
                icondiscription:
                  "Gain full insight into assets, events, and threats.",
              },
              {
                icon: (
                  <Icon icon="carbon:map-identify" width="36" height="36" />
                ),
                icondiscription:
                  "Identify and prioritize real threats efficiently.",
              },
              {
                icon: <Icon icon="fluent-mdl2:not-executed" width="36" height="36" />,
                icondiscription:
                  "Execute timely and coordinated incident responses.",
              },
              {
                icon: (
                  <Icon icon="arcticons:ai-chat" width="36" height="36" />
                ),
                icondiscription:
                  "Streamline workflows using SOAR and AI-driven tools.",
              },
              {
                icon: (
                  <Icon icon="carbon:improve-relevance" width="36" height="36" />
                ),
                icondiscription:
                  "Continuously improve through metrics and lessons learned.",
              },
            ],
            whowehelp: [
              {
                titleofwhohelp:
                  " Built for security teams driving operational excellence",
                list: [
                  "In-house SOCs seeking performance improvement",
                  "MSSPs and MDR providers managing multiple clients",
                  "Enterprises building new SOC capabilities",
                  "Organizations adopting hybrid or virtual SOC models",
                  "Regulated industries with compliance-driven monitoring needs",
                ],
              },
            ],
            why: [
              {
                titl1: "Why SOC Maturity Assessment",
                title2: "Why SOC Maturity Assessment Matters",
                list: [
                  "Aligns SOC goals with enterprise security strategy",
                  "Identifies capability gaps and maturity benchmarks",
                  "Improves incident detection and response efficiency",
                  "Enables roadmap for automation and continuous improvement",
                ],
              },
            ],
          },
          {
            title1: "Scope of Work", // SLIDE 2: NEW Scope of Work Slide
            scope: [
              {
                title: "SOC Maturity Assessment Services",
                discription:
                  "Comprehensive evaluation to benchmark, optimize, and evolve SOC capabilities.",
                section: [
                  {
                    icons: (
                      <Icon icon="hugeicons:chart-evaluation" width="36" height="36" />
                    ),
                    heading: "Capability & Process Evaluation",
                    p: "Assess SOC processes, roles, and governance structure.",
                  },
                  {
                    icons: (
                      <Icon icon="uil:technology" width="36" height="36" />
                    ),
                    heading: "Tool & Technology Assessment",
                    p: "Review SIEM, SOAR, EDR, and supporting technologies.",
                  },
                  {
                    icons: (
                      <Icon icon="streamline:threat-browser-1" width="36" height="36" />
                    ),
                    heading: "Threat Detection & Response Review",
                    p: "Measure effectiveness of detection rules and playbooks.",
                  },
                  {
                    icons: (
                      <Icon icon="hugeicons:analysis-text-link" width="36" height="36" />
                    ),
                    heading: "People & Skill Gap Analysis",
                    p: "Evaluate team readiness, skill levels, and training needs.",
                  },
                  {
                    icons: (
                      <Icon icon="simple-icons:victoriametrics" width="36" height="36" />
                    ),
                    heading: "Metrics & KPI Analysis",
                    p: "Review SOC performance indicators and success metrics.",
                  },
                  {
                    icons: (
                      <Icon icon="streamline:arrow-roadmap" width="36" height="36" />
                    ),
                    heading: "Maturity Roadmap Development",
                    p: "Define actionable improvements and future-state design.",
                  },
                ],
              },
            ],
          },
          {
            title1: "Methodology", // SLIDE 3: Methodology (shifted index)
            methodology: [
              {
                heading: "Our 5-Phase SOC Maturity Assessment Journey",
                subsection: [
                  {
                    number: "01",
                    heading: "Scoping & Planning",
                    discription:
                      "Define assessment objectives, SOC type, and stakeholder inputs.",
                  },
                  {
                    number: "02",
                    heading: "Data Collection & Current State Review",
                    discription:
                      "Gather insights on tools, workflows, and performance metrics.",
                  },
                  {
                    number: "03",
                    heading: "Gap Analysis & Benchmarking",
                    discription:
                      "Compare SOC capabilities against industry frameworks (NIST, MITRE, SOC-CMM).",
                  },
                  {
                    number: "04",
                    heading: "Maturity Scoring & Recommendations",
                    discription:
                      "Quantify maturity level and outline prioritized improvements.",
                  },
                  {
                    number: "05",
                    heading: "Roadmap & Continuous Improvement",
                    discription:
                      "Deliver actionable roadmap for optimization and maturity growth.",
                  },
                ],
              },
            ],
            deliverables: [
              { li: "SOC Maturity Assessment Report" },
              { li: "Current State & Gap Analysis Dashboard" },
              { li: "Capability Maturity Scorecard (based on SOC-CMM)" },
              { li: "Detection & Response Effectiveness Evaluation" },
              { li: "Technology & Tool Stack Review" },
              { li: "Skill & Workforce Development Plan" },
              { li: "SOC Optimization Roadmap" },
              { li: "Executive Summary Presentation" },
            ],
            whychooseus: [
              {
                title: "Why Choose Us – Practical, Data-Driven SOC Expertise",
                ul: [
                  { li: "Deep experience across Tier 1–3 SOC operations" },
                  {
                    li: "Framework-aligned assessments (SOC-CMM, NIST CSF, MITRE ATT&CK)",
                  },
                  {
                    li: "Actionable insights with measurable improvement plans",
                  },
                  { li: "Balanced focus on people, process, and technology" },
                  {
                    li: "Proven methodologies to accelerate SOC modernization",
                  },
                ],
              },
            ],
          },
          {
            title1: "FAQ",
            faqs: [
              {
                question: "What is a SOC Maturity Assessment?",
                answer:
                  "It evaluates your Security Operations Center (SOC) capabilities across people, process, and technology maturity levels.",
              },
              {
                question: "Why is SOC maturity important?",
                answer:
                  "A mature SOC ensures faster detection, response, and mitigation of cyber incidents.",
              },
              {
                question: "What parameters are reviewed?",
                answer:
                  "We assess monitoring tools, incident response efficiency, automation, and overall threat intelligence integration.",
              },
              {
                question: "Who needs SOC maturity assessments?",
                answer:
                  "Organizations with in-house or outsourced SOC teams seeking optimization and audit readiness.",
              },
              {
                question: "Does ISECURION align it with compliance standards?",
                answer:
                  "Yes, it aligns with SOC 2 and ISO 27001 frameworks for better compliance readiness.",
              },
              {
                question: "Does the assessment include a roadmap?",
                answer:
                  "Yes, we provide actionable reports with prioritized recommendations.",
              },
              {
                question: "How often should a SOC maturity assessment be conducted?",
                answer:
                  "Annually or when your SOC adopts new technologies or tools.",
              },
              {
                question: "What deliverables are included?",
                answer:
                  "You receive a detailed maturity scorecard, gap analysis, and improvement roadmap.",
              },
              {
                question: "How does ISECURION assess SOC maturity?",
                answer:
                  "Using industry standards like MITRE ATT&CK and NIST frameworks for comprehensive evaluation.",
              },
              {
                question: "How can I request an assessment?",
                answer:
                  "Contact ISECURION to schedule your SOC Maturity Assessment today.",
              },
            ],

          }, // SLIDE 4: Placeholder - COPY END
        ],
      },

      {
        id: "cloudarchitecturereview",
        title: "→ Cloud architecture review",
        slides: [
          {
            title1: "Overview", // SLIDE 1: Overview - COPY START
            title2: "What is a Cloud Architecture Review?",
            discription:
              "A Cloud Architecture Review evaluates your cloud environment’s design, configuration, and governance to ensure it is secure, scalable, resilient, and cost-optimized. It identifies misconfigurations, architectural risks, and opportunities to align your cloud strategy with industry best practices.",
            icons: [
              {
                icon: <Icon icon="hugeicons:web-protection" width="36" height="36" />,
                icondiscription:
                  "Strengthen identity, data, and workload protection.",
              },
              {
                icon: (
                  <Icon icon="carbon:ibm-deployable-architecture" width="36" height="36" />
                ),
                icondiscription:
                  "Ensure architecture adapts to business growth.",
              },
              {
                icon: <Icon icon="carbon:improve-relevance" width="36" height="36" />,
                icondiscription: " Improve uptime and fault tolerance.",
              },
              {
                icon: (
                  <Icon icon="fluent:mobile-optimized-24-regular" width="36" height="36" />
                ),
                icondiscription: "Optimize spend and resource allocation.",
              },
              {
                icon: (
                  <Icon icon="fluent-mdl2:compliance-audit" width="36" height="36" />
                ),
                icondiscription:
                  " Establish compliance, visibility, and accountability.",
              },
            ],
            whowehelp: [
              {
                titleofwhohelp:
                  " Built for cloud-driven organizations ensuring secure growth",
                list: [
                  "SaaS & digital-first companies",
                  "Multi-cloud & hybrid enterprises",
                  "Regulated industries (Finance, HealthTech, GovTech)",
                  "Cloud-native startups scaling operations",
                  "Enterprises modernizing legacy workloads",
                ],
              },
            ],
            why: [
              {
                titl1: "Why Cloud Architecture Review",
                title2: "Why Cloud Architecture Review Matters",
                list: [
                  "Ensures alignment with cloud security and compliance frameworks",
                  "Identifies risks and inefficiencies in design and deployment",
                  "Improves performance, reliability, and cost efficiency",
                  "Strengthens governance and operational visibility",
                ],
              },
            ],
          },
          {
            title1: "Scope of Work", // SLIDE 2: NEW Scope of Work Slide
            scope: [
              {
                title: "Cloud Architecture Review Services",
                discription:
                  "End-to-end analysis and optimization across your cloud ecosystem.",
                section: [
                  {
                    icons: (
                      <Icon icon="ic:sharp-architecture" width="36" height="36" />
                    ),
                    heading: "Architecture & Design Assessment",
                    p: "Evaluate overall cloud topology, workloads, and integrations.",
                  },
                  {
                    icons: (
                      <Icon icon="material-symbols:security-rounded" width="36" height="36" />
                    ),
                    heading: "Security Posture Review",
                    p: "Assess IAM, encryption, network security, and compliance alignment.",
                  },
                  {
                    icons: (
                      <Icon icon="streamline-freehand:optimization-configuration" width="36" height="36" />
                    ),
                    heading: "Cost & Resource Optimization",
                    p: "Analyze usage, resource allocation, and cost efficiency.",
                  },
                  {
                    icons: (
                      <Icon icon="qlementine-icons:print-preview-16" width="36" height="36" />
                    ),
                    heading: "Operational Resilience Review",
                    p: "Evaluate high availability, disaster recovery, and failover mechanisms.",
                  },
                  {
                    icons: (
                      <Icon icon="qlementine-icons:print-preview-16" width="36" height="36" />
                    ),
                    heading: "Governance & Compliance Alignment",
                    p: "Validate policies against ISO 27017, CIS, NIST, and regulatory frameworks.",
                  },
                  {
                    icons: (
                      <Icon icon="streamline-plump:arrow-roadmap" width="36" height="36" />
                    ),
                    heading: "Recommendations & Roadmap",
                    p: "Deliver prioritized actions for improvement and scalability.",
                  },
                ],
              },
            ],
          },
          {
            title1: "Methodology", // SLIDE 3: Methodology (shifted index)
            methodology: [
              {
                heading: "Our 5-Phase Cloud Architecture Review Journey",
                subsection: [
                  {
                    number: "01",
                    heading: "Scoping & Discovery",
                    discription:
                      "Define objectives, business drivers, and compliance needs.",
                  },
                  {
                    number: "02",
                    heading: "Current State Assessment",
                    discription:
                      "Review existing architecture, configurations, and documentation.",
                  },
                  {
                    number: "03",
                    heading: "Gap & Risk Analysis",
                    discription:
                      "Identify misconfigurations, security gaps, and inefficiencies.",
                  },
                  {
                    number: "04",
                    heading: "Improvement & Optimization Plan",
                    discription:
                      "Develop recommendations for architecture, cost, and performance.",
                  },
                  {
                    number: "05",
                    heading: "Implementation Support & Review",
                    discription:
                      "Guide remediation, validate improvements, and reassess maturity.",
                  },
                ],
              },
            ],
            deliverables: [
              { li: "Cloud Architecture Assessment Report" },
              { li: "Security & Compliance Gap Analysis" },
              { li: "Architecture Diagrams with Risk Annotations" },
              { li: "Cost Optimization Report & Recommendations" },
              { li: "Governance & Policy Alignment Framework" },
              { li: "Resilience & Availability Review Summary" },
              { li: "Prioritized Remediation Roadmap" },
              { li: "Executive Summary Presentation" },
            ],

            whychooseus: [
              {
                title:
                  "Why Choose Us – Secure, Scalable, Cloud-First Expertise",
                ul: [
                  {
                    li: "Certified experts across AWS, Azure, and GCP architectures",
                  },
                  {
                    li: "Proven frameworks aligned with NIST, CIS, and ISO 27017",
                  },
                  {
                    li: "Deep focus on balancing security, scalability, and cost",
                  },
                  {
                    li: "Accelerated assessment methodologies for rapid insights",
                  },
                  {
                    li: "Actionable roadmap tailored to your cloud maturity stage",
                  },
                ],
              },
            ],
          },
          {
            title1: "FAQ",
            faqs: [
              {
                question: "What is a Cloud Architecture Review?",
                answer:
                  "It evaluates the design and security posture of your cloud environment to identify misconfigurations and compliance gaps.",
              },
              {
                question: "Why is it important?",
                answer:
                  "It reduces the risk of cloud data breaches and ensures adherence to industry best practices like ISO 27017.",
              },
              {
                question: "Does ISECURION review multi-cloud setups?",
                answer:
                  "Yes, we review AWS, Azure, and Google Cloud environments for end-to-end protection.",
              },
              {
                question: "What’s included in the review?",
                answer:
                  "IAM policies, encryption, data storage, and logging configurations are assessed in detail.",
              },
              {
                question: "Is this part of VAPT?",
                answer:
                  "It complements our VAPT Services by focusing on cloud-specific architecture risks.",
              },
              {
                question: "Does it detect compliance issues?",
                answer:
                  "Yes, the review highlights areas impacting PCI DSS or ISO compliance.",
              },
              {
                question: "How often should it be done?",
                answer:
                  "Twice a year or after major migrations or cloud expansions.",
              },
              {
                question: "Does ISECURION provide a report?",
                answer:
                  "Yes, we deliver actionable findings with security recommendations.",
              },
              {
                question: "Is DevSecOps included?",
                answer:
                  "Yes, DevSecOps integration ensures security is embedded into your CI/CD pipeline.",
              },
              {
                question: "How to get started?",
                answer:
                  "Contact us for a detailed Cloud Architecture Review.",
              },
            ],
          }, // SLIDE 4: Placeholder - COPY END
        ],
      },
    ],
  },

  {
    id: "riskcomplianceassurance",
    title: "Risk, Compliance & Assurance",
    items: [
      {
        id: "riskmanagement",
        title: "→ Risk Management",
        slides: [
          {
            title1: "Overview", // SLIDE 1: Overview
            title2: "What is Cybersecurity Strategy?",
            discription:
              "Risk Management is the process of identifying, assessing, and mitigating potential threats to your organization’s assets, operations, and objectives. It provides a structured approach to anticipate uncertainty, strengthen resilience, and enable informed decision-making across the business.",
            icons: [
              {
                icon: <Icon icon="carbon:identification" width="36" height="36" />,
                iconheading: "Identification",
                icondiscription:
                  "Discover internal and external risks impacting operations.",
              },
              {
                icon: (
                  <Icon icon="fluent-mdl2:assessment-group-template" width="36" height="36" />
                ),
                iconheading: "Assessment",
                icondiscription: "Evaluate likelihood, impact, and exposure.",
              },
              {
                icon: <Icon icon="fluent-mdl2:developer-tools" width="36" height="36" />,
                iconheading: "Mitigation",
                icondiscription:
                  "Develop and implement risk treatment strategies.",
              },
              {
                icon: (
                  <Icon icon="eos-icons:monitoring" width="36" height="36" />
                ),
                iconheading: "Monitoring",
                icondiscription:
                  "Continuously track evolving threats and performance.",
              },
              {
                icon: (
                  <Icon icon="oui:app-reporting" width="36" height="36" />
                ),
                iconheading: "Reporting",
                icondiscription:
                  "Communicate insights and trends to stakeholders.",
              },
            ],

            whowehelp: [
              {
                titleofwhohelp:
                  "Built for organizations aiming to operationalize proactive risk management",
                list: [
                  "Enterprises managing complex operational and cyber risks",
                  "Regulated industries (Finance, HealthTech, Energy, Government)",
                  "SaaS and cloud-native companies scaling securely",
                  "Organizations pursuing ISO 27001, NIST, or SOC 2 readiness",
                  "Businesses building enterprise-wide risk governance programs",
                ],
              },
            ],
            why: [
              {
                titl1: "Why Risk Management",
                title2: "Why Risk Management Matters",
                list: [
                  "Reduces uncertainty and strengthens organizational resilience",
                  "Aligns business strategy with acceptable risk thresholds",
                  "Ensures compliance with regulatory and industry standards",
                  "Enables data-driven decisions for long-term growth and stability",
                ],
              },
            ],
          },
          {
            title1: "Scope of Work", // SLIDE 2: NEW Scope of Work Slide
            scope: [
              {
                title: "Risk Management Services",
                discription:
                  "Comprehensive support to design, implement, and sustain an effective risk management framework.",
                section: [
                  {
                    icons: <Icon icon="carbon:classification" width="36" height="36" />,
                    heading: "Risk Identification & Classification",
                    p: "Map threats across people, processes, technology, and third parties.",
                  },
                  {
                    icons: (
                      <Icon icon="fluent-mdl2:assessment-group-template" width="36" height="36" />
                    ),
                    heading: "Risk Assessment & Scoring",
                    p: "Evaluate likelihood, impact, and overall risk exposure.",
                  },
                  {
                    icons: (
                      <Icon icon="pajamas:planning" width="36" height="36" />
                    ),
                    heading: "Risk Treatment & Mitigation Planning",
                    p: "Define controls, ownership, and mitigation timelines.",
                  },
                  {
                    icons: (
                      <Icon icon="healthicons:risk-analysis-outline-24px" width="36" height="36" />
                    ),
                    heading: "Risk Monitoring & Reporting",
                    p: "Establish KPIs, KRIs, and real-time visibility dashboards.",
                  },
                  {
                    icons: (
                      <Icon icon="hugeicons:frameworks" width="36" height="36" />
                    ),
                    heading: "Governance & Policy Frameworks",
                    p: "Align with ISO 27005, NIST RMF, COSO, or FAIR methodologies.",
                  },
                  {
                    icons: (
                      <Icon icon="streamline-sharp:decent-work-and-economic-growth" width="36" height="36" />
                    ),
                    heading: "Continuous Improvement & Maturity Growth",
                    p: "Regularly review, update, and enhance the risk management process.",
                  },
                ],
              },
            ],
          },
          {
            title1: "Methodology", // SLIDE 3: Methodology (shifted index)
            methodology: [
              {
                heading: "Our 5-Phase Risk Management Journey",
                subsection: [
                  {
                    number: "01",
                    heading: "Scoping & Framework Alignment",
                    discription:
                      "Define objectives, scope, and select appropriate risk frameworks.",
                  },
                  {
                    number: "02",
                    heading: "Risk Identification",
                    discription:
                      "Identify threats, vulnerabilities, and dependencies across the enterprise.",
                  },
                  {
                    number: "03",
                    heading: "Risk Assessment & Prioritization",
                    discription:
                      "Quantify risk impact and likelihood to prioritize mitigation.",
                  },
                  {
                    number: "04",
                    heading: "Treatment Planning & Implementation",
                    discription:
                      "Apply risk controls, assign ownership, and implement mitigation actions.",
                  },
                  {
                    number: "05",
                    heading: "Monitoring & Continuous Improvement",
                    discription:
                      "Track residual risk, report performance, and refine strategy over time.",
                  },
                ],
              },
            ],
            deliverables: [
              { li: "Enterprise Risk Register & Heat Map" },
              { li: "Risk Assessment & Treatment Plan" },
              { li: "Control Mapping (ISO 27005 / NIST RMF alignment)" },
              { li: "Governance & Reporting Framework" },
              { li: "KPI/KRI Dashboard & Scorecard" },
              { li: "Risk Communication & Escalation Matrix" },
              { li: "Continuous Monitoring Schedule" },
              { li: "Executive Summary & Improvement Roadmap" },
            ],

            whychooseus: [
              {
                title: "Why Choose Us – Strategic, Measurable Risk Management",
                ul: [
                  {
                    li: "Proven methodologies aligned with global frameworks (ISO 27005, NIST RMF, COSO)",
                  },
                  {
                    li: "Deep expertise in cyber, operational, and compliance risk",
                  },
                  {
                    li: "Business-aligned approach integrating risk with performance objectives",
                  },
                  {
                    li: "Data-driven insights through dashboards and automation",
                  },
                  {
                    li: "Ongoing support to evolve maturity and maintain compliance",
                  },
                ],
              },
            ],
          },
          { title1: "FAQ" }, // SLIDE 4: Placeholder
        ],
      },

      {
        id: "compliance",
        title: "→ Compliance",
        slides: [
          {
            title1: "Overview", // SLIDE 1: Overview
            title2: "What is Compliance?",
            discription:
              "Compliance ensures that your organization adheres to legal, regulatory, and industry standards governing data protection, privacy, and information security. A structured compliance framework helps maintain stakeholder trust, mitigate regulatory risks, and demonstrate accountability through continuous governance.",
            icons: [
              {
                icon: <Icon icon="carbon:ai-governance-tracked" width="36" height="36" />,
                iconheading: "Governance",
                icondiscription:
                  "Define accountability, ownership, and oversight.",
              },
              {
                icon: (
                  <Icon icon="file-icons:robotframework" width="36" height="36" />
                ),
                iconheading: "Framework Alignment",
                icondiscription:
                  "Map operations to standards like ISO, SOC 2, NIST, GDPR.",
              },
              {
                icon: <Icon icon="material-symbols:policy-outline" width="36" height="36" />,
                iconheading: "Policy Management",
                icondiscription:
                  "Establish, review, and enforce policies and controls.",
              },
              {
                icon: (
                  <Icon icon="hugeicons:audit-01" width="36" height="36" />
                ),
                iconheading: "Audit Readiness",
                icondiscription:
                  "Prepare documentation and evidence for assessments.",
              },
              {
                icon: (
                  <Icon icon="carbon:ibm-cloud-continuous-delivery" width="36" height="36" />
                ),
                iconheading: "Continuous Monitoring",
                icondiscription:
                  "Maintain compliance posture through regular testing.",
              },
            ],

            whowehelp: [
              {
                titleofwhohelp:
                  "Built for organizations navigating complex compliance landscapes",
                list: [
                  "SaaS and digital-first enterprises handling customer data",
                  "Regulated sectors (Finance, HealthTech, GovTech, Energy)",
                  "Multi-cloud and hybrid IT organizations",
                  "Businesses pursuing certifications (ISO 27001, SOC 2, GDPR, HIPAA)",
                  "Startups scaling to meet enterprise security standards",
                ],
              },
            ],
            why: [
              {
                titl1: "Why Compliance",
                title2: "Why Compliance Matters",
                list: [
                  "Demonstrates trust and accountability to clients and regulators",
                  "Reduces legal, financial, and reputational risks",
                  "Aligns operational controls with business and security goals",
                  "Simplifies certification readiness and audit success",
                ],
              },
            ],
          },
          {
            title1: "Scope of Work", // SLIDE 2: NEW Scope of Work Slide
            scope: [
              {
                title: "Compliance Services",
                discription:
                  "End-to-end support to design, implement, and maintain a robust compliance framework.",
                section: [
                  {
                    icons: <Icon icon="oui:index-mapping" width="36" height="36" />,
                    heading: "Regulatory & Framework Mapping",
                    p: "Identify applicable laws, regulations, and standards.",
                  },
                  {
                    icons: (
                      <Icon icon="icon-park-outline:analysis" width="36" height="36" />
                    ),
                    heading: "Gap Assessment & Risk Analysis",
                    p: "Evaluate current controls against compliance requirements.",
                  },
                  {
                    icons: (
                      <Icon icon="carbon:development" width="36" height="36" />
                    ),
                    heading: "Policy & Procedure Development",
                    p: "Create or refine documentation to meet framework standards.",
                  },
                  {
                    icons: (
                      <Icon icon="carbon:ibm-watsonx-code-assistant-for-z-validation-assistant" width="36" height="36" />
                    ),
                    heading: "Control Implementation & Validation",
                    p: "Deploy, test, and verify compliance controls across environments.",
                  },
                  {
                    icons: (
                      <Icon icon="fluent:collections-add-20-regular" width="36" height="36" />
                    ),
                    heading: "Audit Readiness & Evidence Collection",
                    p: "Prepare for certification and external assessments.",
                  },
                  {
                    icons: (
                      <Icon icon="eos-icons:monitoring" width="36" height="36" />
                    ),
                    heading: "Continuous Compliance Monitoring",
                    p: "Automate testing, reporting, and periodic reassessment.",
                  },
                ],
              },
            ],
          },
          {
            title1: "Methodology", // SLIDE 3: Methodology (shifted index)
            methodology: [
              {
                heading: "Our 5-Phase Compliance Journey",
                subsection: [
                  {
                    number: "01",
                    heading: "Scoping & Framework Selection",
                    discription:
                      "Define compliance objectives, scope, and relevant standards.",
                  },
                  {
                    number: "02",
                    heading: "Current State & Gap Assessment",
                    discription:
                      "Assess existing controls, policies, and risk exposure.",
                  },
                  {
                    number: "03",
                    heading: "Remediation & Control Implementation",
                    discription:
                      "Develop and enforce compliance controls and documentation.",
                  },
                  {
                    number: "04",
                    heading: "Validation & Audit Preparation",
                    discription:
                      "Conduct internal reviews and readiness checks.",
                  },
                  {
                    number: "05",
                    heading: "Monitoring & Continuous Improvement",
                    discription:
                      "Establish automated monitoring and regular compliance reviews.",
                  },
                ],
              },
            ],
            deliverables: [
              { li: "Compliance Gap Assessment Report" },
              {
                li: "Framework Mapping Matrix (ISO, SOC 2, NIST, GDPR, HIPAA)",
              },
              { li: "Updated Policies, Procedures, and Control Library" },
              { li: "Compliance Risk Register" },
              { li: "Evidence Repository & Audit Checklist" },
              { li: "Continuous Compliance Dashboard" },
              { li: "Remediation & Tracking Plan" },
              { li: "Executive Summary & Certification Readiness Report" },
            ],

            whychooseus: [
              {
                title:
                  "Why Choose Us – Business-Aligned, Framework-Driven Compliance",
                ul: [
                  {
                    li: "Certified experts in ISO 27001, SOC 2, NIST, GDPR, HIPAA, and PCI DSS",
                  },
                  {
                    li: "Proven methodology integrating security and compliance objectives",
                  },
                  {
                    li: "Accelerated readiness through pre-built templates and frameworks",
                  },
                  { li: "Continuous monitoring and reporting capabilities" },
                  {
                    li: "Tailored compliance roadmap aligned with your business model",
                  },
                ],
              },
            ],
          },
          { title1: "FAQ" }, // SLIDE 4: Placeholder
        ],
      },

      {
        id: "assuranceaudit",
        title: "→ Assurance & Audit",
        slides: [
          {
            title1: "Overview", // SLIDE 1: Overview
            title2: "What is Assurance & Audit?",
            discription:
              "Assurance & Audit services provide independent evaluation of your organization’s security controls, compliance posture, and governance processes. They validate that security frameworks and controls are effectively designed, implemented, and maintained to mitigate risk and build stakeholder confidence.",
            icons: [
              {
                icon: <Icon icon="hugeicons:audit-01" width="36" height="36" />,
                iconheading: "Governance",
                icondiscription:
                  "Define accountability, oversight, and audit scope.",
              },
              {
                icon: (
                  <Icon icon="carbon:ibm-watsonx-code-assistant-for-z-validation-assistant" width="36" height="36" />
                ),
                iconheading: "Controls Validation",
                icondiscription:
                  "Verify design and effectiveness of security controls.",
              },
              {
                icon: <Icon icon="pajamas:issue-type-objective" width="36" height="36" />,
                iconheading: "Evidence & Testing",
                icondiscription: "Conduct objective evidence-based testing.",
              },
              {
                icon: (
                  <Icon icon="oui:app-reporting" width="36" height="36" />
                ),
                iconheading: "Reporting",
                icondiscription: "Provide transparent reporting and insights.",
              },
              {
                icon: (
                  <Icon icon="carbon:ibm-cloud-continuous-delivery" width="36" height="36" />
                ),
                iconheading: "Continuous Improvement",
                icondiscription:
                  "Identify opportunities to enhance maturity and assurance.",
              },
            ],

            whowehelp: [
              {
                titleofwhohelp:
                  "Built for organizations seeking confidence in their security and compliance posture",
                list: [
                  "Enterprises preparing for regulatory or certification audits",
                  "SaaS providers validating internal controls (SOC 2, ISO 27001)",
                  "Financial, healthcare, and public sector entities with mandatory audits",
                  "Cloud-native companies pursuing trust and assurance initiatives",
                  "Third-party vendors undergoing customer security assessments",
                ],
              },
            ],
            why: [
              {
                titl1: "Why Assurance & Audit",
                title2: "Why Assurance & Audit Matters",
                list: [
                  "Builds credibility and trust with clients, regulators, and stakeholders",
                  "Identifies control gaps before external audits or certifications",
                  "Reduces compliance risk and audit overhead",
                  "Enhances governance, accountability, and transparency",
                ],
              },
            ],
          },
          {
            title1: "Scope of Work", // SLIDE 2: NEW Scope of Work Slide
            scope: [
              {
                title: "Assurance & Audit Services",
                discription:
                  "Comprehensive assurance engagements to evaluate, validate, and strengthen security controls.",
                section: [
                  {
                    icons: <Icon icon="ant-design:audit-outlined" width="36" height="36" />,
                    heading: "Internal Security Audit",
                    p: "Evaluate internal controls against policies, standards, and frameworks.",
                  },
                  {
                    icons: (
                      <Icon icon="ant-design:audit-outlined" width="36" height="36" />
                    ),
                    heading: "External Audit Readiness",
                    p: "Prepare for ISO 27001, SOC 2, PCI DSS, HIPAA, and NIST audits.",
                  },
                  {
                    icons: (
                      <Icon icon="carbon:ibm-watsonx-code-assistant-for-z-validation-assistant" width="36" height="36" />
                    ),
                    heading: "Controls Testing & Validation",
                    p: "Assess effectiveness of technical, operational, and management controls.",
                  },
                  {
                    icons: (
                      <Icon icon="material-symbols-light:preview" width="36" height="36" />
                    ),
                    heading: "Policy & Process Compliance Review",
                    p: "Verify documentation, workflows, and governance alignment.",
                  },
                  {
                    icons: (
                      <Icon icon="arcticons:remote-support" width="36" height="36" />
                    ),
                    heading: "Remediation & Advisory Support",
                    p: "Provide recommendations to address identified findings.",
                  },
                  {
                    icons: (
                      <Icon icon="clarity:design-line" width="36" height="36" />
                    ),
                    heading: "Continuous Assurance Framework Design",
                    p: "Establish periodic audit cycles and automated evidence collection.",
                  },
                ],
              },
            ],
          },
          {
            title1: "Methodology", // SLIDE 3: Methodology (shifted index)
            methodology: [
              {
                heading: "Our 5-Phase Assurance & Audit Journey",
                subsection: [
                  {
                    number: "01",
                    heading: "Scoping & Planning",
                    discription:
                      "Define audit objectives, frameworks, and control boundaries.",
                  },
                  {
                    number: "02",
                    heading: "Evidence Collection & Review",
                    discription:
                      "Gather documentation, logs, and proof of control implementation.",
                  },
                  {
                    number: "03",
                    heading: "Testing & Validation",
                    discription:
                      "Perform control testing through interviews, walkthroughs, and simulations.",
                  },
                  {
                    number: "04",
                    heading: "Findings & Reporting",
                    discription:
                      "Document observations, classify risks, and recommend improvements.",
                  },
                  {
                    number: "05",
                    heading: "Remediation & Continuous Assurance",
                    discription:
                      "Support corrective actions and establish ongoing audit mechanisms.",
                  },
                ],
              },
            ],
            deliverables: [
              { li: "Audit Plan & Scope Document" },
              { li: "Controls Assessment Report" },
              { li: "Evidence Review & Validation Logs" },
              { li: "Findings & Risk Classification Matrix" },
              { li: "Remediation Action Plan" },
              { li: "Continuous Assurance Framework" },
              { li: "Compliance Mapping Report (ISO, SOC 2, NIST, PCI DSS)" },
              { li: "Executive Summary & Audit Closeout Presentation" },
            ],

            whychooseus: [
              {
                title: "Why Choose Us – Independent, Insight-Driven Assurance",
                ul: [
                  {
                    li: "Certified auditors with experience across multiple frameworks (ISO 27001, SOC 2, NIST, PCI DSS)",
                  },
                  {
                    li: "Proven methodologies combining technical validation and governance insights",
                  },
                  {
                    li: "Objective, transparent, and business-aligned evaluations",
                  },
                  {
                    li: "Actionable recommendations that improve audit readiness and control maturity",
                  },
                  {
                    li: "Ongoing partnership for continuous assurance and audit lifecycle support",
                  },
                ],
              },
            ],
          },
          { title1: "FAQ" }, // SLIDE 4: Placeholder
        ],
      },

      {
        id: "socauditservices",
        title: "→ SOC Audit Services",
        slides: [
          {
            title1: "Overview", // SLIDE 1: Overview
            title2: "What are SOC Audit Services?",
            discription:
              "SOC (System and Organization Controls) Audit Services evaluate and attest to the effectiveness of your organization’s security, availability, processing integrity, confidentiality, and privacy controls. They provide independent validation of your internal control environment, helping you meet regulatory, contractual, and client trust requirements.",
            icons: [
              {
                icon: <Icon icon="icon-park-outline:palace" width="36" height="36" />,
                iconheading: "Governance",
                icondiscription:
                  "Establish accountability, roles, and documentation.",
              },
              {
                icon: (
                  <Icon icon="carbon:ibm-devops-control" width="36" height="36" />
                ),
                iconheading: "Control Design",
                icondiscription:
                  "Define and align control objectives with trust principles.",
              },
              {
                icon: <Icon icon="carbon:ibm-watsonx-code-assistant-for-z-validation-assistant" width="36" height="36" />,
                iconheading: "Testing & Validation",
                icondiscription:
                  "Evaluate control effectiveness through detailed testing.",
              },
              {
                icon: (
                  <Icon icon="oui:app-reporting" width="36" height="36" />
                ),
                iconheading: "Reporting",
                icondiscription:
                  "Deliver audit reports aligned with AICPA standards.",
              },
              {
                icon: (
                  <Icon icon="carbon:continuous-deployment" width="36" height="36" />
                ),
                iconheading: "Continuous Assurance",
                icondiscription:
                  "Enable year-round compliance monitoring and readiness.",
              },
            ],

            whowehelp: [
              {
                titleofwhohelp:
                  "Designed for organizations that must demonstrate control effectiveness and assurance:",
                list: [
                  "SaaS and cloud service providers managing customer data",
                  "Enterprises requiring SOC 1 / SOC 2 / SOC 3 certifications",
                  "FinTech, HealthTech, and regulated entities with trust obligations",
                  "Managed service providers (MSPs/MSSPs) supporting multiple clients",
                  "Startups scaling to enterprise-grade compliance and trust frameworks",
                ],
              },
            ],
            why: [
              {
                titl1: "Why SOC Audit Services",
                title2: "Why SOC Audit Services Matter",
                list: [
                  "Builds customer trust through verified control assurance",
                  "Demonstrates compliance with AICPA Trust Services Criteria",
                  "Identifies control gaps before formal attestation audits",
                  "Streamlines readiness for ISO 27001, GDPR, and NIST frameworks",
                ],
              },
            ],
          },
          {
            title1: "Scope of Work", // SLIDE 2: NEW Scope of Work Slide
            scope: [
              {
                title: "SOC Audit Service Offerings",
                discription:
                  "End-to-end support across readiness, remediation, and formal audit preparation.",
                section: [
                  {
                    icons: <Icon icon="fluent-mdl2:assessment-group-template" width="36" height="36" />,
                    heading: "SOC 1, SOC 2, and SOC 3 Readiness Assessment",
                    p: "Evaluate current control design against AICPA Trust Principles.",
                  },
                  {
                    icons: (
                      <Icon icon="carbon:text-link-analysis" width="36" height="36" />
                    ),
                    heading: "Gap Analysis & Remediation Support",
                    p: "Identify missing controls and define actionable improvement plans.",
                  },
                  {
                    icons: (
                      <Icon icon="qlementine-icons:print-preview-16" width="36" height="36" />
                    ),
                    heading: "Policy & Process Documentation Review",
                    p: "Verify completeness and consistency of evidence and procedures.",
                  },
                  {
                    icons: (
                      <Icon icon="carbon:ibm-watsonx-code-assistant-for-z-validation-assistant" width="36" height="36" />
                    ),
                    heading: "Control Testing & Validation",
                    p: "Conduct walkthroughs, sampling, and technical validation of controls.",
                  },
                  {
                    icons: (
                      <Icon icon="ant-design:audit-outlined" width="36" height="36" />
                    ),
                    heading: "Audit Coordination & Support",
                    p: "Facilitate communication and documentation between your teams and external auditors.",
                  },
                  {
                    icons: (
                      <Icon icon="carbon:continuous-deployment" width="36" height="36" />
                    ),
                    heading: "Continuous Audit Readiness Program",
                    p: "Implement automated monitoring and evidence collection for ongoing assurance.",
                  },
                ],
              },
            ],
          },
          {
            title1: "Methodology", // SLIDE 3: Methodology (shifted index)
            methodology: [
              {
                heading: "Our 5-Phase SOC Audit Journey",
                subsection: [
                  {
                    number: "01",
                    heading: "Scoping & Framework Alignment",
                    discription:
                      "Identify SOC type (Type I / Type II) and define control boundaries.",
                  },
                  {
                    number: "02",
                    heading: "Current State & Gap Analysis",
                    discription:
                      "Assess existing control environment and map against SOC criteria.",
                  },
                  {
                    number: "03",
                    heading: "Remediation & Control Implementation",
                    discription:
                      "Support development and deployment of required controls and documentation.",
                  },
                  {
                    number: "04",
                    heading: "Audit Testing & Validation",
                    discription:
                      "Conduct mock audits, evidence review, and readiness validation.",
                  },
                  {
                    number: "05",
                    heading: "Reporting & Continuous Assurance",
                    discription:
                      "Deliver readiness report, audit coordination, and maturity improvement plan.",
                  },
                ],
              },
            ],
            deliverables: [
              { li: "SOC 1 / SOC 2 / SOC 3 Readiness Assessment Report" },
              {
                li: "Trust Services Criteria Mapping (Security, Availability, Confidentiality, etc.)",
              },
              { li: "Control Gap Analysis & Remediation Roadmap" },
              { li: "Policy & Evidence Review Summary" },
              { li: "Pre-Audit Testing & Validation Report" },
              { li: "Continuous Compliance Dashboard" },
              { li: "Executive Readiness Report for Stakeholders" },
              { li: "Ongoing Audit Support Plan" },
            ],

            whychooseus: [
              {
                title: "Why Choose Us – Trusted, End-to-End SOC Expertise",
                ul: [
                  {
                    li: "Deep expertise in AICPA, ISO, and NIST frameworks",
                  },
                  {
                    li: "Proven methodology for SOC 1, SOC 2, and SOC 3 readiness",
                  },
                  {
                    li: "End-to-end guidance from assessment through audit coordination",
                  },
                  {
                    li: "Certified auditors and compliance specialists with multi-industry experience",
                  },
                  {
                    li: "Business-aligned approach ensuring operational efficiency and trust assurance",
                  },
                ],
              },
            ],
          },
          { title1: "FAQ" }, // SLIDE 4: Placeholder
        ],
      },
      {
        id: "hitrust",
        title: "→ HITRUST",
        slides: [
          {
            title1: "Overview", // SLIDE 1: Overview
            title2: "What are HITRUST?",
            discription:
              "HITRUST (Health Information Trust Alliance) certification provides a unified framework to demonstrate compliance with multiple regulatory requirements including HIPAA, ISO, NIST, GDPR, and others. It offers a comprehensive, risk-based approach to managing data protection and ensuring trust in handling sensitive health and personal information.",
            icons: [
              {
                icon: <Icon icon="icon-park-outline:palace" width="36" height="36" />,
                iconheading: "Governance",
                icondiscription:
                  "Define ownership and oversight of information protection.",
              },
              {
                icon: (
                  <Icon icon="arcticons:orientation-control" width="36" height="36" />
                ),
                iconheading: "Control Framework",
                icondiscription:
                  "Implement and map controls across multiple frameworks.",
              },
              {
                icon: <Icon icon="fluent-mdl2:assessment-group-template" width="36" height="36" />,
                iconheading: "Assessment",
                icondiscription: "Conduct readiness and maturity evaluations.",
              },
              {
                icon: (
                  <Icon icon="carbon:ibm-watsonx-code-assistant-for-z-validation-assistant" width="36" height="36" />
                ),
                iconheading: "Validation",
                icondiscription:
                  "Validate compliance through independent third-party review.",
              },
              {
                icon: (
                  <Icon icon="mdi:certificate-outline" width="36" height="36" />
                ),
                iconheading: "Certification",
                icondiscription:
                  "Achieve formal HITRUST certification demonstrating trust and compliance.",
              },
            ],

            whowehelp: [
              {
                titleofwhohelp:
                  "Tailored for organizations managing regulated data or seeking multi-framework assurance",
                list: [
                  "Healthcare providers and insurers (HIPAA-covered entities)",
                  "HealthTech, MedTech, and Life Sciences organizations",
                  "SaaS vendors supporting healthcare data or PHI workflows",
                  "Cloud service providers and MSPs hosting healthcare systems",
                  "Enterprises pursuing comprehensive data protection and compliance certifications",
                ],
              },
            ],
            why: [
              {
                titl1: "Why HITRUST",
                title2: "Why HITRUST Matters",
                list: [
                  "Demonstrates compliance with multiple regulations in a single framework",
                  "Builds credibility and trust with healthcare partners and clients",
                  "Reduces complexity through unified control mapping and assessments",
                  "Enhances data protection maturity and operational resilience",
                ],
              },
            ],
          },
          {
            title1: "Scope of Work", // SLIDE 2: NEW Scope of Work Slide
            scope: [
              {
                title: "HITRUST Services",
                discription:
                  "Comprehensive support from readiness through certification and continuous compliance.",
                section: [
                  {
                    icons: <Icon icon="fluent-mdl2:assessment-group-template" width="36" height="36" />,
                    heading: "Readiness Assessment",
                    p: "Evaluate current controls against HITRUST CSF requirements.",
                  },
                  {
                    icons: (
                      <Icon icon="streamline-plump:arrow-roadmap" width="36" height="36" />
                    ),
                    heading: "Gap Analysis & Roadmap Development",
                    p: "Identify deficiencies and define actionable remediation plans.",
                  },
                  {
                    icons: (
                      <Icon icon="fluent-mdl2:documentation" width="36" height="36" />
                    ),
                    heading: "Control Implementation & Documentation",
                    p: "Deploy necessary technical, administrative, and procedural controls.",
                  },
                  {
                    icons: (
                      <Icon icon="iconoir:privacy-policy" width="36" height="36" />
                    ),
                    heading: "Policy & Procedure Enhancement",
                    p: "Align documentation with HITRUST CSF and HIPAA standards.",
                  },
                  {
                    icons: (
                      <Icon icon="streamline-flex:voice-activation-check-validate" width="36" height="36" />
                    ),
                    heading: "Validated Assessment Support",
                    p: "Coordinate evidence submission and manage third-party assessor engagement.",
                  },
                  {
                    icons: (
                      <Icon icon="pajamas:planning" width="36" height="36" />
                    ),
                    heading: "Continuous Compliance & Recertification Planning",
                    p: "Maintain certification readiness through periodic reviews and updates.",
                  },
                ],
              },
            ],
          },
          {
            title1: "Methodology", // SLIDE 3: Methodology (shifted index)
            methodology: [
              {
                heading: "Our 5-Phase HITRUST Journey",
                subsection: [
                  {
                    number: "01",
                    heading: "Scoping & Framework Alignment",
                    discription:
                      "Define certification scope, data systems, and regulatory overlaps.",
                  },
                  {
                    number: "02",
                    heading: "Current State Assessment",
                    discription:
                      "Assess existing security and compliance posture.",
                  },
                  {
                    number: "03",
                    heading: "Gap Analysis & Remediation Planning",
                    discription:
                      "Identify control gaps and develop detailed mitigation strategies.",
                  },
                  {
                    number: "04",
                    heading: "Control Implementation & Validation",
                    discription:
                      "Deploy and test controls, collect evidence, and prepare for validation.",
                  },
                  {
                    number: "05",
                    heading: "Certification & Continuous Maintenance",
                    discription:
                      "Support validated assessment, audit coordination, and continuous compliance program.",
                  },
                ],
              },
            ],
            deliverables: [
              { li: "HITRUST Readiness Assessment Report" },
              { li: "Control Gap Analysis & Maturity Dashboard" },
              { li: "HITRUST CSF Control Mapping (HIPAA, NIST, ISO, GDPR)" },
              { li: "Policy & Procedure Enhancement Package" },
              { li: "Evidence Collection & Validation Workbook" },
              { li: "Certification Readiness Plan" },
              { li: "Continuous Compliance Monitoring Framework" },
              { li: "Executive Summary for Stakeholders & Auditors" },
            ],

            whychooseus: [
              {
                title: "Why Choose Us – Expert Guidance for HITRUST Success",
                ul: [
                  {
                    li: "Certified professionals with deep HITRUST, HIPAA, and NIST expertise",
                  },
                  {
                    li: "End-to-end services from readiness to certification and maintenance",
                  },
                  {
                    li: "Proven methodology ensuring efficiency and reduced time-to-certification",
                  },
                  {
                    li: "Cross-framework alignment to streamline compliance management",
                  },
                  {
                    li: "Continuous partnership to sustain and evolve HITRUST maturity",
                  },
                ],
              },
            ],
          },
          { title1: "FAQ" }, // SLIDE 4: Placeholder
        ],
      },

      {
        id: "paymentsecurity",
        title: "→ Payment Security",
        slides: [
          // SLIDE 1 -------------------------------
          {
            title1: "Overview",
            title2: "What is Payment Security?",
            discription:
              "Payment Security focuses on protecting cardholder data, digital payment channels, and transaction systems from fraud and compromise. It ensures compliance with PCI DSS and other financial data protection standards, safeguarding both consumer trust and organizational reputation through robust governance, technology, and process controls.",

            icons: [
              {
                icon: <Icon icon="hugeicons:web-protection" width="36" height="36" />,
                iconheading: "Data Protection",
                icondiscription:
                  "Safeguard cardholder and transaction data from exposure.",
              },
              {
                icon: (
                  <Icon icon="mdi:user-access-control" width="36" height="36" />
                ),
                iconheading: "Access Control",
                icondiscription:
                  "Enforce least-privilege access and strong authentication.",
              },
              {
                icon: <Icon icon="oui:anomaly-detection" width="36" height="36" />,
                iconheading: "Monitoring & Detection",
                icondiscription:
                  "Continuously monitor networks for suspicious activity.",
              },
              {
                icon: (
                  <Icon icon="carbon:ibm-cloud-security-compliance-center-workload-protection" width="36" height="36" />
                ),
                iconheading: "Compliance",
                icondiscription:
                  "Maintain adherence to PCI DSS and global regulations.",
              },
              {
                icon: (
                  <Icon icon="hugeicons:data-recovery" width="36" height="36" />
                ),
                iconheading: "Resilience",
                icondiscription:
                  "Ensure system availability and rapid incident recovery.",
              },
            ],

            whowehelp: [
              {
                titleofwhohelp:
                  "Purpose-built for organizations handling sensitive payment data:",
                list: [
                  "Merchants and payment processors",
                  "FinTech and e-commerce platforms",
                  "Banks, card issuers, and payment gateways",
                  "Cloud service providers hosting payment applications",
                  "Organizations seeking PCI DSS, PA-DSS, or PCI PIN compliance",
                ],
              },
            ],

            why: [
              {
                titl1: "Why Payment Security",
                title2: "Why Payment Security Matters",
                list: [
                  "Prevents data breaches and financial fraud",
                  "Builds customer confidence through secure transactions",
                  "Ensures compliance with PCI DSS and related frameworks",
                  "Reduces financial and reputational risks across payment ecosystems",
                ],
              },
            ],
          },

          // SLIDE 2 -------------------------------
          {
            title1: "Scope of Work",
            scope: [
              {
                title: "Payment Security Services",
                discription:
                  "Comprehensive solutions to assess, implement, and sustain payment system security and compliance.",

                section: [
                  {
                    icons: <Icon icon="fluent-mdl2:assessment-group-template" width="36" height="36" />,
                    heading: "PCI DSS Readiness Assessment",
                    p: "Evaluate current environment against PCI DSS control requirements.",
                  },
                  {
                    icons: (
                      <Icon icon="arcticons:remote-support" width="36" height="36" />
                    ),
                    heading: "Gap Analysis & Remediation Support",
                    p: "Identify and address deficiencies across people, process, and technology.",
                  },
                  {
                    icons: (
                      <Icon icon="qlementine-icons:print-preview-16" width="36" height="36" />
                    ),
                    heading: "Network & Application Security Review",
                    p: "Assess segmentation, encryption, and vulnerability management practices.",
                  },
                  {
                    icons: (
                      <Icon icon="carbon:policy" width="36" height="36" />
                    ),
                    heading: "Policy & Procedure Development",
                    p: "Establish and document payment security policies and evidence libraries.",
                  },
                  {
                    icons: (
                      <Icon icon="ant-design:audit-outlined" width="36" height="36" />
                    ),
                    heading: "Audit Preparation & Coordination",
                    p: "Support evidence collection and collaboration with Qualified Security Assessors (QSAs).",
                  },
                  {
                    icons: (
                      <Icon icon="carbon:continuous-deployment" width="36" height="36" />
                    ),
                    heading: "Continuous Compliance & Monitoring",
                    p: "Implement ongoing tracking, reporting, and testing for compliance sustainability.",
                  },
                ],
              },
            ],
          },

          // SLIDE 3 -------------------------------
          {
            title1: "Methodology",
            methodology: [
              {
                heading: "Our 5-Phase Payment Security Journey",
                subsection: [
                  {
                    number: "01",
                    heading: "Scoping & Data Flow Mapping",
                    discription:
                      "Identify in-scope systems, data flows, and cardholder environments.",
                  },
                  {
                    number: "02",
                    heading: "Assessment & Gap Identification",
                    discription:
                      "Evaluate existing controls and determine compliance maturity.",
                  },
                  {
                    number: "03",
                    heading: "Remediation & Control Implementation",
                    discription:
                      "Deploy encryption, access, and monitoring controls to meet PCI DSS standards.",
                  },
                  {
                    number: "04",
                    heading: "Validation & Audit Readiness",
                    discription:
                      "Conduct internal reviews, testing, and QSA audit preparation.",
                  },
                  {
                    number: "05",
                    heading: "Continuous Compliance & Reporting",
                    discription:
                      "Establish ongoing compliance monitoring, periodic reviews, and reporting cycles.",
                  },
                ],
              },
            ],

            deliverables: [
              { li: "PCI DSS Readiness Assessment Report" },
              { li: "Network & Data Flow Diagrams" },
              { li: "Gap Analysis & Remediation Roadmap" },
              { li: "Policy & Evidence Documentation Package" },
              { li: "Security Configuration Review Summary" },
              { li: "Audit Readiness & QSA Support Plan" },
              { li: "Continuous Compliance Monitoring Framework" },
              { li: "Executive Dashboard & Reporting Templates" },
            ],

            whychooseus: [
              {
                title: "Why Choose Us – Trusted Experts in Payment Security",
                ul: [
                  { li: "Experienced PCI DSS and PA-DSS specialists" },
                  {
                    li: "Proven track record supporting merchants, banks, and processors",
                  },
                  {
                    li: "Deep understanding of payment architecture and regulatory overlap",
                  },
                  {
                    li: "Business-aligned approach balancing compliance and performance",
                  },
                  {
                    li: "Continuous partnership to maintain secure, compliant payment ecosystems",
                  },
                ],
              },
            ],
          },

          // SLIDE 4 -------------------------------
          { title1: "FAQ" },
        ],
      },
    ],
  },

  {
    id: "privacydataprotection",
    title: "Privacy & Data Protection",
    items: [
      {
        id: "privacyprogramimplementation",
        title: "→ Privacy Program Implementation",
        slides: [
          // SLIDE 1 -------------------------------
          {
            title1: "Overview",
            title2: "What is Privacy Program Implementation?",
            discription:
              "Privacy Program Implementation establishes a comprehensive governance and operational framework for managing personal and sensitive data. It ensures compliance with global data protection laws such as GDPR, CCPA, HIPAA, and ISO 27701, while embedding privacy principles across people, processes, and technology to protect data and maintain customer trust.",

            icons: [
              {
                icon: <Icon icon="icon-park-outline:palace" width="36" height="36" />,
                iconheading: "Governance",
                icondiscription:
                  "Define privacy leadership and accountability.",
              },
              {
                icon: (
                  <Icon icon="icon-park-outline:data-three" width="36" height="36" />
                ),
                iconheading: "Data Inventory & Classification",
                icondiscription:
                  "Identify and categorize personal data across systems.",
              },
              {
                icon: <Icon icon="oui:controls-vertical" width="36" height="36" />,
                iconheading: "Policies & Controls",
                icondiscription:
                  "Establish privacy policies, procedures, and technical safeguards.",
              },
              {
                icon: (
                  <Icon icon="carbon:ibm-cloud-security-compliance-center-workload-protection" width="36" height="36" />
                ),
                iconheading: "Compliance",
                icondiscription:
                  "Ensure adherence to global privacy laws and standards.",
              },
              {
                icon: (
                  <Icon icon="material-symbols:brand-awareness-outline" width="36" height="36" />
                ),
                iconheading: "Awareness & Culture",
                icondiscription:
                  "Build organization-wide privacy awareness and compliance culture.",
              },
            ],

            whowehelp: [
              {
                titleofwhohelp:
                  "Designed for organizations managing personal or regulated data at scale:",
                list: [
                  "Global enterprises subject to GDPR, CCPA, or HIPAA",
                  "SaaS and data-driven technology companies",
                  "HealthTech, FinTech, and e-commerce businesses handling PII or PHI",
                  "Startups preparing for enterprise compliance requirements",
                  "Enterprises seeking ISO 27701 privacy certification or alignment",
                ],
              },
            ],

            why: [
              {
                titl1: "Why Privacy",
                title2: "Why Privacy Program Implementation Matters",
                list: [
                  "Protects customer data and strengthens brand reputation",
                  "Ensures compliance with complex global privacy regulations",
                  "Reduces risk of data breaches and regulatory penalties",
                  "Promotes transparency, accountability, and trust with stakeholders",
                ],
              },
            ],
          },

          // SLIDE 2 -------------------------------
          {
            title1: "Scope of Work",
            scope: [
              {
                title: "Privacy Program Implementation Services",
                discription:
                  "End-to-end support to design, operationalize, and maintain enterprise privacy programs.",

                section: [
                  {
                    icons: <Icon icon="dashicons:privacy" width="36" height="36" />,
                    heading: "Privacy Governance Framework Design",
                    p: "Define roles, responsibilities, and program structure.",
                  },
                  {
                    icons: (
                      <Icon icon="fluent-mdl2:assessment-group-template" width="36" height="36" />
                    ),
                    heading: "Data Mapping & Risk Assessment",
                    p: "Identify data flows, processing activities, and privacy risks.",
                  },
                  {
                    icons: (
                      <Icon icon="carbon:policy" width="36" height="36" />
                    ),
                    heading: "Policy & Procedure Development",
                    p: "Create privacy policies, consent management, and data retention plans.",
                  },
                  {
                    icons: (
                      <Icon icon="icon-park:scatter-alignment" width="36" height="36" />
                    ),
                    heading: "Regulatory Alignment",
                    p: "Map practices to GDPR, CCPA, HIPAA, and ISO 27701 frameworks.",
                  },
                  {
                    icons: (
                      <Icon icon="iconoir:privacy-policy" width="36" height="36" />
                    ),
                    heading: "Privacy Impact Assessments (PIAs)",
                    p: "Evaluate high-risk processing activities for compliance assurance.",
                  },
                  {
                    icons: (
                      <Icon icon="material-symbols:brand-awareness-outline" width="36" height="36" />
                    ),
                    heading: "Awareness & Training Programs",
                    p: "Educate employees, vendors, and stakeholders on privacy best practices.",
                  },
                ],
              },
            ],
          },

          // SLIDE 3 -------------------------------
          {
            title1: "Methodology",
            methodology: [
              {
                heading: "Our 5-Phase Privacy Program Implementation Journey",
                subsection: [
                  {
                    number: "01",
                    heading: "Scoping & Maturity Assessment",
                    discription:
                      "Understand business context, data types, and current privacy posture.",
                  },
                  {
                    number: "02",
                    heading: "Framework Design & Governance Setup",
                    discription:
                      "Establish policies, accountability, and data protection structures.",
                  },
                  {
                    number: "03",
                    heading: "Implementation & Control Deployment",
                    discription:
                      "Roll out privacy controls, consent mechanisms, and monitoring tools.",
                  },
                  {
                    number: "04",
                    heading: "Validation & Compliance Testing",
                    discription:
                      "Assess privacy controls against regulatory frameworks and internal benchmarks.",
                  },
                  {
                    number: "05",
                    heading: "Continuous Monitoring & Improvement",
                    discription:
                      "Track compliance metrics, refresh training, and adapt to evolving regulations.",
                  },
                ],
              },
            ],

            deliverables: [
              { li: "Privacy Program Governance Framework" },
              { li: "Data Inventory & Flow Mapping Report" },
              { li: "Privacy Risk Assessment & Mitigation Plan" },
              {
                li: "Regulatory Alignment Matrix (GDPR, CCPA, HIPAA, ISO 27701)",
              },
              { li: "Policy & Procedure Documentation Set" },
              { li: "Privacy Impact Assessment (PIA) Templates" },
              { li: "Awareness & Training Toolkit" },
              { li: "Executive Summary & Continuous Compliance Roadmap" },
            ],

            whychooseus: [
              {
                title:
                  "Why Choose Us – Practical, Business-Aligned Privacy Expertise",
                ul: [
                  {
                    li: "Certified privacy professionals (CIPP/E, CIPM, ISO 27701, HIPAA)",
                  },
                  {
                    li: "Proven implementation methodology tailored to your regulatory landscape",
                  },
                  {
                    li: "Unified privacy and security alignment for operational efficiency",
                  },
                  {
                    li: "Scalable frameworks suitable for startups to global enterprises",
                  },
                  {
                    li: "Continuous support to sustain compliance and adapt to regulatory changes",
                  },
                ],
              },
            ],
          },

          // SLIDE 4 -------------------------------
          { title1: "FAQ" },
        ],
      },
    ],
  },

  {
    id: "threatsimulationemulation",
    title: "Threat Simulation & Emulation",
    items: [
      {
        id: "continuousredteaming",
        title: "→ Continuous Red Teaming",
        slides: [
          // SLIDE 1 -------------------------------
          {
            title1: "Overview",
            title2: "What is Continuous Red Teaming?",
            discription:
              "Continuous Red Teaming is an ongoing adversary-emulation program that simulates realistic threat activity against your people, processes, and technology—on a cadence—so you continuously validate detection, response, and resilience. Unlike point-in-time exercises, it blends automated adversary simulations, manual exploitation, and purple-team handoffs to drive measurable security improvements.",

            icons: [
              {
                icon: <Icon icon="fluent-mdl2:report-hacked" width="36" height="36" />,
                iconheading: "Adversary Emulation",
                icondiscription:
                  "Simulate real attacker tactics, techniques & procedures (TTPs).",
              },
              {
                icon: (
                  <Icon icon="streamline:threat-browser-1" width="36" height="36" />
                ),
                iconheading: "Threat Intelligence",
                icondiscription:
                  "Use up-to-date intel to prioritize likely attack paths.",
              },
              {
                icon: <Icon icon="carbon:ibm-watsonx-code-assistant-for-z-validation-assistant" width="36" height="36" />,
                iconheading: "Detection Validation",
                icondiscription:
                  "Validate SIEM/EDR detections and rule efficacy.",
              },
              {
                icon: (
                  <Icon icon="fluent-mdl2:responses-menu" width="36" height="36" />
                ),
                iconheading: "Response Testing",
                icondiscription:
                  "Test incident response, playbooks, and escalation workflows.",
              },
              {
                icon: (
                  <Icon icon="carbon:ibm-cloud-continuous-delivery" width="36" height="36" />
                ),
                iconheading: "Continuous Improvement",
                icondiscription:
                  "Deliver iterative findings, retests, and maturity uplift.",
              },
            ],

            whowehelp: [
              {
                titleofwhohelp: "Designed for modern cyber defense teams",
                list: [
                  "Enterprise security teams wanting continuous assurance",
                  "MSSPs/MDRs adding proactive offensive capabilities",
                  "Cloud-native/SaaS companies protecting customer data",
                  "Regulated organizations needing ongoing assurance (Finance, Health)",
                  "Product/security engineering teams improving secure-by-design practices",
                ],
              },
            ],

            why: [
              {
                titl1: "Why Continuous Red Teaming",
                title2: "Why Continuous Red Teaming Matters",
                list: [
                  "Reveals real-world gaps that static assessments miss",
                  "Validates detection and response under realistic pressure",
                  "Drives prioritized remediation with measurable risk reduction",
                  "Builds defender experience and improves playbook effectiveness",
                ],
              },
            ],
          },

          // SLIDE 2 -------------------------------
          {
            title1: "Scope of Work",
            scope: [
              {
                title: "Continuous Red Teaming Services",
                discription:
                  "End-to-end offensive program that blends planning, execution, validation, and remediation support.",

                section: [
                  {
                    icons: <Icon icon="fluent-mdl2:modeling-view" width="36" height="36" />,
                    heading: "Adversary Scoping & Threat Modeling",
                    p: "Define likely adversaries, critical assets, and high-value attack paths.",
                  },
                  {
                    icons: (
                      <Icon icon="carbon:ibm-cloud-pak-manta-automated-data-lineage" width="36" height="36" />
                    ),
                    heading: "Automated & Manual Emulation",
                    p: "Run scheduled adversary emulations using tooling plus hands-on exploit activity.",
                  },
                  {
                    icons: (
                      <Icon icon="carbon:ibm-watsonx-code-assistant-for-z-validation-assistant" width="36" height="36" />
                    ),
                    heading: "Detection & Telemetry Validation",
                    p: "Test SIEM, EDR, logging, and observability gaps across detection pipelines.",
                  },
                  {
                    icons: (
                      <Icon icon="streamline-freehand:collaboration-meeting-team-file" width="36" height="36" />
                    ),
                    heading: "Purple-Team Collaboration",
                    p: "Coordinate with blue teams for observations, rule tuning, and immediate remediation.",
                  },
                  {
                    icons: (
                      <Icon icon="healthicons:crisis-response-center-person-outline" width="36" height="36" />
                    ),
                    heading: "Incident Response Exercises",
                    p: "Run live playbooks, tabletop, and functional response drills under simulated incidents.",
                  },
                  {
                    icons: (
                      <Icon icon="oui:app-reporting" width="36" height="36" />
                    ),
                    heading: "Reporting, Retesting & Roadmap",
                    p: "Provide prioritized findings, retest after fixes, and maintain a continuous improvement roadmap.",
                  },
                ],
              },
            ],
          },

          // SLIDE 3 -------------------------------
          {
            title1: "Methodology",
            methodology: [
              {
                heading: "Our 5-Phase Continuous Red Teaming Journey",
                subsection: [
                  {
                    number: "01",
                    heading: "Scope & Threat Alignment",
                    discription:
                      "Define objectives, rules of engagement, asset in-scope, and threat profiles.",
                  },
                  {
                    number: "02",
                    heading: "Recon & Attack Surface Mapping",
                    discription:
                      "Map exposures, identity attack paths, and enumerate tooling/telemetry gaps.",
                  },
                  {
                    number: "03",
                    heading: "Emulation & Exploitation",
                    discription:
                      "Execute scheduled adversary campaigns combining automation and manual ops.",
                  },
                  {
                    number: "04",
                    heading: "Detection, Response & Purple-Team Handoff",
                    discription:
                      "Validate alerts, escalate through SOC processes, and iterate with defenders.",
                  },
                  {
                    number: "05",
                    heading: "Reporting, Remediation & Continuous Loop",
                    discription:
                      "Deliver findings, support remediation, retest, and adjust future scenarios.",
                  },
                ],
              },
            ],

            deliverables: [
              { li: "Continuous Red Team Program Plan & RoE" },
              { li: "Threat Model & Attack Path Inventory" },
              { li: "Campaign Playbooks & Execution Logs" },
              { li: "Detection Gap & Telemetry Improvement Report" },
              { li: "Incident Response Exercise Results & Playbook Updates" },
              { li: "Prioritized Remediation Roadmap (risk-ranked)" },
              { li: "Retest Evidence & Maturity Improvement Metrics" },
              { li: "Executive Risk Brief & Continuous Assurance Dashboard" },
            ],

            whychooseus: [
              {
                title:
                  "Why Choose Us – Practical, Measurable Offensive Assurance",
                ul: [
                  {
                    li: "Blend of seasoned red-team operators and threat intel analysts",
                  },
                  {
                    li: "Repeatable program design for continuous, measurable risk reduction",
                  },
                  {
                    li: "Strong purple-team culture to transfer skills and tune detections fast",
                  },
                  {
                    li: "Actionable, prioritized findings tied to business impact",
                  },
                  {
                    li: "Flexible delivery: in-house augmentation, managed program, or hybrid engagement",
                  },
                ],
              },
            ],
          },

          // SLIDE 4 -------------------------------
          { title1: "FAQ" },
        ],
      },

      {
        id: "breachattacksimulationbas",
        title: "→ Breach & Attack Simulation (BAS)",
        slides: [
          // SLIDE 1 -----------------------------------------
          {
            title1: "Overview",
            title2: "What is Breach & Attack Simulation (BAS)?",
            discription:
              "BAS continuously and automatically validates your security controls, detection logic, and response processes by simulating attacker tactics, techniques, and procedures across the kill chain. It provides measurable, repeatable assurance of defensive coverage without the cost and disruption of live red-team operations.",

            icons: [
              {
                icon: <Icon icon="carbon:ibm-watsonx-code-assistant-for-z-validation-assistant" width="36" height="36" />,
                iconheading: "Continuous Validation",
                icondiscription:
                  "Run scheduled simulations to maintain control efficacy.",
              },
              {
                icon: (
                  <Icon icon="ix:project-scenarios" width="36" height="36" />
                ),
                iconheading: "Realistic Emulation",
                icondiscription:
                  "Use threat-informed scenarios matching likely adversaries.",
              },
              {
                icon: <Icon icon="carbon:cloud-alerting" width="36" height="36" />,
                iconheading: "Telemetry Testing",
                icondiscription:
                  "Verify logging, alerting, and context across pipelines.",
              },
              {
                icon: (
                  <Icon icon="tabler:automation" width="36" height="36" />
                ),
                iconheading: "Automation",
                icondiscription:
                  "Scale coverage with automated campaign engines.",
              },
              {
                icon: (
                  <Icon icon="ep:guide" width="36" height="36" />
                ),
                iconheading: "Remediation Guidance",
                icondiscription:
                  "Produce prioritized fixes tied to business risk.",
              },
            ],

            whowehelp: [
              {
                titleofwhohelp:
                  "Ideal for organizations seeking continuous security assurance:",
                list: [
                  "Security operations teams measuring control effectiveness",
                  "Enterprises seeking continuous assurance at scale",
                  "MSSPs/MDRs validating multi-tenant detection rules",
                  "Cloud-native and hybrid environments with dynamic changes",
                  "Compliance-driven organizations needing demonstrable control testing",
                ],
              },
            ],

            why: [
              {
                titl1: "Why BAS",
                title2: "Why BAS Matters",
                list: [
                  "Continuously proves which controls actually stop or detect attacks",
                  "Reduces blind spots by testing telemetry and detection end-to-end",
                  "Prioritizes remediation with data-driven impact scores",
                  "Low-disruption way to measure progress between pen tests and red teams",
                ],
              },
            ],
          },

          // SLIDE 2 -----------------------------------------
          {
            title1: "Scope of Work",
            scope: [
              {
                title: "BAS Services",
                discription:
                  "Practical, scalable services to deploy, operate, and action BAS across your environment.",

                section: [
                  {
                    icons: <Icon icon="carbon:platform-automation" width="36" height="36" />,
                    heading: "Platform Deployment & Integration",
                    p: "Install BAS agents/connectors and integrate with SIEM, EDR, SOAR, and cloud telemetry.",
                  },
                  {
                    icons: (
                      <Icon icon="material-symbols:inbox-customize-outline" width="36" height="36" />
                    ),
                    heading: "Threat Library & Scenario Customization",
                    p: "Configure attacker playbooks mapped to MITRE ATT&CK and your threat profile.",
                  },
                  {
                    icons: (
                      <Icon icon="hugeicons:ai-scheduling" width="36" height="36" />
                    ),
                    heading: "Continuous Simulation & Scheduling",
                    p: "Run automated campaigns (daily/weekly/monthly) across in-scope assets.",
                  },
                  {
                    icons: (
                      <Icon icon="carbon:ibm-watsonx-code-assistant-for-z-validation-assistant" width="36" height="36" />
                    ),
                    heading: "Detection & Telemetry Validation",
                    p: "Test rules, alerts, and context enrichment across logging and monitoring stacks.",
                  },
                  {
                    icons: (
                      <Icon icon="fluent-mdl2:issue-tracking" width="36" height="36" />
                    ),
                    heading: "Remediation Prioritization & Tracking",
                    p: "Translate findings into prioritized fixes and track remediation SLAs.",
                  },
                  {
                    icons: (
                      <Icon icon="streamline-freehand:optimization-configuration" width="36" height="36" />
                    ),
                    heading: "Reporting & Program Optimization",
                    p: "Provide dashboards, executive summaries, and tuning recommendations.",
                  },
                ],
              },
            ],
          },

          // SLIDE 3 -----------------------------------------
          {
            title1: "Methodology",
            methodology: [
              {
                heading: "Our 5-Phase BAS Journey",
                subsection: [
                  {
                    number: "01",
                    heading: "Scope & Integration Planning",
                    discription:
                      "Define assets, environment boundaries, and telemetry touchpoints.",
                  },
                  {
                    number: "02",
                    heading: "Baseline Simulation & Discovery",
                    discription:
                      "Run initial scenarios to measure current detection and response coverage.",
                  },
                  {
                    number: "03",
                    heading: "Scenario Tuning & Threat Alignment",
                    discription:
                      "Customize playbooks to your industry, threat actors, and risk appetite.",
                  },
                  {
                    number: "04",
                    heading: "Continuous Execution & Validation",
                    discription:
                      "Execute recurring campaigns, validate detections, and log telemetry fidelity.",
                  },
                  {
                    number: "05",
                    heading: "Remediation, Retest & Optimization",
                    discription:
                      "Prioritize fixes, retest to confirm closure, and refine future scenarios.",
                  },
                ],
              },
            ],

            deliverables: [
              { li: "BAS Implementation Plan & RoE" },
              { li: "Integrated BAS Platform (connectors & agents)" },
              { li: "Custom Threat Scenario Library (MITRE-mapped)" },
              { li: "Continuous Simulation Results & Execution Logs" },
              { li: "Detection Gap & Telemetry Coverage Report" },
              { li: "Prioritized Remediation Roadmap with SLA tracking" },
              { li: "Executive Dashboard & KPI/KRI Scorecards" },
              { li: "Quarterly Program Review & Optimization Plan" },
            ],

            whychooseus: [
              {
                title: "Why Choose Us – Practical, Scalable BAS Expertise",
                ul: [
                  {
                    li: "Hands-on experience deploying BAS across cloud, on-prem, and hybrid estates",
                  },
                  {
                    li: "Threat-informed scenarios mapped to MITRE ATT&CK and real-world adversaries",
                  },
                  {
                    li: "Focus on telemetry quality — not just simulation results — to improve detectability",
                  },
                  {
                    li: "Action-first reporting that ties findings to business impact and fixability",
                  },
                  {
                    li: "Flexible delivery: platform-only enablement, managed simulation, or hybrid service",
                  },
                ],
              },
            ],
          },

          // SLIDE 4 -----------------------------------------
          { title1: "FAQ" },
        ],
      },
    ],
  },

  {
    id: "vulnerabilitydiscoverymanagement",
    title: "Vulnerability Discovery & Management",
    items: [
      {
        id: "vulnerabilitymanagement",
        title: "→ Vulnerability Management",
        slides: [
          // SLIDE 1 -----------------------------------------
          {
            title1: "Overview",
            title2: "What is Vulnerability Management?",
            discription:
              "Vulnerability Management is a continuous process of identifying, assessing, prioritizing, and remediating security weaknesses across your environment. It transforms raw vulnerability data into actionable risk intelligence—enabling organizations to proactively reduce attack surface, maintain compliance, and strengthen cyber resilience.",

            icons: [
              {
                icon: <Icon icon="carbon:ibm-watson-discovery" width="36" height="36" />,
                iconheading: "Discovery",
                icondiscription:
                  "Identify assets, applications, and dependencies in real time.",
              },
              {
                icon: (
                  <Icon icon="fluent-mdl2:assessment-group-template" width="36" height="36" />
                ),
                iconheading: "Assessment",
                icondiscription:
                  "Scan systems for known vulnerabilities and misconfigurations.",
              },
              {
                icon: <Icon icon="ph:ranking" width="36" height="36" />,
                iconheading: "Prioritization",
                icondiscription:
                  "Rank issues by exploitability and business impact.",
              },
              {
                icon: (
                  <Icon icon="ic:sharp-track-changes" width="36" height="36" />
                ),
                iconheading: "Remediation",
                icondiscription:
                  "Coordinate and track fixes across teams and technologies.",
              },
              {
                icon: (
                  <Icon icon="oui:app-reporting" width="36" height="36" />
                ),
                iconheading: "Reporting",
                icondiscription:
                  "Deliver actionable insights and executive risk reporting.",
              },
            ],

            whowehelp: [
              {
                titleofwhohelp:
                  "Designed for organizations seeking proactive risk reduction:",
                list: [
                  "Enterprises managing complex, multi-environment infrastructures",
                  "Security and IT teams seeking risk-based visibility",
                  "Regulated organizations with compliance-driven patching cycles",
                  "Cloud-native and DevOps-driven environments with rapid release pipelines",
                  "MSPs and MSSPs offering managed vulnerability management services",
                ],
              },
            ],

            why: [
              {
                titl1: "Why Vulnerability Management",
                title2: "Why Vulnerability Management Matters",
                list: [
                  "Reduces exposure to known exploits and zero-days",
                  "Prioritizes patching based on risk, not volume",
                  "Improves operational efficiency and compliance posture",
                  "Demonstrates proactive defense to customers and regulators",
                ],
              },
            ],
          },

          // SLIDE 2 -----------------------------------------
          {
            title1: "Scope of Work",
            scope: [
              {
                title: "Vulnerability Management Services",
                discription:
                  "Comprehensive support to build, operationalize, and mature your vulnerability management lifecycle.",

                section: [
                  {
                    icons: <Icon icon="carbon:classification" width="36" height="36" />,
                    heading: "Asset Discovery & Classification",
                    p: "Map all in-scope assets across cloud, network, and endpoints.",
                  },
                  {
                    icons: (
                      <Icon icon="streamline-ultimate:document-scanning-mode-camera" width="36" height="36" />
                    ),
                    heading: "Vulnerability Scanning & Validation",
                    p: "Conduct authenticated scans to detect vulnerabilities and misconfigurations.",
                  },
                  {
                    icons: (
                      <Icon icon="carbon:task-asset-view" width="36" height="36" />
                    ),
                    heading: "Risk-Based Prioritization",
                    p: "Leverage exploit data, CVSS, and asset criticality to prioritize remediation.",
                  },
                  {
                    icons: (
                      <Icon icon="carbon:gui-management" width="36" height="36" />
                    ),
                    heading: "Patch & Remediation Management",
                    p: "Coordinate fixes, deploy patches, and validate remediation effectiveness.",
                  },
                  {
                    icons: (
                      <Icon icon="oui:nav-alerting" width="36" height="36" />
                    ),
                    heading: "Continuous Monitoring & Alerting",
                    p: "Implement automated scanning cycles and real-time exposure tracking.",
                  },
                  {
                    icons: (
                      <Icon icon="icon-park-outline:palace" width="36" height="36" />
                    ),
                    heading: "Governance, Reporting & Metrics",
                    p: "Establish KPIs/KRIs, dashboards, and compliance alignment with ISO, NIST, and PCI DSS.",
                  },
                ],
              },
            ],
          },

          // SLIDE 3 -----------------------------------------
          {
            title1: "Methodology",
            methodology: [
              {
                heading: "Our 5-Phase Vulnerability Management Journey",
                subsection: [
                  {
                    number: "01",
                    heading: "Scoping & Asset Baseline",
                    discription:
                      "Define in-scope assets, environments, and business-critical systems.",
                  },
                  {
                    number: "02",
                    heading: "Assessment & Scanning",
                    discription:
                      "Perform scheduled scans and verify vulnerabilities.",
                  },
                  {
                    number: "03",
                    heading: "Risk Scoring & Prioritization",
                    discription:
                      "Map vulnerabilities to exploitability and asset importance.",
                  },
                  {
                    number: "04",
                    heading: "Remediation & Validation",
                    discription:
                      "Collaborate with IT to patch, mitigate, or isolate risks.",
                  },
                  {
                    number: "05",
                    heading: "Reporting & Continuous Improvement",
                    discription:
                      "Track closure rates, compliance trends, and exposure reduction metrics.",
                  },
                ],
              },
            ],

            deliverables: [
              { li: "Asset Inventory & Classification Report" },
              { li: "Vulnerability Assessment Report" },
              { li: "Risk-Based Prioritization Matrix" },
              { li: "Patch Management Playbook" },
              { li: "Remediation Tracking Dashboard" },
              {
                li: "Compliance & Governance Mapping (ISO, NIST, PCI DSS, CIS)",
              },
              { li: "Executive Vulnerability Summary (KPIs & Trends)" },
              { li: "Continuous Improvement & Maturity Roadmap" },
            ],

            whychooseus: [
              {
                title: "Why Choose Us – Proactive, Measurable Risk Reduction",
                ul: [
                  {
                    li: "Expertise across leading vulnerability tools (Tenable, Qualys, Rapid7, etc.)",
                  },
                  {
                    li: "Integration-ready approach for SIEM, SOAR, and ITSM workflows",
                  },
                  {
                    li: "Risk-based methodology combining threat intel and business context",
                  },
                  {
                    li: "Operational dashboards tailored for security leadership and IT teams",
                  },
                  {
                    li: "Proven ability to transform reactive patching into proactive defense",
                  },
                ],
              },
            ],
          },

          // SLIDE 4 -----------------------------------------
          { title1: "FAQ" },
        ],
      },
    ],
  },

  {
    id: "emergingthreatsurfacetesting",
    title: "Emerging Threat Surface Testing",
    items: [
      {
        id: "aimodeltesting",
        title: "→ AI Model Testing",
        slides: [
          // SLIDE 1 -----------------------------------------
          {
            title1: "Overview",
            title2: "What is AI Model Testing?",
            discription:
              "AI Model Testing ensures the security, reliability, fairness, and robustness of AI and machine learning systems. It systematically evaluates models for adversarial risks, bias, data leakage, and performance drift, validating that they operate safely and ethically across their lifecycle. The goal is to establish trustworthy AI aligned with organizational, regulatory, and ethical standards.",

            icons: [
              {
                icon: <Icon icon="hugeicons:security-lock" width="36" height="36" />,
                iconheading: "Security",
                icondiscription:
                  "Protect models from adversarial attacks and data poisoning.",
              },
              {
                icon: (
                  <Icon icon="streamline-ultimate:coding-apps-website-detect-virus-monitor-search" width="36" height="36" />
                ),
                iconheading: "Fairness",
                icondiscription:
                  "Detect and mitigate bias in data, features, and predictions.",
              },
              {
                icon: <Icon icon="grommet-icons:validate" width="36" height="36" />,
                iconheading: "Robustness",
                icondiscription:
                  "Validate resilience to input perturbations and edge cases.",
              },
              {
                icon: (
                  <Icon icon="gravity-ui:copy-transparent" width="36" height="36" />
                ),
                iconheading: "Explainability",
                icondiscription:
                  "Ensure model decisions are transparent and interpretable.",
              },
              {
                icon: (
                  <Icon icon="icon-park-outline:palace" width="36" height="36" />
                ),
                iconheading: "Governance",
                icondiscription:
                  "Align AI lifecycle with risk, compliance, and accountability standards.",
              },
            ],

            whowehelp: [
              {
                titleofwhohelp:
                  "Designed for organizations deploying AI responsibly at scale:",
                list: [
                  "AI-driven organizations deploying ML in production",
                  "FinTech, HealthTech, and GovTech platforms using sensitive data",
                  "Enterprises implementing GenAI or LLM-based tools",
                  "Data science and MLOps teams seeking model assurance",
                  "Businesses preparing for AI governance and regulatory compliance (EU AI Act, NIST AI RMF)",
                ],
              },
            ],

            why: [
              {
                titl1: "Why AI Model Testing",
                title2: "Why AI Model Testing Matters",
                list: [
                  "Prevents model exploitation, data leakage, and bias-induced harm",
                  "Strengthens stakeholder and regulatory trust in AI systems",
                  "Ensures compliance with AI assurance frameworks (NIST, ISO/IEC 42001)",
                  "Reduces operational and reputational risks from flawed models",
                ],
              },
            ],
          },

          // SLIDE 2 -----------------------------------------
          {
            title1: "Scope of Work",
            scope: [
              {
                title: "AI Model Testing Services",
                discription:
                  "Comprehensive evaluation of AI/ML models across data, code, and behavior layers.",

                section: [
                  {
                    icons: <Icon icon="iconoir:card-security" width="36" height="36" />,
                    heading: "Adversarial Security Testing",
                    p: "Simulate attacks (evasion, poisoning, model extraction) to assess security robustness.",
                  },
                  {
                    icons: (
                      <Icon icon="streamline:code-analysis" width="36" height="36" />
                    ),
                    heading: "Bias & Fairness Analysis",
                    p: "Evaluate data and model outputs for fairness, parity, and discrimination.",
                  },
                  {
                    icons: (
                      <Icon icon="catppuccin:folder-tests-open" width="36" height="36" />
                    ),
                    heading: "Explainability & Transparency Testing",
                    p: "Apply XAI techniques (LIME, SHAP, counterfactuals) to validate model interpretability.",
                  },
                  {
                    icons: (
                      <Icon icon="qlementine-icons:print-preview-16" width="36" height="36" />
                    ),
                    heading: "Data Quality & Integrity Review",
                    p: "Assess data lineage, drift, and potential leakage across training and inference.",
                  },
                  {
                    icons: (
                      <Icon icon="eos-icons:performance" width="36" height="36" />
                    ),
                    heading: "Performance & Stress Testing",
                    p: "Validate accuracy, latency, and reliability under load and varying data conditions.",
                  },
                  {
                    icons: (
                      <Icon icon="oui:index-mapping" width="36" height="36" />
                    ),
                    heading: "AI Governance & Compliance Mapping",
                    p: "Align with frameworks like NIST AI RMF, ISO/IEC 42001, and EU AI Act readiness.",
                  },
                ],
              },
            ],
          },

          // SLIDE 3 -----------------------------------------
          {
            title1: "Methodology",
            methodology: [
              {
                heading: "Our 5-Phase AI Model Testing Journey",
                subsection: [
                  {
                    number: "01",
                    heading: "Scoping & Model Profiling",
                    discription:
                      "Identify model type, use case, and risk classification.",
                  },
                  {
                    number: "02",
                    heading: "Baseline Assessment & Data Review",
                    discription:
                      "Evaluate datasets for quality, balance, and potential bias.",
                  },
                  {
                    number: "03",
                    heading: "Adversarial & Robustness Testing",
                    discription:
                      "Conduct controlled attack simulations and resilience validation.",
                  },
                  {
                    number: "04",
                    heading: "Explainability & Governance Review",
                    discription:
                      "Test transparency, decision rationale, and compliance with AI principles.",
                  },
                  {
                    number: "05",
                    heading: "Remediation & Continuous Monitoring",
                    discription:
                      "Recommend fixes, enable drift detection, and build continuous assurance loops.",
                  },
                ],
              },
            ],

            deliverables: [
              { li: "AI Model Risk & Security Assessment Report" },
              { li: "Bias, Fairness, and Explainability Analysis" },
              { li: "Adversarial Attack Simulation Logs & Findings" },
              { li: "Data Quality and Drift Detection Report" },
              {
                li: "Model Governance & Compliance Mapping (NIST, ISO/IEC 42001, EU AI Act)",
              },
              { li: "Remediation & Risk Mitigation Recommendations" },
              { li: "Continuous Model Monitoring Framework" },
              { li: "Executive AI Assurance Summary" },
            ],

            whychooseus: [
              {
                title: "Why Choose Us – Trusted AI Assurance Expertise",
                ul: [
                  {
                    li: "Experts in AI security, ethics, and governance frameworks",
                  },
                  {
                    li: "Hands-on experience testing LLMs, ML models, and GenAI pipelines",
                  },
                  {
                    li: "Blend of red teaming, data science, and compliance capabilities",
                  },
                  {
                    li: "Practical, measurable recommendations for AI reliability and safety",
                  },
                  {
                    li: "Continuous testing programs to align AI with enterprise trust requirements",
                  },
                ],
              },
            ],
          },

          // SLIDE 4 -----------------------------------------
          { title1: "FAQ" },
        ],
      },
    ],
  },

  {
    id: "threatdetectionresponse",
    title: "Threat Detection & Response",
    items: [
      {
        id: "manageddetectionandresponsemdr",
        title: "→ Managed Detection & Response (MDR)",
        slides: [
          // SLIDE 1 -----------------------------------------
          {
            title1: "Overview",
            title2: "What is Managed Detection & Response (MDR)?",
            discription:
              "Managed Detection & Response (MDR) delivers 24/7 threat monitoring, detection, and incident response by combining advanced analytics, threat intelligence, and human expertise. It acts as an extension of your security team—detecting and responding to threats in real time across endpoints, networks, and cloud workloads.",

            icons: [
              {
                icon: <Icon icon="material-symbols:visibility" width="36" height="36" />,
                iconheading: "Visibility",
                icondiscription:
                  "Centralize telemetry from endpoints, networks, and cloud.",
              },
              {
                icon: (
                  <Icon icon="oui:anomaly-detection" width="36" height="36" />
                ),
                iconheading: "Detection",
                icondiscription:
                  "Identify anomalies, intrusions, and malicious activity.",
              },
              {
                icon: <Icon icon="healthicons:crisis-response-center-person-outline" width="36" height="36" />,
                iconheading: "Response",
                icondiscription: "Contain and remediate incidents swiftly.",
              },
              {
                icon: (
                  <Icon icon="streamline:threat-folder-remix" width="36" height="36" />
                ),
                iconheading: "Threat Intelligence",
                icondiscription:
                  "Leverage global threat intelligence for context.",
              },
              {
                icon: (
                  <Icon icon="carbon:ibm-cloud-continuous-delivery" width="36" height="36" />
                ),
                iconheading: "Continuous Improvement",
                icondiscription:
                  "Enhance detections through ongoing tuning and analytics.",
              },
            ],

            whowehelp: [
              {
                titleofwhohelp:
                  "Ideal for organizations seeking managed defense:",
                list: [
                  "Organizations without in-house 24/7 SOC capability",
                  "Cloud-first and hybrid enterprises requiring managed defense",
                  "Compliance-driven industries (Finance, Healthcare, Government)",
                  "Security-conscious startups scaling operations",
                  "Teams seeking to augment internal SOC functions",
                ],
              },
            ],

            why: [
              {
                titl1: "Why MDR",
                title2: "Why MDR Matters",
                list: [
                  "Provides continuous, proactive threat monitoring and response",
                  "Reduces mean time to detect (MTTD) and mean time to respond (MTTR)",
                  "Bridges skill gaps with expert-led, real-time defense",
                  "Offers measurable improvement to security posture and resilience",
                ],
              },
            ],
          },

          // SLIDE 2 -----------------------------------------
          {
            title1: "Scope of Work",
            scope: [
              {
                title: "MDR Services",
                discription:
                  "Comprehensive threat detection and response designed to protect your digital ecosystem.",

                section: [
                  {
                    icons: <Icon icon="eos-icons:monitoring" width="36" height="36" />,
                    heading: "24/7 Threat Monitoring",
                    p: "Continuous analysis of telemetry from endpoints, network, and cloud.",
                  },
                  {
                    icons: (
                      <Icon icon="pixel:analytics" width="36" height="36" />
                    ),
                    heading: "Advanced Analytics & Correlation",
                    p: "Apply behavioral analytics, machine learning, and threat models to detect anomalies.",
                  },
                  {
                    icons: (
                      <Icon icon="fluent-mdl2:feedback-response-solid" width="36" height="36" />
                    ),
                    heading: "Incident Response & Containment",
                    p: "Rapid investigation, containment, and remediation support for confirmed threats.",
                  },
                  {
                    icons: (
                      <Icon icon="material-symbols:network-intelligence" width="36" height="36" />
                    ),
                    heading: "Threat Hunting & Intelligence",
                    p: "Proactive hunts informed by TTPs, threat feeds, and MITRE ATT&CK mapping.",
                  },
                  {
                    icons: (
                      <Icon icon="carbon:ibm-webmethods-hybrid-integration" width="36" height="36" />
                    ),
                    heading: "SIEM, EDR, and SOAR Integration",
                    p: "Leverage and integrate with your existing security tools and technologies.",
                  },
                  {
                    icons: (
                      <Icon icon="oui:nav-dashboards" width="36" height="36" />
                    ),
                    heading: "Reporting & Executive Dashboards",
                    p: "Deliver technical findings and business-aligned summaries on a continuous cadence.",
                  },
                ],
              },
            ],
          },

          // SLIDE 3 -----------------------------------------
          {
            title1: "Methodology",
            methodology: [
              {
                heading: "Our 5-Phase MDR Journey",
                subsection: [
                  {
                    number: "01",
                    heading: "Onboarding & Integration",
                    discription:
                      "Connect telemetry sources, define SLAs, and establish escalation workflows.",
                  },
                  {
                    number: "02",
                    heading: "Baseline & Tuning",
                    discription:
                      "Calibrate detections, thresholds, and response playbooks for your environment.",
                  },
                  {
                    number: "03",
                    heading: "Continuous Monitoring & Detection",
                    discription:
                      "Analyze logs, alerts, and behaviors across all assets in real time.",
                  },
                  {
                    number: "04",
                    heading: "Incident Investigation & Response",
                    discription:
                      "Classify alerts, contain incidents, and coordinate remediation actions.",
                  },
                  {
                    number: "05",
                    heading: "Reporting, Review & Optimization",
                    discription:
                      "Provide trend reports, performance metrics, and continuous improvement plans.",
                  },
                ],
              },
            ],

            deliverables: [
              { li: "24/7 Managed Threat Detection & Response Coverage" },
              { li: "Integrated SIEM/EDR/SOAR Environment" },
              { li: "Incident Investigation & Containment Reports" },
              { li: "Threat Intelligence & Hunting Summaries" },
              { li: "Monthly and Quarterly Security Posture Reports" },
              { li: "Continuous Detection Rule Tuning & Playbook Updates" },
              { li: "Executive Risk & KPI Dashboards" },
              {
                li: "Strategic Recommendations for Security Maturity Improvement",
              },
            ],

            whychooseus: [
              {
                title: "Why Choose Us – Proactive, Intelligence-Driven Defense",
                ul: [
                  {
                    li: "Global SOC coverage with skilled analysts and incident responders",
                  },
                  {
                    li: "Threat intelligence-driven detection mapped to MITRE ATT&CK",
                  },
                  {
                    li: "Seamless integration with existing tech stack (Microsoft, CrowdStrike, SentinelOne, Splunk, etc.)",
                  },
                  {
                    li: "Rapid containment and expert guidance during incidents",
                  },
                  {
                    li: "Continuous refinement ensuring evolving protection as threats advance",
                  },
                ],
              },
            ],
          },

          // SLIDE 4 -----------------------------------------
          { title1: "FAQ" },
        ],
      },
      {
        id: "extendeddetectionandresponsexdr",
        title: "→ Extended Detection & Response (XDR)",
        slides: [
          // SLIDE 1 -----------------------------------------
          {
            title1: "Overview",
            title2: "What is Extended Detection & Response (XDR)?",
            discription:
              "Extended Detection & Response (XDR) provides cross-domain visibility and response by unifying telemetry from endpoints, networks, email, identities, and cloud workloads into a single analytics-driven platform. It enables faster threat detection, correlation, and response through automation, AI analytics, and integrated threat intelligence.",

            icons: [
              {
                icon: <Icon icon="material-symbols:visibility" width="36" height="36" />,
                iconheading: "Unified Visibility",
                icondiscription:
                  "Consolidate telemetry from endpoint, network, identity, and cloud.",
              },
              {
                icon: (
                  <Icon icon="oui:ml-create-advanced-job" width="36" height="36" />
                ),
                iconheading: "Advanced Correlation",
                icondiscription:
                  "Correlate alerts to identify complex, multi-stage attacks.",
              },
              {
                icon: <Icon icon="healthicons:crisis-response-center-person" width="36" height="36" />,
                iconheading: "Automated Response",
                icondiscription:
                  "Automate playbooks to contain and remediate incidents.",
              },
              {
                icon: (
                  <Icon icon="streamline:threat-folder" width="36" height="36" />
                ),
                iconheading: "Threat Intelligence",
                icondiscription:
                  "Enrich detection with real-time global threat feeds.",
              },
              {
                icon: (
                  <Icon icon="streamline-freehand:optimization-configuration" width="36" height="36" />
                ),
                iconheading: "Continuous Optimization",
                icondiscription:
                  "Evolve detection rules and response workflows continuously.",
              },
            ],

            whowehelp: [
              {
                titleofwhohelp:
                  "Ideal for organizations seeking unified detection and response:",
                list: [
                  "Enterprises seeking centralized visibility across hybrid or multi-cloud environments",
                  "Organizations overwhelmed by alert fatigue and siloed security tools",
                  "Security teams transitioning from EDR or SIEM to unified detection frameworks",
                  "Regulated sectors needing end-to-end incident traceability",
                  "MSSPs/MDR providers enhancing managed detection capabilities",
                ],
              },
            ],

            why: [
              {
                titl1: "Why XDR",
                title2: "Why XDR Matters",
                list: [
                  "Breaks down data silos to provide contextual, correlated threat detection",
                  "Enables faster, automated response across security domains",
                  "Reduces alert noise and investigation time through AI and analytics",
                  "Improves overall security posture and operational efficiency",
                ],
              },
            ],
          },

          // SLIDE 2 -----------------------------------------
          {
            title1: "Scope of Work",
            scope: [
              {
                title: "XDR Services",
                discription:
                  "End-to-end design, deployment, and operation of unified detection and response ecosystems.",

                section: [
                  {
                    icons: <Icon icon="stash:integrations-duotone" width="36" height="36" />,
                    heading: "XDR Platform Design & Integration",
                    p: "Architect and integrate XDR across endpoint, network, identity, and cloud.",
                  },
                  {
                    icons: (
                      <Icon icon="gravity-ui:chart-area-stacked-normalized" width="36" height="36" />
                    ),
                    heading: "Telemetry Ingestion & Normalization",
                    p: "Collect and normalize logs from diverse systems for cross-domain analytics.",
                  },
                  {
                    icons: (
                      <Icon icon="material-symbols:engineering-outline" width="36" height="36" />
                    ),
                    heading: "Threat Correlation & Detection Engineering",
                    p: "Build detection rules, correlation logic, and automated workflows.",
                  },
                  {
                    icons: (
                      <Icon icon="tabler:automation" width="36" height="36" />
                    ),
                    heading: "Incident Response & Automation",
                    p: "Configure automated containment, isolation, and escalation playbooks.",
                  },
                  {
                    icons: (
                      <Icon icon="material-symbols-light:network-intelligence" width="36" height="36" />
                    ),
                    heading: "Threat Hunting & Intelligence Feeds",
                    p: "Enable proactive threat discovery powered by enriched global intelligence.",
                  },
                  {
                    icons: (
                      <Icon icon="oui:nav-dashboards" width="36" height="36" />
                    ),
                    heading: "Reporting & KPI Dashboards",
                    p: "Deliver real-time dashboards, detection metrics, and executive insights.",
                  },
                ],
              },
            ],
          },

          // SLIDE 3 -----------------------------------------
          {
            title1: "Methodology",
            methodology: [
              {
                heading: "Our 5-Phase XDR Implementation Journey",
                subsection: [
                  {
                    number: "01",
                    heading: "Assessment & Platform Selection",
                    discription:
                      "Evaluate current tools, telemetry sources, and integration readiness.",
                  },
                  {
                    number: "02",
                    heading: "Architecture & Integration",
                    discription:
                      "Design XDR topology and connect existing EDR, SIEM, and SOAR systems.",
                  },
                  {
                    number: "03",
                    heading: "Detection Engineering & Correlation",
                    discription:
                      "Build and tune correlation rules aligned to MITRE ATT&CK.",
                  },
                  {
                    number: "04",
                    heading: "Response Automation & Playbooks",
                    discription:
                      "Automate containment, remediation, and ticketing workflows.",
                  },
                  {
                    number: "05",
                    heading: "Continuous Monitoring & Optimization",
                    discription:
                      "Refine detection logic, enrich analytics, and review program maturity.",
                  },
                ],
              },
            ],

            deliverables: [
              { li: "XDR Platform Architecture & Integration Blueprint" },
              { li: "Telemetry Mapping & Normalization Framework" },
              { li: "Correlation Rules & Detection Engineering Library" },
              { li: "Automated Response Playbooks & Escalation Matrix" },
              { li: "Threat Intelligence & Hunting Reports" },
              { li: "Real-Time Dashboards & KPI Analytics" },
              { li: "Incident Response & Automation Validation Report" },
              { li: "Executive Summary & Maturity Roadmap" },
            ],

            whychooseus: [
              {
                title:
                  "Why Choose Us – Unified, Intelligence-Driven Detection Excellence",
                ul: [
                  {
                    li: "Proven experience integrating leading XDR platforms (Microsoft, Palo Alto, SentinelOne, CrowdStrike, etc.)",
                  },
                  {
                    li: "End-to-end delivery model — from architecture to 24/7 managed response",
                  },
                  {
                    li: "Threat intelligence-driven detection aligned to MITRE ATT&CK",
                  },
                  {
                    li: "Deep integration expertise across SIEM, SOAR, and cloud-native tools",
                  },
                  {
                    li: "Outcome-driven approach emphasizing visibility, speed, and operational maturity",
                  },
                ],
              },
            ],
          },

          // SLIDE 4 -----------------------------------------
          { title1: "FAQ" },
        ],
      },
      {
        id: "soarasaservice",
        title: "→ SOAR as a Service",
        slides: [
          // SLIDE 1 — OVERVIEW -----------------------------------------
          {
            title1: "Overview",
            title2: "What is SOAR as a Service?",
            discription:
              "SOAR as a Service delivers automated security operations by orchestrating alerts, workflows, and incident responses across your entire ecosystem. It enables faster, more consistent, and scalable incident handling through playbook-driven automation, case management, and threat intelligence integration — delivered as a managed, outcome-focused service.",

            icons: [
              {
                icon: <Icon icon="vaadin:automation" width="36" height="36" />,
                iconheading: "Automation",
                icondiscription:
                  "Automate repetitive SOC tasks and investigations.",
              },
              {
                icon: (
                  <Icon icon="grommet-icons:connect" width="36" height="36" />
                ),
                iconheading: "Orchestration",
                icondiscription:
                  "Connect tools across SIEM, EDR, ticketing, and communication systems.",
              },
              {
                icon: <Icon icon="healthicons:crisis-response-center-person" width="36" height="36" />,
                iconheading: "Response",
                icondiscription:
                  "Standardize containment, remediation, and escalation processes.",
              },
              {
                icon: (
                  <Icon icon="oui:integration-general" width="36" height="36" />
                ),
                iconheading: "Integration",
                icondiscription:
                  "Enable seamless data and workflow exchange between platforms.",
              },
              {
                icon: (
                  <Icon icon="streamline-freehand:optimization-configuration" width="36" height="36" />
                ),
                iconheading: "Optimization",
                icondiscription:
                  "Continuously refine playbooks for efficiency and accuracy.",
              },
            ],

            whowehelp: [
              {
                titleofwhohelp:
                  "Ideal for organizations seeking scalable automated security operations:",
                list: [
                  "Organizations seeking to automate and scale their SOC operations",
                  "Enterprises managing large alert volumes and manual response overheads",
                  "Security teams struggling with tool fragmentation and process inefficiency",
                  "MSSPs delivering managed detection and response services",
                  "Cloud-native or hybrid environments requiring unified workflow automation",
                ],
              },
            ],

            why: [
              {
                titl1: "Why SOAR",
                title2: "Why SOAR Matters",
                list: [
                  "Reduces incident response time through intelligent automation",
                  "Enhances SOC productivity and consistency with defined playbooks",
                  "Improves integration across existing tools and systems",
                  "Enables data-driven decision-making through centralized case management",
                ],
              },
            ],
          },

          // SLIDE 2 — SCOPE OF WORK -------------------------------------
          {
            title1: "Scope of Work",
            scope: [
              {
                title: "SOAR Services",
                discription:
                  "Comprehensive delivery and management of automated security operations workflows.",

                section: [
                  {
                    icons: <Icon icon="hugeicons:configuration-02" width="36" height="36" />,
                    heading: "SOAR Platform Deployment & Configuration",
                    p: "Set up and tailor the SOAR environment to your security ecosystem.",
                  },
                  {
                    icons: (
                      <Icon icon="arcticons:automation" width="36" height="36" />
                    ),
                    heading: "Playbook Design & Automation",
                    p: "Create custom playbooks for detection, triage, containment, and recovery.",
                  },
                  {
                    icons: (
                      <Icon icon="fluent:window-dev-tools-20-regular" width="36" height="36" />
                    ),
                    heading: "Integration with Security Tools",
                    p: "Connect SIEM, EDR, XDR, Ticketing, and ITSM tools for unified workflows.",
                  },
                  {
                    icons: (
                      <Icon icon="ix:data-management" width="36" height="36" />
                    ),
                    heading: "Incident Case Management",
                    p: "Centralize incident tracking, enrichment, and resolution across teams.",
                  },
                  {
                    icons: (
                      <Icon icon="streamline-sharp:threat-usb" width="36" height="36" />
                    ),
                    heading: "Threat Intelligence Automation",
                    p: "Ingest and operationalize TI feeds for enriched and contextual response.",
                  },
                  {
                    icons: (
                      <Icon icon="streamline-freehand:optimization-configuration" width="36" height="36" />
                    ),
                    heading: "SOC Optimization & KPI Reporting",
                    p: "Deliver ongoing performance dashboards and continuous playbook tuning.",
                  },
                ],
              },
            ],
          },

          // SLIDE 3 — METHODOLOGY ---------------------------------------
          {
            title1: "Methodology",
            methodology: [
              {
                heading: "Our 5-Phase SOAR Delivery Journey",
                subsection: [
                  {
                    number: "01",
                    heading: "Assessment & Use Case Definition",
                    discription:
                      "Identify key automation opportunities and priority workflows.",
                  },
                  {
                    number: "02",
                    heading: "Architecture & Integration",
                    discription:
                      "Connect SOAR to existing SIEM, EDR, XDR, and communication systems.",
                  },
                  {
                    number: "03",
                    heading: "Playbook Design & Implementation",
                    discription:
                      "Build, test, and deploy custom automation workflows.",
                  },
                  {
                    number: "04",
                    heading: "Operations & Continuous Improvement",
                    discription:
                      "Monitor, optimize, and refine response automation and alert handling.",
                  },
                  {
                    number: "05",
                    heading: "Reporting & Maturity Roadmap",
                    discription:
                      "Provide detailed performance metrics and recommendations for scale.",
                  },
                ],
              },
            ],

            deliverables: [
              { li: "SOAR Platform Configuration & Integration Blueprint" },
              { li: "Custom Playbook Library (Detection to Remediation)" },
              { li: "Integrated Alert & Case Management Framework" },
              { li: "Threat Intelligence Automation Feeds" },
              { li: "Performance & KPI Dashboards" },
              { li: "SOC Efficiency & Time-to-Response Reports" },
              { li: "Continuous Playbook Optimization Plan" },
              { li: "Governance & Compliance Alignment Report" },
            ],

            whychooseus: [
              {
                title:
                  "Why Choose Us – Operational Excellence Through Automation",
                ul: [
                  {
                    li: "Deep expertise with leading SOAR platforms (Splunk, Palo Alto Cortex, IBM Resilient, Microsoft Sentinel)",
                  },
                  {
                    li: "Proven framework for automation design, integration, and managed delivery",
                  },
                  {
                    li: "Custom playbooks aligned to your environment and compliance needs",
                  },
                  {
                    li: "Outcome-based SLAs ensuring measurable SOC efficiency gains",
                  },
                  {
                    li: "Continuous optimization through analytics, feedback, and AI-driven refinement",
                  },
                ],
              },
            ],
          },

          // SLIDE 4 — FAQ
          { title1: "FAQ" },
        ],
      },
      {
        id: "identitythreatdetectionandresponseitdr",
        title: "→ Identity Threat Detection & Response (ITDR)",
        slides: [
          {
            title1: "Overview",
            title2: "What is Identity Threat Detection & Response (ITDR)?",
            discription:
              "ITDR is a proactive security capability focused on detecting, preventing, and responding to identity-based threats across IAM platforms, Active Directory, cloud identity services, and authentication systems. It helps defend against credential compromise, privilege abuse, lateral movement, and identity-focused attack paths—ensuring secure access aligned with Zero Trust principles.",

            icons: [
              {
                icon: <Icon icon="mdi:account-search" width="36" height="36" />,
                iconheading: "Identity Visibility",
                icondiscription:
                  "Map and classify all users, machine identities, and privileged access flows.",
              },
              {
                icon: <Icon icon="mdi:shield-alert" width="36" height="36" />,
                iconheading: "Threat Detection",
                icondiscription:
                  "Detect compromised credentials, session hijacking, and anomalous access patterns.",
              },
              {
                icon: <Icon icon="mdi:chart-bell-curve" width="36" height="36" />,
                iconheading: "Behavior Analytics",
                icondiscription:
                  "Leverage UEBA to detect deviations, insider risk, and identity manipulation attempts.",
              },
              {
                icon: <Icon icon="mdi:lock-alert-outline" width="36" height="36" />,
                iconheading: "Access Anomaly Response",
                icondiscription:
                  "Automate mitigation actions for suspicious or unauthorized identity activities.",
              },
              {
                icon: <Icon icon="mdi:account-hard-hat" width="36" height="36" />,
                iconheading: "Identity Hardening",
                icondiscription:
                  "Strengthen authentication, MFA enforcement, and privilege models to reduce risk.",
              },
            ],

            whowehelp: [
              {
                titleofwhohelp:
                  "Designed for identity-dependent environments and organizations adopting Zero Trust",
                list: [
                  "Organizations with hybrid IAM, AD/Azure AD or multi-cloud identity environments",
                  "Enterprises facing credential attacks, insider risk or lateral movement threats",
                  "Cloud-first companies requiring continuous identity monitoring",
                  "Businesses modernizing access models with Zero Trust initiatives",
                  "CISOs seeking unified visibility over human and machine identities",
                ],
              },
            ],

            why: [
              {
                titl1: "Why ITDR",
                title2: "Why Identity Threat Detection & Response Matters",
                list: [
                  "Identity is now the #1 attack vector in modern cyber breaches",
                  "Prevents credential theft, lateral movement, and privilege abuse",
                  "Enhances SOC visibility beyond SIEM/EDR detection gaps",
                  "Supports Zero Trust and continuous identity verification strategy",
                ],
              },
            ],
          },

          {
            title1: "Scope of Work",
            scope: [
              {
                title: "ITDR Services",
                discription:
                  "End-to-end implementation and management of identity-focused detection and response capabilities.",

                section: [
                  {
                    icons: <Icon icon="fluent-mdl2:assessment-group-template" width="36" height="36" />,
                    heading: "Identity Architecture Assessment",
                    p: "Evaluate IAM, AD/Azure AD, SSO, and privileged identity structures.",
                  },
                  {
                    icons: (
                      <Icon icon="fluent-mdl2:modeling-view" width="36" height="36" />
                    ),
                    heading: "Identity Threat Modeling",
                    p: "Identify risky access paths, escalations, and exploitable identity weaknesses.",
                  },
                  {
                    icons: <Icon icon="mdi:waveform" width="36" height="36" />,
                    heading: "Behavioral Detection & Analytics",
                    p: "Deploy alerting for suspicious login behavior, impossible travel, MFA fatigue and anomaly patterns.",
                  },
                  {
                    icons: <Icon icon="mdi:shield-key-outline" width="36" height="36" />,
                    heading: "Identity Infrastructure Hardening",
                    p: "Secure IAM, directory services, authentication flows, and privileged access routes.",
                  },
                  {
                    icons: <Icon icon="mdi:robot-excited-outline" width="36" height="36" />,
                    heading: "Automated Response Playbooks",
                    p: "Enable auto-containment including account lockout, token revocation, and forced MFA reset.",
                  },
                  {
                    icons: <Icon icon="mdi:chart-areaspline" width="36" height="36" />,
                    heading: "Continuous Monitoring & Governance",
                    p: "Enable dashboards and metrics for real-time identity risk and compliance tracking.",
                  },
                ],
              },
            ],
          },

          {
            title1: "Methodology",
            methodology: [
              {
                heading: "Our 5-Phase ITDR Journey",
                subsection: [
                  {
                    number: "01",
                    heading: "Assessment & Visibility Baseline",
                    discription:
                      "Discover user accounts, service identities, authentication paths, and privilege dependencies.",
                  },
                  {
                    number: "02",
                    heading: "Threat Modeling & Gap Analysis",
                    discription:
                      "Analyze exposure paths, credential risks, and abuse potential across hybrid environments.",
                  },
                  {
                    number: "03",
                    heading: "Detection & Analytics Integration",
                    discription:
                      "Deploy UEBA, SIEM, ITDR tooling, and advanced identity detection rules.",
                  },
                  {
                    number: "04",
                    heading: "Automated Response & Playbooks",
                    discription:
                      "Develop automated workflows aligned to SOC handoff, governance, and escalation processes.",
                  },
                  {
                    number: "05",
                    heading: "Continuous Optimization & Governance",
                    discription:
                      "Refine detections, validate controls, and align identity defense with Zero Trust maturity.",
                  },
                ],
              },
            ],

            deliverables: [
              { li: "Identity Security Assessment & Attack Path Report" },
              { li: "Comprehensive Identity Inventory & Privilege Mapping" },
              { li: "Threat Detection Rule Set & UEBA Analytics Configuration" },
              { li: "Identity Hardening Recommendations (IAM, AD/AAD, SSO)" },
              { li: "Automated Response & SOC Playbook Set" },
              { li: "Identity Risk & Threat Monitoring Dashboard" },
              { li: "Governance Framework for Privilege & Access Lifecycle" },
              { li: "Executive Summary with ITDR Maturity & ROI Analysis" },
            ],

            whychooseus: [
              {
                title: "Why Choose Us — Identity Defense Built for Modern Threats",
                ul: [
                  {
                    li: "Deep expertise across IAM, PAM/PIM, AD/Azure AD and cloud identity ecosystems",
                  },
                  {
                    li: "Aligned with Zero Trust, NIST, MITRE ATT&CK for Identity, and modern security frameworks",
                  },
                  {
                    li: "Integrated approach bridging SIEM, SOAR, XDR, UEBA and identity threat response platforms",
                  },
                  {
                    li: "Engineering-led, measurable risk reduction with real-world threat coverage",
                  },
                  {
                    li: "Flexible engagement: advisory, implementation, managed program or hybrid operations",
                  },
                ],
              },
            ],
          },

          { title1: "FAQ" },
        ],
      },

      {
        id: "socforotoperationaltechnology",
        title: "→ Security Operations Center (SOC) for OT",
        slides: [
          // SLIDE 1 — OVERVIEW -----------------------------------------
          {
            title1: "Overview",
            title2: "What is SOC for OT?",
            discription:
              "SOC for OT (Operational Technology) provides real-time monitoring, detection, and response capabilities specifically designed for industrial control systems (ICS), SCADA, and critical infrastructure environments. It bridges the IT and OT security gap by enabling visibility, anomaly detection, and incident management across industrial networks without disrupting operations.",

            icons: [
              {
                icon: <Icon icon="material-symbols:visibility-outline-rounded" width="36" height="36" />,
                iconheading: "Visibility",
                icondiscription:
                  "Gain deep insight into industrial assets, protocols, and network activity.",
              },
              {
                icon: (
                  <Icon icon="oui:anomaly-detection" width="36" height="36" />
                ),
                iconheading: "Detection",
                icondiscription:
                  "Identify malicious behavior, anomalies, and unauthorized changes.",
              },
              {
                icon: <Icon icon="healthicons:crisis-response-center-person" width="36" height="36" />,
                iconheading: "Response",
                icondiscription:
                  "Contain and remediate incidents without affecting production uptime.",
              },
              {
                icon: (
                  <Icon icon="oui:integration-general" width="36" height="36" />
                ),
                iconheading: "Integration",
                icondiscription:
                  "Integrate OT telemetry with IT SOC and SIEM systems.",
              },
              {
                icon: (
                  <Icon icon="eos-icons:monitoring" width="36" height="36" />
                ),
                iconheading: "Resilience",
                icondiscription:
                  "Ensure operational continuity and safety through secure design and monitoring.",
              },
            ],

            whowehelp: [
              {
                titleofwhohelp:
                  "Purpose-built for organizations with critical OT systems:",
                list: [
                  "Manufacturing, Energy, and Utilities providers with critical OT environments",
                  "Oil & Gas, Transportation, and Smart Infrastructure operators",
                  "Industrial enterprises expanding IT-OT connectivity",
                  "Organizations seeking compliance with NERC CIP, ISA/IEC 62443, or NIST CSF",
                  "Businesses requiring real-time protection against OT-specific cyber threats",
                ],
              },
            ],

            why: [
              {
                titl1: "Why SOC for OT",
                title2: "Why SOC for OT Matters",
                list: [
                  "Protects mission-critical systems from downtime and cyber disruption",
                  "Reduces risk of ransomware and supply chain attacks on industrial assets",
                  "Enables unified visibility across IT and OT networks",
                  "Enhances compliance with operational and cybersecurity regulations",
                ],
              },
            ],
          },

          // SLIDE 2 — SCOPE OF WORK -------------------------------------
          {
            title1: "Scope of Work",
            scope: [
              {
                title: "SOC for OT Services",
                discription:
                  "End-to-end monitoring and response tailored to industrial systems and critical operations.",

                section: [
                  {
                    icons: <Icon icon="carbon:ibm-watson-discovery" width="36" height="36" />,
                    heading: "OT Asset Discovery & Visibility",
                    p: "Identify and classify all devices, assets, and communication pathways across OT networks.",
                  },
                  {
                    icons: (
                      <Icon icon="eos-icons:monitoring" width="36" height="36" />
                    ),
                    heading: "Threat Detection & Anomaly Monitoring",
                    p: "Implement behavioral analytics to detect intrusions or operational deviations.",
                  },
                  {
                    icons: (
                      <Icon icon="fluent-mdl2:responses-menu" width="36" height="36" />
                    ),
                    heading: "Incident Response & Containment",
                    p: "Execute OT-safe response strategies that protect uptime and integrity.",
                  },
                  {
                    icons: (
                      <Icon icon="carbon:ibm-webmethods-hybrid-integration" width="36" height="36" />
                    ),
                    heading: "Integration with IT SOC & SIEM",
                    p: "Centralize alerts and telemetry into unified monitoring platforms.",
                  },
                  {
                    icons: (
                      <Icon icon="material-symbols:network-intelligence" width="36" height="36" />
                    ),
                    heading: "Threat Intelligence for OT",
                    p: "Ingest OT-specific intelligence to identify emerging attack vectors.",
                  },
                  {
                    icons: (
                      <Icon icon="hugeicons:frameworks" width="36" height="36" />
                    ),
                    heading: "Compliance & Reporting Frameworks",
                    p: "Align SOC operations with ISA/IEC 62443, NIST CSF, and industry standards.",
                  },
                ],
              },
            ],
          },

          // SLIDE 3 — METHODOLOGY ---------------------------------------
          {
            title1: "Methodology",
            methodology: [
              {
                heading: "Our 5-Phase OT SOC Implementation Journey",
                subsection: [
                  {
                    number: "01",
                    heading: "Assessment & Architecture Design",
                    discription:
                      "Evaluate current OT network, asset inventory, and risk exposure.",
                  },
                  {
                    number: "02",
                    heading: "Integration & Visibility Enablement",
                    discription:
                      "Deploy sensors and collectors to capture OT network traffic safely.",
                  },
                  {
                    number: "03",
                    heading: "Detection Engineering & Analytics Setup",
                    discription:
                      "Build correlation rules and behavior models tailored to OT protocols.",
                  },
                  {
                    number: "04",
                    heading: "Response Playbook Development",
                    discription:
                      "Design incident playbooks aligned to operational safety and continuity.",
                  },
                  {
                    number: "05",
                    heading: "Continuous Monitoring & Optimization",
                    discription:
                      "Operate 24/7 OT SOC with performance tuning and threat intelligence updates.",
                  },
                ],
              },
            ],

            deliverables: [
              { li: "Comprehensive OT Asset Inventory & Network Mapping" },
              { li: "OT Threat Detection Rules & Analytics Configuration" },
              { li: "Incident Response & Escalation Playbooks (OT-Safe)" },
              { li: "Integrated IT-OT SOC Dashboard & Reporting Framework" },
              { li: "Threat Intelligence Feed Specific to OT/ICS/SCADA" },
              { li: "Compliance Mapping (NIST, NERC CIP, IEC 62443)" },
              { li: "Incident & Anomaly Reports with Root Cause Analysis" },
              { li: "Continuous Improvement & Maturity Roadmap" },
            ],

            whychooseus: [
              {
                title: "Why Choose Us – Secure, Reliable OT Operations",
                ul: [
                  {
                    li: "Expertise across OT, ICS, SCADA, and IIoT ecosystems",
                  },
                  {
                    li: "Non-intrusive monitoring ensuring zero production disruption",
                  },
                  {
                    li: "Alignment with global standards (ISA/IEC 62443, NIST CSF, NERC CIP)",
                  },
                  {
                    li: "Seamless integration with existing IT SOC or SIEM infrastructure",
                  },
                  {
                    li: "24/7 monitoring backed by industrial threat intelligence and analytics",
                  },
                ],
              },
            ],
          },

          // SLIDE 4 — FAQ
          { title1: "FAQ" },
        ],
      },
    ],
  },

  {
    id: "identityaccesssecurity",
    title: "Identity & Access Security",
    items: [
      {
        id: "privilegedidentitymanagementpim",
        title: "→ Privileged Identity Management (PIM)",
        slides: [
          // SLIDE 1 — OVERVIEW --------------------------------------------------
          {
            title1: "Overview",
            title2: "What is Privileged Identity Management (PIM)?",
            discription:
              "Privileged Identity Management (PIM) provides control, visibility, and governance over privileged accounts — the most critical identities within an organization. It helps manage and monitor privileged access to critical systems, applications, and infrastructure through just-in-time (JIT) access, session monitoring, and policy enforcement.",

            icons: [
              {
                icon: <Icon icon="material-symbols:visibility-outline" width="36" height="36" />,
                iconheading: "Visibility",
                icondiscription:
                  "Identify and classify privileged accounts across the enterprise.",
              },
              {
                icon: (
                  <Icon icon="mdi:user-access-control" width="36" height="36" />
                ),
                iconheading: "Access Control",
                icondiscription:
                  "Enforce least privilege and just-in-time access for critical systems.",
              },
              {
                icon: <Icon icon="icon-park-outline:palace" width="36" height="36" />,
                iconheading: "Governance",
                icondiscription:
                  "Apply governance policies aligned with compliance frameworks.",
              },
              {
                icon: (
                  <Icon icon="eos-icons:monitoring" width="36" height="36" />
                ),
                iconheading: "Monitoring",
                icondiscription:
                  "Record, audit, and analyze privileged sessions.",
              },
              {
                icon: (
                  <Icon icon="arcticons:automation" width="36" height="36" />
                ),
                iconheading: "Automation",
                icondiscription:
                  "Automate provisioning, deprovisioning, and credential rotation.",
              },
            ],

            whowehelp: [
              {
                titleofwhohelp:
                  "Purpose-built for organizations securing privileged access:",
                list: [
                  "Enterprises managing large hybrid environments with privileged accounts",
                  "Organizations subject to compliance frameworks (ISO 27001, NIST, SOX, HIPAA, GDPR)",
                  "Cloud-first companies adopting Zero Trust and least-privilege strategies",
                  "IT, DevOps, and Security teams seeking centralized privilege control",
                  "Regulated industries mitigating insider and third-party access risks",
                ],
              },
            ],

            why: [
              {
                titl1: "Why PIM",
                title2: "Why PIM Matters",
                list: [
                  "Reduces risk of insider threats and privilege abuse",
                  "Ensures compliance with access governance and audit mandates",
                  "Enables Zero Trust and least-privilege implementation at scale",
                  "Enhances visibility and accountability for privileged actions",
                ],
              },
            ],
          },

          // SLIDE 2 — SCOPE OF WORK -----------------------------------------
          {
            title1: "Scope of Work",
            scope: [
              {
                title: "PIM Services",
                discription:
                  "End-to-end governance and control of privileged identities across cloud, hybrid, and on-premises environments.",

                section: [
                  {
                    icons: <Icon icon="carbon:map-identify" width="36" height="36" />,
                    heading: "Privileged Account Discovery & Classification",
                    p: "Identify privileged accounts, service identities, and credentials across all environments.",
                  },
                  {
                    icons: (
                      <Icon icon="hugeicons:policy" width="36" height="36" />
                    ),
                    heading: "Access Governance & Policy Design",
                    p: "Define least-privilege and just-in-time access policies aligned to roles and compliance needs.",
                  },
                  {
                    icons: (
                      <Icon icon="hugeicons:file-management" width="36" height="36" />
                    ),
                    heading: "Privileged Session Management",
                    p: "Enable session recording, monitoring, and command-level tracking for accountability.",
                  },
                  {
                    icons: (
                      <Icon icon="carbon:credentials" width="36" height="36" />
                    ),
                    heading: "Password Vaulting & Credential Rotation",
                    p: "Automate password lifecycle management and enforce secure credential handling.",
                  },
                  {
                    icons: (
                      <Icon icon="carbon:ibm-webmethods-hybrid-integration" width="36" height="36" />
                    ),
                    heading: "Integration with IAM, SIEM, and SOAR",
                    p: "Correlate identity events with broader detection and response systems.",
                  },
                  {
                    icons: (
                      <Icon icon="oui:app-reporting" width="36" height="36" />
                    ),
                    heading: "Reporting & Compliance Automation",
                    p: "Generate audit-ready reports aligned to NIST, ISO, and SOC 2 frameworks.",
                  },
                ],
              },
            ],
          },

          // SLIDE 3 — METHODOLOGY -----------------------------------------
          {
            title1: "Methodology",
            methodology: [
              {
                heading: "Our 5-Phase PIM Implementation Journey",
                subsection: [
                  {
                    number: "01",
                    heading: "Assessment & Gap Analysis",
                    discription:
                      "Review existing access controls, privilege models, and compliance requirements.",
                  },
                  {
                    number: "02",
                    heading: "Architecture & Design",
                    discription:
                      "Define PIM architecture, policy structure, and integration points.",
                  },
                  {
                    number: "03",
                    heading: "Deployment & Integration",
                    discription:
                      "Implement PIM tools across on-prem, cloud, and hybrid infrastructure.",
                  },
                  {
                    number: "04",
                    heading: "Policy Enforcement & Automation",
                    discription:
                      "Deploy least-privilege policies, credential rotation, and session controls.",
                  },
                  {
                    number: "05",
                    heading: "Monitoring & Continuous Improvement",
                    discription:
                      "Conduct periodic reviews, audit reports, and optimization of privilege governance.",
                  },
                ],
              },
            ],

            deliverables: [
              { li: "Comprehensive Privileged Account Inventory" },
              { li: "PIM Architecture & Policy Framework" },
              { li: "Access Governance & Control Matrix" },
              { li: "Just-in-Time Access and Least Privilege Configuration" },
              { li: "Privileged Session Monitoring Dashboard" },
              { li: "Credential Vaulting & Rotation Implementation" },
              { li: "Compliance Reports (SOX, ISO 27001, NIST, SOC 2)" },
              { li: "Continuous Governance & Risk Optimization Roadmap" },
            ],

            whychooseus: [
              {
                title: "Why Choose Us – Trusted Privilege Governance Expertise",
                ul: [
                  {
                    li: "Proven experience implementing leading PIM solutions (CyberArk, BeyondTrust, Microsoft Entra, Delinea)",
                  },
                  {
                    li: "Alignment with Zero Trust and compliance-driven architectures",
                  },
                  {
                    li: "Integration expertise across IAM, SIEM, and SOAR ecosystems",
                  },
                  {
                    li: "Comprehensive governance framework ensuring audit readiness",
                  },
                  {
                    li: "Measurable reduction in insider and access-related risk",
                  },
                ],
              },
            ],
          },

          // SLIDE 4 — FAQ ------------------------------------------------
          { title1: "FAQ" },
        ],
      },

      {
        id: "identityaccessmanagementiam",
        title: "→ Identity & Access Management (IAM)",
        slides: [
          // SLIDE 1 — OVERVIEW -----------------------------------------
          {
            title1: "Overview",
            title2: "What is Identity & Access Management (IAM)?",
            discription:
              "Identity & Access Management (IAM) enables the right individuals to access the right resources at the right time — securely and efficiently. It provides centralized authentication, authorization, and lifecycle management across users, devices, and applications to support Zero Trust and regulatory compliance.",

            icons: [
              {
                icon: <Icon icon="carbon:two-factor-authentication" width="36" height="36" />,
                iconheading: "Authentication",
                icondiscription:
                  "Verify and secure user identities across systems and devices.",
              },
              {
                icon: (
                  <Icon icon="hugeicons:access" width="36" height="36" />
                ),
                iconheading: "Authorization",
                icondiscription:
                  "Enforce granular access control and least privilege.",
              },
              {
                icon: <Icon icon="game-icons:cycle" width="36" height="36" />,
                iconheading: "Lifecycle Management",
                icondiscription:
                  "Automate provisioning, modification, and deprovisioning of users.",
              },
              {
                icon: (
                  <Icon icon="tabler:access-point" width="36" height="36" />
                ),
                iconheading: "Federation",
                icondiscription:
                  "Enable seamless, secure access across cloud and on-prem environments.",
              },
              {
                icon: (
                  <Icon icon="icon-park-outline:palace" width="36" height="36" />
                ),
                iconheading: "Governance",
                icondiscription:
                  "Ensure compliance, reporting, and auditability of identity actions.",
              },
            ],

            whowehelp: [
              {
                titleofwhohelp:
                  "Designed for organizations modernizing identity security:",
                list: [
                  "Enterprises adopting Zero Trust and cloud security strategies",
                  "Organizations undergoing digital transformation or cloud migration",
                  "Regulated industries (Finance, Healthcare, Energy, Government) requiring strict access control",
                  "Security teams managing large or complex user ecosystems",
                  "Businesses seeking unified control of workforce, customer, and partner identities",
                ],
              },
            ],

            why: [
              {
                titl1: "Why IAM",
                title2: "Why IAM Matters",
                list: [
                  "Reduces risk of unauthorized access and identity-based attacks",
                  "Simplifies user management through automation and centralization",
                  "Strengthens compliance posture across frameworks (ISO 27001, GDPR, SOC 2)",
                  "Enables secure hybrid and multi-cloud access with improved user experience",
                ],
              },
            ],
          },

          // SLIDE 2 — SCOPE OF WORK -------------------------------------
          {
            title1: "Scope of Work",
            scope: [
              {
                title: "IAM Services",
                discription:
                  "Comprehensive identity lifecycle, access governance, and authentication solutions.",

                section: [
                  {
                    icons: <Icon icon="eos-icons:content-lifecycle-management" width="36" height="36" />,
                    heading: "Identity Lifecycle Management",
                    p: "Automate user onboarding, role changes, and offboarding processes.",
                  },
                  {
                    icons: (
                      <Icon icon="hugeicons:policy" width="36" height="36" />
                    ),
                    heading: "Access Control & Policy Enforcement",
                    p: "Define and implement RBAC/ABAC models across applications and systems.",
                  },
                  {
                    icons: (
                      <Icon icon="carbon:two-factor-authentication" width="36" height="36" />
                    ),
                    heading: "Single Sign-On (SSO) & MFA",
                    p: "Deploy seamless, secure access using multi-factor and federated authentication.",
                  },
                  {
                    icons: (
                      <Icon icon="carbon:ibm-cloud-essential-security-and-observability-services" width="36" height="36" />
                    ),
                    heading: "Directory & Federation Services",
                    p: "Integrate Active Directory, Azure AD, and cloud identity providers.",
                  },
                  {
                    icons: (
                      <Icon icon="material-symbols:preview" width="36" height="36" />
                    ),
                    heading: "Access Certification & Governance",
                    p: "Conduct periodic access reviews and ensure compliance with governance standards.",
                  },
                  {
                    icons: (
                      <Icon icon="nimbus:ecosystem" width="36" height="36" />
                    ),
                    heading: "Integration with Security Ecosystem",
                    p: "Connect IAM with PIM, SIEM, and SOAR for full identity visibility and response.",
                  },
                ],
              },
            ],
          },

          // SLIDE 3 — METHODOLOGY -----------------------------------------
          {
            title1: "Methodology",
            methodology: [
              {
                heading: "Our 5-Phase IAM Implementation Journey",
                subsection: [
                  {
                    number: "01",
                    heading: "Assessment & Strategy Definition",
                    discription:
                      "Evaluate current identity systems, access policies, and compliance needs.",
                  },
                  {
                    number: "02",
                    heading: "Architecture & Design",
                    discription:
                      "Develop IAM architecture, role models, and integration blueprints.",
                  },
                  {
                    number: "03",
                    heading: "Implementation & Integration",
                    discription:
                      "Deploy IAM platform, integrate applications, and configure workflows.",
                  },
                  {
                    number: "04",
                    heading: "Policy Enforcement & Automation",
                    discription:
                      "Apply access policies, SSO, MFA, and automate lifecycle processes.",
                  },
                  {
                    number: "05",
                    heading: "Monitoring & Continuous Optimization",
                    discription:
                      "Review access logs, conduct periodic recertification, and optimize governance.",
                  },
                ],
              },
            ],

            deliverables: [
              { li: "IAM Strategy & Architecture Blueprint" },
              { li: "User and Role Inventory Mapping" },
              { li: "Identity Lifecycle Automation Workflows" },
              { li: "Access Control & Enforcement Policies" },
              { li: "Single Sign-On (SSO) and MFA Implementation" },
              { li: "Access Review and Certification Framework" },
              { li: "Compliance Alignment Report (ISO 27001, NIST, GDPR)" },
              { li: "Continuous Governance & Optimization Plan" },
            ],

            whychooseus: [
              {
                title: "Why Choose Us – Secure, Scalable Identity Foundation",
                ul: [
                  {
                    li: "Proven expertise with leading IAM platforms (Okta, Microsoft Entra, Ping Identity, ForgeRock)",
                  },
                  {
                    li: "End-to-end IAM implementation aligned with Zero Trust and compliance standards",
                  },
                  {
                    li: "Strong integration capabilities with PIM, SOAR, SIEM, and XDR solutions",
                  },
                  {
                    li: "Business-aligned access governance ensuring operational efficiency",
                  },
                  {
                    li: "Continuous improvement model to adapt to evolving identity threats",
                  },
                ],
              },
            ],
          },

          // SLIDE 4 — FAQ --------------------------------------------------
          { title1: "FAQ" },
        ],
      },

      {
        id: "zerotrustarchitectureservice",
        title: "→ Zero Trust Architecture (ZTA)",
        slides: [
          // -------------------------------- SLIDE 1: OVERVIEW --------------------------------
          {
            title1: "Overview",
            title2: "What is Zero Trust Architecture (ZTA)?",
            discription:
              "Zero Trust Architecture (ZTA) is a security framework based on “never trust, always verify”, designed to protect modern enterprises by enforcing continuous verification of identities, devices, and applications. It eliminates implicit trust across networks and ensures context-aware, least-privilege access to critical assets.",

            icons: [
              {
                icon: <Icon icon="hugeicons:identity-card" width="36" height="36" />,
                iconheading: "Identity-Centric Security",
                icondiscription: "Authenticate and authorize every identity.",
              },
              {
                icon: (
                  <Icon icon="hugeicons:access" width="36" height="36" />
                ),
                iconheading: "Least Privilege Access",
                icondiscription:
                  "Grant minimal access necessary to perform a task.",
              },
              {
                icon: <Icon icon="uiw:verification" width="36" height="36" />,
                iconheading: "Continuous Verification",
                icondiscription:
                  "Validate trust at every request, user, and device level.",
              },
              {
                icon: (
                  <Icon icon="icon-park-solid:microscope-one" width="36" height="36" />
                ),
                iconheading: "Micro-Segmentation",
                icondiscription:
                  "Contain lateral movement through segmented architectures.",
              },
              {
                icon: (
                  <Icon icon="material-symbols:visibility-outline" width="36" height="36" />
                ),
                iconheading: "Visibility & Analytics",
                icondiscription:
                  "Monitor and analyze user and device behavior continuously.",
              },
            ],

            whowehelp: [
              {
                titleofwhohelp:
                  "Designed for enterprise environments modernizing access and security controls:",
                list: [
                  "Enterprises undergoing cloud transformation or hybrid environment adoption",
                  "Organizations seeking compliance with NIST SP 800-207 or ISO 27001 frameworks",
                  "Security-conscious sectors (Finance, Healthcare, Manufacturing, Government)",
                  "Businesses modernizing legacy networks and identity systems",
                  "CISOs seeking an integrated, scalable Zero Trust roadmap",
                ],
              },
            ],

            why: [
              {
                titl1: "Why Zero Trust",
                title2: "Why Zero Trust Matters",
                list: [
                  "Reduces attack surface and lateral movement risk",
                  "Protects identities, devices, and workloads across distributed environments",
                  "Enables adaptive access control based on real-time risk signals",
                  "Aligns with regulatory and compliance requirements for data protection",
                ],
              },
            ],
          },

          // -------------------------------- SLIDE 2: SCOPE OF WORK --------------------------------
          {
            title1: "Scope of Work",
            scope: [
              {
                title: "Zero Trust Services",
                discription:
                  "Comprehensive design, implementation, and optimization of Zero Trust frameworks across identity, network, and data layers.",

                section: [
                  {
                    icons: <Icon icon="arcticons:s-trust" width="36" height="36" />,
                    heading: "Zero Trust Readiness Assessment",
                    p: "Evaluate current controls, identity maturity, and network segmentation gaps.",
                  },
                  {
                    icons: (
                      <Icon icon="streamline-ultimate:maze-strategy" width="36" height="36" />
                    ),
                    heading: "ZTA Strategy & Roadmap",
                    p: "Define business-aligned Zero Trust vision, priorities, and phased implementation.",
                  },
                  {
                    icons: (
                      <Icon icon="carbon:ibm-webmethods-hybrid-integration" width="36" height="36" />
                    ),
                    heading: "Identity & Access Control Integration",
                    p: "Deploy IAM, PIM, and MFA solutions to enforce contextual access.",
                  },
                  {
                    icons: (
                      <Icon icon="streamline-cyber:network" width="36" height="36" />
                    ),
                    heading: "Network & Application Segmentation",
                    p: "Implement micro-segmentation and software-defined perimeters.",
                  },
                  {
                    icons: (
                      <Icon icon="vaadin:automation" width="36" height="36" />
                    ),
                    heading: "Policy Enforcement & Automation",
                    p: "Create adaptive access policies and integrate with SOAR and SIEM.",
                  },
                  {
                    icons: (
                      <Icon icon="eos-icons:monitoring" width="36" height="36" />
                    ),
                    heading: "Visibility, Monitoring & Analytics",
                    p: "Deploy telemetry, threat analytics, and continuous trust validation.",
                  },
                ],
              },
            ],
          },

          // -------------------------------- SLIDE 3: METHODOLOGY --------------------------------
          {
            title1: "Methodology",
            methodology: [
              {
                heading: "Our 5-Phase Zero Trust Implementation Journey",
                subsection: [
                  {
                    number: "01",
                    heading: "Assessment & Maturity Baseline",
                    discription:
                      "Analyze existing controls, architecture, and access management posture.",
                  },
                  {
                    number: "02",
                    heading: "Design & Architecture Blueprint",
                    discription:
                      "Define the Zero Trust architecture aligned with business and compliance goals.",
                  },
                  {
                    number: "03",
                    heading: "Implementation & Integration",
                    discription:
                      "Deploy ZTA controls across identity, network, device, and application layers.",
                  },
                  {
                    number: "04",
                    heading: "Policy Enforcement & Orchestration",
                    discription:
                      "Integrate adaptive policies and automate through SOAR and PIM frameworks.",
                  },
                  {
                    number: "05",
                    heading: "Monitoring & Continuous Optimization",
                    discription:
                      "Measure performance, refine controls, and ensure ongoing Zero Trust validation.",
                  },
                ],
              },
            ],

            deliverables: [
              { li: "Zero Trust Maturity Assessment Report" },
              { li: "ZTA Strategy & Roadmap Document" },
              {
                li: "Architecture Blueprint (Identity, Network, Data, and Device Layers)",
              },
              { li: "Policy Definition & Access Control Framework" },
              { li: "Integration with IAM, PIM, SIEM, and SOAR Systems" },
              { li: "Risk & Trust Scoring Model Implementation" },
              { li: "Continuous Monitoring & Compliance Dashboard" },
              { li: "Executive Report with KPI and ROI Tracking" },
            ],

            whychooseus: [
              {
                title: "Why Choose Us – Business-Aligned Zero Trust Excellence",
                ul: [
                  {
                    li: "Framework aligned to NIST SP 800-207, ISO 27001, and CISA guidelines",
                  },
                  {
                    li: "Expertise across cloud-native and hybrid Zero Trust environments",
                  },
                  {
                    li: "Integration-ready with Microsoft, Palo Alto, Okta, and Cisco ecosystems",
                  },
                  {
                    li: "Proven track record in designing scalable, risk-driven ZTA programs",
                  },
                  {
                    li: "Strategic, outcome-based approach ensuring measurable resilience gains",
                  },
                ],
              },
            ],
          },

          // -------------------------------- SLIDE 4: FAQ --------------------------------
          { title1: "FAQ" },
        ],
      },
    ],
  },

  {
    id: "cloudnetworksecurityarchitecture",
    title: "Cloud & Network Security Architecture",
    items: [
      {
        id: "secureaccessserviceedgesase",
        title: "→ Secure Access Service Edge (SASE)",
        slides: [
          // -------------------------------- SLIDE 1: OVERVIEW --------------------------------
          {
            title1: "Overview",
            title2: "What is Secure Access Service Edge (SASE)?",
            discription:
              "Secure Access Service Edge (SASE) is a cloud-delivered architecture that converges networking and security services — including SD-WAN, Zero Trust Network Access (ZTNA), CASB, and Secure Web Gateway (SWG) — into a unified platform. It ensures secure, reliable, and seamless access for users, devices, and applications from any location, enhancing both security and performance.",

            icons: [
              {
                icon: <Icon icon="iconoir:card-security" width="36" height="36" />,
                iconheading: "Converged Security",
                icondiscription:
                  "Unify network and security functions under a single framework.",
              },
              {
                icon: (
                  <Icon icon="carbon:ibm-deployable-architecture" width="36" height="36" />
                ),
                iconheading: "Cloud-Native Architecture",
                icondiscription:
                  "Deliver scalable, distributed edge protection.",
              },
              {
                icon: <Icon icon="arcticons:s-trust" width="36" height="36" />,
                iconheading: "Zero Trust Access",
                icondiscription:
                  "Enforce contextual, identity-based access to all resources.",
              },
              {
                icon: (
                  <Icon icon="streamline-freehand:optimization-configuration" width="36" height="36" />
                ),
                iconheading: "Performance Optimization",
                icondiscription:
                  "Optimize connectivity and user experience through intelligent routing.",
              },
              {
                icon: (
                  <Icon icon="material-symbols:visibility-outline-rounded" width="36" height="36" />
                ),
                iconheading: "Visibility & Control",
                icondiscription:
                  "Gain end-to-end visibility into users, applications, and data.",
              },
            ],

            whowehelp: [
              {
                titleofwhohelp:
                  "Designed for organizations modernizing secure connectivity:",
                list: [
                  "Enterprises adopting hybrid or remote work models",
                  "Organizations migrating to cloud-first infrastructure",
                  "Businesses consolidating security tools into a unified framework",
                  "Global enterprises requiring consistent security and performance across regions",
                  "CISOs seeking cost efficiency through network-security convergence",
                ],
              },
            ],

            why: [
              {
                titl1: "Why SASE",
                title2: "Why SASE Matters",
                list: [
                  "Simplifies architecture by unifying network and security operations",
                  "Provides secure access anywhere — for any user, on any device",
                  "Reduces complexity, cost, and attack surface",
                  "Improves user experience while maintaining policy consistency",
                ],
              },
            ],
          },

          // -------------------------------- SLIDE 2: SCOPE OF WORK --------------------------------
          {
            title1: "Scope of Work",
            scope: [
              {
                title: "SASE Services",
                discription:
                  "End-to-end design, deployment, and optimization of cloud-native secure network access frameworks.",

                section: [
                  {
                    icons: <Icon icon="uil:setting" width="36" height="36" />,
                    heading: "SASE Readiness Assessment",
                    p: "Evaluate current network architecture, connectivity, and security posture.",
                  },
                  {
                    icons: (
                      <Icon icon="fluent-mdl2:design" width="36" height="36" />
                    ),
                    heading: "Architecture Design & Roadmap",
                    p: "Define a phased SASE adoption strategy aligned with business objectives.",
                  },
                  {
                    icons: (
                      <Icon icon="streamline-ultimate:optimization-graph-bold" width="36" height="36" />
                    ),
                    heading: "SD-WAN Integration & Optimization",
                    p: "Enable secure, optimized connectivity across branch and remote environments.",
                  },
                  {
                    icons: (
                      <Icon icon="arcticons:s-trust" width="36" height="36" />
                    ),
                    heading: "Zero Trust Network Access (ZTNA) Enablement",
                    p: "Replace VPNs with identity-based secure access to cloud and on-prem resources.",
                  },
                  {
                    icons: (
                      <Icon icon="ant-design:deployment-unit-outlined" width="36" height="36" />
                    ),
                    heading: "CASB, SWG, and FWaaS Deployment",
                    p: "Implement cloud-delivered controls for data protection and web security.",
                  },
                  {
                    icons: (
                      <Icon icon="carbon:continuous-deployment" width="36" height="36" />
                    ),
                    heading: "Continuous Monitoring & Policy Management",
                    p: "Manage and optimize policies, analytics, and user access visibility.",
                  },
                ],
              },
            ],
          },

          // -------------------------------- SLIDE 3: METHODOLOGY --------------------------------
          {
            title1: "Methodology",
            methodology: [
              {
                heading: "Our 5-Phase SASE Implementation Journey",
                subsection: [
                  {
                    number: "01",
                    heading: "Assessment & Strategy Definition",
                    discription:
                      "Analyze network, security tools, and user access needs across geographies.",
                  },
                  {
                    number: "02",
                    heading: "Architecture & Platform Design",
                    discription:
                      "Build SASE blueprint integrating SD-WAN, ZTNA, and CASB.",
                  },
                  {
                    number: "03",
                    heading: "Deployment & Integration",
                    discription:
                      "Implement and configure core SASE components with cloud-native orchestration.",
                  },
                  {
                    number: "04",
                    heading: "Policy Enforcement & Optimization",
                    discription:
                      "Define and automate user, device, and data policies for secure access.",
                  },
                  {
                    number: "05",
                    heading: "Monitoring & Continuous Improvement",
                    discription:
                      "Deliver analytics, optimization, and performance management dashboards.",
                  },
                ],
              },
            ],

            deliverables: [
              { li: "SASE Strategy & Adoption Roadmap" },
              { li: "Architecture Blueprint (SD-WAN, ZTNA, CASB, SWG, FWaaS)" },
              { li: "Policy & Access Control Framework" },
              { li: "Secure Edge Deployment Configuration" },
              { li: "Identity-Based Access & Cloud Security Controls" },
              { li: "Continuous Monitoring & Threat Analytics Dashboard" },
              { li: "Compliance & Risk Posture Report" },
              { li: "Executive Summary of Performance and ROI Metrics" },
            ],

            whychooseus: [
              {
                title: "Why Choose Us – Unified Cloud Security & Connectivity",
                ul: [
                  {
                    li: "Expertise in deploying leading SASE platforms (Zscaler, Palo Alto Prisma, Cisco, Netskope, Fortinet)",
                  },
                  {
                    li: "Integrated approach combining network engineering and security architecture",
                  },
                  {
                    li: "Proven methodology aligned to Zero Trust and NIST CSF principles",
                  },
                  {
                    li: "Seamless transition from legacy VPN and perimeter-based models",
                  },
                  {
                    li: "Business-focused design ensuring scalability, speed, and resilience",
                  },
                ],
              },
            ],
          },

          // -------------------------------- SLIDE 4: FAQ --------------------------------
          { title1: "FAQ" },
        ],
      },
      {
        id: "cybersecuritymesharchitecture",
        title: "→ Cybersecurity Mesh Architecture (CSMA)",
        slides: [
          // -------------------------------- SLIDE 1: OVERVIEW --------------------------------
          {
            title1: "Overview",
            title2: "What is Cybersecurity Mesh Architecture (CSMA)?",
            discription:
              "Cybersecurity Mesh Architecture (CSMA) is a modern, distributed security framework that enables interoperability between multiple security tools and platforms through a unified architecture. It allows security controls to communicate and enforce policies dynamically — providing centralized visibility, distributed enforcement, and adaptive protection across hybrid and multi-cloud environments.",

            icons: [
              {
                icon: <Icon icon="bx:cctv" width="36" height="36" />,
                iconheading: "Interoperability",
                icondiscription:
                  "Integrate disparate security systems through open standards and APIs.",
              },
              {
                icon: (
                  <Icon icon="carbon:gui-management" width="36" height="36" />
                ),
                iconheading: "Unified Policy Management",
                icondiscription:
                  "Centralize policy definition while maintaining distributed enforcement.",
              },
              {
                icon: <Icon icon="hugeicons:folder-security" width="36" height="36" />,
                iconheading: "Identity-Centric Security",
                icondiscription:
                  "Build trust boundaries around identities rather than network perimeters.",
              },
              {
                icon: (
                  <Icon icon="material-symbols:network-intelligence" width="36" height="36" />
                ),
                iconheading: "Adaptive Intelligence",
                icondiscription:
                  "Enable contextual and data-driven security decisions in real time.",
              },
              {
                icon: (
                  <Icon icon="icon-park-outline:folder-protection-one" width="36" height="36" />
                ),
                iconheading: "Scalability",
                icondiscription:
                  "Scale protection seamlessly across hybrid and multi-cloud infrastructures.",
              },
            ],

            whowehelp: [
              {
                titleofwhohelp:
                  "Designed for hybrid and distributed environments:",
                list: [
                  "Enterprises managing complex, multi-cloud or hybrid environments",
                  "Organizations with fragmented or overlapping security tools",
                  "Large-scale IT and OT ecosystems seeking unified visibility",
                  "Businesses modernizing security operations toward Zero Trust models",
                  "CISOs aiming to build cohesive, data-driven defense architectures",
                ],
              },
            ],

            why: [
              {
                titl1: "Why CSMA",
                title2: "Why CSMA Matters",
                list: [
                  "Reduces complexity by integrating siloed security solutions",
                  "Enhances threat detection and response through data correlation",
                  "Provides consistent policy enforcement across environments",
                  "Future-proofs security strategy with adaptive, modular architecture",
                ],
              },
            ],
          },

          // -------------------------------- SLIDE 2: SCOPE --------------------------------
          {
            title1: "Scope of Work",
            scope: [
              {
                title: "CSMA Services",
                discription:
                  "Comprehensive design and deployment of interoperable, adaptive cybersecurity ecosystems.",

                section: [
                  {
                    icons: <Icon icon="carbon:ibm-deployable-architecture" width="36" height="36" />,
                    heading: "Security Architecture Assessment",
                    p: "Review current toolsets, integrations, and architecture gaps.",
                  },
                  {
                    icons: (
                      <Icon icon="carbon:development" width="36" height="36" />
                    ),
                    heading: "Mesh Strategy & Roadmap Development",
                    p: "Define a phased adoption roadmap aligned to business objectives.",
                  },
                  {
                    icons: (
                      <Icon icon="hugeicons:frameworks" width="36" height="36" />
                    ),
                    heading: "Security Tool Integration Framework",
                    p: "Enable interoperability across SIEM, SOAR, IAM, XDR, and cloud-native tools.",
                  },
                  {
                    icons: (
                      <Icon icon="carbon:gui-management" width="36" height="36" />
                    ),
                    heading: "Centralized Policy & Identity Management",
                    p: "Establish unified access control and trust policies across systems.",
                  },
                  {
                    icons: (
                      <Icon icon="hugeicons:artificial-intelligence-01" width="36" height="36" />
                    ),
                    heading: "Threat Intelligence & Analytics Integration",
                    p: "Correlate telemetry for unified detection and adaptive response.",
                  },
                  {
                    icons: (
                      <Icon icon="carbon:ai-governance-lifecycle" width="36" height="36" />
                    ),
                    heading: "Governance, Risk & Compliance Alignment",
                    p: "Ensure mesh architecture adheres to ISO, NIST, and Zero Trust principles.",
                  },
                ],
              },
            ],
          },

          // -------------------------------- SLIDE 3: METHODOLOGY --------------------------------
          {
            title1: "Methodology",
            methodology: [
              {
                heading: "Our 5-Phase CSMA Implementation Journey",
                subsection: [
                  {
                    number: "01",
                    heading: "Assessment & Gap Analysis",
                    discription:
                      "Map current security tools, data flows, and integration maturity.",
                  },
                  {
                    number: "02",
                    heading: "Architecture Blueprint & Design",
                    discription:
                      "Define interoperability models, data fabric, and control hierarchy.",
                  },
                  {
                    number: "03",
                    heading: "Integration & Orchestration",
                    discription:
                      "Connect and normalize data between existing and new security systems.",
                  },
                  {
                    number: "04",
                    heading: "Policy & Identity Federation",
                    discription:
                      "Implement unified policies for access, detection, and enforcement.",
                  },
                  {
                    number: "05",
                    heading: "Monitoring & Continuous Optimization",
                    discription:
                      "Measure performance, improve automation, and expand adaptive capabilities.",
                  },
                ],
              },
            ],

            deliverables: [
              { li: "CSMA Strategy & Implementation Roadmap" },
              { li: "Unified Security Architecture Blueprint" },
              { li: "Tool Integration & Data Interoperability Framework" },
              { li: "Centralized Policy & Identity Federation Model" },
              { li: "Unified Threat Detection & Analytics Dashboard" },
              {
                li: "Governance and Compliance Mapping (ISO 27001, NIST CSF, Zero Trust)",
              },
              { li: "Maturity Assessment and Optimization Report" },
              { li: "Executive KPI & ROI Summary" },
            ],

            whychooseus: [
              {
                title:
                  "Why Choose Us – Building Connected, Adaptive Cyber Defense",
                ul: [
                  {
                    li: "Expertise integrating SIEM, SOAR, IAM, and XDR ecosystems",
                  },
                  {
                    li: "Architecture aligned with Zero Trust, SASE, and NIST CSF models",
                  },
                  {
                    li: "Deep understanding of data interoperability and API-driven security mesh design",
                  },
                  {
                    li: "Focused on outcome-based, measurable resilience improvements",
                  },
                  {
                    li: "Proven success in modernizing security operations for hybrid and cloud-native enterprises",
                  },
                ],
              },
            ],
          },

          // -------------------------------- SLIDE 4: FAQ --------------------------------
          { title1: "FAQ" },
        ],
      },
      {
        id: "cloudsecurityimplementation",
        title: "→ Cloud Security Implementation",
        slides: [
          // -------------------------------- SLIDE 1: OVERVIEW --------------------------------
          {
            title1: "Overview",
            title2: "What is Cloud Security Implementation?",
            discription:
              "Cloud Security Implementation is the design and deployment of end-to-end security controls across cloud environments — ensuring protection of identities, workloads, data, and applications. It helps organizations establish secure, compliant, and resilient cloud ecosystems across public, private, and hybrid infrastructures.",

            icons: [
              {
                icon: <Icon icon="hugeicons:identity-card" width="36" height="36" />,
                iconheading: "Identity & Access Control",
                icondiscription:
                  "Implement strong authentication, authorization, and least-privilege access.",
              },
              {
                icon: (
                  <Icon icon="hugeicons:web-protection" width="36" height="36" />
                ),
                iconheading: "Data Protection",
                icondiscription:
                  "Encrypt, classify, and monitor sensitive data across clouds.",
              },
              {
                icon: <Icon icon="mdi:security-network" width="36" height="36" />,
                iconheading: "Network Security",
                icondiscription:
                  "Secure connectivity through segmentation and firewalls.",
              },
              {
                icon: (
                  <Icon icon="iconoir:card-security" width="36" height="36" />
                ),
                iconheading: "Workload & Application Security",
                icondiscription:
                  "Harden workloads and monitor cloud-native applications.",
              },
              {
                icon: (
                  <Icon icon="grommet-icons:compliance" width="36" height="36" />
                ),
                iconheading: "Compliance & Governance",
                icondiscription:
                  "Align cloud operations with regulatory and compliance standards.",
              },
            ],

            whowehelp: [
              {
                titleofwhohelp:
                  "Ideal for organizations securing cloud transformation:",
                list: [
                  "Enterprises migrating workloads to AWS, Azure, or GCP",
                  "Businesses operating in hybrid or multi-cloud environments",
                  "Organizations seeking to meet compliance mandates (ISO 27017, SOC 2, HIPAA)",
                  "Startups scaling cloud infrastructure securely from the ground up",
                  "CISOs and Cloud Architects seeking integrated security and visibility",
                ],
              },
            ],

            why: [
              {
                titl1: "Why Cloud Security",
                title2: "Why Cloud Security Matters",
                list: [
                  "Protects critical workloads from evolving cloud-native threats",
                  "Prevents misconfigurations — the #1 cause of cloud breaches",
                  "Ensures compliance and visibility across multi-cloud infrastructures",
                  "Enables secure innovation with confidence and speed",
                ],
              },
            ],
          },

          // -------------------------------- SLIDE 2: SCOPE --------------------------------
          {
            title1: "Scope of Work",
            scope: [
              {
                title: "Cloud Security Services",
                discription:
                  "Comprehensive end-to-end coverage for securing cloud platforms, workloads, and identities.",

                section: [
                  {
                    icons: <Icon icon="material-symbols:cloud-circle" width="36" height="36" />,
                    heading: "Cloud Security Assessment",
                    p: "Evaluate cloud configurations, IAM policies, and control effectiveness.",
                  },
                  {
                    icons: (
                      <Icon icon="carbon:ibm-deployable-architecture" width="36" height="36" />
                    ),
                    heading: "Architecture Design & Hardening",
                    p: "Define secure reference architectures across AWS, Azure, and GCP.",
                  },
                  {
                    icons: (
                      <Icon icon="hugeicons:access" width="36" height="36" />
                    ),
                    heading: "Identity & Access Management (IAM) Setup",
                    p: "Implement least-privilege, MFA, and just-in-time access for cloud users.",
                  },
                  {
                    icons: (
                      <Icon icon="icon-park-outline:folder-protection" width="36" height="36" />
                    ),
                    heading: "Network & Workload Protection",
                    p: "Configure firewalls, micro-segmentation, and container security.",
                  },
                  {
                    icons: (
                      <Icon icon="carbon:data-set-encryption" width="36" height="36" />
                    ),
                    heading: "Data Security & Encryption Management",
                    p: "Deploy encryption, DLP, and key management controls across services.",
                  },
                  {
                    icons: (
                      <Icon icon="carbon:ibm-cloud-security-compliance-center-workload-protection" width="36" height="36" />
                    ),
                    heading: "Compliance & Governance Frameworks",
                    p: "Map controls to standards like CIS, NIST, and ISO 27017 for ongoing compliance.",
                  },
                ],
              },
            ],
          },

          // -------------------------------- SLIDE 3: METHODOLOGY --------------------------------
          {
            title1: "Methodology",
            methodology: [
              {
                heading: "Our 5-Phase Cloud Security Implementation Journey",
                subsection: [
                  {
                    number: "01",
                    heading: "Assessment & Discovery",
                    discription:
                      "Identify assets, risks, and current control gaps across cloud environments.",
                  },
                  {
                    number: "02",
                    heading: "Architecture & Design",
                    discription:
                      "Develop secure, scalable cloud security blueprints aligned to business needs.",
                  },
                  {
                    number: "03",
                    heading: "Implementation & Integration",
                    discription:
                      "Deploy and configure IAM, network, and data protection controls.",
                  },
                  {
                    number: "04",
                    heading: "Monitoring & Response Enablement",
                    discription:
                      "Integrate SIEM, CSPM, and SOAR for continuous threat detection.",
                  },
                  {
                    number: "05",
                    heading: "Optimization & Governance",
                    discription:
                      "Review, test, and optimize security posture with policy enforcement and compliance mapping.",
                  },
                ],
              },
            ],

            deliverables: [
              { li: "Cloud Security Assessment & Gap Analysis Report" },
              { li: "Cloud Security Architecture Blueprint (per environment)" },
              { li: "IAM & Access Control Framework" },
              { li: "Network and Workload Protection Configurations" },
              { li: "Data Protection & Key Management Policies" },
              { li: "Cloud Security Posture Management (CSPM) Dashboard" },
              { li: "Compliance Mapping to ISO, SOC 2, NIST, CIS Benchmarks" },
              { li: "Executive Cloud Risk & ROI Summary" },
            ],

            whychooseus: [
              {
                title:
                  "Why Choose Us – Secure, Scalable, and Compliant Cloud Environments",
                ul: [
                  {
                    li: "Certified expertise across AWS, Azure, and Google Cloud platforms",
                  },
                  {
                    li: "Frameworks aligned with CIS, NIST CSF, ISO 27017, and Zero Trust models",
                  },
                  {
                    li: "Proven experience securing hybrid and multi-cloud infrastructures",
                  },
                  {
                    li: "Integrated visibility through XDR, SOAR, and CSPM platforms",
                  },
                  {
                    li: "Business-aligned approach ensuring performance, compliance, and resilience",
                  },
                ],
              },
            ],
          },

          // -------------------------------- SLIDE 4: FAQ --------------------------------
          { title1: "FAQ" },
        ],
      },
    ],
  },

  {
    id: "applicationdevelopmentsecurity",
    title: "Application & Development Security",
    items: [
      {
        id: "applicationsecurity",
        title: "→ Application Security",
        slides: [
          // -------------------------------- SLIDE 1: OVERVIEW --------------------------------
          {
            title1: "Overview",
            title2: "What is Application Security?",
            discription:
              "Application Security focuses on identifying, mitigating, and preventing vulnerabilities throughout the software development lifecycle (SDLC). It ensures that applications — whether web, mobile, or API-based — are secure by design, resilient against attacks, and compliant with security best practices from development to deployment.",

            icons: [
              {
                icon: <Icon icon="healthicons:ui-secure-outline" width="36" height="36" />,
                iconheading: "Secure SDLC",
                icondiscription:
                  "Embed security across every phase of software development.",
              },
              {
                icon: (
                  <Icon icon="streamline-sharp:threat-usb-solid" width="36" height="36" />
                ),
                iconheading: "Threat Modeling",
                icondiscription:
                  "Identify high-risk areas and design mitigations early.",
              },
              {
                icon: <Icon icon="hugeicons:security" width="36" height="36" />,
                iconheading: "Code Security",
                icondiscription:
                  "Perform static and dynamic code analysis to eliminate flaws.",
              },
              {
                icon: (
                  <Icon icon="hugeicons:web-protection" width="36" height="36" />
                ),
                iconheading: "Runtime Protection",
                icondiscription:
                  "Secure applications in production with real-time defenses.",
              },
              {
                icon: (
                  <Icon icon="carbon:continuous-deployment" width="36" height="36" />
                ),
                iconheading: "Continuous Testing",
                icondiscription:
                  "Continuously assess vulnerabilities post-deployment.",
              },
            ],

            whowehelp: [
              {
                titleofwhohelp:
                  "Built for teams delivering secure software at scale:",
                list: [
                  "Product and engineering teams developing cloud-native or enterprise applications",
                  "DevOps and DevSecOps teams seeking automation-driven security integration",
                  "Organizations with compliance needs (OWASP, PCI DSS, ISO 27034, SOC 2)",
                  "Businesses modernizing legacy applications or migrating to microservices",
                  "CISOs and CTOs aiming to reduce software-driven security risk",
                ],
              },
            ],

            why: [
              {
                titl1: "Why Application Security",
                title2: "Why Application Security Matters",
                list: [
                  "Prevents data breaches and code exploitation before deployment",
                  "Builds customer trust through secure, compliant applications",
                  "Reduces remediation costs by addressing vulnerabilities early in SDLC",
                  "Enables continuous innovation with security built into delivery pipelines",
                ],
              },
            ],
          },

          // -------------------------------- SLIDE 2: SCOPE --------------------------------
          {
            title1: "Scope of Work",
            scope: [
              {
                title: "Application Security Services",
                discription:
                  "End-to-end coverage from design and development to runtime and continuous validation.",

                section: [
                  {
                    icons: <Icon icon="uil:setting" width="24" height="24" />,
                    heading: "Secure SDLC Enablement",
                    p: "Integrate security controls, testing, and reviews into the development process.",
                  },
                  {
                    icons: (
                      <Icon
                        icon="streamline:landscape-setting"
                        width="14"
                        height="14"
                      />
                    ),
                    heading: "Threat Modeling & Risk Assessment",
                    p: "Identify and prioritize risks across application components and APIs.",
                  },
                  {
                    icons: (
                      <Icon
                        icon="majesticons:chart-line-area"
                        width="24"
                        height="24"
                      />
                    ),
                    heading: "Static & Dynamic Testing (SAST/DAST)",
                    p: "Detect code-level and runtime vulnerabilities.",
                  },
                  {
                    icons: (
                      <Icon icon="jam:triangle-danger" width="24" height="24" />
                    ),
                    heading: "Software Composition Analysis (SCA)",
                    p: "Identify and mitigate risks from open-source and third-party components.",
                  },
                  {
                    icons: (
                      <Icon
                        icon="ant-design:search-outlined"
                        width="24"
                        height="24"
                      />
                    ),
                    heading: "API Security Testing & Hardening",
                    p: "Evaluate and secure exposed APIs and microservices.",
                  },
                  {
                    icons: (
                      <Icon
                        icon="fluent:document-one-page-20-regular"
                        width="24"
                        height="24"
                      />
                    ),
                    heading: "Runtime Application Self-Protection",
                    p: "Enable real-time protection and anomaly detection in production.",
                  },
                ],
              },
            ],
          },

          // -------------------------------- SLIDE 3: METHODOLOGY --------------------------------
          {
            title1: "Methodology",
            methodology: [
              {
                heading:
                  "Our 5-Phase Application Security Implementation Journey",
                subsection: [
                  {
                    number: "01",
                    heading: "Assessment & Baseline Analysis",
                    discription:
                      "Review application architecture, development workflows, and current security posture.",
                  },
                  {
                    number: "02",
                    heading: "Design & Integration Planning",
                    discription:
                      "Define secure SDLC model and integration roadmap with existing CI/CD pipelines.",
                  },
                  {
                    number: "03",
                    heading: "Implementation & Testing",
                    discription:
                      "Deploy SAST, DAST, and SCA tools; conduct manual and automated testing.",
                  },
                  {
                    number: "04",
                    heading: "Remediation & Hardening",
                    discription:
                      "Collaborate with development teams to patch, refactor, and secure applications.",
                  },
                  {
                    number: "05",
                    heading: "Continuous Monitoring & Optimization",
                    discription:
                      "Establish ongoing testing, reporting, and compliance alignment.",
                  },
                ],
              },
            ],

            deliverables: [
              { li: "Application Security Assessment & Risk Report" },
              { li: "Secure SDLC Framework and Integration Plan" },
              { li: "Threat Modeling & Architecture Review" },
              { li: "SAST, DAST, and SCA Test Reports" },
              { li: "API and Microservices Security Audit" },
              { li: "Secure Coding Guidelines & Developer Training Material" },
              { li: "Continuous Application Monitoring Dashboard" },
              {
                li: "Executive Summary with Risk Metrics and Compliance Status",
              },
            ],

            whychooseus: [
              {
                title: "Why Choose Us – Security Built Into Innovation",
                ul: [
                  {
                    li: "Expertise in DevSecOps and CI/CD pipeline integration",
                  },
                  {
                    li: "Alignment with OWASP, NIST, and ISO 27034 frameworks",
                  },
                  {
                    li: "Proven track record across web, mobile, and SaaS application portfolios",
                  },
                  {
                    li: "Seamless integration with modern development tools (GitHub, GitLab, Jenkins)",
                  },
                  {
                    li: "Business-driven approach ensuring faster releases with reduced risk",
                  },
                ],
              },
            ],
          },

          // -------------------------------- SLIDE 4: FAQ --------------------------------
          { title1: "FAQ" },
        ],
      },
      {
        id: "devsecopsshiftleft",
        title: "→ DevSecOps – Shift Left",
        slides: [
          // -------------------------- SLIDE 1: OVERVIEW --------------------------
          {
            title1: "Overview",
            title2: "What is DevSecOps – Shift Left?",
            discription:
              "DevSecOps – Shift Left is a security-by-design approach that embeds security practices, testing, and automation early in the software development lifecycle (SDLC). It transforms security from a bottleneck into a continuous, collaborative process, ensuring vulnerabilities are detected and mitigated before deployment. This approach enhances agility, reduces remediation cost, and delivers secure, high-quality software at DevOps speed.",

            icons: [
              {
                icon: <Icon icon="mingcute:lock-line" width="24" height="24" />,
                iconheading: "Security by Design",
                icondiscription:
                  "Embed security controls and reviews at every SDLC stage.",
              },
              {
                icon: (
                  <Icon icon="jam:triangle-danger" width="24" height="24" />
                ),
                iconheading: "Automation & Integration",
                icondiscription:
                  "Integrate security tools into CI/CD pipelines.",
              },
              {
                icon: <Icon icon="mingcute:lock-line" width="24" height="24" />,
                iconheading: "Continuous Testing",
                icondiscription:
                  "Conduct ongoing vulnerability and compliance testing.",
              },
              {
                icon: (
                  <Icon icon="jam:triangle-danger" width="24" height="24" />
                ),
                iconheading: "Collaboration & Culture",
                icondiscription:
                  "Foster shared ownership between Dev, Sec, and Ops teams.",
              },
              {
                icon: (
                  <Icon icon="jam:triangle-danger" width="24" height="24" />
                ),
                iconheading: "Compliance as Code",
                icondiscription:
                  "Automate compliance checks for faster delivery.",
              },
            ],

            whowehelp: [
              {
                titleofwhohelp:
                  "Built for security-driven development pipelines:",
                list: [
                  "Enterprises adopting Agile and DevOps frameworks",
                  "Engineering teams seeking secure automation within CI/CD pipelines",
                  "Organizations aiming for secure cloud-native application delivery",
                  "Businesses struggling with late-stage vulnerability remediation costs",
                  "CISOs, CTOs, and DevOps leaders driving continuous security integration",
                ],
              },
            ],

            why: [
              {
                titl1: "Why Shift Left",
                title2: "Why DevSecOps – Shift Left Matters",
                list: [
                  "Reduces vulnerabilities introduced during development",
                  "Saves time and cost by identifying flaws early",
                  "Enables faster, safer code releases and updates",
                  "Builds a security-first culture across development teams",
                ],
              },
            ],
          },

          // -------------------------- SLIDE 2: SCOPE --------------------------
          {
            title1: "Scope of Work",
            scope: [
              {
                title: "DevSecOps Services",
                discription:
                  "Comprehensive design and integration of security controls across the development lifecycle.",

                section: [
                  {
                    icons: <Icon icon="uil:setting" width="24" height="24" />,
                    heading: "DevSecOps Maturity Assessment",
                    p: "Evaluate SDLC, tooling, and process readiness for shift-left adoption.",
                  },
                  {
                    icons: (
                      <Icon
                        icon="streamline:landscape-setting"
                        width="14"
                        height="14"
                      />
                    ),
                    heading: "Secure CI/CD Pipeline Design",
                    p: "Integrate security testing tools (SAST, DAST, SCA, IaC scans) into pipelines.",
                  },
                  {
                    icons: (
                      <Icon
                        icon="majesticons:chart-line-area"
                        width="24"
                        height="24"
                      />
                    ),
                    heading: "Automation & Toolchain Integration",
                    p: "Configure automated security gates, scans, and policy enforcement.",
                  },
                  {
                    icons: (
                      <Icon icon="jam:triangle-danger" width="24" height="24" />
                    ),
                    heading: "Policy as Code & Compliance Automation",
                    p: "Embed governance and compliance validation into pipelines.",
                  },
                  {
                    icons: (
                      <Icon
                        icon="ant-design:search-outlined"
                        width="24"
                        height="24"
                      />
                    ),
                    heading: "Developer Enablement & Training",
                    p: "Upskill teams with secure coding training and DevSecOps tooling.",
                  },
                  {
                    icons: (
                      <Icon
                        icon="fluent:document-one-page-20-regular"
                        width="24"
                        height="24"
                      />
                    ),
                    heading: "Continuous Monitoring & Reporting",
                    p: "Establish dashboards for KPIs, vulnerabilities, and compliance tracking.",
                  },
                ],
              },
            ],
          },

          // -------------------------- SLIDE 3: METHODOLOGY --------------------------
          {
            title1: "Methodology",
            methodology: [
              {
                heading: "Our 5-Phase DevSecOps Implementation Journey",
                subsection: [
                  {
                    number: "01",
                    heading: "Assessment & Planning",
                    discription:
                      "Evaluate DevOps maturity, security posture, and existing toolchains.",
                  },
                  {
                    number: "02",
                    heading: "Architecture & Pipeline Design",
                    discription:
                      "Define secure CI/CD blueprint integrating testing, automation, and policies.",
                  },
                  {
                    number: "03",
                    heading: "Integration & Automation",
                    discription:
                      "Embed SAST, DAST, SCA, IaC, and container scans into delivery workflows.",
                  },
                  {
                    number: "04",
                    heading: "Training & Enablement",
                    discription:
                      "Conduct developer workshops, playbook creation, and governance setup.",
                  },
                  {
                    number: "05",
                    heading: "Continuous Improvement & Optimization",
                    discription:
                      "Monitor metrics, automate updates, and refine workflows for maturity and scale.",
                  },
                ],
              },
            ],

            deliverables: [
              { li: "DevSecOps Maturity & Gap Assessment Report" },
              { li: "Secure CI/CD Pipeline Architecture Blueprint" },
              {
                li: "Toolchain Integration Plan (SAST, DAST, SCA, IaC, Containers)",
              },
              { li: "Policy-as-Code and Compliance Automation Framework" },
              { li: "Developer Training & Secure Coding Playbook" },
              { li: "Continuous Security Monitoring Dashboard" },
              { li: "Governance & Metrics Framework (KPIs, SLAs, ROI)" },
              { li: "Executive Summary Report for CISO/CTO Stakeholders" },
            ],

            whychooseus: [
              {
                title: "Why Choose Us – Embedding Security Into Speed",
                ul: [
                  {
                    li: "Expertise integrating GitHub, GitLab, Jenkins, Azure DevOps pipelines",
                  },
                  {
                    li: "Alignment with OWASP SAMM, NIST SSDF, ISO 27034 frameworks",
                  },
                  {
                    li: "Proven implementation success across cloud-native architectures",
                  },
                  {
                    li: "Cross-functional approach bridging dev, security, and operations",
                  },
                  {
                    li: "Outcome-driven delivery ensuring secure innovation at scale",
                  },
                ],
              },
            ],
          },

          // -------------------------- SLIDE 4: FAQ --------------------------
          { title1: "FAQ" },
        ],
      },
    ],
  },

  {
    id: "dataaisecurity",
    title: "Data & AI Security",
    items: [
      {
        id: "datasecurity",
        title: "→ Data Security",
        slides: [
          // ----------------------------- SLIDE 1: OVERVIEW -----------------------------
          {
            title1: "Overview",
            title2: "What is Data Security?",
            discription:
              "Data Security focuses on protecting sensitive information across its entire lifecycle — from creation and storage to transmission and deletion. It combines technical controls, governance frameworks, and data-centric protection mechanisms to safeguard information against unauthorized access, leakage, or manipulation — whether on-premises or in the cloud.",

            icons: [
              {
                icon: <Icon icon="mingcute:lock-line" width="24" height="24" />,
                iconheading: "Data Discovery & Classification",
                icondiscription:
                  "Identify and categorize sensitive data across environments.",
              },
              {
                icon: (
                  <Icon icon="jam:triangle-danger" width="24" height="24" />
                ),
                iconheading: "Access Control & Encryption",
                icondiscription:
                  "Protect data at rest, in motion, and in use through encryption and access control.",
              },
              {
                icon: <Icon icon="mingcute:lock-line" width="24" height="24" />,
                iconheading: "Data Loss Prevention (DLP)",
                icondiscription:
                  "Prevent data exfiltration through automated DLP policies.",
              },
              {
                icon: (
                  <Icon icon="jam:triangle-danger" width="24" height="24" />
                ),
                iconheading: "Monitoring & Analytics",
                icondiscription:
                  "Gain visibility into data flows and anomalies in real time.",
              },
              {
                icon: (
                  <Icon icon="jam:triangle-danger" width="24" height="24" />
                ),
                iconheading: "Governance & Compliance",
                icondiscription:
                  "Align data handling with regulatory frameworks (GDPR, HIPAA, ISO 27001).",
              },
            ],

            whowehelp: [
              {
                titleofwhohelp:
                  "Designed for organizations handling sensitive and regulated information:",
                list: [
                  "Enterprises handling sensitive or regulated data (financial, healthcare, or government)",
                  "Organizations transitioning to cloud or hybrid data environments",
                  "Businesses facing complex compliance requirements (GDPR, PCI DSS, HIPAA)",
                  "Data-driven enterprises seeking visibility and control across multiple systems",
                  "CISOs and Data Protection Officers aiming to operationalize data governance",
                ],
              },
            ],

            why: [
              {
                titl1: "Why Data Security",
                title2: "Why Data Security Matters",
                list: [
                  "Prevents data breaches, leaks, and insider threats",
                  "Ensures compliance with global privacy and data protection regulations",
                  "Builds customer trust through strong data stewardship",
                  "Enables secure data sharing and analytics without compromising privacy",
                ],
              },
            ],
          },

          // ----------------------------- SLIDE 2: SCOPE OF WORK -----------------------------
          {
            title1: "Scope of Work",
            scope: [
              {
                title: "Data Security Services",
                discription:
                  "Comprehensive solutions to protect, govern, and monitor data across hybrid and multi-cloud ecosystems.",

                section: [
                  {
                    icons: <Icon icon="uil:setting" width="24" height="24" />,
                    heading: "Data Discovery & Classification",
                    p: "Identify, categorize, and label sensitive data across systems and clouds.",
                  },
                  {
                    icons: (
                      <Icon
                        icon="streamline:landscape-setting"
                        width="14"
                        height="14"
                      />
                    ),
                    heading: "Encryption & Key Management",
                    p: "Implement data encryption, tokenization, and centralized key management.",
                  },
                  {
                    icons: (
                      <Icon
                        icon="majesticons:chart-line-area"
                        width="24"
                        height="24"
                      />
                    ),
                    heading: "Data Access Governance",
                    p: "Establish policies for least-privilege access and identity-based controls.",
                  },
                  {
                    icons: (
                      <Icon icon="jam:triangle-danger" width="24" height="24" />
                    ),
                    heading: "Data Loss Prevention (DLP)",
                    p: "Configure and monitor DLP solutions to detect and prevent data exfiltration.",
                  },
                  {
                    icons: (
                      <Icon
                        icon="ant-design:search-outlined"
                        width="24"
                        height="24"
                      />
                    ),
                    heading: "Data Monitoring & Threat Detection",
                    p: "Integrate telemetry to monitor unusual access, movement, or sharing.",
                  },
                  {
                    icons: (
                      <Icon
                        icon="fluent:document-one-page-20-regular"
                        width="24"
                        height="24"
                      />
                    ),
                    heading: "Compliance & Risk Alignment",
                    p: "Map controls to frameworks like GDPR, HIPAA, PCI DSS, and ISO 27001.",
                  },
                ],
              },
            ],
          },

          // ----------------------------- SLIDE 3: METHODOLOGY -----------------------------
          {
            title1: "Methodology",
            methodology: [
              {
                heading: "Our 5-Phase Data Security Implementation Journey",
                subsection: [
                  {
                    number: "01",
                    heading: "Assessment & Discovery",
                    discription:
                      "Identify critical data assets, flows, and protection gaps across environments.",
                  },
                  {
                    number: "02",
                    heading: "Design & Architecture",
                    discription:
                      "Develop a data protection and governance model aligned to compliance and business goals.",
                  },
                  {
                    number: "03",
                    heading: "Implementation & Integration",
                    discription:
                      "Deploy encryption, DLP, and access control mechanisms across data sources.",
                  },
                  {
                    number: "04",
                    heading: "Monitoring & Analytics Enablement",
                    discription:
                      "Enable continuous visibility and anomaly detection through integrated dashboards.",
                  },
                  {
                    number: "05",
                    heading: "Governance & Optimization",
                    discription:
                      "Establish governance frameworks and optimize controls for ongoing compliance.",
                  },
                ],
              },
            ],

            deliverables: [
              { li: "Comprehensive Data Security Assessment Report" },
              { li: "Data Discovery & Classification Inventory" },
              { li: "Encryption & Key Management Framework" },
              { li: "DLP Configuration & Incident Response Plan" },
              { li: "Data Access Governance Model" },
              { li: "Compliance Mapping (GDPR, HIPAA, ISO 27001, PCI DSS)" },
              { li: "Continuous Data Monitoring Dashboard" },
              { li: "Executive Summary with Risk & Compliance Metrics" },
            ],

            whychooseus: [
              {
                title:
                  "Why Choose Us – Data-Centric Protection Built for Modern Enterprises",
                ul: [
                  {
                    li: "Expertise across cloud-native, on-prem, and hybrid data architectures",
                  },
                  {
                    li: "Alignment with global compliance frameworks (GDPR, HIPAA, NIST, ISO 27001)",
                  },
                  {
                    li: "Deep integration experience with Microsoft Purview, Symantec, and Forcepoint DLP solutions",
                  },
                  {
                    li: "Proven success in securing enterprise data lakes, SaaS platforms, and APIs",
                  },
                  {
                    li: "Business-driven approach balancing protection, usability, and performance",
                  },
                ],
              },
            ],
          },

          // ----------------------------- SLIDE 4: FAQ -----------------------------
          { title1: "FAQ" },
        ],
      },
      {
        id: "responsibleai",
        title: "→ Responsible AI",
        slides: [
          // ----------------------------- SLIDE 1: OVERVIEW -----------------------------
          {
            title1: "Overview",
            title2: "What is Responsible AI?",
            discription:
              "Responsible AI is the framework for developing, deploying, and managing artificial intelligence systems ethically, transparently, and securely. It ensures that AI models align with organizational values, legal requirements, and societal expectations — minimizing risks related to bias, fairness, explainability, privacy, and accountability.",

            icons: [
              {
                icon: <Icon icon="mingcute:lock-line" width="24" height="24" />,
                iconheading: "Ethical Governance",
                icondiscription:
                  "Define clear policies for AI ethics, oversight, and decision accountability.",
              },
              {
                icon: (
                  <Icon icon="jam:triangle-danger" width="24" height="24" />
                ),
                iconheading: "Fairness & Bias Mitigation",
                icondiscription:
                  "Detect, measure, and mitigate bias across datasets and models.",
              },
              {
                icon: <Icon icon="mingcute:lock-line" width="24" height="24" />,
                iconheading: "Transparency & Explainability",
                icondiscription:
                  "Make AI decisions interpretable and explainable to stakeholders.",
              },
              {
                icon: (
                  <Icon icon="jam:triangle-danger" width="24" height="24" />
                ),
                iconheading: "Security & Privacy Protection",
                icondiscription:
                  "Protect data and models from misuse, leakage, or adversarial threats.",
              },
              {
                icon: (
                  <Icon icon="jam:triangle-danger" width="24" height="24" />
                ),
                iconheading: "Accountability & Compliance",
                icondiscription:
                  "Ensure compliance with AI regulations and responsible innovation principles.",
              },
            ],

            whowehelp: [
              {
                titleofwhohelp:
                  "Designed for organizations deploying AI in sensitive, high-impact contexts:",
                list: [
                  "Enterprises adopting AI for decision-making, automation, or analytics",
                  "AI product teams building models for sensitive or regulated domains",
                  "Organizations preparing for upcoming AI governance laws (EU AI Act, NIST AI RMF)",
                  "Businesses seeking to operationalize trust, transparency, and accountability in AI systems",
                  "CISOs, CDOs, and AI leads aiming to balance innovation with ethical safeguards",
                ],
              },
            ],

            why: [
              {
                titl1: "Why Responsible AI",
                title2: "Why Responsible AI Matters",
                list: [
                  "Builds trust in AI-driven decisions among users and regulators",
                  "Mitigates risks of bias, discrimination, and reputational damage",
                  "Ensures compliance with emerging AI laws and frameworks",
                  "Enhances security, resilience, and transparency in AI operations",
                ],
              },
            ],
          },

          // ----------------------------- SLIDE 2: SCOPE OF WORK -----------------------------
          {
            title1: "Scope of Work",
            scope: [
              {
                title: "Responsible AI Services",
                discription:
                  "Comprehensive framework design and implementation for ethical, compliant, and secure AI operations.",

                section: [
                  {
                    icons: <Icon icon="uil:setting" width="24" height="24" />,
                    heading: "AI Governance Framework Development",
                    p: "Establish AI ethics principles, governance structure, and accountability models.",
                  },
                  {
                    icons: (
                      <Icon
                        icon="streamline:landscape-setting"
                        width="14"
                        height="14"
                      />
                    ),
                    heading: "Bias & Fairness Audits",
                    p: "Assess datasets and models for discrimination, imbalance, and unintended bias.",
                  },
                  {
                    icons: (
                      <Icon
                        icon="majesticons:chart-line-area"
                        width="24"
                        height="24"
                      />
                    ),
                    heading: "Explainability & Transparency Enablement",
                    p: "Implement interpretable AI models and visualization dashboards.",
                  },
                  {
                    icons: (
                      <Icon icon="jam:triangle-danger" width="24" height="24" />
                    ),
                    heading: "AI Risk & Compliance Alignment",
                    p: "Map AI systems against regulatory standards (EU AI Act, NIST AI RMF, ISO 42001).",
                  },
                  {
                    icons: (
                      <Icon
                        icon="ant-design:search-outlined"
                        width="24"
                        height="24"
                      />
                    ),
                    heading: "Data Privacy & Security Controls",
                    p: "Apply data protection, anonymization, and adversarial resilience mechanisms.",
                  },
                  {
                    icons: (
                      <Icon
                        icon="fluent:document-one-page-20-regular"
                        width="24"
                        height="24"
                      />
                    ),
                    heading: "AI Lifecycle Monitoring",
                    p: "Continuously monitor, test, and update AI models to ensure ethical performance.",
                  },
                ],
              },
            ],
          },

          // ----------------------------- SLIDE 3: METHODOLOGY -----------------------------
          {
            title1: "Methodology",
            methodology: [
              {
                heading: "Our 5-Phase Responsible AI Implementation Journey",
                subsection: [
                  {
                    number: "01",
                    heading: "Assessment & Governance Review",
                    discription:
                      "Evaluate current AI policies, model lifecycle, and risk posture.",
                  },
                  {
                    number: "02",
                    heading: "Framework Design & Gap Analysis",
                    discription:
                      "Develop ethical AI principles, governance models, and compliance mappings.",
                  },
                  {
                    number: "03",
                    heading: "Bias Detection & Explainability Testing",
                    discription:
                      "Apply fairness metrics, interpretability methods, and audit tools.",
                  },
                  {
                    number: "04",
                    heading: "Policy Integration & Operationalization",
                    discription:
                      "Embed responsible AI controls into MLOps and data governance pipelines.",
                  },
                  {
                    number: "05",
                    heading: "Continuous Monitoring & Assurance",
                    discription:
                      "Track AI performance, compliance, and accountability through KPIs and reports.",
                  },
                ],
              },
            ],

            deliverables: [
              { li: "Responsible AI Governance Framework" },
              { li: "AI Risk & Compliance Assessment Report" },
              { li: "Bias & Fairness Audit Findings" },
              { li: "Explainability & Transparency Dashboard" },
              { li: "Data Security & Privacy Control Matrix" },
              { li: "AI Ethics & Accountability Policy Document" },
              { li: "Continuous Monitoring & Governance KPIs" },
              { li: "Executive Summary with Compliance & Maturity Metrics" },
            ],

            whychooseus: [
              {
                title:
                  "Why Choose Us – Ethics, Trust, and Compliance in Every Algorithm",
                ul: [
                  {
                    li: "Frameworks aligned to NIST AI RMF, ISO 42001, OECD AI Principles, and EU AI Act",
                  },
                  {
                    li: "Proven expertise in secure and explainable AI deployment",
                  },
                  {
                    li: "Integration-ready with MLOps, data governance, and risk management systems",
                  },
                  {
                    li: "Practical approach balancing innovation, compliance, and brand trust",
                  },
                  {
                    li: "Business-driven methodology ensuring ethical AI adoption at scale",
                  },
                ],
              },
            ],
          },

          // ----------------------------- SLIDE 4: FAQ -----------------------------
          { title1: "FAQ" },
        ],
      },
    ],
  },
];

const IconCard = ({ icon, description, heading }) => (
  <div className="p-3 bg-white border flex flex-col  border-gray-200 rounded-lg text-center shadow-sm">
    <div className="text-[#304782] mx-auto mb-2">{icon}</div>
    <h6>{heading}</h6>
    <p className="text-xs font-medium text-gray-700">{description}</p>
  </div>
);

const FeatureBox = ({ title, items, isList = true }) => (
  <div className="p-6 bg-gray-50 border border-gray-200  ">
    <h3 className="text-[16px] font-normal text-[#0b2546] mb-4">{title}</h3>
    {isList ? (
      <ul className="list-disc list-inside space-y-2 text-base text-black">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    ) : (
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="border-l-4 border-[#304782] pl-3">
            <h4 className="font-semibold text-gray-800">{item.heading}</h4>
            <p className="text-sm text-gray-600">{item.discription}</p>
          </div>
        ))}
      </div>
    )}
  </div>
);

const PlaceholderSlide = ({ title, serviceTitle, description }) => (
  <div className="text-center p-10 bg-white">
    <h2 className="text-2xl font-bold text-gray-800">
      Content for: **{serviceTitle.replace("→ ", "")}** ({title})
    </h2>
    <p className="mt-4 text-gray-600">
      {description ||
        `The detailed content for the **${title}** slide of the service **${serviceTitle.replace(
          "→ ",
          ""
        )}** is currently being prepared.`}
    </p>
    <p className="mt-2 text-gray-500 flex justify-center items-center gap-2">
      <Lightbulb size={18} className="text-yellow-500" />
      *This content is currently using placeholder data.*
    </p>
  </div>
);

// Reusable FAQ accordion component for slide 4
const FAQAccordion = ({ items = [] }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-6 bg-white">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
      <div className="space-y-3">
        {items.map((faq, idx) => (
          <div key={idx} className="border rounded overflow-hidden">
            <button
              onClick={() => toggle(idx)}
              className="w-full flex justify-between items-center p-4 bg-[#0C1A3E] text-white"
            >
              <span className="text-left font-medium">{faq.question || faq.q || `Question ${idx + 1}`}</span>
              <span className="text-2xl">{openIndex === idx ? '−' : '+'}</span>
            </button>

            {openIndex === idx && (
              <div className="p-4 text-gray-700 bg-white">
                {faq.answer || faq.a || 'Answer not available.'}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const OverviewSlide = ({ slideData, serviceTitle }) => {
  // Safely find the 'Overview' slide data
  const overview = slideData.slides.find((s) => s.title1 === "Overview");

  if (!overview || !overview.title2) {
    // Fallback if data is missing
    return (
      <PlaceholderSlide
        title="Overview"
        serviceTitle={serviceTitle}
        description="Detailed overview structure not found in data."
      />
    );
  }

  // Safely access optional data sections
  const whoWeHelpData = overview.whowehelp?.[0];
  const whyData = overview.why?.[0];

  // Normalize 'why' data so FeatureBox can render either
  // - older items use `list: string[]`
  // - some services use `sections: {heading, discription}[]`
  const whyItems = whyData ? whyData.list ?? whyData.sections ?? [] : [];
  const whyIsList =
    !!whyData &&
    (Array.isArray(whyData.list) ||
      (whyItems.length > 0 && typeof whyItems[0] === "string"));

  return (
    <div className=" h-auto ">
      <div className="">
        <h1 className="text-white text-lg">{overview.title1}</h1>
        <h2 className="text-[16px]  text-white font-normal ">
          {overview.title2}
        </h2>
        <p className="mt-2 text-sm  text-white">{overview.discription}</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-4 gap-4">
        {overview.icons?.map((item, index) => (
          <IconCard
            key={index}
            icon={item?.icon}
            heading={item.iconheading}
            description={item.icondiscription}
          />
        ))}
      </div>

      {/* --- 3. Two-Column Feature Layout --- */}
      <div className="grid grid-cols-1 mt-2 lg:grid-cols-2 gap-8 ">
        <div className=" ">
          <h3 className="text-[16px] font-normal text-white ">Who We Help</h3>
          {whoWeHelpData?.titleofwhohelp && (
            <FeatureBox
              title={whoWeHelpData.titleofwhohelp}
              items={whoWeHelpData.list ?? []}
              isList={true}
            />
          )}
        </div>
        <div>
          <h3 className="text-[16px] font-normal text-white ">
            {whyData?.titl1}
          </h3>
          {whyData && (
            <FeatureBox
              title={whyData.title2}
              items={whyItems}
              isList={whyIsList}
            />
          )}
        </div>
      </div>
    </div>
  );
};

const ScopeOfWorkSlide = ({ slideData, serviceTitle }) => {
  const scopeData = slideData.slides.find((s) => s.title1 === "Scope of Work")
    ?.scope?.[0];

  if (!scopeData || !scopeData.section) {
    return (
      <PlaceholderSlide
        title="Scope of Work"
        serviceTitle={serviceTitle}
        description="Detailed scope of work structure not found in data."
      />
    );
  }

  return (
    <div className="p-8 w-full flex-1 text-white  ">
      <h2 className="text-xl font-bold text-white mb-2">Scope of Work</h2>
      <h3 className="text-lg font-medium text-white mb-4">{scopeData.title}</h3>
      <p className="mb-10 text-lg text-white/80 max-w-2xl">
        {scopeData.discription}
      </p>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6">
        {scopeData.section?.map((item, index) => (
          <div
            key={index}
            className="p-5 bg-white border    flex flex-col items-start "
          >
            <div className="mb-3 text-black">{item?.icons}</div>
            <h4 className="font-semibold text-black text-lg mb-2">
              {item.heading}
            </h4>
            <p className="text-sm text-black">{item.p}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const MethodologyStep = ({ number, title, description }) => (
  <div className="p-4 rounded-lg bg-white text-white shadow-lg ">
    <div className="text-sm font-normal flex justify-center items-center text-white bg-[#0C1A3E] mb-2 w-6 h-6 rounded">
      {number}
    </div>
    <h3 className="text-[16px] font-normal mb-2 text-black">{title}</h3>
    <p className="text-sm font-normal text-black">{description}</p>
  </div>
);

const MethodologySlide = ({ slideData, serviceTitle }) => {
  const methodologySlideContent = slideData.slides.find(
    (s) => s.title1 === "Methodology"
  );

  if (
    !methodologySlideContent ||
    !methodologySlideContent.methodology ||
    !methodologySlideContent.deliverables
  ) {
    return (
      <PlaceholderSlide
        title="Methodology"
        serviceTitle={serviceTitle}
        description="Detailed methodology structure not found in data."
      />
    );
  }

  const methodology = methodologySlideContent.methodology[0];
  const deliverables = methodologySlideContent.deliverables;
  const whyChooseUs = methodologySlideContent.whychooseus?.[0];

  return (
    <div className="text-black space-y-8 p-6 ">
      <div className="">
        <h2 className="text-lg  font-bold text-white">Methodology</h2>
        <h2 className="text-lg  font-bold text-white">{methodology.heading}</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-5 gap-6">
        {methodology.subsection.map((step, index) => (
          <MethodologyStep
            key={index}
            number={step.number}
            title={step.heading}
            description={step.discription}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8 border-t border-gray-200">
        <div className="p-6 bg-gray-50 border border-gray-200 rounded-lg h-full">
          <h2 className="text-xl font-bold text-[#0b2546] mb-4">
            What You'll Receive (Deliverables)
          </h2>
          <ul className="list-disc list-inside space-y-2 text-base text-gray-700">
            {deliverables.map((item, index) => (
              <li key={index}>{item.li}</li>
            ))}
          </ul>
        </div>
        {whyChooseUs && (
          <div className="p-6 bg-gray-50 border border-gray-200 rounded-lg h-full">
            <h2 className="text-xl font-bold text-[#0b2546] mb-4">
              {whyChooseUs.title}
            </h2>
            <ul className="list-disc list-inside space-y-2 text-base text-gray-700">
              {whyChooseUs.ul.map((item, index) => (
                <li key={index}>{item.li}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default function ServicesNavigationPage({ id }) {
  const filterArray = id.split("-")
  const defaultGroup = SERVICE_DATA.find((item) => item.id === filterArray[0]);
  const defaultItem =
    defaultGroup.items.find((item) => item.id === filterArray[1]) ||
    defaultGroup.items[0];

  const [openGroupId, setOpenGroupId] = useState(defaultGroup.id);
  const [activeItemId, setActiveItemId] = useState(defaultItem.id);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const slideContainerRef = useRef(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const activeItem = useMemo(
    () =>
      SERVICE_DATA.flatMap((g) => g.items).find(
        (it) => it.id === activeItemId
      ) || defaultItem,
    [activeItemId]
  );

  const activeItemSlides = useMemo(() => {
    if (activeItem.slides && Array.isArray(activeItem.slides)) {
      return activeItem.slides.map((s) => s.title1);
    }
    return ["Details"];
  }, [activeItem]);

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  useEffect(() => {
    const currentGroup = SERVICE_DATA.find((g) => g.id === openGroupId);

    if (currentGroup && currentGroup.items.length > 0) {
      const isActiveItemInCurrentGroup = currentGroup.items.some(
        (item) => item.id === activeItemId
      );

      if (!isActiveItemInCurrentGroup) {
        setActiveItemId(currentGroup.items[0].id);
      }
    }

    // Always reset slide to 0 when item or group changes
    setActiveSlideIndex(0);
  }, [openGroupId, activeItemId]);

  const handleNextSlide = () => {
    setActiveSlideIndex(
      (prevIndex) => (prevIndex + 1) % activeItemSlides.length
    );
  };

  const handlePrevSlide = () => {
    setActiveSlideIndex(
      (prevIndex) =>
        (prevIndex - 1 + activeItemSlides.length) % activeItemSlides.length
    );
  };

  // 👇 SCROLL (WHEEL) LOGIC - NEW useEffect
  useEffect(() => {
    const currentGroup = SERVICE_DATA.find((g) => g.id === openGroupId);

    if (currentGroup && currentGroup.items.length > 0) {
      const isActiveItemInCurrentGroup = currentGroup.items.some(
        (item) => item.id === activeItemId
      );

      if (!isActiveItemInCurrentGroup) {
        setActiveItemId(currentGroup.items[0].id);
      }
    }
    setActiveSlideIndex(0);
  }, [openGroupId, activeItemId]);

  // Debounce Reset Logic (Keep this to prevent rapid button clicks during transition)
  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 500); // Changed back to 500 to match transition duration
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  const renderActiveSlideContent = () => {
    const hasSlidesData = activeItem.slides && activeItem.slides.length > 0;
    const serviceTitle = activeItem.title;

    if (!hasSlidesData) {
      // Renders only one placeholder if no slide data exists
      return (
        <div className="w-full ">
          <PlaceholderSlide
            title={activeItemSlides[0]}
            serviceTitle={serviceTitle}
          />
        </div>
      );
    }

    // Renders ALL slide content side-by-side
    return activeItemSlides.map((slideTitle, index) => {
      let SlideComponent = null;

      switch (slideTitle) {
        case "Overview":
          SlideComponent = (
            <OverviewSlide slideData={activeItem} serviceTitle={serviceTitle} />
          );
          break;
        case "Scope of Work":
          SlideComponent = (
            <ScopeOfWorkSlide
              slideData={activeItem}
              serviceTitle={serviceTitle}
            />
          );
          break;
        case "Methodology":
          SlideComponent = (
            <MethodologySlide
              slideData={activeItem}
              serviceTitle={serviceTitle}
            />
          );
          break;
        case "FAQ": {
          // Try to get FAQ items from the active item's slide data, otherwise fall back to sample FAQs
          const faqSlide = activeItem.slides
            ? activeItem.slides.find((s) => s.title1 === "FAQ")
            : null;

          const faqItems =
            (faqSlide && (faqSlide.faqs || faqSlide.items || faqSlide.data)) ||
            [
              {
                question: `What is ${serviceTitle.replace("→ ", "")}?`,
                answer:
                  "More information about this service will be available soon. Contact us for details.",
              },
              {
                question: "How do I engage with this service?",
                answer:
                  "Reach out via the Contact page or book a consultation to discuss your requirements.",
              },
            ];

          SlideComponent = <FAQAccordion items={faqItems} />;
        }
          break;
        default:
          SlideComponent = (
            <PlaceholderSlide title={slideTitle} serviceTitle={serviceTitle} />
          );
      }

      // KEY: Each slide wrapper takes full width and does NOT shrink (w-full flex-shrink-0)
      return (
        <div key={slideTitle} className="w-full shrink-0">
          {SlideComponent}
        </div>
      );
    });
  };

  const MobileSidebarDrawer = ({
    SERVICE_DATA,
    openGroupId,
    setOpenGroupId,
    activeItemId,
    setActiveItemId,
    isDrawerOpen,
    closeDrawer,
  }) => {
    return (
      // 1. UPDATED: Change hidden state (when closed) from 'translate-x-full' to '-translate-x-full'
      <div
        className={`fixed inset-0 z-50 transform transition-transform duration-300 ${isDrawerOpen ? "translate-x-0" : "-translate-x-full"
          } lg:hidden`}
      >
        {/* Overlay */}
        {isDrawerOpen && (
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeDrawer}
          />
        )}

        {/* Drawer Content */}
        {/* 2. UPDATED: Change content position from 'right-0' to 'left-0' */}
        <div className="absolute left-0 top-0 h-full w-4/5 max-w-xs bg-[#0C1A3E] p-4 shadow-2xl overflow-y-auto">
          <div className="text-right mb-2">
            <button
              onClick={closeDrawer}
              className=" text-white p-2"
            >
              <X size={24} />
            </button>
          </div>

          {/* Drawer Title */}
          {/* <h2 className="text-xl font-bold text-white pt-2 mb-6">
           {""}
          </h2> */}

          {/* Full Navigation Structure */}
          <div className="flex flex-col gap-3">
            {SERVICE_DATA.map((group) => {
              const isOpen = group.id === openGroupId;
              return (
                <div key={group.id}>
                  <button
                    onClick={() => {
                      // Toggle logic
                      if (isOpen) {
                        setOpenGroupId(null);
                      } else {
                        setOpenGroupId(group.id);
                        if (group.items.length > 0) {
                          setActiveItemId(group.items[0].id);
                        }
                      }
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-md transition ${isOpen
                      ? "text-white bg-[#304782]"
                      : "text-white/90 hover:bg-[#304782]/30"
                      }`}
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-sm text-left">{group.title}</span>
                    <span className="ml-2">
                      {isOpen ? (
                        <ChevronDown size={18} />
                      ) : (
                        <ChevronRight size={18} />
                      )}
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${isOpen ? "max-h-96" : "max-h-0"
                      }`}
                  >
                    <ul className="mt-3 space-y-1 px-1">
                      {group.items.map((it) => {
                        const isActive = it.id === activeItemId;
                        return (
                          <li key={it.id}>
                            <button
                              onClick={() => {
                                setActiveItemId(it.id);
                                setOpenGroupId(group.id);
                                closeDrawer(); // Close the drawer upon selection
                              }}
                              className={`w-full text-left flex items-center gap-3 pr-3 py-2 rounded-sm transition ${isActive
                                ? "bg-[#304782] text-white font-semibold"
                                : "text-white/80 hover:bg-[#304782]/20"
                                }`}
                            >
                              <span
                                className={`w-2 h-8 flex items-center justify-center shrink-0`}
                              >
                                <span
                                  className={`block w-1 h-[18px] rounded-sm transition-colors ${isActive ? "bg-white" : "bg-white/30"
                                    }`}
                                />
                              </span>
                              <span className="truncate text-sm">
                                {it.title}
                              </span>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-[#0C1A3E]  ">
      <MobileSidebarDrawer
        SERVICE_DATA={SERVICE_DATA}
        openGroupId={openGroupId}
        setOpenGroupId={setOpenGroupId}
        activeItemId={activeItemId}
        setActiveItemId={setActiveItemId}
        isDrawerOpen={isDrawerOpen}
        closeDrawer={closeDrawer}
      />

      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-10 h-auto">
        <div className="lg:hidden mb-6 flex items-center justify-between bg-[#0C1A3E] py-4 sticky top-20 z-20">
          <h1 className="text-lg font-bold text-white">
            {activeItem.title.replace("→ ", "")}
          </h1>
          <button onClick={openDrawer} className=" text-white rounded-md">
            <Menu size={24} />
          </button>
        </div>

        <div className="flex gap-8 justify-center">
          <aside
            className="w-[280px] shrink-0 md:sticky items-center justify-center md:top-24 md:self-start hidden lg:block bg-[#0b2546] rounded-lg p-3 shadow-xl"
            aria-label="Services navigation"
          >
            <div className="flex flex-col gap-3">
              {SERVICE_DATA.map((group) => {
                const isOpen = group.id === openGroupId;
                return (
                  <div key={group.id}>
                    <button
                      onClick={() => {
                        if (isOpen) {
                          // If already open, close it (set to null/undefined)
                          setOpenGroupId(null);
                        } else {
                          // If closed, open it
                          setOpenGroupId(group.id);

                          // Optional: Set active item to the first item when a group is newly opened
                          if (group.items.length > 0) {
                            setActiveItemId(group.items[0].id);
                          }
                        }
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-md transition ${isOpen
                        ? "text-white bg-[#304782]"
                        : "text-white/90 hover:bg-[#304782]/30"
                        }`}
                      aria-expanded={isOpen}
                    >
                      <span className="font-semibold text-sm text-left">
                        {group.title}
                      </span>
                      <span className="ml-2">
                        {isOpen ? (
                          <ChevronDown size={18} />
                        ) : (
                          <ChevronRight size={18} />
                        )}
                      </span>
                    </button>

                    <div
                      className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${isOpen ? "max-h-96" : "max-h-0"
                        }`}
                    >
                      <ul className="mt-3 space-y-1 px-1">
                        {group.items.map((it) => {
                          const isActive = it.id === activeItemId;
                          return (
                            <li key={it.id}>
                              <button
                                onClick={() => {
                                  setActiveItemId(it.id);
                                  setOpenGroupId(group.id);
                                }}
                                className={`w-full text-left flex items-center gap-3 pr-3 py-2 rounded-sm transition ${isActive
                                  ? "bg-[#304782] text-white font-semibold"
                                  : "text-white/80 hover:bg-[#304782]/20"
                                  }`}
                              >
                                <span
                                  className={`w-2 h-8 flex items-center justify-center shrink-0`}
                                >
                                  <span
                                    className={`block w-1 h-[18px] rounded-sm transition-colors ${isActive ? "bg-white" : "bg-white/30"
                                      }`}
                                  />
                                </span>
                                <span className="truncate text-sm">
                                  {it.title}
                                </span>
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </aside>

          {/* --- Main Content Area (Right) --- */}
          <main className="flex-1 min-w-0 z-10">
            <div className="flex justify-between items-center">
              <div className=" rounded-lg hidden lg:block">
                <h1 className="text-2xl md:text-3xl text-white text-center font-bold ">
                  {activeItem.title.replace("→ ", "")}
                </h1>
              </div>
              <div className="mt-6 p-4 flex flex-col z-20 text-white rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="flex items-center space-x-2">
                    {activeItemSlides.map((slide, index) => {
                      const isCompleted = index <= activeSlideIndex;

                      const isSegmentCompleted = index < activeSlideIndex;

                      return (
                        <div key={slide} className="flex items-end">
                          <div
                            className={`w-1 h-4 transition-colors ${isCompleted ? "bg-white" : "bg-white/30"
                              }`}
                          ></div>

                          {index < activeItemSlides.length - 1 && (
                            <div
                              className={`w-4 h-px transition-colors ${isSegmentCompleted ? "bg-white" : "bg-white/30"
                                }`}
                            ></div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  <div className="text-lg font-medium hidden sm:block">
                    {activeItemSlides[activeSlideIndex]}
                  </div>
                </div>

                {/* Navigation Arrows */}
                <div className="flex gap-4 mt-4">
                  {" "}
                  {/* Added mt-4 for separation from indicators */}
                  <button
                    onClick={handlePrevSlide}
                    className="p-2 border border-white/30 rounded-full hover:bg-white/10 transition disabled:opacity-50"
                    // ✅ CORRECTED Logic: Disable at start
                    disabled={activeSlideIndex === 0}
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={handleNextSlide}
                    className="p-2 border border-white/30 rounded-full hover:bg-white/10 transition disabled:opacity-50"
                    // ✅ CORRECTED Logic: Disable at end
                    disabled={activeSlideIndex === activeItemSlides.length - 1}
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>

            <div
              className="rounded-lg shadow-lg overflow-hidden h-auto"
              ref={slideContainerRef}
            >
              <div className="rounded-lg shadow-lg overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${activeSlideIndex * 100}%)`,
                  }}
                >
                  {renderActiveSlideContent()}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
