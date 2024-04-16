const navbarBtn = document.querySelector("#navbar-btn");
const navbarLinks = document.querySelector("#navbar-links");
const navbarBtnIcon = document.querySelector("i");


navbarBtn.addEventListener("click", () => {
	console.log("clicked");
	navbarLinks.classList.toggle("open");

	//changing navbar icon
	const isOpen = navbarLinks.classList.contains("open");
	navbarBtnIcon.setAttribute("class", isOpen?"ri-close-line":"ri-menu-3-fill");

	//removing .open class and chaging icon menu when you click on menu link

	navbarLinks.addEventListener("click", (e) => {
		navbarLinks.classList.remove("open");
		navbarBtnIcon.setAttribute("class", "ri-menu-3-fill")
	}) 

	//ri-close-line
})


//animating text using ScrollReveal JS library
const scrollRevealOption = {
	distance: "50px",
	origin: "bottom",
	duration: 1000,
};

ScrollReveal().reveal(".header__content .section__header", {
	...scrollRevealOption,
});
ScrollReveal().reveal(".header__content .section__description", {
	...scrollRevealOption,
	delay: 500,
});
ScrollReveal().reveal(".header__content .header__btn", {
	...scrollRevealOption,
	delay: 1000,
});
//.................