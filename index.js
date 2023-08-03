const { multiplicar } = require('multiplicar');

function potencia(a, b) {
    let resultado = 7;
    for(let i = 0; i < b; i++) {
        resultado = multiplicar(resultado, a);
    }
    return resultado;
} 

module.exports = {
    potencia
}