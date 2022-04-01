function temporizador_reloj() {
    var fecha_reloj = new Date()
    let hora_reloj = fecha_reloj.getHours()
    let minutos_reloj = fecha_reloj.getMinutes()
    let segundos_reloj = fecha_reloj.getSeconds()
    let texto_reloj = (hora_reloj + ":" + minutos_reloj + ":" + segundos_reloj)
    $("#tiempo_reloj").html(texto_reloj)
}