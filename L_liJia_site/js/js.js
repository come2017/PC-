

$(function(){  

//招聘页 切换
$('.job-left ul li').click(function(){ 
$(this).addClass("job-on").siblings().removeClass();
$(".job-right > ul li").hide().eq($('.job-left ul li').index(this)).show(); 
}); 
//首页 竖导航
	
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
	$('.rig_nav .rig_list01').mouseenter(function(){
					$(".rig_nav .rig_list01 .list_content").css("display","block");
				});
				$('.rig_nav .rig_list01').mouseleave(function(){
					$('.rig_nav .rig_list01 .list_content').css('display','none');
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
				
	//APP			
	$('.rig_nav .rig_list03').mouseenter(function(){
					$(".rig_nav .rig_list03 .list_content").css("display","block");
					$('.rig_nav .rig_list03 .sanj-app').show()
				});
				$('.rig_nav .rig_list03').mouseleave(function(){
					$('.rig_nav .rig_list03 .list_content').css('display','none');
					$(".rig_nav .rig_list03 .sanj-app").hide()
				});
				
})

