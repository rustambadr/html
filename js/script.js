$(document).ready(function(event) {
	$('#slider1').on('init', function(event, slick) {
		if( $(window).width() > 992 ) {
			let marginRight = $('header .container:eq(0)').css('margin-right');
			$(this).find('.slick-dots').css('right', marginRight);
		}
		$(this).find('.slick-dots button').each(function() {
			let val = parseInt($(this).text());
			if (val < 10) $(this).html('0' + val);
		});
	}).slick({
		infinite: false,
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
	});
	$('#slider2').slick({
		infinite: false,
		dots: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
	    {
	      breakpoint: 992,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2,
	      }
	    },
	    {
	      breakpoint: 576,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    },
	  ]
	});
	$('#slider3').on('init', function(event, slick) {
		// let marginRight = $('header .container:eq(0)').css('margin-right');
		// $(this).find('.slick-dots').css('right', marginRight);
		// $(this).find('.slick-dots button').each(function(){
		//   let val = parseInt($(this).text());
		//   if( val < 10 )
		//     $(this).html('0' + val);
		// });
	}).slick({
		infinite: false,
		dots: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
	    {
	      breakpoint: 992,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2,
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 1,
					slidesToScroll: 1,
	      }
	    },
	  ]
	}).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
		// $('#slider1').slick('slickGoTo', nextSlide);
	});

	$('#slider4').on('init', function(event, slick) {
		let currentSlide = slick.currentSlide;
		let slidesToShow = slick.options.slidesToShow;
		let slidesToScroll = slick.options.slidesToScroll;
		let firstSlide = currentSlide + 2;
		let preSlide = currentSlide + 1;
		let postSlide = currentSlide + 3;
		if( slidesToShow == 3 ) {
			firstSlide -= 1;
			preSlide -= 1;
			postSlide -= 1;
		}
		else if( slidesToShow == 1 ) {
			firstSlide -= 2;
			preSlide -= 2;
			postSlide -= 2;
		}

		$(this).find('.person[data-slick-index="' + preSlide + '"]').addClass('second');//.find('.setting').css('width', $(this).find('.person[data-slick-index="' + preSlide + '"]').width() * 0.74).css('height', 'unset');
		$(this).find('.person[data-slick-index="' + firstSlide + '"]').addClass('first');//.find('.setting').css('width', 'unset').css('height', 'unset');
		$(this).find('.person[data-slick-index="' + postSlide + '"]').addClass('third');//.find('.setting').css('width', $(this).find('.person[data-slick-index="' + postSlide + '"]').width() * 0.74).css('height', 'unset');
    //
    $(this).find('.person').click(function(event){
      let val = parseInt($(this).attr('data-slick-index')) - 2;
      $('#slider4').slick('slickGoTo', val);
    });
	}).slick({
		infinite: true,
		dots: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		responsive: [
	    {
	      breakpoint: 1200,
	      settings: {
	        slidesToShow: 3,
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 1,
	      }
	    },
	  ]
	}).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
		$(this).find('.person').removeClass('second');
		$(this).find('.person').removeClass('first');
		$(this).find('.person').removeClass('third');
		let currentSlide_ = nextSlide;
		let slidesToShow = slick.options.slidesToShow;
    let firstSlide = currentSlide_ + 2;
		let preSlide = currentSlide_ + 1;
		let postSlide = currentSlide_ + 3;
		if( slidesToShow == 3 ) {
			firstSlide -= 1;
			preSlide -= 1;
			postSlide -= 1;
		}
		else if( slidesToShow == 1 ) {
			firstSlide -= 2;
			preSlide -= 2;
			postSlide -= 2;
		}

		$(this).find('.person[data-slick-index="' + preSlide + '"]').addClass('second');
		$(this).find('.person[data-slick-index="' + firstSlide + '"]').addClass('first');
		$(this).find('.person[data-slick-index="' + postSlide + '"]').addClass('third');
	});
	$(window).on('resize', function() {
		if( $(this).width() <= 992 )
			return;
		let marginRight = $('header .container:eq(0)').css('margin-right');
		$('#slider1 .slick-dots').css('right', marginRight);
	});
	$('.mobile-button').click(function(event){
		event.preventDefault();
		$('.bottom-mobile').show();
	});
	$('.mobile-button').click(function(event){
		event.preventDefault();
		$('.bottom-mobile').show();
	});
	$('.mobile-button-close').click(function(event){
		event.preventDefault();
		$('.bottom-mobile').hide();
	});

	if ($(window).width() < 992) {
		$('body section.prepare-article .group .block .b-title').click(function(){
			$(this).closest('.block').toggleClass('active');
			showGroup();
		});
		function showGroup() {
			$('.prepare-article .group .block').each(function(){
				if( $(this).hasClass('active') == false && $(this).find('.b-title').length ) {
					$(this).find('.text').hide();
					$(this).find('.p-text').hide();
				}
				else {
					$(this).find('.text').show();
					$(this).find('.p-text').show();
				}
			});
		}
		showGroup();
	}
	if ($(window).width() < 992) {
		$('body section.dominate .container .info:not(.full) .head').click(function(){
			$(this).closest('.info').toggleClass('active');
			showGroup2();
		});
		function showGroup2() {
			$('body section.dominate .container .info:not(.full)').each(function(){
				if( $(this).hasClass('active') == false ) {
					$(this).find('.body').hide();
				}
				else {
					$(this).find('.body').show();
				}
			});
		}
		showGroup2();
	}
	// $(document).on('click', '.group-list .item', function() {
	// 	$(this).closest('.group-list').find('.item').not(this).removeClass('active');
	// 	if ($(this).hasClass('active')) $(this).removeClass('active');
	// 	else $(this).addClass('active');
	// });

	$('#callme form').submit(function(event){
    event.preventDefault();
    $.post( "/send.php", $(this).serialize());
    $(this).find('.modal-body').html('<p>Сообщение отправлено.</p>');
    $('.btn-primary').remove();
  });
})
