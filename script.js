// Declare constants for DOM elements
const inputBox = document.querySelector('#input-box');
const listContainer = document.querySelector('.list-container');
const btn = document.querySelector('button');
const completed = document.querySelector('.completed');
const completedPara = document.querySelector('.completed-para');


function addTask() {

    if (inputBox.value === '') {
        alert('Please enter a task before adding.');
        return;
    }


    const taskItem = document.createElement('li');
    taskItem.textContent = inputBox.value;
    const closeButton = document.createElement('span');
    closeButton.textContent = '\u00d7';
    taskItem.appendChild(closeButton);
    listContainer.prepend(taskItem);

    completedPara.classList.add('active');

    inputBox.value = '';
    inputBox.focus();
}


inputBox.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});

btn.addEventListener('click', addTask);


listContainer.addEventListener('click', (e) => {
    const target = e.target
    if (target.tagName === 'LI') {
        target.classList.toggle('checked');
        completed.appendChild(target);
    }

    else if (target.tagName === 'SPAN') {
        target.parentElement.remove();
    }
});


completed.addEventListener('click', (e) => {

    if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();

        if (completed.querySelectorAll('li').length === 0) {
            completedPara.classList.remove('active');
        }
    }
});

