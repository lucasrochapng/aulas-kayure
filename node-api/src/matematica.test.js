// Importa a função dividir que será testada.
const dividir = require('./matematica');

// Define um teste usando o Jest. A descrição indica o comportamento esperado.
test('lança uma exceção ao dividir por zero', () => {
    // Utiliza a função de teste do Jest para verificar se a exceção é lançada.
    expect(() => dividir(5, 0)).toThrow("Divisão por zero não é permitida");
});