$(function() {
	// responsive menu
	$('.btn-menu').on('click', function(e) {
 	 e.preventDefault();
 	 	$('.times').slideToggle(0);
 	 	$('.bars').slideToggle(0);
 	 	$('.item-menu').slideToggle(300);
	});

	$(".ul-class a").click(function(){
        $(".item-menu").hide(0);
    });

	// scroll top
    var $btnTop = $(".btn-top")
	$(window).on("scroll", function(){
		if ($(window).scrollTop() >20){
			$btnTop.fadeIn();
		}else{
			$btnTop.fadeOut();
		}
	});

	$btnTop.on("click", function(){
		$("html,body").animate({scrollTop:0}, 800)
	});

	// magnific popup
	$('.item-img-s a').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});
	// feedback 
    $('#feedback').on('click', function() {

	if ($('.popup').css('display', 'none')) {
	    $('.popup').css('display','block');
	} else {
	    $('.popup').css('display','none');

	}
  });
    // close
   $('#btn-hide').on('click', function() {

	if ($('.popup').css('display', 'block')) {
	    $('.popup').css('display','none');
	} else {
	    $('.popup').css('display','block');

	}
  });
   // faq
   $('#faq').on('click', function() {

	if ($('.popup-faq').css('display', 'none')) {
	    $('.popup-faq').css('display','block');
	} else {
	    $('.popup-faq').css('display','none');

	}
  });
   // faq close
   $('#close-faq').on('click', function() {

	if ($('.popup-faq').css('display', 'block')) {
	    $('.popup-faq').css('display','none');
	} else {
	    $('.popup-faq').css('display','block');

	}
  });
   // tabs
   $('#str-1 strong').on('click', function() {
   		 $('#str-1 span').slideToggle(0);
   });

   $('#str-2 strong').on('click', function() {
   		 $('#str-2 span').slideToggle(0);
   });


   $('#str-3 strong').on('click', function() {
   		 $('#str-3 span').slideToggle(0);
   });


   $('#str-4 strong').on('click', function() {
   		 $('#str-4 span').slideToggle(0);
   });

    $('#strong-slow-1').on('click', function() {
   		 $('#strong-slow-1 div').slideToggle(0);
   });

   $('#strong-slow-2').on('click', function() {
   		 $('#strong-slow-2 div').slideToggle(0);
   });


   $('#strong-slow-3').on('click', function() {
   		 $('#strong-slow-3 div').slideToggle(0);
   });


   $('#strong-slow-4').on('click', function() {
   		 $('#strong-slow-4 div').slideToggle(0);
   });


   // thanks modal
   $('#send').on('click', function() {
  	$('.popup').hide();
	if ($('.ss').css('display', 'none')) {

		$(".ss").show('slow');
		setTimeout(function() { $(".ss").hide('slow'); }, 4200);
	} else {
	    $('.ss').css('display','none');

	}
  });

  $('#send-form').on('click', function() {
  	$('.wrapper-form').hide();
	if ($('order-wrapper').css('display', 'none')) {

		$(".order-wrapper").show('slow');
		setTimeout(function() { $(".order-wrapper").hide('slow'); }, 4200);
	} else {
	    $('.order-wrapper').css('display','none');

	}
  });

   
   $('.btn-order-1').on('click', function() {

	if ($('.wrapper-form').css('display', 'none')) {
	    $('.wrapper-form').css('display','block');
	} else {
	    $('.wrapper-form').css('display','none');

	}
  });

  $('.close').on('click', function() {

	if ($('.wrapper-form').css('display', 'block')) {
	    $('.wrapper-form').css('display','none');
	} else {
	    $('.wrapper-form').css('display','block');

	}
  });


   $('#send-form').on('click', function() {
  	$('.wrapper-form').hide();
	if ($('order-wrapper').css('display', 'none')) {

		$(".order-wrapper").show('slow');
		setTimeout(function() { $(".order-wrapper").hide('slow'); }, 4200);
	} else {
	    $('.order-wrapper').css('display','none');

	}
  });


   $('.btn-order-2').on('click', function() {

	if ($('.wrapper-form').css('display', 'none')) {
	    $('.wrapper-form').css('display','block');
	} else {
	    $('.wrapper-form').css('display','none');

	}
  });

  $('.close').on('click', function() {

	if ($('.wrapper-form').css('display', 'block')) {
	    $('.wrapper-form').css('display','none');
	} else {
	    $('.wrapper-form').css('display','block');

	}
  });

  $('#send-form').on('click', function() {
  	$('.wrapper-form').hide();
	if ($('order-wrapper').css('display', 'none')) {

		$(".order-wrapper").show('slow');
		setTimeout(function() { $(".order-wrapper").hide('slow'); }, 4200);
	} else {
	    $('.order-wrapper').css('display','none');

	}
  });

   
   $('.btn-order-3').on('click', function() {

	if ($('.wrapper-form').css('display', 'none')) {
	    $('.wrapper-form').css('display','block');
	} else {
	    $('.wrapper-form').css('display','none');

	}
  });

  $('.close').on('click', function() {

	if ($('.wrapper-form').css('display', 'block')) {
	    $('.wrapper-form').css('display','none');
	} else {
	    $('.wrapper-form').css('display','block');

	}
  });



  // close rules
  $('#close-rules').on('click', function() {

	if ($('.rules-wrapper').css('display', 'block')) {
	    $('.rules-wrapper').css('display','none');
	} else {
	    $('.rules-wrapper').css('display','block');

	}
  });

   $('#rules').on('click', function() {

	if ($('.rules-wrapper').css('display', 'none')) {
	    $('.rules-wrapper').css('display','block');
	} else {
	    $('.rules-wrapper').css('display','none');

	}
  });

   // close coment
  $('#close-coment').on('click', function() {

	if ($('.coments-wrapper').css('display', 'block')) {
	    $('.coments-wrapper').css('display','none');
	} else {
	    $('.coments-wrapper').css('display','block');

	}
  });

  $('#coments').on('click', function() {

	if ($('.coments-wrapper').css('display', 'none')) {
	    $('.coments-wrapper').css('display','block');
	} else {
	    $('.coments-wrapper').css('display','none');

	}
  });

  $('.gallery').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
   });


$(document).ready(function(){
	$('.calc select').change(function(){
		$edition = $('select#card_edition').val();
		$paper = $('select#card_paper').val();
		$color = $('select#card_color').val();
		$print_file = $('select#card_color option:selected').attr('data-print-file');
		$paper_ratio = $('select#card_paper option:selected').attr('data-paper-ratio');
		$color_format = $('select#card_color option:selected').attr('data-color');
		$print = $('select#card_color option:selected').attr('data-print');
		$division = 30;
		$final_edition = $edition / $division;
		$price = $final_edition * $paper_ratio + parseInt($print_file) + $final_edition*$print;
		console.log($price);
		$('span#final_price').text($price);
		if ($color_format == 1) {
			$('.card-images img').hide();   
			$('#card_1_0').show(); 			
		}
		if ($color_format == 2) {
			$('.card-images img').hide();   
			$('#card_1_1').show(); 			
		}
		if ($color_format == 3) {
			$('.card-images img').hide();   
			$('#card_4_0').show(); 			
		}
		if ($color_format == 4) {
			$('.card-images img').hide();   
			$('#card_4_1').show(); 			
		}
		if ($color_format == 5) {
			$('.card-images img').hide();   
			$('#card_4_4').show(); 			
		}
	})
})


});
