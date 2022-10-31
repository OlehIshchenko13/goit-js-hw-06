let counterValue = 0;

const refs ={
    decr: document.querySelector('[data-action="decrement"]'),
    incr : document.querySelector('[data-action="increment"]'),
    value: document.querySelector('#value')
}
console.log(refs.value);
refs.decr.addEventListener('click',onGetDecrement)
function onGetDecrement (e){
    counterValue -=1
    refs.value.textContent = counterValue

}
refs.incr.addEventListener('click',onGetIncrement)
function onGetIncrement(e) {
     counterValue +=1
    refs.value.textContent = counterValue
    
}

