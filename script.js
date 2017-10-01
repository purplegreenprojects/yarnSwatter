$(document).ready(function(){

	/* move cat left/right */
		$(document).on('keydown', function(event) {
			var key = event.keyCode

			if (key == 37 || key == 39) {
				var catLeft = $("#cat").css("left")
				catLeft = catLeft.replace("px", "")
				catLeft = Number(catLeft)

				var catRight = catLeft + 200

				var tableLeft = 0
				var tableRight = 600

			// left
				if (key == 37) {
					var newLeft = catLeft - 10
					if (newLeft - 100 < tableLeft) {
						newLeft = 100						// because catLeft actually = the middle of the cat (50px)
					}

					$("#cat").animate({
						left: newLeft + "px"
					}, 50)

					$("#catprofile").removeClass("flipCat")
				}

			// right
				else if (key == 39) {
					var newRight = catRight + 10
					if (newRight - 100 > tableRight) {
						newRight = tableRight + 100
					}

					$("#cat").animate({
						left: (newRight - 200) + "px"
					}, 50)

					$("#catprofile").addClass("flipCat")
				}

				
			}
		})

	/* start game (generate yarn, animate yarn and table) */
		function startGame() {
			$(".yarnBall").remove()
			$("#table").css("bottom", "0px")
			$("#cat").css("left", "50%")
			$("#score").text("0")

			$("#table, #yarnZone, #score").animate({
				opacity: 1
			}, 2000)

			$("#reset").animate({
				opacity: 0
			}, 2000).css("pointer-events", "none")

			var countdownTimer = 0
			var yarnTimer = setInterval(function(){

				/* for future reference, all the time */
					var tableLeft = 0
					var tableRight = 600
					var pageBottom = $(window).height()
					
					var yarnCount = $(".yarnBall").toArray().length

				if ((countdownTimer == 0) && (yarnCount < 25)) {
				//create new yarn balls (1/11 times - when countdownTimer reaches 0)
					//yarn ball random color
						//var yarnBalls_options = ["blue", "green", "red", "purple", "yellow", "orange", "pink"]

						var yarnBalls_options = Object.keys(KnitPicks)

						var yarnRandom = Math.floor(Math.random() * yarnBalls_options.length)

						var yarnColor = KnitPicks[ yarnBalls_options[yarnRandom] ]

					// yarn ball random position
						var yarnLeft = Math.random() * (tableRight - 50)

					// add yarn balls to page
						$("#yarnZone").append("<div class='yarnBall' style='left:" + yarnLeft + "px; background-image:url(" + yarnColor + ")'></div>")	
					
					// reset countdownTimer
						var score = Number($("#score").text())
						countdownTimer = Math.max(Math.floor(-1 * score + 50), 10)
				}
				else {
					// the other 10/11 times when it does nothing
					countdownTimer = countdownTimer - 1
				}


				// make it rain! and/or move them
					// calculate tableTop
						var tableTop = Number($("#table").css("top").replace("px", ""))

					// calculate catLeft, catRight

						var catLeft = Number($("#cat").css("left").replace("px", "")) - 100
						var catRight = catLeft + 200

						$(".yarnBall").each(function(){

							// calculate yarnPosition (top, bottom, left, right)
								var yarnTop = Number($(this).css("top").replace("px", ""))
								var yarnBottom = yarnTop + 50
								var yarnLeft = Number($(this).css("left").replace("px", ""))
								var yarnRight = yarnLeft + 50
							
							if ((yarnRight > tableLeft) && (yarnLeft < tableRight)) {
								// for yarn that's already on the table...
									if (yarnBottom == tableTop) {
										var newYarnBottom = yarnBottom

										if ((yarnLeft > catRight - 40) && (yarnLeft < catRight)) {
											var newYarnLeft = yarnLeft + 10
										}
										else if ((yarnRight > catLeft) && (yarnRight < catLeft + 40)) {
											var newYarnLeft = yarnLeft - 10
										}
									}

								// for yarn that's still falling
									else if (yarnBottom + 20 >= tableTop) {
										var newYarnBottom = tableTop
										var newYarnLeft = yarnLeft
										$(this).addClass("onTable")
									}
									else {
										var newYarnBottom = yarnBottom + 20
										var newYarnLeft = yarnLeft
									}
							}
							
							// for yarn that's beyond the edge of the table (left or right)
							else {
								if (yarnTop > pageBottom) {
									$(this).remove()
									var score = Number($("#score").text())
									score = score + 1
									$("#score").text(score)
								}
								else {
									var newYarnBottom = yarnBottom + 20
									var newYarnLeft = yarnLeft
									$(this).removeClass("onTable")
								}
							}	

							// now, animate!
								$(this).animate({
									top: (newYarnBottom - 50) + "px",
									left: (newYarnLeft) + "px"
								}, 85, "linear")

						})

				//table movin' time
					var yarnNumber = $(".onTable").toArray().length
					var tableTarget = -10 * yarnNumber + 200
					var tableHeight = Math.ceil(pageBottom - tableTop)

					if (tableTarget < tableHeight) { //movin' down
						$("#table").animate({
							bottom: "-=2px"
						}, 85, "linear")
					}
					else if (tableTarget > tableHeight) { //movin' up
						$("#table").animate({
							bottom: "+=2px"
						}, 85, "linear")
					}

					else if (tableHeight <= 0) { //movin' on outta here
						//game end!!!
						clearInterval(yarnTimer)

						$("#table, #yarnZone, #score").animate({
							opacity: 0
						}, 2000)

						$("#reset").animate({
							opacity: 1
						}, 2000).css("pointer-events", "all")
					}

			}, 100)
		}

	/* reset button */
		$("#reset").on("click", function(){
			startGame()
		})

	/* on load */
		startGame()
		test()
		console.log(KnitPicks["Blackberry"])
})


// x = 1

// x = x + 1
// x = x++
// x += 1