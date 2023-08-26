import { showAllToDo } from "./showDoList"
import { addDeleteToDoFunctionality } from "./deleteToDoFunc";
import { addCheckBoxFunctionality } from "./addCheckFunc";

let showTodayToDo = () => {
    let today = new Date();
    let thisDay = today.getDate();

    let thisMonth = today.getMonth();
    let thisYear = today.getFullYear();
    let sortedObj = {};
    let allObj = JSON.parse(localStorage.getItem('toDoList'));
    let keys = Object.keys(allObj);
    for (let index of keys) {
        let currentObj = allObj[index];
        let indexDate = new Date(currentObj.dueDate);
        let indexDay = indexDate.getDate();
        let indexMonth = indexDate.getMonth();
        let indexYear =  indexDate.getFullYear();
        if (indexDay === thisDay && indexMonth === thisMonth && indexYear === thisYear) {
            sortedObj[index] = currentObj;

        };
        showAllToDo(sortedObj);
        addDeleteToDoFunctionality();
        addCheckBoxFunctionality();
    }

};

export {showTodayToDo}