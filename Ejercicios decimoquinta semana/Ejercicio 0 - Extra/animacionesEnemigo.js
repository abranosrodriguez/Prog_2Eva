function animacionEnemigo() {
    var animacionEnemigo = $("dibujoEnemigo")
    animacionEnemigo.animate({ right: '+=6vh' }, "fast")
    animacionEnemigo.animate({ right: '-=6vh' }, "fast")
}

function muerteEnemigo() {
    $("dibujoEnemigo").animate({ height: 'hide' })
}

function revivirEnemigo() {
    $("dibujoEnemigo").animate({ height: 'show' })
}