import { checkIfAnyToDoLists } from "./index.js"
import { DoListConstructor } from "./showDoList";
let toChangeId;


let saveNewEditToDo = (project, task, note, date, hasCompleted, priority) => {
    let allToDoObj = JSON.parse(localStorage.getItem('toDoList'));
    console.log({project, task, note, date, hasCompleted, priority})
    console.log(toChangeId);
    allToDoObj[toChangeId] = new DoListConstructor(project, task, note, date, hasCompleted, priority);
    localStorage.setItem('toDoList', JSON.stringify(allToDoObj));
    checkIfAnyToDoLists();
};      

let getEditToDoAnswers = () => {
    let projectName = document.querySelector('.editprojectName');
    let taskName = document.querySelector('.edittaskName');
    let note = document.querySelector('.edittoDoNote');
    let date = document.querySelector('.editcalendarInput');
    let hasCompleted = document.querySelector('.hiddenHasCompleted');
    let priority = document.querySelector('input[name="priority"]:checked');
    if (projectName.value !== "" || taskName.value !== "" || note.value !== "" || date.value !== "") {
         saveNewEditToDo(projectName.value, taskName.value, note.value, date.value, hasCompleted.value, priority.value);
    };
    projectName.value = '';
    taskName.value = '';
    note.value = '';
    date.value = '';
    if (priority) {
         priority.checked = false;
    };
    hasCompleted.value = '';
};



let addEditSaveToDoFunc = () => {
    let toDoDialogForm = document.querySelector('#editToDoDialog');
    toDoDialogForm.addEventListener('close', function() {
        getEditToDoAnswers();
    });
};


let showEditForm = (currentId) => {
    let allObjs = JSON.parse(localStorage.getItem('toDoList'));
    let toEditObj = allObjs[currentId];

    let editForm = document.querySelector('#editToDoDialog');
    
    let projectName = document.querySelector('.editprojectName');
    let taskName = document.querySelector('.edittaskName');
    let note = document.querySelector('.edittoDoNote');
    let date = document.querySelector('.editcalendarInput');


    projectName.value = toEditObj.project;
    taskName.value = toEditObj.taskname;
    note.value = toEditObj.notes;
    let priority = toEditObj.priority;
    let choosedId = `#editmedium`;
    let toCheckPriority = document.querySelector(`#edit${priority}`);
    toCheckPriority.checked = true;
    date.value = toEditObj.dueDate;
    let hiddenHasDone = document.querySelector('.hiddenHasCompleted');
    hiddenHasDone.value = toEditObj.completed;
    editForm.showModal();
    addEditSaveToDoFunc();
}

let addEditToDoFunc = () => {
    let allEditBtns = document.querySelectorAll('.editicon');
    allEditBtns.forEach((btn) => {
        btn.addEventListener('click', function() {
            showEditForm(btn.id);
            toChangeId = btn.id
        });
    });
};

export {addEditToDoFunc, showEditForm, addEditSaveToDoFunc, getEditToDoAnswers, saveNewEditToDo}