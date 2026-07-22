// 'use client';

// import type { ReactNode } from 'react';
// import DashboardShell from '@/components/vendeur/DashboardShell';

// export default function DashboardLayout({ children }: { children: ReactNode }) {
//   return <DashboardShell>{children}</DashboardShell>;
// }

'use client';

import type { ReactNode } from 'react';
import DashboardShell from '@/components/vendeur/DashboardShell';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return <DashboardShell>{children}</DashboardShell>;
}