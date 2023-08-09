// Função que cria um tabuleiro de xadrez usando quadrados pretos e brancos
function criarTabuleiro() {
    // Obtém a quantidade de quadrados do input no HTML
    let quantidadeQuadrados = parseInt(document.getElementById("quantidadeQuadrados").value);
    let tabuleiro = "<br>"; // Variável para construir o tabuleiro

    // Verifica se a quantidade de quadrados é válida
    if (quantidadeQuadrados <= 0) {
        alert("Digite um valor inteiro positivo para 'n'."); // Alerta se for inválido
        return; // Sai da função
    }

    // Loop para criar as linhas do tabuleiro
    for (let i = 0; i < quantidadeQuadrados; i++) {
        tabuleiro = tabuleiro + " "; // Adiciona um espaço no início de cada linha
        // Loop para criar os quadrados de cada linha
        for (let j = 0; j < quantidadeQuadrados; j++) {
            let resultado = (i + j) % 2; // Soma i e j, divide por 2 e devolve o resto da divisão
            // Verifica o resultado para determinar a cor do quadrado
            if (resultado == 0) {
                tabuleiro = tabuleiro + "0"; // Quadrado preto
            } else {
                tabuleiro = tabuleiro + "1"; // Quadrado branco
            }
        }
        tabuleiro = tabuleiro + "<br>"; // Quebra de linha após cada linha de quadrados
    }

    tabuleiro = tabuleiro + " "; // Adiciona um espaço no final do tabuleiro
    // Insere o tabuleiro no elemento HTML com o ID "desenhoDoTabuleiro"
    document.getElementById("desenhoDoTabuleiro").innerHTML = tabuleiro;
}
