function main() {
    var ultimo_click_cronometro = 0
    var ultimo_click_temporizador = 0
    var tmp_cronometro = new Tiempo_Cronometro(0, 0, 0, 0)
    var tmp_temporizador = new Tiempo_Temporizador("", 0, 0, 0)
    //Actualiza el reloj cada segundo
    intervalo_reloj()

    //Crea los numeros en el temporizador
    valores_select_temporizador_minutos()
    valores_select_temporizador_segundos()
    valores_select_temporizador_horas()


    $("#Datos_Cronometro").hide()

    // -------------------- BOTONES --------------------
    document.getElementById("Boton_Reloj").addEventListener("click", () => {
        $("#Datos_Reloj").show()
        $("#Datos_Cronometro").hide()
    })

    document.getElementById("Boton_Cronometro").addEventListener("click", () => {
        $("#Datos_Reloj").hide()
        $("#Datos_Cronometro").show()
    })


    // -------------------- RELOJ --------------------
    document.getElementById("Boton_Reloj").addEventListener("click", () => {
        intervalo_reloj()
    })


    // -------------------- CRONOMETRO --------------------
    document.getElementById("Start").addEventListener("click", () => {
        if (ultimo_click_cronometro == 0 || ultimo_click_cronometro == 1) {
            ultimo_click_cronometro = -1
            temporizador_cronometro(tmp_cronometro)
            $("#Start").prop("value", "Stop")
        } else if (ultimo_click_cronometro == -1) {
            ultimo_click_cronometro = 1
            parar_temporizador_cronometro()
            $("#Start").prop("value", "Start")
        }

    })

    document.getElementById("Flag").addEventListener("click", () => {
        let tag_tiempo_guardado = document.createElement("li")
        let tiempo_guardado = document.getElementById("lista_de_tiempos")
        let texto = document.createTextNode(tmp_cronometro.horas + ":" + tmp_cronometro.minutos + ":" + tmp_cronometro.segundos + ":" + tmp_cronometro.milisegundos)

        tag_tiempo_guardado.appendChild(texto)
        tiempo_guardado.appendChild(tag_tiempo_guardado)
    })


    // -------------------- TEMPORIZADOR --------------------


    document.getElementById("Start_Temporizador").addEventListener("click", () => {
        //Valores Seleccionados
        valores_seleccionados_temporizador(tmp_temporizador)

        tempo_temporizador(tmp_temporizador)
        // console.log(tmp_temporizador)
        // console.log("adsada" + tmp_temporizador.tempo_minutos)
    })




}
main()