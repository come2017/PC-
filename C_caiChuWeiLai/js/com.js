
$(function(){
	//首页足球发布动画
	$( ".con01_In .con01-js" ).hover(
	  function() {
	    $( this ).addClass( "con01-dthover" );
	    $(this).children('i').stop().animate({'background-position-Y':'-262px'},200);
	  }, function() {
	    $( this ).removeClass( "con01-dthover" );
	    $(this).children('i').stop().animate({'background-position-Y':'-166px'},200);
	  } 
	);
	
	//首页两个主题切换
	$('.title2 li').click(function(){
		var oInx = $(this).index()+1;
		$(this).addClass('white').siblings().removeClass('white');
		$('.title2').css('background','url(img/shu_nav0'+oInx+'.png) no-repeat');
		$('.Change02').eq(oInx-1).css('display','block').siblings().css('display','none');
	})
	
	//首页四个主题切换
	$('.title4 li').click(function(){
		var oInx = $(this).index()+1;
		$(this).addClass('white').siblings().removeClass('white');
		$('.title4').css('background','url(img/si_nav0'+oInx+'.png) no-repeat');
		$('.Change04').eq(oInx-1).css('display','block').siblings().css('display','none');
	})
	
	//登陆弹出层	
	$('#login-tan').click(function(){
		$('.login_bg').css('display','block');
		$('.login_con').css('display','block');
	});
	$('.login_bg').click(function(){
		$('.login_con').css('display','none');
		$('.login_bg').css('display','none');
	});
	
	//问题反馈弹出层	
	$('#ques-tan').click(function(){
		$('.ques_bg').css('display','block');
		$('.ques_con').css('display','block');
	});
	$('.ques_close').click(function(){
		$('.ques_bg').css('display','none');
	})
	
	//最底部展开伸缩
	$('.Cfoot-click').on('click', function() {
        if ($(this).hasClass('Cfoot_click_show')) {
            $(this).removeClass('Cfoot_click_show').addClass('Cfoot_click_hide');
            $(this).next().slideUp();
        } else {
            $(this).removeClass('Cfoot_click_hide').addClass('Cfoot_click_show');
            $(this).next().slideDown();
        }
    })
	
	//即时比分-赛事-展开伸缩
	$('.W_sai_click').on('click', function() {
        if ($(this).hasClass('W_sai_show')) {
            $(this).removeClass('W_sai_show').addClass('W_sai_hide');
            $(this).next().slideDown();
        } else {
            $(this).removeClass('W_sai_hide').addClass('W_sai_show');
            $(this).next().slideUp();
        }
    })
	
	//表格鼠标经过时
	$('.table-mouser').find('table tr').mouseenter(function(){
		$(this).css('background-color','#e5f4ff');
	}).mouseleave(function(){
		$(this).css('background-color','#fff');
	})
	
	//选择框
	$('.choose b').on('click', function () {
	        if ($(this).hasClass('ture')) {
	            $(this).removeClass('ture');
	        } else {
	            $(this).addClass('ture');
	        }
	    })

	//水心发布弹出层--加减
	$('.w_table_40px tr td i').click(function(){
		$('.xinshui').css('display','block');
	})
	
	$('.arr_up').click(function(){
		
		var vO = $('.in-input01').val();
		var vG =parseInt(vO);
		if(vG > 200){
			return;
		}
		vG = vG+100;
		$('.in-input01').val(vG);
	})
	
	$('.arr_down').click(function(){
		
		var vO = $('.in-input01').val();
		var vG =parseInt(vO);
		if(vG == 100){
			return;
		}
		vG = vG-100;
		$('.in-input01').val(vG);
	})
	
	//即时比分——赛事选择弹出层
	$('.saishi_top li').click(function(){
		$('.saishi_top li i').css('background-color','#fff');
		$(this).find('i').css('background-color','#0095FF');
	})
	
	$('#saishi').click(function(){
		$('.bg').css('display','block');
	});
	
	$('.close').click(function(){
		$('.bg').css('display','none');
	})
	
	
})













