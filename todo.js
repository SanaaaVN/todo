function addTask() {
    const inputBox = document.getElementById('input-box');
    const taskText = inputBox.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('task-list');
        const li = document.createElement('li');
        li.innerHTML = `${taskText} <button onclick="removeTask(this)">Delete</button>`;
        taskList.appendChild(li);

        inputBox.value = ''; // Clear input field after adding task
    }
}

function removeTask(button) {
    const li = button.parentElement;
    li.remove();
}
