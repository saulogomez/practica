function suma() {
  var n1=5;
  var n2=4;
  var suma=n1+n2;
  console.log(suma);
  document.getElementById("rpt").innerHTML +=suma;
  alert("la repuesta es:" + suma);
}

function Verfecha() {
  console.log(new Date());
  var hoy= new Date();
  var mes = hoy.getMonth();
  var dia = hoy.getDay();
  var anio = hoy.getYear();
  var anio2 = hoy.getFullYear();
  var hora = hoy.getHours();
}

function arreglo() {
  var array = [];
  var texto = "abcd";
  var objeto= {0:"abc"};
  array.push(texto);
  array.push(objeto);
  array.splice(0,2);
}
