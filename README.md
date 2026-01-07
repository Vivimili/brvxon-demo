
# BRVXON - Premium Financial SaaS

BRVXON est une plateforme B2B de pilotage financier conçue pour les entreprises à forte croissance. Cette application combine une Landing Page marketing haute conversion et un Dashboard interne analytique puissant.

## 🚀 Fonctionnalités Clés

- **Landing Page Marketing** : 6 sections optimisées (Hero, Problème, Solution, Statistiques, Pricing Enterprise, CTA).
- **Dashboard Analytique** : Vue d'ensemble des revenus, transactions et gestion du portefeuille clients.
- **Insights IA** : Analyse automatisée des performances business pour aider à la décision.
- **Design Premium** : UX/UI inspirée des meilleures fintechs mondiales (Stripe, Revolut Business).

## 🛠 Stack Technique

- **React 18** : Interface utilisateur réactive.
- **TypeScript** : Typage robuste pour une maintenance facilitée.
- **Tailwind CSS** : Styling atomique et responsive.
- **Recharts** : Visualisation de données performante.
- **Lucide Icons** : Iconographie moderne.

## 📁 Structure du Projet

```text
/
├── components/       # Composants UI réutilisables
├── views/            # Pages principales (Landing & Dashboard)
├── types.ts          # Interfaces TypeScript
├── constants.tsx     # Mock data et configuration visuelle
├── App.tsx           # Logique de navigation (Hash based)
└── index.tsx         # Point d'entrée React
```

## 📦 Instructions d'Export & Déploiement

### 1. Export vers GitHub
- Créez un nouveau repository sur GitHub.
- Initialisez git localement : `git init`.
- Ajoutez les fichiers : `git add .`.
- Commitez : `git commit -m "feat: BRVXON MVP launch"`.
- Liez le repo distant : `git remote add origin YOUR_REPO_URL`.
- Poussez : `git push -u origin main`.

### 2. Déploiement via Vercel
- Connectez votre compte Vercel à GitHub.
- Sélectionnez le repository `BRVXON`.
- Vercel détectera automatiquement la configuration React.
- Cliquez sur **Deploy**. Votre application est en ligne !

---

*Développé avec ❤️ pour la performance B2B.*
