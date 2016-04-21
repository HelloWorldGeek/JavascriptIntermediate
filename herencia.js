function Animal(edad){
	this.edad = edad || 0;
}

Animal.prototype.crecer = function(){
	this.edad = this.edad + 1;
	return this.edad;
};

// creamos una clase llamada perro
function Perro(propietario){
	this.propietario = propietario;
}

//la clase perro hereda de la clase animal
Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;

Perro.prototype.ladrar = function(){
	console.log("wau");
};

Perro.prototype.obtenerPropietario = function(){
	console.log("Su propietario se llamada: " + this.propietario);
};

var julio = new Perro("Alfredo");
console.log(julio.edad);
julio.crecer();
console.log(julio.edad);
julio.ladrar();
julio.obtenerPropietario();
