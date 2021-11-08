$(function(){

	var tab = $('.tab a'),
		content = $('.tabContent');
	
	// ilk tab'a aktif sınıfını ata
	tab.filter(':first').addClass('aktif');
	
	// ilk içerik hariç diğerlerini gizle
	content.filter(':not(:first)').hide();
	
	// taba tıklandığında!
	tab.click(function(){
		var indis = $(this).index();
		tab.removeClass('aktif').eq(indis).addClass('aktif');
		content.hide().eq(indis).fadeIn(500);
		return false;
	});

});