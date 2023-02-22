const sectionElem = document.querySelector(".section");
const sidebarElem = document.querySelector(".sidebar");

window.addEventListener("scroll", () => {
	if (document.documentElement.scrollTop >= sectionElem.offsetTop - 150) {
		sidebarElem.style.top = 150 + "px";
	}
});
