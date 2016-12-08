const should = require("should");
const rules = require("../../rules/node");

describe("rules/node", function ()
{
    it("should load node rules.", function (done)
    {
        should.exist(rules);
        done();
    });
});
