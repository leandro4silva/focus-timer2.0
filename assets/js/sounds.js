import {
    buttonFlorest,
    buttonRain,
    buttonCoffee,
    buttonFire,

    buttonVolumeFlorest,
    buttonVolumeRain,
    buttonVolumeCoffee,
    buttonVolumeFire,

    cardFlorest,
    cardRain,
    cardCoffee,
    cardFire,
    } from './elements.js'

export default function(){
    
    //sounds
    const bgAudioFlorest = new Audio('./assets/audio/Floresta.wav')
    const bgAudioRain = new Audio('./assets/audio/Chuva.wav')
    const bgAudioCoffee = new Audio('./assets/audio/Cafeteria.wav')
    const bgAudioFire = new Audio('./assets/audio/Lareira.wav')
    
    const buttonPressAudio = new Audio('./assets/audio/audios_button-press.wav')
    const timeEndAudio = new Audio('./assets/audio/audios_kichen-timer.mp3')
    
    function playAndStopSound(bgAudio, volume){
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
        cardFlorest.classList.toggle('active')
        cardRain.classList.remove('active')
        cardCoffee.classList.remove('active')
        cardFire.classList.remove('active')
    
        playAndStopSound(bgAudioFlorest)
    }
    
    function turnOnRainSound(){
        cardRain.classList.toggle('active')
        cardFlorest.classList.remove('active')
        cardCoffee.classList.remove('active')
        cardFire.classList.remove('active')
    
        playAndStopSound(bgAudioRain)
    }
    
    
    function turnOnCoffeeSound(){
        cardCoffee.classList.toggle('active')
        cardFlorest.classList.remove('active')
        cardRain.classList.remove('active')
        cardFire.classList.remove('active')
    
        playAndStopSound(bgAudioCoffee)
    }
    
    
    function turnOnFireSound(){
        cardFire.classList.toggle('active')
        cardFlorest.classList.remove('active')
        cardRain.classList.remove('active')
        cardCoffee.classList.remove('active')
    
        playAndStopSound(bgAudioFire)
    }

    function buttonPress(){
        buttonPressAudio.play()
    }

    function timeEnd(){
        timeEndAudio.play()
    }

    function volumeFlorest(){
        if(!bgAudioFlorest.paused){
            bgAudioFlorest.volume = buttonVolumeFlorest.value / 100
        }
    }

    function volumeRain(){
        if(!bgAudioRain.paused){
            bgAudioRain.volume = buttonVolumeRain.value / 100
        }
    }

    function volumeCoffee(){
        if(!bgAudioCoffee.paused){
            bgAudioCoffee.volume = buttonVolumeCoffee.value / 100
        }
    }

    function volumeFire(){
        if(!bgAudioFire.paused){
            bgAudioFire.volume = buttonVolumeFire.value / 100
        }
    }




    return{
        turnOnFlorestSound,
        turnOnRainSound,
        turnOnCoffeeSound,
        turnOnFireSound,
        volumeFlorest,
        volumeRain,
        volumeCoffee,
        volumeFire,

        buttonPress,
        timeEnd
    }

}