var meses=new Array("Enero","Febrero","Marzo","Abril","Mayo","Junio",
						"Julio","Agosto","Septiembre","Octubre","Noviembre",
						"Diciembre");

var fecha=new Date();

var ano=fecha.getFullYear();
var mes=fecha.getMonth();

document.getElementById("fecha").innerHTML='&Uacute;ltima revisi&oacute;n&#058; '+meses[mes]+' de '+ano+'.';