function main() {
    texto_a_mas = "Te damos la bienvenida al curso"
    texto_explicacion = document.getElementById('explicacion').innerHTML
    texto_explicacion = texto_explicacion + texto_a_mas
    document.getElementById('explicacion').innerHTML = texto_explicacion
}
main()