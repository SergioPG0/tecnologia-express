document.addEventListener('DOMContentLoaded', function() {
    // Inicializar el mapa centrado en la ubicación de la empresa (ejemplo: Madrid)
    const map = L.map('map').setView([40.4168, -3.7038], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);
  
    // Añadir marcador de la empresa
    const empresaMarker = L.marker([40.4168, -3.7038]).addTo(map)
      .bindPopup('Nuestra Empresa<br>Calle Ejemplo 123').openPopup();
  
    // Obtener la ubicación del cliente y calcular la ruta
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        const clienteLatLng = [position.coords.latitude, position.coords.longitude];
        L.marker(clienteLatLng).addTo(map)
          .bindPopup('Tu ubicación').openPopup();
        L.Routing.control({
          waypoints: [
            L.latLng(position.coords.latitude, position.coords.longitude),
            L.latLng(40.4168, -3.7038)
          ],
          routeWhileDragging: false
        }).addTo(map);
      }, function(error) {
        console.error('Error obteniendo la geolocalización:', error);
      });
    } else {
      console.error('Geolocalización no soportada.');
    }
  });

  