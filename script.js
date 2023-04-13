const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

addTaskBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const taskText = taskInput.value;
  if (taskText === '') return;
  
  const task = document.createElement('li');
  task.innerHTML = `${taskText} <button class="delete-btn">Delete</button>`;
  taskList.appendChild(task);
  
  taskInput.value = '';
  
  const deleteBtns = document.querySelectorAll('.delete-btn');
  deleteBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.parentElement.remove();
    });
  });
});
