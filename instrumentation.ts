export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const { initDatabase } = await import('./src/server/sequelize');
    await initDatabase();
  }
}