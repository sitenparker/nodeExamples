var fs = require("fs");
path = require("path");
var ext = process.argv[3];


//console.log("Leyendo el directorio"+ process.argv[2]);
fs.readdir(process.argv[2],function(err, files){
   if (err) {
      return console.error(err);
   }
   

   files.forEach( function (file){
   		if(path.extname(file) == "."+ext)
      		console.log( file );
   });
});