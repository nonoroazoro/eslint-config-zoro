import rules = require("../src/base");

describe("rules", () =>
{
    it("should load base rules.", () =>
    {
        Object.keys(rules).forEach((key) =>
        {
            expect(rules[key]).not.toBeNull();
        });
    });
});
