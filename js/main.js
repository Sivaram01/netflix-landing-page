const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

//tabs are listening..
tabItems.forEach((item) => item.addEventListener('click', selectItems));

function selectItems(e) {
	removeBorder();
	removeShow();
	this.classList.add('tab-border');
	//Grap a content item from dom
	const tabContentItem = document.querySelector(`#${this.id}-content`);
	//add show class..
	tabContentItem.classList.add('show');
}

//to remove border from tabs..
function removeBorder() {
	tabItems.forEach((item) => item.classList.remove('tab-border'));
}

function removeShow() {
	tabContentItems.forEach((item) => item.classList.remove('show'));
}
