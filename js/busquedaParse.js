var parseID  = "I7CHTBcgr31hehQp0QFRothSxnW5Dsa8W8GoUEzQ";
var parseKey = "c3CgDJmkgWLKQvpTOntKxdgYQ5NysNxRGiDq7CJP";

$(document).ready(function(){
	$.ajax({
		url			:  "https://api.parse.com/1/classes/Pedidos",
		headers		: {
			"X-Parse-Application-Id": parseID,
			"X-Parse-REST-API-Key": parseKey
		},
		contentType	: "application/json",
		dataType	: "json",
		type 		: "GET",
		success		: function(data){
			
			updateinfo(data);
		},
		error		: function(data, error){
			console.log("Error: " + error);
		}
	});
});

function updateinfo(data){
	var table=$("#informacion");
	table.html('');
	$.each(data.results, function (index, value) {
		var trEl=$('<tr><td>'+value.nombre+'</td><td>'+value.descripcion+'</td><td>'+value.categoria+'</td></tr>');	
		table.append(trEl);		
	});
}