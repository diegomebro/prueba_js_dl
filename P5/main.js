$(function(){
	$("#btn-der").click(function(){
		$(".caja").animate(
			{"left": "+=50px"},"slow");
	});
	 
	$("#btn-izq").click(function(){
		$(".caja").animate(
			{"left": "-=50px"},"slow");
	});

});