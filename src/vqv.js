/* eslint-disable no-unused-vars */

const numbers = require("./numbers");

/*
  Use template literals para escrever uma função que,
  recebe seu nome e sua idade e retorna o parágrafo descrito abaixo.
  Caso a função seja chamada sem nenhum parâmetro, o valor undefined deve ser retornado.

  Parâmetros:
    - Uma string;
    - Um número.
  Comportamento:
    vqv(Tunico, 30) // Retorna:
      'Oi, meu nome é Tunico!
      Tenho 30 anos,
      trabalho na Trybe e mando muito em programação!
      #VQV!'
*/

const vqv = (string, number) => {
  if (typeof(string) === 'string' && typeof(number) === 'number') {
    return `Oi, meu nome é ${string}!\nTenho ${number} anos,\ntrabalho na Trybe e mando muito em programação!\n#VQV!`
  }
  return undefined;
};

module.exports = vqv;
