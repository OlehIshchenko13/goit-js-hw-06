const categoryRef = document.querySelectorAll('#categories>.item')

console.log(`categ ${categoryRef.length}` );

categoryRef.forEach(el =>{
    const titleRef = el.firstElementChild.textContent
const categoryLengthRef = el.lastElementChild.children.length

console.log(titleRef)
console.log(categoryLengthRef);
}) 
    


