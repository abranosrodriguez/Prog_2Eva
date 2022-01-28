function main() {
    nombrePersonaje = prompt("Como te deseas llamar")
    personajeEnemigo = new PersonajeEnemigo("", 1, 10, 1, 1)
    personajeHeroe = new PersonajeHeroe("", 0, 12, 1, 0, 0)

    //Ataque el enemigo, 4 parametro, el segundo 1, para comprobar que pierde
    enemigo = new Enemigo("Enemigo N: 1", 1, 10, 2, 0.75)
    heroe = new Heroe(nombrePersonaje, 1, 12, 1, 0, 0)

    //Comprobación en que turno estamos, Primero ataca el heroe y después el enemigo
    turno = 0
    //Contador para sabe en que enemigo vamos
    contador = 1
    //Nos permitirá pedir al usuario que desea hacer
    valorAlerta = null
    //Si el usuario pierde tendrá que refrescar la página web
    Pierdes = false
    //Permitirle al usuario salir del juego si no desea jugar mas
    salir = false
    //Sumar la experienca
    sumaExperiencia = 0

    vidaHeroeCantidad = personajeHeroe.vida
    vidaEnemigoCantidad = enemigo.vida
    while (valorAlerta != 4) {
        //Pedimos lo que queremos hacer
        if (salir == true) {
            alert(`Saliendo del Juego...`)
            break
        } else {
            valorAlerta = prompt("1-> Atacar \n2-> Ver Estadisticas Usuario \n3-> Ver Estadisticas Enemigo \n4-> Salir")
            $(".heroe").css({
                "font-size": "20px",
                "color": "blue",
                "text-align": "center"
            })
            $(".enemigo").css({
                "font-size": "16px",
                "color": "red",
                "text-align": "center",
                "border-width": "2px",
                "border-style": "solid",
                "border-color": "black"

            })
            $("#nivel").html(heroe.nivel)
            $("#experiencia").html(heroe.experienciaTotal)
            $("#salud").html(heroe.vida)
            $("#saludTotal").html(heroe.vida + "/" + vidaHeroeCantidad)
            $("#nivelEnemigo").html(enemigo.nivel)
            $("#saludEnemigo").html(`${enemigo.vida}/ ${vidaEnemigoCantidad}`)


            if (valorAlerta == 1) {

                //Si la vida del heroe llega a 0, tiene que reiniciar la web
                if (Pierdes == true) {
                    alert(`Has Perdido, reinicia el Juego`)

                } else {
                    while (!heroe.vidaHeroe <= 0 && !enemigo.enemigoVida <= 0) {
                        //Turno del Heroe
                        if (turno == 0 || turno == 1) {
                            DamageHeroe = heroe.ataqueHeroe
                            enemigo.enemigoVida = enemigo.vida - DamageHeroe
                            turno = -1
                            alert(`Turno Heroe: \n\nVida Enemigo Restante: ${enemigo.vida} \nDamage Provocado: ${DamageHeroe}`)

                            //Si la vida del enemigo Gana y le preguntamos si desea volver a jugar
                            if (enemigo.enemigoVida <= 0) {
                                alert(`Enhorabuena Heroe: \nHas Ganado al Enemigo N: ${contador} `)
                                volverAJugar = prompt(`Quieres continuar? \n1-> [ Si ]  \n2-> [ No ]`)
                                if (volverAJugar == 1) {
                                    contador++
                                    //Creacion de enemigos

                                    //Nombre del enemigo
                                    enemigo.enemigoNombre = `Enemigo N: ${contador}`

                                    //Aumentamos el nivel del enemigo
                                    personajeEnemigo.nivel++
                                    enemigo.enemigoNivel = personajeEnemigo.nivel

                                    //Aumentamos la vida del enemigo
                                    personajeEnemigo.vida++
                                    enemigo.enemigoVida = personajeEnemigo.vida

                                    //Aumentamos el ataque del enemigo
                                    personajeEnemigo.ataque++
                                    enemigo.enemigoAtaque = personajeEnemigo.ataque

                                    enemigo.enemigoExperiencia = enemigo.experiencia + (enemigo.experiencia / 10)
                                    enemigo.enemigoExperiencia = personajeEnemigo.experiencia

                                    //Aumentamos la vida del persoaje
                                    personajeHeroe.vida++
                                    heroe.vidaHeroe = personajeHeroe.vida



                                    //Aumentamos el ataque
                                    personajeHeroe.ataque++
                                    heroe.ataqueHeroe = personajeHeroe.ataque

                                    //Experiencia del heroe
                                    personajeHeroe.experiencia = ((enemigo.nivel * 5) / enemigo.experiencia)
                                    personajeHeroe.experiencia = Math.round(personajeHeroe.experiencia)
                                    sumaExperiencia = sumaExperiencia + personajeHeroe.experiencia
                                    heroe.experiencia = sumaExperiencia

                                    while (heroe.experiencia >= 10) {
                                        heroe.experiencia = heroe.experiencia - 10
                                        personajeHeroe.nivel++
                                        heroe.nivelHeroe = personajeHeroe.nivel

                                    }
                                    //Igualamos la vida del enemigo
                                    enemigo.enemigoNivel = personajeHeroe.nivel

                                    enemigo.enemigoVida = personajeEnemigo.vida + personajeEnemigo.ataque
                                    heroe.vidaHeroe = personajeHeroe.vida + (personajeHeroe.nivel + 2)
                                    vidaHeroeCantidad = heroe.vida
                                    vidaEnemigoCantidad = enemigo.vida


                                    //Experiencia Total
                                    personajeHeroe.experienciaTotal = personajeHeroe.experienciaTotal + personajeHeroe.experiencia
                                    personajeHeroe.experienciaTotal = Math.round(personajeHeroe.experienciaTotal)
                                    heroe.experienciaTotal = personajeHeroe.experienciaTotal
                                    turno = 1
                                    // EnemigoDerrotado = false
                                    console.log(enemigo)
                                    break
                                } else if (volverAJugar == 2) {
                                    salir = true
                                    break
                                } else {
                                    salir = true
                                }

                            }

                            //Turno del Enemigo
                        } else if (turno == -1) {
                            DamageEnemigo = enemigo.ataque
                            heroe.vidaHeroe = heroe.vida - DamageEnemigo
                            alert(`Turno Enemigo: \n\nVida Heroe Restante: ${heroe.vida} \nDamage Provocado: ${DamageEnemigo}`)
                            turno = 0
                            if (heroe.vidaHeroe <= 0) {
                                alert(`Pierdes`)
                                //&& enemigo.vida == (- 1 < 0)
                                inicio = true
                                Pierdes = true

                                break
                            }
                        }

                    }
                }

            } else if (valorAlerta == 2) {
                alert(`Estadisticas Heroe: \n\nNombre: ${heroe.nombre} \nNivel: ${heroe.nivel} \nVida: ${heroe.vida} \nAtaque: ${heroe.ataque} \nExperiencia: ${heroe.experiencia} \nExperiencia Total: ${heroe.experienciaTotal}`)
            } else if (valorAlerta == 3) {
                alert(`Estadisticas Enemigo: \n\nNombre: ${enemigo.nombre} \nNivel: ${enemigo.nivel} \nVida: ${enemigo.vida} \nAtaque: ${enemigo.ataque}`)
            } else if (valorAlerta == 4) {
                break
            } else {
                alert("Escoge una opcion")
            }
        }
    }
}
main()