module.exports = [
  {
    // Ignore generated files and configuration files.
    ignores: ["dist/**/*", "eslint.config.js", "vite.config.ts"],
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
      // Use the recommended TypeScript ESLint rules and disable the explicit any check globally.
      ...require('@typescript-eslint/eslint-plugin').configs.recommended.rules,
      "@typescript-eslint/no-explicit-any": "off"
    }
  },
  {
    // For declaration files (*.d.ts), disable the explicit any rule as well.
    files: ["**/*.d.ts"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off"
    }
  }
];