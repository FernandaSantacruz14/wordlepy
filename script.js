let intentos = 6;
let diccionario = ['ARBOL', 'ABEJA', 'PERRO', 'TRIGO',"LIBRO"]
const palabra = diccionario[Math.floor(Math.random()*diccionario.length)]
console.log(palabra)


window.addEventListener('load', init)
function init(){
    console.log('Esto se ejecuta solo cuando se carga la pagina web')
}
const button = document.getElementById("guess-button");
button.addEventListener("click", intentar);
const input = document.getElementById("guess-input");
const valor = input.value;


function intentar(){
    const INTENTO = leerIntento();
    
        if (INTENTO === palabra ) {
            terminar("<h1>GANASTE</h1>")
            return
        }
        if (intentos==0){
            terminar("<h1>PERDISTE</h1>")
            return
        }
        const GRID = document.getElementById("grid");
        const ROW = document.createElement('div');
        ROW.className = 'row';
        for (let i in palabra){
            const SPAN = document.createElement('span');
            SPAN.className = 'letter';
            if (INTENTO[i]===palabra[i]){ //VERDE
                SPAN.innerHTML = INTENTO[i];
                SPAN.style.backgroundColor = 'green';
            } else if( palabra.includes(INTENTO[i]) ) { //AMARILLO
                SPAN.innerHTML = INTENTO[i];
                SPAN.style.backgroundColor = 'yellow';
            } else {      //GRIS
                SPAN.innerHTML = INTENTO[i];
                SPAN.style.backgroundColor = 'grey';
            }
            ROW.appendChild(SPAN)
        }
        GRID.appendChild(ROW)
        intentos--;
        if (intentos === 0) {
            console.log("PERDISTE!");
            terminar("<h1>¡PERDISTE!</h1>");
            return;
        }
}
function terminar(mensaje){
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    button.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
    if(mensaje === "<h1>GANASTE</h1>"){
        const GRID = document.getElementById("grid");
        const ROW = document.createElement('div'); 
        ROW.className="row"
        GRID.appendChild(ROW)
        
        for (let i = 0; i < palabra.length; i++) {
            const SPAN = document.createElement('span');
            SPAN.className = 'letter';
            SPAN.innerHTML = palabra[i];
            SPAN.style.backgroundColor = 'green';
            ROW.appendChild(SPAN);
        }
    }
}

function leerIntento(){
    let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.toUpperCase(); 
    return intento; 
}



