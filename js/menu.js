function toggleMenu() {
	const menu = document.getElementById("menuLinks");
	menu.classList.toggle("ativo");
}

function toggleDarkMode() {
	const body = document.body;
	const header = document.querySelector("header");
	const footer = document.querySelector("footer");
	const menu = document.querySelector(".menu");
	const menuLinks = document.querySelectorAll(".menu a");
	const links = document.querySelectorAll("a");
	const buttons = document.querySelectorAll("button");
	const titles = document.querySelectorAll("h2, h3");
	const toggleBtn = document.getElementById("modoToggle");

	body.classList.toggle("dark-mode");
	header.classList.toggle("dark-mode");
	footer.classList.toggle("dark-mode");
	menu.classList.toggle("dark-mode");
	titles.forEach(el => el.classList.toggle("dark-mode"));
	links.forEach(el => el.classList.toggle("dark-mode"));
	buttons.forEach(el => el.classList.toggle("dark-mode"));
	menuLinks.forEach(el => el.classList.toggle("dark-mode"));

	// Troca o ícone do botão
	toggleBtn.textContent = body.classList.contains("dark-mode")
		? "☀️ Light Mode"
		: "🌙 Dark Mode";
}
