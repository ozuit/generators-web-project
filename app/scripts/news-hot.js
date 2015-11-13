function tick(){

	$('#ticker_01 li:first').slideUp( function () { $(this).appendTo($('#ticker_01')).slideDown(); });

}

setInterval(function(){ tick () }, 4000);

function tick2(){

	$('#ticker_02 li:first').slideUp( function () { $(this).appendTo($('#ticker_02')).slideDown(); });

}

setInterval(function(){ tick2 () }, 5000);

function tick3(){

	$('#ticker_03 li:first').slideUp( function () { $(this).appendTo($('#ticker_03')).slideDown(); });

}

setInterval(function(){ tick3 () }, 5000);	

function tick4(){

	$('#ticker_04 li:first').slideUp( function () { $(this).appendTo($('#ticker_04')).slideDown(); });



}