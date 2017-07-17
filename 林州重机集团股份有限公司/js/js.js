$(function(){
		var myC = $('.cont_b .lunbo li:lt(8)').clone(true);//克隆前几个；
		$('.cont_b .lunbo').append(myC);
		var timer01 = null;
		var timer02 = null;
		var num02 = 0;
		var num = 0;
		var gun = -2;//在这里是代表向左
	    var myFn = function(){
						//先计算 再判断  再设置
						num+=gun;
						if( num < -1072){
							num = 0;
						}
						$('.cont_b .lunbo').css('left',num+'px')
					}
					
		var myFn02 = function(){
						num02++;//先计算
						if(num02 > 4){ //再判断
							num02 = 0;	
						}
						$('.banner .sImg li').eq(num02).css({'margin-top':'-5px','opacity':'1'}).siblings().css({'margin-top':'0px','opacity':'0.5'});
						$('.banner .bigImg li').eq(num02).show().siblings().hide();
					}
		timer01 = setInterval(myFn,30);
		$('.cont_b .lunbo').hover(function(e) {
            clearInterval(timer01);
        },function(){
			timer01 = setInterval(myFn,30);	
		});
		

		timer02 = setInterval(myFn02,2000);
		$('.banner').hover(function(e) {
            clearInterval(timer02);
        },function(){
			timer02 = setInterval(myFn02,2000);	
		});
		
		
		$('.head_r .bigul>li').hover(function(e) {
        	$(this).children('ul').show();
			},function(e) {
        	$(this).children('ul').hide()			
	   		});
			
			$('.ul01 li').mouseover(function(e) {
                $(this).addClass('current').siblings().removeClass('current')
            });

		$('.banner .box').fadeTo(0,0.5);
		$('.sImg li').mouseover(function(e) {
            //鼠标移入时 自己不变 ，小伙伴透明度改变  相对应的那个大图出现
			$('.sImg li').fadeTo(0,0.5);
			$(this).fadeTo(0,1).stop().animate({'margin-top':'-5px'},1);
			$(this).siblings().stop().animate({'margin-top':'0px'},1);
			$('.bigImg li').eq($(this).index()).show().siblings().hide();	
			num02 = $(this).index();	
        });
		$('.con .dot li').click(function(e) {
            $(this).addClass('current').siblings().removeClass('current');	
        });
		
})