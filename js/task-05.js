const refs ={
    input : document.querySelector('#name-input'),
    outpute : document.querySelector('#name-output')
}

refs.input.addEventListener('input',onInput)

function onInput(e) {
    if (!refs.input.value ){
        refs.outpute.textContent = 'Anonymous'
    }else{
       refs.outpute.textContent = refs.input.value 
    }
    

}

