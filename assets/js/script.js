var greetingEl = document.querySelector("#hello")
var buttonEl = document.querySelector("#btn")

var sayHello = function() {
    if (greetingEl.textContent === "") {
        greetingEl.textContent = "Hello World!"
    }
    else {
        greetingEl.textContent = ""
    }
}

buttonEl.addEventListener("click", sayHello)