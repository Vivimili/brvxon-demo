
export interface CompanyData {
  id: string;
  name: string;
  industry: string;
  status: 'active' | 'pending' | 'onboarded';
  revenue: number;
  transactions: number;
  lastActive: string;
}

export interface KPI {
  label: string;
  value: string;
  trend: number;
  icon: string;
}

export type AppView = 'landing' | 'dashboard';
