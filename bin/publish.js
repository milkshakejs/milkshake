var cp = require("child_process");

var fileName = "../publish-all";

var safe = process.argv[1] == "safe"; if(safe) fileName = "./binsh/publish-safe"
var testing = process.argv[1] == "safe"; if(safe) fileName = "./binsh/publish-testing"

if(process.platform == "win32") {
  cp.execFile(fileName + ".bat");
} else {
  cp.execFile(fileName + ".sh");
}
