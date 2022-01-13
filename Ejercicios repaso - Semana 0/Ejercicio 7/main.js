function main() {
    let dato=null
    while (dato != 2){      
        dato = prompt("Que deseas hacer? \n1 -> Saber la palabra al reves \n2 -> Salir")
        if (dato == 1){
            let palabra = prompt("Dame una palabra")
                palabraNueva = revertidor(palabra)
                alert(`Tu palabra al reves es ${palabraNueva}`)
        }else if (dato == 2){
                break
        }else{
            alert("Escoge una opcion")
        }
    
    }
    
}
main()