class Heroe extends PersonajeHeroe {
    constructor(nombre, nivel, vida, ataque, experiencia, experienciaTotal) {
        super(nombre, nivel, vida, ataque, experiencia, experienciaTotal)
        this.nombre = nombre;
        this.nivel = nivel;
        this.vida = vida;
        this.ataque = ataque;
        this.experiencia = experiencia;
        this.experienciaTotal = experienciaTotal
    }

    set nombreHeroe(nombre) {
        this.nombre = nombre
    }
    get nombreHeroe() {
        return this.nombre
    }

    set nivelHeroe(nivel) {
        this.nivel = nivel
    }
    get nivelHeroe() {
        return this.nivel
    }

    set vidaHeroe(vida) {
        this.vida = vida
    }
    get vidaHeroe() {
        return this.vida
    }

    set ataqueHeroe(ataque) {
        this.ataque = ataque
    }
    get ataqueHeroe() {
        return this.ataque
    }

    set experienciaHeroe(experiencia) {
        this.experiencia = experiencia
    }
    get experienciaHeroe() {
        return this.experiencia
    }

    set experienciaHeroeTotal(experienciaTotal) {
        this.experienciaTotal = experienciaTotal
    }
    get experienciaHeroeTotal() {
        return this.experienciaTotal
    }
}