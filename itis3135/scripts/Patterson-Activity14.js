$(document).ready(function() {
	$("#nav_list li").click(function() {
		var titles = $(this).children("a").attr("title");
		$.get("json_files/" + titles + ".json", function(data, status) {
			data = data['speakers'][0];
			$("main h1").html(data['title']);
			$("main h2").html(data['month'] + "<br />" + data['speaker']);
			$("main img").attr("src", data.image);
			$("main p").html(data.text);
			
			//clear toobin as the default h3
			document.getElementById("name").innerHTML = ("");
			});
		});
	}); //end ready