const should = require("should");
const rules = require("../../rules/variables");

describe("rules/variables", () =>
{
    it("should load variables rules.", (done) =>
    {
        should.exist(rules);
        done();
    });
});
