function calcular() {
  let entrada = document.getElementById('entrada');

  if (entrada instanceof HTMLInputElement) {
    let num = parseInt(entrada.value);
    let padraoBinario;

    for (let i = 0; i <= num; i++) {
      padraoBinario = '';
      for (let j = 0; j <= num; j++) {
        if ((i + j) % 2 === 0) {
          padraoBinario = padraoBinario + '0';
        } else {
          padraoBinario = padraoBinario + '1';
        }
      }
    }
    console.log(padraoBinario);
  }
}
