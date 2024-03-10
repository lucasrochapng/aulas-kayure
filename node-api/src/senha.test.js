const verificarSenha = require('./senha');

test('verifica se a senha atende aos requisitos', () => {
    // Senha com comprimento insuficiente
    expect(verificarSenha('abc123')).toBe(false);

    // Senha sem letras
    expect(verificarSenha('12345678')).toBe(false);

    // Senha sem números
    expect(verificarSenha('abcdefgh')).toBe(false);

    // Senha com comprimento e conteúdo válido
    expect(verificarSenha('senha123')).toBe(true);

    // Senha com caracteres especiais
    expect(verificarSenha('senha@123')).toBe(true);
});