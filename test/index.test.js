const fs = require("fs");
const should = require("should");
const rules = require("../index");

describe("index", () =>
{
    it("should load all rules.", (done) =>
    {
        Object.keys(rules).forEach((key) =>
        {
            should.exist(rules[key]);
        });

        rules.extends.forEach((p_filePath) =>
        {
            fs.statSync(p_filePath);
        });

        done();
    });
});
