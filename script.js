$(document).ready(function(){
	/* onload */
		onload()
		function onload() {
			if (!location.search || location.search.length == 0) {
				makeButtons()

				$("#score").text(100).hide()
				$("#table").hide()
				countdownTimer = 0
				yarnTimer = setInterval(gameLoop, 100)
			}
			else {
				startGame()
			}
		}

	/* makeButtons */
		function makeButtons() {
			var options = [
				{
					name: "Thomas",
					image: "https://img1.etsystatic.com/216/0/11013998/il_570xN.1326983031_3zue.jpg",
					search: "?start=true&item=cat&yarn=Lion%20Brand%20Homespun&mc=Spice&cc=White&cc_areas=catprofile_chin,catprofile_stomach,catface_chin,catprofile_tail&accent_color=green"
				},
				// {
				// 	name: "Olivia",
				// 	image: "https://img.etsystatic.com/il/b3a2fb/1279810886/il_570xN.1279810886_pufd.jpg",
				// 	search: "?start=true&item=cat&yarn=Lion%20Brand%20Homespun&mc=Clouds&cc=White&cc_areas=catprofile_chin,catprofile_stomach,catface_chin,catprofile_tail&accent_color=green"
				// },
				{
					name: "Claire",
					image: "https://img0.etsystatic.com/182/0/11013998/il_570xN.1279750322_kply.jpg",
					search: "?start=true&item=cat&yarn=Bernat%20Pipsqueak&mc=Lemon&cc=White&cc_areas=catprofile_chin,catprofile_stomach,catface_chin,catprofile_paw_front_right,catprofile_paw_back_right,catprofile_paw_front_left,catprofile_paw_back_left,catprofile_tail&accent_color=green"
				},
				{
					name: "Luca",
					image: "https://img0.etsystatic.com/193/1/11013998/il_570xN.1279722824_djsr.jpg",
					search: "?start=true&item=cat&yarn=Lion%20Brand%20Homespun&mc=Edwardian&cc=Clouds&cc_areas=catprofile_chin,catprofile_stomach,catface_chin,catprofile_tail&accent_color=yellow"
				},
				{
					name: "Amelia",
					image: "https://img0.etsystatic.com/205/0/11013998/il_570xN.1279819008_sfmd.jpg",
					search: "?start=true&item=cat&yarn=Lion%20Brand%20Homespun&mc=Clouds&cc=White&cc_areas=catprofile_ears,catface_ear_right,catface_ear_left,catprofile_chin,catprofile_stomach,catface_chin,catprofile_tail&accent_color=lightblue"
				}
			]

			var months = [
				{
					name: "Winter Cat",
					image: "mystery.png",
					search: "?start=true&item=cat&yarn=Bernat%20Pipsqueak&mc=Vanilla&cc=Baby%20Blue&cc_areas=catprofile_ears,catface_ear_right,catface_ear_left,catprofile_chin,catprofile_stomach,catface_chin,catprofile_paw_front_right,catprofile_paw_back_right,catprofile_paw_front_left,catprofile_paw_back_left,catprofile_tail&accent_color=blue"
				},
				{
					name: "Valentine Cat",
					image: "mystery.png",
					search: "?start=true&item=cat&yarn=Premier%20Parfait&mc=Cherry&cc=Meringue&cc_areas=catprofile_ears,catface_ear_right,catface_ear_left,catprofile_chin,catprofile_stomach,catface_chin,catprofile_paw_front_right,catprofile_paw_back_right,catprofile_paw_front_left,catprofile_paw_back_left,catprofile_tail&accent_color=purple"
				},
				{
					name: "Patrick the Cat",
					image: "mystery.png",
					search: "?start=true&item=cat&cc_areas=catprofile_chin,catprofile_stomach,catface_chin,catprofile_paw_front_right,catprofile_paw_back_right,catprofile_paw_front_left,catprofile_paw_back_left,catprofile_tail&accent_color=green&yarn=KnitPicks%20Comfy&mc=Jalapeno&cc=Peapod"
				},
				{
					name: "April Fool Cat",
					image: "mystery.png",
					search: "?start=true&item=cat&yarn=Premier%20Parfait&mc=Licorice&cc=Lemon%20Blueberry&cc_areas=catprofile_ears,catface_ear_right,catface_ear_left,catprofile_nose-area,catface_nose-area,catprofile_muzzle,catface_muzzle,catprofile_chin,catprofile_stomach,catface_chin,catprofile_paw_back_right,catprofile_paw_front_left,catprofile_tail&accent_color=purple"
				},
				{
					name: "Mom Cat",
					image: "mystery.png",
					search: "?start=true&item=cat&yarn=Lion%20Brand%20Homespun&mc=Plum&cc=Parfait&cc_areas=catprofile_ears,catface_ear_right,catface_ear_left,catprofile_chin,catprofile_stomach,catface_chin,catprofile_paw_front_right,catprofile_paw_front_left&accent_color=black"
				},
				{
					name: "Dad Cat",
					image: "mystery.png",
					search: "?start=true&item=cat&yarn=Caron%20Simply%20Soft&mc=Pagoda&cc=Woodland&cc_areas=catprofile_muzzle,catface_muzzle,catprofile_paw_front_right,catprofile_paw_front_left,catprofile_tail&accent_color=brown"
				},
				{
					name: "Independent Cat",
					image: "mystery.png",
					search: "?start=true&item=cat&yarn=KnitPicks%20Comfy&mc=Planetarium&cc=Rosehip&cc_areas=catprofile_ears,catface_ear_right,catface_ear_left,catprofile_muzzle,catface_muzzle,catprofile_chin,catprofile_stomach,catface_chin,catprofile_paw_front_right,catprofile_paw_back_right,catprofile_paw_front_left,catprofile_paw_back_left,catprofile_tail&accent_color=blue"
				},
				{
					name: "Summer Cat",
					image: "mystery.png",
					search: "?start=true&item=cat&yarn=Caron%20Simply%20Soft&mc=Pumpkin&cc=Sunshine&cc_areas=catprofile_ears,catface_ear_right,catface_ear_left,catprofile_nose-area,catface_nose-area,catprofile_muzzle,catface_muzzle,catprofile_chin,catprofile_stomach,catface_chin,catprofile_paw_front_right,catprofile_paw_back_right,catprofile_paw_front_left,catprofile_paw_back_left,catprofile_tail&accent_color=orange"
				},
				{
					name: "Peace Cat",
					image: "mystery.png",
					search: "?start=true&item=cat&yarn=Bernat%20Pipsqueak&mc=Sittin%20Pretty&cc=Baby%20Baby&cc_areas=catprofile_ears,catface_ear_right,catface_ear_left,catprofile_nose-area,catface_nose-area,catprofile_muzzle,catface_muzzle,catprofile_chin,catprofile_stomach,catface_chin,catprofile_paw_front_right,catprofile_paw_back_right,catprofile_paw_front_left,catprofile_paw_back_left,catprofile_tail&accent_color=blue"
				},
				{
					name: "Halloween Cat",
					image: "mystery.png",
					search: "?start=true&item=cat&yarn=Premier%20Parfait&mc=Black&cc=Candy%20Corn&cc_areas=catprofile_ears,catface_ear_right,catface_ear_left,catprofile_muzzle,catface_muzzle,catprofile_paw_front_right,catprofile_paw_back_right,catprofile_paw_front_left,catprofile_paw_back_left,catprofile_tail&accent_color=purple"
				},
				{
					name: "Thanksgiving Cat",
					image: "mystery.png",
					search: "?start=true&item=cat&yarn=Lion%20Brand%20Homespun&mc=Barley&cc=Golden&cc_areas=catprofile_nose-area,catface_nose-area,catprofile_muzzle,catface_muzzle,catprofile_chin,catprofile_stomach,catface_chin&accent_color=orange"
				},
				{
					name: "Holiday Cat",
					image: "mystery.png",
					search: "?start=true&item=cat&yarn=Lion%20Brand%20Homespun&mc=Forest&cc=White&cc_areas=catprofile_ears,catface_ear_right,catface_ear_left,catprofile_nose-area,catface_nose-area,catprofile_paw_front_right,catprofile_paw_back_right,catprofile_paw_front_left,catprofile_paw_back_left,catprofile_tail&accent_color=green"
				}
			]

			for (var i in options) {
				$("#options").append("<a href='" + options[i].search + "' id='" + options[i].name + "' style='background-image:url(" + options[i].image + ")'><label>" + options[i].name + "</label></a>")
			}

			var currentMonth = new Date().getMonth()			
			$("#options").append("<a href='" + months[currentMonth].search + "' id='" + months[currentMonth].name + "' style='background-image:url(" + months[currentMonth].image + ")'><label>" + months[currentMonth].name + "</label></a>")
		}
	
	/* start game (generate yarn, animate yarn and table) */
		function startGame() {
			styleCat()

			$(".yarnBall").remove()
			$("#table").css("bottom", "0px")
			$("#cat").css("left", "50%")
			$("#score").text("0")
			$("#options").hide()

			$("#table, #yarnZone, #score").animate({
				opacity: 1
			}, 2000)

			countdownTimer = 0
			yarnTimer = setInterval(gameLoop, 100)
		}

	/* get cat details from url */
		function styleCat() {
			var url = location.search
			
			if (url && url.length > 20) {
				url = url.replace("?", "")
				url = url.split("&")

				var get = {}
				for (var i = 0; i < url.length; i++) {
					var pair = url[i].split("=")

					var key = pair[0]
					var value = pair[1].replace(/\%20/g, " ")

					if (key == "cc_areas") {
						value = value.split(",")
					}

					get[key] = value
				}

				//step 0: get urls for mc and cc
					var mainColor = stash[ get.yarn ][ get.mc ]
					var contrastingColor = stash[ get.yarn ][ get.cc ]

				//step 1: color the main animal
					$("#catprofile").css("background-image", "url(" + mainColor + ")").show()

				//step 2: color the selected cc areas
					get.cc_areas.forEach(function(area) {
						$("#" + area).css("background-image", "url(" + contrastingColor + ")").show()
					})

				//step 3: color the eye
					$("#catprofile_eye").css("background-color", get.accent_color).show()

			}
			else {
				$("#catprofile").show()
			}
		}
	
	/* makeYarn */
		function makeYarn() {
			var tableRight = 600

			//create new yarn balls (1/11 times - when countdownTimer reaches 0)
				var yarnBalls_options = Object.keys(KnitPicks)

				var yarnRandom = Math.floor(Math.random() * yarnBalls_options.length)

				var yarnColor = KnitPicks[ yarnBalls_options[yarnRandom] ]

			// yarn ball random position
				var yarnLeft = Math.random() * (tableRight - 50)


			//alternate (sometimes)
				var yarnTailOptions = ["", "", "alternate", "alternate", "centered"]
				var alternateTail = Math.floor(Math.random() * yarnTailOptions.length)

			// add yarn balls to page
				$("#yarnZone").append("<div class='yarnBall' style='left:" + yarnLeft + "px; background-image:url(" + yarnColor + ")'><div class='yarnTail " + yarnTailOptions[alternateTail] + "' stringCycle='7' style='background-image:url(" + yarnColor + ")'></div></div>")	
		}

	/* moveYarn */
		function moveYarn(yarnBall, tableTop, catLeft, catRight) {
			//definitions
				var tableLeft = 0
				var tableRight = 600
				var pageBottom = $(window).height()

			// calculate yarnPosition (top, bottom, left, right)
				var yarnTop = Number($(yarnBall).css("top").replace("px", ""))
				var yarnBottom = yarnTop + 50
				var yarnLeft = Number($(yarnBall).css("left").replace("px", ""))
				var yarnRight = yarnLeft + 50
				var matrix = $(yarnBall).css("transform").replace("matrix(", "").replace(")", "").split(",")
				var yarnRotation = Math.round(Math.atan2(matrix[1], matrix[0]) * (180/Math.PI))
				var yarnStringCycle = Number($(yarnBall).find(".yarnTail").attr("stringCycle"))

			if ((yarnRight > tableLeft + 10) && (yarnLeft < tableRight - 10) && (yarnTop < pageBottom)) {
				// for yarn that's already on the table...
					if (yarnBottom == tableTop) {
						var newYarnBottom = yarnBottom
					}

				// for yarn that's still falling
					else if (yarnBottom + 20 >= tableTop) {
						var newYarnBottom = tableTop
						var newYarnLeft = yarnLeft
						var newRotation = yarnRotation
						$(yarnBall).addClass("onTable")
					}
					else {
						var newYarnBottom = yarnBottom + 20
						var newYarnLeft = yarnLeft
						var newRotation = yarnRotation
					}

				// for yarn that has the class .onTable
					if ( $(yarnBall).hasClass("onTable") ) {
						var frames = []
						var nextFrame = yarnRotation

						if ((yarnLeft > catRight - 60) && (yarnLeft < catRight - 20)) {
							var newYarnLeft = yarnLeft + 10
							
							while(frames.length < 8){
								nextFrame = nextFrame + 3
								frames.push(nextFrame)
							}
						}
						else if ((yarnRight > catLeft + 20) && (yarnRight < catLeft + 60)) {
							var newYarnLeft = yarnLeft - 10
							
							while(frames.length < 8){
								nextFrame = nextFrame - 3
								frames.push(nextFrame)
							}
						}
					}
			}
			
			
			// for yarn that's beyond the edge of the table (left or right)
			else {
				if (yarnTop > pageBottom) {
					$(yarnBall).remove()
					var score = Number($("#score").text())
					score = score + 1
					$("#score").text(score)
				}
				else {
					var newYarnBottom = yarnBottom + 20
					var newYarnLeft = yarnLeft
					var frames = [0,0,0,0,0,0,0,0]
					$(yarnBall).removeClass("onTable")
				}
			}

			// now, animate!
				$(yarnBall).animate({
					top: (newYarnBottom - 50) + "px",
					left: (newYarnLeft) + "px",
				}, 85, "linear")

				yarnStringCycle = yarnStringCycle - 1
				if (yarnStringCycle < 0) {
					yarnStringCycle = 7
				}
				$(yarnBall).find(".yarnTail").attr("stringCycle", yarnStringCycle)

				var rotateLoop = setInterval(function(){
					if (frames && frames.length > 0) {
						$(yarnBall).css("transform","rotate(" + frames[0] + "deg)")
						frames.shift()
					}

					else {
						clearInterval(rotateLoop)
					}
				}, 10)
				
		}

	/* moveTable */
		function moveTable() {

			var pageBottom = $(window).height()
			var tableTop = Number($("#table").css("top").replace("px", ""))

			var yarnNumber = $(".onTable").toArray().length
			var tableTarget = -10 * yarnNumber + 200
			var tableHeight = Math.ceil(pageBottom - tableTop)

			if (tableTarget < tableHeight) { //movin' down
				$("#table").stop()
				$("#table").animate({
					bottom: "-=2px"
				}, 85, "linear")
			}
			else if (tableTarget > tableHeight) { //movin' up
				$("#table").stop()
				$("#table").animate({
					bottom: "+=2px"
				}, 85, "linear")
			}

			else if (tableHeight <= 0) { //movin' on outta here
				//game end!!!
				endGame()
			}
		}

	/* gameLoop */
		function gameLoop() {
			/* makeYarn (yes/no) */
				var yarnCount = $(".yarnBall").toArray().length
				if ((countdownTimer == 0) && (yarnCount < 30)) {
					makeYarn()

					// reset countdownTimer
					var score = Number($("#score").text())
					countdownTimer = Math.max(Math.floor(-1 * score + 50), 5)
				}
				else {
					// the other 10/11 times when it does nothing
					countdownTimer = countdownTimer - 1
				}

			/* moveYarn */
				// calculate tableTop
					var tableTop = Number($("#table").css("top").replace("px", ""))

				// calculate catLeft, catRight
					var catLeft = Number($("#cat").css("left").replace("px", "")) - 100
					var catRight = catLeft + 200

					$(".yarnBall").each(function(){
						moveYarn($(this), tableTop, catLeft, catRight)
					})

			/* moveTable */
				moveTable()
		}

	/* move cat left/right (keyboard) */
		$(document).on('keydown', function(event) {
			var key = event.keyCode

			if (key == 37) {
				moveLeft()
			}

			else if (key == 39) {
				moveRight()
			}
		})

	/* move cat (click) */
		$(document).on("mousedown touchstart", function(event) {
			clickHold = event.clientX || event.originalEvent.targetTouches[0].clientX
		})

		$(document).on("mouseup touchend", function() {
			clickHold = false
		})

		moveCatClick = setInterval(function() {
			if (typeof clickHold !== "undefined" && clickHold > 0) {
				var windowWidth = $(window).width()

				if (clickHold < (windowWidth / 2)) {
					moveLeft()
				}

				else {
					moveRight()
				}
			}
		}, 100)

	/* moveLeft */
		function moveLeft() {

			var catLeft = $("#cat").css("left")
			catLeft = catLeft.replace("px", "")
			catLeft = Number(catLeft)

			var tableLeft = 0

			var newLeft = catLeft - 10
			if (newLeft - 100 < tableLeft - 20) {
				newLeft = 100 - 20						// because catLeft actually = the middle of the cat (50px)
			}

			$("#cat").animate({
				left: newLeft + "px"
			}, 50)

			$("#cat div").removeClass("flipCat")
		}

	/* moveRight */
		function moveRight() {

			var catLeft = $("#cat").css("left")
			catLeft = catLeft.replace("px", "")
			catLeft = Number(catLeft)

			var catRight = catLeft + 200
			var tableRight = 600

			var newRight = catRight + 10
			if (newRight - 100 > tableRight + 20) {
				newRight = tableRight + 100 + 20
			}

			$("#cat").animate({
				left: (newRight - 200) + "px"
			}, 50)

			$("#cat div").addClass("flipCat")
		}

	/* endGame */
		function endGame() {
			clearInterval(yarnTimer)

			$("#table, #yarnZone, #score").animate({
				opacity: 0
			}, 2000)

			$("#gameOver").show().animate({
				opacity: 1
			}, 2000)
		}
		
})
