function criarTabuleiro() {
    // quantidadeQuadrados recebe o valor da quantidade de quadrados inserido pelo usuário (após fazer o parse para o tipo inteiro)
    let quantidadeQuadrados = parseInt(document.getElementById("quantidadeQuadrados").value);
    
    // Verifica se a quantidade é um valor válido
    if (quantidadeQuadrados <= 0) {
        alert("Digite um valor inteiro positivo para 'n'.");
        return; // Sai da função se a quantidade não for válida
    }

    // Inicia a construção da tabela como uma string HTML
    let tabuleiro = "<table>";

    // Loop utilizado para criar as linhas da tabela
    for (let i = 0; i < quantidadeQuadrados; i++) {
        tabuleiro = tabuleiro + "<tr>";

        // Loop usado para criar as colunas (e por consequência as celulas da tabela)
        for (let j = 0; j < quantidadeQuadrados; j++) {
            // Calcula o resultado da soma de índices para alternar cores
            let resultado = (i + j) % 2;

            // Verifica se a célula deve ser branca ou preta
            if (resultado == 0) {
                tabuleiro = tabuleiro + "<td class='quadradoBranco'></td>";
            } else {
                tabuleiro = tabuleiro + "<td class='quadradoPreto'></td>";
            }
        }
        
        tabuleiro = tabuleiro + "</tr>"; // Fecha a linha
    }

    tabuleiro = tabuleiro + "</table>"; // Fecha a tabela completa

    // Define o conteúdo da div "desenhoDoTabuleiro" como o tabuleiro criado
    document.getElementById("desenhoDoTabuleiro").innerHTML = tabuleiro;
}
