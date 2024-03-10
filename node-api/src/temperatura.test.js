const { celsiusParaFahrenheit, fahrenheitParaCelsius } = require('./temperatura');

test('converte temperatura de Celsius para Fahrenheit corretamente', () => {
    expect(celsiusParaFahrenheit(0)).toBe(32);
});

test('converte temperatura de Fahrenheit para Celsius corretamente', () => {
    expect(fahrenheitParaCelsius(32)).toBe(0);
});