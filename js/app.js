$(document).ready(function() {
	$('#fecha').countdown('2020/01/24', function(evento) {
		$(this).html(
			evento.strftime(
				'<span> %D </span> Dias <span> &H </span> Horas <span> %M </span> Minutos <span> %S </span> Segundos'
			)
		);
	});
});
