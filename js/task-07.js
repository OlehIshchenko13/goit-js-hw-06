const refs = {
    fontSizeControl:  document.querySelector('#font-size-control'),
    text:  document.querySelector('#text'),
}
refs.fontSizeControl.addEventListener('input',onChangeFontSize)

function onChangeFontSize (e){
   
 refs.text.style.fontSize = `${refs.fontSizeControl.value}px`
}