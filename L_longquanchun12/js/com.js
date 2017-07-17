$(function(){
//	新用户注册红包
	$('.con4_main ul>li:odd').css({'float':'right'});
	$('.con4_main ul>li:even').css({'float':'left'});
	
//	幸运中奖用户
	jQuery(".txtMarquee-top").slide({
		mainCell:".bd ul",
		autoPlay:true,
		effect:"topMarquee",
		vis:7,
		interTime:50,
		trigger:"click"
	});
	
})
