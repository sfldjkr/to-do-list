let showDetails = (e) => {
    let index = e.target.id;
    let favDialog = document.querySelector('#favdialog');
    let divForDetails = document.querySelector('.detailsDiv');
    let AllCards = JSON.parse(localStorage.getItem('toDoList'));
    let currentCard = AllCards[index];
    let completeStatus;
    if (currentCard.completed) {
      completeStatus = `Completed`;
    }
    else {
      completeStatus = `Left To Be Done`;
    }
    divForDetails.innerHTML = `
    <h2>${currentCard.taskname}</h2>
    <br>
    <h5>Project: ${currentCard.project}</h5>
    <h5>Due Date: ${currentCard.dueDate}</h5>
    <h5>Status: ${completeStatus}</h5>
    <h5>Notes: ${currentCard.notes}</h5>
    <h5>Prority: ${currentCard.priority}</h5>
    `;
    favDialog.showModal();
  }

  export {showDetails}