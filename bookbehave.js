






/*FETCH TOP FROM PARENT OF PARAGRAPHS FOR FIRING IMG*/




/*REVEAL IMG ON SCROLL*/

$(window).on('scroll', function () {
	var sara1 = $("#SaraRound1Reveal").offset();
	var kristin1= $("#KristinRound1Reveal").offset();
	var linn1= $("#LinnRound1Reveal").offset();
	
	var sara2 = $("#SaraRound2Reveal").offset();
	var kristin2= $("#KristinRound2Reveal").offset();
	var linn2= $("#LinnRound2Reveal").offset();
	
	var sara3 = $("#SaraRound3Reveal").offset();
	var kristin3= $("#KristinRound3Reveal").offset();
	var linn3= $("#LinnRound3Reveal").offset();
	
	var round1switch = $(".round1").offset();
	var round2switch = $(".round2").offset();
	var round3switch = $(".round3").offset();
	var outro = $(".outro").offset();
	
	
	/*TEXTER*/
	
	if ($(window).scrollTop()<(round1switch.top)) /*VAR HAMNAR BILDEN PÅ SIDAN ÄNDRA DÄREFTER*/
		{	$("p.title").text("INTRO");}else {
			$("p.title").text("OUTRO");
		}
	if ($(window).scrollTop()>(round1switch.top) &&$(window).scrollTop()<(round2switch.top)) /*VAR HAMNAR BILDEN PÅ SIDAN ÄNDRA DÄREFTER*/
		{	$("p.title").text("ROUND 1");}
	if ($(window).scrollTop()>(round2switch.top)) /*VAR HAMNAR BILDEN PÅ SIDAN ÄNDRA DÄREFTER*/
		{	$("p.title").text("ROUND 2");}
	if ($(window).scrollTop()>(round3switch.top)) /*VAR HAMNAR BILDEN PÅ SIDAN ÄNDRA DÄREFTER*/
		{	$("p.title").text("ROUND 3");}
	if ($(window).scrollTop()>(outro.top)) /*VAR HAMNAR BILDEN PÅ SIDAN ÄNDRA DÄREFTER*/
		{	$("p.title").text("OUTRO");}
	
	
	
	
	/*BILDER*/
	
	
	if ($(window).scrollTop()<2000) /*VAR HAMNAR BILDEN PÅ SIDAN ÄNDRA DÄREFTER*/
	{	$("#firstvideoplay").fadeIn("slow");} else{
	 	$("#firstvideoplay").fadeOut();}
	
	
	if ($(window).scrollTop()>(sara1.top)&& $(window).scrollTop()<(kristin1.top)) /*VAR HAMNAR BILDEN PÅ SIDAN ÄNDRA DÄREFTER*/
	{	$("#sara1").slideDown();} else{
	 	$("#sara1").slideUp();}
		
	
	if ($(window).scrollTop()>(kristin1.top)&& $(window).scrollTop()<(linn1.top)) /*VAR HAMNAR BILDEN PÅ SIDAN ÄNDRA DÄREFTER*/
	{	$("#kristin1").slideDown();} else{
	 	$("#kristin1").slideUp();}
		
		
	if ($(window).scrollTop()>(linn1.top) &&$(window).scrollTop()<(round2switch.top)) /*VAR HAMNAR BILDEN PÅ SIDAN ÄNDRA DÄREFTER*/
	{	$("#linn1").slideDown();} else{
	 	$("#linn1").slideUp();}
		
		
	if ($(window).scrollTop()>(linn2.top)&&$(window).scrollTop()<(kristin2.top)) /*VAR HAMNAR BILDEN PÅ SIDAN ÄNDRA DÄREFTER*/
	{	$("#linn2").slideDown();} else{
		$("#linn2").slideUp();}
	
	
	if ($(window).scrollTop()>(kristin2.top)&&$(window).scrollTop()<(sara2.top)) /*VAR HAMNAR BILDEN PÅ SIDAN ÄNDRA DÄREFTER*/
	{	$("#kristin2").slideDown();} else{
		$("#kristin2").slideUp();}
		
		
	if ($(window).scrollTop()>(sara2.top)&&$(window).scrollTop()<(round3switch.top))
	{	$("#sara2").slideDown();} else{
		$("#sara2").slideUp();}
	
	if ($(window).scrollTop()>(kristin3.top)&&$(window).scrollTop()<(sara3.top))
	{	$("#kristin3").slideDown();} else{
		$("#kristin3").slideUp();}
	
	if ($(window).scrollTop()>(sara3.top)&&$(window).scrollTop()<(linn3.top))
	{	$("#sara3").slideDown();} else{
		$("#sara3").slideUp();}
		
	if ($(window).scrollTop()>(linn3.top))
	{	$("#linn3").slideDown();} else{
		$("#linn3").slideUp();}
	
		
	




});

