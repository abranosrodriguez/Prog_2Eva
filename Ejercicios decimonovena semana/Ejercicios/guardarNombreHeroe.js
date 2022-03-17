function guardarNombreHeroe() {
    restaurarNombre()
    var nombre_heroe = document.getElementById("NombreHeroe")
    guardar_nombre = document.getElementById("NombreHeroe")
    guardar_nombre.addEventListener("keyup", () => {
        guardarDatosNombre(event)
    })

}
function guardarDatosNombre(event) {
    var nombre_heroe = event.currentTarget
    localStorage.setItem("Nombre de Heroe", nombre_heroe.value)
}
function restaurarNombre() {
    var nombre_heroe = localStorage.getItem("Nombre de Heroe")
    var guardar_nombre = document.getElementById("NombreHeroe")
    guardar_nombre.value = nombre_heroe
}