const modal = document.getElementById("cookieModal");
const closeBtn = document.querySelector(".close");
const acceptBtn = document.getElementById("acceptBtn");
const denyBtn = document.getElementById("denyBtn");

window.onload = function () {
	let cookieConsent = localStorage.getItem("cookieConsent");
	if (!cookieConsent) {
		modal.style.display = "flex";
	}
};

acceptBtn.onclick = function () {
	modal.style.display = "none";
	localStorage.setItem("cookieConsent", "true");
};

denyBtn.onclick = function () {
	modal.style.display = "none";
	localStorage.setItem("cookieConsent", "true");
};
