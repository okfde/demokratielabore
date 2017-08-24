$(document).ready(function(){
	$('.project-slider').slick({
		slidesToShow: 2,
		slidesToScroll: 2,
		// dots: true,
		// dotsClass: 'project-dots'
	});

	$(this).find('.slick-slide').height('auto');
	var slickTrack = $(this).find('.slick-track');
	var slickTrackHeight = $(slickTrack).height();
	$(this).find('.slick-slide').css('height', slickTrackHeight + 'px');

	$(window).load(function() {
		$('.project-slider').on('setPosition', function () {
			$(this).find('.slick-slide').height('auto');
			var slickTrack = $(this).find('.slick-track');
			var slickTrackHeight = $(slickTrack).height();
			$(this).find('.slick-slide').css('height', slickTrackHeight + 'px');
		});
	})
});