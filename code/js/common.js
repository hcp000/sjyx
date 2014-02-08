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

	},
	addFlash:function(){
	
		var $flash='<embed src="../js/sj.swf" allowFullScreen="true" quality="high" width="192" height="453" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash" wmode="transparent"></embed>';
		
		var $span="<span class='icon'></span>";
		$(".content .content_l").html($flash);
		
	}

};

wrap.init();
wrap.addFlash();
$(window).resize(function(){
	wrap.init();
});	
	

$(".switch li").hover(function(){
	$(this).find("img").fadeIn("slow");
	
	},function(){
	
	$(this).find("img").fadeOut("slow");
	
});

var imgindex=Math.floor(Math.random()*($(".switch2 li#no1 img").length));
$(".switch2 li#no1 img").eq(imgindex).show();

var onHtml=$(".switch2 li.on").html();
var switch2=[];
for(i=0;i<=$(".switch2 li.no").length;i++){
	switch2[i]=$(".switch2 li.no").eq(i).html();
}


$(".switch2 li").mouseover(function(){
	var hindex=$(".switch2 li").index(this);
	var oindex=$(".switch2 li").index($(".switch2 li.on"));

	$(".switch2 li").attr("class","");
	$(".switch2 li").addClass("no");
	$(".switch2 li").eq(hindex).removeClass("no").addClass("on").html(onHtml);
	for(i=0;i<=$(".switch2 li.no").length;i++){
		$(".switch2 li.no").eq(i).html(switch2[i]);
	}

});

$(".paging1 li").click(function(){
	var index=$(".paging1 li").index(this);
	$(".paging1 li").removeClass("on");
	$(".paging1 li").eq(index).addClass("on");
	$("#p0,#p1,#p2,#p3").hide();
	$("#p"+index).show();
	
});

/**
 * 点击next的事件
 */
$(".next").click(function(){
	var n=$(".paging1 li").index($(".paging1 li.on"));
	var limit = $(".paging1 li").length - 1;
	if(n<limit){
		n++;
		$(".paging1 li").removeClass("on");
		$(".paging1 li").eq(n).addClass("on");
		$("#p0,#p1,#p2,#p3").hide();
		$("#p"+n).show();
		
	} else if(n==limit) {
		$(".paging1 li").removeClass("on");
		$(".paging1 li").eq(0).addClass("on");
		$("#p0,#p1,#p2,#p3").hide();
		$("#p0").show();
	}
	//设置左侧背景随机选择
	var length = $("#bgimgs img").length;
	if(length > 0){
		var index = rnd(0, length)
		$("#bgimg").attr("src", $("#bgimgs img").eq(index).attr("src"));
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

/**
 * 产生随机整数
 */
function rnd(start, end){
    return Math.floor(Math.random() * (end - start) + start);
}

/**
 * 点击弹出弹窗
 */
$(".bgc").click(function(){
	$("#bgcbox").html($("#boxhtml").html()).show();
	$("#bgcbox .buyclose").click(function(){
		$("#bgcbox").hide();
	});
});

/**
 * 点击logo回首页
 */
$(".logo").click(function(){
	window.location="/index.html";
});





});















