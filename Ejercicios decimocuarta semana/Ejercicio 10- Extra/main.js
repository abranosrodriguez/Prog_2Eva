function main() {
    //Eje1
    texto_a_mas = "Te damos la bienvenida al curso"
    texto_explicacion = document.getElementById('explicacion').innerHTML
    texto_explicacion = texto_explicacion + texto_a_mas
    document.getElementById('explicacion').innerHTML = texto_explicacion

    //Eje2
    document.getElementsByClassName('standard')[0].style.width = "500px"
    document.getElementsByClassName('standard')[1].style.width = "700px"
    document.getElementsByClassName('standard')[1].style.fontStyle = "italic"
    //Eje3
    document.getElementById("horario").setAttribute("style", "border-style:solid;border-width:3px;border-color:blue")

    //Ejer4
    document.getElementById("cuartaHora").setAttribute("style", "background-color:grey")

    //Ejer5
    document.getElementsByClassName("asignaturas")[0].setAttribute("style", "display: grid;justify-content: center; ")
    document.getElementsByClassName("asignaturas")[1].setAttribute("style", "display: grid;justify-content: center; ")

    //Ejer6
    document.getElementById("bienvenida").setAttribute("style", "font-family:Courier;text-decoration:underline blue")

    //Ejer7
    // document.getElementsByClassName('titulo')[0].setAttribute("style", "text-decoration: underline;font-family:monospace")
    document.getElementById("dias").setAttribute("style", "font-style:italic;")

    document.getElementById("primeraHora").firstElementChild.setAttribute("style", "color:blue;font-weight: 500; font-style: normal;;font-size:18px")
    document.getElementById("primeraHora").setAttribute("style", "background-color: #C1F7FB")

    document.getElementById("segundaHora").firstElementChild.setAttribute("style", "color:blue;font-weight: 500; font-style: normal;;font-size:18px")
    document.getElementById("segundaHora").setAttribute("style", "background-color: #C1C8FB")

    document.getElementById("terceraHora").firstElementChild.setAttribute("style", "color:blue;font-weight: 500; font-style: normal;;font-size:18px")
    document.getElementById("terceraHora").setAttribute("style", "background-color: #D4C1FB")

    document.getElementById("quintaHora").firstElementChild.setAttribute("style", "color:blue;font-weight: 500; font-style: normal;;font-size:18px")
    document.getElementById("quintaHora").setAttribute("style", "background-color: #F6C1FB")

    document.getElementById("sextaHora").firstElementChild.setAttribute("style", "color:blue;font-weight: 500; font-style: normal;;font-size:18px")
    document.getElementById("sextaHora").setAttribute("style", "background-color: #FBC1CD")

    document.getElementById("septimaHora").firstElementChild.setAttribute("style", "color:blue;font-weight: 500; font-style: normal;;font-size:18px")
    document.getElementById("septimaHora").setAttribute("style", "background-color: #FBCCC1")

    document.getElementById("octavaHora").firstElementChild.setAttribute("style", "color:blue;font-weight: 500; font-style: normal;font-size:18px")
    document.getElementById("octavaHora").setAttribute("style", "background-color: #FBE6C1")

    //Ejer8
    nueva_etiqueta = document.createElement("div")
    nuevo_texto = document.createTextNode("Los horarios son provisionales, están dispuestos a cambios")
    nueva_etiqueta.appendChild(nuevo_texto)

    document.body.appendChild(nueva_etiqueta).setAttribute("style", "color:red;font-style:italic;font-size:23px")

    //Ejer9
    //Creamos los li para cada uno
    asignatura_uno = document.createElement("li")
    asignatura_dos = document.createElement("li")
    asignatura_tres = document.createElement("li")
    //Le damos nombres a las asignaturas
    a1 = document.createTextNode("Diseño de interfaces web")
    a2 = document.createTextNode("Despliegue de aplicaciones web")
    a3 = document.createTextNode("Formación en centros de trabajo")
    //Concatenamos
    asignatura_uno.appendChild(a1)
    asignatura_dos.appendChild(a2)
    asignatura_tres.appendChild(a3)
    //Los ponemos en el documento
    document.getElementById("segundo").appendChild(asignatura_uno)
    document.getElementById("segundo").appendChild(asignatura_dos)
    document.getElementById("segundo").appendChild(asignatura_tres)

    //Ejer Extra
    document.getElementsByTagName("h1")[0].setAttribute("style", "display: grid;justify-content: center;text-decoration: underline blue;font-family:monospace")
    document.getElementsByTagName("body")[0].setAttribute("style", "display: grid;justify-content: center;")

    document.getElementById("segundaDivision").setAttribute("style", "display: grid;justify-content: center;")

    document.getElementById("introduccion").setAttribute("style", "color:#1f6fc8;font-size:28px")
    document.getElementById("segundoAno").setAttribute("style", "color:#1f6fc8;font-style:italic;font-size:28px")

    document.getElementById("logo").setAttribute("style", "margin-top:10px;margin-bottom:15px")
}
main()