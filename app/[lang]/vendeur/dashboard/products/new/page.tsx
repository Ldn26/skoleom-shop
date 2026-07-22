'use client';

import { useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, Download, FileUp, Loader2, Upload } from 'lucide-react';
import { useCreateProduct } from '@/api/vendeur';
import { useLocalizedPath } from '@/i18n/useLocalizedPath';
import { Card, PageHeader } from '@/components/vendeur/ui';
import {
  CSV_COLUMNS,
  CSV_TEMPLATE,
  parseCsv,
  rowToProduct,
  validateRow,
  type CsvRow,
} from '@/utils/csvImport';

type Tab = 'form' | 'csv';

const EMPTY = {
  name: 'test',
  price: '12',
  sale_price: '23',
  sku: '2121',
  stock_quantity: '123',
  image: '',
  status: 'publish',
  short_description: '',
  description: 'DESPCSFS',
};

const inputClass =
  'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-[#a8ff35]/60 focus:outline-none focus:ring-2 focus:ring-[#a8ff35]/15';
const labelClass = 'mb-1.5 block text-xs font-medium text-white/50';

export default function AddProductPage() {
  const nav = useNavigate();
  const localizePath = useLocalizedPath();
  const create = useCreateProduct();
  const [tab, setTab] = useState<Tab>('form');

  const [form, setForm] = useState({ ...EMPTY });
  const [formMsg, setFormMsg] = useState<{ ok: boolean; text: string } | null>(null);
  const set = (key: keyof typeof EMPTY, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const submitForm = async () => {
    setFormMsg(null);
    if (!form.name.trim() || !form.price.trim()) {
      setFormMsg({ ok: false, text: 'Le nom et le prix sont requis.' });
      return;
    }
    try {
      await create.mutateAsync(rowToProduct(form as unknown as CsvRow));
      setFormMsg({ ok: true, text: 'Produit créé avec succès.' });
      setForm({ ...EMPTY });
    } catch {
      setFormMsg({ ok: false, text: 'Échec de la création du produit.' });
    }
  };

  const [rows, setRows] = useState<CsvRow[]>([]);
  const [fileName, setFileName] = useState('');
  const [importing, setImporting] = useState(false);
  const [progress, setProgress] = useState({ done: 0, ok: 0, fail: 0 });
  const fileRef = useRef<HTMLInputElement | null>(null);

  const { valid, invalid } = useMemo(() => {
    const v: CsvRow[] = [];
    const inv: Array<{ row: CsvRow; reason: string; index: number }> = [];
    rows.forEach((row, index) => {
      const reason = validateRow(row);
      if (reason) inv.push({ row, reason, index: index + 2 });
      else v.push(row);
    });
    return { valid: v, invalid: inv };
  }, [rows]);

  const onFile = async (file: File) => {
    setFileName(file.name);
    setProgress({ done: 0, ok: 0, fail: 0 });
    const text = await file.text();
    setRows(parseCsv(text));
  };

  const downloadTemplate = () => {
    const blob = new Blob([CSV_TEMPLATE], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'skoleom-products-template.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  const runImport = async () => {
    setImporting(true);
    setProgress({ done: 0, ok: 0, fail: 0 });
    for (const row of valid) {
      try {
        await create.mutateAsync(rowToProduct(row));
        setProgress((p) => ({ done: p.done + 1, ok: p.ok + 1, fail: p.fail }));
      } catch {
        setProgress((p) => ({ done: p.done + 1, ok: p.ok, fail: p.fail + 1 }));
      }
    }
    setImporting(false);
  };

  return (
    <div className="mx-auto max-w-[1400px]">
    
      <PageHeader title="Ajouter un produit" subtitle="Créez un produit ou importez-en plusieurs via CSV." />

      <div className="mb-6 inline-flex  rounded-2xl border border-white/10 bg-white/5 p-1">
        <button
          type="button"
          onClick={() => setTab('form')}
          className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${tab === 'form' ? 'bg-[#a8ff35] text-black' : 'text-white/60 hover:text-white'}`}
        >
          Formulaire
        </button>
        <button
          type="button"
          onClick={() => setTab('csv')}
          className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${tab === 'csv' ? 'bg-[#a8ff35] text-black' : 'text-white/60 hover:text-white'}`}
        >
          Import CSV
        </button>
      </div>

      {tab === 'form' ? (
        <Card className="p-6 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className={labelClass}>Nom du produit *</label>
              <input className={inputClass} value={form.name} onChange={(e) => set('name', e.target.value)} placeholder="T-shirt Skoleom" />
            </div>
            <div>
              <label className={labelClass}>Prix *</label>
              <input className={inputClass} value={form.price} onChange={(e) => set('price', e.target.value)} placeholder="29.90" />
            </div>
            <div>
              <label className={labelClass}>Prix promo</label>
              <input className={inputClass} value={form.sale_price} onChange={(e) => set('sale_price', e.target.value)} placeholder="24.90" />
            </div>
            <div>
              <label className={labelClass}>SKU</label>
              <input className={inputClass} value={form.sku} onChange={(e) => set('sku', e.target.value)} placeholder="SKU-001" />
            </div>
            <div>
              <label className={labelClass}>Stock</label>
              <input className={inputClass} value={form.stock_quantity} onChange={(e) => set('stock_quantity', e.target.value)} placeholder="50" />
            </div>
            <div className="sm:col-span-2">
              <label className={labelClass}>Image (URL)</label>
              <input className={inputClass} value={form.image} onChange={(e) => set('image', e.target.value)} placeholder="https://..." />
            </div>
            <div>
              <label className={labelClass}>Statut</label>
              <select className={inputClass} value={form.status} onChange={(e) => set('status', e.target.value)}>
                <option value="publish">Publié</option>
                <option value="draft">Brouillon</option>
                <option value="pending">En attente</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className={labelClass}>Description courte</label>
              <input className={inputClass} value={form.short_description} onChange={(e) => set('short_description', e.target.value)} />
            </div>
            <div className="sm:col-span-2">
              <label className={labelClass}>Description</label>
              <textarea className={`${inputClass} min-h-[120px] resize-y`} value={form.description} onChange={(e) => set('description', e.target.value)} />
            </div>
          </div>

          {formMsg && (
            <p className={`mt-5 rounded-xl border px-4 py-2.5 text-xs font-medium ${formMsg.ok ? 'border-[#a8ff35]/30 bg-[#a8ff35]/10 text-[#a8ff35]' : 'border-red-500/30 bg-red-500/10 text-red-400'}`}>
              {formMsg.text}
            </p>
          )}

          <div className="mt-6 flex gap-3">
            <button
              type="button"
              onClick={submitForm}
              disabled={create.isPending}
              className="inline-flex items-center gap-2 rounded-xl bg-[#a8ff35] px-5 py-3 text-sm font-bold text-black transition hover:brightness-105 disabled:opacity-50"
            >
              {create.isPending ? <Loader2 size={16} className="animate-spin" /> : <CheckCircle2 size={16} />}
              Créer le produit
            </button>
            <button
              type="button"
              onClick={() => nav(localizePath('/vendeur/dashboard/products'))}
              className="rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-white/70 transition hover:bg-white/5"
            >
              Voir mes produits
            </button>
          </div>
        </Card>
      ) : (
        <Card className="p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-white/60">
              Colonnes attendues : <span className="text-white/80">{CSV_COLUMNS.join(', ')}</span>
            </p>
            <button
              type="button"
              onClick={downloadTemplate}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm font-semibold text-white/70 transition hover:bg-white/5"
            >
              <Download size={15} />
              Modèle CSV
            </button>
          </div>

          <button
            type="button"
            onClick={() => fileRef.current?.click()}
            className="mt-5 flex w-full flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-white/15 bg-white/[0.02] px-6 py-12 text-center transition hover:border-[#a8ff35]/40 hover:bg-white/[0.04]"
          >
            <FileUp size={26} className="text-[#a8ff35]" />
            <span className="text-sm font-semibold text-white">
              {fileName || 'Choisir un fichier CSV'}
            </span>
            <span className="text-xs text-white/40">Cliquez pour sélectionner votre fichier</span>
          </button>
          <input
            ref={fileRef}
            type="file"
            accept=".csv,text/csv"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) void onFile(file);
            }}
          />

          {rows.length > 0 && (
            <div className="mt-6">
              <div className="flex flex-wrap gap-4 text-sm">
                <span className="text-white/70">
                  <span className="font-bold text-[#a8ff35]">{valid.length}</span> valides
                </span>
                {invalid.length > 0 && (
                  <span className="text-white/70">
                    <span className="font-bold text-red-400">{invalid.length}</span> ignorées
                  </span>
                )}
              </div>

              {invalid.length > 0 && (
                <div className="mt-3 max-h-32 overflow-y-auto rounded-xl border border-red-500/20 bg-red-500/5 p-3 text-xs text-red-300">
                  {invalid.map((it) => (
                    <div key={it.index}>Ligne {it.index}: {it.reason}</div>
                  ))}
                </div>
              )}

              {(importing || progress.done > 0) && (
                <div className="mt-4">
                  <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full bg-[#a8ff35] transition-all"
                      style={{ width: `${valid.length ? (progress.done / valid.length) * 100 : 0}%` }}
                    />
                  </div>
                  <p className="mt-2 text-xs text-white/50">
                    {progress.done}/{valid.length} traités · {progress.ok} créés · {progress.fail} échecs
                  </p>
                </div>
              )}

              <button
                type="button"
                onClick={runImport}
                disabled={importing || valid.length === 0}
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#a8ff35] px-5 py-3 text-sm font-bold text-black transition hover:brightness-105 disabled:opacity-50"
              >
                {importing ? <Loader2 size={16} className="animate-spin" /> : <Upload size={16} />}
                Importer {valid.length} produit(s)
              </button>
            </div>
          )}
        </Card>
      )}
    </div>
  );
}
