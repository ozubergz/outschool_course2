//DOM Elements
const tasks = document.getElementById("tasks");
const add_btn = document.getElementById("add-button");
const inputTask = document.getElementById("input-text");

//This function adds item to the list
function addToDoItem() {
  let name = inputTask.value;

  if (name === "") {
    alert("Must type something!");
  } else {
    newToDoItem(name);
  }
}

//This function deletes item from the list
function deleteItem(i) {
  tasks.children[i].remove();
  evalTaskList();
}

//This function adds eventlistners in the tasks list
function evalTaskList() {
  let tasksChildren = tasks.children;
  let taskChild;

  //Iterate all tasks children
  for (let i = 0; i < tasksChildren.length; i++) {
    taskChild = tasksChildren[i];
    let button = taskChild.getElementsByTagName("button")[0];
    button.onclick = function() {
      deleteItem(i);
    };
  }
}

//This function creates new item list
function newToDoItem(name) {
  //ADD NEW LIST
  let newItem = document.createElement("li");
  newItem.innerText = name;

  //ADD NEW DELETE BUTTON
  let delete_btn = document.createElement("button");
  delete_btn.className = "delete-btn";
  delete_btn.innerText = "Delete";
  newItem.appendChild(delete_btn);

  inputTask.value = "";
  tasks.appendChild(newItem);
  evalTaskList();
}

add_btn.addEventListener("click", addToDoItem);
