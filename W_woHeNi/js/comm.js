//导航
$(function(){
	//导航下拉活动日历
	for(x=0;x<2;x++){
		var oM = $('.li2_data dl').eq(x).height();
		$('.first_li').eq(x).css('margin-bottom',oM+'px');
	}
	$('.nav li').mouseover(function(){
		$(this).addClass('on').siblings().removeClass('on');
		var num = $(this).index();
		$('.subNav > li').eq(num).show().siblings().hide();
	});
	
	var oHeight = $('.subNav > li').height()+35+'px';
	var oWidth = $('.subNav > li').width()+'px';
//	console.log(oHeight);
//	$('.navBar').css({'height':oHeight,'width':oWidth});
	$('.navBar').mouseleave(function(){
		$('.subNav > li').hide();
	});
	
	
		
	//竖导航
	$(window).scroll(function(e) {
		var wT = $(window).scrollTop();
		if (wT > 500){
			$('.rig_nav').stop().slideDown(200);	
		}else{
			$('.rig_nav').stop().slideUp(300);	
		}
	});	
	$('.rig_nav .list04').click(function(e) {
		$('body,html').animate({'scrollTop':'0'},500);
	});
	//竖导航经过时
	$('.rig_nav .rig_phone').mouseenter(function(){
		$(".rig_nav .rig_list01 .list_content").css("display","block");
	});
	$('.rig_nav .rig_phone').mouseleave(function(){
		$('.rig_nav .rig_list01 .list_content').css('display','none');
	});
	
	//110详情页
	$('.Part li:last-child').css('border-bottom','none');
	$('.Commentall li:last-child').css('border-bottom','none');
	$('.ticket li').click(function(){
		$(this).addClass('dang').siblings().removeClass('dang');
		var i = $(this).index();
		$('.ticket_sm .ticketCon').eq(i).show().siblings().hide();
	})
	
	//退款说明
	$('.Tuikuan').hover(function(){
		$('.TuiCon').css('display','block');
	},function(){
		$('.TuiCon').css('display','none');
	})
	
//	
//	var oT = true;
//	$('.Tuikuan').click(function(){
//		if(oT){
//			$('.TuiCon').css('display','block');
//			oT = false;
//		}else{
//			$('.TuiCon').css('display','none');
//			oT = true;
//		}
//	})
	
	//报名表单
	var SH = $('.Sign').height();
	var SH2 = -SH/2;
	$('.Sign').css('margin-top',SH2+'px');
	
	$('#Sign').click(function(){
		$('.Sign,.bg').css('display','block');
	})
	$('.close,#Bcancel').click(function(){
		$('.Sign,.bg').css('display','none');
	})
	
	//提交按钮
	$('#Bsubmit').click(function(){
		$('.Signsuccess_F,.bg').css('display','block');
		$('.Sign').css('display','none');
	})
	$('.close').click(function(){
		$('.Signsuccess_F,.bg').css('display','none');
	})
	
	//性别切换
	$('.Sign_table ul li').click(function(){
		$(this).find('i').addClass('sex_cur');
		$(this).siblings().find('i').removeClass('sex_cur');
	})
	
	//预览
	var YH = $('.Yulan').height();
	var YH2 = -YH/2;
//	$('.Yulan').css('margin-top',YH2+'px');
	
	$('#Yulan').click(function(){
		$('.Yulan,.bg').css('display','block');
	})
	$('.close,#Bcancel').click(function(){
		$('.Yulan,.bg').css('display','none');
	})
})		