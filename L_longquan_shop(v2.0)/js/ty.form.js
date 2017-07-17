window.TYForm = {
	
	/**
	 * 初始化下拉列表
	 * 绑定标签: a class=select
		- n		后继表单名称
		- width 文本框的宽度
		- optionwidth 下拉列表选项的宽度
		- value  载入时默认值
		- option 选项列表
	 */
	selectInit : function(selects, config){
		selects.each(function(i){
			var select=$(this);
			var selectBox=select.parent(), selectWidth=select.attr("data-width"), defaultVal=select.attr("data-value"), option, view;
			//设置下拉框默认值
			if(defaultVal) select.val(defaultVal);
			//下拉列表宽度; 默认300
			if(!selectWidth) selectWidth=100; else selectWidth=parseInt(selectWidth,10);
			
			if(selectBox.attr("n") != select.attr("name")){
				selectBox=select.wrap('<a href="javascript:;" n="'+select.attr("name")+'" class="customSelect'+(select.attr("class")?' '+select.attr("class"):'')+'"></a>').parent();
			}else {
				select.siblings().remove();
			}
			var htm_opts='', defaultTxt='';
							
			//下拉菜单
			select.children().each(function(){
				var value=$(this).attr("value");
				if(value==null) value=$(this).html();
				if(defaultVal==value) defaultTxt=$(this).html();
				htm_opts=htm_opts+'<div val="'+value+'">'+$(this).html()+'</div>';
			});
			
			//下拉框当前显示
			view=selectBox.append('<div class="view">'+defaultTxt+'</div>').children(":last");
			
			//自定义下拉菜单
			option = $('<div class="selectOptions"></div>');
			selectBox.prepend(option);
		//	option=selectBox.after('<div class="selectOptions"></div>').next();
			option.html(htm_opts);
			
			//下拉菜单事件
			option.children().each(function(j){
				var opt=$(this);
				opt.click(function(event){
					view.html(opt.html());
					select.val(opt.attr('val'));
					option.hide();
					event.stopPropagation();
					if(config && config['change']) {
						config['change'](opt.attr('val'), select, selectBox);
					}
				}).hover(function(){
					$(this).addClass('hover');
				},function(){
					$(this).removeClass('hover');
				});
			});
			//下拉框事件
			selectBox.addClass('defaultInput initSelect'+selectWidth).unbind('click hover focus blur').click(function(event){
				if(window.TYFselectOptions!=undefined) window.TYFselectOptions.hide();	//关闭已打开的下拉
				window.TYFselectOptions = option;
				var select_inpoft=selectBox.offset(), selectConf={top:select_inpoft.top+selectBox.get(0).offsetHeight+'px', left:select_inpoft.left+'px'};
				option.children().removeClass("select").filter("div[val='"+select.val()+"']").addClass("select");
				option.css(selectConf).show();
				if((tmp=select.attr('optionwidth'))!=undefined) option.css({width:tmp+"px"});
				window._selectIsview=true;
				event.stopPropagation();
			}).hover(function(){
				$(this).addClass('initSelect'+selectWidth+'_hover');
			},function(){
				if($(this).attr("cls_focus")!="1") $(this).removeClass('initSelect'+selectWidth+'_hover');
			}).focus(function(){
				$(this).attr("cls_focus","1").addClass('initSelect'+selectWidth+'_hover');
			}).blur(function(){
				$(this).removeAttr("cls_focus").removeClass('initSelect'+selectWidth+'_hover');
			});
		});
		if(window.TYFselectOptionsInit==undefined) $(document).click(function(){window.TYFselectOptionsInit=true;if(window.TYFselectOptions!=undefined) window.TYFselectOptions.hide();});
		return selects;
	}
};