let text = document.getElementById("text");

let container = document.querySelector(".container");

function getcolor() {
    let red = document.getElementById("red").value;
    let green = document.getElementById("green").value;
    let blue = document.getElementById("blue").value;

    text.innerHTML = `rgb(${red}, ${green}, ${blue};)`;

    container.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
};