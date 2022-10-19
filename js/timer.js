const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

export const buttonPlay = document.querySelector('.play')
export const buttonReset = document.querySelector('.reset')
export const increaseTimeButton = document.querySelector('.increase-time')
export const decrementTimeButton = document.querySelector('.decrement-time')

export function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, '0')
  secondsDisplay.textContent = String(seconds).padStart(2, '0')
}


export function incremetMinutes() {
   let minutes = Number(minutesDisplay.textContent)
   
   minutesDisplay.textContent = String(minutes + 1).padStart(2, '0')
  }

  export function decrementMinutes() {
    let minutes = Number (minutesDisplay.textContent)

    minutesDisplay.textContent = String(minutes - 1).padStart(2, '0')
  }


  export function countdown() {
    setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    incremetMinutes(minutes)

    updateTimerDisplay(minutes, 0)

    if (minutes <= 0) {
      return
    }

    if (seconds <= 0) {
      seconds = 59
      --minutes
    }

    updateTimerDisplay(minutes, String(seconds - 1))

    countdown()
  }, 1000)
}


function resetMinutes() {

}
