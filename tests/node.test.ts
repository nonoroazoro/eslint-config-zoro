import * as rules from "../src/node";

describe("rules", () =>
{
    it("should load Node rules.", () =>
    {
        Object.keys(rules).forEach(key =>
        {
            expect(rules[key]).not.toBeNull();
        });
    });
});
