$("a").hover(function (){
	$("a").toggleClass(".active");	
}, function() {
	$("a").toggleClass(".active");
})

$(".section-a").hover(function() {
	$(this).stop().animate({
		color:'#61b5d3'
	}, 200);
}, function() {
	$(this).stop().animate({
		color: 'black'
	}, 200)
});

