import deleteIcon from './delete-empty-outline.svg'
import editicon from './square-edit-outline.svg'
import { showDetails } from './showDetails';
import { addEditToDoFunc } from './editToDo';

class DoListConstructor {
    constructor(project, taskname,notes, dueDate, completed, priority) {
      this.project = project;
      this.taskname = taskname;
      this.dueDate = dueDate;
      this.completed = completed;
      this.notes = notes;
      this.priority = priority;
  
    }
}

let addDetailFunc = () => {
  let detailButtons = document.querySelectorAll('.detailBtn');
  detailButtons.forEach((button) => {
  button.addEventListener('click', showDetails);
})
};

let showAllToDo = (storageItemObject) => {
    let allLIstDivs = document.querySelector('.alllists');
    let notesList = document.querySelector('.allNotes');
    notesList.innerHTML = ``;
    allLIstDivs.innerHTML = ``;
    let index = Object.keys(storageItemObject);
    if (storageItemObject !== null) {
      for (let i of index) {
        let currentItem = storageItemObject[i];
        let cardDiv = document.createElement('div');
        cardDiv.classList.add('carddiv');
        // let projectName = document.createElement('h1');
        // projectName.innerText = currentItem.project;
        let taskName= document.createElement('h4');
        taskName.innerText =currentItem.taskname;
        // let notes = document.createElement('h4');
        // notes.innerText = currentItem.notes;
        let dueDate = document.createElement('h6');
        dueDate.innerHTML = currentItem.dueDate;
        let detailButton = document.createElement('button');
        detailButton.classList.add('detailBtn');
        detailButton.id = i;
        detailButton.innerText = `Details`;
        let checkBox = document.createElement('INPUT');
        checkBox.setAttribute('type', 'checkbox');
        checkBox.classList.add('checkBox');
        checkBox.id = i;
        let hasCompleted = currentItem.completed;
        checkBox.checked = hasCompleted;
    
        let deleteicon = new Image();
        deleteicon.src = deleteIcon;
        deleteicon.classList.add('deleteicon');
        deleteicon.id = i;
    
        let editIcon = new Image();
        editIcon.src = editicon;
        editIcon.classList.add('editicon');
        editIcon.id = i;
    
        cardDiv.appendChild(checkBox);
        cardDiv.appendChild(taskName);
        cardDiv.appendChild(detailButton);
        cardDiv.appendChild(dueDate);
        cardDiv.appendChild(deleteicon);
        cardDiv.append(editIcon);
  
        if (currentItem.priority === 'high') {
          cardDiv.classList.add('highpriority');
        }
        else if (currentItem.priority === 'medium') {
          cardDiv.classList.add('mediumpriority');
        }
        else if (currentItem.priority === 'low') {
          cardDiv.classList.add('lowpriority');
        };
    
        allLIstDivs.appendChild(cardDiv);
    
      };
      // add details functionality
      addDetailFunc();
      addEditToDoFunc();
    };

};

export {showAllToDo, DoListConstructor, addDetailFunc}