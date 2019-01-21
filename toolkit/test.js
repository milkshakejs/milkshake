var toolkit = require("index.js");

toolkit.ArgumentParser.AddParameter("--test");
console.log(toolkit.ArgumentParser.Parse("--test hello"))
