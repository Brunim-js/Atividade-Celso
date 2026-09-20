function classificarTemperatura(temperatura: number): string {
    if (temperatura < -20 || temperatura > 100) return "Leitura inválida";
    if (temperatura <= 29) return "Normal";
    if (temperatura <= 39) return "Atenção";
    return "Crítico";
}

// Teste de mesa:
// -21 -> inválida
// -20 -> normal
// 29 -> normal
// 30 -> atenção
// 39 -> atenção
// 40 -> crítico
// 100 -> crítico
// 101 -> inválida

[-21, -20, 29, 30, 39, 40, 100, 101].forEach(t =>
    console.log(`${t} °C:`, classificarTemperatura(t))
);