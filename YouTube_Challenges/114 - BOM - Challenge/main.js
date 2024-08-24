let input = document.querySelector("input[type='text']");
let submit = document.querySelector("input[type='submit']");
let tasks = document.querySelector('.tasks');
let localArray = [];

tasks.addEventListener('click', deleteTask);
submit.addEventListener('click', addTask);

if (localStorage.tasks) {
  localArray = JSON.parse(localStorage.tasks);
  localArray.forEach(function (ele) {

    let task = document.createElement('div');
    task.classList.add("task");
    task.innerHTML = ele.title;

    let span = document.createElement('span');
    span.classList.add("span");
    span.innerHTML = `Delete`;
    
    task.id = ele.id;
    task.appendChild(span);
    tasks.appendChild(task);
  });
}

function addTask(event) {
  if (typeof input.value === 'string' && Number(input.value) === 0) {
    event.preventDefault();
  } else {
    let task = document.createElement('div');
    task.innerHTML = `${input.value}<button>Delete</button>`;
    tasks.appendChild(task);
    addLocalStorage();
    localStorage.setItem('tasks', JSON.stringify(localArray));
    location.reload();
  }
}

function addLocalStorage() {
  let obj = {
    id: Date.now(),
    title: input.value,
  };
  localArray.push(obj);
}

function deleteTask(event) {
  if (
    event.target.parentElement.className === 'tasks' ||
    event.target.className === 'tasks'
  ) {
    event.preventDefault();
  } else {
    event.target.parentElement.remove();
    deleteLocalStorage(event);
  }
}

function deleteLocalStorage(event) {
  let newLocalArray = [];
  for (let i = 0; i < localArray.length; i++) {
    if (event.target.parentElement.id !== localArray[i].id.toString()) {
      newLocalArray.push(localArray[i]);
    }
  }
  localArray = newLocalArray;
  localStorage.setItem('tasks', JSON.stringify(localArray));
}