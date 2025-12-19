# Agent MeetWork – Frontend Next.js TypeScript

## Description

Cet agent fait partie de l'application **MeetWork**, conçue pour faciliter la recherche d'emplois.  Il s'agit du frontend développé avec [Next.js](https://nextjs.org/) et TypeScript.  L'objectif est de fournir une interface utilisateur moderne, performante et maintenable en appliquant les meilleures pratiques **Clean Code**, ainsi que les recommandations spécifiques à **Next.js 15+** et **TypeScript**.

## Fonctionnalités principales

- Architecture modulaire avec séparation claire entre présentations et logique métier
- Composants React réutilisables et maintenables (app router Next.js 15+)
- Gestion d'état robuste via Context API et/ou store centralisé
- Validation et typage TypeScript strict sur toute l'application
- Styling avec Tailwind CSS pour une cohérence visuelle et performance
- Shadcn/ui pour les composants UI pré-stylisés et accessibles
- Gestion des requêtes API centralisée dans `lib/`
- Tests unitaires et d'intégration prêts à l'emploi
- Optimisation des performances (lazy loading, code splitting, SSR/SSG)
- Accessibilité web (a11y) intégrée

## Prérequis

- Node.js (>=18.x recommandé)
- pnpm ou npm
- TypeScript
- Connaissance basique de React et Next.js

## Installation

```bash
git clone https://github.com/Julien-FRA/MeetWork.git
cd MeetWork/front
pnpm install
# ou
npm install
```

## Utilisation

### Lancer le frontend en mode développement

```bash
pnpm dev
# ou
npm run dev
```

L'application est accessible à `http://localhost:3000`

### Build de production

```bash
pnpm build
pnpm start
# ou
npm run build && npm start
```

### Linting et Formatage

```bash
pnpm lint
pnpm format
```

## Architecture du projet (`front/`)

```text
front/
 ├── app/
 │    ├── layout.tsx                 # Layout racine
 │    ├── page. tsx                   # Page accueil
 │    ├── (auth)/
 │    │    ├── login/
 │    │    │    └── page.tsx
 │    │    ├── register/
 │    │    │    └── page.tsx
 │    │    └── layout.tsx            # Layout pour les pages d'auth
 │    ├── (protected)/
 │    │    ├── dashboard/
 │    │    │    └── page. tsx
 │    │    ├── jobs/
 │    │    │    ├── page.tsx
 │    │    │    ├── [id]/
 │    │    │    │    └── page.tsx
 │    │    │    └── layout.tsx
 │    │    └── layout.tsx            # Layout pour pages protégées
 │    ├── api/                       # API routes si nécessaire
 │    └── globals.css
 ├── components/
 │    ├── ui/                        # Composants Shadcn/UI
 │    │    ├── button.tsx
 │    │    ├── card.tsx
 │    │    ├── dialog.tsx
 │    │    └── ... 
 │    ├── layout/
 │    │    ├── Header.tsx
 │    │    ├── Sidebar.tsx
 │    │    ├── Footer.tsx
 │    │    └── Navigation.tsx
 │    ├── sections/
 │    │    ├── HeroSection.tsx
 │    │    ├── JobCard.tsx
 │    │    └── ...
 │    └── forms/
 │         ├── LoginForm.tsx
 │         ├── RegisterForm.tsx
 │         └── JobSearchForm.tsx
 ├── context/
 │    ├── AuthContext.tsx            # Contexte d'authentification
 │    ├── JobsContext.tsx            # Contexte pour les emplois
 │    └── index.ts
 ├── store/
 │    ├── slices/                    # Si Redux ou Zustand est utilisé
 │    └── index.ts
 ├── lib/
 │    ├── api. ts                     # Client API centralisé
 │    ├── utils.ts                   # Utilitaires génériques
 │    ├── constants.ts               # Constantes globales
 │    ├── validators.ts              # Validations avec Zod ou Yup
 │    └── hooks/
 │         ├── useAuth.ts
 │         ├── useFetch.ts
 │         ├── useForm.ts
 │         └── ... 
 ├── types/
 │    ├── index. ts
 │    ├── auth.types.ts
 │    ├── jobs.types.ts
 │    ├── user.types.ts
 │    └── ...
 ├── styles/
 │    ├── globals.css
 │    ├── variables.css              # Variables CSS/Tailwind
 │    └── ... 
 ├── public/
 │    ├── images/
 │    ├── icons/
 │    └── ... 
 ├── tests/
 │    ├── unit/
 │    ├── integration/
 │    └── e2e/
 ├── middleware.ts                   # Middleware Next.js
 ├── next.config.ts
 ├── tailwind.config.ts
 ├── tsconfig.json
 ├── eslint.config.mjs
 ├── postcss.config.mjs
 └── package.json
```

### Organisation par responsabilité

- **`app/`** – Routes et layouts Next.js 15+ (App Router)
- **`components/`** – Composants React réutilisables, organisés par catégorie
- **`context/`** – Contextes React pour la gestion d'état global
- **`store/`** – Store centralisé (Redux, Zustand, etc.)
- **`lib/`** – Logique métier, appels API, hooks personnalisés, utilitaires
- **`types/`** – Types et interfaces TypeScript centralisés
- **`styles/`** – Fichiers CSS et configuration Tailwind
- **`tests/`** – Tests unitaires, d'intégration et E2E

---

