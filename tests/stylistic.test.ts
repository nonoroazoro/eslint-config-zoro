import { ESLint } from "eslint";
import { expect, it } from "vitest";

import { STYLISTIC_CONFIGS } from "../src/stylistic";

it("STYLISTIC_CONFIGS should be valid ESLint flat config", async () =>
{
    const eslint = new ESLint({
        overrideConfigFile: true,
        overrideConfig: STYLISTIC_CONFIGS
    });

    const results = await eslint.lintText(
        `const foo = "bar";\nconsole.log(foo);\n`,
        { filePath: "test.js" }
    );

    expect(results[0].fatalErrorCount).toBe(0);
});
