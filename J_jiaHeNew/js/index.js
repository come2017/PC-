window.onload=function(){oDjs();}
window.onresize=function(){oDjs();}

function oDjs(){
	//banner下的点
	var oWnum = $('.flex-control-nav').width()/2;
	$('.flex-control-nav').css('margin-left',-oWnum+'px');
	
	//解决方案
	jQuery(".iCon02").slide({
		titCell:".hd ul",
		mainCell:".bd ul",
		autoPage:true,
		effect:"left",
		autoPlay:true,
		scroll:4,
		vis:4,
		trigger:"click"
	});
	
	
	//解决方案下的点
	var oWnum01 = $('.iCon02 .hd ul').width()/2;
	$('.iCon02 .hd ul').css('margin-left',-oWnum01+'px');
	
	
	//经典案例
	$('.iCon03in li:nth-child(3n)').css('margin-right','0px');
	
	//解决方案
	$('.iCon02 .bd ul li').hover(function(){
		$(this).find('.two').stop().animate({
			right:"0"
		},500);
//		$(this).find('.one').stop().hide(1000);
	},function(){
		$(this).find('.two').stop().animate({
			right:"-292"
		},300);
//		$(this).find('.one').stop().show(1000);
	})
	
	
	//服务(判断ie7.ie8的方法)
	var browser=navigator.appName 
	var b_version=navigator.appVersion 
	var version=b_version.split(";"); 
	var trim_Version=version[1].replace(/[ ]/g,""); 
	if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE7.0") 
	{ 
//	alert("IE 7.0"); window.location.href="http://xxxx.com";
		$('.BBox').hide();
		$('.bcBox').hover(function(){
			$(this).find('.BBox').show();
		},function(){
			$(this).find('.BBox').hide();
		})
	} 
	else if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE8.0") 
	{
		$('.BBox').hide();
		$('.bcBox').hover(function(){
			$(this).find('.BBox').show();
		},function(){
			$(this).find('.BBox').hide();
		})
	}
	
}
