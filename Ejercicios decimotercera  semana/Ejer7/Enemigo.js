class Enemigo extends PersonajeEnemigo {
    constructor(nombre, nivel, vida, ataque, experiencia) {
        super(nombre, nivel, vida, ataque, experiencia)
        this.nombre = nombre;
        this.nivel = nivel;
        this.vida = vida;
        this.ataque = ataque;
        this.experiencia = experiencia;
    }
    set enemigoNombre(nombre) {
        this.nombre = nombre
    }
    get enemigoNombre() {
        return this.nombre
    }

    set enemigoNivel(nivel) {
        this.nivel = Math.round(nivel + 1.35)
    }
    get enemigoNivel() {
        return this.nivel
    }

    set enemigoVida(vida) {
        this.vida = vida
    }
    get enemigoVida() {
        return this.vida
    }

    set enemigoAtaque(ataque) {
        this.ataque = ataque
    }
    get enemigoAtaque() {
        return this.ataque
    }

    set enemigoExperiencia(experiencia) {
        this.experiencia = Math.round(experiencia + 1.55)
    }
    get enemigoExperiencia() {
        return this.experiencia
    }
}