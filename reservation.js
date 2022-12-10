$(document).ready(function() {
	// var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
  
	// This will focus the arival date 
	document.getElementById("arrival_date").focus();
  
	// This will be the event handler for the submit
	document.getElementById("reservation_form").addEventListener("submit", function(e) {
		var valid = true;
		// Checking if the value is entered into each text box and the trimming of the values

		var arrival_date = document.getElementById("arrival_date").value;
		document.getElementById("arrival_date").value = arrival_date.trim();
  
		var nights = document.getElementById("nights").value;
		document.getElementById("nights").value = nights.trim();
  
		var name = document.getElementById("name").value;
		document.getElementById("name").value = name.trim();
  
		var email = document.getElementById("email").value;
		document.getElementById("email").value = email.trim();
  
		var phone = document.getElementById("phone").value;
		document.getElementById("phone").value = phone.trim();
  
		// if any of the field is empty 
		if (arrival_date === "" || nights === "" || name === "" || email === "" || phone === "") {
			valid = false;
			alert("Text fields should not be empty.");
		}
  
		// Nights should be numeric 
		if(isNaN(nights)) {
			valid = false;
			alert("Nights should be numeric.");
		}
  
		// This will check if the email matches 
		if (!emailPattern.test(email)) {
			valid = false;
			alert("Email ID not valid.");
		}
  
		if (!valid) {
			// This is the dont submit form 
			e.preventDefault();
		}
	});
  }); // end ready
