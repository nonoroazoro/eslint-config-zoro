import * as plugin from "eslint-plugin-react-hooks";

import type { Config, Plugin } from "../../types";

/**
 * See https://www.npmjs.com/package/eslint-plugin-react-hooks
 */
export const REACT_HOOKS: Config = {
    plugins: {
        "react-hooks": plugin as unknown as Plugin
    },
    rules: {
        "react-hooks/component-hook-factories": "error",
        "react-hooks/config": "error",
        "react-hooks/error-boundaries": "error",
        "react-hooks/exhaustive-deps": "warn",
        "react-hooks/gating": "error",
        "react-hooks/globals": "error",
        "react-hooks/immutability": "error",
        "react-hooks/incompatible-library": "warn",
        "react-hooks/preserve-manual-memoization": "error",
        "react-hooks/purity": "error",
        "react-hooks/refs": "error",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/set-state-in-effect": "error",
        "react-hooks/set-state-in-render": "error",
        "react-hooks/static-components": "error",
        "react-hooks/unsupported-syntax": "warn",
        "react-hooks/use-memo": "error",
        "react-hooks/void-use-memo": "error"
    }
};
