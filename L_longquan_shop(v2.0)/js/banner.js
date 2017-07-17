function banner(banners){
	var banners = banners==undefined?$(".banner"):banners;
	banners.each(function(i) {
		var banner=$(this),
			childs=banner.children(), 
			bar=childs.eq(2),
			barAll=bar.find('b.bannerScroll div'),
			barlen=barAll.length,
			lnk=childs.eq(1),
			lnkAll=lnk.find('div'),
			conf=$.extend({"height":498,"animate":"scrollX","timeout":4000,"speed":800,"easing":"swing","jiantou":1},eval('('+$(this).attr("conf")+')')),
			height=conf["height"];
		banner.css('height',height+"px");
		lnk.css('height',height+"px");
		if(barlen<=1) return;	//图片个位不大于1时不执行动画
		var animate=conf['animate'],
			easing=conf['easing'],
			speed=conf['speed'],
			timeout=conf['timeout'],
			timer=setTimeout(function(){barAll.eq(1).mousemove()},timeout),
			tmp;
		bar.show();					//当图片数大于1张时 显示按钮
		if(conf['jiantou']==1){		//目标经过banner出现箭头
			var jt=childs.filter("div.jiantou"), jts=jt.find("a");
			
			jts.eq(0).click(function(){var idx=barAll.filter('.select').index();if(idx==barlen-1)idx=0;else idx++;barAll.eq(idx).mousemove()});
			jts.eq(1).click(function(){var idx=barAll.filter('.select').index();if(idx==0)idx=barlen-1;else idx--;barAll.eq(idx).mousemove()});
			banner.hover(function(){jt.show()},function(){jt.hide()});
		}
		/**
			animate:
			scrollX横向滚动(默认)
			scrollY纵向滚动
			fade淡入淡出
		 */
		/**
			easing:
			 swing 默认
			 easeInQuad   慢到快
			 easeOutQuad  快到慢(1)
			 easeInOutQuad 慢到快到慢
			 
			 easeInCubic  慢到快
			 easeOutCubic 快到慢
			 easeInOutCubic 慢到快到慢
			 
			 easeInQuart  慢到快
			 easeOutQuart 快到慢
			 easeInOutQuart  慢到快到慢
			 
			 easeInQuint  慢到快（2）
			 easeOutQuint 快到慢
			 easeInOutQuint 慢到快到慢
			 
			 easeInSine   慢到快
			 easeOutSine  快到慢
			 easeInOutSine  慢到快到慢
			 
			 easeInExpo    慢到快
			 easeOutExpo   快到慢
			 easeInOutExpo   慢到快到慢
			 
			 easeInCirc       慢到快
			 easeInOutCirc    慢到快到慢（3）
			 
			 easeInElastic    抖动到滚动（4）
			 easeOutElastic   滚动到抖动（5）
			 easeInOutElastic 抖动到滚动到抖动（6）
			 
			 easeInBack    回滚到滚动（7）
			 easeInOutBack 滚动到回滚
			 
			 easeInBounce  右弹性滚动到滚动
			 easeOutBounce 滚动到左弹性滚动
			 easeInOutBounce  右弹性滚动到滚动到左弹性滚动
		 */
		
		barAll.each(function(curidx) {			//对当前banner所有按钮进行遍历
			var button=$(this), 				//要操作的按钮
				img=lnkAll.eq(curidx);			//要操作的图片
			button.bind('mousemove',function(){	//对按钮绑定事件
				var index=barAll.filter('.select').index();	//当前显示中的索引
				if(index==curidx) return;
				
				var oldButton=barAll.eq(index),		//操作前 显示的按钮
					oldImg=lnkAll.eq(index),		//操作前 显示的图片
					nextidx;	//下一张图片的索引
				if(oldImg.is(":animated")) return;	//当在动画执行中时，返回
				
				if(animate=='fade'){
					img.css({'margin':'0px', 'z-index':3});	//初始化新图片位置
					
					oldImg.fadeOut(speed,function(){$(this).hide()});	//旧图片执行隐藏动画
					img.fadeIn(speed);		//新图片执行显示动画
				}else {
					var imgInit, imgam, imgoldam;
					if(animate=='scrollX'){	//横向滚动配置
						var boxWidth=lnk.width(), imgLeft, oldimgLeft;
						if(curidx>index){ imgLeft=boxWidth; oldimgLeft=-boxWidth;}	//向左滚动
						else {imgLeft=-boxWidth;oldimgLeft=boxWidth;}
						imgInit={'margin-top':'0px', 'margin-left':imgLeft+'px'};
						imgam={'margin-left':oldimgLeft+'px'};
						imgoldam={'margin-left':'0px'};
					}else {					//纵向滚动配置
						var imgTop, oldimgTop;
						if(curidx>index){ imgTop=height;oldimgTop=-height}	//向左滚动
						else {imgTop=-height;oldimgTop=height}
						imgInit={'margin-left':'0px', 'margin-top':imgTop+'px'};
						imgam={'margin-top':oldimgTop+'px'};
						imgoldam={'margin-top':'0px'};
					}
					img.css(imgInit);	//初始化新图片位置
					oldImg.animate(imgam,speed,easing,function(){$(this).hide()});
					img.show().animate(imgoldam,speed,easing);
				}
				bar.animate({'scrollTop':(curidx-1)*140},300);
				oldButton.removeClass('select');	//选中按钮操作
				button.addClass('select');
				
				clearTimeout(timer);
				timer=setTimeout(function(){barAll.eq((nextidx=curidx+1)>barlen-1?0:nextidx).mousemove()},timeout);
				
				
			});
		});
	});
}
