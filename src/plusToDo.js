import { DoListConstructor, showAllToDo } from "./showDoList";
import {checkIfAnyToDoLists} from './index.js'

let saveNewToDo = (project, task, note, date, hasCompleted, priority) => {
    let allToDoObj = JSON.parse(localStorage.getItem('toDoList'));
    let newIndex;

    if (allToDoObj === null) {
        newIndex = 1;
        allToDoObj = {};
    }
    else {
        let allKeys = Object.keys(allToDoObj);
        if (allKeys.length === 0) {
            newIndex = 1;
        }
        else {
            let lastIndex = allKeys[allKeys.length - 1]; 
            newIndex = Number(lastIndex) + 1;
        };
    }      


    console.log(newIndex);
    // adding the new obj in the allToDo
    allToDoObj[newIndex] = new DoListConstructor(project, task, note, date, hasCompleted, priority);
    localStorage.setItem('toDoList', JSON.stringify(allToDoObj));
    checkIfAnyToDoLists();
};

let getToDoAnswers = () => {
    let projectName = document.querySelector('.projectName');
    let taskName = document.querySelector('.taskName');
    let note = document.querySelector('.toDoNote');
    let date = document.querySelector('.calendarInput');
    let hasCompleted = false;
    let priority = document.querySelector('input[name="priority"]:checked');
    if (projectName.value !== "" || taskName.value !== "" || note.value !== "" || date.value !== "") {
        saveNewToDo(projectName.value, taskName.value, note.value, date.value, hasCompleted, priority.value);
    };
    projectName.value = '';
    taskName.value = '';
    note.value = '';
    date.value = '';
    if (priority) {
        priority.checked = false;
    };
};



let addSaveToDoFunc = () => {
    let saveBtn = document.querySelector('.toDoSaveBtn');
    let toDoDialogForm = document.querySelector('#toDoDialog');
    toDoDialogForm.addEventListener('close', getToDoAnswers);
};


let addPlusToDoFunc = () => {
    

    let toDoDialog = document.querySelector('#toDoDialog');
    let showToDoForm = () => {
        toDoDialog.showModal();
    };

    // Add + toDO functionality
    let PlusSign = document.querySelector('.plusToDo');
    PlusSign.addEventListener('click', showToDoForm);
    addSaveToDoFunc();
};

export {addPlusToDoFunc, addSaveToDoFunc, getToDoAnswers, saveNewToDo}