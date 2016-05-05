const should = require("should");
const rules = require("../../rules/errors");

describe("rules/errors", function ()
{
    it("should load errors rules.", function (done)
    {
        should.exist(rules);
        done();
    });
});
