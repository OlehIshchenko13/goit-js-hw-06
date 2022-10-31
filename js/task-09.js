function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// console.log(getRandomHexColor());


const refs= {
body : document.querySelector('body'),
button: document.querySelector('.change-color'),
colorValue: document.querySelector('.color')
}



refs.button.addEventListener('click',onChangeColor)


function onChangeColor(e) {
  refs.body.style.backgroundColor = getRandomHexColor()
  refs.colorValue.textContent= getRandomHexColor()
}