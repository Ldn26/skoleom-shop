'use client';

import { useEffect, useState } from 'react';
import LiquidEther from '../LiquidEther';

export default function PageAurora() {
  const [capable, setCapable] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const small = window.matchMedia('(max-width: 767px)').matches;
    const cores = navigator.hardwareConcurrency ?? 8;
    setCapable(!reduced && !small && cores >= 4);

    const onVis = () => setVisible(document.visibilityState === 'visible');
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, []);

  const run = capable && visible;

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#0A0A0B]">
      <style>{`
        .pa-static::before, .pa-static::after {
          content: ''; position: absolute; border-radius: 9999px;
          filter: blur(100px); will-change: transform;
        }
        .pa-static::before {
          width: 60vw; height: 60vw; left: 6%; top: -20%;
          background: radial-gradient(circle, rgba(168,255,53,0.5), transparent 62%);
          animation: pa-drift-a 20s ease-in-out infinite alternate;
        }
        .pa-static::after {
          width: 52vw; height: 52vw; right: 0%; top: 40%;
          background: radial-gradient(circle, rgba(0,224,255,0.28), transparent 62%);
          animation: pa-drift-b 24s ease-in-out infinite alternate;
        }
        @keyframes pa-drift-a { from { transform: translate3d(-4%,-3%,0) scale(1); } to { transform: translate3d(6%,5%,0) scale(1.14); } }
        @keyframes pa-drift-b { from { transform: translate3d(4%,3%,0) scale(1.06); } to { transform: translate3d(-6%,-4%,0) scale(0.94); } }
        .pa-gl { animation: pa-fade 1.4s ease-out both; }
        @keyframes pa-fade { from { opacity: 0; } to { opacity: 1; } }
        @media (prefers-reduced-motion: reduce) {
          .pa-static::before, .pa-static::after, .pa-gl { animation: none !important; opacity: 1 !important; transform: none !important; }
        }
      `}</style>

      <div className="pa-static absolute inset-0" aria-hidden />

   
        <div className="pa-gl absolute inset-0">
          <LiquidEther
            colors={['#a8ff35', '#6fe600', '#00e0ff']}
            mouseForce={0}
            cursorSize={90}
            isViscous={false}
            iterationsViscous={12}
            iterationsPoisson={14}
            resolution={0.3}
            isBounce={false}
            autoDemo
            autoSpeed={0.45}
            autoIntensity={1.8}
            takeoverDuration={0.25}
            autoResumeDelay={1000}
            autoRampDuration={0.8}
          />
        </div>
   

      {/* Global legibility veil over the aurora */}
      <div className="absolute inset-0 bg-[#0A0A0B]/72" />
    </div>
  );
}
