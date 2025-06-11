document.addEventListener('DOMContentLoaded', () => {
    const carrusel = document.querySelector('.carrusel');
    const slides = document.querySelectorAll('.slide');
    const miniaturas = document.querySelectorAll('.miniatura');
    const btnPrev = document.querySelector('.prev');
    const btnNext = document.querySelector('.next');
    let currentIndex = 0;
    const totalSlides = slides.length;
    
    // Función para actualizar el carrusel
    function updateCarrusel() {
        carrusel.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Actualiza miniaturas activas
        miniaturas.forEach((miniatura, index) => {
            miniatura.classList.toggle('active', index === currentIndex);
        });
    }

    // Eventos para botones
    btnNext.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarrusel();
    });

    btnPrev.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateCarrusel();
    });

    // Click en miniaturas
    miniaturas.forEach((miniatura, index) => {
        miniatura.addEventListener('click', () => {
            currentIndex = index;
            updateCarrusel();
        });
    });

    // Cambio automático cada 5 segundos (opcional)
    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarrusel();
    }, 5000);
});


