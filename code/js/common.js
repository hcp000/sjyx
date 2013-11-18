
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

$(".buy").click(function(){
	
	$(".buylayer").show();
	
});



	
});















