var btn_ok=$("#btn_ok");
if(btn_ok.length!=0){
	var time=parseInt($("body").attr("time"),10);
	if(time>0){
		var timed=0, btn_time=btn_ok.append('<font class="red">'+time+'</font>').children(":last"), t=setInterval(function(){
			timed++;
			if(timed==time){
				window.location=btn_ok.attr("href");
				return clearInterval(t);
			}
			btn_time.html(time-timed);
		},1000);
	}
	$(document).keypress(function(event){
		if(event.keyCode==13 || event.keyCode==27 || event.keyCode==32){
		   window.location=$("#btn_ok").attr("href");
		}
	});
}