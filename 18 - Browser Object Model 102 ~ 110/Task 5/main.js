let makeDiv = document.createElement("div");
makeDiv.textContent = 10;

document.body.prepend(makeDiv);

let counter = setInterval(function () {
  makeDiv.textContent -= 1;
  if (makeDiv.textContent === "5") {
    window.open("https://elzero.org/", "_blank", "width=400, height=400, top=200, left=200");
  }

  if (makeDiv.textContent === "0") {
    clearInterval(counter);
  }
}, 1000);