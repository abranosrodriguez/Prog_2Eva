function validacionDatos(datos) {
    let newUsuario = prompt("Dame el usuario escrito anteriormente: ")
    let newPassword = prompt("Dame la contrasena previamente escrita: ")

    if (newUsuario == datos.usuario && newPassword == datos.password) {
        alert("Datos Correctos")
        let isCierto = !isCierto
        return isCierto
    } else if (newUsuario != datos.usuario && newPassword != datos.password) {
        alert("Los datos escritos no coinciden")
    } else if (newUsuario != datos.usuario || newPassword == datos.password) {
        alert("Usuario Incorrecto")
    } else if (newUsuario == datos.usuario || newPassword != datos.password) {
        alert("Contrasena Incorrecta")
    }


}