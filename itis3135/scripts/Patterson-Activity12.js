$(document).ready(function() 
{
	
    $("#slider").bxSlider
    ({
    	   randomStart: true,
        auto: true,
        captions: true,
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 500,
        slideMargin: 20,
        speed: 3000,
        pager: true,
        pagerType: 'short',
        pagerShortSeparator: '/',
        pagerSelector: '#id_pager'
    });
});