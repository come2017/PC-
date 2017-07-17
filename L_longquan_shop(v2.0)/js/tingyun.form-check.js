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
	if(window._windowPrompt==undefined) window._windowPrompt=_body.prepend('<div id=Sys_window_prompt style="position:fixed;top:-8px;left:0px;z-index:9998;display:none;text-align:center;padding:22px 10px 16px 10px;color:#007BB7;font-site:14px;font-weight:bold;background:#77D2FF;width:260px;border-radius:8px;box-shadow: 0px 3px 2px rgba(223, 220, 220, 0.8);"></div>').children(':first');
	var dftc={s:4000,e:0,t:'self'},cnf={},prompt;
	if(typeof(c)!='object')cnf=$.extend(dftc,{e:c});else cnf=$.extend(dftc,c);
	if(cnf.t=='parent')prompt=top._windowPrompt;else prompt=_windowPrompt;
	
	function tclear(){clearTimeout(window.t_prompt)};
	function tstart(){window.t_prompt=setTimeout(function(){_windowPrompt.fadeOut();},cnf.s)};
	tclear();
	prompt.removeClass();
	if(cnf.e!=1) {
		if(cnf.e==0) prompt.css({color:'red', border:'1px solid #fe5a59', background:'#fcf2f0'});
		else prompt.addClass(cnf.e);
	}else prompt.css({color:'#50980d', border:'1px solid #50980d', background:'#f4faee'});
	prompt.html(html).css({left:(_body[0].clientWidth-280)/2+'px'}).fadeIn().hover(function(){tclear()},function(){tstart()});
	tstart();
}
/**
 * 弹出选择窗口
 * 
 * init 初始窗体的值
 	- 格式1:<div value=1>aaa</div><div value=2>bbb</div><div value=3>ccc</div>
	- 格式2: {'1':'aaa','2':'bbb'}
	- 格式3：this；在属性中写 init="'1':'aaa','2':'bbb'"
 * outtxt 选中后输出显示
 * outvalue 选中后输出值
 */
function winselect(init,outtxt,outvalue){
	if(window._winselect==undefined) {
		window._winselect=$(document.body).append('<div class="winselect"><div class="winselect-items"></div></div>').children(":last");
		window._winselect_items=_winselect.children(":first");
		_winselect.click(function(e){
			_winselect.hide();
		});
		_winselect_items.click(function(e){
			e.stopPropagation();
		});
	}
	switch(typeof(init)){
		case 'string' : _winselect_items.html(init); break;
		case 'object' :
			if(init.tagName!=undefined) init = eval('({'+$(init).attr("init")+'})');
			var tmp='';
			for(var name in init) tmp+='<div value="'+name+'">'+init[name]+'</div>';
			_winselect_items.html(tmp);
		break;
		default : return;
	}
	outtxt=$(outtxt);
	outvalue=$(outvalue);
	var _items=_winselect_items.children();
	_items.unbind("click").bind("click",function(){
		outtxt.html($(this).html());
		outvalue.val($(this).attr("value"));
		_winselect.hide();
	});
	if(outvalue.val()!='') _items.filter("[value='"+outvalue.val()+"']").addClass("selected");
	_winselect.show();
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
//密码标签
function passLabel(res){
	if(res==undefined) res=$("[tingyun='password']");
	$(document.head).append('<style type="text/css">.passrow { position:relative; margin:0; padding:0;width:316px; }.passrow i { position:absolute; z-index:1; width:316px;height:35px; line-height:35px; overflow:hidden; left:0px; padding-left:10px;font-size:14px}.passrow input { position:relative; z-index:2; background:none;width:310px; height:20px; line-height:20px; border:0 none; font-size:14px; border-left:1px solid #F4F4F4; padding-left:5px; color:#cccccc}</style>');
	res.each(function(i) {
		var pwd=$(this);
		var label = pwd.wrap('<div class="passrow" style="height:auto;width:316px;float:left;background:'+pwd.css("background")+'"></div>').parent().append('<i>'+pwd.attr("novalue")+'</i>').children(":last");
		label.css({"color":pwd.css("color"),"height":pwd.height()+"px","line-height":pwd.css("line-height"),"text-align":pwd.css("text-align"),"top":parseFloat(pwd.css("margin-top").replace('px',''))+parseFloat(pwd.css("padding-top").replace('px',''))+"px"});
		pwd.focus(function(){label.html("");})
		.blur(function(){if($(this).val()=="") label.html(pwd.attr("novalue"));});
	});
}