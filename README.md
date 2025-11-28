# Portfolio Bechir Yengui

Portfolio professionnel avec Next.js 16, TypeScript, Tailwind CSS v4, et Dark Mode.

## 🚀 Installation

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de développement
npm run dev

# 3. Ouvrir dans le navigateur
# http://localhost:3000
```

## 📁 Structure du projet

```
portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Contact.tsx
│   ├── Education.tsx
│   ├── Experience.tsx
│   ├── Hero.tsx
│   ├── Navigation.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── ThemeProvider.tsx
│   └── ThemeToggle.tsx
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── tsconfig.json
```

## ✨ Fonctionnalités

- ✅ Design moderne et responsive
- ✅ Dark mode avec toggle animé
- ✅ Animations Framer Motion
- ✅ Navigation fluide
- ✅ Sections : Hero, Expérience, Formation, Projets, Compétences, Contact
- ✅ TypeScript
- ✅ Tailwind CSS v4
- ✅ Next.js 16

## 🎨 Personnalisation

### Modifier les couleurs

Éditez `tailwind.config.js` :

```js
theme: {
  extend: {
    colors: {
      primary: '#3B82F6',
      secondary: '#8B5CF6',
    },
  },
},
```

### Ajouter du contenu

Les données sont dans chaque composant. Par exemple, pour l'expérience, éditez `components/Experience.tsx`.

## 📝 Commandes

```bash
npm run dev      # Développement
npm run build    # Build production
npm run start    # Démarrer en production
npm run lint     # Linter
```

## 🐛 Résolution de problèmes

### Le CSS ne s'applique pas

```bash
rm -rf .next
rm -rf node_modules/.cache
npm run dev
```

### Erreur d'hydratation

Vérifiez que `<ThemeToggle />` est dans `layout.tsx`, pas dans `Navigation.tsx`.

### Erreur TypeScript

```bash
# Redémarrer TypeScript Server dans VS Code
Ctrl+Shift+P → "TypeScript: Restart TS Server"
```

## 📦 Build pour production

```bash
npm run build
npm run start
```

## 🌐 Déploiement

### Vercel (recommandé)

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel
```

### Autres plateformes

Le projet fonctionne sur toute plateforme supportant Next.js (Netlify, Railway, etc.)

## 📄 Licence

Projet personnel - Bechir Yengui © 2024
# frontend_Bechir
