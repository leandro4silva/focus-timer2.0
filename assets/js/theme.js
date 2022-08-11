import { buttonDarkMode, buttonLightMode } from "./elements.js"
export default function(){
    
    function darkMode(){
        document.body.classList.add('dark')
        buttonDarkMode.classList.add('hide')
        buttonLightMode.classList.remove('hide')
    }


    function lightMode(){
        document.body.classList.remove('dark')
        buttonDarkMode.classList.remove('hide')
        buttonLightMode.classList.add('hide')
    }

    return{
        darkMode,
        lightMode
    }

}