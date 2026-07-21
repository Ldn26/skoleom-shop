# Skoleom Univershop — guide de structuration Next.js

Ce document propose une meilleure organisation du projet. Il part d'un état des lieux du
code actuel (issu de la migration Vite → Next.js décrite dans [`MIGRATION.md`](MIGRATION.md))
puis propose une cible et un chemin d'y aller **progressivement**, sans tout casser d'un coup.

## 1. État des lieux

Le projet fonctionne, mais la structure actuelle est encore celle d'une SPA Vite posée
au-dessus de l'App Router, pas une vraie architecture Next.js :

### a. Les pages `app/**` ne sont que des coquilles vides

```tsx
// app/[lang]/catalogue/page.tsx
'use client';
import CataloguePage from '@/views/public/CataloguePage';
export default function Page() {
  return <CataloguePage />;
}
```

Tout le vrai code vit dans `src/views/**`, et chaque route est `'use client'`. Résultat :
aucune page ne bénéficie du rendu serveur, de `generateMetadata`, du streaming ou des
Server Components — l'App Router n'est utilisé que comme un routeur de fichiers.

### b. Trois couches d'accès API qui se chevauchent

- `src/api/*.ts` (axios + React Query, orienté "Woo/produits")
- `src/services/api.ts` (axios + fallback offline, orienté "contenu/écosystème")
- `app/api/**/route.ts` (routes serveur Next, qui elles-mêmes appellent
  `src/server/controllers/*.js` via l'adaptateur `callController` de `src/server/http.ts`)

Trois conventions de nommage et de retour de données différentes pour parler au même
backend. `src/api/product.ts` contient aussi du code mort commenté (l'ancien `useProducts`)
qu'il faut supprimer.

### c. Mélange `.jsx` / `.tsx` / `.js` sans règle claire

`src/components/shop/*.jsx`, `src/views/**/*.jsx` et `src/server/**/*.js` côtoient des
fichiers `.tsx`/`.ts` équivalents ailleurs. Pas de garde-fou TypeScript sur ces fichiers
(`strict: false` dans `tsconfig.json`).

### d. `src/server` reproduit un backend Express complet dans le projet Next

Controllers, middlewares, schémas Sequelize, helpers — organisés comme une app Express
classique, pas comme des route handlers Next. `callController` (`src/server/http.ts`) est un
adaptateur qui simule `req`/`res` Express pour éviter de réécrire les controllers. Utile pour
la migration initiale, mais c'est de la dette si le projet doit vivre longtemps ainsi.

### e. Dossiers plats sans découpage par fonctionnalité

`src/components`, `src/data`, `src/hooks`, `src/context` regroupent des dizaines de fichiers
sans rapport entre eux (accessibilité, i18n, tryon, boutique, admin...) au même niveau.

## 2. Structure cible recommandée

L'idée directrice : **organiser par fonctionnalité (feature) plutôt que par type de
fichier**, et laisser l'App Router faire réellement du rendu serveur.

```
app/
  [lang]/
    (marketing)/              ← route group : pages vitrine, layout léger, SEO complet
      about-technology/page.tsx
      mission/page.tsx
      legal/page.tsx
      ...
    (shop)/                   ← route group : catalogue, produit, panier
      catalogue/page.tsx
      produit/[id]/page.tsx
      layout.tsx
    (account)/                 ← route group : espace client (auth requise)
      compte/page.tsx
      essayage/page.tsx
    (seller)/                  ← route group : espace vendeur (auth + rôle requis)
      vendeur/dashboard/[[...slug]]/page.tsx
    layout.tsx
  api/
    products/...               ← inchangé si migré en handlers natifs (voir §3.c)
  layout.tsx

src/
  features/
    catalogue/
      components/              ← ProductGrid, FilterSidebar, ActiveFilters...
      hooks/                   ← useProducts, useCategories...
      api.ts                   ← seul point d'accès HTTP pour cette feature
      types.ts
    product/
    cart/
    account/
    seller/
    tryon/
    accessibility/
    i18n/                      ← déjà bien isolé aujourd'hui, à garder tel quel

  components/                  ← uniquement les composants VRAIMENT transverses
    ui/                        ← boutons, inputs, cards génériques (design system)
    layout/                    ← Header, Footer, Navbar (déjà proche de ça)

  server/
    modules/
      products/
        controller.ts
        service.ts
        repository.ts          ← accès Sequelize isolé du controller
      auth/
      avatar/
      tryon/
    db.ts

  lib/                          ← clients tiers partagés (stripe, cloudinary, axios instance)
  config/                       ← constantes d'app, env typé
  types/                        ← types partagés inter-features uniquement
```

Principes appliqués :

1. **Route groups `(marketing)`, `(shop)`, `(account)`, `(seller)`** — permettent des
   `layout.tsx` différents (auth gate, largeur, chrome) sans changer les URLs, et rendent la
   séparation public/privé visible dans l'arborescence.
2. **`src/features/<domaine>`** — chaque feature possède ses composants, hooks et son propre
   client API. On arrête d'avoir un fichier `product.ts` de 470 lignes qui mélange fetch,
   mapping, filtres et dérivation de facettes : ça devient `features/catalogue/api.ts`,
   `features/catalogue/hooks/useProducts.ts`, `features/catalogue/lib/filters.ts`.
3. **Un seul client HTTP** — fusionner `src/api/*`, `src/services/api.ts` et `src/lib/stripe.js`
   dans `src/lib/http.ts` (instance axios unique + intercepteurs) ; chaque feature n'exporte que
   ses fonctions métier par-dessus.
4. **`src/server/modules/<domaine>`** — remplacer progressivement les controllers façon
   Express par de vrais route handlers Next (`NextRequest`/`NextResponse` directement), avec une
   séparation controller (HTTP) / service (logique) / repository (Sequelize).

## 3. Comment y aller sans tout casser

Migration incrémentale, feature par feature — ne pas faire un big-bang :

### a. Nettoyer avant de déplacer
- Supprimer le code commenté mort (ex. l'ancien `useProducts` dans `src/api/product.ts:145-181`).
- Convertir les `.jsx`/`.js` restants en `.tsx`/`.ts` au fur et à mesure qu'on touche un fichier
  (pas de conversion massive isolée — trop risqué sans tests).

### b. Faire de vraies pages serveur, une par une
Pour chaque route, décider si elle peut sortir du mode `'use client'` intégral :
- Les pages statiques (mission, legal, patents, privacy...) sont de bonnes candidates pour
  devenir des Server Components avec `generateMetadata` natif — supprimer le besoin de
  `react-helmet-async` sur ces pages-là (déjà noté comme piste dans `MIGRATION.md`).
- Les pages avec état interactif lourd (catalogue, essayage, dashboard vendeur) restent
  client, mais peuvent recevoir des données initiales via un composant serveur parent
  (`page.tsx` server → fetch → passe en props à un composant client `View`).

### c. Uniformiser la couche API progressivement
- Choisir une convention unique de réponse (`{ data, meta }` par ex.) et migrer feature par
  feature vers `src/lib/http.ts` + `src/features/<x>/api.ts`.
- Les routes `app/api/**` qui appellent encore `callController` peuvent être réécrites en
  handlers natifs dès qu'on retouche ce controller — pas besoin de tout migrer avant de livrer.

### d. Déplacer les composants dans leurs features
- Chaque fois qu'on modifie un composant dans `src/components/shop/*` ou `src/views/**`,
  le déplacer dans `src/features/<domaine>/components/` plutôt que de le laisser où il est.

## 4. Ce qu'il ne faut pas faire

- Ne pas renommer/déplacer massivement tout le repo en une seule PR : trop de risques de
  régression sur un projet sans suite de tests visible.
- Ne pas retirer `src/compat/react-router-dom.tsx` tant que des composants l'importent —
  c'est un pont de compatibilité volontaire (voir `MIGRATION.md`), pas de la dette à corriger
  en urgence.
- Ne pas dupliquer une nouvelle couche à côté de l'ancienne "au cas où" : chaque migration de
  feature doit supprimer l'ancien chemin une fois le nouveau en place.
