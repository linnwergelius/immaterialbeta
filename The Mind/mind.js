


/*THEME BUTTON*/

$(".sky").click(function(){
	$("body").css("background-image", "url('media/sky.gif')");
	$("#theme").css("animation", "spin 0.4s ease-out 1");

	
});

$(".reverse").click(function(){
	$("body").css("background-image", "none");
	$("#theme").css("animation", "spinback 0.4s ease-out 1");
	
	
});

$( ".sky" )
  .mouseover(function() {
    $( "p.themetext" ).text("SKY");
  })
  .mouseout(function() {
    $( "p.themetext" ).text( "THEME" );
  });

$( ".reverse" )
  .mouseover(function() {
    $( "p.themetext" ).text("STANDARD");
  })
  .mouseout(function() {
    $( "p.themetext" ).text( "THEME" );
  });
  
  
  
/* NAVIGATE MENU*/

$("#navigate").click(function(){
	
	$("#glideup li").slideToggle();
})


/*SHOW ON CLICK*/

var i = 0;

$("button").click(function(){
  
	$("div#startscreen").fadeOut("slow");

	$("#delete").fadeOut("slow");
});


	



$(".clicker").click (function(e){
	console.log(i);
	
		
	

		var a = $(".title").width();
		var b = $(".title").height();
		
	
		
	i++
		
	if (i==1){
		
	$("#firstBubble").css("left",(event.pageX - a)+"px");
	$("#firstBubble").css("top",(event.pageY - b)+"px");
	$("#firstBubble").fadeIn();
	


	} if (i==2){	
		 
	$("#secondBubble").css("left",(event.pageX - a )+"px");
	$("#secondBubble").css("top",(event.pageY - b)+"px");
	$("#secondBubble").fadeIn();
	
	} if (i==3){
	
	$("#thirdBubble").css("left",(event.pageX - a )+"px");
	$("#thirdBubble").css("top",(event.pageY - b)+"px");
	$("#thirdBubble").fadeIn();
	
	} if(i==4){
		
	$("#fourthBubble").css("left",(event.pageX - a )+"px");
	$("#fourthBubble").css("top",(event.pageY - b)+"px");
	$("#fourthBubble").fadeIn();
		
	}  
	
	
	else {};
		
})

/*THOUGHTS*/
$(".title").click (function(e){
	 e.stopPropagation();

	console.log(i);
	var c = $("#thoughtbubble").width();
	var d = $("#thoughtbubble").height();
	
	var distanceTop = $(this).offset();
	
	console.log(distanceTop.top)
	
	
	$("#thoughtbubble").show();
	
	if (distanceTop.top>300){
		
		$("#thoughtbubble").css("transform","rotate(0deg)");
		$("#thoughtbubble p").css("transform","rotate(0deg)");
		$(".clipone").scrollTop(0);
		
		$("#thoughtbubble").css("left",(event.pageX - (c/2)-70)+"px");
		$("#thoughtbubble").css("top",(event.pageY - d)+"px");
		
		
		
	} else {
		
		$(".clipone").scrollTop(5000);
		
		$("#thoughtbubble").css("transform","rotate(180deg)");
		$("#thoughtbubble p").css("transform","rotate(180deg)");
		
		
		$("#thoughtbubble").css("left",(event.pageX-70)+"px");
		$("#thoughtbubble").css("top",(event.pageY)+"px");
	}
	
	
});
	
/*INFO*/	
$("#firstBubble").click(function(e){
	
  e.stopPropagation();  // stop the event from propagating up the visual tree
  var insert1 = "The Turing test was developed by English computer scientist Alan Turing. The purpose is to test a machine’s ability to show intelligence equivalent to, or on the same level, as a human-being. It was inspired by a popular party game at the time, were two people go in to separate rooms ans pretend to be one another. The audience then have to decide who is who. With the Turing test, an evaluator holds a text based conversation with a human and a machine to try and decide who is who. With the conversation being text based, no judgement will be made on the machines ability to render speech. ";
  var br ="<br> <br>"
  var insert2 ='When introducing the test Turing started by asking ”Can machines think?” , but since thinking is difficult to define he changed it to one that can actually be answered.';
  var link = "<a  href='https://en.wikipedia.org/wiki/Turing_test' target='blank'>READ MORE</a>"
  var allText = insert1 + br + insert2 + br + link
  
  $("#thoughtbubble p").html(allText);
  

});


