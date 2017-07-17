//菜单导航下拉
function dropMenu(obj) {
    $(obj).each(function() {
        var theSpan = $(this);
        var theMenu = theSpan.find(".submenu");
        var tarHeight = theMenu.height();
        theMenu.css({height: 0, opacity: 0});

        var timer = null;

        theSpan.mouseenter(function() {
            clearInterval(timer);
            $(this).addClass("selected");
            theMenu.stop().show().animate({height: tarHeight, opacity: 1}, 400);
        });

        theSpan.mouseleave(function() {
            var that = this;
            timer = setTimeout(function() {
                $(that).removeClass("selected");
                theMenu.stop().animate({height: 0, opacity: 0}, 400, function() {
                    $(this).css({display: "none"});
                });
            }, 150);
        });
    });
}

$(document).ready(function(){
	
	dropMenu(".drop-menu-effect");

});



$(function(){
	//物联网例子排列
	$('.wu_example dl:even').css('float','left');
	$('.wu_example dl:odd').css('float','right');
	
	//导航第五个定位
	$(".drop-menu-effect").eq(4).find('.submenu').css('left','-14px');
	//公司概况——加入我们
	$('.W-click').click(function(){
		if($(this).hasClass('W_click_show')){
			$(this).removeClass('W_click_show').addClass('W_click_hide');
			$(this).next().slideUp();
			$(this).children('u').text('展开');
			var text01 = $(this).children('u').text();
		}else{
			$(this).removeClass('W_click_hide').addClass('W_click_show');
			$(this).next().slideDown();
			$(this).children('u').text('收起');
			var text01 = $(this).children('u').text();
		}
	})
	
	//资质荣誉
	$('.ro_example').click(function(){
		$('.bg').css('display','block');
	})
	$('#close').click(function(){
		$('.bg').css('display','none');
	})
	
	//baner轮播
	$('.banner ul li:first').css('z-index','1');
		var myIndex = 0;
	$('.banner ol li').click(function(e) {
		myIndex ++; 
		$('.banner ul li').eq($(this).index()).fadeIn(2000).siblings().fadeOut(2000);
		$(this).addClass('current').siblings().removeClass('current');
	});
	
	var timer01 = null;
	var num = 0;
	var timerFn = function(){
		num++
		if(num > 2){
			num = 0;
		};
					
		$('.banner ul li').eq(num).fadeIn(2000).siblings().fadeOut(2000);
		$('.banner ol li').eq(num).addClass('current').siblings().removeClass('current');


	};
	
	//自动播放
	timer01 = setInterval(timerFn,4000);
	
	$('.banner').hover(function(){
		clearInterval(timer01);
		timer01 = null;
		
	},function(){
		timer01 = setInterval(timerFn,4000);
		
	});	
	$("div[data-value]").click(function(){
		window.open();
	});

})











