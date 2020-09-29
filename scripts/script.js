const content = [
	{
		image: './assets/001.jpg',
		name: 'photo'
	},
	{
		image: './assets/002.jpg',
		name: 'photo'
	},
	{
		image: './assets/003.jpg',
		name: 'photo'
	},
	{
		image: './assets/004.jpg',
		name: 'photo'
	},
	{
		image: './assets/005.jpg',
		name: 'photo'
	},
	{
		image: './assets/006.jpg',
		name: 'photo'
	},
	{
		image: './assets/007.jpg',
		name: 'photo'
	},
	{
		image: './assets/008.jpg',
		name: 'photo'
	},
	{
		image: './assets/009.jpg',
		name: 'photo'
	},
	{
		image: './assets/010.jpg',
		name: 'photo'
	},
	{
		image: './assets/011.jpg',
		name: 'photo'
	},
	{
		image: './assets/012.jpg',
		name: 'photo'
	},
	{
		image: './assets/013.jpg',
		name: 'photo'
	},
	{
		image: './assets/014.jpg',
		name: 'photo'
	},
	{
		image: './assets/015.jpg',
		name: 'photo'
	},
	{
		image: './assets/016.jpg',
		name: 'photo'
	},
	{
		image: './assets/017.jpg',
		name: 'photo'
	},
	{
		image: './assets/018.jpg',
		name: 'photo'
	},
	{
		image: './assets/019.jpg',
		name: 'photo'
	},
	{
		image: './assets/020.jpg',
		name: 'photo'
	},
	{
		image: './assets/021.jpg',
		name: 'photo'
	},
	{
		image: './assets/022.jpg',
		name: 'photo'
	},
	{
		image: './assets/023.jpg',
		name: 'photo'
	},
	{
		image: './assets/024.jpg',
		name: 'photo'
	},
	{
		image: './assets/025.jpg',
		name: 'photo'
	},
	{
		image: './assets/026.jpg',
		name: 'photo'
	},
	{
		image: './assets/027.jpg',
		name: 'photo'
	},
	{
		image: './assets/028.jpg',
		name: 'photo'
	},
	{
		image: './assets/029.jpg',
		name: 'photo'
	},
	{
		image: './assets/030.jpg',
		name: 'photo'
	},
	{
		image: './assets/031.jpg',
		name: 'photo'
	},
	{
		image: './assets/032.jpg',
		name: 'photo'
	},
	{
		image: './assets/033.jpg',
		name: 'photo'
	},
	{
		image: './assets/034.jpg',
		name: 'photo'
	},
	{
		image: './assets/035.jpg',
		name: 'photo'
	},
	{
		image: './assets/036.jpg',
		name: 'photo'
	},
	{
		image: './assets/037.jpg',
		name: 'photo'
	},
	{
		image: './assets/038.jpg',
		name: 'photo'
	},
	{
		image: './assets/039.jpg',
		name: 'photo'
	},
	{
		image: './assets/040.jpg',
		name: 'photo'
	},
	{
		image: './assets/041.jpg',
		name: 'photo'
	},
	{
		image: './assets/042.jpg',
		name: 'photo'
	},
	{
		image: './assets/043.jpg',
		name: 'photo'
	},
	{
		image: './assets/044.jpg',
		name: 'photo'
	},
	{
		image: './assets/045.jpg',
		name: 'photo'
	},

]

// const openNav = () => {

// 	document.getElementById("mySidenav").style.width = "375px";
// 	document.getElementById("main").style.marginLeft = "375px";
// }

// const closeNav = () => {
// 	document.getElementById("mySidenav").style.width = "0";
// 	document.getElementById("main").style.marginLeft = "0";
// }

const init = () => {

	content.forEach(block => {
		$('main ul').append(`
			<li data-thumb="${block.image}" class="image">
				<img src="${block.image}" alt="" />
			</li>
        `);
	});

	// $('.menu').on("click", function () {
	// 	openNav()
	// })

	// $('.closebtn').on('click', function () {
	// 	closeNav()
	// })

	$('body').css('display', 'none');
	$('body').fadeIn(700);

	$('#lightSlider').lightSlider({
		gallery: true,
		item: 1,
		loop: true,
		slideMargin: 0,
		thumbItem: 9
	});
	// via http://sachinchoolur.github.io/lightslider/


}


$(function () {
	init();


});