function welcomeMessage(name){
    var name = name || "Human";
    
    function sayHello(){	
       return "Hello " + name;
    }

    return sayHello;
}


var mensaje = welcomeMessage("bil");
console.log(mensaje());
