// - Дописать реализацию приложения TodoList: добавить кнопку, которая перечёркивает дело
//(делает его сделанным);

// (Advanced ***)
// - Дописать стилистику приложения по своему вкусу;

const task = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskListOl = document.getElementById('taskList');

addTaskButton.addEventListener('click', addTask);

let made = 0;

function addTask() {
  const taskName = task.value.trim();
  if (taskName) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = `${taskName}`;
    li.appendChild(span);

    const buttonDone = document.createElement('button');
    buttonDone.textContent = 'Done';
    buttonDone.classList.add('btn-done');
    buttonDone.addEventListener('click', () => {
      let x = made;
      if (made === 0) {
        li.classList.add('made');
        buttonDone.textContent = 'Make';
        made = 1;
      } else if (made === 1) {
        li.classList.remove('made');
        buttonDone.textContent = 'Done';
        made = 0;
      }
    });
    li.appendChild(buttonDone);

    taskListOl.append(li);
  }
  task.value = '';
}
