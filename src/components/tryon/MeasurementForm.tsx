import type { Measurements } from '../../api/ai';
import { FIELDS, type MeasurementValues } from '../../types/tryon';

export function MeasurementForm({
  values,
  onChange,
}: {
  values: MeasurementValues;
  onChange: (key: keyof Measurements, value: string) => void;
}) {
  return (
    <div className="grid grid-cols-2 gap-2.5">
      {FIELDS.map(({ key, label, unit }) => (
        <div key={key}>
          <label className="block text-[10px] text-[#8a93a8] uppercase tracking-[0.06em] mb-1.5">
            {label} <span className="normal-case opacity-60">({unit})</span>
          </label>
          <input
            type="number"
            value={values[key]}
            onChange={e => onChange(key, e.target.value)}
            className="w-full px-3 py-[10px] bg-[#0c0e15] border border-white/10 rounded-[10px] text-[13px] text-[#eef1f6] focus:border-[rgb(163_230_53)] outline-none transition-colors"
          />
        </div>
      ))}
    </div>
  );
}