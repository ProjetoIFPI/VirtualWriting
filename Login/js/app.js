var btnEntrar = document.querySelector("#entrar");
var btnInscrever = document.querySelector("#inscrever");

var body = document.querySelector("body");

btnEntrar.addEventListener("click", function() {
    body.className = "entrar-js";
});

btnInscrever.addEventListener("click", function() {
    body.className = "inscrever-js";
});

var loginForm = document.querySelector("#login-form");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    window.location.href = "home.html";
});
