function color() {
    preload();
    var radio = document.getElementsByClassName("Colores");
    for (var i = 0; i < radio.length; i++) {
        radio[i].addEventListener("click", (event) => {
            cambiaColor(event);
        });
    }
}
function cambiaColor(event) {
    var cuerpo = document.getElementById("heroe");
    cuerpo.style.color = event.currentTarget.value;
    console.log(event.currentTarget.value);
    localStorage.setItem("fontColor", event.currentTarget.value);
}

function preload() {
    var cuerpo = document.getElementById("heroe");
    var fontColor = localStorage.getItem("fontColor");
    cuerpo.style.color = fontColor;
    var radio = document.getElementsByClassName("Colores");
    for (var i = 0; i < radio.length; i++) {
        if (radio[i].value == fontColor) {
            radio[i].checked = true;
        } else {
            radio[i].checked = false;
        }
    }
}