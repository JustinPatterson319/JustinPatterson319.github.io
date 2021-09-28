function getNumber()
	{
		var polygonNumber = parseFloat(prompt("The Jolly Pegasus would like you to give a number 0-10 and we'll tell you what polygon has that many sides..."));
		return polygonNumber;
	}
	
function getNumberAfterError()
	{
		var polygonNumber = parseFloat(prompt("That answer did not fit the requirements. The Jolly Pegasus would like you to give a number 0-10..."));
		return polygonNumber;
	}

	
function getShape(sides)
	{
		side = Math.round(Math.abs(sides));
		switch(side)
		{
			case 0:
				return "Nothingagon!";
				break;
			case 1:
				return "Henagon";
				break;
			case 2:
				return "Digon";
				break;
			case 3:
				return "Trigon";
				break;
			case 4:
				return "Tetragon";
				break;
			case 5:
				return "Pentagon";
				break;
			case 6:
				return "Hexagon";
				break;
			case 7:
				return "Heptagon";
				break;
			case 8:
				return "Octagon";
				break;
			case 9:
				return "Nonagon";
				break;
			case 10:
				return "Decagon";
				break;
		}
	}

function validateEntry(sides)
	{
		if(typeof sides == 'number')
		{
			if(sides >= -10 && sides <= 10)
			{
			return (sides == sides);
			}
		}
	}