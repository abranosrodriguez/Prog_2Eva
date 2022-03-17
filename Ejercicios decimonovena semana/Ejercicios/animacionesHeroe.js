function animacionHeroe() {
    var animacionHeroe = $("dibujoHeroe")
    animacionHeroe.animate({ left: '+=5vh' }, "fast")
    animacionHeroe.animate({ left: '-=5vh' }, "fast")
}

$("dibujoFuego").animate({ height: 'hide' })
function magiaFuegoHeroe() {
    $("dibujoFuego").animate({ height: 'show' })
    var animacionFuego = $("dibujoFuego")
    animacionFuego.animate({ left: '+=12vh' }, "fast")
    $("dibujoFuego").animate({ height: 'hide' })
    animacionFuego.animate({ left: '-=12vh' }, "fast")

}

function muerteHeroe() {
    $("dibujoHeroe").animate({ height: 'hide' })
}