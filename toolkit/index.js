var toolkit = {};

toolkit.ArgumentParser = {
  Parse: function(args) {
    var result = {};
    if(typeof args == "string") {
      args = args.split(" ");
    }
    for(i=0;i<args.length;i++) {
      if(toolkit.ArgumentParser.Parameters[args[i]] == true) {
        result[args[i].split("-").join("")] = args[i+1]
      }
    }
    return result
  },
  Parameters: {

  },
  AddParameter: function(key) {
    toolkit.ArgumentParser.Parameters[key] = true;
  },
  ToggleParameter: function(key) {
    toolkit.ArgumentParser.Parameters[key] = !toolkit.ArgumentParser.Parameters[key];
  }
}

module.exports = toolkit;
