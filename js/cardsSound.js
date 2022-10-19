import { natureCard, rainCard, restaurantCard, fireCard } from './main.js'
import Sound from './sounds.js'

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
