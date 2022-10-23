import { resetControls } from "./controls.js"
import Sound from './sounds.js'

export const buttonPlay = document.querySelector('.play')
export const buttonPause = document.querySelector('.pause')
export const buttonReset = document.querySelector('.reset')
export const increaseTimeButton = document.querySelector('.increase-time')
export const decrementTimeButton = document.querySelector('.decrement-time')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

let setTimeOut
let minutes
let seconds
const sound = Sound()

export function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, '0')
  secondsDisplay.textContent = String(seconds).padStart(2, '0')
}

export function resetMinutes() {
  minutesDisplay.textContent = String("25").padStart(2, '0')
  secondsDisplay.textContent = String("00").padStart(2, '0')

  resetControls()
  pauseTime()
}


  export function countdown() {
    setTimeOut = setTimeout(function() {
    seconds = Number(secondsDisplay.textContent)
    minutes = Number(minutesDisplay.textContent)

    updateTimerDisplay(minutes, 0)

    if (minutes <= 0 && seconds <= 0) {
      resetControls()
      sound.timeClosed.play()

      return
    }

    if (seconds <= 0) {
      seconds = 60
      --minutes
    }

    updateTimerDisplay(minutes, String(seconds - 1))

    countdown()
  }, 1000)
}

export function pauseTime() {
  clearTimeout(setTimeOut)
}

export function incremetMinutes() {
  minutes = Number(minutesDisplay.textContent)
  minutesDisplay.textContent = String(minutes + 1).padStart(2, '0')
 }

 export function decrementMinutes() {
   minutes = Number(minutesDisplay.textContent)
   minutesDisplay.textContent = String(minutes - 1).padStart(2, '0')

 }