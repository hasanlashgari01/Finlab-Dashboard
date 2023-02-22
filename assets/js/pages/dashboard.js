// Variables
const tabItemsElems = document.querySelectorAll(".tab__item");
const sectionElems = document.querySelectorAll(".section");
const checkboxAllElem = document.querySelector("#checkbox-all");
const checkboxElems = document.querySelectorAll(".transaction-table__tbody input");

// EventListener

tabItemsElems.forEach((item) => {
	item.addEventListener("click", (e) => {
		tabChangeAnimation(e);
		showSection(e);
	});
});

checkboxAllElem.addEventListener("change", (e) => {
	checkboxElems.forEach((checkboxElem) => {
		let tr = checkboxElem.parentElement.parentElement;
		if (checkboxAllElem.checked) {
			checkboxElem.checked = true;
			tr.style.backgroundColor = "rgba(237, 241, 243, 0.5)";
		} else {
			checkboxElem.checked = false;
			tr.style.backgroundColor = "unset";
		}
	});
});

checkboxElems.forEach((checkboxElem) => {
	checkboxElem.addEventListener("change", (e) => {
		let tr = e.target.parentElement.parentElement;
		if (checkboxElem.checked) {
			tr.style.backgroundColor = "rgba(237, 241, 243, 0.5)";
		} else {
			tr.style.backgroundColor = "unset";
		}
	});
});

// Functions

function tabChangeAnimation(element) {
	let tab = element.target;
	let tabAnimation = document.querySelector(".animation");
	let tabActive = document.querySelector(".tab__item--active");
	let breadcrumbElem = document.querySelector(".breadcrumb__link-second");

	tabActive.classList.remove("tab__item--active");
	element.target.classList.add("tab__item--active");
	tabAnimation.style.width = tab.offsetWidth + "px";
	tabAnimation.style.left = tab.offsetLeft + "px";
	breadcrumbElem.innerHTML = element.target.innerHTML;
}

function showSection(element) {
	let dataID = element.target.dataset.id;
	const mainSection = document.querySelector(`#${dataID}`);

	sectionElems.forEach((section) => section.classList.remove("section--active"));
	mainSection.classList.add("section--active");
}
