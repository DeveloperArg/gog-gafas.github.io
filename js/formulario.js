function iniciar()
{
document.getElementById("nombre").focus();
}

nodoFocus=document.getElementById("focus");
nodoFocus.setAttribute("onLoad", "iniciar();");

nodoText=document.getElementById("mensaje");
nodoText.setAttribute("wrap", "physical");

function validacion()
{
valor=document.getElementById("nombre").value;
if(valor==null||valor.length==0)
{
alert('Debe completar con su Nombre');
return false;
}

valor=document.getElementById("apellido").value;
if(valor==null||valor.length==0)
{
alert('Debe completar con su Apellido');
return false;
}

valor=document.getElementById("empresa").value;
if(valor==null||valor.length==0)
{
alert('Debe completar con el nombre de su Comercio');
return false;
}

valor=document.getElementById("mail").value;
if(!(/^[a-z]([\w\.]*)@[a-z]([\w\.]*)\.[a-z]{2,3}$/.test(valor)))
{
alert('Debe completar con un casilla de correo válida');
return false;
}

valor=document.getElementById("mensaje").value;
if(valor==null||valor.length==0)
{
alert('Debe agregar un comentario o su consulta');
return false;
}
return true;
}

nodoValidacion=document.getElementById("formulario");
nodoValidacion.setAttribute("onSubmit", "return validacion();");