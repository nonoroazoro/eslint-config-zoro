// @ts-ignore
import * as plugin from "eslint-plugin-react-hooks"

/**
 * See https://www.npmjs.com/package/eslint-plugin-react-hooks
 */
export const REACT_HOOKS = {
    plugins: {
        "react-hooks": plugin
    },
    rules: {
        "react-hooks/exhaustive-deps": "warn",
        "react-hooks/rules-of-hooks": "error"
    }
};
