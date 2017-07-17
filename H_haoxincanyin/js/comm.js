
$(function(){
	jQuery(".fullSlide").slide({
		titCell:".hd ul",
		mainCell:".bd ul",
		effect:"fold",  
		autoPlay:true,
		autoPage:true,
		trigger:"click" 
	});
	//	首页专家团队
	jQuery(".ladyScroll").slide({ 
		mainCell:".dlList",
		effect:"leftLoop",
		vis:3, 
		autoPlay:true
	});
	
})		