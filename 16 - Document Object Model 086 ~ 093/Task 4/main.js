let divOne = document.querySelector(".one");
let divTwo = document.querySelector(".two");

divOne.setAttribute("title", divOne.className);
divTwo.setAttribute("title", divTwo.className);

let toggleText = divOne.textContent;

divOne.textContent = divTwo.textContent;
divTwo.textContent = `${toggleText} ${document.querySelectorAll("div").length}`;