let selector = document.querySelector("select");
let text = document.querySelector('[type="text"]');
let email = document.querySelector('[type="email"]');
let password = document.querySelector('[type="password"]');
let submit = document.querySelector('[type="submit"]')

// ! Function to save the selected option to localStorage and set the selected attribute
function setSelectedAttribute(selectElement, key) {
  let selectedValue = selectElement.value;
  let options = selectElement.options;

  window.sessionStorage.setItem(key, selectedValue);

  for (let i = 0; i < options.length; i++) {
    options[i].removeAttribute("selected");
    if (options[i].value === selectedValue) {
      options[i].setAttribute("selected", "selected");
    }
  }
}

// ! Event listeners for when the user changes the selection
selector.onchange = function () {
  setSelectedAttribute(selector, "select");
}

text.onchange = function () {
  window.sessionStorage.setItem("text", text.value);
}

email.onchange = function () {
  window.sessionStorage.setItem("email", email.value);
}

password.onchange = function () {
  window.sessionStorage.setItem("password", password.value);
}

// ! Function to restore the saved selections from localStorage
function restoreSelections () {
  let savedselector = window.sessionStorage.getItem("select");

  if (savedselector) {
    selector.value = savedselector;
    setSelectedAttribute(selector, "select");
  }

  restoreData();
}

function restoreData () {
  text.value = window.sessionStorage.getItem("text");
  email.value = window.sessionStorage.getItem("email");
  password.value = window.sessionStorage.getItem("password");
}

restoreSelections();

submit.onclick = function (e) {
  if (selector.value && text.value && email.value && password.value) {
    window.sessionStorage.clear();
  } else {
    e.preventDefault();
  }
};