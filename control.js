function comprobar(){
	var primo=window.prompt("Dime un numero primo del 1 al 10")
	if (primo==1||primo==2||primo==3)
	{
	window.alert("Got it!");
	}
}
function viajar(){
	var viaje=window.prompt("elige un lugar")
	switch (viaje) {
	case "Roma":
		window.alert("Esto cuesta 500");
		break;
	case "Paris":
		window.alert(" Esto cuesta 450");
		break;
	case "Berlin":
		window.alert("Esto cuesta 387");
	case "París":
		window.alert("Esto cuesta 450");
		break;
	case "Berlín":
		window.alert("Esto cuesta 387");
	default:
		window.alert("Dime otro lugar");
	}
}