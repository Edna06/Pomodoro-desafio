import {activeNatureCard, activeRainCard, activeRestaurantCard, activeFireCard} from "./cardsSound.js"
import {lightMode, darkMode} from './dark-mode.js'

// variáveis
export const natureCard = document.querySelector('.nature-sound')
export const rainCard = document.querySelector('.rain-sound')
export const restaurantCard = document.querySelector('.restaurant-sound')
export const fireCard = document.querySelector('.fire-sound')

// buttons de light e dark
export const buttonLightMode = document.querySelector('.light-mode')
export const buttonDarkMode = document.querySelector('.dark-mode')

export const body = document.querySelector('body')
export const timerViwer = document.querySelector('.timer')
export const cards = document.querySelector('.cards')





// light |dark mode
buttonLightMode.addEventListener ('click', lightMode)
buttonDarkMode.addEventListener ('click', darkMode)


// criando funções para ativar botões de som
natureCard.addEventListener('click', activeNatureCard)
rainCard.addEventListener('click', activeRainCard) 
restaurantCard.addEventListener('click', activeRestaurantCard)
fireCard.addEventListener('click', activeFireCard)






