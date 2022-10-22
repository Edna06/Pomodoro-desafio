import { buttonPlay, buttonPause } from "./timer.js"

export function playHidden() {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
}

export function pauseHidden() {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
}


export function resetControls() {
 pauseHidden()
}