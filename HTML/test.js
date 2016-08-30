$('h1').on('click', function(){
	alert('you clicked on the h1. You must feel proud of yourself.');
});
$("input").keypress(function(){
	alert('You pressed the button!');
});
$("li").on('click', function(){
	$(this).remove();
});