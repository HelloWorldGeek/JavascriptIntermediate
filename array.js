var colors = ["red","green","blue"];
colors.forEach(function(color){
	// recorre y concatena
	console.log(color);
});

a = [1,2,3,4,5,6];
for(var i in a){
	console.log(a[i]);
}

for(var i of a){
	console.log(i);
}