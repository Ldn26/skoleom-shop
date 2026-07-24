'use client';

interface Props {
  minValue: number;
  maxValue: number;
  min?: number;
  max?: number;
  step?: number;
  onChange: (min: number, max: number) => void;
}

export default function PriceRangeSlider({
  minValue,
  maxValue,
  min = 0,
  max = 2000,
  step = 10,
  onChange,
}: Props) {
  const span = Math.max(1, max - min);
  const pctMin = ((minValue - min) / span) * 100;
  const pctMax = ((maxValue - min) / span) * 100;

  const changeMin = (v: number) => onChange(Math.min(v, maxValue - step), maxValue);
  const changeMax = (v: number) => onChange(minValue, Math.max(v, minValue + step));

  return (
    <div>
      <style>{`
        .rng-input{position:absolute;left:0;top:0;width:100%;height:100%;margin:0;background:transparent;pointer-events:none;-webkit-appearance:none;appearance:none;}
        .rng-input::-webkit-slider-thumb{pointer-events:auto;-webkit-appearance:none;appearance:none;height:16px;width:16px;border-radius:9999px;background:#a3e635;border:2px solid #0A0A0B;cursor:pointer;box-shadow:0 0 0 1px rgba(163,230,53,.5),0 2px 6px rgba(0,0,0,.4);transition:transform .15s;}
        .rng-input::-webkit-slider-thumb:hover{transform:scale(1.15);}
        .rng-input::-moz-range-thumb{pointer-events:auto;height:16px;width:16px;border-radius:9999px;background:#a3e635;border:2px solid #0A0A0B;cursor:pointer;box-shadow:0 0 0 1px rgba(163,230,53,.5);}
      `}</style>

      <div className="mb-4 flex items-center gap-2">
        <div className="flex-1">
          <label className="mb-1 block text-[10px] uppercase tracking-widest text-zinc-500">Min</label>
          <div className="flex items-center rounded-lg border border-white/10 bg-white/[0.03] px-2.5 focus-within:border-lime-400/50">
            <input
              type="number"
              value={minValue}
              min={min}
              max={maxValue - step}
              onChange={(e) => changeMin(Number(e.target.value) || min)}
              className="w-full bg-transparent py-2 text-sm text-white outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none"
            />
            <span className="text-xs text-zinc-500">€</span>
          </div>
        </div>
        <span className="mt-5 text-zinc-600">—</span>
        <div className="flex-1">
          <label className="mb-1 block text-[10px] uppercase tracking-widest text-zinc-500">Max</label>
          <div className="flex items-center rounded-lg border border-white/10 bg-white/[0.03] px-2.5 focus-within:border-lime-400/50">
            <input
              type="number"
              value={maxValue}
              min={minValue + step}
              max={max}
              onChange={(e) => changeMax(Number(e.target.value) || max)}
              className="w-full bg-transparent py-2 text-sm text-white outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none"
            />
            <span className="text-xs text-zinc-500">€</span>
          </div>
        </div>
      </div>

      <div className="relative h-4">
        <div className="absolute top-1/2 h-1 w-full -translate-y-1/2 rounded-full bg-white/10" />
        <div
          className="absolute top-1/2 h-1 -translate-y-1/2 rounded-full bg-lime-400"
          style={{ left: `${pctMin}%`, right: `${100 - pctMax}%` }}
        />
        <input
          type="range"
          className="rng-input"
          min={min}
          max={max}
          step={step}
          value={minValue}
          onChange={(e) => changeMin(Number(e.target.value))}
        />
        <input
          type="range"
          className="rng-input"
          min={min}
          max={max}
          step={step}
          value={maxValue}
          onChange={(e) => changeMax(Number(e.target.value))}
        />
      </div>

      <div className="mt-1 flex justify-between text-[11px] text-zinc-600">
        <span>{min} €</span>
        <span>{max} €</span>
      </div>
    </div>
  );
}
