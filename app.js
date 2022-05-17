const rubiks = document.querySelector('.abre-popup-rubiks')
const homeofiice = document.querySelector('.abre-popup-homeofiice')
const iot = document.querySelector('.abre-popup-iot')
const arduino = document.querySelector('.abre-popup-arduino')

const popup =document.querySelector('.popup-wrapper')
const CloseButton = document.querySelector('.popup_close')

rubiks.addEventListener('click', () => {
  popup.style.display = 'block'
})

homeofiice.addEventListener('click', () => {
  popup.style.display = 'block'
})

iot.addEventListener('click', () => {
  popup.style.display = 'block'
})

arduino.addEventListener('click', () => {
  popup.style.display = 'block'
})

CloseButton.addEventListener('click', ()=> {
  popup.style.display = 'none'
})


