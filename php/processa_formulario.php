<?php // Sem isso o servidor entende como HTML normal

// Verifica se veio pelo método POST
if ($_SERVER["REQUEST_METHOD"] == "POST") { // $_SERVER é uma variável global do PHP
// REQUEST_METHOD diz qual método foi usado (GET ou POST)
// Se não vier como POST, ele não executa o resto.

    $nome = $_POST["nome"]; //$_POST é um array que guarda todos os dados enviados pelo formulário
    $telefone = $_POST["telefone"];
    $data = $_POST["data"];
    $idade = $_POST["idade"];
    $genero = $_POST["genero"];
    $curso = $_POST["curso"];
    $mensagem = $_POST["mensagem"];

    // Checkbox (interesses pode ser múltiplo!)
    $interesses = isset($_POST["interesses"]) ? $_POST["interesses"] : []; // isset() verifica se algo existe
    // Checkbox pode não vir nada se a pessoa não marcar
    // Então usamos operador ternário: condição ? valor_se_verdadeiro : valor_se_falso
    // Se existir: pega os interesses
    // Se não existir: cria array vazio []

    echo "<h1>Dados Recebidos 💖</h1>";
    echo "Nome: ". $nome . "<br>"; // echo = imprimir na tela
    echo "Telefone: " . $telefone . "<br>"; // . = concatenação (juntar texto com variável)
    echo "Data de Nascimento: " . $data . "<br>"; // <br> = quebra de linha HTML
    echo "Idade: " . $idade . "<br>";
    echo "Gênero: " . $genero . "<br>";
    echo "Curso: " . $curso . "<br>";
    echo "Mensagem: " . $mensagem . "<br>";
    
    echo "<h3>Interesses:</h3>";

    if (!empty($interesses)) {
        foreach ($interesses as $interesse) { //foreach significa: "Para cada item dentro desse array..."
        // Se a pessoa marcou: games e música. O PHP faz: - games e - música (loop limpo)
            echo "- " . $interesse . "<br>";
        }
    } else {
        echo "Nenhum interesse selecionado.";
    }
} else {
    echo "Acesso invalido!"; // Se alguém tentar acessar o PHP direto sem formulário: bloqueia
}

?>