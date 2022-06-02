//Se ejecuta despues de cierto tiempo y solo una vez
// setTimeout(() => {
//     console.log("Se borro el interval");
//     clearInterval(myInterval);
// }, 3000);

//valor actual del cronometro
let currentChronometer

//span que muestra los segundos en pantalla
let secondsSpan = document.querySelector('#seconds');
//Span que muestra los minutos en pantalla
let minutesSpan = document.querySelector('#minutes');

//valor de los segundos
let secondsValue = 0;
//valor de los minutos
let minutesValue = 0;

function starChronometer(){

    //Esta funcion anonima solo vive dentro de la funcion setInterval la cual ejecuta dicha funcion por un cierto tiempo
    currentChronometer = setInterval(() => {
        console.log("Ha pasado un segundo")

        if(secondsValue === 59){
            secondsValue = 0;
            minutesValue += 1;
            minutesSpan.textContent = formatValue(minutesValue);
        }
        secondsValue += 1;
        secondsSpan.textContent = formatValue(secondsValue);
    },1000);
}

function formatValue(value){
    if(value > 9){
        return value
    }
    else{
        return "0"+value;
    }
}

function stopChronometer() {     
    clearInterval(currentChronometer);
}

function resetChronometer(){
    secondsValue = 0;
    minutesValue = 0;
    secondsSpan.textContent = "00";
    minutesSpan.textContent = "00";
}