document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const newTaskInput = document.getElementById('new-task');
    const pendingTasksList = document.getElementById('pending-tasks');
    const completedTasksList = document.getElementById('completed-tasks');

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskText = newTaskInput.value.trim();
        if (taskText) {
            addTask(taskText, false);
            newTaskInput.value = '';
        }
    });

    function addTask(text, completed) {
        const li = document.createElement('li');
        li.textContent = text;

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.classList.add('complete-btn');
        completeButton.addEventListener('click', () => {
            li.classList.toggle('completed');
            if (li.classList.contains('completed')) {
                completedTasksList.appendChild(li);
            } else {
                pendingTasksList.appendChild(li);
            }
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');
        deleteButton.addEventListener('click', () => {
            li.remove();
        });

        li.appendChild(completeButton);
        li.appendChild(deleteButton);

        if (completed) {
            li.classList.add('completed');
            completedTasksList.appendChild(li);
        } else {
            pendingTasksList.appendChild(li);
        }
    }
});