// 1 Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// 2 Добавит название ингредиента как его текстовое содержимое.
// 3 Добавит элементу класс item.
// 4 После чего вставит все <li> за одну операцию в список ul#ingredients.

const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
  ];
  const ingredientsRef = document.querySelector('#ingredients'); 
  function addLi (ingredientsOfItems)  {
    ingredientsRef.append(
      ...ingredientsOfItems.map(ingredientName => {
         const liRef = document.createElement('li');
         liRef.classList.add('item');
         liRef.textContent = ingredientName;
         return liRef;
      }),
    );
  };
  
  
  
  
  addLi(ingredients);

  