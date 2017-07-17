//导航
$(function(){
	
	//banner
	jQuery(".focusBox").slide({
		mainCell:".pic",
		effect:"left",
		autoPlay:true,
		delayTime:300
	});
	
	//强力推荐
	jQuery(".ladyScroll").slide({ 
		mainCell:".dlList",
		effect:"leftLoop",
		vis:4, 
		autoPlay:true
	});
	
	//专题精选
	jQuery(".picScroll-left").slide({
		titCell:".hd ul",
		mainCell:".bd ul",
		autoPage:true,
		effect:"left",
		autoPlay:true,
		vis:3
	});
	//活动墙
	jQuery(".index_con6").slide({
		mainCell  :  ".bd ul",
		autoPlay  :  true,
		effect    :  "leftMarquee",
		vis       :  6,
		interTime :  30,
		trigger   :  "click"
	});
		
	
	//团体活动
	$('.index_con5_rTab li').click(function(){
		$(this).addClass('cut').siblings().removeClass('cut');
		var num = $(this).index();
		$('.index_con5_rBox').eq(num).show().siblings('.index_con5_rBox').hide();
	});
})		