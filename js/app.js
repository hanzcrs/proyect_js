console.log("esta es la consola😊");
let nombreusuario = "Hanz";
let edad =30;
console.log("mi nombre es: "+nombreusuario + " "+ edad);
/*
// operacion simple en js
let resultado1 = (2* (100 / 5) + 10);
console.log(resultado1);

operacion true y false 
let resultado2 = 10 === 10;
console.log(resultado2); //señalara verdadero 

// prompt = lo que el usuario escriba y lo toma en string si hacemos esta suma concatena
let numeroUno = prompt("ingrese un numero1");
console.log(typeof numeroUno); // en consolta dira string graacias a typeof 
let numeroDos = prompt("ingrese un numero2"); 
let resultado = parseInt (numeroUno) + parseInt (numeroDos); //parseInt transforma texto a numero solo enteros
console.log(resultado);

 // funcion if en js 
let stringUsuario = prompt ('Escriba "javascript"');
if(stringUsuario === 'javascript') {
    console.log("correcto");   
}  else {
    console.log("falso!");
   }
   
// letra de 1 al 10 en js

   let numusuario = parseInt(prompt ('escriba del 1 al 10"'));
   if( numusuario  <= 10) {
    console.log("tu numero esta dentro de lo permitido");   
}  else {
     if( numusuario >= 10) {
    console.log("tu numero es muy alto");
     }
     else {
            console.log("tu numero esta dentro de lo permitido");     
   }
}
*/

// para ver opciones 
// alt+96 para ````
let opcionUsuario = prompt(`
elija una opcion:
1: Libros
2: Peliculas
3: Juegos 
`)
switch(opcionUsuario){
    case '1':
    console.log('principito');
    break;
    case '2':
    console.log('Matriz');
    break;
    case '3':
    console.log('Zelda Breath Of The Wild');
    break;
    default:
        console.log('Opcion No Valida');
}

