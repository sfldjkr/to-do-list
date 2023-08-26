let checkTheDo = (checkBoxId) => {
    console.log(checkBoxId);
    let objs = JSON.parse(localStorage.getItem('toDoList'));
    objs[checkBoxId].completed = true;
    console.log(objs[checkBoxId]);
    localStorage.setItem('toDoList', JSON.stringify(objs));

};

let addCheckBoxFunctionality = () => {
  let allCheckBox = document.querySelectorAll('.checkBox');
  allCheckBox.forEach((checkBox) => {
    checkBox.addEventListener('click', function() {
        checkTheDo(checkBox.id);
    })
  })  
};
export {addCheckBoxFunctionality}