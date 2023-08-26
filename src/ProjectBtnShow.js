let showProjectBtnFunc = () => {
    let showProjectBtn = document.querySelector('#showProjectBtn');
    let allProjectDivs = document.querySelector('#projectBtn');
    showProjectBtn.addEventListener('click', function() {
        if (allProjectDivs.style.display === 'block') {
            allProjectDivs.style.display = 'none';
        }
        else {
            allProjectDivs.style.display = 'block';
        }
    })
};

export {showProjectBtnFunc}