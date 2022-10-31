function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  baseBox: document.querySelector('#boxes'),
  controls: document.querySelector('#controls'),
  createBoxBTN: document.querySelector('[data-create]'),
  destroyBoxBTN: document.querySelector('[data-destroy]'),
  amount: document.querySelector('input')
}

refs.createBoxBTN.addEventListener('click',onCreateBox)

function onCreateBox(e){
  const amountBox = refs.amount.value;
   let size = 20;
   const arrayBox =[];

  function makeBox (size){
    return`<div class="box" style="background-color: ${getRandomHexColor()}; width:${size}px; height: ${size}px;"></div>`
  }
  
  
  for (let i = 0; i < amountBox; i+=1) {
    size += 10;
    arrayBox.push(makeBox(size))
    
  }
  return refs.baseBox.insertAdjacentHTML('beforeend',arrayBox.join(''))
  
  
  
}
refs.destroyBoxBTN.addEventListener('click',onDestroyBoxBTN)

function onDestroyBoxBTN(e) {
  refs.baseBox.innerHTML='';
}