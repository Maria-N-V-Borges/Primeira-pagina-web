// Função para abrir/fechar o menu hambúrguer no mobile
function toggleMenu() {
	const menu = document.getElementById("menuLinks");
	menu.classList.toggle("ativo");
}

//Função para ativar/desativar o Dark Mode
function toggleDarkMode() {
	const body = document.body;
	const header = document.querySelector("header");
	const footer = document.querySelector("footer");
	const titles = document.querySelectorAll("h2, h3");
	const menu = document.querySelector(".menu");
	const menuLinks = document.querySelectorAll(".menu a");
	const links = document.querySelectorAll("a");
	const buttons = document.querySelectorAll("button");
	const toggleBtn = document.getElementById("modoToggle");

	// Alterna a classe "dark-mode" em vários elementos
	body.classList.toggle("dark-mode");
	header.classList.toggle("dark-mode");
	footer.classList.toggle("dark-mode");
	menu.classList.toggle("dark-mode");
	titles.forEach(el => el.classList.toggle("dark-mode"));
	links.forEach(el => el.classList.toggle("dark-mode"));
	buttons.forEach(el => el.classList.toggle("dark-mode"));
	menuLinks.forEach(el => el.classList.toggle("dark-mode"));

	// Verifica se está em dark mode
	const isDark = body.classList.contains("dark-mode");

	// Troca o texto do botão
	toggleBtn.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";

	// Salva a preferência no navegador
	localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");
	}

// Quando a página carrega, aplica o Dark Mode se estiver salvo
window.addEventListener("DOMContentLoaded", () => {
	const darMode = localStorage.getItem("darkMode");
	if (darMode === "enabled") {
		const body = document.body;
		const header = document.querySelector("header");
		const footer = document.querySelector("footer");
		const titles = document.querySelectorAll("h2, h3");
		const menu = document.querySelector(".menu");
		const menuLinks = document.querySelectorAll(".menu a");
		const links = document.querySelectorAll("a");
		const buttons = document.querySelectorAll("button");
		const toggleBtn = document.getElementById("modoToggle");

		body.classList.toggle("dark-mode");
		header.classList.toggle("dark-mode");
		footer.classList.toggle("dark-mode");
		menu.classList.toggle("dark-mode");
		titles.forEach(el => el.classList.toggle("dark-mode"));
		links.forEach(el => el.classList.toggle("dark-mode"));
		buttons.forEach(el => el.classList.toggle("dark-mode"));
		menuLinks.forEach(el => el.classList.toggle("dark-mode"));
		
		toggleBtn.textContent = "☀️ Light Mode";
	}
});
