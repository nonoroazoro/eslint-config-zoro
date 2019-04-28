import rules = require("../src/typescript");

describe("rules", () =>
{
    it("should load TypeScript rules.", () =>
    {
        Object.keys(rules).forEach((key) =>
        {
            expect(rules[key]).not.toBeNull();
        });
    });
});
