const openNav = () => {
	document.getElementById("mySidenav").style.width = "375px";
	document.getElementById("main").style.marginRight = "375px";
}

const closeNav = () => {
	document.getElementById("mySidenav").style.width = "0";
	document.getElementById("main").style.marginRight = "0";
}

const init =() => {
	$('.menu').on("click", function () {
		openNav()
	})

	$('.closebtn').on('click', function () {
		closeNav()
	})
}


$(function () {
	init();
	
	
	$('#lightSlider').lightSlider({
		gallery: true,
		item: 1,
		loop: true,
		slideMargin: 0,
		thumbItem: 9
	});
	// via http://sachinchoolur.github.io/lightslider/

});
