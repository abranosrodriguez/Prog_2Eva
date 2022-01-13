function mostrarNumeros(NE) {
    let listaNumeros = []
    for (i = 0; i < NE; i++) {
        console.log(i)
        if ((i % 2) == 0) {
            console.log(`Este numero es par ${i}`)
        } else {
            listaNumeros.push(i)
        }
    }
    console.log(listaNumeros)
    return listaNumeros
}