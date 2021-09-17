import Sun from '../images/icon-sun.svg'
import Moon from '../images/icon-moon.svg'
import BgSun from '../images/bg-desktop-light.jpg'
import BgMoon from '../images/bg-desktop-dark.jpg'

export default function toogleTheme(targetTheme){
    let rootElement = document.documentElement.style;
    if(targetTheme===false){
        document.querySelector('.icon-theme').src=Sun;
        document.querySelector('.banner-img').src=BgMoon;
        rootElement.setProperty('--primary-background','hsl(235, 21%, 11%)')
        rootElement.setProperty('--screen-background','hsl(235, 24%, 19%)')
        rootElement.setProperty('--primary-font','hsl(234, 39%, 85%)')
        rootElement.setProperty('--primary-font-hover','hsl(236, 33%, 92%)')
        rootElement.setProperty('--icons-color','hsl(234, 11%, 52%)')
        rootElement.setProperty('--icons-weigth-color','hsl(233, 14%, 35%)')
        rootElement.setProperty('--icons-weigther-color','hsl(237, 14%, 26%)')
    }
    else if (targetTheme===true){
        document.querySelector('.icon-theme').src=Moon;
        document.querySelector('.banner-img').src=BgSun;
        console.log(document.querySelector('.banner-img').src)
        rootElement.setProperty('--primary-background','hsl(236, 33%, 92%)')
        rootElement.setProperty('--screen-background','hsl(0, 0%, 98%)')
        rootElement.setProperty('--primary-font','hsl(235, 19%, 35%)')
        rootElement.setProperty('--primary-font-hover','hsl(236, 33%, 92%)')
        rootElement.setProperty('--icons-color','hsl(233, 11%, 84%)')
        rootElement.setProperty('--icons-weigth-color','hsl(236, 9%, 61%)')
        rootElement.setProperty('--icons-weigther-color','hsl(235, 19%, 35%)')
    }
}