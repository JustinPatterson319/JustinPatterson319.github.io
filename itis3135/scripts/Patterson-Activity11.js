<!-- jQuery call to the accordion() method. -->
$(document).ready(function() {
    $("#tabs").tabs();
});

  $( function() {
    $( "#tabs" ).accordion({
    collapsible: true,
    heightStyle: "content"
    });
  } );