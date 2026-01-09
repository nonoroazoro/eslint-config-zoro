import { ESLint } from "eslint";
import { expect, it } from "vitest";

import { NODE_CONFIGS } from "../src/node";

it("NODE_CONFIGS should be valid ESLint flat config", async () =>
{
    const eslint = new ESLint({
        overrideConfigFile: true,
        overrideConfig: NODE_CONFIGS
    });

    const results = await eslint.lintText(
        `const path = require("path");\nconsole.log(path.resolve("."));\n`,
        { filePath: "test.js" }
    );

    expect(results[0].fatalErrorCount).toBe(0);
});
