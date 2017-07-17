// JavaScript Document
$(function(){
	//导航的电话区控制
	$('.nav_name').hover(function(e) {
        $(this).children('.menu').show();
		$(this).children('.in_after').css({'border-color':'#fe7901','background':'#fff'});
    },function(){
		$(this).children('.menu').hide();
		$(this).children('.in_after').css({'border-color':'#f6f6f6','background':'#f6f6f6'});	
	});
	
	
	
	//购物车
	$('.gwc a').hover(function(e) {
        $('.shopping_box').show();
    },function(){
		 $('.shopping_box').hide();	
	});
	//母婴生活汇
	$('.nav-m  ul .mama').hover(function(e) {
        $('.life_con').show();
    },function(){
		$('.life_con').hide();	
	});
	//banner播放
	var num=0;
	var timer01=null;
	var myfn1=function(){
		num++;
		//方法1
		/*if(num>4){
			num=0;	
		}*/
		//方法2：求余运算
		num=num%$('.full_bg .banner ul li').length;
		$('.full_bg .banner ol li').eq(num).addClass('current').siblings().removeClass('current');		
		$('.full_bg .banner ul li').eq(num).stop().fadeIn().siblings().hide();
	}
	//点击轮播
	$('.full_bg .banner ul li').eq(0).show();
	$('.full_bg .banner ol li').click(function(e) {
        $(this).addClass('current').siblings().removeClass('current');
		$('.full_bg .banner ul li').eq($(this).index()).stop().fadeIn().siblings().hide();
		num=$(this).index();
    });
	timer01=setInterval(myfn1,3000);
	$('.full_bg .banner').hover(function(e) {
        clearInterval(timer01);
		 $('.leftBtn,.rightBtn').stop().fadeIn(500);
	},function(){
		timer01=setInterval(myfn1,3000);
		$('.leftBtn,.rightBtn').stop().fadeOut(500);	
	});
	$('.rightBtn').click(myfn1);
	$('.leftBtn').click(function(e) {
		num--;
		if(num<0){
			num=4;	
		}
		$('.full_bg .banner ol li').eq(num).addClass('current').siblings().removeClass('current');		
		$('.full_bg .banner ul li').eq(num).stop().fadeIn().siblings().hide();
    });
	
    //今日特价区 
	var m=0;
	var timer02=null;
	var myfn2=function(){
		m++;
		//m%=2;
		if(m>1){
			m=0;
		}
		move =m*-1150;
       $('.goods_cont ul').stop().animate({'left':move+'px'},500);	
	}
	timer02=setInterval(myfn2,5000);
	$('.right_sj').click(myfn2);
	$('.left_sj').click(function(e) {
        m--;
		if(m<0){
			m=1;
		}
		move =m*-1150;
		$('.goods_cont  ul').stop().animate({'left':move+'px'},500);
    });
	$('.goods_cont').hover(function(e) {
       clearInterval(timer02);
    },function(){
		 timer02=setInterval(myfn2,5000);	
	});
	
	//卖出的信息
	$('.goods_cont ul li').hover(function(e) {
        $(this).children('div').children('.img').children('.sell_adv').stop().animate({'bottom':'39px'},500);
    },function(){
		 $(this).children('div').children('.img').children('.sell_adv').stop().animate({'bottom':'-147px'},500);
	});
	
	//成长区下的circle的控制
	$('.grow ul li').hover(function(e) {
       var dis=$(this).index()*140;
		$('.grow ul .circle').stop().animate({'left':dis+'px'});
    });
	$('.rule a').hover(function(e) {
        $(this).children('span').css('color','#06e');
    },function(){
		$(this).children('span').css('color','#666');	
	});
	//返回顶部
	$(window).scroll(function(e) {
        if($(window).scrollTop()>$(window).height()*0.05){
		   $('.side_r').show();		
		}else{
		   $('.side_r').hide();		
		}
    });
	$('.side_r .app2').click(function(e) {
        $('body,html').stop().animate({'scrollTop':'0'});
    });
})