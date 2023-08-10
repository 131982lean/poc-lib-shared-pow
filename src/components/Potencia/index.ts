import { multiplicar } from 'poc-lib-shared';
 

function potencia(a, b) {
    let resultado = 1;
    for(let i = 0; i < b; i++) {
        resultado = multiplicar(resultado, a);
    }
    return resultado;
} 

export default potencia;