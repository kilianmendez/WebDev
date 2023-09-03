const container = document.querySelector('#container');

let pElement = document.createElement("p");
pElement.textContent = "Hey I'm red!";
pElement.style.color = "red";

container.appendChild(pElement);

let h3Element = document.createElement("h3");
h3Element.textContent = "I’m a blue h3!";
h3Element.style.color = "blue";

container.appendChild(h3Element);

let divElement = document.createElement("div");
divElement.setAttribute("style", "border : 5px solid black; background-color: pink");

container.appendChild(divElement);

let h1Element = document.createElement("h1");
h1Element.textContent = "I'm in a div";

divElement.appendChild(h1Element);

let pElement2 = document.createElement("p");
pElement2.textContent = "ME TOO!";

divElement.appendChild(pElement2);

/********/

const btn = document.querySelector('#btn');
btn.addEventListener('click', function (e) {
    console.log(e);
  });

window.addEventListener("keydown", function(e){
    console.log(e.keyCode)
})