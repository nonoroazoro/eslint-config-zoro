import { ESLint } from "eslint";
import { expect, it } from "vitest";

import { ALL_CONFIGS } from "../src/index";

it("ALL_CONFIGS should be valid ESLint flat config", async () =>
{
    const eslint = new ESLint({
        overrideConfigFile: true,
        overrideConfig: [
            ...ALL_CONFIGS,
            {
                settings: { react: { version: "19" } },
                languageOptions: {
                    parserOptions: {
                        projectService: {
                            allowDefaultProject: ["*.ts"]
                        }
                    }
                }
            }
        ]
    });

    const results = await eslint.lintText(
        `const foo: string = "bar";\nconsole.log(foo);\n`,
        { filePath: "test.ts" }
    );

    expect(results[0].fatalErrorCount).toBe(0);
});
