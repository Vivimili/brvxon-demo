
import React from 'react';
import { CompanyData } from './types';

export const COLORS = {
  gold: '#D4AF37',
  goldLight: '#F9DE81',
  anthracite: '#0A0A0A',
  charcoal: '#121212',
  emerald: '#16B87F',
  white: '#FFFFFF',
};

export const MOCK_COMPANIES: CompanyData[] = [
  { id: '1', name: 'Farel Digital', industry: 'Luxury E-commerce', status: 'active', revenue: 4520, transactions: 124, lastActive: '2 min ago' },
  { id: '2', name: 'TechNova', industry: 'SaaS Enterprise', status: 'active', revenue: 3890, transactions: 98, lastActive: '15 min ago' },
  { id: '3', name: 'Lumina Arch', industry: 'Real Estate Luxury', status: 'onboarded', revenue: 0, transactions: 0, lastActive: '2 hours ago' },
  { id: '4', name: 'Solaris Inc.', industry: 'Clean Energy', status: 'active', revenue: 1948, transactions: 45, lastActive: '1 day ago' },
  { id: '5', name: 'Vortex Media', industry: 'Advertising Agency', status: 'pending', revenue: 0, transactions: 0, lastActive: 'Just now' },
];

export const CHART_DATA = [
  { name: 'Jan', revenue: 4000 },
  { name: 'Feb', revenue: 3000 },
  { name: 'Mar', revenue: 4200 },
  { name: 'Apr', revenue: 3780 },
  { name: 'May', revenue: 4890 },
  { name: 'Jun', revenue: 5390 },
  { name: 'Jul', revenue: 6490 },
  { name: 'Aug', revenue: 7400 },
  { name: 'Sep', revenue: 8200 },
  { name: 'Oct', revenue: 8900 },
  { name: 'Nov', revenue: 9800 },
  { name: 'Dec', revenue: 10358 },
];
