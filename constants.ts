
import { ServiceCategory } from './types';

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'ngos',
    title: 'For Local & International NGOs',
    description: 'Donor readiness and compliance solutions.',
    colorClass: 'bg-blue-700',
    accentColor: '#1d4ed8',
    services: [
      { name: 'Donor Organization Readiness Assessment and Training', duration: '2 weeks', localPrice: '750,000 XAF', internationalPrice: '$1,800' },
      { name: 'US Government Grant Application Support and Training', duration: '2 weeks', localPrice: '850,000 XAF', internationalPrice: '$2,100' },
      { name: 'Pre-Award Survey Preparation', duration: '2 weeks', localPrice: '800,000 XAF', internationalPrice: '$1,950' },
      { name: 'Grant & Contract Management (Full Lifecycle)', duration: 'Program length', localPrice: 'Contact us', internationalPrice: 'Contact us' },
      { name: 'Financial and Governance Systems Evaluation and Strengthening', duration: '1 month', localPrice: '1,500,000 XAF', internationalPrice: '$3,600' },
      { name: 'Procurement Manual Development', duration: '3 weeks', localPrice: '1,200,000 XAF', internationalPrice: '$2,900' },
      { name: 'Audit Readiness & Compliance Training', duration: '3 weeks', localPrice: '950,000 XAF', internationalPrice: '$2,300' },
      { name: 'Emergency Readiness & Contingency Planning', duration: '3 weeks', localPrice: '1,100,000 XAF', internationalPrice: '$2,700' },
      { name: 'Cybersecurity for Sensitive Beneficiary Data', duration: '3 weeks', localPrice: '900,000 XAF', internationalPrice: '$2,200' },
      { name: 'Artificial Intelligence Training', duration: '3 weeks', localPrice: '850,000 XAF', internationalPrice: '$2,100' },
      { name: 'Policy Development & SOP Standardization', duration: '1 month', localPrice: '1,400,000 XAF', internationalPrice: '$3,400' },
      { name: 'IT Skills Training for Staff', duration: '1 month', localPrice: '1,000,000 XAF', internationalPrice: '$2,400' },
      { name: 'Google Cloud & Microsoft Tools Mastery', duration: '1 month', localPrice: '950,000 XAF', internationalPrice: '$2,300' },
    ]
  },
  {
    id: 'private-sector',
    title: 'For Private Sector & Vendors',
    description: 'Unlock market access and bidding power.',
    colorClass: 'bg-emerald-700',
    accentColor: '#047857',
    services: [
      { name: 'Doing Business with the US Government', duration: '2 weeks', localPrice: '800,000 XAF', internationalPrice: '$1,950' },
      { name: 'SAM.gov Registration & Navigation', duration: '2 weeks', localPrice: '150,000 XAF', internationalPrice: '$300' },
      { name: 'Compliant Proposal Writing', duration: '2 weeks', localPrice: '750,000 XAF', internationalPrice: '$1,800' },
      { name: 'Embassy Contract Bidding Support', duration: '2 weeks', localPrice: '850,000 XAF', internationalPrice: '$2,100' },
      { name: 'Effective Procurement & Contracting Systems', duration: '2 weeks', localPrice: '900,000 XAF', internationalPrice: '$2,200' },
      { name: 'AI Integration for Business Operations', duration: '2 weeks', localPrice: '800,000 XAF', internationalPrice: '$1,950' },
      { name: 'Supply Chain & Logistics Consulting', duration: '2 weeks', localPrice: '950,000 XAF', internationalPrice: '$2,300' },
      { name: 'Corporate Cybersecurity Awareness Training', duration: '2 weeks', localPrice: '700,000 XAF', internationalPrice: '$1,700' },
      { name: 'Artificial Intelligence Training', duration: '2 weeks', localPrice: '750,000 XAF', internationalPrice: '$1,800' },
      { name: 'Policy Development & SOP Standardization', duration: '2 weeks', localPrice: '850,000 XAF', internationalPrice: '$2,100' },
      { name: 'IT Skills Training for Staff', duration: '2 weeks', localPrice: '700,000 XAF', internationalPrice: '$1,700' },
      { name: 'Google Cloud & Microsoft Tools Mastery', duration: '2 weeks', localPrice: '700,000 XAF', internationalPrice: '$1,700' },
      { name: 'Systems Strengthening', duration: '2 weeks', localPrice: '950,000 XAF', internationalPrice: '$2,300' },
    ]
  },
  {
    id: 'government',
    title: 'For Government Agencies',
    description: 'System modernization and capacity building.',
    colorClass: 'bg-indigo-700',
    accentColor: '#4338ca',
    services: [
      { name: 'Procurement System Strengthening', duration: '1 month', localPrice: '2,000,000 XAF', internationalPrice: '$4,800' },
      { name: 'Crisis Procurement Management', duration: '1 month', localPrice: '2,200,000 XAF', internationalPrice: '$5,300' },
      { name: 'Policy Development & SOP Standardization', duration: '1 month', localPrice: '1,800,000 XAF', internationalPrice: '$4,400' },
      { name: 'Economic Dialogue Facilitation', duration: '1 month', localPrice: '2,500,000 XAF', internationalPrice: '$6,000' },
      { name: 'Capacity Building for Public Officials', duration: '1 month', localPrice: '1,900,000 XAF', internationalPrice: '$4,600' },
      { name: 'Artificial Intelligence Training', duration: '1 month', localPrice: '1,600,000 XAF', internationalPrice: '$3,900' },
    ]
  },
  {
    id: 'education',
    title: 'For Educational Institutions',
    description: 'Digital transformation for the future of learning.',
    colorClass: 'bg-rose-700',
    accentColor: '#be123c',
    services: [
      { name: 'AI in Education: Curriculum Development', duration: '3 weeks', localPrice: '1,100,000 XAF', internationalPrice: '$2,700' },
      { name: 'Student Leadership & Mentorship Programs', duration: '3 weeks', localPrice: '900,000 XAF', internationalPrice: '$2,200' },
      { name: 'IT Skills Training for Youth', duration: '3 weeks', localPrice: '800,000 XAF', internationalPrice: '$1,950' },
      { name: 'Cybersecurity Awareness for Schools', duration: '3 weeks', localPrice: '850,000 XAF', internationalPrice: '$2,100' },
      { name: 'Google Cloud & Microsoft Tools Mastery', duration: '3 weeks', localPrice: '800,000 XAF', internationalPrice: '$1,950' },
      { name: 'Digital Transformation Strategy', duration: '3 weeks', localPrice: '1,200,000 XAF', internationalPrice: '$2,900' },
      { name: 'Systems Strengthening', duration: '3 weeks', localPrice: '3,000,000 XAF', internationalPrice: '$5,400' },
      { name: 'Artificial Intelligence Training', duration: '3 weeks', localPrice: '950,000 XAF', internationalPrice: '$2,300' },
    ]
  },
  {
    id: 'corporate',
    title: 'For Corporate Leadership & Executives',
    description: 'High-level strategy and governance.',
    colorClass: 'bg-slate-800',
    accentColor: '#1e293b',
    services: [
      { name: 'Executive AI Strategy & Governance', duration: '1 month', localPrice: '1,800,000 XAF', internationalPrice: '$4,400' },
      { name: 'AI Acceptable Use Policy Development', duration: '1 month', localPrice: '1,500,000 XAF', internationalPrice: '$3,600' },
      { name: 'Servant Leadership Training', duration: '1 month', localPrice: '1,400,000 XAF', internationalPrice: '$3,400' },
      { name: 'Conflict Resolution & Team Building', duration: '1 month', localPrice: '1,300,000 XAF', internationalPrice: '$3,200' },
      { name: 'Organizational Manual Development', duration: '1 month', localPrice: '1,600,000 XAF', internationalPrice: '$3,900' },
      { name: 'Change Management Consulting', duration: '1 month', localPrice: '1,700,000 XAF', internationalPrice: '$4,100' },
      { name: 'Board-Level AI Risk Mitigation', duration: '1 month', localPrice: '2,000,000 XAF', internationalPrice: '$4,800' },
      { name: 'Artificial Intelligence Training', duration: '1 month', localPrice: '1,500,000 XAF', internationalPrice: '$3,600' },
      { name: 'Procurement System Strengthening', duration: '1 month', localPrice: '1,800,000 XAF', internationalPrice: '$4,400' },
    ]
  },
  {
    id: 'individuals',
    title: 'For Individual Professionals',
    description: 'Empower your career with top-tier certifications.',
    colorClass: 'bg-amber-600',
    accentColor: '#d97706',
    services: [
      { name: 'PMP® Certification Prep Course', duration: '3 months', localPrice: '450,000 XAF', internationalPrice: '$1,100' },
      { name: 'Career Coaching & Mentorship', duration: '3 months', localPrice: '400,000 XAF', internationalPrice: '$950' },
      { name: 'AI Prompt Engineering Mastery', duration: '1 month', localPrice: '200,000 XAF', internationalPrice: '$500' },
      { name: 'Personal Productivity with GenAI', duration: '1 month', localPrice: '180,000 XAF', internationalPrice: '$450' },
      { name: 'Essential Marketing Skills', duration: '6 weeks', localPrice: '250,000 XAF', internationalPrice: '$600' },
      { name: 'Soft Skills Development', duration: '6 weeks', localPrice: '220,000 XAF', internationalPrice: '$550' },
      { name: 'Publishing Services & Ghostwriting', duration: '6 weeks', localPrice: '500,000 XAF', internationalPrice: '$1,200' },
    ]
  },
  {
    id: 'women-youth',
    title: 'For Women Entrepreneurs & Youth Innovators',
    description: 'Inclusive economic opportunities.',
    colorClass: 'bg-purple-700',
    accentColor: '#7e22ce',
    services: [
      { name: 'Deal-Making Opportunities Platform', duration: '1 month', localPrice: '300,000 XAF', internationalPrice: '$750' },
      { name: 'Youth Innovation & Economic Inclusion', duration: '1 month', localPrice: '280,000 XAF', internationalPrice: '$700' },
      { name: 'Procurement System Strengthening', duration: '1 month', localPrice: '350,000 XAF', internationalPrice: '$850' },
      { name: 'AI Prompt Engineering Mastery', duration: '1 month', localPrice: '250,000 XAF', internationalPrice: '$600' },
      { name: 'Personal Productivity with GenAI', duration: '1 month', localPrice: '220,000 XAF', internationalPrice: '$550' },
      { name: 'Essential Marketing Skills', duration: '1 month', localPrice: '280,000 XAF', internationalPrice: '$700' },
      { name: 'Soft Skills Development', duration: '1 month', localPrice: '260,000 XAF', internationalPrice: '$650' },
    ]
  },
  {
    id: 'humanitarian',
    title: 'For Humanitarian & Development Sector',
    description: 'Resilient leadership in crisis environments.',
    colorClass: 'bg-orange-700',
    accentColor: '#c2410c',
    services: [
      { name: 'IDP & Vulnerable Communities Outreach', duration: '6 weeks', localPrice: '800,000 XAF', internationalPrice: '$1,950' },
      { name: 'Crisis Environment Leadership Training', duration: '6 weeks', localPrice: '900,000 XAF', internationalPrice: '$2,200' },
      { name: 'Multicultural Team Management', duration: '6 weeks', localPrice: '850,000 XAF', internationalPrice: '$2,100' },
      { name: 'Emergency Procurement Systems', duration: '6 weeks', localPrice: '950,000 XAF', internationalPrice: '$2,300' },
      { name: 'Post-Conflict Capacity Building', duration: '6 weeks', localPrice: '1,000,000 XAF', internationalPrice: '$2,400' },
      { name: 'Data-Informed Development Training', duration: '6 weeks', localPrice: '900,000 XAF', internationalPrice: '$2,200' },
    ]
  }
];
