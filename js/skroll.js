
$(function(){
 
	$(window).scroll(function() {
		if ($(window).scrollTop() > 100) {
			$('.skrolltop').addClass('show');
		} else {
			$('.skrolltop').removeClass('show');
		}
	});
 
	$('.skrolltopn').click(function() {
		$('body').animate({scrollTop: 0}, 400, 'linear');
	});
});