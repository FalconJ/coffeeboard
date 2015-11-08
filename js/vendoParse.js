Parse.initialize("I7CHTBcgr31hehQp0QFRothSxnW5Dsa8W8GoUEzQ", "NO8ucTyA8ow5z6VejHd5u1PgABWPBBgdXKNWlfLS");
var parseID  = "I7CHTBcgr31hehQp0QFRothSxnW5Dsa8W8GoUEzQ";
var parseKey = "c3CgDJmkgWLKQvpTOntKxdgYQ5NysNxRGiDq7CJP";
var ParseObj = Parse.Object.extend('Pedidos');

function publicar(){

	var data = {
		nombre		: $("#vendonombre").val(),
		descripcion : $("#vendoDescripcion").val(),
		categoria 	: Number($("#vendoCategoria").val()),
	};

	console.log(data.nombre, " ", data.descripcion, " ", data.categoria, " ", data.fecha);

	parseObj = new ParseObj();

	$("#vendoForm")[0].reset();

	parseObj.save(data,{
		success: function(){
			console.log("info saved");
		},
		error: function(error){
			console.log("info failed");
			alert("Erro: " + error.message);
		}
	})
}