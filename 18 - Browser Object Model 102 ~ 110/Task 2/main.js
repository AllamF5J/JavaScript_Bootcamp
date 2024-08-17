let popUp = function () {
  let myDiv = document.createElement("div");
  myDiv.classList = "popUp";

  let Heading = document.createElement("h2");
  Heading.textContent = "Welcome";
  myDiv.appendChild(Heading);

  myP = document.createElement("p");
  myP.textContent = "Welcome to Elzero Web School";
  myDiv.appendChild(myP);

  myButton = document.createElement("button");
  myButton.innerHTML = "x";

  myButton.addEventListener("click", function () {
    myDiv.remove();
  });

  myDiv.appendChild(myButton);

  document.body.prepend(myDiv);
};

setTimeout(popUp, 5000);