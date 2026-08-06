'use client';

import React from 'react';

interface DashboardShellProps {
  children: React.ReactNode;
}

export default function DashboardShell({ children }: DashboardShellProps) {
  return (
    <div
      style={{ background: '#060606', color: 'rgba(255,255,255,0.9)', minHeight: '100vh' }}
      className="relative pt-20 pb-10 font-sans md:pt-24 lg:pt-36"
    >
      <main className="relative z-10 min-w-0">
        <div className="mx-auto max-w-[1400px] p-4 sm:p-6 lg:p-8 xl:p-10">{children}</div>
      </main>
    </div>
  );
}
