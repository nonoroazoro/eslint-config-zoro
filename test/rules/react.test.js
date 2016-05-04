const should = require("should");
const react = require("../../rules/react");

describe("rules/react", function ()
{
    it("should load react rules.", function (done)
    {
        should.exist(react);
        done();
    });
});
