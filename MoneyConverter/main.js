document.getElementById('btnConvertir').addEventListener('click', () => {
    const pesos = parseFloat(document.getElementById('inputPesos').value);
    const tasa = 20.50; // La definimos aquí

    if (isNaN(pesos) || pesos < 0) {
        alert("Ingresa una cantidad válida");
        return;
    }

    const resultado = pesos / tasa;

    // Formato de moneda
    const dolares = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(resultado);

    document.getElementById('resultadoDisplay').innerText = dolares;
    document.getElementById('tasaInfo').innerText = `Tasa usada: $${tasa}`;
});