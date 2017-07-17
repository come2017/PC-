/**
 * 表单验证
 */
//验证函数
function _formCheck(form,ckr){
try{
	var form=$(form), num=0, isright=true, tipForm=ckr['_self'];
	if(tipForm){
		delete ckr['_self'];
	}
	var inps=form.find("[name]").each(function() {
		var name=$(this).attr("name"), val=$(this).val().replace(/(^\s*)(\s*$)/g, ''), r=ckr[name], tmp;
		$(this).val(val);
		if(r!=undefined){
			var tip=r['tip'];
			if(!tip && tipForm) tip=tipForm;
		
			if((tmp=r['none'])==true){
				_formCheck_err($(this),r,tip,'',true);
				return true;
			}else if(val==''){
				return _formCheck_err($(this),r,tip,r['noneerr']==undefined?r['label']+'不能为空！':r['noneerr']);
			}
			if((tmp=r['novalue'])!=undefined && val==tmp){
				_formCheck_err($(this),r,tip,r['novalueerr']==undefined?"请输入"+r['label']+"！":r['novalueerr']); return false;
			}
			if((tmp=r['smalllen'])!=undefined && val.length<tmp){
				_formCheck_err($(this),r,tip,r['lenerr']==undefined?r['label']+"长度不能小于"+tmp+"字,应至少再输入"+(tmp-val.length)+"字！":r['lenerr']); return false;
			}
			if((tmp=r['maxlen'])!=undefined && val.length>tmp){
				_formCheck_err($(this),r,tip,r['lenerr']==undefined?r['label']+"长度超过最大限制"+tmp+"字,已超出"+(val.length-tmp)+"字！":r['lenerr']); return false;
			}
			if((tmp=r['length'])!=undefined && val.length!=tmp){
				_formCheck_err($(this),r,tip,r['lenerr']==undefined?r['label']+"长度必须为"+tmp+"字，请核对后重试！":r['lenerr']); return false;
			}
			if((tmp=r['reg'])!=undefined &&val!=''&& !tmp.test(val)){
				_formCheck_err($(this),r,tip,r['regerr']); return false;
			}
			if((tmp=r['func'])!=undefined && !r['func']()){
				_formCheck_err($(this),r,tip,r['funcerr']); return false;
			}
			_formCheck_err($(this),r,tip,'',true);
		}
		num++;
	});
	if(inps.length!=num) return false;
}catch(e){alert(">< 出错了:"+e); return false}
return true;
}
//验证 - 提示错误
function _formCheck_err(inp,r,tip,txt,istrue){
try{
	if(tip){
		tip(istrue==true, inp, r);
	}
	if(istrue){
		if(txt) _prompt(txt, 1);
		return true;
	}
	_prompt(txt);
	inp.select();
}catch(e){alert(">< 出错了:"+e)}finally{return false}
}
//显示顶部提示框
function _prompt(html,c){
	try{
		if(!window.parent.window._windowPrompt){
			window.parent.window._windowPrompt = $('<div id="Sys_window_prompt" style="position:fixed;top:-8px;left:0px;z-index:9998;display:none;text-align:center;padding:22px 10px 16px 10px;color:#007BB7;font-site:14px;font-weight:bold;background:#77D2FF;width:260px;border-radius:8px;box-shadow: 0px 3px 2px rgba(223, 220, 220, 0.8);"></div>');
			if(!window.parent.window._body) window.parent.window._body = $('body', window.parent.document);
			window.parent.window._body.append(window.parent.window._windowPrompt);
		}
	}catch(e){}
	
	function tclear(){clearTimeout(window.t_prompt)};
	function tstart(){window.t_prompt=setTimeout(function(){window.parent.window._windowPrompt.fadeOut();},3000)};
	tclear();
	window.parent.window._windowPrompt.removeClass();
	
	if(c==1) window.parent.window._windowPrompt.css({color:'#50980d', border:'1px solid #50980d', background:'#f4faee'});
	else window.parent.window._windowPrompt.css({color:'red', border:'1px solid #fe5a59', background:'#fcf2f0'});
	
	window.parent.window._windowPrompt.html(html).css({left:(window.parent.window._body[0].clientWidth-280)/2+'px'}).fadeIn().hover(function(){tclear()},function(){tstart()});
	tstart();
}
//自动填充选择窗体默认文本;格式对应btn_name,view_name,name
function autoSelect(name,value){
	if(value=='') return;
	var btn = $("[tingyun='btn_"+name+"']");
	$("[tingyun='view_"+name+"']").html(eval('({'+btn.attr("init")+'})')[$("[name='"+name+"']").val()]);
}
//清除文本框默认值
function input_clear(input){
	if(input.value==input.getAttribute('novalue')) input.value='';
}
//填充文本框默认值
function input_fill(input){
	if(input.value=='') input.value=input.getAttribute('novalue');
}