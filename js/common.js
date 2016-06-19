
$(function() {

	document.getElementById('svg-icons').innerHTML = SVG_ICONS;

	// анимация мобильного меню
	$(".js-nav-ctrl").on('click', function(e) {
	    e.preventDefault();
	    var self = $(this),
	        target = $('.' + self.data('nav'));

	    self.toggleClass('is-open');
	    target.toggleClass('is-open');
	});

	// кастомные селекты
	$('.js-select').customSelect();
});



function goToElement () {

	var animationAllow = 'is-animate';
	var openState = 'is-open';
	var nav = $('.js-nav');
	var navControl = $('.js-nav__control');
	var navPhone = $('.js-nav__phone');
	var navH = 40;

	$(".js-goto").click(function(e) {

		nav.removeClass(animationAllow + ' ' + openState);
		navControl.removeClass(animationAllow + ' ' + openState);
		navPhone.removeClass(openState);
		$('body').removeClass(openState);

		var self = $(this),
			targetClass = self.data('goto');
		    target = $(targetClass);

		var speed = 1000;

		 e.preventDefault();


	    $('html, body').stop().animate({
	        scrollTop: target.offset().top - (navH + 10)
	        
	    }, speed, 'easeInOutCubic');
	});

} // goToElement

