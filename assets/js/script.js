var greetingEl = document.querySelector("#hello")
var buttonEl = document.querySelector("#btn")

var sayHello = function() {
    if (greetingEl.textContent === "Hello World!") {
        greetingEl.textContent = ""
    }
    else {
        greetingEl.textContent = "Hello World!"
    }
}

buttonEl.addEventListener("click", sayHello)