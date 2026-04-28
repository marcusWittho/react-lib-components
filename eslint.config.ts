import globals from "globals";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      globals: globals.browser,
    },

    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooks as any,
    },

    settings: {
      react: {
        version: "detect",
      },
    },

    extends: [
      ...tseslint.configs.recommended,
    ],

    rules: {
      // boas práticas gerais
      "no-console": "warn",
      "eqeqeq": ["error", "always"],

      // React
      "react/react-in-jsx-scope": "off", // React 17+
      "react/prop-types": "off", // se estiver usando TS

      // Hooks (ESSENCIAL)
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // TypeScript
      "@typescript-eslint/no-unused-vars": ["error"],
    },
  },
]);