$("#secondBubble").click(function(e){
	
  e.stopPropagation();  // stop the event from propagating up the visual tree
  var insert1 = 'Formulated by AI academics Hans Moravec, Rodney Brooks, Marvin Minsky  in the 1980’s the paradox goes:';
  var brbr ="<br> <br>"
  var br="<br>"
  var insert2 ='”it is comparatively easy to make computers exhibit adult level performance on intelligence tests or playing checkers, and difficult or impossible to give them the skills of a one-year-old when it comes to perception and mobility”.';
  var insert3 = 'Minsky also emphasized that the hardest of human skills for us to create from scratch are those that happen unconsciously.';
  var insert4 = 'Basically, what is easy for us (because of millions of years of evolution) is hard for a computer. Things that we find difficult (where are mind are still not doing it without us noticing), are easy for machines – because we have a better understanding of how to engineer them.';
  var link = "<a  href='https://en.wikipedia.org/wiki/Moravec%27s_paradox' target='blank'>READ MORE</a>"
  var allText = insert1 + br + insert2 + brbr + insert3 + brbr + insert4 + brbr + link;
  
  $("#thoughtbubble p").html(allText);
  

});

$("#thirdBubble").click(function(e){
	
  e.stopPropagation();  // stop the event from propagating up the visual tree
  var insert1 = 'The Chinese room argument is a thought experiment by British philosopher John Searle. It imagines an advanced AI that has be programmed to behave, <i>as if</i>, it understands Chinese.It takes Chinese characters as input and following its programmed instructions produces appropriate Chinese characters as a response. The machine passes the Turing test and a Chinese speaker is convinced.';
  var br ="<br> <br>"
  var insert2 ='But – does the machine <i>literally</i> understand Chinese? Or is it only simulating this understanding? Is it really conscious or is it only faking it because we told it to?';
  var link = "<a  href='https://en.wikipedia.org/wiki/Chinese_room#Chinese_room_thought_experiment' target='blank'>READ MORE</a>"


  var allText = insert1 + br + insert2 + br +  link;
  
  $("#thoughtbubble p").html(allText);
  

});


$("#fourthBubble").click(function(e){
	
  e.stopPropagation();  // stop the event from propagating up the visual tree
  var insert1 = 'A thought experiment, also called "The Knowledge Argument" arguing against that our view of the world is only physical and computable. Which, in turn, also makes it more difficult to call computed entites(robots) living things. It goes like this:';
  var br ="<br> <br>"
  var insert2 ='<i>Mary is a brilliant scientist who is, for whatever reason, forced to investigate the world from a black and white room via a black and white television monitor. She specializes in the neurophysiology of vision and acquires, let us suppose, all the physical information there is to obtain about what goes on when we see ripe tomatoes, or the sky, and use terms like "red", "blue", and so on. She discovers, for example, just which wavelength combinations from the sky stimulate the retina, and exactly how this produces via the central nervous system the contraction of the vocal cords and expulsion of air from the lungs that results in the uttering of the sentence "The sky is blue". ... What will happen when Mary is released from her black and white room or is given a color television monitor? Will she learn anything or not?</i>';
  var link = "<a  href='https://en.wikipedia.org/wiki/Knowledge_argument' target='blank'>READ MORE</a>"


  var allText = insert1 + br + insert2 + br +  link;
  
  $("#thoughtbubble p").html(allText);
  

});






/*HEADER RESET*/
$('header').click(function(e) {
	  e.stopPropagation();  // stop the event from propagating up the visual tree
	  i = 0;
	  $(".title").fadeOut();
	  $("#thoughtbubble").fadeOut();
});
	

$( 'header' )
    .mouseover(function() {
      $("p.header").html("RESET<br> MAP");
	  
    })
    .mouseout(function() {
      $( "p.header" ).html( "IMMATERIAL <br>GIRLS" );
	  
 });
 
 
 
 
 


/*SCROLL DOWN*/

$(".arrow").click (function(){
	
	var scrollDistance = $("div.dictionary").offset();
	/*console.log(scrollDistance)*/
	/*$("body").css("overflow","scroll");*/
	$(window).scrollTop(scrollDistance.top);
	$(".play").attr("src", "playbuttons.js")
	
	
})

$("#updown").click (function(){
	$(window).scrollTop(0);
	
})




