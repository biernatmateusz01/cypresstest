module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended', // jeśli używasz TypeScript
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    // dostosuj reguły według preferencji
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/no-unused-vars': ['warn'],
    'prettier/prettier': ['error'],
  },
}
