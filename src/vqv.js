/* eslint-disable no-unused-vars */

const numbers = require('./numbers');

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
  if (typeof (string) === 'string' && typeof (number) === 'number') {
    let phrase;
    phrase = `Oi, meu nome é ${string}!\n`;
    phrase += `Tenho ${number} anos,\n`;
    phrase += 'trabalho na Trybe e mando muito em programação!\n';
    phrase += '#VQV!';
    return phrase;
  }
  return undefined;
};

module.exports = vqv;
