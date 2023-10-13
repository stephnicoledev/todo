const todoList = document.getElementById('todos');
let todos = [];
let pageTitle = '';

// init() will set up the page title and tasks
function init() {
    pageTitle = 'My Morning Routine';
    todos = [
      { id: 1, task: 'Wake up', completed: false },
      { id: 2, task: 'Brush Teeth', completed: false },
      { id: 3, task: 'Shower', completed: false },
      { id: 4, task: 'Get Dressed', completed: false },
      { id: 5, task: 'Drive to work', completed: false },
      { id: 6, task: 'Work', completed: false },
      { id: 7, task: 'Drive home from work', completed: false },
      { id: 8, task: 'Dinner', completed: false },
      { id: 9, task: 'Brush Teeth', completed: false },
      { id: 10, task: 'Go to bed', completed: false }
    ]
  }


  // addPageTitle() will add the page title to the DOM
  function addPageTitle() {
    const heading = document.createElement('h1')
    heading.innerText = pageTitle;
    todoList.appendChild(heading);
  }

  // addTodos() will add the task to the DOM
  function addTodos() {
    const ul = document.createElement('ul');

    todos.forEach(todo => {
      const li = document.createElement('li');
      li.innerText = todo.task;
      const checkCircle = document.createElement('i');
      checkCircle.setAttribute('class', 'far fa-check-circle');
      li.appendChild(checkCircle);
      ul.appendChild(li);
    });
    todoList.appendChild(ul);
  }


  document.addEventListener("DOMContentLoaded", () => {
    init();
    addPageTitle();
    addTodos();
  });

// Marking tasks incomplete / complete
const tasks = document.querySelectorAll('li');

tasks.forEach(task => {
  task.addEventListener('click', () => {
    // Marking tasks complete
    if (!task.classList.contains('completed')) {
      task.classList.add('completed');
      task.querySelector('i').classList.add('completed');
    }
  });
  
  task.addEventListener('click', () => {
    // Marketing tasks incomplete
    if (task.classList.contains('completed')) {
      task.classList.remove('completed');
      task.querySelector('i').classList.remove('completed');
    }
  });
});