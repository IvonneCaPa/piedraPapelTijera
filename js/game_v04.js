// JUEGO PIEDRA PAPEL O TIJERA
/** Version 0.4
 * Hacemos un formulario y ponemos bonito el juego
 * 
*/
let reinicio = true;
let victorias = 0
let perdidas = 0
let empate = 0


let game = document.getElementByName("game")





function game(){

    for(let i = 0; i < game.length; i++){
        if(game[i].checked == true){
            game = game[i].id
            alert(game)
            break
        }
    }
    let eleccionUsuario = game

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
            alert("¡Has empatado! 😺")
            empate++
        } //ahora las otras 8 opciones, desde el punto de vista del usuario, en este caso
        else if((eleccionUsuario == 1 && eleccionPC == 3) ||
        (eleccionUsuario == 2 && eleccionPC == 1) ||
        (eleccionUsuario == 3 && eleccionPC == 2)){
            alert("¿Has ganado! 😼")
            victorias++
        }else {
            alert("¡Has perdido! 😿")
            perdidas++
        }
    
    }else{
        alert("Hasta pronto 👋!!");
    }
}

Victorias: ${victorias}
Empates: ${empate}
Perdidas: ${perdidas}


//funcion que genera un número aleatorio entre 1 y 3, es la eleccion de la maquina
function getRandomInt(min, max){
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
}