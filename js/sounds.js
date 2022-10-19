export default function () {

  const buttonPressAudioNature = new Audio ('./assets/sounds/nature.wav')
  const buttonPressAudioRain = new Audio('./assets/sounds/rain.wav')
  const buttonPressAudioRestaurant = new Audio('./assets/sounds/restaurant.wav')
  const buttonPressAudioFire = new Audio('./assets/sounds/fire.wav')


  buttonPressAudioNature.loop = true
  buttonPressAudioRain.loop = true
  buttonPressAudioRestaurant.loop = true 
  buttonPressAudioFire.loop = true 





// criando parametros 








  return {
   buttonPressAudioNature,
   buttonPressAudioRain,
   buttonPressAudioRestaurant, 
   buttonPressAudioFire
  }
}


