// Declare constants for DOM elements
const inputBox = document.querySelector('#input-box');
const listContainer = document.querySelector('.list-container');
const btn = document.querySelector('button');
const completed = document.querySelector('.completed');
const completedPara = document.querySelector('.completed-para');
const clearBtn = document.querySelector('.clear-btn');


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
    saveData();

    inputBox.value = '';
    inputBox.focus();
    // clearBtn.classList.add('active');
    // console.log('hrlo');
}


inputBox.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addTask();

    }
});

btn.addEventListener('click', addTask);

// function clearAll() {
//     listContainer.innerHTML = '';
//     completed.innerHTML = '';
//     completedPara.classList.remove('active');
//     saveData();
// }

// clearBtn.addEventListener('click', clearAll);



listContainer.addEventListener('click', (e) => {
    const target = e.target
    if (target.tagName === 'LI') {
        target.classList.toggle('checked');
        completed.appendChild(target);
        saveData();
    }

    else if (target.tagName === 'SPAN') {
        target.parentElement.remove();
        saveData();

    }

});


completed.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        listContainer.appendChild(e.target);
        saveData();
    }

    if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();

        if (completed.querySelectorAll('li').length === 0) {
            completedPara.classList.remove('active');
        }
        saveData();
    }
});

function saveData() {
    localStorage.setItem('listContainer', listContainer.innerHTML);
    localStorage.setItem('completed', completed.innerHTML);

}

function getData() {
    listContainer.innerHTML = localStorage.getItem('listContainer');
    completed.innerHTML = localStorage.getItem('completed');
    if (completed.querySelectorAll('li').length > 0 || listContainer.querySelectorAll('li').length > 0) {
        completedPara.classList.add('active');
    }
}
getData();