$(function(){
	var oBut = $('#list');
	var aLi = $('#list li');
	var i = iNow = 0;
	var timer = null;
	var aSort = [];
	var aPosition = [
			//{width:322,height:226,top:111,left:306,zIndex:10},
			{width:357,height:261,top:97,left:306,zIndex:10},
			{width:233,height:164,top:148,left:197,zIndex:8},
			{width:193,height:136,top:164,left:90,zIndex:6},
			{width:193,height:136,top:164,left:677,zIndex:6},
			{width:233,height:164,top:148,left:527,zIndex:8}
		];

	for(i=0;i<aLi.length;i++){
		aLi[i].index = i;
		aLi[i].style.width = aPosition[i].width +'px';
		aLi[i].style.height = aPosition[i].height +'px';
		aLi[i].style.top = aPosition[i].top +'px';
		aLi[i].style.left = aPosition[i].left +'px';
		aLi[i].style.zIndex = aPosition[i].zIndex;
		aSort[i] = aPosition[i];

		myAddEvent(aLi[i], 'click', function(){
			var iSort = this.index;
			iNow = this.index;
			Sort();
			for(i=0;i<iSort;i++){
				aSort.unshift(aSort.pop());
			}
			sMove();
		});
	}

	function setInter(){
		iNow++;
		if(iNow>aLi.length-1){
			iNow = 0;
		}
	}
	
	function Sort(){
		for(i=0;i<aLi.length;i++){
			aSort[i] = aPosition[i];
		}
	}
	function sMove(){
		for(i=0;i<aLi.length;i++){
			startMove(aLi[i], aSort[i], function(){one();});
			aLi[i].className = '';
		}
		aLi[iNow].className = 'hove';
	}
	function one(){
		for(i=0;i<aLi.length;i++){
			if(aLi[i].style.width == '344px'){
				var oDiv = aLi[i].getElementsByTagName('div')[0];
				//startMove(oDiv, {opacity:0});
			}
		}
	}
	one();
});

function myAddEvent(obj, sEvent, fn){
	if(obj.attachEvent){
		obj.attachEvent('on' + sEvent, function(){
			fn.call(obj);
		});
	}else{
		obj.addEventListener(sEvent, fn, false);
	}
}
function startMove(obj, json, fnEnd){
	if(obj.timer)clearInterval(obj.timer);
	obj.timer = setInterval(function (){
		doMove(obj, json, fnEnd);
	}, 30);
}
function getStyle(obj, attr){
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, false)[attr];
}
function doMove(obj, json, fnEnd){
	var iCur = 0;
	var attr = '';
	var bStop = true;
	for(attr in json){
		attr == 'opacity' ? iCur = parseInt(100*parseFloat(getStyle(obj, 'opacity'))) : iCur = parseInt(getStyle(obj, attr));
		if(isNaN(iCur)){
			iCur = 0;
		}
		if(navigator.userAgent.indexOf("MSIE 8.0") > 0){
			var iSpeed = (json[attr]-iCur) / 3;
		}else{
			var iSpeed = (json[attr]-iCur) / 5;
		}
		iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
		if(parseInt(json[attr])!=iCur){
			bStop = false;
		}
		if(attr=='opacity'){
			obj.style.filter = "alpha(opacity:"+(iCur+iSpeed)+")";
			obj.style.opacity = (iCur + iSpeed) / 100;
		}else{
			attr == 'zIndex' ? obj.style[attr] = iCur + iSpeed : obj.style[attr] = iCur + iSpeed +'px';
		}
	}
	if(bStop){
		clearInterval(obj.timer);
		obj.timer = null;
		if(fnEnd){
			fnEnd();
		}
	}
}