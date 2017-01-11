
$(function(){
	var carouselList = $("#carousel ul"),
		changeSlide = $("#carousel ul li"),
		firstItem = carouselList.find("li:first"),
		lastItem = carouselList.find("li:last");

	var moveFirstSlide = function(){
		
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});;
	};

	var changeSlide = setInterval(function(){
		firstItem.css("margin-left", "-400px");
	}, 3000);

	carouselList.animate({'marginLeft': -400}, 500, changeSlide, moveFirstSlide);
});

