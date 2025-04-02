module.exports = [
  {
    ignores: ["dist/**/*", "eslint.config.js"],
    languageOptions: {
      parser: require('@typescript-eslint/parser'),
      parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 2020,
        sourceType: 'module'
      },
      globals: {
        process: 'readonly',
        module: 'writable',
        __dirname: 'readonly'
      }
    },
    plugins: {
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin')
    },
    linterOptions: {
      reportUnusedDisableDirectives: true
    },
    rules: {
      ...require('@typescript-eslint/eslint-plugin').configs.recommended.rules
    }
  }
];