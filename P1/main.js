//¿Cuál es el problema con el siguiente código?

var	alumno1	=	{nombre:"Matías",edad:5}
var	alumno2	=	alumno1
alumno2.nombre	=	"Sebastián"


/* el problema es que no se esta creando el alumno2 como tal, si no que se esta modificando el alumno1, en donde se esta cambiando el nombre
Matías por Sebastián */