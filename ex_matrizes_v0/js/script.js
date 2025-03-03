function calcular() {
  let entrada = document.getElementById('entrada');

  if (entrada instanceof HTMLInputElement) {
    let num = parseInt(entrada.value);

    for (let i = 0; i <= num; i++) {
      for (let j = 0; j <= num; j++) {
        //linha sendo i e coluna sendo j
        console.log(i, j);
      }
    }
  }
}
