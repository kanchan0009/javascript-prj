
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');
const historyList = document.getElementById('historyList');
let history = [];
function showSection(sectionId) {
document.querySelectorAll('.section').forEach(sec => {
sec.classList.remove('active');
});
document.getElementById(sectionId).classList.add('active');
}

function addTodo() {
const task = todoInput.value.trim();


if (!task) {
alert('Task cannot be empty');
return;
}


const li = document.createElement('li');


const taskText = document.createElement('span');
taskText.textContent = task;


const removeBtn = document.createElement('button');
removeBtn.textContent = 'Remove';


removeBtn.addEventListener('click', function () {
li.remove();
updateHistory(`Removed: ${task}`);
});


li.appendChild(taskText);
li.appendChild(removeBtn);
todoList.appendChild(li);


updateHistory(`Added: ${task}`);
todoInput.value = '';
}



function updateHistory(action) {
history.push(action);


const li = document.createElement('li');
li.textContent = action;
historyList.appendChild(li);
}