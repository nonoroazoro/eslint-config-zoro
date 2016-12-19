const should = require("should");
const rules = require("../../rules/react");

describe("rules/react", () =>
{
    it("should load react rules.", (done) =>
    {
        should.exist(rules);
        done();
    });
});
