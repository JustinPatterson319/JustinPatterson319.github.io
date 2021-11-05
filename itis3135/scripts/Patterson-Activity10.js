$(document).ready(function() {


// preload the image for each link
var slideshowArray = 
	 ["images/Activity10_images/h1.jpg",
	"images/Activity10_thumbnails/t1.jpg",
	"images/Activity10_images/h2.jpg",
	"images/Activity10_thumbnails/t2.jpg",
	"images/Activity10_images/h3.jpg",
	"images/Activity10_thumbnails/t3.jpg",
	"images/Activity10_images/h4.jpg",
	"images/Activity10_thumbnails/t4.jpg",
	"images/Activity10_images/h5.jpg",
	"images/Activity10_thumbnails/t5.jpg",
	"images/Activity10_images/h6.jpg",
	"images/Activity10_thumbnails/t6.jpg",]

var count = slideshowArray.length;

var $images = new Array();
for(var i = 0; i < count-1; i++)
	{
		$images.push($('<img>').attr('src', slideshowArray[i]));
	}
	
for(var i=0; i < count-1; i++)
	{
		var $list = $("<li>").append($images[i]);
		$("#pics_holder ul").append($list);
	}

//fades images in and out on click
     $("a").on('click', function (event) {
     		//gets new caption
     		var caption = this.title;
     		
     		//gets new image source
     		var newImage = this.href;
     		     		
     		//does fadeout/fadein with new image/caption
		$("#caption").fadeOut(3000, function()
		{
			document.getElementById("caption").innerHTML = caption;
			$("#caption").fadeIn(3000);
			
			//animate font size
			$("#caption").animate({fontSize: "2em"}, 3000);
			$("#caption").animate({fontSize: "120%"}, 3000);
		});
		
		$("#image").fadeOut(3000, function()
		{
			document.getElementById("image").src = newImage;
			$("#image").fadeIn(3000);
		});
        });
   
//removes link default for images        
$(document).on('click', 'img', function(event) 
{
	event.preventDefault();
	var href = this.href;     
});

}); // end ready