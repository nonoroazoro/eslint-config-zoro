const fs = require("fs");
const should = require("should");
const index = require("../");

describe("index", function ()
{
    it("should load all rules.", function (done)
    {
        Object.keys(index).forEach((key) =>
        {
            should.exist(index[key]);
        });

        index.extends.forEach((p_filePath) =>
        {
            fs.statSync(p_filePath);
        });

        done();
    });
});
