function objecto(nombre) {
    function Asignatura() {
        this.nombreAsignatura = nombre
    }
    let asignatura = new Asignatura()
    console.log(asignatura)
    
    return asignatura.nombreAsignatura
    
}