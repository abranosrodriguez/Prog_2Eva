function main() {
    document.getElementById("envio").addEventListener("click", () => {
        numeros = /[0-9]/

        nome = document.getElementById("nombre")
        apellidos = document.getElementById("apellidos")
        dni = document.getElementById("nif")


        if (numeros.test(nome.value)) {
            alert("No se admiten numeros en la casilla de nombre")
        }
        if (numeros.test(apellidos.value)) {
            alert("No se admiten numeros en la casilla de apellidos")
        }
        if (dni.value.length < 9) {
            alert("El campo DNI tiene que tener 9 digitos")
        }

    })

    //Ejer 3
    var aficiones = document.getElementsByClassName('check')

    for (let n = 0; n < aficiones.length; n++) {
        aficiones[n].addEventListener('click', () => {
            capacidadMaximaAficiones()
        })
    }

    function capacidadMaximaAficiones() {
        contador = 0
        for (let i = 0; i < aficiones.length; i++) {
            if (aficiones[i].checked) {
                contador++
            }
            if (contador > 2) {
                aficiones[i].checked = false
                alert('Solo se permite 2 aficiones')
                break
            }
        }
    }



}
main()