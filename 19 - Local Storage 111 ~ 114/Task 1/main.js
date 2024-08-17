let fonts = document.querySelector("[name='fonts']");
let color = document.querySelector("[name='color']");
let size = document.querySelector("[name='size']");

// ! Function to save the selected option to localStorage and set the selected attribute
function setSelectedAttribute(selectElement, key) {
  let selectedValue = selectElement.value;
  window.localStorage.setItem(key, selectedValue);

  let options = selectElement.options;

  for (let i = 0; i < options.length; i++) {
    options[i].removeAttribute("selected");
    if (options[i].value === selectedValue) {
      options[i].setAttribute("selected", "selected");
    }
  }
}

// ! Event listeners for when the user changes the selection
fonts.onchange = function () {
  setSelectedAttribute(fonts, "fonts");
}

color.onchange = function () {
  setSelectedAttribute(color, "color");
}

size.onchange = function () {
  setSelectedAttribute(size, "size");
}

// ! Function to restore the saved selections from localStorage
function restoreSelections() {
  let savedFont = window.localStorage.getItem("fonts");
  let savedColor = window.localStorage.getItem("color");
  let savedSize = window.localStorage.getItem("size");

  if (savedFont) {
    fonts.value = savedFont;
    setSelectedAttribute(fonts, "fonts");
  }

  if (savedColor) {
    color.value = savedColor;
    setSelectedAttribute(color, "color");
  }

  if (savedSize) {
    size.value = savedSize;
    setSelectedAttribute(size, "size");
  }
}

restoreSelections();