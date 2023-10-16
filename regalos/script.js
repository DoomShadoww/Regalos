// script.js
const patternPreview = document.getElementById('pattern-preview');
const patternThumbnails = document.getElementById('pattern-thumbnails');
const dedicationInput = document.getElementById('dedication-input');
const patternText = document.getElementById('patten-text');
const color = document.getElementById('color');


// Lista de imágenes de patrones de papel de regalo
const patterns = [
    'img/1.jpg',
    'img/2.jpg',
    'img/3.png',
    'img/4.jpg',
    // Agrega más rutas de imágenes de patrones según sea necesario
];




// Crea las minia turas de los patrones
patterns.forEach((pattern, index) => {
    const thumbnail = document.createElement('div');
    thumbnail.classList.add('pattern-thumbnail');
    thumbnail.style.backgroundImage = `url("${pattern}")`;
    thumbnail.addEventListener('click', () => {
        selectPattern(pattern, index);
    });
    patternThumbnails.appendChild(thumbnail);
});

// Función para seleccionar un patrón
function selectPattern(pattern, index) {
    patternPreview.style.backgroundImage = `url("${pattern}")`;
    patternPreview.style.backgroundSize = 'cover'; // Ajustar la imagen al tamaño completo del contenedor
    // Puedes usar el índice 'index' para identificar el patrón seleccionado
}

// Manejar cambios en la dedicatoria
dedicationInput.addEventListener('input', () => {
    const dedicationText = dedicationInput.value;
    patternText.textContent = dedicationText;
    const numberOfRepeats = 16; // Cambia esto según la cantidad deseada de repeticiones
    var duplicate = "";
    for (let i = 0; i < numberOfRepeats; i++) {
    duplicate = duplicate + dedicationText +" "
    patternText.textContent = duplicate;
    }
});


function cambiacolor(){
    patternText.style.color = color.value
}
