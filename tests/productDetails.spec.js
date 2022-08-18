const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    it('Verifica se a função `productDetails` é uma função', () => {
      expect(typeof productDetails).toBe('function');
    });
    // Teste se o retorno da função é um array.
    it('Verifica se a função `productDetails` retorna um array', () => {
      expect(typeof productDetails('Alcool gel', 'Máscara')).toBe('object');
    });
    // Teste se o array retornado pela função contém dois itens dentro.
    it('Verifica se a função `productDetails` contem dois itens dentro', () => {
      expect(productDetails.length).toBe(2);
    });
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    it('Verifica se a função `productDetails` retorna dois objetos', () => {
      expect(typeof Object.values(productDetails('Alcool gel', 'Máscara'))).toBe('object');
    });
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    it('Verifica se a função `productDetails` retorna dois objetos diferentes entre si quando passado parâmetros diferentes entre si', () => {
      expect(productDetails('Alcool gel', 'Máscara')[0]).not.toEqual(productDetails('Alcool gel', 'Máscara')[1]);
    });
    // Teste se os dois productIds terminam com 123.
    // it('Verifica se a função `productDetails` é uma função', () => {
    //   expect('Teste vazio!');
    // });
});
