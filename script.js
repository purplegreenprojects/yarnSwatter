$(document).ready(function(){

	/* move cat left/right */
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

	/* generate yarn balls */
		
		var yarnTimer = setInterval(function(){
			
			//yarn ball random color
				var yarnBalls_options = ["blue", "green", "red", "purple", "yellow", "orange", "pink"]

				var yarnRandom = Math.floor(Math.random() * yarnBalls_options.length)

				var yarnColor = yarnBalls_options[yarnRandom]

			// yarn ball random position
				var windowWidth = $(window).width()

				var tableLeft = 0

				var tableRight = windowWidth * 0.7

				var yarnLeft = Math.random() * (tableRight - 50)

			// add yarn balls to page

				$("#yarnZone").append("<div class='yarnBall' style='left:" + yarnLeft + "px; background-color:" + yarnColor + "'>yarn</div>")

			// make it rain!
				var tableTop = Number($("#table").css("top").replace("px", ""))
				console.log(tableTop)

				$(".yarnBall").each(function(){
					var yarnTop = Number($(this).css("top").replace("px", ""))
					var yarnBottom = yarnTop + 50
					if (yarnBottom + 80 > tableTop) {
						console.log("case1")
						var newYarnBottom = tableTop
					}
					else {
						console.log("case2")
						var newYarnBottom = yarnBottom + 80
					}

					$(this).animate({
						top: (newYarnBottom - 50) + "px"
					}, 995, "linear")
				})

		}, 1000)
		

})

// x = 1

// x = x + 1
// x = x++
// x += 1