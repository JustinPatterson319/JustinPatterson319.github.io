function alertTime()
	{
		alert("I hope this alert finds you well.");
	}
	
function askName()
	{
		var name = prompt("Your name is...?");
		document.write(name);
	}
	
function howAreYou()
	{
		var feelings = prompt("How are you?");
		document.write(feelings);
	}

//button 1
function quickMaths()
	{
		var number1 = parseInt(prompt("Give me a number to add!"));
		var number2 = parseInt(prompt("Now what shall we combine that with?"));
		var sum = number1 + number2;
		alert("Your answer is: " + sum);
	}

//button 2
function justNeigh()
	{
		var allTheNeighs = "";
		var neighs = parseInt(prompt("How many times should our Pegasus neigh?"));
		while(neighs > 0)
		{
			allTheNeighs = allTheNeighs + "Neigh ";
			neighs--;
		}
		alert("Check this out! " + allTheNeighs);
	}

//button 3
function repeatAfterMe()
	{
		var repeatedString = prompt("Repeat this phrase: Chicken Nugget");
		if(repeatedString == "Chicken Nugget")
		{
			alert("Wow! You can do a basic task!")
		}
		else
		{
			alert("So you can't follow basic tasks huh?")
		}
	}
	
//button 4
function yourPet()
	{
		alert("Tell me about your pet!")
		var petName = prompt("Name: ")
		var petKind = prompt("What kind of pet?")
		var petColor = prompt("What color are they?")
		alert("So your pet is a " + petKind + " named " + petName + " and they are " + petColor + ".");
	}

//button 5
function activateOthers()
	{
		var randomNumber = prompt("Give us a number 1-4 to activate one of the other buttons!");
		switch(randomNumber)
		{
			case "1":
				quickMaths();
				break;
			case "2":
				justNeigh();
				break;
			case "3":
				repeatAfterMe();
				break;
			case "4":
				yourPet();
				break;
		}
	}