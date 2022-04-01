function temporizador_cronometro(tmp_cronometro) {
    //tmp_cronometro.milisegundos,tmp_cronometro.segundos,tmp_cronometro.minutos,tmp_cronometro.horas
    tempor = setTimeout(play, 100, tmp_cronometro)

}

function play(tmp_cronometro) {
    time(tmp_cronometro)
    texto = (tmp_cronometro.horas > 9 ? tmp_cronometro.horas : "0" + tmp_cronometro.horas) + ":" + (tmp_cronometro.minutos > 9 ? tmp_cronometro.minutos : "0" + tmp_cronometro.minutos) + ":" + (tmp_cronometro.segundos > 9 ? tmp_cronometro.segundos : "0" + tmp_cronometro.segundos) + ":" + (tmp_cronometro.milisegundos)
    $("#tiempo_cronometro").html(texto)
    temporizador_cronometro(tmp_cronometro)
}

function time(tmp_cronometro) {
    tmp_cronometro.milisegundos = tmp_cronometro.sumar_milisegundos_cronometro()
    if (tmp_cronometro.milisegundos >= 10) {
        tmp_cronometro.milisegundos = 0
        tmp_cronometro.segundos = tmp_cronometro.sumar_segundos_cronometro()
        if (tmp_cronometro.segundos >= 60) {
            tmp_cronometro.segundos = 0
            tmp_cronometro.minutos = tmp_cronometro.sumar_minutos_cronometro()
            if (tmp_cronometro.minutos >= 60) {
                tmp_cronometro.minutos = 0
                tmp_cronometro.horas = tmp_cronometro.sumar_horas_cronometro()
            }
        }
    }
}

function parar_temporizador_cronometro() {
    clearInterval(tempor)
}