$(function(){
	
	
	//banner轮播
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
	
	
	//内容左侧公共图标
	$('.anexample:even').css('float','left');
	$('.anexample:odd').css('float','right');
	
//	$('.anexample').hover(function(){
//		$(this).addClass('anli_curjs').siblings().removeClass('anli_curjs');
//	},function(){
//		$(this).removeClass('anli_curjs');
//	})
	

	//首页图标变化——服务范围
	$('.iexample').hover(function(){
		var num=$(this).index()+1;
//		$(this).find('dl').css('background-color','#e60012');
		$(this).find('dd').css('color','#AD1F24');
//		$(this).find('img').attr('src','imgs/neiye/ANicon0'+num+'.png');
		
	},function(){
		var num=$(this).index()+1;
//		$(this).find('dl').css('background-color','#ececec');
		$(this).find('dd').css('color','#666666' );
//		$(this).find('img').attr('src','imgs/icon0'+num+'.png');
	});

	
	
	
	
	//内容左侧公共文字
	$('.L-nav li').hover(function(){
		$(this).addClass('cut').siblings().removeClass('cut');
	},function(){
		$(this).removeClass('cut');
	})
	
	//公司荣誉
	$('.Rongyu_ex dl:nth-child(4n)').css('margin-right','0px');
	//合作伙伴
	$('.C_example dl:nth-child(4n)').css('margin-right','0px');
	
	
	
	
	
	
	//排列最右边margin-right为0
	$('.Q_example dl:last-child').css('margin-right','0px');
	$('.iexample:last-child').css('margin-right','0px');
	
	$('.G_example').eq(2).css('margin-right','0px');
	$('.G_example').eq(5).css('margin-right','0px');
	
	
	
	//透明屋
	$('.house_picT:first').show();
	$('.idx_house li').click(function(){
		$(this).addClass('cut').siblings().removeClass('cut');
		var num = $(this).index();
		$('.house_picT').eq(num).show().siblings('.house_picT').hide();
	})
	
	//底部导航返回顶部
	$('.top').click(function(){
		$('html body').animate({'scrollTop':'0'},500);
	})
	
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
	//电话
	$('.rig_nav .rig_list01,.rig_nav .list_content').mouseenter(function(){
		$(".rig_nav .rig_list01 .list_content").css("display","block");
		$(".rig_nav .rig_list01 .list02").css("background-color","#e60012");
	});
	$('.rig_nav .rig_list01').mouseleave(function(){
		$('.rig_nav .rig_list01 .list_content').css('display','none');
		$(".rig_nav .rig_list01 .list02").css("background-color","#ababab");
	});
	//微信			
	$('.rig_nav .rig_list04').mouseenter(function(){
		$(".rig_nav .rig_list04 .list_content").css("display","block");
		
		$('.rig_nav .rig_list04 .sanj').show()
	});
		$('.rig_nav .rig_list04').mouseleave(function(){
			$('.rig_nav .rig_list04 .list_content').css('display','none');
			$('.rig_nav .rig_list04 .sanj').hide()
	});
	
	
	
	
//	导航下拉
	$('.nav .li1').hover(function(){
		$(this).children('ul').slideDown();
		$(this).addClass('nav-cur').siblings().removeclass('nav-cur');
	},function(){
		$(this).removeClass('nav-cur');
		$(this).children('ul').slideUp();
	});	
	
	
//	企业文化无缝滚动
	$('#Marquee_x').jcMarquee({ 'marquee':'x','margin_right':'10px','speed':20 });
})

