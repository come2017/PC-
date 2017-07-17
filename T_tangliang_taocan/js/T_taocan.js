$(function(){
	//点击报名弹出层	
	$('#Tc_apply').click(function(){
		$('.login_bg').css('display','block');
		$('.Tc_bao').css('display','block');
	});
	$('.close').click(function(){
		$('.Tc_bao').css('display','none');
		$('.login_bg').css('display','none');
	});
//	固定报名框
	$('.gd_bao table tr td:odd').css('text-align','left');
	$('.gd_bao table tr td:even').css('text-align','right');
	
//	标准工艺切换
	$('.Tc_gytab ul li').click(function(){ 
		$(this).addClass("Tc_gytab_cur").siblings().removeClass();
		$(".Tc_gytabcon > ul li").hide(1000).eq($('.Tc_gytab ul li').index(this)).show(1000); 
	});
//	施工设施切换
	$('.Tc_sgtab ul li').click(function(){ 
		$(this).addClass("Tc_sgtab_cur").siblings().removeClass();
		$(".Tc_sgtabcon > ul li").slideUp().eq($('.Tc_sgtab ul li').index(this)).slideDown(); 
	});
//	598空间配置切换
	$('.Tc_pztab ul li').click(function(){ 
		$(this).addClass("Tc_pz_cur").siblings().removeClass();
		$(".Tc_pzcon > ul li").hide(1000).eq($('.Tc_pztab ul li').index(this)).show(1000); 
	});	
	
	//合作品牌
	
	$('.Wpinpai li').hover(function(){
		$(this).find('.two').stop().animate({
			right:"0"
		},500);
	},function(){
		$(this).find('.two').stop().animate({
			right:"-176"
		},500);
	})
	
//	398套餐切换
	jQuery(".slideBox").slide({
		mainCell:".bd ul",
		autoPage:true,
		autoPlay:true
	});
	
})




