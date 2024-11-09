module.exports = {
  root: true,
  extends: ['@tata-v/eslint-config-vue3'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  ignorePatterns: ['nuxt.config.ts', 'tsconfig.json', 'README.md'],
};
