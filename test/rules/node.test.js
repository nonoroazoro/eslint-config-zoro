const should = require("should");
const rules = require("../../rules/node");

describe("rules/node", () =>
{
    it("should load node rules.", (done) =>
    {
        should.exist(rules);
        done();
    });
});
