import { showAllNotes } from "./showNotes";

class NoteConstructor {
    constructor(task) {
      this.task = task;
    }
}

let addNewNote = (value) => {
    let allNotesObj = JSON.parse(localStorage.getItem('notes'));
    let keys;
    if (allNotesObj === null ) {
        allNotesObj = {};
        keys = [];
    }
    else {
        keys = Object.keys(allNotesObj);
    };
    let newIndex;
    if (keys.length === 0) {
        newIndex = 1;
    }
    else {
        newIndex = Number(keys[keys.length - 1]) + 1;
    };
    allNotesObj[newIndex] = new NoteConstructor(value);
    localStorage.setItem('notes', JSON.stringify(allNotesObj));
    showAllNotes();
};

let addNotesFunctionality = () => {

    let noteForm = document.querySelector('#notedialog');
    let confirmBtn = document.querySelector('.noteSaveBtn');
    let noteInput = document.querySelector('.noteInput');


    noteForm.addEventListener("close", (e) => {
    if (noteForm.returnValue !== 'cancel') {
        addNewNote(noteInput.value);
    };
    });

    confirmBtn.addEventListener("click", (event) => {
    event.preventDefault(); 
    noteForm.close(noteInput.value); 
    });

};

export {addNotesFunctionality, addNewNote}