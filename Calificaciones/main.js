document.getElementById('btnCalcular').addEventListener('click', () => {
    // 1. Obtener datos
    const u1 = parseFloat(document.getElementById('unidad1').value);
    const u2 = parseFloat(document.getElementById('unidad2').value);
    const u3 = parseFloat(document.getElementById('unidad3').value);

    // 2. Calcular (Lógica que antes estaba en Node.js)
    if (isNaN(u1) || isNaN(u2) || isNaN(u3)) {
        alert("Ingresa números válidos");
        return;
    }

    const promedio = (u1 + u2 + u3) / 3;
    
    // 3. Mostrar resultados
    document.getElementById('promedio').value = promedio.toFixed(2);
    
    const estatusInput = document.getElementById('estatus');
    if(promedio >= 6) {
        estatusInput.value = "Aprobado";
        estatusInput.style.color = "green";
    } else {
        estatusInput.value = "Reprobado";
        estatusInput.style.color = "red";
    }
});