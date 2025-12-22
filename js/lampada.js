function ligar() {
	document.getElementById("lampada").src = "img/lampada_ligada.png";

}

function desligar() {
	document.getElementById("lampada").src = "img/lampada_desligada.png";
}

// document representa toda a página HTML
// getElementByID("lampada") significa vá no HTML e pegue o elemento que tem id="lampada"
// src é o caminho da imagem. Quando muda o src, a imagem muda na tela
