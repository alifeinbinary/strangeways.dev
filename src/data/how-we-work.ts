export interface HowWeWorkItem {
  id: string;
  title: string;
  summary: string;
  details: string[];
}

export const howWeWorkItems: HowWeWorkItem[] = [
  {
    id: 'white-label',
    title: 'White-label delivery',
    summary: 'Ideal for agencies and enterprise teams.',
    details: [
      'Ideal for agencies and enterprise teams.',
      'Commitment: by project or retainer.',
      'Billing: fixed or time & materials.',
      'Confidentiality and code ownership respected.'
    ]
  },
  {
    id: 'fractional',
    title: 'Fractional / staff augmentation',
    summary: 'Ideal for CTOs/teams needing extra velocity.',
    details: [
      'Ideal for CTOs/teams needing extra velocity.',
      'Commitment: flexible hours, 2h minimum.',
      'Billing: hourly or monthly retainer.',
      'SLA: agreed response times and cadence.'
    ]
  },
  {
    id: 'fixed-scope',
    title: 'Fixed-scope projects',
    summary: 'Ideal for well-defined outcomes and POCs.',
    details: [
      'Ideal for well-defined outcomes and POCs.',
      'Commitment: milestone-based delivery.',
      'Billing: fixed price by scope.',
      'Includes handoff and documentation.'
    ]
  }
];