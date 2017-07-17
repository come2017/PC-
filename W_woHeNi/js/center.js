$(function() {
  //我参与的-未完成的----展开收起
  $('.C_click').click(function() {
    if ($(this).hasClass('C_click_show')) {
      $(this).removeClass('C_click_show').addClass('C_click_hide');
      $(this).parent().siblings().slideUp();
      $(this).children('u').text('展开订单');
      var text01 = $(this).children('u').text();
    } else {
      $(this).removeClass('C_click_hide').addClass('C_click_show');
      $(this).parent().siblings().slideDown();
      $(this).children('u').text('收起订单');
      var text01 = $(this).children('u').text();
    }
  })
//我的私信弹出层
  $('.close').click(function(){
		$('.bg').css('display','none');
		$('.let_huifu').css('display','none');
	})
  $('.let_tan').click(function(){
		$('.bg').css('display','block');
		$('.let_huifu').css('display','block');
	})	
//我收藏的-----收藏的活动
$('.act_tab ul li').click(function(){ 
		$(this).addClass("act_tab_cur").siblings().removeClass();
		$(".act_tab_con > ul>li").hide().eq($('.act_tab ul li').index(this)).show(); 
});
//账户设置
$('.per_zh_tab ul li').click(function(){ 
		$(this).addClass("zh_tab_cur").siblings().removeClass();
		$(".zh_tab_con > ul >li").hide().eq($('.per_zh_tab ul li').index(this)).show(); 
});
})

	