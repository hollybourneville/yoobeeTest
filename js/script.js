$(function(){

	$('.gallery>div').on('click',function(){

		//closing other divs
		$('.gallery>div').not(this).removeClass('open');
		$('.gallery>div').not(this).data('state','close');

		
		var sState = $(this).data('state');

		if(sState == 'close'){
			//open it
			$(this).addClass('open');
			$(this).data('state','open');//update state
		}else{
			//close it
			$(this).removeClass('open');
			$(this).data('state','close');//update state
		}
	});
});


