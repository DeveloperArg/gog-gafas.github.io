function ver()
{
if(tooltiptext.style.visibility=="visible")
	{
		tooltiptext.style.visibility="hidden";
	}else{
			tooltiptext.style.visibility="visible";
		}

}
nodoTool=document.getElementById("tool");
nodoTool.setAttribute("onClick", "ver();");

/*	
Se cambia hidden-visible-hidden.18/02/18
*/