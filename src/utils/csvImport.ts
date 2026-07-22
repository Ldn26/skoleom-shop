export type CsvRow = Record<string, string>;

export function parseCsv(text: string): CsvRow[] {
  const rows: string[][] = [];
  let field = '';
  let record: string[] = [];
  let inQuotes = false;

  const clean = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n');

  for (let i = 0; i < clean.length; i += 1) {
    const char = clean[i];

    if (inQuotes) {
      if (char === '"') {
        if (clean[i + 1] === '"') {
          field += '"';
          i += 1;
        } else {
          inQuotes = false;
        }
      } else {
        field += char;
      }
      continue;
    }

    if (char === '"') {
      inQuotes = true;
    } else if (char === ',') {
      record.push(field);
      field = '';
    } else if (char === '\n') {
      record.push(field);
      rows.push(record);
      record = [];
      field = '';
    } else {
      field += char;
    }
  }

  if (field.length > 0 || record.length > 0) {
    record.push(field);
    rows.push(record);
  }

  const nonEmpty = rows.filter((r) => r.some((c) => c.trim() !== ''));
  if (nonEmpty.length === 0) return [];

  const headers = nonEmpty[0].map((h) => h.trim().toLowerCase());
  return nonEmpty.slice(1).map((cells) => {
    const row: CsvRow = {};
    headers.forEach((header, index) => {
      row[header] = (cells[index] ?? '').trim();
    });
    return row;
  });
}

export const CSV_COLUMNS = [
  'name',
  'price',
  'sale_price',
  'sku',
  'description',
  'short_description',
  'stock_quantity',
  'image',
  'status',
];

export const CSV_TEMPLATE =
  `${CSV_COLUMNS.join(',')}\n` +
  'T-shirt Skoleom,29.90,24.90,SKU-001,Cotton bio tee,Soft cotton,50,https://example.com/tee.jpg,publish\n';

export function rowToProduct(row: CsvRow): Record<string, unknown> {
  const price = row.price || row.regular_price || '';
  const stock = row.stock_quantity;
  return {
    name: row.name,
    type: row.type || 'simple',
    regular_price: String(price),
    ...(row.sale_price ? { sale_price: String(row.sale_price) } : {}),
    ...(row.sku ? { sku: row.sku } : {}),
    ...(row.description ? { description: row.description } : {}),
    ...(row.short_description ? { short_description: row.short_description } : {}),
    status: row.status || 'publish',
    ...(stock !== undefined && stock !== ''
      ? { manage_stock: true, stock_quantity: Number(stock) }
      : {}),
    ...(row.image ? { images: [{ src: row.image }] } : {}),
  };
}

export function validateRow(row: CsvRow): string | null {
  if (!row.name || !row.name.trim()) return 'Missing name';
  const price = row.price || row.regular_price;
  if (!price || Number.isNaN(Number(price))) return 'Invalid price';
  return null;
}
