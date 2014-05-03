$(document).ready(function(){

	$('#menu').click(function(){
		var nav = $('#navbar').css("display");
		var item = $('#navbar').css("display");
		if (nav == 'none') {		
			$("#navbar").slideDown();
			}
		else {
			$("#navbar").slideUp();
		}
		if (item == 'none') {
			$("#navbar-items").slideDown();
		}
		else {
			$("#navbar-items").slideUp();
		}});
	
	$(window).scroll(function(){
		var height = ($(window).height());
		var scrollTop = $(window).scrollTop();
		if (scrollTop > height) {
			$('#menu').css("color", "black");
		}
		else {
			$('#menu').css("color", "white")
		}
	});

	$(".scroll").click(function(event){
	         event.preventDefault();
	         //calculate destination place
	         var dest=0;
	         if($(this.hash).offset().top > $(document).height()-$(window).height()){
	              dest=$(document).height()-$(window).height();
	         }else{
	              dest=$(this.hash).offset().top;
	         }
	         //go to destination
	         $('html,body').animate({scrollTop:dest}, 1000,'swing');
	     });


});