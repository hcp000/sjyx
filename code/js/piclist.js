var piclist = {
	aLi : [],
	iNow : 0,
	timer : null,
	aSort : [],
	aPosition : [
			//{width:322,height:226,top:111,left:306,zIndex:10},
			{width:357,height:261,top:97,left:306,zIndex:10},
			{width:233,height:164,top:148,left:197,zIndex:8},
			{width:193,height:136,top:164,left:90,zIndex:6},
			{width:193,height:136,top:164,left:677,zIndex:6},
			{width:233,height:164,top:148,left:527,zIndex:8}
		],

	setInter: function(){
		var self = this;
		self.iNow++;
		if(self.iNow>self.aLi.length-1){
			self.iNow = 0;
		}
	},

	Sort: function(){
		var self = this;
		for(var i=0;i<self.aLi.length;i++){
			self.aSort[i] = self.aPosition[i];
		}
	},
	sMove: function(){
		var self = this;
		for(var i=0;i<self.aLi.length;i++){
			self.startMove(self.aLi[i], self.aSort[i], function(){self.one();});
			self.aLi[i].className = '';
		}
		self.aLi[self.iNow].className = 'hove';
	},
	one: function(){
		var self = this;
		
		for(var i=0;i<self.aLi.length;i++){
			if(self.aLi[i].style.width == '344px'){
				var oDiv = self.aLi[i].getElementsByTagName('div')[0];
				//startMove(oDiv, {opacity:0});
			}
		}
	},
	init: function(objs){
		var self = this;
		self.aLi = objs;
		for(var i=0;i<self.aLi.length;i++){
			self.aLi[i].index = i;
			self.aLi[i].style.width = self.aPosition[i].width +'px';
			self.aLi[i].style.height = self.aPosition[i].height +'px';
			self.aLi[i].style.top = self.aPosition[i].top +'px';
			self.aLi[i].style.left = self.aPosition[i].left +'px';
			self.aLi[i].style.zIndex = self.aPosition[i].zIndex;
			self.aSort[i] = self.aPosition[i];

			self.myAddEvent(self.aLi[i], 'click', function(){
				var iSort = this.index;
				self.iNow = this.index;
				self.Sort();
				for(i=0;i<iSort;i++){
					self.aSort.unshift(self.aSort.pop());
				}
				self.sMove();
			});
		}
		self.one();
	},
	
	myAddEvent: function(obj, sEvent, fn){
		if(obj.attachEvent){
			obj.attachEvent('on' + sEvent, function(){
				fn.call(obj);
			});
		}else{
			obj.addEventListener(sEvent, fn, false);
		}
	},
	startMove: function(obj, json, fnEnd){
		var self = this;
		if(obj.timer){
			clearInterval(obj.timer);
		}
		obj.timer = setInterval(function (){
			self.doMove(obj, json, fnEnd);
		}, 30);
	},
	getStyle: function(obj, attr){
		return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, false)[attr];
	},
	doMove: function(obj, json, fnEnd){
		var self = this;
		var iCur = 0;
		var attr = '';
		var bStop = true;
		for(attr in json){
			attr == 'opacity' ? iCur = parseInt(100*parseFloat(self.getStyle(obj, 'opacity'))) : iCur = parseInt(self.getStyle(obj, attr));
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
};
