//Se ejecuta despues de cierto tiempo y solo una vez
// setTimeout(() => {
//     console.log("Se borro el interval");
//     clearInterval(myInterval);
// }, 3000);


//valor actual del cronometro
let currentChronometer

//valor de los segundos
let secondsValue = 0;

function starChronometer(){

    //span que muestra los segundos en pantalla
    const secondsSpan = document.querySelector("#seconds");
    console.log("SPAN: "+secondsSpan);


    //Esta funcion anonima solo vive dentro de la funcion setInterval la cual ejecuta dicha funcion por un cierto tiempo
    currentChronometer = setInterval(() => {
        console.log("Ha pasado un segundo")
        secondsValue += 1;
        secondsSpan.textContent = secondsValue;
    },1000);
}

function stopChronometer() {     
    clearInterval(currentChronometer);
}