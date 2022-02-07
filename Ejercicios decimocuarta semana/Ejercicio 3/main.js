function main() {
    //Eje1
    texto_a_mas = "Te damos la bienvenida al curso"
    texto_explicacion = document.getElementById('explicacion').innerHTML
    texto_explicacion = texto_explicacion + texto_a_mas
    document.getElementById('explicacion').innerHTML = texto_explicacion

    //Eje2
    document.getElementsByClassName('standard')[0].style.width = "500px"
    document.getElementsByClassName('standard')[1].style.width = "1200px"

    //Eje3
    document.getElementById("horario").setAttribute("style", "border-style:solid;border-width:3px;border-color:blue")
}
main()