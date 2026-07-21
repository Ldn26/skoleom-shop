import { Link } from 'react-router-dom';

export default function Breadcrumb({ items }) {
  return (
    <nav     
    className="mb-6 flex items-center z-[99]   gap-2 text-sm text-zinc-500">
      {items.map((item, i) => (
        <span key={i} className="flex    z-[99]  items-center gap-2">
          {item.to ? (
            <Link to={item.to} className="transition-colors    z-[99] hover:text-lime-400">
              {item.label}
            </Link>
          ) : (
            <span className="text-white">{item.label}</span>
          )}
          {i < items.length - 1 && <span>›</span>}
        </span>
      ))}
    </nav>
  );
}