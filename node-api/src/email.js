// Função para verificar se um email é válido.
function validarEmail(email) {
    // Expressão regular para validar o formato do email.
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

module.exports = validarEmail;