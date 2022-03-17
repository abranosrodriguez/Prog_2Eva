function guardarFondoEnemigo() {
    recogerColorFondoEnemigo()
    var radioFondoEnemigo = document.getElementsByClassName("ColorFondoEnemigo")
    for (var i = 0; i < radioFondoEnemigo.length; i++) {
        radioFondoEnemigo[i].addEventListener("click", (event) => {
            cambiaColorFondoEnemigo(event);
        });
    }
}
function cambiaColorFondoEnemigo(event) {
    var fondoEnemigo = document.getElementById("enemigo");
    fondoEnemigo.style.backgroundColor = event.currentTarget.value;
    console.log(event.currentTarget.value);
    localStorage.setItem("Fondo Enemigo", event.currentTarget.value);
}
function recogerColorFondoEnemigo(event) {
    var fondoEnemigo = document.getElementById("enemigo");
    var backgroundColor = localStorage.getItem("Fondo Enemigo");
    fondoEnemigo.style.backgroundColor = backgroundColor;
    var radioFondoEnemigo = document.getElementsByClassName("ColorFondoEnemigo");
    for (var i = 0; i < radioFondoEnemigo.length; i++) {
        if (radioFondoEnemigo[i].value == backgroundColor) {
            radioFondoEnemigo[i].checked = true;
        } else {
            radioFondoEnemigo[i].checked = false;
        }
    }
}