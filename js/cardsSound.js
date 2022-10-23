import { natureCard, rainCard, restaurantCard, fireCard } from './index.js'
import Sound from './sounds.js'

// volume
export const natureVolume = document.querySelector('.volNature')
export const rainVolume = document.querySelector('.volRain')
export const restaurantVolume = document.querySelector('.volRestaurant')
export const fireVolume = document.querySelector('.volFire')

const sound = Sound() // função construtora precisa ser executada

export function activeNatureCard() {
  natureCard.classList.toggle('active')
  rainCard.classList.remove('active')
  restaurantCard.classList.remove('active')
  fireCard.classList.remove('active')

  if (natureCard.classList.contains('active')) {
    sound.buttonPressAudioNature.play()

    sound.buttonPressAudioRain.pause()
    sound.buttonPressAudioRestaurant.pause()
    sound.buttonPressAudioFire.pause()
  } else {
    sound.buttonPressAudioNature.pause()
  }
}

export function activeRainCard() {
  natureCard.classList.remove('active')
  rainCard.classList.toggle('active')
  restaurantCard.classList.remove('active')
  fireCard.classList.remove('active')

  if (rainCard.classList.contains('active')) {
    sound.buttonPressAudioRain.play()

    sound.buttonPressAudioNature.pause()
    sound.buttonPressAudioFire.pause()
  } else {
    sound.buttonPressAudioRain.pause()
  }
}

export function activeRestaurantCard() {
  natureCard.classList.remove('active')
  rainCard.classList.remove('active')
  restaurantCard.classList.toggle('active')
  fireCard.classList.remove('active')

  if (restaurantCard.classList.contains('active')) {
    sound.buttonPressAudioRestaurant.play()

    sound.buttonPressAudioNature.pause()
    sound.buttonPressAudioRain.pause()
    sound.buttonPressAudioFire.pause()
  } else {
    sound.buttonPressAudioRestaurant.pause()
  }
}

export function activeFireCard() {
  natureCard.classList.remove('active')
  rainCard.classList.remove('active')
  restaurantCard.classList.remove('active')
  fireCard.classList.toggle('active')

  if (fireCard.classList.contains('active')) {
    sound.buttonPressAudioFire.play()

    sound.buttonPressAudioNature.pause()
    sound.buttonPressAudioRain.pause()
    sound.buttonPressAudioRestaurant.pause()
  } else {
    sound.buttonPressAudioFire.pause()
  }
}

export function buttonPress() {
  sound.PressButton.play()
}


// vol dos inputs
export function natureSoundVol() {
  sound.volNature(natureVolume.value)
}

export function rainSoundVol() {
  sound.volRain(rainVolume.value)
}

export function restaurantSoundVol() {
  sound.volRestaurant(restaurantVolume.value)
}

export function fireSoundVol() {
  sound.volFire(fireVolume.value)
}
