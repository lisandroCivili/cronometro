let milisecCounter = 0;
let milisecCounterForMinutes = 0;
let secondsCounter = 0;
let minuteCounter = 0;
const prueba = () =>{
    const minutes = document.getElementById('minuteCount');
    const seconds = document.getElementById('secCount');
    const miliseconds = document.getElementById('milisecCount');
    minutes.innerText = "00:";
    seconds.innerText = "00:";
    miliseconds.innerText = "00";
    setInterval(()=>{
        if (milisecCounter < 10) {
            miliseconds.innerText = `0${milisecCounter}`;
        }else{

            miliseconds.innerText = milisecCounter;
        }
        if (milisecCounter > 99) {
            milisecCounter = 0;
        }


        if (milisecCounter === 99 ) {
            secondsCounter++;
        }
        if (secondsCounter === 0) {
            seconds.innerText = '00:';
        }else if(secondsCounter < 10){
            seconds.innerText = `0${secondsCounter}:`;
        }else{
            seconds.innerText = `${secondsCounter}:`;
        }
        if (secondsCounter > 59) {
            secondsCounter = 0;
        }

        if (minuteCounter === 0) {
            minutes.innerText = '00:';
        }else if(minuteCounter < 10){
            minutes.innerText = `0${minuteCounter}:`;
        }else{
            minutes.innerText = `${minuteCounter}:`;
        }
        if (milisecCounterForMinutes === 6000) {
            minuteCounter++;    
        }
        if (minuteCounter > 60) {
            minuteCounter = 0;
        }
        milisecCounterForMinutes++
        milisecCounter++},10)
        
}
prueba();        