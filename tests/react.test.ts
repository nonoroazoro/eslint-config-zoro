import { ESLint } from "eslint";
import { expect, it } from "vitest";

import { REACT_CONFIGS } from "../src/react";

it("REACT_CONFIGS should be valid ESLint flat config", async () =>
{
    const eslint = new ESLint({
        overrideConfigFile: true,
        overrideConfig: [
            ...REACT_CONFIGS,
            { settings: { react: { version: "19" } } }
        ]
    });

    const results = await eslint.lintText(
        `export function App() { return <div>Hello</div>; }\n`,
        { filePath: "test.tsx" }
    );

    expect(results[0].fatalErrorCount).toBe(0);
});
