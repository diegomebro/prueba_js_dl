$(document).ready(function(){
	$('#palabra').on('keyup', function(){
		var valor = $('#palabra').val();
		$('#ver_palabra').text(valor);
 });
});

var i;
i = $(document);
i.ready(color);

function color() {
    var i;
    i=$('#color_input');
    i.change(letra);
}

function letra() {
    $("#ver_palabra").css("color",$("#color_input").val());
    $('#colorletra').val($(this).val());
}