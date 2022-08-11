import {
    buttonFlorest,
    buttonRain,
    buttonCoffee,
    buttonFire,
    } from './elements.js'

export default function(){
    
    //sounds
    const bgAudioFlorest = new Audio('./assets/audio/Floresta.wav')
    const bgAudioRain = new Audio('./assets/audio/Chuva.wav')
    const bgAudioCoffee = new Audio('./assets/audio/Cafeteria.wav')
    const bgAudioFire = new Audio('./assets/audio/Lareira.wav')
    
    const buttonPressAudio = new Audio('./assets/audio/audios_button-press.wav')
    const timeEndAudio = new Audio('./assets/audio/audios_kichen-timer.mp3')
    
    function playAndStopSound(bgAudio){
        let array = [bgAudioFlorest, bgAudioRain, bgAudioCoffee, bgAudioFire]
    
        
        array.forEach((audio) => {
            if(audio == bgAudio){
                bgAudio.loop = true
                bgAudio.paused ? bgAudio.play() : bgAudio.pause()
            }else{
                audio.pause()
            }
        })
    }
    
    function turnOnFlorestSound(){
        buttonFlorest.classList.toggle('active')
        buttonRain.classList.remove('active')
        buttonCoffee.classList.remove('active')
        buttonFire.classList.remove('active')
    
        playAndStopSound(bgAudioFlorest)
    }
    
    function turnOnRainSound(){
        buttonRain.classList.toggle('active')
        buttonFlorest.classList.remove('active')
        buttonCoffee.classList.remove('active')
        buttonFire.classList.remove('active')
    
        playAndStopSound(bgAudioRain)
    }
    
    
    function turnOnCoffeeSound(){
        buttonCoffee.classList.toggle('active')
        buttonFlorest.classList.remove('active')
        buttonRain.classList.remove('active')
        buttonFire.classList.remove('active')
    
        playAndStopSound(bgAudioCoffee)
    }
    
    
    function turnOnFireSound(){
        buttonFire.classList.toggle('active')
        buttonFlorest.classList.remove('active')
        buttonRain.classList.remove('active')
        buttonCoffee.classList.remove('active')
    
        playAndStopSound(bgAudioFire)
    }

    function buttonPress(){
        buttonPressAudio.play()
    }

    function timeEnd(){
        timeEndAudio.play()
    }


    return{
        turnOnFlorestSound,
        turnOnRainSound,
        turnOnCoffeeSound,
        turnOnFireSound,

        buttonPress,
        timeEnd
    }

}