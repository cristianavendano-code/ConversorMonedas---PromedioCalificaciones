const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Así servirá tus HTML, CSS y JS sin problemas.
app.use(express.static(__dirname));

// Ruta principal para asegurar que cargue el menú
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Proyecto corriendo en http://localhost:${PORT}`);
});