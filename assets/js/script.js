var greetingEl = document.querySelector("#hello")
var buttonEl = document.querySelector("#btn")

var sayHello = function() {
    greetingEl.textContent = "Hello World!" 
}

buttonEl.addEventListener("click", sayHello)