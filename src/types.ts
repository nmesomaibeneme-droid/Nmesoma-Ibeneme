export interface ServiceDetail {
  id: string;
  title: string;
  category: 'engineering' | 'drilling' | 'procurement' | 'marine' | 'construction' | 'maintenance';
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  capabilities: string[];
  keyHighlights?: string[];
  activeEngagements?: string;
  deliveredProjects?: string;
  yardFacilities?: string[];
  internalsDesigned?: string[];
}

export interface ExecutedProject {
  id: string;
  title: string;
  client: string;
  status: 'COMPLETED' | 'IN_PROGRESS';
  category: string;
  description?: string;
}

export interface MarineEquipment {
  name: string;
  type: string;
  capacityHP: string;
  description: string;
  icon: string;
}

export interface ServiceQuoteRequest {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  servicesSelected: string[];
  projectLocation: 'Onshore' | 'Offshore' | 'Swamp' | 'Engineering Office';
  budgetEstimate?: string;
  projectDetails: string;
}
