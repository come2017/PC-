$(function(){
	
	$('.con03 li:nth-child(3n)').css('margin-right','0px');
	$('.PCon li:last-child').css('border-bottom','none');
	
	//人才招聘
	$('.TaTitle').click(function(){
		var num = $(this).index();
		$(this).addClass('cur').siblings().removeClass('cur');
		$('.TaCon').hide();
		$(this).next('.TaCon').slideDown(300);
	})
	
//	$("#contact").click(function(){
//		$('body,html').animate({'scrollTop':'1000'},500);
//	})
	
	
})