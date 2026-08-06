import sequelize from './config';

import './schemas/user';
import './schemas/avatar';
import './schemas/tryon';
import './schemas/subscription';
import './schemas/relations';

export async function initDatabase() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.warn('[Sequelize] Connexion PostgreSQL réussie et modèles synchronisés.');
  } catch (error) {
    console.error('[Sequelize Error] Impossible de connecter la base de données :', error);
  }
}

export default sequelize;
