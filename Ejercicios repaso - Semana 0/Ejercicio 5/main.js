function main() {
    function Datos() {
        this.usuario = prompt("Dame un nombre de usuario: ")
        this.password = prompt("Dame una contrasena")
    }
    let datos = new Datos()

    let isCierto = false
    while (!isCierto) {

        validacionDatos(datos)

        // console.log(datos.usuario)
        // console.log(datos.password)
        // console.log("Nuevos datos " + newUsuario)
        // console.log("Nuevos datos " + newPassword)
    }
}
main()