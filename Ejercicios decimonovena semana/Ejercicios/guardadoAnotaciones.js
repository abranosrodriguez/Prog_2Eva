function guardarAnotaciones() {
    mostrarDatosGuardado()
    var anotaTexto = document.getElementById("anotaciones")
    anotaTexto.addEventListener("keyup", (event) => {
        guardarDatos(event)
    })
    //Recogemos las teclas pulsadas por el usuario
}

function guardarDatos(event) {
    var texto = event.currentTarget
    localStorage.setItem("textoAnotaciones", texto.value)
    //Se guardan las teclas que pulso el usuario
    //La clave podemos darle una que queramos & lo que va a guardar

}

function mostrarDatosGuardado() {
    var texto = localStorage.getItem("textoAnotaciones")
    var anotaTexto = document.getElementById("anotaciones")
    anotaTexto.value = texto
    //Igualamos los datos para que los datos guardados se muestren
}