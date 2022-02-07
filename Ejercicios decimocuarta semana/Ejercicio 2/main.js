function main() {
    texto_a_mas = "Te damos la bienvenida al curso"
    texto_explicacion = document.getElementById('explicacion').innerHTML
    texto_explicacion = texto_explicacion + texto_a_mas
    document.getElementById('explicacion').innerHTML = texto_explicacion

    document.getElementsByClassName('standard')[0].style.width = "500px"
    document.getElementsByClassName('standard')[1].style.width = "1200px"
}
main()