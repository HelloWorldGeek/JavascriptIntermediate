function getMonthName(mo){
  mo = mo - 1; 
  var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"];
  
  if(months[mo]){
    return months[mo];
  }else{
    throw "Fuera rango";
   }
}


var nombredelmes;
try{
  nombredelmes = getMonthName(1);
}catch(e){
  nombredelmes = e;
}finally{
  console.log("SIEMPRE ENTRO");
}


console.log(nombredelmes);
