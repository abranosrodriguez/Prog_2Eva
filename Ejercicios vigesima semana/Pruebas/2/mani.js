function habilitar(target) {
    console.log("fun")
    target.disabled = false;
}
function __main__() {
    var boton = document.getElementById("boton");
    boton.addEventListener("click", (evt) => {
        evt.currentTarget.disabled = true;
        var temp = setTimeout(habilitar, 2000, evt.currentTarget);
    });
}
__main__()