function calcular() {
  let entrada = document.getElementById('entrada');

  if (entrada instanceof HTMLInputElement) {
    let num = parseInt(entrada.value);
    let tabela = [];

    for (let i = 0; i <= num; i++) {
      let padraoBinario = [];
      for (let j = 0; j <= num; j++) {
        padraoBinario.push(`(${i}, ${j})`);
      }
      tabela.push(padraoBinario);
    }
    console.table(tabela);
  }
}
