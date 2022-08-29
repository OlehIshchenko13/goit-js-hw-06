// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. 
// Если инпут пустой, в спане должна отображаться строка "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>




let inputRef = document.querySelector('#name-input');
inputRef.addEventListener('input', onInputChange);

let outputRef = document.querySelector('#name-output');

function onInputChange(event) {
  inputRef = event.currentTarget.value;
  

  inputRef !== ' ' ? (outputRef.innerText = inputRef) : 'Anonymous';
}