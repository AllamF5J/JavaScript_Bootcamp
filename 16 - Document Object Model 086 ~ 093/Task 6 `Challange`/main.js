document.addEventListener("DOMContentLoaded", function() {
  let numInput = document.querySelector("form input[name='elements']");
  let textInput = document.querySelector("form input[name='texts']");
  let selectInput = document.querySelector("form select[name='type']");
  let resultSection = document.querySelector("form div.results");

  document.forms[0].onsubmit = function (e) {
    e.preventDefault();

    let numValid = false, textValid = false, selectValid = false;

    if (numInput.value !== "") {
      numValid = true;
    }

    if (textInput.value !== "") {
      textValid = true;
    }

    if (selectInput.value !== "") {
      selectValid = true;
    }

    // Check if any of the inputs are invalid, prevent form submission
    if (!numValid || !textValid || !selectValid) {
      return; // Stops execution if validation fails
    }

    // Clear the result section before adding new elements
    resultSection.innerHTML = "";

    let div = document.createElement("div");
    let section = document.createElement("section");
    let divText = document.createTextNode(textInput.value);
    let sectionText = document.createTextNode(textInput.value);

    div.setAttribute("class", "box");
    div.setAttribute("title", "Element");
    section.setAttribute("class", "box");
    section.setAttribute("title", "Element");

    div.appendChild(divText);
    section.appendChild(sectionText);

    for (let i = 0; i < Number(numInput.value); i++) {
      if (selectInput.value == "Div") {
        div.setAttribute("id", `id-${i + 1}`);
        resultSection.appendChild(div.cloneNode(true));
      } else {
        section.setAttribute("id", `id-${i + 1}`);
        resultSection.appendChild(section.cloneNode(true));
      }
    }
  };
});