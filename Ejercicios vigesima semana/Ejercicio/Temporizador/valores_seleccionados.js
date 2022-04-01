function valores_seleccionados_temporizador(tmp_temporizador) {
    tmp_temporizador.horas = $('#Horas_Temporizador :selected').text();
    tmp_temporizador.minutos = $('#Minutos_Temporizador :selected').text();
    tmp_temporizador.segundos = $('#Segundos_Temporizador :selected').text();
    console.log(tmp_temporizador)
}