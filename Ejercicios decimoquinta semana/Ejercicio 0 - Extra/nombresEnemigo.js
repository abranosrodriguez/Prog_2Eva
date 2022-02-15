function nombresEnemigo() {
    nombre_enemigo = ["Troll", "Esqueleto", "Zombie", "Vampiro", "Araña", "Gigante", "Fantasma", "Homber Lobo", "Asesino", "Robot", "Hada", "Bruja", "Humano", "Demonio", "Angel", "Serpiente Gigante", "Humano Poseido"]
    for (i = 0; i < nombre_enemigo.length; i++) {
        numero_aleatorio_lista = Math.round(Math.random() * (i - 0))
    }
    nombreEnemigoAleatorio = (nombre_enemigo[numero_aleatorio_lista])
    return nombreEnemigoAleatorio
}