var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

console.log(outputDiv.innerHTML);

btnTranslate.addEventListener("click", function clickEventHandler() {
    outputDiv.innerText = "ajajajajajaj "+ txtInput.value;
})