var glob = require("glob"),
    fs = require("fs"),
    path = require("path"),
    tynt = require("tynt");

glob.glob('../bin/*', {nonull: true}, function(er, files) {
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
        console.log(tynt.Green("File copied."));
      });
    }
    if(good == true) {
      console.log
    }
  }
})
