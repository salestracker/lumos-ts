module.exports = [
  {
    // Ignore built files and vite.config.ts
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
      // Extend recommended rules but disable explicit any check
      ...require('@typescript-eslint/eslint-plugin').configs.recommended.rules,
      "@typescript-eslint/no-explicit-any": "off"
    }
  },
  {
    // For declaration files, also disable the explicit any rule
    files: ["**/*.d.ts"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off"
    }
  }
];