function secret(){
	var txt=document.getElementById("codigo").value;
	//window.alert(txt.value);
	if (txt==17){
		window.alert("ok");
	}else{
		window.alert("no");
	}
}
function number(){
	var ini=parseInt(document.getElementById("inicio").value);
	var fi=parseInt(document.getElementById("fin").value);
	if (ini>=fi){
		window.alert("error number inicio debe ser menor que fin");
	} else { 
		for (var i=ini;i<=fi;i++){
			window.alert(i);
		}
	
	}
}
function total(){
	var unit=document.getElementById("unidad").value;
	var prec=document.getElementById("precio").value;
	window.alert((unit*prec).toFixed(2));
	//window.alert(Math.round(unit*prec);

}