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

document.getElementById('btnLimpiar').addEventListener('click', () => {
    
    document.getElementById('inputPesos').value = '';

    document.getElementById('resultadoDisplay').innerText = '$0.00 USD';
    
    document.getElementById('tasaInfo').innerText = 'Tasa de cambio: --';

    document.getElementById('inputPesos').focus();
});
