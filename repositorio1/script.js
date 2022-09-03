function promedio(total,cantidad){
    let resultado = total / cantidad
    return resultado

}

function acumulador(acumulador,puntosSumados){
    return acumulador = acumulador + puntosSumados

}

function pedirCantidad(){
    let cantPartidos = parseInt(prompt("Ingrese la cantidad de partidos jugó el jugador"))
    return cantPartidos
}


let puntos = 0
let acumPuntos = 0
let promPuntos = 0
let cantPartidos = pedirCantidad()
for (let i=0; i<cantPartidos; i++){
    puntos = parseInt(prompt(`Ingrese los puntos del partido ${i+1}`))
    acumPuntos = acumulador (acumPuntos, puntos)
}

promPuntos = promedio(acumPuntos, cantPartidos)

alert("El jugador hizo " + acumPuntos + " puntos en " + cantPartidos + " partidos")
alert("El promedio de puntos por partido es " + promPuntos)


