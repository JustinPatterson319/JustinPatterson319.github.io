$(document).ready(function(){
	$.getJSON('json_files/facultyList.json', function(data) {
		$.each(data, function() {
			$.each(this, function(key, value) {
				$("#faculty").append("<img src="+"'"+value.image+"'><br>"+
				"<h2>" + value.full_name + "</h3>" +
				"<h3>" + value.department + "</h3>" +
				"<p>" + value.bio + "</p><br>");
				});
			});
		});
	});
			
