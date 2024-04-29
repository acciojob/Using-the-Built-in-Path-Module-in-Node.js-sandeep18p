const path = require("path");

function joinPaths(i1, i2) {
  const joinedPath = path.join(i1, i2);
  console.log(joinedPath);
}

const args = process.argv.slice(2);
joinPaths(args[0], args[1]);