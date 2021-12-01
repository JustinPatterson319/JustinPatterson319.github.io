$("#begin").click(function() {
    $.ajax({
        type: "get",
        url: "components/galleryPics.json",
        beforeSend: function() {
            $("#team").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $("#outfits").html("");
            $.each(data, function() {
            $.each(this, function(key, text) {
            	$("#outfits").append(text.image);
            });
          });
        }
    });
});

