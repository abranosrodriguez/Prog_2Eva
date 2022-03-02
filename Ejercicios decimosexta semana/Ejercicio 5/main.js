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

    //Ejer 4
    var ano = document.getElementsByClassName('radio')
    var linea = document.getElementsByTagName('label')

    for (let i = 0; i < ano.length; i++) {
        ano[i].addEventListener('click', () => {
            typeAficiones(i)
        })
    }

    function typeAficiones(ano) {
        switch (ano) {
            case 0: {
                linea[9].innerHTML = '<input type="checkbox" class="check" checked>Videojuegos'
                linea[10].innerHTML = '<input type="checkbox" class="check">Streaming'
                linea[11].innerHTML = '<input type="checkbox" class="check">Futbol'
                linea[12].innerHTML = '<input type="checkbox" class="check">Ver videos'
            }
                break
            case 1: {
                linea[9].innerHTML = '<input type="checkbox" class="check">Cocinar'
                linea[10].innerHTML = '<input type="checkbox" class="check" checked>Estudiar'
                linea[11].innerHTML = '<input type="checkbox" class="check">Leer'
                linea[12].innerHTML = '<input type="checkbox" class="check">Futting'
            }
                break
            case 2: {
                linea[9].innerHTML = '<input type="checkbox" class="check">Leer'
                linea[10].innerHTML = '<input type="checkbox" class="check" checked>Ver TV'
                linea[11].innerHTML = '<input type="checkbox" class="check">Pasear'
                linea[12].innerHTML = '<input type="checkbox" class="check">Descansar'
            }
                break
            default:
                break
        }
    }

    //Ejer 5
    var comentario = document.getElementById('comentarios')
    comentario.addEventListener('input', () => {
        comentarioCaracteres()
    })
    function comentarioCaracteres() {
        if (comentario.value.length >= 250) {
            comentario.value = comentario.value.substring(0, 249)
            alert('Límite de caracteres alcanzado ( 250 máximo )')
        }
    }


}
main()