import { ESLint } from "eslint";
import { expect, it } from "vitest";

import { ESLINT_CONFIGS } from "../src/eslint";

it("ESLINT_CONFIGS should be valid ESLint flat config", async () =>
{
    const eslint = new ESLint({
        overrideConfigFile: true,
        overrideConfig: ESLINT_CONFIGS
    });

    const results = await eslint.lintText(
        `const foo = "bar";\nconsole.log(foo);\n`,
        { filePath: "test.js" }
    );

    expect(results[0].fatalErrorCount).toBe(0);
});
