var Website = {
	run: function(){
		//
		$('.flexslider').flexslider({ animation: "fade" });
		$('.middle-img a').each(function(){
			$(this).css({ 'width':$(this).parent().width(),'height':$(this).parent().height() });
		})
		$('.product-name').each(function(){
			$(this).css({ 'width':$(this).parent().width() });
		})
		$(window).resize(function(){
			$('.middle-img a').each(function(){
				$(this).css({ 'width':$(this).parent().width(),'height':$(this).parent().height() });
			})
			$('.product-name').each(function(){
				$(this).css({ 'width':$(this).parent().width() });
			})
		});
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) $('#goTop').fadeIn();
			else $('#goTop').fadeOut();
		});
		$('#goTop').click(function () {
			$('body,html').animate({ scrollTop: 0 }, 'slow');
		});
		$('.fanpagef .fb-like-box').attr('data-width',$('.fanpagef').width()-1);
		//
	}
};


//Initialize
$(document).ready(function(){
	Website.run();
});