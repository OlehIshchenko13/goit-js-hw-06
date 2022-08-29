// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
let valueRef = Number(document.querySelector('#value').textContent);

let counterValue = document.querySelector('#value');

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incremenBtn = document.querySelector('button[data-action="increment"]')

incremenBtn.addEventListener('click', event => {
  
  valueRef += 1;

  counterValue.innerText = valueRef;
});

decrementBtn.addEventListener('click', event => {
  
  valueRef -= 1;

  counterValue.innerText = valueRef;
  
});


