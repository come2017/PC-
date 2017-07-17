$(function(){
	$('.iCon04_In_Btm_L ul li:first,.iCon04_In_Btm02 ul li:first,.iCon04_In_Btm03 ul li:first').css('display','block');

	//竖导航
	$(window).scroll(function(e) {
		var wT = $(window).scrollTop();
		if (wT > 500){
			$('.rig_nav').stop().slideDown(200);	
		}else{
			$('.rig_nav').stop().slideUp(300);	
		}
	});	
	$('.rig_nav .list05').click(function(e) {
		$('body,html').animate({'scrollTop':'0'},500);
	});
	
	//顶部二维码
	$('.headIn .top .top02').hover(function(){
		$('.ewm').stop().slideDown(300);
	},function(){
		$('.ewm').stop().hide();		
	});
	
	//竖导航经过时
	$('.rig_nav .rig_list01').mouseenter(function(){
		$(".rig_nav .rig_list01 .list_content").css("display","block");
		$('.rig_nav .rig_list01 .list02').css("backgroundColor","#e99e39");
	});
	$('.rig_nav .rig_list01').mouseleave(function(){
		$('.rig_nav .rig_list01 .list_content').css('display','none');
		$('.rig_nav .rig_list01 .list02').css("backgroundColor","#1f2c5c");
	});
	
	//foot
	$('.footIn_R li:first').hover(function(){
		$('.eWm').stop().slideDown(300);
	},function(){
		$('.eWm').stop().hide();		
	});
	$('.footIn_R li').hover(function(){
		$(this).css({'background-color':'#fff'});
		$(this).stop().animate({'background-position-Y':'-202px'},200);
	},function(){
		$(this).css({'background-color':'#788396'});
		$(this).stop().animate({'background-position-Y':'-166px'},200);
	});
	
	//首页北京、武汉、石家庄切换
	$(".con03_03 li").mouseenter(function(){
		$(this).children(".bgfd").css("display","block");
	}).mouseleave(function(){
		$(this).children(".bgfd").css("display","none");
	})
	
	$('.con03 .con03In .con03_02 li').click(function(){
		var aIdx = $(this).index();
		$(this).addClass('cut').siblings().removeClass('cut');
		$('.con03 .con03In .con03_03').eq(aIdx).addClass('current').siblings().removeClass('current');
	});
	
	//首页图标切换
	$(".con02_service dt a").hover(function(){
		$(this).css("backgroundColor","#1f2c5c");
		$(this).css("background-position-y","-70px");
	},function(){
		$(this).css("backgroundColor","#808080");
		$(this).css("background-position-y","0px");
	});
	
	//首页baner轮播
	var timer = null;
	var num = 0;//灵魂所在
	var fnTimer = function(){
		num++;
		if(num == $('.banner01 ul li').length){
			num = 0;
		}
		$('.banner01 ul li:eq('+num+')').fadeIn(2000).siblings().fadeOut(2000);
		$('.banner01 ol li:eq('+num+')').addClass('current').siblings().removeClass('current');
	}
	$('.banner01 ul li:first').show();
	$('.banner01 ol li').click(function(e) {
        $(this).addClass('current').siblings().removeClass('current');
		var thisIndex = $(this).index();
		$('.banner01 ul li:eq('+thisIndex+')').fadeOut().stop().fadeIn().siblings().fadeOut();
		num = thisIndex;
    })
	timer = setInterval(fnTimer,3000);
	$('.banner01').mouseover(function(e) {
        clearInterval(timer);
    }).mouseout(function(e) {
		clearInterval(timer);
		timer = setInterval(fnTimer,3000);
    });
		
	// 首页iCon04
		//baner轮播
		var timer = null;
		var num = 0;//灵魂所在
		var fnTimer = function(){
			num++;
			if(num > 3){
				num = 0;
			}
			$('.iCon04_In_Btm_L ul li:eq('+num+')').fadeIn(2000).siblings().fadeOut(2000);
			$('.iCon04_In_Btm_L ol li:eq('+num+')').addClass('current').siblings().removeClass('current');
			$('.iCon04_In_Btm_R li').eq(num).children('.iCon04_Btn').addClass('c6');
			$('.iCon04_In_Btm_R li').eq(num).children('.iCon04_Txt').addClass('current');
			$('.iCon04_In_Btm_R li').eq(num).siblings().children('.iCon04_Btn').removeClass('c6');
			$('.iCon04_In_Btm_R li').eq(num).siblings().children('.iCon04_Txt').removeClass('current');
		}
		$('.iCon04_In_Btm_L ul li:first').show();
		$('.iCon04_In_Btm_L ol li').click(function(e) {
            $(this).addClass('current').siblings().removeClass('current');
			var thisIndex = $(this).index();
			$('.iCon04_In_Btm_L ul li:eq('+thisIndex+')').fadeOut().stop().fadeIn().siblings().fadeOut();
			num = thisIndex;
        })
		timer = setInterval(fnTimer,2500);
		$('.iCon04_In_Btm_L,.iCon04_In_Btm_R li').mouseover(function(e) {
            clearInterval(timer);
        }).mouseout(function(e) {
			clearInterval(timer);
			timer = setInterval(fnTimer,2500);
        });
	
	
	
	
	$('.iCon04_ul01 li').click(function(){
		var aIdx = $(this).index();
		$(this).addClass('current').siblings().removeClass('current');
		$('.iCon04_In_Btm').eq(aIdx).css('display','block').siblings('.iCon04_In_Btm').css('display','none');
	});
	
	$('.iCon04_In_Btm_R li').click(function(){
		var nIdx = $(this).index();
		$(this).children('.iCon04_Btn').addClass('c6');
		$(this).children('.iCon04_Txt').addClass('current');
		$(this).siblings().children('.iCon04_Btn').removeClass('c6');
		$(this).siblings().children('.iCon04_Txt').removeClass('current');
		$('.iCon04_In_Btm_L ol li').eq(nIdx).addClass('current').siblings().removeClass('current');
		$('.iCon04_In_Btm_L ul li').eq(nIdx).fadeIn(500).siblings().fadeOut(500);
	});
	$('.iCon04_In_Btm_L ol li').click(function(){
		var nIdx = $(this).index();
		$(this).addClass('current').siblings().removeClass('current');
		$(this).children('.iCon04_Btn').addClass('c6');
		$('.iCon04_In_Btm_R li').eq(nIdx).children('.iCon04_Btn').addClass('c6');
		$('.iCon04_In_Btm_R li').eq(nIdx).children('.iCon04_Txt').addClass('current');
		$('.iCon04_In_Btm_R li').eq(nIdx).siblings().children('.iCon04_Btn').removeClass('c6');
		$('.iCon04_In_Btm_R li').eq(nIdx).siblings().children('.iCon04_Txt').removeClass('current');
		$('.iCon04_In_Btm_L ol li').eq(nIdx).addClass('current').siblings().removeClass('current');
		$('.iCon04_In_Btm_L ul li').eq(nIdx).fadeIn(500).siblings().fadeOut(500);		
	});
	
	// 首页iCon05
	$('.iCon05 .iCon05_In_L_Top a').click(function(){
		var aIdx = $(this).index();
		$(this).addClass('current').siblings().removeClass('current');
		$('.iCon05_In_L_Bottom li').eq(aIdx).addClass('current').siblings().removeClass('current');
	});
	

})
