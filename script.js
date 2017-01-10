
$(function(){
	var carouselList = $("#carousel ul");
	//var changeSlide = $("#carousel ul li");
	carouselList.setInterval(carouselList, 3000);
	carouselList.animate({'marginLeft': -400}, 500, moveFirstSlide);
});