## Bonnes pratiques appliquées

### **Clean Code (Général)**

- **Responsabilité unique (SRP)** : Chaque composant/fonction a une seule responsabilité
- **Noms explicites** : Variables, fonctions et composants doivent être auto-documentés
- **Petites entités** : Composants et fonctions < 100 lignes si possible
- **DRY (Don't Repeat Yourself)** :  Pas de duplication de code
- **Validation stricte** : Validation des entrées utilisateur avec Zod ou Yup
- **Gestion d'erreurs** :  Gestion centralisée et cohérente des erreurs

### **Next.js 15+ Bonnes pratiques**

- Utiliser l'**App Router** plutôt que Pages Router
- Privilégier les **Server Components** par défaut, utiliser `'use client'` uniquement si nécessaire
- Optimiser les images avec le composant `<Image>` de Next.js
- Utiliser la **génération statique (SSG)** pour les pages non dynamiques
- Implémenter le **streaming** et Suspense pour améliorer l'UX
- Mettre en place les **route handlers** pour les API endpoints
- Utiliser les **middlewares** pour la sécurité et l'authentification
- Appliquer les **redirects** et **rewrites** dans `next.config.ts`
- Optimiser les **CSS** avec Tailwind (purging automatique)
- Implémenter le **lazy loading** et code splitting pour les composants lourds

### **TypeScript Bonnes pratiques**

- Toujours typer **explicitement** les paramètres et retours de fonctions
- Utiliser les **interfaces** pour décrire les formes d'objets
- Privilegier les **types littéraux** pour les énumérations (plutôt que enum si possible)
- Utiliser `readonly` pour l'immutabilité et la clarté d'intention
- Pas de `any` : Préférer les types sûrs (`unknown`, `as const`, etc.)
- Utiliser **`@ts-check`** ou mode strict complet
- Générer les types depuis les DTOs du backend via des outils (ex: Swagger, GraphQL CodeGen)
- Centraliser les types dans le dossier `types/` pour la réutilisabilité

### **React & Composants**

- Utiliser les **composants fonctionnels** avec hooks
- Memoïser les composants coûteux avec `React.memo` ou `useMemo`
- Utiliser `useCallback` pour stabiliser les références de fonction
- Éviter les props drilling :  utiliser Context ou un store (Zustand, Redux)
- Composants :  Présentation (dumb) vs Logique (smart)
- Naming cohérent : `use*` pour les hooks, `*Component` ou direct pour composants
- Props destructurage avec typage clair

### **Formulaires & Validation**

- Utiliser **React Hook Form** pour la gestion des formulaires
- Valider avec **Zod** ou **Yup** côté client
- Validation server-side toujours (ne pas faire confiance au client)
- Feedback utilisateur clair (messages d'erreur, spinners, etc.)

### **Gestion d'État**

- Context API pour l'état global simple (authentification, thème)
- **Zustand** ou **Redux Toolkit** pour l'état complexe et distribué
- Éviter le prop drilling
- Centraliser dans le dossier `store/` ou `context/`

### **CSS & Styling**

- **Tailwind CSS** pour l'utilitaire et la rapidité
- **Shadcn/ui** pour les composants pré-stylisés et accessibles
- Éviter les **CSS-in-JS** si possible (impact performance)
- Utiliser les **variables CSS** pour les thèmes
- Responsive design mobile-first

### **Performance**

- **Code splitting** :  Charger les bundles que lorsque nécessaire
- **Lazy loading images** : Utiliser `next/image`
- **Preloading** : Précharger les ressources critiques
- **Optimisation des requêtes** : Réduire, dédupliquer, cacher
- **Minification** :  Activée par défaut en prod
- **Analyse des bundles** : Utiliser `@next/bundle-analyzer`

### **Tests**

- **Jest** pour les tests unitaires
- **React Testing Library** pour les tests de composants
- **Cypress** ou **Playwright** pour les tests E2E
- Couvrir les chemins critiques :  authentification, formulaires, API
- Tests d'accès et contrôle d'erreur

### **Accessibilité (a11y)**

- Respecter les normes **WCAG 2.1** (niveau AA minimum)
- Utiliser les attributs **ARIA** appropriés
- Assurer la **navigation au clavier**
- Tester avec des lecteurs d'écran
- Shadcn/ui propose des composants accessibles par défaut

---

## Configuration

### Variables d'environnement (`.env.local`)

```bash
NEXT_PUBLIC_API_URL=http://localhost:3001/api
NEXT_PUBLIC_APP_NAME=MeetWork
NEXT_PUBLIC_APP_VERSION=1.0.0
```

> **Note** : Les variables `NEXT_PUBLIC_*` sont exposées au client.  Ne pas y mettre de secrets. 

## Ressources utiles

- [Documentation Next.js 15+](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Shadcn/ui Documentation](https://ui.shadcn.com/)
- [Clean Code (Robert C. Martin)](https://www. oreilly.com/library/view/clean-code/9780136083238/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod – Validation TypeScript-first](https://zod.dev)
- [Jest Documentation](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/react)

## Auteur

Projet développé par **[Julien-FRA](https://github.com/Julien-FRA)**  
Questions ?  Ouvrez une issue sur GitHub. 

---

*Ce document doit évoluer avec le projet :  mettez-le à jour dès que la structure, les dépendances ou les conventions changent pour garantir la cohérence à long terme de MeetWork.*