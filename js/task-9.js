// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  
  const changeBtnRef = document.querySelector('button.change-color')
  const bodyRef = document.querySelector('body')
  const colorValRef = document.querySelector('span.color')
  
  
  changeBtnRef.addEventListener('click', (event) => {
    let color = getRandomHexColor();
    bodyRef.style.backgroundColor = color;
    colorValRef.textContent = color;
  })