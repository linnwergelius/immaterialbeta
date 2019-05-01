
$(window).on('scroll', function () {
	
	var p = $(".blurry").offset();
	
	console.log(p);
	
	if ($(window).scrollTop()>(p.top)){
		var pixs = $(document).scrollTop()-(p.top);
	   	pixs = pixs / 20;
		$(".blurry").css({"-webkit-filter": "blur("+pixs+"px)","filter": "blur("+pixs+"px)" })} else{
		   	$(".blurry").css({"-webkit-filter": "blur(0)","filter": "blur(0px)" })
			
	}
	
	//if ($(window).scrollTop()>1800) /*VAR HAMNAR BILDEN PÅ SIDAN ÄNDRA DÄREFTER*/
	//{	var pixs = $(document).scrollTop()-1800;
    //pixs = pixs / 20;
    //$(".blurry").css({"-webkit-filter": "blur("+pixs+"px)","filter": "blur("+pixs+"px)" })} else{
	// $(".blurry").css({"-webkit-filter": "blur(0)","filter": "blur(0)" })}




});
/*
$(window).on('scroll', function () {
    var pixs = $(document).scrollTop()
    pixs = pixs / 100;
    $(".blurry").css({"-webkit-filter": "blur("+pixs+"px)","filter": "blur("+pixs+"px)" })     
});*/


/*READ ME BUTTON CLICKIN*/

$(document).ready(function(){
	

	 
  $("#gobutton").click(function(){
	 
    $(".middle").hide();
	$("#introwrap").hide();
	/*$("header").hide();*/
	$(this).fadeOut();
	
	
	$("#workshopPages").delay(100).fadeIn(200);
    $(window).scrollTop(0);
	 $("#datCss").delay(100).attr("href", "pancakes-tezt.css") 
	
	
	
	
  });
});


/*MENU*/

$("#navigate").click(function(){
	$(".logo").fadeToggle();
	
	$("#glideup").fadeToggle();
});

/*HOME BUTTON*/

$("#home").click(function(){
	
    $(".middle").fadeIn();
	$("#introwrap").fadeIn();
	/*$("header").hide();*/
	
	$("#gobutton").fadeIn();
	$("#workshopPages").hide();
   /* $(window).scrollTop(0);*/
	 $("#datCss").delay(100).attr("href", "pancakes.css") 
	
	
});


$("#home").mouseover(function() {
  $(this).text("HOME");
})
.mouseout(function() {
  $(this).text("BODY");
});