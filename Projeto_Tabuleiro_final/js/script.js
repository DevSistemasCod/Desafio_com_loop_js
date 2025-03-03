function criarTabuleiro() {
  let entradaNum = document.getElementById('quantidadeQuadrados');

  if (entradaNum instanceof HTMLInputElement) {
    let quantidadeQuadrados = parseInt(entradaNum.value);

    if (quantidadeQuadrados <= 0) {
      alert("Digite um valor inteiro positivo para 'n'.");
      return;
    }

    let tabuleiro = construirTabuleiro(quantidadeQuadrados);
    console.log(tabuleiro);
    exibirConteudo(tabuleiro);
  }
}

// Função para construir o tabuleiro com base no número de quadrados
function construirTabuleiro(quantidadeQuadrados) {
  let tabuleiro = document.createElement('table'); // Cria a tabela

  for (let i = 0; i < quantidadeQuadrados; i++) {
    let linha = document.createElement('tr'); // Cria a linha (tr)

    // Loop para criar as células dentro da linha
    for (let j = 0; j < quantidadeQuadrados; j++) {
      // Calcula a alternância de cores para as células
      let resultado = (i + j) % 2;

      let celula = document.createElement('td'); // Cria a célula (td)

      // Verifica se a célula deve ser branca ou preta
      if (resultado === 0) {
        celula.classList.add('quadradoBranco'); // Adiciona classe quadradoBranco
      } else {
        celula.classList.add('quadradoPreto'); // Adiciona classe quadradoPreto
      }

      linha.appendChild(celula); // Adiciona a célula à linha
    }

    tabuleiro.appendChild(linha); // Adiciona a linha à tabela
  }

  return tabuleiro; // Retorna a tabela completa
}

// Função para exibir o conteúdo do tabuleiro
function exibirConteudo(tabuleiro) {
  let container = document.getElementById('desenhoDoTabuleiro');

  if (container instanceof HTMLDivElement) {
    container.textContent = ''; // Limpa o conteúdo anterior
    container.insertAdjacentElement('beforeend', tabuleiro); // Insere a tabela criada
  }
}
