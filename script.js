// Get DOM elements
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create list item
    const li = document.createElement('li');
    li.style.opacity = 0; // start fade-in

    // Task text span (click to mark complete)
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    taskSpan.style.cursor = 'pointer';

    // Toggle completed on click
    taskSpan.addEventListener('click', function () {
        const completed = taskSpan.style.textDecoration === 'line-through';
        taskSpan.style.textDecoration = completed ? 'none' : 'line-through';
        taskSpan.style.color = completed ? '#1a1a1a' : '#888888';
    });

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "✕";
    deleteBtn.style.background = 'transparent';
    deleteBtn.style.border = 'none';
    deleteBtn.style.color = '#ff4d4d';
    deleteBtn.style.fontSize = '16px';
    deleteBtn.style.cursor = 'pointer';

    // Delete task with fade-out
    deleteBtn.addEventListener('click', function () {
        li.style.transition = 'opacity 0.3s';
        li.style.opacity = 0;
        setTimeout(() => taskList.removeChild(li), 300);
    });

    // Append span and delete button to list item
    li.appendChild(taskSpan);
    li.appendChild(deleteBtn);

    // Add li to task list
    taskList.appendChild(li);

    // Animate fade-in
    setTimeout(() => {
        li.style.transition = 'opacity 0.3s';
        li.style.opacity = 1;
    }, 10);

    // Clear input field
    taskInput.value = "";
}

// Event listeners
addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});