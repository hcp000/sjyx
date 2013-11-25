
$(function(){
	
var wrap={
	$wrapBg:$(".wrap_bg"),
	$imgBg:$(".img"),
	$layer:$(".layer"),

	minWidth:980,
	minHeight:680,
	init:function(){
		this.$wrapBg.width($(document).width());
		this.$wrapBg.height($(document).height());
		this.$imgBg.width($(document).width());
		this.$layer.width($(document).width());
		this.$layer.height($(document).height());
		var randomNum=Math.floor(Math.random()*4+0);
		$(".switch li").eq(randomNum).addClass("on");
		
		var $flash='<embed type="application/x-shockwave-flash" src="../js/sj.swf" width="192" height="453" allowfullscreen="true" allowscriptaccess="always" wmode="transparent">';
		var $span="<span class='icon'></span>";
		var isIE = !-[1,];
		if(isIE){
			try{
				var swf1 = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
				$(".content .content_l").html($flash);
			}
			catch(e){
				$(".content .content_l").html($span);
			}
		}
		else {
			try{
				var swf2 = navigator.plugins['Shockwave Flash'];
				if(swf2 == undefined){
					$(".content .content_l").html($span);
				}
				else {
					$(".content .content_l").html($flash);
				}
			}
			catch(e){
				$(".content .content_l").html($span);
			}
		}
		
		
		
		
	}

};

wrap.init();
	
$(window).resize(function(){
	wrap.init();
});	
	

$(".switch li").hover(function(){
	$(this).find("img").fadeIn("slow");
	
	},function(){
	
	$(this).find("img").fadeOut("slow");
	
});


var onHtml=$(".switch2 li.on").html();
var switch2=[];
for(i=0;i<=$(".switch2 li.no").length;i++)
{
	switch2[i]=$(".switch2 li.no").eq(i).html();
	
	
}


$(".switch2 li").mouseover(function(){
	var hindex=$(".switch2 li").index(this);
	var oindex=$(".switch2 li").index($(".switch2 li.on"));

	$(".switch2 li").attr("class","");
	$(".switch2 li").addClass("no");
	$(".switch2 li").eq(hindex).removeClass("no").addClass("on").html(onHtml);
	for(i=0;i<=$(".switch2 li.no").length;i++)
	{
		$(".switch2 li.no").eq(i).html(switch2[i]);
		
		
	}

});






$(".paging1 li").click(function(){
	var index=$(".paging1 li").index(this);
	$(".paging1 li").removeClass("on");
	$(".paging1 li").eq(index).addClass("on");
	$("#p0,#p1,#p2").hide();
	$("#p"+index).show();
	
});

$(".next").click(function(){
	var n=$(".paging1 li").index($(".paging1 li.on"));
	if(n<2)
	{
		n++;
		$(".paging1 li").removeClass("on");
		$(".paging1 li").eq(n).addClass("on");
		$("#p0,#p1,#p2").hide();	
		$("#p"+n).show();
		
	}
	else if(n==2)
	{
		$(".paging1 li").removeClass("on");
		$(".paging1 li").eq(0).addClass("on");
		$("#p0,#p1,#p2").hide();	
		$("#p0").show();		
	}

});

$(".pxkc p a").click(function(){
	var index=$(".pxkc p a").index(this);
	$(".pxkc1,.pxkc2,.pxkc3,.pxkc").hide();
	index++;
	$(".pxkc"+index).show();	
	
});



$(".buylayer .buyclose").click(function(){
	$(".buylayer").hide();
	
});

$(".buylayer2 .buyclose").click(function(){
	$(".buylayer2").hide();
	
});

$(".buy").click(function(){
	
	$(".buylayer2").show();
	
});

















	
});















