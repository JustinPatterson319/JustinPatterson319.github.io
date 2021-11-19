$(document).ready(function() {
    $.ajax({
        type: "get",
        url: "components/team.json",
        beforeSend: function() {
            $("#team").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $("#team").html("");
            $.each(data, function() {
            $.each(this, function(key, text) {
            	$("#team").append
            	("<h3>" + text.name + "</h3>" +
                          text.title + "<br>" +
                          text.bio + "<br>");
            });
          });
        }
    });
});