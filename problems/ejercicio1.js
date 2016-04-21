function Empleado(nombre, cedula, edad, casado, salario){
	this.nombre = nombre || "Julio Mitac" ;
	this.cedula = cedula || "jm123";
	this.edad = edad || 24;
	this.casado = casado || true;
	this.salario = salario || 1500;
}

Empleado.prototype.aumentoSalario = function(gg){
	this.salario = this.salario * gg;
	return this.salario;
}

var nuevoEmpleado = new Empleado();
console.log("Nombre y Apellido" + '\t' + "Cedula" + '\t' + "Edad" + '\t' + "Casado" + '\t' + "Salario");
console.log("===================================================================\n");
console.log(nuevoEmpleado.nombre + '\t' + nuevoEmpleado.cedula + '\t' +
	nuevoEmpleado.edad + '\t' + nuevoEmpleado.casado + '\t' +
	nuevoEmpleado.salario);
console.log("===================================================================\n");
var billy = new Empleado("Billy Caballero","bc21",20,false,800);
console.log(billy);


function Programador(lineasDeCodigoPorHora,lenguajeDominante){
	this.lineasDeCodigoPorHora = lineasDeCodigoPorHora;
	this.lenguajeDominante = lenguajeDominante;
}

Programador.prototype = new Empleado();
Programador.prototype.constructor = Programador;
Programador.prototype.clasificacion = function(){
	if(this.lineasDeCodigoPorHora < 50){
		console.log("Es Junior");
	}
	else if(this.lineasDeCodigoPorHora >= 50 && this.lineasDeCodigoPorHora <= 100){
		console.log("Es Semi-Senior");
	}
	else if(this.lineasDeCodigoPorHora > 100){
		console.log("Es Senior");
	}
}
var newProgramador = new Programador(60,"Java");
newProgramador.nombre = "Larry";
console.log("Nuevo Programador: " + newProgramador.nombre);
console.log(newProgramador.lineasDeCodigoPorHora + '\t' + newProgramador.lenguajeDominante);
newProgramador.clasificacion();
