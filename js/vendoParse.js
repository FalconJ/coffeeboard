Parse.initialize("I7CHTBcgr31hehQp0QFRothSxnW5Dsa8W8GoUEzQ", "NO8ucTyA8ow5z6VejHd5u1PgABWPBBgdXKNWlfLS");

var ParseObj = Parse.Object.extend("Pedidos");

function publicar(){
	var date = new Date();

	var data = {
		nombre		: $("vendonombre").val(),
		descripcion : $("vendoDescripcion").val(),
		categoria 	: $("vendoCategoria").val(),
		fecha	  	: date,
	};

	parseObj = new ParseObj();

	$("#vendoForm")[0].reset();

	parseObj.save(data,{
		success: function(){
			console.log("info saved");
		},
		error: function(){
			console.log("info failed");
			alert("Erro: " + error.message);
		}
	})
}