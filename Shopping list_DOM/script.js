var input = document.getElementById("userInput");
var button = document.getElementById("enter");
var ul = document.querySelector("ul");

function InputLenght() {
    return input.value.length;
}

function createItem() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = ("");

    var check = document.createElement("input");
    check.setAttribute("type", "checkbox");
    li.appendChild(check);
    check.onchange = toggleItem;

    var btn = document.createElement("Button");
    btn.appendChild(document.createTextNode("Delete"));
    li.appendChild(btn);
    btn.onclick = removeParent;
}

function addListAfterClick() {
    if (InputLenght() > 0) {
        createItem();
    }
}

function addListAfterKeypress(event) {
    if (InputLenght() > 0 && event.keyCode === 13) {
        createItem();
    }
}

function toggleItem(event) {
    var target = event.target.parentNode;
    target.classList.toggle("done");
}

function removeParent(evt) {
    evt.target.parentNode.remove();
}

button.addEventListener("click", addListAfterClick)
input.addEventListener("keypress", addListAfterKeypress)