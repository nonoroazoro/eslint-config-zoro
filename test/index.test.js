﻿const fs = require("fs");
const should = require("should");
const rules = require("../index");

describe("index", function ()
{
    it("should load all rules.", function (done)
    {
        Object.keys(rules).forEach(function (key)
        {
            should.exist(rules[key]);
        });

        rules.extends.forEach(function (p_filePath)
        {
            fs.statSync(p_filePath);
        });

        done();
    });
});
