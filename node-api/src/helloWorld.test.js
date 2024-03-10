// Importa a função helloWorld que será testada.
const helloWorld = require('./helloWorld');

// Define um teste usando o Jest. A descrição indica o comportamento esperado.
test('should return "Hello, World!"', () => {
    // Chama a função helloWorld e armazena o resultado na variável result.
    const result = helloWorld();

    // Utiliza o matcher (comparador) toBe do Jest para verificar o resultado.
    // É estritamente igual à string "Hello, World!".
    expect(result).toBe('Hello, World!');
});