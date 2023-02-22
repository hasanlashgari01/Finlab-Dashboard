const notificationElem = document.querySelector(".header-top__notification");
const hamburgerElem = document.querySelector(".hamburger");
const hamburgerCloseElem = document.querySelector(".hamburger-menu");
const mobileMenuElem = document.querySelector(".mobile-menu");

let isNotification = false;

notificationElem.addEventListener("click", (e) => {
	isNotification = true;
	document.querySelector(".header-notification").classList.add("header-notification--active");
});

document.body.addEventListener(
	"click",
	(e) => {
		if (isNotification) {
			isNotification = false;
			document.querySelector(".header-notification").classList.remove("header-notification--active");
		}
	},
	{ capture: true }
);

hamburgerElem.addEventListener("click", () => {
	mobileMenuElem.classList.add("mobile-menu--active");
});

hamburgerCloseElem.addEventListener("click", () => {
	mobileMenuElem.classList.remove("mobile-menu--active");
});
