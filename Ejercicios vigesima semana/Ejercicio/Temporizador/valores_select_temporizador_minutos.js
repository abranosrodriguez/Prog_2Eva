function valores_select_temporizador_minutos() {
    var min_minutos = 0
    var max_minutos = 59
    minutos_temporizador = document.getElementById("Minutos_Temporizador")

    for (let i = min_minutos; i <= max_minutos; i++) {
        var crear_numero_minutos = document.createElement("option")
        crear_numero_minutos.value = i
        crear_numero_minutos.innerHTML = i
        minutos_temporizador.appendChild(crear_numero_minutos)
    }


}