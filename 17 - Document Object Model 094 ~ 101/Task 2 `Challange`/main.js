let addInput = document.querySelector('.classes-to-add');
let removeInput = document.querySelector('.classes-to-remove');
let currentClasses = document.querySelector('.classes-list div');

addInput.onblur = function () {
  let addInputVal = addInput.value.trim().split(" ");
  if (addInput.value.trim() === "") {
    addInput.focus();
  } else {
    currentClasses.innerHTML = "";
    for (let i = 0; i < addInputVal.length; i++) {
      currentClasses.classList.add(addInputVal[i].toLowerCase());
      addInput.value = "";
    }

    updateClassList();
  }
};

removeInput.onblur = function () {
  let removeInputVal = removeInput.value.trim().split(" ");
  if (removeInput.value.trim() === "") {
    removeInput.focus();
  } else {
    currentClasses.innerHTML = "";
    for (let i = 0; i < removeInputVal.length; i++) {
      currentClasses.classList.remove(removeInputVal[i].toLowerCase());
      removeInput.value = "";
    }
    updateClassList();
  }
};

function updateClassList() {
  let classArray = Array.from(currentClasses.classList).sort(); // Sort classes alphabetically

  if (classArray.length === 0) {
    let spantext = document.createTextNode("No Classes To Show");
    currentClasses.appendChild(spantext);
  } else {
    for (let j = 0; j < classArray.length; j++) {
      let span = document.createElement("span");
      let spantext = document.createTextNode(classArray[j]);
      span.appendChild(spantext);
      currentClasses.appendChild(span);
      console.log(classArray[j]);
    }
  }
};