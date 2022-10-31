const refs = {
    fontSizeControl:  document.querySelector('#font-size-control'),
    text:  document.querySelector('#text'),
}
refs.fontSizeControl.addEventListener('imput',onChangeFontSize)

function onChangeFontSize (e){
   
 refs.text.style.fontSize = `${refs.fontSizeControl.value}px`
}