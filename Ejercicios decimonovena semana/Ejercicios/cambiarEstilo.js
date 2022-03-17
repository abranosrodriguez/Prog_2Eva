function cambiarEstilo() {
    var estilo = document.getElementsByClassName("changeStily")
    for (var i = 0; i < estilo.length; i++) {
        estilo[i].addEventListener("change", (event) => {
            cambia_estilo(event, estilo[i]);
        });
    }
    function cambia_estilo(evento,) {
        var cuerpo = document.getElementById("cuerpo")
        var aceptado = document.getElementsByClassName("changeStily")
        if (aceptado[0].checked) {
            cuerpo.style.fontStyle = aceptado[0].value
            localStorage.setItem("Italic", aceptado[0].value)
        } else {
            cuerpo.style.fontStyle = "normal"
            localStorage.setItem("Italic", "normal")
        }
        if (aceptado[1].checked) {
            cuerpo.style.fontWeight = aceptado[1].value
            localStorage.setItem("Bold", aceptado[1].value)
        } else {
            cuerpo.style.fontWeight = "lighter"
            localStorage.setItem("Bold", "lighter")
        }
    }

}