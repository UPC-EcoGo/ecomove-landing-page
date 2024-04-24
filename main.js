function initMap() {
  // Coordenadas del centro del mapa
  const center = { lat: 40.7128, lng: -74.006 };

  // Opciones del mapa
  const mapOptions = {
    center: center,
    zoom: 14
  };

  // Crear el mapa
  const map = new google.maps.Map(document.getElementById('map'), mapOptions);

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      const userLatLng = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      for (let i = 0; i < 15; i++) {
        // Generar coordenadas aleatorias dentro de un radio cercano
        const randomLat = position.coords.latitude + (Math.random() - 0.5) * 0.02;
        const randomLng = position.coords.longitude + (Math.random() - 0.5) * 0.02;
      
        // Crear marcador en la ubicación aleatoria
        new google.maps.Marker({
          position: { lat: randomLat, lng: randomLng },
          map: map,
          title: `Marcador ${i + 1}`
        });
      }
  
      // Centrar el mapa en la ubicación del usuario
      map.panTo(userLatLng);
    }, function() {
      // Manejar errores de geolocalización
      console.error('Error: La geolocalización no está disponible.');
    });
  } else {
    // Si el navegador no soporta geolocalización
    console.error('Error: La geolocalización no está disponible.');
  }
}

AOS.init();