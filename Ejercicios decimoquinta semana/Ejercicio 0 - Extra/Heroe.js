class Heroe extends Personaje {

    restarVida(danoEnemigo) {
        this.vida = this.vida - danoEnemigo
        return this.vida
    }

    sumarDefensa(ataqueEnemigo) {
        this.defensa = this.defensa + ataqueEnemigo
        return this.defensa
    }

    restarDefensa(ataqueEnemigo) {
        this.defensa = this.defensa - ataqueEnemigo
        return this.defensa
    }

    subirVidaBase(vidaBaseHeroe) {
        this.vida = vidaBaseHeroe + 1
        return this.vida
    }

    subirNivelBase() {
        this.nivel = this.nivel + 1
        return this.nivel
    }

    subirAtaque() {
        this.ataque = this.ataque + 1
        return this.ataque
    }

    restarMana() {
        this.mana = this.mana - this.magiaCoste
        return this.mana
    }

    sumarMana() {
        this.mana = this.mana + 1
        return this.mana
    }

    subirAtaqueMagia() {
        this.magiaDano = this.magiaDano + 1
        return this.magiaDano
    }

    subirCosteMagia() {
        this.magiaCoste = this.magiaCoste + 1
        return this.magiaCoste
    }

    subirMana() {
        this.mana = this.mana + 2
        return this.mana
    }

    subirExperiencia() {
        this.experiencia = this.experiencia + 10
        return this.experiencia
    }

    restarExperiencia() {
        this.experiencia = this.experiencia - 10
        return this.experiencia
    }
}