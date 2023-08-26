import { checkIfAnyToDoLists } from ".";

let deleteToDo = (ToDoId) => {
    let allObj = JSON.parse(localStorage.getItem('toDoList'));
    delete allObj[ToDoId];
    localStorage.setItem('toDoList', JSON.stringify(allObj));
    checkIfAnyToDoLists();
};

let addDeleteToDoFunctionality = () => {
    let allToDoDeleteBtn = document.querySelectorAll('.deleteicon');
    allToDoDeleteBtn.forEach((btn) => {
        btn.addEventListener('click', function() {
            deleteToDo(btn.id);
        })
    })

};

export {addDeleteToDoFunctionality}