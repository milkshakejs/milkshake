var toolkit = {};

toolkits.ArgumentParser = {
  Parse: function(args) {
    var result = {};
    if(typeof args == "string") {
      args = args.split(" ");
    }
    for(i=0;i<args.length;i++) {
      if(toolkits.ArgumentParser.Parameters[args[i]] == true) {
        result[args[i].split("-").join("")] = args[i+1]
      }
    }
  }
}

module.exports = toolkit;
