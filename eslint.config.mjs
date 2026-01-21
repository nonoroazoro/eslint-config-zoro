import globals from "globals";

import { defineConfig } from "./dist/index.js";

export default defineConfig({
    node: true,
    typescript: true,

    ignores: ["dist/**"],
    languageOptions: {
        globals: {
            ...globals.jest
        },
        parserOptions: {
            project: "./tsconfig.eslint.json"
        }
    }
});
