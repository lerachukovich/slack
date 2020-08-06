$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    }); 
    $(document).mouseup(function (e){ 
		let div = $(".header__menu, .header__burger");
		if (!div.is(e.target) 
		    && div.has(e.target).length === 0) { 
            div.toggleClass('active');
		}
	});
});
      