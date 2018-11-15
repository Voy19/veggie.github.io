jQuery(document).ready(function ($) {
	var owl = $('.owl-main').owlCarousel({
		loop: true,
		margin: 60,
		nav: true,
		dotsContainer: '.menu_carte',
		autoplay: true,
		autoplayTimeout: 5000,
		smartSpeed: 1000,
		center: true,
		items: 1,
	});

	$('.menu_carte .item').click(function () {
		var index_th = $(this).index();
		owl.trigger('to.owl.carousel', [index_th, 400]);
	});

});