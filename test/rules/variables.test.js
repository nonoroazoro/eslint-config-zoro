const should = require("should");
const rules = require("../../rules/variables");

describe("rules/variables", function ()
{
    it("should load variables rules.", function (done)
    {
        should.exist(rules);
        done();
    });
});
