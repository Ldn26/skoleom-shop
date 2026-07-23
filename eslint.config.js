// eslint.config.js
// Config ESLint v9 au format flat config
// Compatible : Vite, Create React App, Next.js, JS, TypeScript

import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier/flat';

export default [
  // Dossiers a ignorer globalement
  {
    ignores: [
      'dist/**',
      'build/**',
      'node_modules/**',
      'coverage/**',
      '.next/**',
      'out/**',
      'eslint.config.js',
      'commitlint.config.js',
      'vite.config.*',
      '*.config.cjs',
      '*.config.mjs',
    ],
  },

  // Base JavaScript recommandee
  js.configs.recommended,

  // TypeScript recommande (s'applique automatiquement aux .ts/.tsx)
  ...tseslint.configs.recommended,

  // Regles pour tous les fichiers JS/TS du projet
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2022,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      // Erreurs critiques
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'no-debugger': 'error',
      'no-var': 'error',
      'prefer-const': 'error',
      eqeqeq: ['error', 'always'],
      'no-duplicate-imports': 'error',
      'object-shorthand': 'error',
      'prefer-template': 'error',

      // TypeScript : interdit any et signale les vars inutilisees
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'no-unused-vars': 'off',

      // React
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/self-closing-comp': 'error',
      'react/jsx-key': 'error',

      // Accessibilite (a11y)
      'jsx-a11y/alt-text': 'error',
      'jsx-a11y/anchor-is-valid': 'error',

      // Hooks
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },

  // Doit etre en dernier pour desactiver les regles qui conflictent avec Prettier
  prettier,
];
