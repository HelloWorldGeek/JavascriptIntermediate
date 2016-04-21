function Person(name, age, sex){
   this.name = name;
   this.age = age;
   this.sex = sex;
}

Person.prototype.sayHello = function(message){
   console.log(" Holi boli " + message);
};

var larry = new Person("Larry", 20, "I");
console.log(larry.name + larry.age);
larry.sayHello(" SOY RATON");
