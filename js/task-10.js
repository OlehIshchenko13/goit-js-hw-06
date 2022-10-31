// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  baseBox: document.querySelector('#boxes'),
  createBoxBTN: document.querySelector('[data-create]'),
  destroyBoxBTN: document.querySelector('[data-destroy]'),
  amount: document.querySelector('input')
}
let size = 20;

function makeBox (size){
    return`<div class="box" style="background-color: ${getRandomHexColor()}; width:${size}px; height: ${size}px;"></div>`
  }

refs.createBoxBTN.addEventListener('click',onCreateBox)





function onCreateBox(e){
  const amountBox =refs.amount.value ;
   
   const arrayBox =[];

  
  
  
  for (let i = 0; i < amountBox; i+=1) {
    size += 10;
    arrayBox.push(makeBox(size ))
    
  }

  return refs.baseBox.insertAdjacentHTML('beforeend',arrayBox.join(''))
  
  
  
}
refs.destroyBoxBTN.addEventListener('click',onDestroyBoxBTN)

function onDestroyBoxBTN(e) {
  refs.baseBox.innerHTML='';
  size = 20
}