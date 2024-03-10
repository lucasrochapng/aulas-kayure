const validarEmail = require('./email');

test('verifica se o email é válido', () => {
    // Email válido
    expect(validarEmail('usuario@exemplo.com')).toBe(true);
    // Email inválido (sem o '@')
    expect(validarEmail('usuarioexemplo.com')).toBe(false);
});