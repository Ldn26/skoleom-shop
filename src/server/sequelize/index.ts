
// // import sequelize from './config';

// // // Register all models & associations
// // import './schemas/avatar';
// // import './schemas/tryon';
// // import './schemas/user';
// // import './schemas/relations';
// // import './schemas/subscription';

// // export default sequelize;

// import sequelize from './config';

// // 1. Enregistrer tous les modèles et leurs relations
// import './schemas/avatar';
// import './schemas/tryon';
// import './schemas/user';
// import './schemas/subscription';
// import './schemas/relations'; // Les associations DOIVENT être importées après les modèles

// // 2. Méthode d'initialisation pour s'assurer que les tables existent dans Supabase
// export async function initDatabase() {
//   try {
//     await sequelize.authenticate();
//     // sync() crée ou met à jour les tables (subscriptions, users, etc.) si elles n'existent pas dans Supabase
//     await sequelize.sync();
//     console.log('[Sequelize] Connexion PostgreSQL réussie et modèles synchronisés.');
//   } catch (error) {
//     console.error('[Sequelize Error] Impossible de connecter la base de données :', error);
//   }
// }

// export default sequelize;

// src/server/sequelize/index.ts

import sequelize from './config';

// 1. Import models first
import './schemas/user';         // User must be early because others depend on it
import './schemas/avatar';
import './schemas/tryon';
import './schemas/subscription'; // This file now runs User.hasOne(Subscription) internally

// 2. Import external relations last
import './schemas/relations';    // This file runs the Avatar and TryOn relations

// 3. Database init function
export async function initDatabase() {
  try {
    await sequelize.authenticate();
    // Use { alter: true } sparingly in production, but it's safe for initial table creation
    await sequelize.sync(); 
    console.log('[Sequelize] Connexion PostgreSQL réussie et modèles synchronisés.');
  } catch (error) {
    console.error('[Sequelize Error] Impossible de connecter la base de données :', error);
  }
}

export default sequelize;