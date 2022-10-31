const refs= 
{
input : document.querySelector('#validation-input')
}

refs.input.addEventListener('blur',onValidation)
const valuesLength =  refs.input.dataset.length

function onValidation(e) {
    if (refs.input.value.length > valuesLength) {
        refs.input.classList.remove('valid')
        refs.input.classList.add('invalid')
    }else{
        refs.input.classList.remove('invalid')
        refs.input.classList.add('valid')
    }
}