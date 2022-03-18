$(document).ready(function(){
	$(".read").click(function(){
		$(this).prev().toggle();
		$(this).siblings('.dots').toggle();
		if($(this).text()=='Ver Menos'){
			$(this).text('Ver Mais');
		}
		else{
			$(this).text('Ver Menos');
		}
	});
});