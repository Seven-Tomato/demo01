$(function(){
	var a=false
	function compare(className,ite){
		if (a==false) {
			var now=$(className).text();
			now++
			$(className).text(now);
			ite.attr("src","state-thumbs-heart.svg");
			a=true;
		} else{
			var now=$(className).text();
			now--
			$(className).text(now);
			ite.attr("src","state-thumbs-up.svg");
			a=false
		}
	}
	function oclick(ite,num){
		ite.click(function(){
			compare(num,ite)
		})
	}
	oclick($(".item01 .heart"),".num01");
	oclick($(".item02 .heart"),".num02");
	oclick($(".item03 .heart"),".num03");
	oclick($(".item04 .heart"),".num04");
	oclick($(".item05 .heart"),".num05");
	oclick($(".item06 .heart"),".num06");
	oclick($(".item07 .heart"),".num07");

	//删除状态
	$(".dele").click(function(){
		$(this).parents(".item").css("display","none");
	});
	//点击更多
	$(".down").click(function(){
		$(this).next($(".nexts_pl")).slideDown();
		$(this).fadeOut(0);
	})
	
	$(".up").click(function(){
		$(this).parent($(".nexts_pl")).slideUp();
		$(this).parent().prev($(".down")).delay(200).fadeIn(0);
	})
	//img_box
	function boxStyle(oname){
		var counts=$(oname).find("img");
		if (counts.length==1) {
			$(oname).css({"width":"10rem","overflow":"hidden"})
		    $(oname).find("img").css({"width":"10rem","height":"10rem"})
		}else if(counts.length==2){
			$(oname).css({"width":"19rem","overflow":"hidden"})
		    $(oname).find("img").css({"width":"8rem","height":"8rem","float":"left","marginBottom":"0.2rem","marginRight":"0.2rem"})
		}else if(counts.length==3||counts.length<=9&&counts.length>=5){
			$(oname).css({"width":"19rem","overflow":"hidden"})
		    $(oname).find("img").css({"width":"5rem","height":"5rem","float":"left","marginBottom":"0.2rem","marginRight":"0.2rem"})
		}else if(counts.length==4){
			$(oname).css({"width":"19rem","overflow":"hidden"})
		    $(oname).find("img").css({"width":"8rem","height":"8rem","float":"left","marginBottom":"0.2rem","marginRight":"0.2rem"})
		}
	}
	boxStyle(".img_box ");
	boxStyle(".img_box02 ");
	boxStyle(".img_box03 ");
	boxStyle(".img_box04 ");
	boxStyle(".img_box05 ");
})
