window.onload=function(){Oloadjs();}
window.onresize=function(){Oloadjs();}

function Oloadjs(){
	$('.Te_Btcon li:last-child').css('border-right','none');
	$('.Te_BtconR dl:last-child').css('padding-left','10px');
	
	$('.close').click(function(){
		$('.bg').css('display','none');
		$('.rongyu').css('display','none');
	})
	$('.Yi_04 li').click(function(){
		$('.bg').css('display','block');
		$('.rongyu').css('display','block');
	})	
	
}


