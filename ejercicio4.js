var fs = require('fs')

fs.readFile(process.argv[2], function leerArchivo(err, data){

	if(err){
		console.log("ERROR al leer archivo");
	}
	else{
	
	var lineas = data.toString().split('\n').length - 1

	console.log(lineas)
	}
	
});

