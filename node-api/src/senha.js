// Função para verificar se a senha atende aos requisitos
function verificarSenha(senha) {
    // Verifica se a senha tem pelo menos 8 caracteres
    if (senha.length < 8) {
        return false;
    }

    //Verifica se a senha contém pelo menos uma letra e um número
    const possuiLetra = /[a-zA-Z]/.test(senha);
    const possuiNumero = /\d/.test(senha);

    return possuiLetra && possuiNumero;
}

module.exports = verificarSenha;