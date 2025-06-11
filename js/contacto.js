document.addEventListener('DOMContentLoaded', () => {
    // Coordenadas del taller (ejemplo: Madrid)
    const tallerLatLng = [40.4168, -3.7038];
    
    // Inicializar mapa
    const map = L.map('map').setView(tallerLatLng, 15);

    // Capa de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // Marcador del taller
    const marker = L.marker(tallerLatLng).addTo(map)
        .bindPopup("<b>BiciFix</b><br>Taller de bicicletas").openPopup();

    // Opcional: Geolocalización del usuario + ruta
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const userLatLng = [position.coords.latitude, position.coords.longitude];
            
            // Marcador de usuario
            L.marker(userLatLng).addTo(map)
                .bindPopup("<b>Tu ubicación</b>").openPopup();
            
            // Línea de ruta (requiere plugin de routing: https://www.liedman.net/leaflet-routing-machine/)
            // Puedes añadirlo si quieres rutas calculadas.
        });
    }
});