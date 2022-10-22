import {buttonLightMode, buttonDarkMode, body, timerViwer, cards} from './index.js'

export function lightMode() {
  buttonLightMode.classList.add('hide')
  buttonDarkMode.classList.remove('hide')

  body.classList.add('dark'),
  timerViwer.classList.add('dark'),
  cards.classList.add('dark')
}

export function darkMode() {
  buttonLightMode.classList.remove('hide')
  buttonDarkMode.classList.add('hide')
  
  body.classList.remove('dark'),
  timerViwer.classList.remove('dark'),
  cards.classList.remove('dark')

}






