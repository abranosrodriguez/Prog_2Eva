function main() {
    let dato = null
    while (dato != 2) {
        dato = prompt("Introducir algo -> 1 \nSalir -> 2")
        if (dato == 1) {
            datoUsuario = prompt("Dime algo para tranformarlo en mayusculas")
            datoUsuario = datoUsuario.toUpperCase()
            alert(`Transformado en mayuscula lo introducido: \n ${datoUsuario}`)
        } else if (dato == 2) {
            break
        } else {
            alert("Error")
        }
    }
}
main()