var countPreviousElem = 0;
function selectThePreviousItem() {
   var prevElem = document.getElementById('listText').childNodes;
   for(var i = 0; i < prevElem.length;i++){
       prevElem[i].style.color = '';
   }
    countPreviousElem = (countPreviousElem + prevElem.length - 1) % prevElem.length;
    prevElem[countPreviousElem].style.color = 'blue';
}
