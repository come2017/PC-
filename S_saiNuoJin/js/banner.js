$(function(){
	
//首页baner轮播
	var timer = null;
	var num = 0;
	var fnTimer = function(){
		num++;
		if(num == $('.banner ul li').length){
			num = 0;
		}
		$('.banner ul li:eq('+num+')').fadeIn(2000).siblings().fadeOut(2000);
		$('.banner ol li:eq('+num+')').addClass('current').siblings().removeClass('current');
	};

	$('.banner ul li:first').show();
	
	$('.banner ol li').click(function(e) {
		$(this).addClass('current').siblings().removeClass('current');
		var thisIdx = $(this).index();
		$('.banner ul li:eq('+thisIdx+')').fadeOut().stop().fadeIn().siblings().fadeOut();
		num = thisIdx;
	});
	//timer = setInterval(fnTimer,3000);
	
	$('.banner').mouseover(function(e) {
		clearInterval(timer);
	}).mouseout(function(e) {
		clearInterval(timer);
		timer = setInterval(fnTimer,3000);
	});
	
	//竖导航
	$(window).scroll(function(e) {
		var wT = $(window).scrollTop();
		if (wT > 500){
			$('.rig_nav').stop().slideDown(200);	
		}else{
			$('.rig_nav').stop().slideUp(300);	
		}
	});	
	$('.rig_nav .list04').click(function(e) {
		$('body,html').animate({'scrollTop':'0'},500);
	});
	
	//竖导航经过时
	$('.rig_nav .rig_list01').mouseenter(function(){
		$(".rig_nav .rig_list01 .list_content").css("display","block");
	});
	$('.rig_nav .rig_list01').mouseleave(function(){
		$('.rig_nav .rig_list01 .list_content').css('display','none');
	});
	
	
	$(".mr_frbox").slide({
			mainCell:".mr_frUl ul",
			effect:"leftMarquee",
			autoPlay:true,
			vis:4,
			interTime:15,
			trigger:"click"
		});
		$('.mr_frUl').find('li a').on({
			'mouseenter': function () {
			$(this).stop().animate({top: -34});

			},
			'mouseleave': function () {
			$(this).stop().animate({top: 0});
			}
		})
		
		$('.dCon03').mouseover(function(){
		$(".run div .s0 img").stop().animate({"margin-top":"0"},500);		 	
		$(".run div .s6 img").stop().animate({"margin-top":"-496px"},500);			 	
	})
		
		$('.nav .li1').hover(function(){
			$(this).children('ul').css('display','block');
			$(this).addClass('nav-cur').siblings().removeclass('nav-cur');
		},function(){
			$(this).removeClass('nav-cur');
			$(this).children('ul').css('display','none');
		});

})