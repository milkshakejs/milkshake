var glob = require("glob"),
    fs = require("fs"),
    path = require("path"),
    tynt = require("tynt"),
    message = require("./message.js");

message.tynt = tynt;

glob.glob(path.resolve('../bin/*'), {nonull: true}, function(er, files) {
  if(er) {
    throw er;
  } else {
    good = true;
    for(i=0;i<files.length;i++) {
      fs.copyFile(files[i], path.join(process.cwd(), files[i]), (err) => {
        if (err) {
          good = false;
          throw err;
        }
        message.Success("Installing " + path.basename(files[i]));
      });
    }
    if(good == true) {
      console.log();
      message.Success("Installed successfully")
    } else {
      console.log();
      message.Error("Install failed.  Some unneeded files may be in "  + process.cwd())
    }
  }
})
