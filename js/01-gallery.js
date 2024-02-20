import { galleryItems } from './gallery-items.js';

// Obtiene el elemento de la galería en el DOM
const galleryContainer = document.querySelector('.gallery');

// Variable para almacenar la instancia de la ventana modal
let instance;

galleryItems.forEach(item => {
    // Crea un nuevo elemento de imagen
    const img = document.createElement('img');
    // Establece el atributo src con la URL de la imagen pequeña
    img.src = item.preview;
    // Establece el atributo alt con la descripción de la imagen
    img.alt = item.description;
    // Agrega una clase para estilos adicionales si es necesario
    img.classList.add('gallery__image');

    img.addEventListener('click', () => {
        // Abre la imagen a tamaño completo
        instance = basicLightbox.create(`
            <img src="${item.original}" alt="${item.description}">
        `);
        instance.show();
        // Agrega un evento de escucha para la tecla Escape solo cuando la ventana modal esté abierta
        document.addEventListener('keydown', onKeyPress);
    });

    galleryContainer.appendChild(img);
});

function onKeyPress(event) {
    // Verificar si la tecla presionada es la tecla Escape)
    if (event.code === 'Escape') {
        // Cierra la ventana modal si existe una instancia y está abierta
        if (instance && instance.visible()) {
            instance.close();
            // Elimina el evento de escucha de teclado una vez que se haya cerrado la ventana modal
            document.removeEventListener('keydown', onKeyPress);
        }
    }
}

console.log(galleryItems);
