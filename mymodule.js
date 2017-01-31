//Module for read directories, recive directorie, ext, and callback

var Modulo = (function(dir, ext, callback){

	var fs = require("fs");
	path = require("path");
	var archivos = [];

	this.dameArchivos = function(dir, ext, callback){
		
		fs.readdir(dir, function(err, files){

		   	if (err) {
		   		return callback(err,null);
		   	}
		   	else{
			    var i = 0;
			    files.forEach( function (file){
			    	if(path.extname(file) == "."+ext){
			   			archivos[i] = file;
			   			//console.log(file)
			   			i++;
			   		}
			    });

			    callback(null, archivos);
			}
	    }); 
	};
});

module.exports = Modulo;


