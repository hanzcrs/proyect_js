let numeroMaquina = Math.floor(Math.random() * (10-1)+1);
//mostrar el numero en consola solo para revisar si salen numeros aleatorios
//console.log(numeroMaquina);
let vidas = 3;
let numeroUsuario = parseInt(prompt('ADIVINE EL NUMERO DEL 1 AL 10'));
while(numeroMaquina !== numeroUsuario && vidas >1){
    let mensaje = 
    (numeroMaquina > numeroUsuario) // ? true y : false
    ? "El numero es mayor"
    : "El numero Ingresado es menor"
    console.log('Te equivocaste' + mensaje);
    numeroUsuario = parseInt(prompt('ADIVINE EL NUMERO DEL 1 AL 10'));
    vidas --
}
if (numeroMaquina === numeroUsuario){
 // iconos con windows+coma tecla coma con dos puntos
    console.log("Ganaste 😍");
} else{
    console.log("Perdiste 😂😢");
}





