const { multiplicar } = require('multiplicar');

function potencia(base, exponente) {
  if (exponente === 0) {
    return 1;
  } else if (exponente < 0) {
    return 1 / potencia(base, -exponente);
  } else {
    let resultado = 1;
    for (let i = 0; i < exponente; i++) {
      resultado = multiplicar(resultado, base);
    }
    return resultado;
  }
}
const base = 8;
const exponente = 3;
const resultado = potencia(base, exponente);
console.log(`${base} elevado a la ${exponente} es igual a ${resultado}`);


module.exports = {
    potencia
}