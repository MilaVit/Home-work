var countNextElem = 0;
function selectTheNextElement() {
let nextElement = document.getElementById('listText').childNodes;
for(let i =0; i < nextElement.length;i++){
    nextElement[i].style.color = 'black';
}
countNextElem = (countNextElem + 1) % nextElement.length;
nextElement[countNextElem].style.color = 'blue';
}

