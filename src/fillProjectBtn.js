import { showAllToDo } from "./showDoList";
import { addDeleteToDoFunctionality } from "./deleteToDoFunc";
import { addEditToDoFunc } from "./editToDo";
import { addCheckBoxFunctionality } from "./addCheckFunc";

let addSearchFunc = (btn) => {
  btn.addEventListener('click', function() {
    let currentProjectName = btn.innerText;
    let storageItemObject = JSON.parse(localStorage.getItem('toDoList'));
    let allKeys = Object.keys(storageItemObject);
    let filteredObj = {};
    for (let key of allKeys) {
      if (storageItemObject[key].project === currentProjectName) {
        filteredObj[key] = storageItemObject[key];
      };
    };
    showAllToDo(filteredObj);
    addDeleteToDoFunctionality();
    addCheckBoxFunctionality();
    // addEditToDoFunc();
  });

}


let fillProjectBtnNames = () => {
    let allProjectNames = [];
    let storageItemObject = JSON.parse(localStorage.getItem('toDoList'));
    let index = Object.keys(storageItemObject);
    for (let i of index) {
      allProjectNames.push(storageItemObject[i].project);
    };
    allProjectNames = [...new Set(allProjectNames)];
  
    // adding these butttons to in DOM
  
    let projectBtn = document.querySelector('#projectBtn');
    projectBtn.innerHTML = ``;
    allProjectNames.forEach((button) => {
      let projectBtnDiv = document.createElement('div');
      projectBtnDiv.classList.add('projectBtnDiv')
      let newBtn = document.createElement('button');
      newBtn.innerText = button;
      addSearchFunc(newBtn);
      projectBtnDiv.appendChild(newBtn);
      projectBtn.appendChild(projectBtnDiv);
    })
  };

export {fillProjectBtnNames}