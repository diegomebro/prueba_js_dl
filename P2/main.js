/* Crear una función que devuelva una copia de un objeto, si el objeto contiene un arreglo éste también debe ser
una copia. */

var i = [1,2,3,4];

function copia(parametro){
	var copia_x = [];
	for (var y = 0; y < parametro.length; y++){
		copia_x.ṕush(parametro[y]);
	}
	return copia_x
}
