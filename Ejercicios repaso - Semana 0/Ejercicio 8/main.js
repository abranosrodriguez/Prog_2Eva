function main() {
    function Asignatura() {
        this.nombreAsignatura = "";
        this.notaP1Trimestre = "";
        this.notaP2Trimestre = "";
        this.notaP3Trimestre = "";
    }
    var asignatura = new Asignatura()

    //Se cambian los valores
    asignatura.nombreAsignatura = "Ciencia";
    asignatura.notaP1Trimestre = 10;
    asignatura.notaP2Trimestre = 7;
    asignatura.notaP3Trimestre = 8.5;

    notaMedia = media(asignatura.notaP1Trimestre,asignatura.notaP2Trimestre,asignatura.notaP3Trimestre)
    console.log(`La asignatura de ${asignatura.nombreAsignatura} tiene una media es: ${notaMedia}`)
}
main()