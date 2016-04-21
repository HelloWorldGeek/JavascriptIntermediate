function getMonthName(mo){
	mo = mo -1;
	var months = ["Enero","Febrero","Marzo","Abril",
	"Mayo","Junio","Julio","Agosto",
	"Septiembre","Octubre","Noviembre","Diciembre"];

	if(months[mo]){
		return months[mo];
	}else{
		// throw es una palabra reservada, busca el catch mas cercano
		// throw llama al try catch
		throw "Fuera de rango";
	}	
}
var nombredelmes;
try{
	nombredelmes = getMonthName(12);
}catch(e){
	// el "e" es el mensaje de error
	nombredelmes = e;
}finally{
	console.log("Siempre Entro")
}
console.log(nombredelmes);