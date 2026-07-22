'use client';

import type { ComponentType, ReactNode } from 'react';
import { Loader2 } from 'lucide-react';

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}

export function PageHeader({
  title,
  subtitle,
  action,
}: {
  title: string;
  subtitle?: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">{title}</h1>
        {subtitle && <p className="mt-1 text-sm font-light text-white/50">{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}

export function StatCard({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: ReactNode;
  icon: ComponentType<{ size?: number; className?: string }>;
}) {
  return (
    <Card className="flex items-center gap-4 p-5">
      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#a8ff35]/12 text-[#a8ff35]">
        <Icon size={22} />
      </div>
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">{label}</p>
        <p className="mt-0.5 text-2xl font-bold text-white">{value}</p>
      </div>
    </Card>
  );
}

export function StateBlock({
  state,
  emptyLabel = 'Rien à afficher pour le moment.',
  errorLabel = 'Impossible de charger les données.',
}: {
  state: 'loading' | 'error' | 'empty';
  emptyLabel?: string;
  errorLabel?: string;
}) {
  if (state === 'loading') {
    return (
      <div className="flex items-center justify-center gap-2 py-16 text-sm text-white/40">
        <Loader2 size={16} className="animate-spin" />
        Chargement...
      </div>
    );
  }
  if (state === 'error') {
    return (
      <div className="rounded-2xl border border-red-500/25 bg-red-500/10 px-4 py-10 text-center text-sm text-red-300">
        {errorLabel}
      </div>
    );
  }
  return <div className="py-16 text-center text-sm text-white/40">{emptyLabel}</div>;
}

export function Badge({ children, tone = 'neutral' }: { children: ReactNode; tone?: 'neutral' | 'green' | 'amber' | 'red' }) {
  const tones = {
    neutral: 'border-white/15 bg-white/5 text-white/70',
    green: 'border-[#a8ff35]/30 bg-[#a8ff35]/10 text-[#a8ff35]',
    amber: 'border-amber-400/30 bg-amber-400/10 text-amber-300',
    red: 'border-red-400/30 bg-red-400/10 text-red-300',
  };
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${tones[tone]}`}>
      {children}
    </span>
  );
}
