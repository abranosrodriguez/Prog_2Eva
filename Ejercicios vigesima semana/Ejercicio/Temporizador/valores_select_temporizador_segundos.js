function valores_select_temporizador_segundos() {
    var min_segundos = 0
    var max_segundos = 59
    segundos_temporizador = document.getElementById("Segundos_Temporizador")

    for (let i = min_segundos; i <= max_segundos; i++) {
        var crear_numero_segundos = document.createElement("option")
        crear_numero_segundos.value = i
        crear_numero_segundos.innerHTML = i
        segundos_temporizador.appendChild(crear_numero_segundos)
    }

}