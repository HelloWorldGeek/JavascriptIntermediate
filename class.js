// en js no existe la palabra reservada class
function Person(name, age, sex) {
	this.name = name;
	this.age = age;
	this.sex = sex;
	this.sayHello = function(message){
		console.log("Holi " + message);
	}
}

// es recomendable crear tu metodos con prototype
Person.prototype.sayHello = function(message){
	console.log(" Holi boli " + message);
};

var rat = new Person("Rat Name",20,"M");
rat.sayHello("Un mensaje");
console.log(rat.age);