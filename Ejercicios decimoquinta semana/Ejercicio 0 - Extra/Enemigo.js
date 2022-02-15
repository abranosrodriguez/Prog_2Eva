class Enemigo extends Personaje {

    restarVida(danoHeroe) {
        this.vida = this.vida - danoHeroe
        return this.vida
    }

    bajarAtaque() {
        this.ataque = this.ataque / 2
        return this.ataque
    }

    subirAtaque() {
        this.ataque = this.ataque * 2
        return this.ataque
    }

    subirVidaBase(vidaBaseEnemigo) {
        this.vida = vidaBaseEnemigo + 1
        return this.vida
    }

    subirAtaqueBase(ataqueBaseEnemigo) {
        this.ataque = ataqueBaseEnemigo + 1
        return this.ataque
    }

    subirNivelBase() {
        this.nivel = this.nivel + 1
        return this.nivel
    }
}