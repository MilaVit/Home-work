function addTheFirstItem(form) {
	const firstList = document.createElement('li');
	firstList.innerHTML = form.input.value;
	firstList.style.color = 'red';
	listText.prepend(firstList);
}