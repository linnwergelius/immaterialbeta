$("video").prop('muted', true);


$(".muted").click(function () {
    if ($("video").prop('muted')) {
        $("video").prop('muted', false);
        $(this).addClass('unmute-video');

    } else {
        $("video").prop('muted', true);
        $(this).removeClass('unmute-video');
    }
    console.log($("video").prop('muted'))
});

$(".button").click(function(){
  $(".fingerimg").fadeToggle();
});


$("#readme").click(function(){
  $(".infotext").fadeToggle(); 
  $(this).css("z-index",10); 
  
  $(".backgroundtext").fadeToggle();  
   
  
});

$(".window").mousedown(function(){
	$(this).css("z-index",2);
	$(this).siblings('div').css("z-index",1);
	
});


$("#navigate").click(function(){
	
	$("li").fadeToggle();
});
