function deletedElement() {
	var deleted = document.getElementById("listText");
	var oneChild = deleted.lastChild;
	deleted.removeChild(oneChild);
}