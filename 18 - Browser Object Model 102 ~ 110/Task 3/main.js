let makeDiv = document.createElement("div");
makeDiv.textContent = 10;

document.body.prepend(makeDiv);

let counter = setInterval(function () {
  makeDiv.textContent -= 1;
  if (makeDiv.textContent === "0") {
    clearInterval(counter);
  }
}, 1000);