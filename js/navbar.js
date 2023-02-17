navbar_el = document.getElementById("navbar");
body_el = document.body;

if (window.pageYOffset >= 45) {
	navbar_el.classList.toggle("nav_BG");
}
window.addEventListener("scroll", (event) => {
	if (window.pageYOffset >= 45 && !navbar_el.classList.contains("nav_BG")) {
		navbar_el.classList.toggle("nav_BG");
	} else if (
		window.pageYOffset <= 45 &&
		navbar_el.classList.contains("nav_BG")
	) {
		navbar_el.classList.toggle("nav_BG");
	}
});
