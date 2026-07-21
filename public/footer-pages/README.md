# Skoleom Business — Page Solutions B2B

## 📁 Structure du projet

```
footer-pages/
├── index.html                  ← Solutions B2B (Pour les Pros)
├── boutiques.html              ← Explorer les boutiques audiovisuelles
├── univers.html                ← Hub « Univers par catégorie »
├── categorie.html              ← Page catégorie dynamique (?id=sport)
├── categorie-sport.html        ← … musique, mode, films, gaming, tech
├── lancer-boutique.html        ← CTA lancer une boutique
├── shared/
│   ├── sk-icons.js             ← Bibliothèque SVG (pas d'emoji)
│   ├── sk-footer.css           ← Footer style Skoleom Universe
│   ├── page-base.css           ← Styles communs sous-pages
│   └── boutiques-footer.html   ← Fragment footer boutiques
├── frontend/src/App.jsx
└── backend/
```

## 🚀 Lancement rapide

### HTML standalone (recommandé pour tester)

Ouvrir `index.html` directement dans Chrome — aucune dépendance.

### Backend Node.js

```bash
cd backend
npm install
node server.js
# → http://localhost:3001
```

### Endpoints API disponibles

- `GET  /api/solutions` → Toutes les solutions B2B
- `GET  /api/solutions/:id` → Une solution spécifique
- `GET  /api/offers` → Offres tarifaires marques
- `GET  /api/stats` → Statistiques écosystème
- `POST /api/roi` → Calcul ROI dynamique
- `POST /api/contact` → Demande commerciale
- `GET  /api/health` → Santé du serveur

## Pages footer (navigation cliquable)

### Boutiques audiovisuelles (`boutiques.html`)

- Explorer les boutiques · Univers par catégorie · 6 catégories · Lancer une boutique

### Pour les Pros (`index.html?page=…`)

- Solutions business · Monétiser · Boutique AV · Distribuer · Ads · API · Tarifs · Contact

## 🎨 Design

- **Titres** : Anton (Google Fonts)
- **Textes** : Poppins (Google Fonts)
- **Couleurs** : Vert #CDFF3B · Orange #FF6B35 · Pink #FF3CAC · Cyan #00E5FF · Gold #FFD700 · Purple #7B2FFF
- **Boutons** : 100% ronds (border-radius: 999px)
- **Thème** : Dark mode exclusif

## 💰 Tarification intégrée

| Offre              | Prix     | CA estimé  |
| ------------------ | -------- | ---------- |
| Starter Marques    | 50 000€  | 2,5M€      |
| Pro Marques        | 200 000€ | 10M€       |
| Elite Marques      | 500 000€ | 25M€       |
| OTT Start-up       | 50K€/an  | 2M€/an     |
| OTT PME            | 250K€/an | 10M€/an    |
| OTT Grands Comptes | 1,5M€/an | 30-50M€/an |

## 📞 Contact

sellers@skoleom.com — www.skoleom.com
