$(document).ready(function() {
	$('#fecha').countdown('2020/01/24', function(evento) {
		$(this).html(evento.strftime('%D Dias &H Horas %M Minutos %S Segundos'));
	});
});
