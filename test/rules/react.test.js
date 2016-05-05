const should = require("should");
const rules = require("../../rules/react");

describe("rules/react", function ()
{
    it("should load react rules.", function (done)
    {
        should.exist(rules);
        done();
    });
});
