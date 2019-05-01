
$(document).mousedown(function(){
	$("p.erase").fadeOut();
});

$("#bg").eraser({size:500});





$("#bg").mouseup(function(){
$(".clipThru").fadeOut("slow");
});






//$(".").click(function(){
//	
//	$(this).fadeOut("slow");
//	//$(".bgimg").removeClass("stretch")	
//})

var i = 0;

$(".titletext").click(function(){
	i++
	
	if (i<2) {
		$(".info").css("color","white");
		
	$(".info").fadeIn("slow");
	$(".info").css("z-index",1);
	$(".info").css("font-size","23px");	
	$(".info").css("bottom",0);
	
	
	} if (i==2) {
		$(".info").fadeOut("slow");
		$(".stone").fadeIn();
		$(".stone").css("display", "grid");
		$(".stone").css("z-index", "2");
		$("h4").addClass("toggle");
		
		$(".toggle").click(function(){
			$(".stone").fadeOut("slow");
			$(".titletext").fadeIn("slow");
			$(".info").fadeIn("slow");
	
		});
		
		
	} if(i==3){
		$(".quote").fadeIn();
		$("body").css("overflow","visible")
		$(this).fadeOut("slow");
		$(".quote").fadeIn("slow");
		
		$("h3").click(function(){
			
	
			$(".stone").fadeIn();
			$(".titletext").fadeOut("slow");
			$(".info").fadeOut("slow");
	
	
		})
		
		
		
	}
	else {
		
	}
	

	
})








/*DISPLAY QUOTES AROUND THE ROCKS*/

//var w = $(".quote").width();
//var h = $(".quote").height();
//

$(".rock").click(function(){
	$("#one").css("color","yellow");
	$("#one").css("top",40);
	$("#one").css("z-index",1);
});

$("#one").click(function(){
	$(this).css("z-index",-1);
	$("#one").css("top",0);
	
	
})



$(".orange").click(function(){
	$("#two").css("color","yellow");
	$("#two").css("top",-20);
	$("#two").css("z-index",1);
});

$("#two").click(function(){
	$(this).css("z-index",-1);
	$(this).css("top",0);
	
	
})


$(".skin").click(function(){
	$("#three").css("color","yellow");
	$("#three").css("top",20);
	$("#three").css("z-index",1);
});     

$("#three").click(function(){
	$(this).css("z-index",-1);
	$(this).css("top",0);
	
	
})


$(".soap").click(function(){
	$("#four").css("color","yellow");
	$("#four").css("top",-20);
	$("#four").css("z-index",1);
});     

$("#four").click(function(){
	$(this).css("z-index",-1);
	$(this).css("top",0);
	
	
})


$(".blood").click(function(){
	$("#five").css("color","yellow");
	$("#five").css("top",20);
	$("#five").css("z-index",1);
});     

$("#five").click(function(){
	$(this).css("z-index",-1);
	$(this).css("top",0);
	
	
})

$(".blossom").click(function(){
	$("#six").css("color","yellow");
	$("#six").css("top",-20);
	$("#six").css("z-index",1);
});     

$("#six").click(function(){
	$(this).css("z-index",-1);
	$(this).css("top",0);
	
	
})


/* NAVIGATE MENU*/

$("#navigate").click(function(){
	
	$("#glideup li").slideToggle();
})




