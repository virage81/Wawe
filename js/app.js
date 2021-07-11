$(function () {
	//mixer category helper
	var mixer = mixitup('.portfolio__content', {
		animation: {
			duration: 500,
			effectsIn: 'fade translateX(-100px)',
			effectsOut: 'fade translateY(-150px)',
		},
	});

	//slick
	$('.slider__inner').slick({
		dots: true,
		arrows: false,
		speed: 800,
		autoplay: true,
		autoplaySpeed: 1500,
		Infinite: true,
	});

	//header menu < 968px
	let menuBtn = $('.menu__btn'),
		menuBtnC = $('.menu__list-btn'),
		list = $('.menu__list');

	list.removeClass('menu__list--active');

	menuBtn.on('click', function () {
		list.addClass('menu__list--active');
		menuBtn.css('display', 'none');
	});

	menuBtnC.on('click', function () {
		list.removeClass('menu__list--active');
		menuBtn.css('display', 'block');
	});

	$('.menu a, .logo').on('click', function (event) {
		event.preventDefault();

		var id = $(this).attr('href'),
			top = $(id).offset().top;

		$('body,html').animate({ scrollTop: top }, 1000);
	});

	$(window).scroll(function () {
		let header = $('.header__top');

		if (scrollY > window.innerHeight) {
			header.addClass('fixed');
		} else header.removeClass('fixed');
	});
});
