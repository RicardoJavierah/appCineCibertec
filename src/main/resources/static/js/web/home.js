$(document).on("click","#btn-empezar",function (){
	
	//alert("hola mundo javascritp");
	let usuario = $("#txtUsuario").val();
	let password = $("#txtPassword").val();
	
	$("#lbldatos").text("Usuario : " + usuario + " - Password : " + password);

	
	$("#modalempezar").modal("show");
})