function calculacionNegativa(valorA, valorB, valorC) {
    let valorMenosB = (- valorB)
    let raizCuadrada = Math.sqrt(Math.pow(valorB, 2) - 4 * valorA * valorC)
    let divivendo = (2 * valorA)
    let solucionNegativa = (valorMenosB - raizCuadrada) / divivendo

    console.log(solucionNegativa)
    return solucionNegativa
}