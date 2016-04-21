var numeros = [2,4,6,10];

numeros.forEach(function(num){
    console.log(num);
});

Array.prototype.sumarUno = function(){
   for(var i=0; i < this.length; i++){
      var item = this[i];
      this[i] = item + 2;
    }
};

numeros.sumarUno();
console.log(numeros);


Array.prototype. = function(){
    console.log("Ahora no joven");
};
numeros.push("raton");


