var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradinet");
var btn = document.querySelector(".random");

function setColor() {
    body.style.background = "linear-gradient(to right," +
        color1.value +
        "," +
        color2.value +
        ")";
    css.textContent = body.style.background + ";";
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function randombg() {
    body.style.background = "linear-gradient(to right," +
        getRandomColor() +
        "," +
        getRandomColor() +
        ")";
    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setColor)
color2.addEventListener("input", setColor)

btn.addEventListener("click", randombg);