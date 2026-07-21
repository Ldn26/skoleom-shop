import type { ReactNode } from 'react';
import type { Step } from '../../types/tryon';

/* ─── Numbered section heading (reused in every column) ───────── */
export function SectionHeading({ n, children }: { n: number | string; children: ReactNode }) {
  return (
    <h3 className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#8a93a8] flex items-center gap-2">
      <span className="w-5 h-5 rounded-full bg-[rgba(163,230,53,0.15)] border border-[rgba(163,230,53,0.3)] flex items-center justify-center text-[rgb(163,230,53)] text-[9px] font-bold">
        {n}
      </span>
      {children}
    </h3>
  );
}

/* ─── Step indicator pills ───────────────────────────────────── */
export function StepIndicator({ steps }: { steps: Step[] }) {
  return (
    <div className="flex items-center gap-2 mt-4 flex-wrap">
      {steps.map(({ n, label, done }, i) => (
        <div key={n} className="flex items-center gap-2">
          <div
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold border transition-all
              ${done
                ? 'bg-[rgba(163,230,53,0.12)] border-[rgba(163,230,53,0.4)] text-[rgb(163,230,53)]'
                : 'bg-white/[0.03] border-white/10 text-[#8a93a8]'
              }`}
          >
            <span
              className="w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold"
              style={{ background: done ? 'rgba(163,230,53,0.25)' : 'rgba(255,255,255,0.06)' }}
            >
              {done ? '✓' : n}
            </span>
            {label}
          </div>
          {i < steps.length - 1 && <span className="text-white/20">›</span>}
        </div>
      ))}
    </div>
  );
}

/* ─── Animated scan-line overlay on the photo avatar ─────────── */
export function ScanOverlay({ running }: { running: boolean }) {
  if (!running) return null;
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[18px]" style={{ zIndex: 6 }}>
      {/* scan line */}
      <div
        className="absolute left-0 right-0 h-[2px]"
        style={{
          background: 'linear-gradient(90deg, transparent, rgb(163,230,53), transparent)',
          boxShadow: '0 0 14px rgb(163,230,53)',
          animation: 'scanY 2.4s ease-in-out infinite',
        }}
      />
      {/* corner brackets */}
      {[
        { top: 10, left: 10,  borderTop: 2, borderLeft: 2  },
        { top: 10, right: 10, borderTop: 2, borderRight: 2 },
        { bottom: 10, left: 10,  borderBottom: 2, borderLeft: 2  },
        { bottom: 10, right: 10, borderBottom: 2, borderRight: 2 },
      ].map((s, i) => (
        <div
          key={i}
          className="absolute w-5 h-5"
          style={{ ...s, borderColor: 'rgb(163,230,53)', borderStyle: 'solid', opacity: 0.8 }}
        />
      ))}
    </div>
  );
}