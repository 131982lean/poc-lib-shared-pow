import React from "react";
/* const react = require('react'); */

const { multiplicar } = require('poc-lib-shared');
 

export function potencia(a, b) {
    let resultado = 1;
    for(let i = 0; i < b; i++) {
        resultado = multiplicar(resultado, a);
    }
    return 3;
} 

export function Greetings() {
    const saludo = "Hola Pow! "
   return (
         <div>{saludo}</div>
     );
 }



/* module.exports = {
    potencia, Greetings
} */