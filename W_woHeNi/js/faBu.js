$(function(){
		//添加标签
	$('.add_bq').on('click',function(event){
		$('.bq_list02').show();
		return false;
	});
	
	//删除标签
	$('.bq_list01').delegate('img','click',function(){
		var txt = $(this).parent().text();
		$(this).parent().remove();
		$('.bq_list02 li').each(function(){
			if(txt==$(this).text()){
				$(this).removeClass("cut");
			}
		});
	});
	//标签列表显示隐藏
//	$(document).click(function(){
//		$('.bq_list02').hide();
//	})
	$('.bq_list02').mouseleave(function(){
		$('.bq_list02').hide();
	})
	//标签列表点击样式
	$('.bq_list02 li').on('click',function(){
		if($(this).hasClass('cut')){
			return;
		}
		$(this).addClass('cut');
		var oTxt = $(this).text();
		/*****************************
				李玉生 隐藏域位置
		******************************/
		
		
		
		$('<li>'+ oTxt +'<img src="imgs/neiye/close.png"/></li>').appendTo('.bq_list01');
	});
	$('.bq_list02').on('click',function(event){
		return false;
	});
	//其他选项点击操作
	$('.bd_list02 .check,.sp_date .check').click(function(){
		if($(this).hasClass('check_n')){
			$(this).removeClass('check_n');
		}else{
			$(this).addClass('check_n');
		}
	})
	//删除选项
	//		$('.del').click(function(){
	//			$(this).parent().hide();
	//		})
	//表单展开、收起
	$('.bd_show').click(function(){
		if($(this).hasClass('bd_hide')){
			$(this).removeClass('bd_hide').text('收起表单');
			$('.bd_warp').stop().slideDown();
		}else{
			$(this).addClass('bd_hide').text('展开表单');
			$('.bd_warp').stop().slideUp();
		}
	})
	
	//收费票、免费票切换
	$(function(){
		$('.sp_chose li').click(function(){
			$(this).addClass('sp_cut').siblings().removeClass('sp_cut');
			var i = $(this).index();
			$('.sp_con').eq(i).show().siblings('.sp_con').hide();
		})
	})
		
	//增加、删除收费票
	$('.add_sf').click(function(){
		var copy = $('.sf_con').eq(0).clone(true);
//		$(this).prop("outerHTML");
		copy.insertBefore('.add_sf');
		//删除收费票
		var num = $('.sf_con').length;
		
		//收费票input
		addId(num,'.sfIpt','sfIpt');
		//价格input
		addId(num,'.jgIpt','jgIpt');
		//保存
		addId(num,'.bd_btn','bd_btn');
		//订购日期
		addId(num,'.checkD','checkD');
		//有效日期
		addId(num,'.checkY','checkY');
		
		//alert(num);
		$('.sp_del_no').addClass('sp_del');
		if(num==2){
			$('.sp_del').click(function(){
				removeNode(this);
			})
		}
		
	});
	
	//退款设置
	$('.tui_site li').click(function(){
		$(this).addClass('tui_cur').siblings().removeClass('tui_cur');
	})

});

function addId(n,obj,a){
	for (var i=0; i<n; i++) {
		$('.sf_con').find(obj).eq(i).attr('id',a +'_'+i);
	}
}

function removeNode(o){
	var num = $('.sf_con').length;
	$(o).closest('.sf_con').remove();
	if(num==2){
		$('.sp_del_no').removeClass('sp_del');
		$('.sp_del_no').unbind('click');
	}
}

