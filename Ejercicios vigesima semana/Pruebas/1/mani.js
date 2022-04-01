function aviso(str) {
    alert(str);
}
function __main__() {
    var temporizador = setTimeout(aviso, 2000, "Esto es un temporizador");
    //clearTimeout(temporizador);
}
__main__();
