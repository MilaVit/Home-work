window.onload = function () {
    let menu = document.getElementById('main');
    let input = document.querySelectorAll('.del');
    let elem = document.querySelectorAll('.card');
    menu.addEventListener('click', removeImg);

    function removeImg (e) {
    const currentItem = e.target; 
    for (let i = 0; i < elem.length; i++) {
    if(currentItem.tagName == 'INPUT') {
    currentItem.parentNode.remove(); 
    }
    }
    }
};