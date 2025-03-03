function criarTabuleiro() {
  let entradaNum = document.getElementById('quantidadeQuadrados');

  if (entradaNum instanceof HTMLInputElement) {
    let quantidadeQuadrados = parseInt(entradaNum.value);

    if (quantidadeQuadrados <= 0) {
      alert("Digite um valor inteiro positivo para 'n'.");
      return;
    }
    let tabuleiro = construirTabuleiro(quantidadeQuadrados);
    exibirConteudo(tabuleiro);
  }
}

// Função para construir o tabuleiro com base no número de quadrados
function construirTabuleiro(quantidadeQuadrados) {
  let tabuleiro = document.createDocumentFragment(); // Fragmento para armazenar as linhas temporariamente

  for (let i = 0; i < quantidadeQuadrados; i++) {
    let padraoBinario = '';

    for (let j = 0; j < quantidadeQuadrados; j++) {

      //O operador % (módulo) retorna o resto da divisão por 2.
      //Se o resto for 0, a soma i + j é divisível por 2 (par).
      //Se o resto for 1, a soma i + j não é divisível por 2 (ímpar).
      //=== 0:
      //Esta comparação verifica se o resto da divisão ((i + j) % 2) 
      // é igual a 0. Se for, a soma i + j é par.
      //prettier-ignore
      if (((i + j) % 2) === 0) {
            padraoBinario = padraoBinario + "0";
        } else {
            padraoBinario = padraoBinario + "1";
        }
    }

    let linhaElemento = document.createElement('div');
    linhaElemento.textContent = padraoBinario;
    tabuleiro.appendChild(linhaElemento); // Adiciona a linha ao fragmento
  }

  return tabuleiro; // Retorna o fragmento contendo o tabuleiro completo
}

function exibirConteudo(tabuleiro) {
  let container = document.getElementById('desenhoDoTabuleiro');

  if (container instanceof HTMLDivElement) {
    container.textContent = ''; // Limpa o conteúdo existente
    container.appendChild(tabuleiro); // Substitua insertAdjacentElement por appendChild
  }
}
