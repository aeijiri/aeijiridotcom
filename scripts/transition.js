// $(document).ready(function () {
// 	$('.drop-it').on("click", function () {
// 		$('.top').toggleClass('active');
// 		$('.top').addClass('hide');
// 		$('.loader').addClass('from_left');
// 		setTimeout(function () {
// 			$('.middle').addClass('active');
// 		}, 500);
// 	});
// });



const pjax = new Pjax({
        selectors: ["title", "main"],
        switches: {
            "main": Pjax.switches.outerHTML,
            "main": Pjax.switches.sideBySide
        },
        switchesOptions: {
            "main": {
                classNames: {
                    remove: "old-element-animation-class",
                    add: "new-element-animation-class",
                    backward: "back-animation-class",
                    forward: "forward-animation-class"
                },
                callbacks: {
                    removeElement: function() {
                        // or do ur animation w js here
                    }
                }
            }
        }
    })
