$(document).ready(function(){
	$('.burger-menu').click(function(){
		$('.burger-menu, .navigation').toggleClass('active');
		$('body').toggleClass('stop');
	})
})