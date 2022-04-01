class Tiempo_Cronometro extends Tiempo {
    sumar_milisegundos_cronometro() {
        this.milisegundos = this.milisegundos + 1
        return this.milisegundos
    }

    sumar_segundos_cronometro() {
        this.segundos = this.segundos + 1
        return this.segundos
    }

    sumar_minutos_cronometro() {
        this.minutos = this.minutos + 1
        return this.minutos
    }

    sumar_horas_cronometro() {
        this.horas = this.horas + 1
        return this.horas
    }
}