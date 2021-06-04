var countPreviousElem = 0;
function selectThePreviousItem() {
   let prevElem = document.getElementById('listText').childNodes;
   for(let i = 0; i < prevElem.length;i++){
       prevElem[i].style.color = '';
   }
    countPreviousElem = (countPreviousElem + prevElem.length - 1) % prevElem.length;
    prevElem[countPreviousElem].style.color = 'blue';
}
