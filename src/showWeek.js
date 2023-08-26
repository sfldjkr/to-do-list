import { showAllToDo } from "./showDoList"
import { addDeleteToDoFunctionality } from "./deleteToDoFunc";
import { addCheckBoxFunctionality } from "./addCheckFunc";

let showWeekToDo = () => {
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
        let diff;
        if (indexMonth === thisMonth && indexYear === thisYear) {
            let numIndexDay = Number(indexDay);
            let numThisDay = Number(thisDay);
            if (numIndexDay > numThisDay) {
                diff = numIndexDay - numThisDay;

            }
            else {
                diff = numThisDay - numIndexDay; 
            };
            if (diff < 7) {

                sortedObj[index] = currentObj;
            };
        };
        showAllToDo(sortedObj);
        addDeleteToDoFunctionality();
        addCheckBoxFunctionality();
    }

};
export {showWeekToDo}