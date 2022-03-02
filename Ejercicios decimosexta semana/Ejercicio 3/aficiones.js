function capacidadMaximaAficiones() {
    valor = 0
    for (let i = 0; i < aficiones.length; i++) {
        if (aficiones[i].checked) {
            valor++
        }
        if (valor > 2) {
            aficiones[i].checked = false
            alert('Solo se permite 2 aficiones')
            break
        }
    }
}