class Enemigo extends Personaje {

    vidaEnemigo(herida) {
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
    ataqueEnemigo() {
        this.ataque = this.ataque + 1.1

        return this.ataque
    }
}