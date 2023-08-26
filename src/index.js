import './style.css'
import { compareAsc, format } from 'date-fns'
import { showAllToDo, DoListConstructor, addDetailFunc } from './showDoList'
import { storageAvailable } from './storageAvailable'
import {showDetails} from './showDetails.js'
import { showAllNotes, addNotesFunc } from './showNotes'
import { addNotesFunctionality, addNewNote, addRemoveNoteFunctionality } from './addnotes'
import {addPlusToDoFunc, addSaveToDoFunc, getToDoAnswers, saveNewToDo} from './plusToDo'
import {fillProjectBtnNames} from './fillProjectBtn.js'
import { addDeleteToDoFunctionality } from './deleteToDoFunc'
import { addEditToDoFunc } from './editToDo'
import {showTodayToDo} from './showToday'
import {showMonthToDo} from './showMonth'
import {showWeekToDo} from './showWeek'
import { showProjectBtnFunc } from './ProjectBtnShow'
import { addCheckBoxFunctionality } from './addCheckFunc'




let checkIfAnyToDoLists = () => {
  if (storageAvailable('localStorage') && localStorage.getItem('toDoList') !== null ) {
    let storageItemObject = JSON.parse(localStorage.getItem('toDoList'));
    showAllToDo(storageItemObject);
    fillProjectBtnNames();
    showProjectBtnFunc();
    addDeleteToDoFunctionality();
    addCheckBoxFunctionality();

    let homeBtn = document.querySelector('#homeBtn');
    homeBtn.addEventListener('click', function() {
      checkIfAnyToDoLists();
    });
      // adding timeAlgo functions
    let todayBtn = document.querySelector('#todayBtn');
    let monthBtn = document.querySelector('#monthBtn');
    let weekBtn = document.querySelector('#weekBtn');

    todayBtn.addEventListener('click', showTodayToDo);
    monthBtn.addEventListener('click', showMonthToDo);
    weekBtn.addEventListener('click', showWeekToDo);

  }
  else {
    console.log('no local storage to display');
  };

};

addPlusToDoFunc();

checkIfAnyToDoLists();

let shownoteBtn = document.querySelector('.notesBtn');
shownoteBtn.addEventListener('click', showAllNotes);

addNotesFunctionality();

addPlusToDoFunc();







export {checkIfAnyToDoLists}













