document.addEventListener('DOMContentLoaded', function () {
  fetch('data/news.json')
      .then(response => {
          // Verificar si la respuesta HTTP es exitosa
          if (!response.ok) {
              throw new Error(`Error HTTP! estado: ${response.status}`);
          }
          return response.json();
      })
      .then(data => {
          // Verificar si la estructura del JSON es válida
          if (!data.noticias || !Array.isArray(data.noticias)) {
              throw new Error('Estructura JSON inválida: "noticias" no existe o no es un array');
          }

          // Obtener el contenedor donde se mostrarán las noticias
          const container = document.getElementById('news-container');
          if (!container) {
              throw new Error('No se encontró el elemento con id "news-container"');
          }

          // Recorrer y procesar cada noticia
          data.noticias.forEach(noticia => {
              // Verificar si la noticia tiene título y contenido
              if (!noticia.titulo || !noticia.contenido) {
                  console.warn('Saltando noticia inválida:', noticia);
                  return;
              }

              // Crear los elementos para mostrar la noticia
              const article = document.createElement('article');
              const title = document.createElement('h3');
              const content = document.createElement('p');

              // Asignar el contenido de la noticia
              title.textContent = noticia.titulo;
              content.textContent = noticia.contenido;

              // Añadir los elementos al contenedor
              article.appendChild(title);
              article.appendChild(content);
              container.appendChild(article);
          });
      })
      .catch(error => {
          console.error('Error al cargar las noticias:', error);

          // Mostrar un mensaje de error en la página
          const container = document.getElementById('news-container');
          if (container) {
              container.innerHTML = '<p>Error al cargar las noticias. Por favor, inténtalo más tarde.</p>';
          }
      });
      
});

