var cp = require("child_process");

var fileName = "../publish-all";

if(process.platform == "win32") {
  cp.execFile(fileName + ".bat");
} else {
  cp.execFile(fileName + ".sh");
}
