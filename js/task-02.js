const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listRef = document.querySelector('#ingredients')

const elements = []
ingredients.forEach(el=>{
  const elementRef = document.createElement('li')
  elementRef.textContent =el
  elementRef.classList='item'

  elements.push(elementRef)
  
})

listRef.append(...elements)