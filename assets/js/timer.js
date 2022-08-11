import {
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
    displayMinutes,
    displySeconds
} from './elements.js'

export default function({
    sound
}){
    
    //timer
    
    let timerTimeOut
    let minutes = displayMinutes.textContent
    
    
    
    function runTemporizer() {
        sound.buttonPress()
        buttonPlay.classList.add('hide')
        buttonPause.classList.remove('hide')
        buttonSet.classList.add('hide')
        buttonStop.classList.remove('hide')
    
        countDown()
    
    }
    
    function countDown() {
        timerTimeOut = setTimeout(function () {
    
            if (displySeconds.textContent == 0 && displayMinutes.textContent > 0) {
                updateTimerDisplay(displayMinutes.textContent - 1, 60)
            }
    
            if (displySeconds.textContent == 0 && displayMinutes.textContent == 0) {
                toggleControlsTimer()
                sound.timeEnd()
                return
            }
    
            updateTimerDisplay(displayMinutes.textContent, displySeconds.textContent - 1)
    
            countDown()
    
        }, 1000)
    }
    
    function toggleControlsTimer() {
        buttonPlay.classList.toggle('hide')
        buttonPause.classList.toggle('hide')
    
        buttonSet.classList.toggle('hide')
        buttonStop.classList.toggle('hide')
    }
    
    function pausetemporizer() {
        sound.buttonPress()
        clearTimeout(timerTimeOut)
        buttonPlay.classList.remove('hide')
        buttonPause.classList.add('hide')
    }
    
    function stopTemporizer() {
        sound.timeEnd()
        clearTimeout(timerTimeOut)
        toggleControlsTimer()
        updateTimer()
    }
    
    function updateTimerDisplay(minutes, seconds) {
        displayMinutes.textContent = String(minutes).padStart(2, '0')
        displySeconds.textContent = String(seconds).padStart(2, '0')
    }
    
    function updateTimer() {
        updateTimerDisplay(minutes, 0)
    }
    
    function setTemporizer() {
        minutes = prompt('Digite os minutos: ') || displayMinutes.textContent
        updateTimerDisplay(minutes, 0)
    }
    
    function plusTemporizer() {
        sound.buttonPress()
        if (displayMinutes.textContent >= 0 && displayMinutes.textContent < 60) {
            displayMinutes.textContent = Number(displayMinutes.textContent) + 5
            updateTimerDisplay(displayMinutes.textContent, displySeconds.textContent)
        } else {
            updateTimerDisplay(60, 0)
        }
    }
    
    function lessTemporizer() {
        sound.buttonPress()
        if (displayMinutes.textContent > 5) {
            displayMinutes.textContent = Number(displayMinutes.textContent) - 5
            updateTimerDisplay(displayMinutes.textContent, displySeconds.textContent)
        } else {
            updateTimerDisplay(0, 0)
        }
    
    }

    return{
        runTemporizer,
        pausetemporizer,
        stopTemporizer,
        setTemporizer,
        plusTemporizer,
        lessTemporizer
    }
}
