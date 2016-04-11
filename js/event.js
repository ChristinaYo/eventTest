		// var box = document.getElementById("box");
		// var btn1 = document.getElementById("item1");
		// var btn2 = document.getElementById("item2");
		// var btn3 = document.getElementById("item3");
		// var go = document.getElementById("go");
		function showMsg(event){
			event = event || window.event;
			var ele = event.target || event.srcElement;
			alert(ele);
			//阻止冒泡事件发生
			event.stopPropagation();
		}
		
		//父盒子
		function showBox(){
			alert("bubble box");
		}
		
		//跳转
		function stopGoto(event){
			event.stopPropagation();
			event.preventDefault();
		}
		var eventUtil = {
			//添加事件
			addHandler: function(element,type,handler){
				if(element.addEventListener){
					element.addEventListener(type,handler,false);
				}else if(element.attachEvent){
					element.attachEvent('on'+type,handler);
				}else{
					element['on'+type] = handler;
				}
			},
			//取消事件
			removeHandler: function(element,type,handler){
				if(element.removeEventListener){
					element.removeEventListener(type,handler,false);
				}else if(element.detachEvent){
					element.detachEvent('on'+type,handler);
				}else{
					element['on'+type] = null;
				}
			},
			//阻止事件默认行为
			preventDefault: function(event){
				if(event.preventDefault){
					event.preventDefault();
				}else{
					//IE浏览器运用阻止默认行为的方法
					event.returnValue = false;
				}
			},
			//阻止事件冒泡
			stopPropagation: function(event){
				if(event.stopPropagation){
					event.stopPropagation();
				}else{
					event.cancelBubble = true;
				}
			},
			getType: function(event){
				return event.type;
			},
			getElement: function(event){
				//后者是IE浏览器获取事件元素方式
				return event.target || event.srcElement;
			}
		};
		// eventUtil.addHandler(btn1,"click",showMsg);
		// eventUtil.addHandler(btn2,"click",showMsg);
		// eventUtil.addHandler(box,"click",showBox);
		// eventUtil.addHandler(go,"click",stopGoto);