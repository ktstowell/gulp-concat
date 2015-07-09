var files = {
  'one': 'one.js',
  'two': 'two.js',
  'three': 'three.js'
};

function getConcatenateName(file) {
  var name = 'default.js',
      path;

  for(var key in files) {
    path = file.path.split(__dirname)[1].split(key)[1];

    if(path) {
      name = files[key];
    }
  }

  return name;
}

module.exports = getConcatenateName;