class Heroe extends Personaje {

    vidaHeroe(herida) {
        this.vida = this.vida - herida
        return this.vida
    }

    reseteoVida(reseteoVida) {
        this.vida = reseteoVida + 1
        return this.vida
    }

    subirNivel() {
        this.nivel = this.nivel + 1
        return this.nivel
    }

    ataqueHeroe() {
        this.ataque = this.ataque + 1
        return this.ataque
    }
    experienciaHeroe(nivelEnemigo, experienciaEnemigo) {
        this.experiencia = (nivelEnemigo * 5) / experienciaEnemigo
        return this.experiencia
    }
}