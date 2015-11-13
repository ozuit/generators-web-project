$(document).ready(function() {
			
			//blocksit define
			$(window).load( function() {
				$('#containers').BlocksIt({ numOfCol: 3, offsetX: 8, offsetY: 8 });
				$('#containers1').BlocksIt({ numOfCol: 3, offsetX: 8, offsetY:  8});
			});
			
			//window resize
			var currentWidth = $('.contents').width();
			$(window).resize(function() {
				var winWidth = conWidth = $(window).width();
				if(winWidth < 480) {
					col = 1
				}else if(winWidth < 660) {
					col = 2
				}else if(winWidth < 880) {
					col = 3
				}else if(winWidth < 991) {
					col = 3
				
				}else if(winWidth < 1100) {
					col = 3;
				}else {
					col = 3;
				}
				
				if(conWidth != currentWidth) {
					currentWidth = conWidth;
					$('#containers').BlocksIt({ numOfCol: col, offsetX: 8, offsetY: 8 });
					$('#containers1').BlocksIt({ numOfCol: col, offsetX: 8, offsetY: 8 });
				}
			});
		});