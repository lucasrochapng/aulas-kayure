// Função para converter temperatura de Celcius para Fahrenheit
function celsiusParaFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Função para converter temperatura de Fahrenheit para Celcius
function fahrenheitParaCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

module.exports = { celsiusParaFahrenheit, fahrenheitParaCelsius };