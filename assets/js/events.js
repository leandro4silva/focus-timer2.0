import {
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
    buttonPlus,
    buttonLess,
    buttonFlorest,
    buttonRain,
    buttonCoffee,
    buttonFire
} from './elements.js'

export default function({
    timer, 
    sound
}){
    buttonPlay.addEventListener('click', timer.runTemporizer)
    buttonPause.addEventListener('click', timer.pausetemporizer)
    buttonStop.addEventListener('click', timer.stopTemporizer)
    buttonSet.addEventListener('click', timer.setTemporizer)
    buttonPlus.addEventListener('click', timer.plusTemporizer)
    buttonLess.addEventListener('click', timer.lessTemporizer)
    
    
    buttonFlorest.addEventListener('click', sound.turnOnFlorestSound)
    buttonRain.addEventListener('click', sound.turnOnRainSound)
    buttonCoffee.addEventListener('click', sound.turnOnCoffeeSound)
    buttonFire.addEventListener('click', sound.turnOnFireSound)
}