$(document).ready(function(){

	$(document).on('keydown', function(event) {
		var key = event.keyCode

		if (key == 37 || key == 39) {
			var catLeft = $("#cat").css("left")
			catLeft = catLeft.replace("px", "")
			catLeft = Number(catLeft)

			var catRight = catLeft + 100

			var windowWidth = $(window).width()

			var tableLeft = 0

			var tableRight = windowWidth * 0.7


		// left
			if (key == 37) {
				var newLeft = catLeft - 10
				if (newLeft - 50 < tableLeft) {
					newLeft = tableLeft
				}
			}

		// right
			else if (key == 39) {
				var newRight = catRight + 10
				if (newRight - 50 > tableRight) {
					newRight = tableRight + 50
				}
			}

			$("#cat").animate({
				left: (newLeft || (newRight - 100)) + "px"
			}, 50)
		}
	})
})

// x = 1

// x = x + 1
// x = x++
// x += 1