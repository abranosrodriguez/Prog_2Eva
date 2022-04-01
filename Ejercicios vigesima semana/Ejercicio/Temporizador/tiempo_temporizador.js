class Tiempo_Temporizador extends Tiempo {
    restar_milisegundos_milisegundos() {
        this.milisegundos = this.milisegundos - 1
        return this.milisegundos
    }


    restar_segundos_temporizador(numero_escogido_segundos) {
        this.segundos = numero_escogido_segundos - 1
        return this.segundos
    }

    restar_minutos_temporizador(numero_escogido_minutos) {
        this.minutos = numero_escogido_minutos - 1
        return this.minutos
    }

    restar_horas_temporizador(numero_escogido_horas) {
        this.horas = numero_escogido_horas - 1
        return this.horas
    }
}