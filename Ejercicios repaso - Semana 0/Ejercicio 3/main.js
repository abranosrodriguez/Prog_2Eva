function main() {
    let frase = prompt("Dame una frase que deseas analizar las vocales: ")
    let contador = calculoVocales(frase)
    alert(`El numero total de vocales es: ${contador}`)
}
main()