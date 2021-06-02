function addTheLastItem(form) {
        var newItem = document.createElement('li');
        newItem.innerHTML = form.input.value;
        newItem.style.color = 'red';
        listText.append(newItem)
}