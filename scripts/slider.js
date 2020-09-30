
const defaults = {
	item: 3,
	autoWidth: false,
	slideMove: 1,
	slideMargin: 10,
	addClass: "",
	mode: "slide",
	useCSS: true,
	cssEasing: "ease", //'cubic-bezier(0.25, 0, 0.25, 1)',
	easing: "linear", //'for jquery animation',//
	speed: 400, //ms'
	auto: false,
	pauseOnHover: false,
	loop: false,
	slideEndAnimation: true,
	pause: 2000,
	keyPress: false,
	controls: true,
	prevHtml: "",
	nextHtml: "",
	rtl: false,
	adaptiveHeight: false,
	vertical: false,
	verticalHeight: 500,
	vThumbWidth: 100,
	thumbItem: 10,
	pager: true,
	gallery: false,
	galleryMargin: 5,
	thumbMargin: 5,
	currentPagerPosition: "middle",
	enableTouch: true,
	enableDrag: true,
	freeMove: true,
	swipeThreshold: 40,
	responsive: [],
};

$.fn.lightSlider = function (options) {
let plugin = {},
settings = $.extend(true, {}, defaults, options),
settingsTemp = {},
$el = this;
plugin.$el = this;
plugin = {

	enableDrag: function () {
			var $this = this;
			if (!isTouch) {
					var startCoords = 0,
							endCoords = 0,
							isDraging = false;
					$slide.find('.lightSlider').addClass('lsGrab');
					$slide.on('mousedown', function (e) {
							if (w < elSize) {
									if (w !== 0) {
											return false;
									}
							}
							if ($(e.target).attr('class') !== ('lSPrev') && $(e.target).attr('class') !== ('lSNext')) {
									startCoords = (settings.vertical === true) ? e.pageY : e.pageX;
									isDraging = true;
									if (e.preventDefault) {
											e.preventDefault();
									} else {
											e.returnValue = false;
									}
									// ** Fix for webkit cursor issue https://code.google.com/p/chromium/issues/detail?id=26723
									$slide.scrollLeft += 1;
									$slide.scrollLeft -= 1;
									// *
									$slide.find('.lightSlider').removeClass('lsGrab').addClass('lsGrabbing');
									clearInterval(interval);
							}
					});
					$(window).on('mousemove', function (e) {
							if (isDraging) {
									endCoords = (settings.vertical === true) ? e.pageY : e.pageX;
									$this.touchMove(endCoords, startCoords);
							}
					});
					$(window).on('mouseup', function (e) {
							if (isDraging) {
									$slide.find('.lightSlider').removeClass('lsGrabbing').addClass('lsGrab');
									isDraging = false;
									endCoords = (settings.vertical === true) ? e.pageY : e.pageX;
									var distance = endCoords - startCoords;
									if (Math.abs(distance) >= settings.swipeThreshold) {
											$(window).on('click.ls', function (e) {
													if (e.preventDefault) {
															e.preventDefault();
													} else {
															e.returnValue = false;
													}
													e.stopImmediatePropagation();
													e.stopPropagation();
													$(window).off('click.ls');
											});
									}

									$this.touchEnd(distance);

							}
					});
			}
	},

	enableTouch: function () {
			var $this = this;
			if (isTouch) {
					var startCoords = {},
							endCoords = {};
					$slide.on('touchstart', function (e) {
							endCoords = e.originalEvent.targetTouches[0];
							startCoords.pageX = e.originalEvent.targetTouches[0].pageX;
							startCoords.pageY = e.originalEvent.targetTouches[0].pageY;
							clearInterval(interval);
					});
					$slide.on('touchmove', function (e) {
							if (w < elSize) {
									if (w !== 0) {
											return false;
									}
							}
							var orig = e.originalEvent;
							endCoords = orig.targetTouches[0];
							var xMovement = Math.abs(endCoords.pageX - startCoords.pageX);
							var yMovement = Math.abs(endCoords.pageY - startCoords.pageY);
							if (settings.vertical === true) {
									if ((yMovement * 3) > xMovement) {
											e.preventDefault();
									}
									$this.touchMove(endCoords.pageY, startCoords.pageY);
							} else {
									if ((xMovement * 3) > yMovement) {
											e.preventDefault();
									}
									$this.touchMove(endCoords.pageX, startCoords.pageX);
							}

					});
					$slide.on('touchend', function () {
							if (w < elSize) {
									if (w !== 0) {
											return false;
									}
							}
							var distance;
							if (settings.vertical === true) {
									distance = endCoords.pageY - startCoords.pageY;
							} else {
									distance = endCoords.pageX - startCoords.pageX;
							}
							$this.touchEnd(distance);
					});
			}
	}

)};				
