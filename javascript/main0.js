(function ($) {
//fonction scroll//
$('a[href^="#"]').click(function(){
	var the_id = $(this).attr("href");

	$('html, body').animate({
		scrollTop:$(the_id).offset().top
	}, 'slow');
	return false;
});

$('.bas').click(function(){
	$('html, body').animate({
		scrollTop:$(".bas").offset().top
	}, 'slow');

});
})(jQuery);



