import rules = require("../src/index");

describe("rules", () =>
{
    it("should load all rules.", () =>
    {
        Object.keys(rules).forEach((key) =>
        {
            expect(rules[key]).not.toBeNull();
        });
    });
});
