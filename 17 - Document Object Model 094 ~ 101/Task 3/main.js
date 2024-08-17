let div = document.querySelector("div");

div.nextElementSibling.remove();

let divBefore = document.createElement("div").cloneNode(true);
divBefore.setAttribute("class", "start");
divBefore.setAttribute("title", "Start Element");
divBefore.setAttribute("data-value", "Start");
divBefore.innerHTML = "Start";
div.before(divBefore);

let divAfter = document.createElement("div").cloneNode(true);
divAfter.setAttribute("class", "end");
divAfter.setAttribute("title", "End Element");
divAfter.setAttribute("data-value", "End");
divAfter.innerHTML = "End";
div.after(divAfter);