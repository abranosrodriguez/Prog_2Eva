function tempo_temporizador(tmp_temporizador) {
    tempor_teporizador = setTimeout(play_tempo, 1000, tmp_temporizador)

}
function play_tempo(tmp_temporizador) {
    time_temporizador(tmp_temporizador)
    texto = (tmp_temporizador.horas + ":" + tmp_temporizador.minutos + ":" + tmp_temporizador.segundos)
    $("#tiempo_temporizador").html(texto)
    tempo_temporizador(tmp_temporizador)
    console.log(texto)
}

//tmp_temporizador.milisegundos = (tmp_temporizador.horas * 3600) + (tmp_temporizador.minutos * 60) + (tmp_temporizador * 1000)
function time_temporizador(tmp_temporizador) {
    tmp_temporizador.segundos = tmp_temporizador.restar_segundos_temporizador(tmp_temporizador.segundos)
    if (tmp_temporizador.segundos >= 0) {
        console.log("se acabao")
        parar_temporizador_tempo()
    }

}
function parar_temporizador_tempo() {
    clearTimeout(tempor_teporizador)
}
