const openNavButton = document.getElementById("open-nav-button");
const closeNavButton = document.getElementById("close-nav-button");
const nav = document.getElementById("list-nav");

openNavButton.addEventListener("click", function() {
	if (nav.dataset.status === "closed") {
		callNav("open");
	} else callNav("close");
});

closeNavButton.addEventListener("click", function() {
	if (nav.dataset.status === "open") callNav("close");
});

document.addEventListener("keydown", function(isKey) {
	if (isKey.key === "Escape") callNav("close");

	if (isKey.key === "q" || isKey.key === "Q") {
		if (nav.dataset.status === "closed") {
			callNav("open");
		} else callNav("close");
	}
})
// callback nav
function callNav(is) {
	if (is === "open") {
		nav.dataset.status = "open";
		nav.classList.replace("right-[-200%]", "right-0");
	} else {
		nav.dataset.status = "closed";
		nav.classList.replace("right-0", "right-[-200%]")
	}
}