// el prototype nos sirve para extender las clases que tengas
var numeros = [2,4,6,10];
numeros.forEach(function(num){
	console.log(num);
});

Array.prototype.sumarUno = function(){
	for (var i = 0; i < this.length; i++) {
		var item = this[i];
		this[i] = item + 2;
	}
};
//con Prototype podemos acceder a la clase y agregar(o sobreescribir) metodos
numeros.sumarUno();
console.log(numeros);

Array.prototype.push = function(e){
	console.log("Ahora no joven");
};

numeros.push("raton");