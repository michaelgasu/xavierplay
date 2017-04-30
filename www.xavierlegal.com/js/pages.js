function isMobile() {
	try {
		document.createEvent("TouchEvent");
		return true;
	} catch(e) {
		return false;
	}
}


$(document).ready(function() {
	var container = $('.page-content'),
	    menu = $('.menu'),
	    $backgound = $(".bg-0");

	setInterval(function() {
		if ($backgound.is(':visible')) {
			$backgound.fadeOut(600);
		} else {
			$backgound.fadeIn(600);
		}
	}, 9000);

	if (isMobile()) {
		var nav = $('.nav');
		$('.scrollto').hide();
		$('a.dropdown-toggle').each(function() {
			if (!$(this).parent('li').hasClass('open')) {
				$(this).hide();
			}
		});
		$('a.dropdown-toggle').click(function(e) {
			if ($(this).hasClass('strig')) {
				e.preventDefault();
			}
			if (!$(this).parent('li').hasClass('open')) {
				nav.find('.active').removeClass('active');
				nav.find('.scrollto').each(function(){
					if(!$(this).hasClass('strig')){
						$(this).hide();
					}
				});
				$(this).parent('li').addClass('active open');
			} else if (e.clientX < 51) {
				e.preventDefault();
				$(this).parent('li').removeClass('open');
				if ($(this).parent('li').parent('ul.dropdown-menu').length) {
					$(this).parent('li').removeClass('active');
					$(this).parent('li').parent('ul.dropdown-menu').find('.dropdown-toggle').show();
					nav.find('.strig').show();
				} else {
					nav.find('.scrollto').show();
				}

			}

		});
	} else {
		$('.strig').addClass('scrollto');
		$('.services-menu').hide();
	}
});
