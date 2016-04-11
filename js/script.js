window.onload = function(){
	var box = document.getElementById("box");
	var go = document.getElementById("go");
	eventUtil.addHandler(box,'click',function(){
		alert("这是父盒子");
	});
	eventUtil.addHandler(go,'click',function(e){
		alert(eventUtil.getType(e));
		eventUtil.stopPropagation(e);
		eventUtil.preventDefault(e);
	});
}