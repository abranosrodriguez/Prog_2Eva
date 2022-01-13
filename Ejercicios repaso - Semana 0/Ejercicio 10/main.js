function main() {
    let dato = null
    let materias = []
    //Se puede ver en la consola
    while (dato != 3) {
        let dato = prompt("Escoge una opcion: \n1 -> Crear un objecto \n2 -> Comprobar lo creado \n3-> Salir")
        if (dato == 1) {
            let crearAsignatura = prompt("Como queires llamar a la asignatura?")
            asignaturaName = objecto(crearAsignatura)
            materias.push(asignaturaName)
        }else if (dato == 2){
            alert(`Signaturas creadas: ${materias}`)
        }else if (dato == 3) {
            break
        }else{
            alert("Error - Escoge una opcion")
        }
    }
}
main()