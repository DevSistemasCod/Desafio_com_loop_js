function criarTabuleiro() {
    // quantidadeQuadrados recebe o valor da quantidade de quadrados inserido pelo usuário
    let quantidadeQuadrados = parseInt(document.getElementById("quantidadeQuadrados").value);
    
    // Verifica se a quantidade é um valor válido
    if (quantidadeQuadrados <= 0) {
        alert("Digite um valor inteiro positivo para 'n'.");
        return; // Sai da função se a quantidade não for válida
    }

    // Cria um elemento <table> para construir o tabuleiro
    let tabuleiro = document.createElement("table");

    // Loop para criar as linhas da tabela
    for (let i = 0; i < quantidadeQuadrados; i++) {
        let linha = document.createElement("tr");

        // Loop para criar as células (colunas) da tabela
        for (let j = 0; j < quantidadeQuadrados; j++) {
            // Cria um elemento <td> para representar uma célula
            let dado = document.createElement("td");
            
            // Calcula o resultado da soma de índices para alternar cores
            let resultado = (i + j) % 2;

            // Define a classe da célula conforme a cor desejada
            if (resultado == 0) {
                dado.className = "quadradoBranco";
            } else {
                dado.className = "quadradoPreto";
            }

            // Adiciona a célula à linha atual
            linha.appendChild(dado);
        }

        // Adiciona a linha à tabela
        tabuleiro.appendChild(linha);
    }

    // Obtém o elemento onde o tabuleiro será exibido
    let desenhoDoTabuleiro = document.getElementById("desenhoDoTabuleiro");
    
    // Limpa o conteúdo anterior
    desenhoDoTabuleiro.textContent = "";

    // Adiciona o tabuleiro ao elemento desenhoDoTabuleiro
    desenhoDoTabuleiro.appendChild(tabuleiro);
}
