document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.gallery-item');
    items.forEach(item => {
      item.addEventListener('click', function() {
        // Crear el contenedor del modal y asignarle la clase 'modal'
        const modal = document.createElement('div');
        modal.classList.add('modal');
  
        // Crear la imagen ampliada y configurar sus atributos
        const modalImage = document.createElement('img');
        modalImage.src = this.src;
        modalImage.alt = this.alt;
  
        // Crear el botón de cierre y asignarle la clase 'close'
        const closeButton = document.createElement('span');
        closeButton.classList.add('close');
        closeButton.innerHTML = '&times;';
  
        // Ensamblar el modal
        modal.appendChild(modalImage);
        modal.appendChild(closeButton);
        document.body.appendChild(modal);
  
        // Evento para cerrar el modal al hacer clic en el botón de cierre
        closeButton.addEventListener('click', function() {
          modal.remove();
        });
  
        // Evento para cerrar el modal si se hace clic fuera de la imagen (en el fondo)
        modal.addEventListener('click', function(event) {
          if (event.target === modal) {
            modal.remove();
          }
        });
      });
    });
  });