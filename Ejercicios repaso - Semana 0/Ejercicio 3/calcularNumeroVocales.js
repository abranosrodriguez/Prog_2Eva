function calculoVocales(frase) {

    let contador = 0
    for (i = 0; i < frase.length; i++) {

        if (frase[i] == "a") {
            contador++
        } else if (frase[i] == "e") {
            contador++
        } else if (frase[i] == "i") {
            contador++
        } else if (frase[i] == "o") {
            contador++
        } else if (frase[i] == "u") {
            contador++
        }
        //console.log(frase[i])
    }
    //console.log(contador)
    return contador

}