# Agent MeetWork – Backend NestJS TypeScript

## Description

Cet agent fait partie de l'application **MeetWork**, conçue pour faciliter la recherche d'emplois. Il s'agit du backend développé avec [NestJS](https://nestjs.com/) et TypeScript. L'objectif est de fournir une API claire, maintenable et scalable selon les meilleures pratiques **Clean Code**, en suivant également les recommandations spécifiques à NestJS et TypeScript.

## Fonctionnalités principales

- Architecture modulaire avec des modules dédiés à chaque domaine métier (`modules/auth`, `modules/user`, `modules/jobs`, etc.)
- Gestion centralisée de l'authentification et des autorisations via JWT
- Modélisation et validation des données avec des DTOs et `class-validator`
- Gestion unifiée des erreurs avec filtres NestJS (`HttpExceptionFilter`)
- Intégration de middlewares (logger, authentification.. .) et interceptors (logging, transformation)
- Configuration via variables d'environnement et `@nestjs/config`
- Types et interfaces centralisées pour garantir la cohérence TypeScript
- Prêt pour les tests unitaires & d'intégration (via Jest et `supertest`)

## Prérequis

- Node.js (>=18.x recommandé)
- [NestJS CLI](https://docs.nestjs.com/cli/overview)
- TypeScript
- npm ou yarn

## Installation

```bash
git clone https://github.com/Julien-FRA/MeetWork.git
cd MeetWork/back
npm install
# ou
yarn install
```

## Utilisation

### Lancer le backend en mode développement

```bash
npm run start: dev
# ou
yarn start: dev
```

### Exemple de requête

POST `/auth/login`

```bash
curl -X POST http://localhost:3001/auth/login -H 'Content-Type: application/json' -d '{"email":  "test@mail.com", "password": "motdepasse"}'
```

**Réponse type :**

```json
{
  "access_token": "jwt. token. ici"
}
```

### Structure du projet (`back/`)

```text
back/
 ├── src/
 │    ├── modules/
 │    │    ├── auth/
 │    │    │    ├── auth.controller.ts
 │    │    │    ├── auth.service.ts
 │    │    │    ├── auth.module.ts
 │    │    │    └── dto/
 │    │    ├── jobs/
 │    │    │    ├── jobs.controller.ts
 │    │    │    ├── jobs.service.ts
 │    │    │    ├── jobs.module.ts
 │    │    │    ├── entities/
 │    │    │    └── dto/
 │    │    ├── user/
 │    │    │    ├── user.controller. ts
 │    │    │    ├── user.service. ts
 │    │    │    ├── user.module. ts
 │    │    │    ├── entities/
 │    │    │    └── dto/
 │    │    └── [autres modules métier]/
 │    ├── common/
 │    │    ├── filters/
 │    │    ├── guards/
 │    │    ├── interceptors/
 │    │    ├── decorators/
 │    │    └── pipes/
 │    ├── config/
 │    │    └── [fichiers de configuration]
 │    ├── types/
 │    │    ├── index.ts
 │    │    ├── auth.types.ts
 │    │    ├── user.types.ts
 │    │    ├── jobs.types.ts
 │    │    └── [autres types partagés]
 │    ├── main.ts
 │    └── app.module.ts
 ├── test/
 ├── package.json
 ├── tsconfig.json
 └── . env
```

- **Modules métier dans `modules/`** – Chaque domaine fonctionnel (auth, jobs, user, etc.) a son propre dossier
- **Code réutilisable dans `common/`** – Guards, filtres, décorateurs, pipes, interceptors
- **Types centralisés dans `types/`** – Interfaces, types et énums partagés à travers toute l'application
- **Configuration dans `config/`** – Variables d'environnement et configuration globale
- **Nommage clair** – Les fichiers et dossiers reflètent leur rôle
- **Découpage logique** – Par responsabilité et domaine métier

---

## Bonnes pratiques appliquées (Clean Code, NestJS & TypeScript)

### **Clean Code**

- Une classe/service = une responsabilité
- Noms explicites pour fonctions & variables
- Fonctions courtes, < 20 lignes si possible
- Pas de duplication : factorisez les helpers/réutilisables dans `common/`
- Validation stricte (DTOs + class-validator)
- Gestion centralisée des erreurs

### **NestJS**

- Code organisé par module, chaque dossier dédié à une fonctionnalité dans `modules/`
- Utilisation systématique des décorateurs (@Controller, @Service, @Module, etc.)
- Contrôleurs minces : toute la logique métier dans les services
- Guards, Interceptors et Pipes utilisés pour la sécurité, logs, validation et transformation
- Configuration centralisée (`config/`, . env)
- Tests avec Jest ; structure de dossier de tests proche du code
- Chaque module métier expose son propre module NestJS avec exports nécessaires

### **TypeScript**

- Tous les objets et fonctions typés explicitement
- Types et interfaces centralisées dans le dossier `types/` pour éviter la duplication
- Utilisation d'interfaces/types pour les entités, requêtes et réponses
- Modificateurs d'accès (`private`, `protected`, `public`) sur classes/services
- Pas de `any` : préférer les types sûrs (`unknown` au besoin)
- Enum utilisés pour statuts, rôles…
- Immutabilité privilégiée autant que possible (`readonly`)

---

## Personnalisation

- Modifiez les variables `.env` dans `back/` pour adapter la config (PORT, URL BD, JWT_SECRET…)
- Pour ajouter une feature : créez un nouveau dossier dans `modules/`, avec structure Controller → Service → Module + DTOs/Entities si nécessaire
- Ajoutez les types partagés dans le dossier `types/` pour maintenir une cohérence globale

## Ressources utiles

- [MeetWork Frontend (repo associé si applicable)](https://github.com/Julien-FRA/MeetWork)
- [Documentation NestJS](https://docs.nestjs.com/)
- [Guide Clean Code](https://www. oreilly.com/library/view/clean-code/9780136083238/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## Auteur

Projet développé par **[Julien-FRA](https://github.com/Julien-FRA)**  
Questions ? Ouvrez une issue sur GitHub.

---

_Ce document doit évoluer avec le projet : mettez-le à jour dès que la structure ou les conventions changent pour garantir la cohérence à long terme de MeetWork._
