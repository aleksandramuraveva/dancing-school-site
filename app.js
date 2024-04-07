const navbarBtn = document.querySelector("#navbar-btn");
const navbarLinks = document.querySelector("#navbar-links");
const navbarBtnIcon = document.querySelector("i");


navbarBtn.addEventListener("click", () => {
	console.log("clicked");
	navbarLinks.classList.toggle("open");

	//changing navbar icon
	const isOpen = navbarLinks.classList.contains("open");
	navbarBtnIcon.setAttribute("class", isOpen?"ri-close-line":"ri-menu-3-fill");

	//ri-close-line
})