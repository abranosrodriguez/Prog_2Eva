function main() {
    //Semana 19:
    //Ejer 1 -> Cambiar el color y guardar los datos
    color()

    //Ejer2 ->Guardar las anotaciones escritas en el text Area
    guardarAnotaciones()

    //Ejer3 -> Conversar nombre o cambiarlo por otro
    guardarNombreHeroe()
    //Permite borrar el nombre si no se quiere. tanto del texto como de la base de datos
    document.getElementById("BorrarNombre").addEventListener("click", () => {
        var nombre_heroe = ""
        localStorage.setItem("Nombre de Heroe", nombre_heroe)
        document.getElementById('NombreHeroe').value = ''
    })

    //Ejer4 -> Modificar el color del fondo del heroe
    guardarFondoHeroe()
    guardarFondoEnemigo()

    //Ejer5-> Borrar los datos del navegador
    document.getElementById("BorrarCookies").addEventListener("click", () => {
        localStorage.clear()
        location.reload()
    })

    //Ejer6-> CheckBox Negrita y Cursiva
    cambiarEstilo()


    //Semana 15:
    nombresEnemigo()
    var heroe = new Heroe("", 1, 10, 1, 0, 0, false, 3, 2, 8)
    var enemigo = new Enemigo(nombreEnemigoAleatorio, 1, 10, 1, 0)

    ultimo_turno = 0
    isDefensa = false
    bajarAtaqueEnemigo = false
    costeMagia = 3

    //Datos Base Personaje
    vidaBaseHeroe = heroe.vida
    manaBaseHeroe = heroe.mana
    vidaBaseEnemigo = enemigo.vida
    ataqueBaseEnemigo = enemigo.ataque

    // --------------------------------------------------------------------------------------------

    //Botones Desabilitados por defectos
    $("#BotonAtacar").prop('disabled', true)
    $("#BotonDefender").prop('disabled', true)
    $("#BotonMagia").prop('disabled', true)
    $("#BotonContinuar").prop('disabled', true)
    $("#BotonReiniciar").prop('disabled', true)
    document.getElementById("Habilidades").style.visibility = "hidden"

    //Saber en q turno estamos
    function turnos() {
        if (ultimo_turno == 0 || ultimo_turno == 1) {
            $("#turno").html("Heroe")
        } else if (ultimo_turno == -1) {
            $("#turno").html("Enemigo")
        }
    }

    //Nos permite mostrar al jugador si hemos ganado o perdido
    function resultado() {
        if (heroe.vida <= 0) {
            $("#Resultado").html("Pierdes")
        } else if (enemigo.vida <= 0) {
            $("#Resultado").html("Ganas")
        }
    }
    //Nos permite resetear el resultado de ganar o perder cuando le demos a continuar
    function reiniciarResultado() {
        $("#Resultado").html("")
    }

    //Subir experiencia del heroe y resetear
    function subirExp() {
        heroe.experiencia = heroe.subirExperiencia()
    }
    function resetearExp() {
        heroe.experiencia = heroe.restarExperiencia()
    }

    //Bloquear mana
    function bloquarMagia() {
        if ((heroe.mana - heroe.magiaCoste) <= 0) {
            $("#BotonMagia").prop('disabled', true)
        }
    }
    function sumarMana() {
        heroe.mana = heroe.sumarMana()
        datosHeroe()

    }
    function comprobarMana() {
        if (heroe.mana <= manaBaseHeroe) {
            heroe.mana = manaBaseHeroe
        } else {
            manaBaseHeroe = manaBaseHeroe
        }
    }

    //Actualizar los datos de los personajes
    function datosHeroe() {
        $("#nombreHeroe").html(heroe.nombre)
        $("#nivelHeroe").html(heroe.nivel)
        $("#vidaHeroe").html(heroe.vida)
        $("#ataqueHeroe").html(heroe.ataque)
        $("#experienciaHeroe").html(heroe.experiencia)
        $("#defensaHeroe").html(heroe.defensa)
        $("#CosteMagia").html(heroe.magiaCoste)
        $("#magiaHeroe").html(heroe.magiaDano)
        $("#manaHeroe").html(heroe.mana)
        turnos()

    }
    datosHeroe()

    function datosEnemigo() {
        $("#nombreEnemigo").html(enemigo.nombre)
        $("#nivelEnemigo").html(enemigo.nivel)
        $("#vidaEnemigo").html(enemigo.vida)
        $("#ataqueEnemigo").html(enemigo.ataque)
        turnos()
    }
    datosEnemigo()

    // ----------- BOTON EMPEZAR ----------- 
    document.getElementById("BotonEmpezar").addEventListener("click", () => {
        $("#BotonEmpezar").prop('disabled', true)
        $("#BotonAtacar").prop('disabled', false)
        $("#BotonDefender").prop('disabled', false)
        $("#BotonMagia").prop('disabled', false)
        document.getElementById("NombreHeroe").disabled = true
        /*
        1 -> 3 - Deshabilitamos los botones para que el usuario escriba un nombre
        4 - Cuando le de a empzar estará deshabilitado el volver escribir el nombre
        */

        $("#BorrarNombre").prop('disabled', true)
    })

    //  ----------- BOTON ATACAR ----------- 
    document.getElementById("BotonAtacar").addEventListener("click", () => {
        if (enemigo.vida <= 0) {
            console.log("ganaste")
            $("#BotonAtacar").prop('disabled', true)
            $("#BotonDefender").prop('disabled', true)
            $("#BotonMagia").prop('disabled', true)
            $("#BotonContinuar").prop('disabled', false)
            $("#BotonReiniciar").prop('disabled', false)
            resultado()
            muerteEnemigo()
            subirExp()
            datosHeroe()
        } else if (heroe.vida <= 0) {
            $("#BotonAtacar").prop('disabled', true)
            $("#BotonDefender").prop('disabled', true)
            $("#BotonMagia").prop('disabled', true)
            $("#BotonReiniciar").prop('disabled', false)
            resultado()
            muerteHeroe()
        } else {
            if (ultimo_turno == 0 || ultimo_turno == 1) {
                ultimo_turno = -1
                enemigo.vida = enemigo.restarVida(heroe.ataque)
                datosEnemigo()
                $("#BotonDefender").prop('disabled', true)
                $("#BotonMagia").prop('disabled', true)

                animacionHeroe()
                /* 
                     1 - Cambiamos al turno del enemigo
                     2 - Restmaos la vida del enemigo
                     3 - Actualizamos los datos
                     4,5 - Desactivamos el botones
                     6 - Animamos al heroe
                 */

            } else if (ultimo_turno == -1) {
                if (isDefensa == true) {
                    isDefensa = false
                    $("#BotonDefender").prop('disabled', true)
                    $("#BotonMagia").prop('disabled', false)
                    ultimo_turno = 1
                    heroe.defensa = heroe.restarDefensa(enemigo.ataque)
                    enemigo.ataque = enemigo.bajarAtaque()
                    datosEnemigo()
                    datosHeroe()
                    sumarMana()
                    bloquarMagia()
                    animacionEnemigo()
                    /* 
                       [ **Activamos Defensa ]
                       1 - Cambiamos la variable
                       2,3 - Desahibilatamos el botón
                       4 - Cambiamos al turno del heroe
                       5 - Restamos la defensa del heroe con el ataque del enemigo
                       6 - Bajamos a la mitad el ataque del enemigo
                       7,8 - Actualizamos datos
                       9 - Sumamos mana
                       10 - Comprobamos el nivel de mana, si es inferior quitamos el boton
                       11 - Animacion heroe

                   */
                } else {
                    //Si defendimos
                    ultimo_turno = 1
                    heroe.vida = heroe.restarVida(enemigo.ataque)
                    datosHeroe()
                    $("#BotonDefender").prop('disabled', false)
                    $("#BotonMagia").prop('disabled', false)
                    sumarMana()
                    bloquarMagia()
                    if (bajarAtaqueEnemigo == true) {
                        enemigo.ataque = enemigo.subirAtaque()
                        datosEnemigo()
                        ultimo_turno = 1
                        bajarAtaqueEnemigo = false
                    }
                    animacionEnemigo()
                    /*
                        1 - Cambiamos el turno
                        2 - Quitamos vida al heroe provocado por el enemigo
                        3 - Actulizamos los datos
                        4 - Volvemos a activar el botón de defensa

                        [ **Bajar Ataque ]
                        5 - Si previamente el heroe se defendio, y le bajamos el ataque al enemigo: 
                            1 - Volvemos a poner su ataque como estaba
                            2 - Actualizamos los datos del enemigo
                            3 - Cambiamos el turno
                            4 - Cambiamos la variable para que no se repita hasta que la condicion suceda
                        6 - Animacion enemigo
                    */

                }
            }
        }

    })

    //  -----------  BOTON DEFENDER ----------- 
    document.getElementById("BotonDefender").addEventListener("click", () => {
        if (enemigo.vida <= 0) {
            console.log("ganaste")
            $("#BotonAtacar").prop('disabled', true)
            $("#BotonDefender").prop('disabled', true)
            $("#BotonMagia").prop('disabled', true)
            $("#BotonContinuar").prop('disabled', false)
            $("#BotonReiniciar").prop('disabled', false)
            resultado()
            muerteEnemigo()
            subirExp()
            datosHeroe()
        } else if (heroe.vida <= 0) {
            $("#BotonAtacar").prop('disabled', true)
            $("#BotonDefender").prop('disabled', true)
            $("#BotonMagia").prop('disabled', true)
            $("#BotonReiniciar").prop('disabled', false)
            resultado()
            muerteHeroe()
        } else {
            heroe.defensa = heroe.sumarDefensa(enemigo.ataque)
            ultimo_turno = -1
            isDefensa = true
            bajarAtaqueEnemigo = true
            datosHeroe()
            $("#BotonDefender").prop('disabled', true)
            $("#BotonMagia").prop('disabled', true)
            var animacionHeroe = $("dibujoHeroe")
            animacionHeroe.animate({ top: '+=1vh' }, "fast")
            animacionHeroe.animate({ top: '-=1vh' }, "fast")
            /* 
                1 - Sumamos la defensa al heroe = al ataque del enemigo
                2 - Cambiamos el turno
                3 - Cambiamos la variable, que permitirá: [ **Activamos Defensa ]
                4 - Cambiamos la variable, [ **Bajar Ataque ]
                5 - Actualizamos datos
                6,7 - Desactivamos botones
                8+ - Animacion defensa
            */
        }
    })

    //  ----------- BOTON MAGIA ----------- 
    document.getElementById("BotonMagia").addEventListener("click", () => {

        if (enemigo.vida <= 0) {
            console.log("ganaste")
            $("#BotonAtacar").prop('disabled', true)
            $("#BotonDefender").prop('disabled', true)
            $("#BotonContinuar").prop('disabled', false)
            $("#BotonReiniciar").prop('disabled', false)
            resultado()
            muerteEnemigo()
            subirExp()
            datosHeroe()
        } else if (heroe.vida <= 0) {
            $("#BotonAtacar").prop('disabled', true)
            $("#BotonDefender").prop('disabled', true)
            $("#BotonReiniciar").prop('disabled', false)
            resultado()
            muerteHeroe()
        } else {
            $("#BotonDefender").prop('disabled', true)
            $("#BotonMagia").prop('disabled', true)
            ultimo_turno = -1
            enemigo.vida = enemigo.restarVida(heroe.magiaDano)
            heroe.mana = heroe.restarMana()
            datosEnemigo()
            datosHeroe()
            magiaFuegoHeroe()
            /*
            1 - Desativamos botones
            2 - Cambiamos el turno
            3 - Quitamos vida del enemigo con magia
            4 - Restamos mana
            5 - actualizamos datos
            6 - Animacion de fuego
            */
        }
    })

    //  ----------- BOTON CONTINUAR ----------- 
    document.getElementById("BotonContinuar").addEventListener("click", () => {

        reiniciarResultado()
        ultimo_turno = 1

        heroe.nivel = heroe.subirNivelBase()
        heroe.vida = heroe.subirVidaBase(vidaBaseHeroe)
        vidaBaseHeroe = heroe.vida
        comprobarMana()
        resetearExp()
        datosHeroe()

        enemigo.nivel = enemigo.subirNivelBase()
        enemigo.vida = enemigo.subirVidaBase(vidaBaseEnemigo)
        vidaBaseEnemigo = enemigo.vida
        enemigo.ataque = enemigo.subirAtaqueBase(ataqueBaseEnemigo)
        ataqueBaseEnemigo = enemigo.ataque
        enemigo.nombre = nombresEnemigo()
        datosEnemigo()
        revivirEnemigo()

        $("#BotonAtacar").prop('disabled', true)
        $("#BotonDefender").prop('disabled', true)
        $("#BotonContinuar").prop('disabled', true)
        $("#BotonReiniciar").prop('disabled', true)
        document.getElementById("Habilidades").style.visibility = "visible"
        /*
            1 - Reiniciamos el resultado de victoria o derrota
            2 - Cambiamos el turno
            3 -> 5 & 7 - Cogemos la vida base del heroe y le sumamos 1, asi infinitamente, y actulizamos los datos
            6 -> Comprobar el estado del mana
            8 -> 13 - Subimos el nivel, vida base y ataque del enemigo en +1, y los actualizamos
            14 - Animacion revivir enemigo
            15 -> 18 - Deshabilitamos para que el usuario escoga una habilidad
            19 - Mostrar las habilidades para que se suba un stat
        */
    })

    //  ----------- BOTON MAS DAÑO ----------- 
    document.getElementById("BotonMasDaño").addEventListener("click", () => {
        heroe.ataque = heroe.subirAtaque()
        datosHeroe()

        $("#BotonAtacar").prop('disabled', false)
        $("#BotonDefender").prop('disabled', false)
        $("#BotonMagia").prop('disabled', false)
        bloquarMagia()
        document.getElementById("Habilidades").style.visibility = 'hidden'
        /*
        1 & 2 -Subimos el nivel y el ataque del heroe y actulizamos los datos
        3 -> 5 - Desactivamos los botones de jugar
        6 - Comprobar el mana
        7 - Escondemos las habilidades
        */
    })


    //  ----------- BOTON MAS DAÑO MAGICO ----------- 
    document.getElementById("BotonMasDañoMagico").addEventListener("click", () => {
        heroe.magiaDano = heroe.subirAtaqueMagia()
        heroe.magiaCoste = heroe.subirCosteMagia()
        datosHeroe()

        $("#BotonAtacar").prop('disabled', false)
        $("#BotonDefender").prop('disabled', false)
        $("#BotonMagia").prop('disabled', false)
        bloquarMagia()
        document.getElementById("Habilidades").style.visibility = 'hidden'

        /*
        1 -> 3 -Subimos el nivel y el ataque del heroe y actulizamos los datos
        4 -> 6 - Desactivamos los botones de jugar
        7 - Compobar el estado del mana
        8 - Escondemos las habilidades
        */
    })

    //  ----------- BOTON MAS MANA ----------- 
    document.getElementById("BotonMasMana").addEventListener("click", () => {
        heroe.mana = heroe.subirMana()
        manaBaseHeroe = heroe.mana
        datosHeroe()

        $("#BotonAtacar").prop('disabled', false)
        $("#BotonDefender").prop('disabled', false)
        $("#BotonMagia").prop('disabled', false)
        bloquarMagia()
        document.getElementById("Habilidades").style.visibility = 'hidden'
        /*
        1 -> 3 -Subimos el nivel y el ataque del heroe y actulizamos los datos
        4 -> 6 - Desactivamos los botones de jugar
        7 - Compobar el estado del mana
        8 - Escondemos las habilidades
        */
    })

    //  ----------- BOTON REINICIAR ----------- 
    document.getElementById("BotonReiniciar").addEventListener("click", () => [
        location.reload()
        //Permite reiniciar el juego cuando matemos a un enemigo o hayamos muerto
    ])
}
main()
