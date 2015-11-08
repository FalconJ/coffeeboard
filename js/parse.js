Parse.initialize("I7CHTBcgr31hehQp0QFRothSxnW5Dsa8W8GoUEzQ", "NO8ucTyA8ow5z6VejHd5u1PgABWPBBgdXKNWlfLS");

function registerUser(){
	var email = document.getElementById('inputEmail').value;
	var pass  = document.getElementById('inputPass').value;
	var passConf = document.getElementById('confPass').value;


	var currentUser = Parse.User.current();
	if (currentUser) {
        Parse.User.logOut();
    } 

    var user = new Parse.User();

    if(pass === passConf){
    	user.set("password", pass);
    	user.set("username", email);

    	user.signUp(null, {
    		success: function(user){
    			window.location = "home.html";
    		},
    		error: function(){
    			alert("There was a problem, try again later");
    		}
    	});
    }
    else{
    	alert("Passwords do not match");
    	$("#register")[0].reset();
    }
    
}