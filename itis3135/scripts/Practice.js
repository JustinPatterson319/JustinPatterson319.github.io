var total = 0;	
var order = "";

var $ = function(id) {
	return document.getElementById(id);
};

function myFunction() 
{		
	order = order + "\n$3.45 - Cappuccino - Delicious Cappuccino!\n"
	total = total + 3.45;
	
	// display order and total	
	document.getElementById("order").innerHTML = order;
	document.getElementById("total").innerHTML = "Total: $"+ total;
}

function myFunctionE() 
{
	order = order + "\n$1.95 - Espresso - Delicious espresso. Wanna try it?\n"
	total = total + 1.95
	
	// display order and total
	document.getElementById("order").innerHTML = order;
	document.getElementById("total").innerHTML = "Total: $"+ total;
}

