//Seccion que contiene el cronometro, el temporizador y el pomodoro
let section = document.querySelector("#section");

//valor actual del intervalo
let currentInterval;

//span que muestra los segundos en pantalla
let secondsSpan = document.querySelector('#seconds');
//Span que muestra los minutos en pantalla
let minutesSpan = document.querySelector('#minutes');

//valor de los segundos
let secondsValue = 0;
//valor de los minutos
let minutesValue = 0;

//valor de boton (Presionado - No presionado)
let currentButton;


//-------------------------------------------------------- Cronometro ----------------------------------------------------------//

function starChronometer(){

    //Donde estamos haciendo click
    currentButton = event.target;
    //Desactivar boton
    currentButton.disabled = true;

    //Esta funcion anonima solo vive dentro de la funcion setInterval la cual ejecuta dicha funcion por un cierto tiempo
    currentInterval = setInterval(() => {
        console.log("Ha pasado un segundo")

        if(secondsValue === 59){
            secondsValue = 0;
            minutesValue += 1;
            minutesSpan.textContent = formatValue(minutesValue);
        }
        secondsValue += 1;
        secondsSpan.textContent = formatValue(secondsValue);
    },100);
}

function stopChronometer() {     
    clearInterval(currentInterval);
    
    if(currentButton){
        currentButton.disabled = false;
    }
}

function resetChronometer(){
    secondsValue = 0;
    minutesValue = 0;
    secondsSpan.textContent = "00";
    minutesSpan.textContent = "00";
}

//------------------------------------------------------ Temporizador -------------------------------------------------------------//

let timerButton = document.querySelector("#timer-button");

function exucuteTimer(){
    
    section.innerHTML = 
        `<h1 class="main-section__title" id="title">Timer</h1>
        <p class="main-section__time"><span id="minutes">00</span>:<span id="seconds">00</span></p>
        <div class="main-section__buttons-box">
            <form onsubmit="startTimer()">
                <input type="number" placeholder="Escribe los minutos" id="minutes-input" name="minutes">
                <input type="number" placeholder="Escribe los segundos" id="seconds-input" name="seconds">
                <button type="submit" class="main-section__buttons">Start</button>
            </form>
        </div>`

    secondsSpan = document.querySelector('#seconds');
    minutesSpan = document.querySelector('#minutes');
}
function startTimer(){
    event.preventDefault();
    const minutes = parseInt(event.target.minutes.value);
    const seconds = parseInt(event.target.seconds.value);

    minutesSpan.textContent = minutes;
    secondsSpan.textContent = seconds;
    minutesValue = minutes;
    secondsValue = seconds;

    currentInterval = setInterval(() => {
        secondsValue -= 1;
        if(secondsValue === -1){
            secondsValue = 59;
            minutes -= 1;
        }
        if(minutesValue === 0 && secondsValue === 0){
            clearInterval(currentInterval);
        }
        minutesSpan.textContent = formatValue(minutesValue);
        secondsSpan.textContent = formatValue(secondsValue);
    },1000)
}

//------------------------------------------------------------ Formatos -----------------------------------------------------------//

function formatValue(value){
    if(value > 9){
        return value
    }
    else{
        return "0"+value;
    }
}