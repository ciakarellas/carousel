
$(function(){
	var carouselList = $("#carousel ul")[0];
			
	debugger;
	var moveFirstSlide = function(){
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");


		lastItem.after(firstItem);
		carouselList.css("margin-left", "0");

	};



	var changeSlide = setInterval(function(){
		carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
	}, 3000);

	
});

