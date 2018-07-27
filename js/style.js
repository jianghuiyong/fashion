// JavaScript Document
$(document).ready(function(){
	/*index 大图切换*/
	var height=$("#jqucon").height();
	var page=1;
	var i=1;
	var num=$("#list img").length;
	var pagemax=Math.ceil(num/i);
	for(j=1;j<=pagemax;j++){
		$("#page").append("<span>"+j+"</span>");
	}
	$("#page span:first").addClass("current");
	$("#page span").mouseover(function(){
		spannum=$(this).index();
		if(!$("#list").is(":animated")){
		$("#list").animate({"top":-height*spannum+"px"},1000);
		$(this).addClass("current").siblings().removeClass("current");
		page=spannum+1;}
	});
	setInterval(function(){
		var a=$("#page .current").index();
		var b=$("#page span:last").index();
		if(a==b){
			$("#page span").eq(0).trigger("mouseover");
			}
			$("#page span").eq(a+1).trigger("mouseover");
	},5000);
	/*index 大图切换右边的span切换*/
	$("#news .biaoqian").eq(0).show().siblings(".biaoqian").hide();
	$("#news p span").mouseover(function(){
		num1=$(this).index();
		$(this).addClass("today").siblings("span").removeClass("today");
		$(this).parents("#news").find(".biaoqian").eq(num1).show().siblings(".biaoqian").hide();;
		});
	/*index 品牌活动*/
	var wide=$("#midcon a").width();
	var pg=1;
	var ii=4;
	var num2=$("#midcon img").length;
	var pagemaxx=Math.ceil(num2/ii);
	$("#actp span:first").addClass("current");
	$("#actp span").click(function(){
		num3=$(this).index();
		$("#midcon").animate({"left":-wide*num3*4+"px"},500);
		$(this).addClass("current").siblings().removeClass("current");
		pg=num3+1;
	});
	$("#midcon a span").hide();
	$("#midcon a").mouseover(function(){
		$(this).find("span").show().css("opacity","0.7");;
		}).mouseout(function(){
			$(this).find("span").hide();
			});
	/*index 热销排行图片放大*/
	$("#hot dl dt a").mouseover(function(e){
		if(this.title==""){
			this.mytitle="暂无介绍";	
		}else{
			this.mytitle=this.title;
			this.title="";
			}
		bigimg="<div class='big'><img src='"+this.href+"' /><p>"+this.mytitle+"</p></div>";
		$("body").append(bigimg);
		x=10;
		y=10;
		$(".big").css({top:(e.pageY+y)+"px",left:(e.pageX+x)+"px"}).show("fast");
	}).mousemove(function(e){
		$(".big").css({top:(e.pageY+y)+"px",left:(e.pageX+x)+"px"});
		}).mouseout(function(){
			$(".big").remove();
			this.title=this.mytitle;
			});
	$("#hot dl dt a").click(function(){
		return false;
		});
	/*index 分类模块左边大图*/
	$(".left").find("dl").show().css("opacity","0.8");
	$(".left").mouseover(function(){
		if(!$(this).find("dl").is(":animated")){
		$(this).find("dl").animate({"height":"125px"},200);
		}
		}).mouseout(function(){
		if(!$(this).find("dl").is(":animated")){
			$(this).find("dl").animate({"height":"55px"},200);
			}
			});
	/*index 分类模块右边的切换*/
	$(".right").each(function(){
		$(this).find("dl:not(':first') dd").hide();
		$(this).find("dl").eq(0).addClass("current");
		$(this).find("dl").mouseover(function(){
			$(this).addClass("current").siblings("dl").removeClass("current");
			$(this).find("dd").show().parent("dl").siblings("dl").find("dd").hide();
			});
		});
	/*index 分类模块中间的切换*/
	$(".mid .pro").each(function(){
		$(this).find("dl dd").eq(0).addClass("first");
		$(this).find("dl dd").eq(1).addClass("second");
		$(this).find(".bigcon").hide();
		});
	$(".bigcon").each(function(){
		$(this).find("p").eq(1).addClass("aa");
		$(this).find("p").eq(0).addClass("imgs");
		});
	/*index 热销排行图片放大*/
	$(".pro dl dt").mouseover(function(e){
		xx=30;
		yy=-150;
		$detail=$(this).parents(".pro").find(".bigcon");
		$detail.css({top:(e.pageY+yy)+"px",left:(e.pageX+xx)+"px"}).show("fast");
	}).mousemove(function(e){
		xxx=30;
		yyy=-150;
		$detail=$(this).parents(".pro").find(".bigcon");
		$detail.css({top:(e.pageY+yyy)+"px",left:(e.pageX+xxx)+"px"});
		}).mouseout(function(){
			$detail.hide();
			});
	/*index 名店街*/
	$("#pup dl dd").hide();
	$("#pup dl").mouseover(function(){
		$(this).find("dd").show().css("opacity","0.8");
		}).mouseout(function(){
			$(this).find("dd").hide();
			});
	$("#brand li").each(function(){
		$(this).find("a").each(function(){
			$(this).find("img").eq(0).show().siblings("img").hide();
			$(this).mouseover(function(){
				$(this).find("img").eq(1).show().siblings("img").hide();
				}).mouseout(function(){
					$(this).find("img").eq(0).show().siblings("img").hide();
					});
			});
		});
	/*search 获得光标*/
	$("#search").focus(function(){
		if($(this).val()==this.defaultValue){
			$(this).val("");
			}
	}).blur(function(){
		if($(this).val()==""){
			$(this).val(this.defaultValue);
			}
	});
});