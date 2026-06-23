import nextPlugin from '@next/eslint-plugin-next'
import prettierConfig from 'eslint-config-prettier'

export default [
  {
    ignores: ['.next/**', '.vercel/**', '.wrangler/**', 'node_modules/**'],
  },
  {
    ...nextPlugin.configs['core-web-vitals'],
    rules: {
      ...nextPlugin.configs['core-web-vitals'].rules,
      '@next/next/no-img-element': 'off',
    },
  },
  prettierConfig,
]
