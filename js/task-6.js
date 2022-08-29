// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.


const inputRef = document.getElementById("validation-input");

const lengthTotal = inputRef.getAttribute("data-length");
const intLengthTotal = parseInt(lengthTotal, 10);

inputRef.oninput = function() {
  if (inputRef.value.length === intLengthTotal) {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
  }
  if (inputRef.value.length === 0) {
    inputRef.classList.remove("valid");
    inputRef.classList.remove("invalid");
  }
  if (inputRef.value.length !== intLengthTotal && inputRef.value.length !== 0) {
    inputRef.classList.add("invalid");
  }
};