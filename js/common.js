
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

	// инициализация плагина для адаптивных таблиц
	$('.table_responsive').cardtable();

	animateNavigation();

});



function animateNavigation() {

	// анимация родительских пунктов меню
	var parentItem = $(".main-nav__i_parent");
	var parentItemCtrl = $(".main-nav__i_parent .main-nav__a");

	parentItemCtrl.on('click', function(e) {
	    e.preventDefault();

	    $('.main-nav__i').removeClass('main-nav__i_open');

	    var self = $(this),
	        target = $('.' + self.data('nav'));

	    self.parent().toggleClass('main-nav__i_open');

	});

	$(document).click(function(e){
	    if ($(e.target).parents().andSelf().filter('.main-nav__i').length != 1) {
	        parentItem.removeClass('main-nav__i_open');
	    }
	});


} // animateNavigation

