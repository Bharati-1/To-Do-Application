let todoList = [];

//display items from local storage when window is loaded or refreshed

window.onload = function () {
  let storedList = localStorage.getItem('todoList');
  if (storedList) {
    todoList = JSON.parse(storedList);
    displayItems();
  }

}


//to fetch string from input and storing to local storage
function toAdd() {
  let inputElement = document.querySelector('#todo-input');
  let dateElement = document.querySelector('#todo-date');

  let todoItem = inputElement.value;
  let todoDate = dateElement.value;

  todoList.push({ item: todoItem, dueDate: todoDate });
  localStorage.setItem('todoList', JSON.stringify(todoList));

  inputElement.value = '';
  dateElement.value = '';

  displayItems();


}

//to display items from localstorage

function displayItems() {
  let mainContainerElement = document.querySelector('.main-container');

  let newHtml = '';
  for (let i = 0; i < todoList.length; i++) {
    let item = todoList[i].item;
    let dueDate = todoList[i].dueDate;
    newHtml += `
  <span>${item}</span><span>${dueDate}</span>
  <button id='delete-btn' onclick="todoList.splice(${i},1);
  displayItems();
  ">DELETE</button>
  
  `;
  }

  mainContainerElement.innerHTML = newHtml;
}