export default function() {

  const buttonPressAudioNature = new Audio ('./assets/sounds/nature.wav')
  const buttonPressAudioRain = new Audio('./assets/sounds/rain.wav')
  const buttonPressAudioRestaurant = new Audio('./assets/sounds/restaurant.wav')
  const buttonPressAudioFire = new Audio('./assets/sounds/fire.wav')

  const PressButton = new Audio('./assets/sounds/button-press.wav')
  const timeClosed = new Audio('/assets/sounds/audios_kichen-timer.wav')


  buttonPressAudioNature.loop = true
  buttonPressAudioRain.loop = true
  buttonPressAudioRestaurant.loop = true 
  buttonPressAudioFire.loop = true 


  return {
   buttonPressAudioNature,
   buttonPressAudioRain,
   buttonPressAudioRestaurant, 
   buttonPressAudioFire,
   PressButton,
   timeClosed
  }
}


