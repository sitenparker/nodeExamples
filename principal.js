//principal.js

var myModule = require('./mymodule.js')

var myModuleInstance = new myModule();

myModuleInstance.dameArchivos(process.argv[2], process.argv[3], function(err,archivos){
	
	if(err)
		console.log("Error al leer el directorio")
	else{

		archivos.forEach( function (archivo){
    		console.log(archivo)
   		 });
    }
})

