var glob = require("glob"),
    fs = require("fs"),
    path = require("path"),
    tynt = require("tynt"),
    message = require("./message.js"),
    merge = require("node-merge");

message.tynt = tynt;
merge.mergeTo("../bin", process.cwd());
