


'use client';

import { useEffect, useState } from 'react';
import LiquidEther from '../LiquidEther';

export default function PageAurora() {
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setEnabled(!reduced);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#0A0A0B]">
      {enabled && (
        <div className="absolute inset-0">
          <LiquidEther
            colors={['#00e0ff', '#6fe600'  ,'#a8ff35']}
            mouseForce={20}
            cursorSize={100}
            isViscous={false}
            viscous={30}
            iterationsViscous={16}
            iterationsPoisson={16}
            resolution={0.4}
            isBounce={false}
            autoDemo
            autoSpeed={0.5}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={1000}
            autoRampDuration={0.6}
          />
        </div>
      )}

      {/* Light legibility veil — low enough that the aurora stays visible */}
      <div className="absolute inset-0 bg-[#0A0A0B]/40" />
    </div>
  );
}