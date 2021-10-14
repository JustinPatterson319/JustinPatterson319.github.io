var total = 0;	
var order = "";

var $ = function(id) {
	return document.getElementById(id);
};

function myFunction() 
{
	var item = 'cappuccino';
	// for click event add item to order and update total
	if(item == 'cappuccino')
		{
			order = order + "\n$3.45 - Cappuccino - Delicious Cappuccino!"
			total = total + 3.45;
		}
	if(item == 'espresso')
		{
			order = order + "\n$1.95 - Espresso - Delicious espresso. Wanna try it?"
			total = total + 1.95
		}
	// display order and total
	document.getElementById("order").innerHTML = order;
	document.getElementById("total").innerHTML = "Total: $"+ total;
}

function myFunctionE() 
{
	var item = 'espresso';
	// for click event add item to order and update total
	if(item == 'cappuccino')
		{
			order = order + "\n$3.45 - Cappuccino - Delicious Cappuccino!"
			total = total + 3.45;
		}
	if(item == 'espresso')
		{
			order = order + "\n$1.95 - Espresso - Delicious espresso. Wanna try it?"
			total = total + 1.95
		}
	// display order and total
	document.getElementById("order").innerHTML = order;
	document.getElementById("total").innerHTML = "Total: $"+ total;
}

