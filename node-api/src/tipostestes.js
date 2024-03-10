test('nome do teste', () => {
    // Código do teste
});

// É estritamente igual a valorEsperado ===
expect(resultado).toBe(valorEsperado);

// É igual a valorEsperado == bom para arrays
expect(resultado).toEqual(valorEsperado);

// Verifica se o array contém o elemento.
expect(array).toContain(elemento);