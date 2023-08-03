const { multiplicar } = require('poc-lib-shared');

function potencia(a, b) {
    let resultado = 0;
    for(let i = 0; i < b; i++) {
        resultado = multiplicar(resultado, a);
    }
    return resultado;
} 

module.exports = {
    potencia
}