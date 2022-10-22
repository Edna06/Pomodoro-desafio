import {
  activeNatureCard,
  activeRainCard,
  activeRestaurantCard,
  activeFireCard,
  buttonPress
} from './cardsSound.js'
import { lightMode, darkMode } from './dark-mode.js'
import {
  countdown,
  buttonPlay,
  buttonPause,
  buttonReset,
  increaseTimeButton,
  incremetMinutes,
  decrementMinutes,
  decrementTimeButton,
  pauseTime,
  resetMinutes
} from './timer.js'

import { playHidden, pauseHidden } from './controls.js'

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
buttonLightMode.addEventListener('click', () => {
  lightMode(), buttonPress()
})

buttonDarkMode.addEventListener('click', () => {
  darkMode(), buttonPress()
})

// ajustando o contador
buttonPlay.addEventListener('click', () => {
  playHidden(), countdown(), buttonPress()
})

buttonPause.addEventListener('click', () => {
  pauseHidden(), pauseTime(), buttonPress()
})

buttonReset.addEventListener('click', () => {
  resetMinutes(), buttonPress()
})

increaseTimeButton.addEventListener('click', () => {
  incremetMinutes(), buttonPress()
})

decrementTimeButton.addEventListener('click', () => {
  decrementMinutes(), buttonPress()
})

// criando funções para ativar botões de som
natureCard.addEventListener('click', activeNatureCard)
rainCard.addEventListener('click', activeRainCard)
restaurantCard.addEventListener('click', activeRestaurantCard)
fireCard.addEventListener('click', activeFireCard)
