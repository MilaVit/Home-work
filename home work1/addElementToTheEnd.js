function addTheLastItem(form) {
	const newItem = document.createElement('li');
	newItem.innerHTML = form.input.value;
	newItem.style.color = 'red';
	listText.append(newItem)
}