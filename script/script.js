$('.burger').click(function () {
	$('.burger span:nth-child(1)').toggleClass('first');
	$('.burger span:nth-child(2)').toggleClass('middle');
	$('.burger span:nth-child(2)').toggleClass('last');
})