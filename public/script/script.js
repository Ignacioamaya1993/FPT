document.addEventListener("DOMContentLoaded", function () {
    // Carrusel de imágenes
    const slides = document.querySelectorAll(".slider img");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    let index = 0;
    let interval;

    function showSlide() {
        slides.forEach((img, i) => {
            img.style.display = i === index ? "block" : "none"; // Muestra solo la imagen activa
        });
    }

    function startInterval() {
        interval = setInterval(() => {
            index = (index + 1) % slides.length; // Cambia a la siguiente imagen
            showSlide();
        }, 7000); // Intervalo de 2 segundos
    }

    function resetInterval() {
        clearInterval(interval);
        startInterval();
    }

    // Mostrar la primera imagen al cargar la página
    if (slides.length > 0) {
        showSlide();
        startInterval();
    }

    // Verificar si los botones existen antes de agregar eventos
    if (prevButton && nextButton) {
        prevButton.addEventListener("click", function () {
            index = (index - 1 + slides.length) % slides.length; // Retrocede una imagen
            showSlide();
            resetInterval(); // Reinicia el intervalo al cambiar manualmente
        });

        nextButton.addEventListener("click", function () {
            index = (index + 1) % slides.length; // Avanza una imagen
            showSlide();
            resetInterval(); // Reinicia el intervalo al cambiar manualmente
        });
    }

    // Desaparecer las flechas cuando el mouse no está sobre el carrusel
    const slider = document.querySelector(".slider");
    if (slider) {
        slider.addEventListener("mouseenter", function () {
            if (prevButton) prevButton.style.opacity = 1;
            if (nextButton) nextButton.style.opacity = 1;
        });
        slider.addEventListener("mouseleave", function () {
            if (prevButton) prevButton.style.opacity = 0;
            if (nextButton) nextButton.style.opacity = 0;
        });
    }

    // Desplazamiento suave al hacer clic en los enlaces del menú
    const links = document.querySelectorAll('a[href^="#"]');
    const offset = 130; // Ajusta este valor según la altura de tu menú

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault(); // Evita el comportamiento predeterminado
            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const elementPosition = targetElement.offsetTop; // Posición del elemento
                const offsetPosition = elementPosition - offset; // Restamos el offset

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth", // Desplazamiento suave
                });
            }
        });
    });
});
