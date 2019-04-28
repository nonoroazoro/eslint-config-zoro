import rules = require("../src/eslint");

describe("rules", () =>
{
    it("should load ESLint rules.", () =>
    {
        Object.keys(rules).forEach((key) =>
        {
            expect(rules[key]).not.toBeNull();
        });
    });
});
