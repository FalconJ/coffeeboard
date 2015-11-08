Parse.initialize("I7CHTBcgr31hehQp0QFRothSxnW5Dsa8W8GoUEzQ", "NO8ucTyA8ow5z6VejHd5u1PgABWPBBgdXKNWlfLS");

function registerUser(){
	var email = document.getElementById('regEmail').value;
	var pass  = document.getElementById('regPass').value;
	var passConf = document.getElementById('confRegPass').value;


	var currentUser = Parse.User.current();
	if (currentUser) {
        Parse.User.logOut();
    } 

    var user = new Parse.User();

    if(pass === passConf){
    	user.set("password", pass);
    	user.set("username", email);
    	user.set("email", email);

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

function logIn(){
	var email = document.getElementById('inputEmail').value;
	var pass  = document.getElementById('inputPassword').value;

	var currentUser = Parse.User.current();
	if (currentUser) {
        Parse.User.logOut();
    } 

	Parse.User.logIn(email, pass, {
		success: function(){
			console.log("Welcome back bro");
	    	window.location = "home.html";
		},
		error: function(user, error){
			alert("Error: " + error.message);
		}
	});
}