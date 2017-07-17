window.onload=function(){Uload();}
window.onresize=function(){Uload();}

function Uload(){

	//二级页banner
	var bH = $('.banner img').height();
	$('.banner').css('height',bH+'px');
	
	var bH = $('.w-banner img').height();
	$('.w-banner').css('height',bH+'px');
	
	//关于我们——公司简介
	$('.AconLli li:first-child').css('border-left','none');
	$('.AconLli li:last-child').css('border-right','none');
	var iW01 = $('.AconL .Wabimg').width()/826*148;
	$('.AconL .Wabimg').css('height',iW01+'px');
	var iW02 = $('.AconR01 .Wrimg01').width()/273*110;
	$('.AconR01 .Wrimg01').css('height',iW02+'px');
	
	//心连心—国际会诊—癌症资讯—基因靶向-11-13
	if($(window).width()<=1200){
		var iW03 = $(window).width()-133-50;
		$('.W_jiyinR').css('width',iW03+'px');
	}
	
	//心连心—抗癌机构-11-13
	var iW04 = $('.k_example dt img').width()/260*151;
	$('.k_example dt img').css('height',iW04+'px');
	
	//健康套餐
	var css01 = $('.JK_exm dt img').width()/398*228;
	$('.JK_exm dt img').css('height',css01+'px');
	
	$('.JK_box>a:odd').css({'float':'right'});
	$('.JK_box>a:even').css({'float':'left'});
	//医生入口
	$('.Y-table tr td:first-child').css('text-align','right');
	$('.Y-table tr td:last-child').css('text-align','left');
	
	//国内会诊——我的专家-科室团队
	if($(window).width()>675){
		var iW05 = $('.AconL').width()-120-60-50;
		$('.Gn_wo-r').css('width',iW05+'px');
	}
	
	//国内会诊——我的专家-科室团队
//	$('.ke_example>li:even').css('','left');
//	$('.ke_example>li:odd .ke-list-l').css('margin-left','30px');
//	var iW06 = $('.ke_example>li').width()-80;
//	$('.ke-list-r').css('width',iW06+'px');
//	if($(window).width()<=675){
//		var iW06 = $('.ke_example>li').width()-120;
//		$('.ke-list-r').css('width',iW06+'px');
//	}
	
	//国内会诊——我的专家	
	var iW07 = $('.wo_example li').width()-190;
	$('.wo_list').width(iW07);
	
	$('.wonav').eq(5).css({'border-bottom':'none','margin-bottom':'20px'});
	
	if($(window).width()<=1200){
		var iW09 = $('.wonav').width()-$('.fir_nav').width()-50;
		$('.navli').css('width',iW09+'px');
	}
	if($(window).width()<=675){
		var iW09 = $('.wonav').width()-$('.fir_nav').width()-20;
		$('.navli').css('width',iW09+'px');
	}
	
	
	for(i=0;i<6;i++){
		var iH = $('.wonav ul').eq(i).height();
		$('.wonav ul').eq(i).siblings('.fir_nav').css({'height':iH+'px','line-height':iH+'px'});
	}
	
	//国内会诊——我的专家-科室团队
	if($(window).width()>675){
		var iW08 = $('.AconL').width()-216-60-25;
		$('.Gj_yi-r').css('width',iW08+'px');
	}
	
	//国际会诊—国际医院—医院列表
	var ic02 = $('.GjL').width()/216*125;
	$('.GjL').css('height',ic02+'px');
	$('.Gjt').css('height',ic02-50+'px');
	if($(window).width()<=1200){
		var ic01 = $('.CmianCON').width()-216-70;
		$('.GjR').css('width',ic01+'px');
	}
	if($(window).width()<=675){
		var ic01 = $('.CmianCON').width()-120-10;
		$('.GjR').css('width',ic01+'px');
		$('.Gjt').css('height',ic02-35+'px');
	}
	
	//最新药物
	if($(window).width()>675){
		var iW10 = $('.W_yijing').width()-50-40-$('.Az_yaopic').width();
		$('.Az_yaocon').css('width',iW10+'px');
	}
	if($(window).width()<=675){
		var iW10 = $('.W_yijing').width()-10-10-$('.Az_yaopic').width();
			$('.Az_yaocon').css('width',iW10+'px');
	}
	
	var iW11 = $('.Az_yaocon').width();
	$('.Az_yaot02 span').css('width',iW11-60+'px');
	
	
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
	
	
	//登陆弹出层	
	$('#login-tan').click(function(){
		$('.login_bg').css('display','block');
		$('.login_con').css('display','block');
	});
	$('.login_bg').click(function(){
		$('.login_con').css('display','none');
		$('.login_bg').css('display','none');
	});
	
	//个人中心——订单详情页
	$('a.fix i').width($('a.fix').width()-$('a.fix img').width()-30);
	if($(window).width()<=675){
		$('a.fix i').width($('a.fix').width()-$('a.fix img').width()-10);
	}
	
	//个人中心——我的订单
	$('.Order_txt').width($('.Order_example').width()-145);
	$('.AconR_t01 h3').click(function(){
		$(this).addClass('dang').siblings().removeClass('dang');
	})
	
	//个人中心——我的预约
	$('.OtableY tbody tr td:last-child').css({'text-align':'left','border-right':'none'});
	
	
	
}	
	
