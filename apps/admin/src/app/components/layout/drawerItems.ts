import React, { ReactNode } from 'react';
import { Analytics } from '@mui/icons-material';

interface DrawerItems {
  href: string;
  label: string;
  icon: ReactNode;
}
export const drawerItems: DrawerItems[] = [
  {
    href: '/app',
    label: 'Dashboard',
    icon: React.createElement(Analytics),
  },
];
