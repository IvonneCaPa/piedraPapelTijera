// JUEGO PIEDRA PAPEL O TIJERA
/** Version 0.3
 * ponemos un marcador y contador
 * 
*/

//codigo de control
let reinicio = true;
let victorias = 0
let perdidas = 0
let empate = 0

do {
    game()
    //hacemos el confirm para que pare un poco
    reinicio = confirm("quieres seguir jugando?")
    if (!reinicio){
        break;
    }
} while (reinicio);


function game(){
let mensajeInicial = `
    PIEDRA PAPEL O TIJERAS
    ======================

    1 <-- Piedra
    2 <-- Papel
    3 <-- Tijeras
`

//sólo me importa las elecciones 1,2 o 3, las otras opciones que de el usuario no importan
// ponemos la condicion de jugar, pero pasamos el prompt a numero

let eleccionUsuario = Number(prompt(mensajeInicial))


    if(!isNaN(eleccionUsuario)) {
        if (eleccionUsuario == 1) {
            alert("Has elegido 👊");
        } else if(eleccionUsuario == 2) {
            alert("Has elegido ✋");
        } else if(eleccionUsuario == 3) {
            alert("Has elegido 🖖");
        } else {
            alert("¡¡ Hasta Pronto 👋!!")
            return
        }
        
        /**Hay que buscar la manera de que el juego escoja una eleccion
         * la manera es simulando números aleatorios, para eso creamos
         * una funcion que genere numeros aleatorios
         */
        let eleccionPC = getRandomInt(1, 4)
        //avisamos al usuario la decision de la maquina, 
        if (eleccionPC == 1) {
            alert("El PC ha elegido elegido 👊");
        } else if(eleccionPC == 2) {
            alert("El PC ha elegido elegido ✋");
        } else if(eleccionPC == 3) {
            alert("El PC ha elegido elegido 🖖");
        } 
    
        /** Ahora comparamos las elecciones del usuario con la maquina  */
        // Miramos el empate
        if (eleccionPC == eleccionUsuario){
            alert("¡Empate!")
            empate++
        } //ahora las otras 8 opciones, desde el punto de vista del usuario, en este caso
        else if((eleccionUsuario == 1 && eleccionPC == 3) ||
        (eleccionUsuario == 2 && eleccionPC == 1) ||
        (eleccionUsuario == 3 && eleccionPC == 2)){
            alert("¿Has ganado!")
            victorias++
        }else {
            alert("¡Has perdido!")
            perdidas++
        }
    
    }else{
        alert("Hasta pronto 👋!!");
    }
}

alert(`
Victorias: ${victorias}
Empates: ${empate}
Perdidas: ${perdidas}
`)


//funcion que genera un número aleatorio entre 1 y 3, es la eleccion de la maquina
function getRandomInt(min, max){
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
}