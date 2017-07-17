$(function(){
	
//	banner
	jQuery(".slideBox").slide({
		mainCell:".bd ul",
		autoPlay:true,
		autoPage:true
	});
////	热门搜索
//	jQuery(".txtMarquee-left").slide({
//		mainCell:".bd ul",
//		autoPlay:true,
//		effect:"leftMarquee",
//		interTime:50,
//		trigger:"click"
//	});
//	首页有问必答
	$('.con4_main ul>li:odd').css({'float':'right'});
	$('.con4_main ul>li:even').css({'float':'left'});
//	二级页有问必答
	$('.answer_list ul>li:odd').css({'float':'right'});
	$('.answer_list ul>li:even').css({'float':'left'});
	
//	医院简介下的医院环境
	$(".mr_frbox").slide({
		mainCell:".mr_frUl ul",
		effect:"leftMarquee",
		autoPlay:true,
		vis:3,
		interTime:15,
		trigger:"click"
	});
//	首页专家团队
	jQuery(".ladyScroll").slide({ 
		mainCell:".dlList",
		effect:"leftLoop",
		vis:4, 
		autoPlay:true
	});
//鼠标移入
    $('.con3-main').hover(function () {
        $(this).find('.con3_tan').stop().animate({
            bottom: 0
        }, 300);
    }, function () {
        $(this).find('.con3_tan').stop().animate({
            bottom:-218
        }, 300);
    })
//医院简介弹出层
	$('.close').click(function(){
		$('.bg').css('display','none');
		$('.rongyu').css('display','none');
	})
	$('.scrollbox li').click(function(){
		$('.bg').css('display','block');
		$('.rongyu').css('display','block');
	})	
	
//	专家团队详情页
	$('.TDlist_Left ul li').click(function(){ 
//		$(this).addClass("index_oneR_current").siblings().removeClass();
		$(".TDlist_tabcon > ul li").hide().eq($('.TDlist_Left ul li').index(this)).show(); 
	});
	
	$('.TDlist_anli ul>li:odd').css({'float':'right'});
	$('.TDlist_anli ul>li:even').css({'float':'left'});
	
//医院简介横向滚动条
		// 占位符项目来填充列表的功能
	function populate(container, count, offset){
		var output = '';
		offset = isNaN(offset) ? 0 : offset;
		for(var i = 0; i<count; i++ ){
			output += '<li>'+(offset+i)+'</li>';
		}
		return $(output).appendTo(container);
	}

		// 填充列表项
	$('ul[data-items]').each(function(i,e){
		var items = parseInt($(e).data('items'), 10);
		populate(e, items);
	});

		// 主要调用部分
	$(document).on('activated',function(event){
		var $section = $(".scrollbox");
		var $frame = $section.find('.frame'),
			$ul = $frame.find('ul').eq(0),
			$scrollbar = $section.find('.scrollbar'),
			$buttons = $section.find('.controlbar [data-action]');
		
		populate($ul, 10);
			
		// 控制
		$buttons.on('click',function(e){
			var action = $(this).data('action');
			switch(action){
				case 'reset':
				$frame.sly('toStart');
				setTimeout(function(){
					$ul.find('li').slice(10).remove();
					$frame.sly('reload');
				}, 200);
				break;
				default:
				$frame.sly(action);
			}
		});
		
		$section.find(".slyWrap").each(function(i,e){
			var cont = $(this),
				frame = cont.find(".sly"),
				slidee = frame.find("ul"),
				scrollbar = cont.find(".scrollbar"),
				pagesbar = cont.find(".pages"),
				options = frame.data("options"),
				controls = cont.find(".controls"),
				prevButton = controls.find(".prev"),
				nextButton = controls.find(".next"),
				prevPageButton = controls.find(".prevPage"),
				nextPageButton = controls.find(".nextPage");

			options = $.extend({},options,{
				scrollBar: scrollbar,
				pagesBar: pagesbar,
				prev: prevButton,
				next: nextButton,
				prevPage: prevPageButton,
				nextPage: nextPageButton,
				disabledClass: 'btn-disabled'
			});

			frame.sly( options );

			cont.find("button").click(function(){
				var action = $(this).data('action'),
				arg = $(this).data('arg');
				switch(action){
					case 'add':
					slidee.append(slidee.children().slice(-1).clone().removeClass().text(function(i,text){
						return text/1 + 1;
					}));
					frame.sly('reload');
					break;
					case 'remove':
					slidee.find("li").slice(-1).remove();
					frame.sly('reload');
					break;
					default:
					frame.sly(action, arg);
				}
			});

		});
	
	}).trigger('activated');
	

})