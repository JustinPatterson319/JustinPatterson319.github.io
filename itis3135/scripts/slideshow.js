  $(document).ready(function() 
  	{
 		$('.next').on('click', function()
 			{
 				var currentImage = $('.active');
 				var nextImage = currentImage.next();
 				if(nextImage.length)
 					{
 						currentImage.removeClass('active').css('z-index', -10);
 						nextImage.addClass('active').css('z-index', 10);
 					}
 			});
 			
 		$('.prev').on('click', function()
 			{
 				var currentImage = $('.active');
 				var prevImage = currentImage.prev();
 				if(prevImage.length)
 					{
 						currentImage.removeClass('active').css('z-index', -10);
 						prevImage.addClass('active').css('z-index', 10);
 					}
 			});

  	});


var slideshowArray = 
	 ["images/pic1.gif",
	"images/pic2.gif",
	"images/pic3.gif",
	"images/pic4.gif",
	"images/pic5.gif",
	"images/pic6.gif"]

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
	