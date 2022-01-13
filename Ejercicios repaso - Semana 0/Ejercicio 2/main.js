function main() {
    let valorA = prompt("Valor de a: ")
    let valorB = prompt("Valor de b: ")
    let valorC = prompt("Valor de c: ")
    let solucionPositiva = calculacion(valorA, valorB, valorC)
    let solucionNegativa = calculacionNegativa(valorA, valorB, valorC)
    alert(`Tus resultados son: \nx1 (+) -> ${solucionPositiva} \nx2 (-) -> ${solucionNegativa}`)
}
main()