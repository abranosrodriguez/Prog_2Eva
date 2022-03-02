function main() {
    document.getElementById("envio").addEventListener("click", () => {
        numeros = /[0-9]/
        nome = document.getElementById("nombre")
        apellidos = document.getElementById("apellidos")

        if (numeros.test(nome.value)) {
            alert("No se admiten numeros en la casilla de nombre")
        }
        if (numeros.test(apellidos.value)) {
            alert("No se admiten numeros en la casilla de apellidos")
        }

    })
}
main()