export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  details: string[];
}

export const services: ServiceItem[] = [
  {
    id: 'web-applications',
    icon: 'faLayerGroup',
    title: 'Web application development',
    description: 'Build secure, scalable applications—internal tools or public products—that evolve with your business.',
    details: [
      'Architected for your context: serverless, containerised, or hybrid on major clouds.',
      'Security and observability by default: SSO, RBAC, encryption, logs/metrics/traces.',
      'CI/CD pipelines for safe, frequent releases; cost-aware designs to minimise cloud spend.',
      'Expertise with Next.js/Payload, Laravel, Django, and modern front-end stacks.'
    ]
  },
  {
    id: 'embeddable-devices',
    icon: 'faRaspberryPi',
    title: 'Embeddable devices',
    description: 'Reliable, connected devices for kiosks, installations, industrial tools, and consumer products.',
    details: [
      'Custom firmware on Linux-based systems; CAD design for manufacturability and durability.',
      'Integrations for connectivity, sensors, displays, and peripherals with field reliability.',
      'OTA updates, secure boot, signed releases, remote diagnostics, and fleet management.',
      'Path from rapid prototype to small-batch or scaled production, including compliance guidance.'
    ]
  },
  {
    id: 'agentic-ai',
    icon: 'faNetworkWired',
    title: 'Agentic AI infrastructure & orchestration',
    description: 'Deploy practical AI agents to automate workflows—on-prem for control, or in the cloud for speed.',
    details: [
      'On-prem GPUs for data control or trusted providers (OpenAI, Anthropic, Gemini) for time-to-value.',
      'Agents with retrieval (RAG), tool use, guardrails, and persistent memory across sessions.',
      'Security and compliance by design: access controls, anonymisation, audit trails.',
      'Evaluation harnesses, quality dashboards, human-in-the-loop, and clear ROI tracking.'
    ]
  },
  {
    id: 'self-hosted',
    icon: 'faServer',
    title: 'Self-hosted business infrastructure',
    description: 'Reduce dependency on costly SaaS and regain control with secure, open-source systems.',
    details: [
      'Replace select SaaS with FOSS equivalents deployed at the edge, in colo, or on-prem.',
      'Identity and access across services with SSO, MFA, and policy enforcement.',
      'Resilience and operations: backups, disaster recovery, observability, and lifecycle management.',
      'Data sovereignty and regulatory alignment (GDPR, HIPAA, SOC 2 practices).'
    ]
  }
];