function valores_select_temporizador_horas() {
    var min_horas = 0
    var max_horas = 24
    horas_temporizador = document.getElementById("Horas_Temporizador")

    for (let i = min_horas; i <= max_horas; i++) {
        var crear_numero_horas = document.createElement("option")
        crear_numero_horas.value = i
        crear_numero_horas.innerHTML = i
        horas_temporizador.appendChild(crear_numero_horas)
    }
    console.log(crear_numero_horas)
}