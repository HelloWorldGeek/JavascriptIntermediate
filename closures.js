function welcomeMessage(name){
	//si no le paso un valor, toma por defecto el valor "Human"
	var name = name || "Human";

	function sayHello(){
		return "Hello " + name;
	}
	return sayHello();
}
var message = welcomeMessage();
console.log(message);