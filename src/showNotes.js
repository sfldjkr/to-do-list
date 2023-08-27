import plusSign from './pluss.svg'


let addNotesFunc = () => {
    let addNoteBtn = document.querySelector('.addNewNotesBtn');
    let noteForm = document.querySelector('#notedialog');
    let noteInput = document.querySelector('.noteInput');
    addNoteBtn.addEventListener('click', function() {
        noteInput.value = ``;
        noteForm.showModal();
    });

}

let addRemoveNoteFunctionality = () => {

    let removeNote = (e) => {
        let toDeleteIndex = e.target.id;
        let allNOtes = JSON.parse(localStorage.getItem('notes'));
        delete allNOtes[toDeleteIndex];
        localStorage.setItem('notes', JSON.stringify(allNOtes));
        showAllNotes();
        
    };

    let AllDeleteNoteBtn = document.querySelectorAll('.deleteNote');
    AllDeleteNoteBtn.forEach((button) => {
        button.addEventListener("click", removeNote)
    })
};


let showAllNotes = () => {
    let allNOtesObj = JSON.parse(localStorage.getItem('notes'));
    let allListsDiv = document.querySelector('.alllists');
    // allListsDiv.style.display = 'none';
    // complete this
    let allNotesContainer = document.querySelector('.allNotes');
    allListsDiv.innerHTML = ``;
    allNotesContainer.innerHTML = ``;
  
    let addNotesDiv = document.createElement('div');
    addNotesDiv.id = 'addNotesDiv';
    let addNewNotesBtn = document.createElement('div');
    addNewNotesBtn.classList.add('addNewNotesBtn');
    addNewNotesBtn.id = "addNewNotesBtn";
    addNewNotesBtn.innerHTML = `<img src="${plusSign}">`
    addNotesDiv.appendChild(addNewNotesBtn);
    allNotesContainer.appendChild(addNotesDiv);
    if (allNOtesObj === null ) {
        addNotesFunc();
    }
    else {
        let keys = Object.keys(allNOtesObj);
        for (let index of keys) {
        let noteDiv = document.createElement('div');
        noteDiv.classList.add('notecard');
        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add('deleteNote');
        deleteBtn.innerHTML = `X`;
        deleteBtn.id = index;
        let para = document.createElement('p');
        para.innerText = `${allNOtesObj[index].task}`;
        noteDiv.appendChild(deleteBtn);
        noteDiv.append(para);
        allNotesContainer.appendChild(noteDiv);
        };
        addNotesFunc();
        addRemoveNoteFunctionality();
    };
    

};


export {showAllNotes, addNotesFunc, addRemoveNoteFunctionality}
