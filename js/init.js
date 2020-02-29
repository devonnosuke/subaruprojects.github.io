$(document).ready(function(){
	$(".button-collapse").sideNav();
	$(".slider").slider({
		indicators:false,
		height:500,
		transition: 600,
		interval:3500
	});
	$(".slider img").css('filter', 'brightness(85%)');
	$('.parallax').parallax();
	$('.scrollspy').scrollSpy({
		scrollOffset:50
	});
	 $(".button-collapse").sideNav();

	$('.mobile').click(function(event) {
		$('.button-collapse').sideNav('hide');
	});

	var options = [
      {selector: '#staggered-test', offset: 800, callback: function(el) {
        Materialize.showStaggeredList($(el));
      } }
    ];
    Materialize.scrollFire(options);
});