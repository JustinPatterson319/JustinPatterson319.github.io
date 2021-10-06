const person = [];
const salary = [];

function addSalary()
	{
		var newGuy = prompt("Who are we adding?");
		var newGuysSalary = parseFloat(prompt("What is their salary?"));
		while(isNaN(newGuysSalary))
			{
				newGuysSalary = parseFloat(prompt("Not a number. What is their salary?"));
			}
		person.push(newGuy);
		salary.push(newGuysSalary);
	}
	
function displayResults()
	{
		var total = 0;
		var counted = 0;
		var highestSalary = 0;
		for(let i = 0; i < salary.length; i++)
			{
				total = total + salary[i];
				counted++;
				if(salary[i] > highestSalary)
				{
					highestSalary = salary[i];
				}
			}
		var average = total/counted;
		document.getElementById("results").innerHTML = ("The average salary is: $" + average + ". <br> The highest salary is: $" + highestSalary + ".");
	}
	
function displaySalary()
	{
		var salaryTable = document.getElementById("results_table");
		var row;
		var nameCell;
		var salaryCell;
		for(let i = 0; i < salary.length; i++)
			{
				row = salaryTable.insertRow(salaryTable.length);
				nameCell = row.insertCell(0);
				salaryCell = row.insertCell(1);
				nameCell.innerHTML = person[i];
				salaryCell.innerHTML = "$" + salary[i];
			}
		var numberOfRows = document.getElementById("results_table").rows.length;
		while(numberOfRows - 2 > salary.length)
			{
				salaryTable.deleteRow(2);
			}
		}
	
