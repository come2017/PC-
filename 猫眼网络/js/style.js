// JavaScript Document
$(function(){ 
	/*首页,关于我们页_轮播图*/
	var timer01=null;
	var num01=0;
	$('.banner ol li,.abot_banner ol li').click(function(e) {
		$(this).addClass('current').siblings().removeClass('current');
        $('.banner ul li,.abot_banner ul li').eq($(this).index()).stop().fadeIn().siblings().stop().fadeOut();
    });
	function fn01(){ 
		num01++;
		if(num01>1){num01=0}
		$('.banner ol li,.abot_banner ol li').eq(num01).addClass('current').siblings().removeClass();
        $('.banner ul li,.abot_banner ul li').eq(num01).stop().fadeIn().siblings().stop().fadeOut();
	}
	timer01=setInterval(fn01,2000);
	$('.banner,.abot_banner').hover(function(e) {
        clearInterval(timer01);
		timer01=null;
    },function(){ 
		clearInterval(timer01);
		timer01=setInterval(fn01,2000);
	});
	/*回到顶部*/
	$('.gohead').click(function(e) {
        $('body,html').stop().animate({'scrollTop':'0'},500);
    });
	/*teb栏*/
	var timer02=null;
	$('#teb li').click(function(e) {
		var myli=($('#teb li a').eq($(this).index()).html())
		$('.crumbs font').html(myli);
		var T=$(this);
        timer=setTimeout(fn,500);
		function fn(){ 
			$(T).addClass('current').siblings().removeClass();
			$('.AboutCon').eq(T.index()).addClass('current').siblings().removeClass('current');
		}
		//把用户操作的li的索引号去过滤所有的div
    });
	$('#teb li').mouseout(function(e) {
        clearTimeout(timer02);
		timer02=null;
    });

})