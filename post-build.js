const fs = require('fs');
const path = require('path');

// Ruta al archivo index.html generado por Next.js
const indexPath = path.join(__dirname, 'out/index.html');

// Leer el contenido del archivo index.html
fs.readFile(indexPath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo index.html:', err);
        return;
    }

    // Reemplazar /_next/ con ./_next/
    const updatedData = data.replace(/\/_next\//g, './_next/');

    // Escribir el contenido modificado de vuelta al archivo index.html
    fs.writeFile(indexPath, updatedData, 'utf8', (err) => {
        if (err) {
            console.error('Error al escribir el archivo index.html:', err);
            return;
        }

        console.log('Rutas en index.html actualizadas correctamente.');
    });
});