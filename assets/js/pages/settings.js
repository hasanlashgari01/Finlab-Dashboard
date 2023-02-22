const sidebarTabElem = document.querySelectorAll(".sidebar-tab");
const toggleElems = document.querySelectorAll(".toggle");
const mainElems = document.querySelectorAll(".main");

sidebarTabElem.forEach((tab) => {
	tab.addEventListener("click", (e) => {
		let item = e.currentTarget;
		let dataID = item.dataset.id;
		let breadcrumbElem = document.querySelector(".breadcrumb__link-second");
		let itemText = item.querySelector(".sidebar-tab__text");

		document.querySelector(".sidebar-tab--active").classList.remove("sidebar-tab--active");
		item.classList.add("sidebar-tab--active");
		if (item.className.includes("sidebar-tab--active")) {
			item.lastElementChild.firstElementChild.setAttribute("src", "assets/image/svg/arrow-right-small.svg");
		}

		const mainSection = document.querySelector(`#${dataID}`);

		mainElems.forEach((section) => section.classList.remove("main--active"));
		mainSection.classList.add("main--active");

		let images = document.querySelectorAll(".sidebar-tab__right img");
		images.forEach((image) => {
			image.setAttribute("src", "assets/image/svg/arrow-right-gray.svg");
		});

		breadcrumbElem.innerHTML = itemText.innerHTML;
	});
});

toggleElems.forEach((toggle) => {
	toggle.addEventListener("click", (e) => {
		e.currentTarget.classList.toggle("toggle--active");
	});
});
