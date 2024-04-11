const inputBox = document.querySelector('#input-box')
const listContainer = document.querySelector('.list-container')
const btn = document.querySelector('button')
const completed = document.querySelector('.completed')


function addTask() {
    if (inputBox.value == '') alert('Add your task')
    else {
        let li = document.createElement('li')
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span')
        span.innerHTML = '\u00d7'
        li.appendChild(span)
    }
    inputBox.value = '';
    inputBox.focus()
}


inputBox.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
        addTask()
    }
})


btn.addEventListener('click', addTask)

listContainer.addEventListener('click',function(e){
    if(e.target.tagName == 'LI'){
        e.target.classList.toggle('checked')
        completed.appendChild(e.target)

    }
    else if(e.target.tagName == 'SPAN'){
        e.target.parentElement.remove()
    }
    
})

completed.addEventListener('click', function(e) {
    if (e.target.tagName === 'SPAN') {
      e.target.parentElement.remove();
    }
});