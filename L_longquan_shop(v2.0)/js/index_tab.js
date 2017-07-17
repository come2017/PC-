$(function(){
//	首页con1左侧切换
	jQuery(".slideBox").slide({
		mainCell:".bd ul",
		autoPage:true,
		autoPlay:true
	});
//	首页con1右侧切换
	jQuery(".scrollBox").slide({ 
		titCell:".list li",
		mainCell:".piclist",
		effect:"left",
		vis:3,
		scroll:3,
		delayTime:800,
		trigger:"click",
		easing:"easeOutCirc",
	});
	
//	首页con2切换
	jQuery(".focusBox").slide({ 
		mainCell:".pic",
		effect:"left",
		autoPlay:true,
		delayTime:300
	});

//鼠标经过变色
	$('.rig_nav ul li.nav_zhuan').mouseenter(function(){
			$(this).find(".libg_on").css("display","block");
			$(this).find(".libg").css("display","none");
		}).mouseleave(function(){
			$(this).find('.libg_on').css('display','none');
			$(this).find('.libg').css('display','block');
		});
		
	//鼠标经过出现二维码
	$('.rig_nav .list_04').mouseenter(function(){
		$(".rig_nav .list_04_ma").css("display","block");
	});
	$('.rig_nav .list_04').mouseleave(function(){
		$('.rig_nav .list_04_ma').css('display','none');
	});
	//鼠标经过出现二维码
	$('.DC_weixin').mouseenter(function(){
		$(".DC_weixin_img").css("display","block");
	});
	$('.DC_weixin').mouseleave(function(){
		$('.DC_weixin_img').css('display','none');
	});
	//	返回顶部
	$('.rig_nav .nav_top').click(function(e) {
		$('body,html').animate({'scrollTop':'0'},500);
	});
})









