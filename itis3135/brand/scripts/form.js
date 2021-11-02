function confirm()
{
	alert("Submission successful!");
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var number = document.getElementById('number').value;
	var service = document.getElementById('options').value;
	alert(name + ", we have sent a text to " + number + " and an email to " + email + " about " + service + ". Thank you for your patience and we will talk with you soon!");
}