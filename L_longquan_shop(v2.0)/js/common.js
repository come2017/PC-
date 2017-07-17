/**
 * 删除cookie
 * @param n name
 * @param o options
 * @return
 */
function removeCookie(n,o){
	var opt = {
			expire:-1
		};
	$.extend(opt,o);
	$.cookie(n,"",{expire:-1});
}

/**
 * 格式化货比
 * @param value 值
 * @param sign 符号
 * @param unit 单位
 * @return
 */
function formatMoney(value,sign,unit){
	if (value != null) {
		var price =(Math.round(value * Math.pow(10, 2)) / Math.pow(10, 2)).toFixed(2);
		if (sign) {
			price = "￥" + price;
		}
		if (unit) {
			price += "元";
		}
		return price;
	}
}

(function($){
	$.chkLogin = function(){
		var isLogin = false;
		$.ajax({
			url:webBase+"/login/chkLogin.jhtml?date="+new Date(),
			type: "GET",
			dataType: "json",
			async: false,
			success: function(data) {
				isLogin = data;
			}
		});
		return isLogin;
	}
	$.redLogin = function(url,mes){
		var h = webBase+"/login.jhtml";
		if(url){
			h = h+"?redirectUrl="+url;
		}
		window.location.href = h;
	}
	$(document).ajaxComplete(function(e, r, s) {
		var loginStatus = r.getResponseHeader("loginStatus");
		if (loginStatus == "accessDenied") {
			$.redLogin(location.href, "请登录后再进行操作");
		} 
	});
})(jQuery);