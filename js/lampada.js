function ligar() {
	const lampada = document.getElementById("lampada");
	lampada.src = "img/lampada_ligada.png";
	lampada.classList.add("lampada-brilho");
}

function desligar() {
	const lampada = document.getElementById("lampada");
	lampada.src = "img/lampada_desligada.png";
	lampada.classList.remove("lampada-brilho");
}

// document representa toda a página HTML
// getElementByID("lampada") significa vá no HTML e pegue o elemento que tem id="lampada"
// src é o caminho da imagem. Quando muda o src, a imagem muda na tela
