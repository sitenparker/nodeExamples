
var fs = require('fs')
var bf = fs.readFileSync(process.argv[2])
var lineas = bf.toString().split('\n').length - 1

console.log(lineas)

