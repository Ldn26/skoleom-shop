import { useState, useRef, useCallback } from 'react';

export function PhotoZone({
  preview,
  onFile,
}: {
  preview: string | null;
  onFile: (file: File) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [drag, setDrag] = useState(false);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDrag(false);
      const file = e.dataTransfer.files[0];
      if (file && file.type.startsWith('image/')) onFile(file);
    },
    [onFile]
  );

  return (
    <div
      className={`relative w-full rounded-[18px] overflow-hidden transition-all duration-300 cursor-pointer
        ${drag
          ? 'border-2 border-[rgb(163,230,53)] shadow-[0_0_24px_rgba(163,230,53,0.3)]'
          : 'border-2 border-dashed border-white/20 hover:border-[rgb(163,230,53)] hover:border-solid hover:shadow-[0_0_18px_rgba(163,230,53,0.15)]'}`}
      style={{ aspectRatio: '3/4', maxHeight: 300, background: '#0c0e15' }}
      onClick={() => inputRef.current?.click()}
      onDragOver={e => { e.preventDefault(); setDrag(true); }}
      onDragLeave={() => setDrag(false)}
      onDrop={handleDrop}
    >
      {preview ? (
        <>
          <img src={preview} alt="Photo de profil" className="w-full h-full object-cover" />
          {/* Replace overlay on hover */}
          <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2">
            <svg className="w-7 h-7 text-[rgb(163,230,53)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" />
            </svg>
            <span className="text-xs text-[rgb(163,230,53)] font-semibold">Changer la photo</span>
          </div>
          {/* Lime badge */}
          <div className="absolute top-2 right-2 bg-[rgba(163,230,53,0.2)] border border-[rgba(163,230,53,0.5)] rounded-full px-2 py-0.5 text-[9px] text-[rgb(163,230,53)] font-bold">
            PHOTO ✓
          </div>
        </>
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4">
          <div className="w-14 h-14 rounded-full bg-[rgba(163,230,53,0.08)] border border-[rgba(163,230,53,0.2)] flex items-center justify-center">
            <svg className="w-7 h-7 text-[rgb(163,230,53)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" />
            </svg>
          </div>
          <div className="text-center">
            <p className="text-sm font-semibold text-[#eef1f6]">Déposez votre photo</p>
            <p className="text-[11px] text-[#8a93a8] mt-1">ou cliquez pour parcourir</p>
            <p className="text-[10px] text-[#8a93a8] mt-2 opacity-70">PNG · JPG · WEBP · max 10 Mo</p>
          </div>
        </div>
      )}
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        capture="user"
        className="hidden"
        onChange={e => { const f = e.target.files?.[0]; if (f) onFile(f); }}
      />
    </div>
  );
}