$(function() {
	$('.contenedorImagen').mouseover(function() {
		$('.descripcion').fadeIn();
	});
	$('.contenedorImagen').mouseout(function() {
		$('.descripcion').fadeOut();
	});
});