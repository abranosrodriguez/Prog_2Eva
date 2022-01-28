function main() {

    var heroe = new Heroe("Caballero", 1, 10, 1, 0)
    var enemigo = new Enemigo("Troll", 1, 9, 1, 1)
    reseteoVidaHeroe = heroe.vida
    reseteoVidaEnemigo = enemigo.vida

    function datosHeroe() {
        //Datos heroe
        $("#nombreHeroe").html(heroe.nombre)
        $("#nivelHeroe").html(heroe.nivel)
        $("#vidaHeroe").html(heroe.vida)
        $("#experienciaHeroe").html(heroe.experiencia)
        $("#ataqueHeroe").html(heroe.ataque)
    }
    function datosEnemigo() {
        //Datos Enemigo
        $("#nombreEnemigo").html(enemigo.nombre)
        $("#nivelEnemigo").html(enemigo.nivel)
        $("#vidaEnemigo").html(enemigo.vida)
        $("#ataqueEnemigo").html(enemigo.ataque)
    }
    datosHeroe()
    datosEnemigo()
    ultimo_turno = 0

    $("#ReiniciarJuego").prop('disabled', true)
    $("#BotonContinuar").prop('disabled', true)
    document.getElementById("BotonAtacar").addEventListener("click", function ataqueHeroe() {
        //Turnos de ataque + quitar vida
        if (ultimo_turno == 0 || ultimo_turno == 1) {

            vidaEnemigo = enemigo.vidaEnemigo(heroe.ataque)
            ultimo_turno = -1
            datosEnemigo()
            //Animacion
            var animacionHeroe = $("dibujoHeroe")
            animacionHeroe.animate({ left: '+=5vh' }, "fast")
            animacionHeroe.animate({ left: '-=5vh' }, "fast")

        } else if (ultimo_turno == -1) {

            vidaHeroe = heroe.vidaHeroe(enemigo.ataque)
            ultimo_turno = 1
            datosHeroe()
            //Animacion
            var animacionEnemigo = $("dibujoEnemigo")
            animacionEnemigo.animate({ right: '+=6vh' }, "fast")
            animacionEnemigo.animate({ right: '-=6vh' }, "fast")
        }

        //Comprobamos la vida de los personajes
        if (vidaHeroe <= 0) {
            $("#BotonAtacar").prop('disabled', true)
            $("#Resultado").html("Perdiste")
            $("dibujoHeroe").animate({ height: 'hide' })
            //Reiniciar Página

            $("#ReiniciarJuego").prop('disabled', false)
            $("#ReiniciarJuego").click(function reiniciar() {
                location.reload();
            })

        } else if (vidaEnemigo <= 0) {
            $("#BotonAtacar").prop('disabled', true)
            $("#BotonContinuar").prop('disabled', false)
            $("#Resultado").html("Ganas")
            ultimo_turno = 0
            //Cuando el enemigo muera desaparece
            $("dibujoEnemigo").animate({ height: 'hide' })

            document.getElementById("BotonContinuar").addEventListener("click", function a() {
                //Subir Niveles
                nivelHeroe = heroe.subirNivel()
                nivelEnemigo = enemigo.subirNivel()

                //Subir Vida
                reseteoVidaHeroe = heroe.reseteoVida(reseteoVidaHeroe)
                reseteoVidaEnemigo = enemigo.reseteoVida(reseteoVidaEnemigo)

                //Subir Ataque
                heroeAtaque = heroe.ataqueHeroe(heroe.ataque)
                enemigoAtaque = enemigo.ataqueEnemigo(enemigo.ataque)

                //Subir Experiencia
                heroeExperiencia = heroe.experienciaHeroe(enemigo.nivel, enemigo.experiencia)

                //Cuando reiniciamos se muestra
                $("dibujoEnemigo").animate({ height: 'show' })

                $("#BotonAtacar").prop('disabled', false)
                $("#Resultado").html("")
                $("#BotonContinuar").prop('disabled', true)
                datosHeroe()
                datosEnemigo()

            })
        }

    })
}
main()