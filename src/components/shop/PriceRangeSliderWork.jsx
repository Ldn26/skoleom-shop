export default function PriceRangeSlider({ value, min = 0, max = 2000, onChange }) {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <p className="text-[11px] uppercase tracking-widest text-zinc-500">Prix max</p>
        <span className="text-sm font-bold text-lime-400">{value} €</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={10}
        value={value}
        onChange={(e) => onChange(+e.target.value)}
        className="w-full cursor-pointer accent-lime-400"
      />
      <div className="mt-1 flex justify-between text-[11px] text-zinc-600">
        <span>{min} €</span>
        <span>{max} €</span>
      </div>
    </div>
  );
}