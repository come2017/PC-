$(function(){
	
	//二级导航
	$('.navx').mouseenter(function(){
		var oNum = $(this).index()-1;
		$('.header01').slideDown();
		$('.header01 ul>li').eq(oNum).addClass('current').siblings().removeClass('current');
	})
	
	
	$('.header01').mouseleave(function(){
		$('.header01').hide();
	})
	$('.navn').mouseenter(function(){
		$('.header01').hide();
	})
	
	
	
	//公司概述
	$('.ione').click(function(){
		$(this).css('display','none');
		$(this).siblings('.itwo').css('display','block');
		$(this).siblings('.nbox').slideDown(500);
	})
	$('.itwo').click(function(){
		$(this).css('display','none');
		$(this).siblings('.ione').css('display','block');
		$(this).siblings('.nbox').slideUp(500);
	})
	
	$('.Ccon li:nth-child(4n)').css('margin-right','0px');
	$('.iCon03in li:nth-child(3n)').css('margin-right','0px');
	$('.GConIn li:nth-child(3)').css('margin-right','0px');
	$('.RCon ul:nth-child(3)').css('margin-right','0px');
	$('.IinL01 li:nth-child(3)').css('margin-right','0px');
	$('.LXCon01 li:last-child').css({'margin-right':'0px'},{'width':'100px'});
	$('.IinL01 li:last-child').css('margin-right','0px');
	$('.ITConR02 li:last-child').css('border-bottom','1px solid #eaeaeb');
	$('.HLMOCon li:last-child').css('margin-right','0px');
	$('.HLMOCon li:first-child').css('border-left','none');
	$('.HuLianCon li:nth-child(4n)').css('margin-right','0px');
	
	//案例展示标签切换
	$('.case_tab ul li').click(function(){ 
	$(this).addClass("case_cur").siblings().removeClass();
	});
	//案例展示内容左右浮动
	$('.calist_main ul>li:odd').css({'float':'right'});
	$('.calist_main ul>li:even').css({'float':'left'});
	
	$('.calist_main ul li').hover(function(){
		$(this).find('.calist_li1_img').stop().animate({
			top:"48"
		},500);
//					$(this).find('h2').stop().hide(1000);
		},function(){
			$(this).find('.calist_li1_img').stop().animate({
				top:"138"
			},500);
//						$(this).find('h2').stop().show(1000);
		})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//案例动画效果
	jQuery(".picScroll-left").slide({
		titCell:".hd ul",
		mainCell:".calist_main ul",
		autoPage:true,
		effect:"left",
		autoPlay:true,
		vis:2
	});
	
	
	
})