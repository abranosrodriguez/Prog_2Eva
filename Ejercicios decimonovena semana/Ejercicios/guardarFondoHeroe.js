function guardarFondoHeroe() {
    recogerColorFondoHereo()
    var radioFondoHeroe = document.getElementsByClassName("ColorFondoHeroe")
    for (var i = 0; i < radioFondoHeroe.length; i++) {
        radioFondoHeroe[i].addEventListener("click", (event) => {
            cambiaColorFondoHeroe(event);
        });
    }
}
function cambiaColorFondoHeroe(event) {
    var fondoHeroe = document.getElementById("heroe");
    fondoHeroe.style.backgroundColor = event.currentTarget.value;
    console.log(event.currentTarget.value);
    localStorage.setItem("Fondo Heroe", event.currentTarget.value);
}
function recogerColorFondoHereo(event) {
    var fondoHeroe = document.getElementById("heroe");
    var backgroundColor = localStorage.getItem("Fondo Heroe");
    fondoHeroe.style.backgroundColor = backgroundColor;
    var radioFondoHeroe = document.getElementsByClassName("ColorFondoHeroe");
    for (var i = 0; i < radioFondoHeroe.length; i++) {
        if (radioFondoHeroe[i].value == backgroundColor) {
            radioFondoHeroe[i].checked = true;
        } else {
            radioFondoHeroe[i].checked = false;
        }
    }
}