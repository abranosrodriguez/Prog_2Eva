function main() {
    let numeroEntero = prompt("Dame un numero entero: ")
    if (numeroEntero != Number(numeroEntero)) {
        alert("Error - Solo se aceptan numeros")
    }
    let arrayNumeros = mostrarNumeros(numeroEntero)
    alert(`Los numeros impares son: ${arrayNumeros}`)
}
main()