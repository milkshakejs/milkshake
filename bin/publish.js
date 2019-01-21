var cp = require("child_process");

var fileName = "../publish-all";

var safe = process.argv[1] == "safe"; if(safe) fileName = "./binsh/publish-safe";
var testing = process.argv[1] == "testing"; if(safe) fileName = "./binsh/publish-testing";
var safe = process.argv[1] == "unstable"; if(safe) fileName = "./binsh/publish-unstable";

if(process.platform == "win32") {
  cp.execFile(fileName + ".bat", [process.cwd()]);
} else {
  cp.execFile(fileName + ".sh", [process.cwd()]);
}
