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


const init = () => {

	content.forEach(block => {
		$('.nextCircle').before(`
				<img src="${block.image}" alt="" />
        `);
	});



	// $('body').css('display', 'none');
	// $('body').fadeIn(1000);

	// $('#lightSlider').lightSlider({
	// 	gallery: true,
	// 	item: 1,
	// 	loop: true,
	// 	slideMargin: 0,
	// 	thumbItem: 9,
	// 	adaptiveHeight: true,
	// 	verticalHeight: 500,
	// });
	// via http://sachinchoolur.github.io/lightslider/

		let i = 0;
		//when the next button is clicked on
		$(".next").on("click", function () {
			//increase the display picture index by 1
			i = i + 1;
			//if we are at the end of the image queue, set the index back to 0
			if (i == $("img").length) {
				i = 0;
			}
			//set current image and previous image
			let currentImg = $("img").eq(i);
			let prevImg = $("img").eq(i - 1);
			//call function to animate the rotation of the images to the right
			animateImageLeft(prevImg, currentImg);
		});
		//when the previous button is clicked on
		$(".previous").on("click", function () {
			//if we are at the beginning of the image queue, set the previous image to the first image and the current image to the last image of the queue
			if (i == 0) {
				prevImg = $("img").eq(0);
				i = $("img").length - 1;
				currentImg = $("img").eq(i);
			}
			//decrease the display picture index by 1
			else {
				i = i - 1;
				//set current and previous images
				currentImg = $("img").eq(i);
				prevImg = $("img").eq(i + 1);
			}
			//call function to animate the rotation of the images to the left
			animateImage(prevImg, currentImg);
		});
		//function to animate the rotation of the images to the left
		function animateImageLeft(prevImg, currentImg) {
			console.log('animating left')
			//move the image to be displayed off the visible container to the right
			currentImg.css({ left: "100%" });
			//slide the image to be displayed from off the container onto the visible container to make it slide from the right to left
			currentImg.animate({ left: "0%" }, 1000);
			//slide the previous image off the container from right to left
			prevImg.animate({ left: "-100%" }, 1000);
		}
		//function to animate the rotation of the images to the right
		function animateImage(prevImg, currentImg) {
			console.log('animating right')
			//move the image to be displayed off the container to the left
			currentImg.css({ left: "-100%" });
			//slide the image to be displayed from off the container onto the container to make it slide from left to right
			currentImg.animate({ left: "0%" }, 1000);
			//slide the image from on the container to off the container to make it slide from left to right
			prevImg.animate({ left: "100%" }, 1000);
		}
}


$(function () {
	init();

});