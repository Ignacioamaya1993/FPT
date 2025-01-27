document.addEventListener("DOMContentLoaded", function () {
    // Carrusel de imágenes
    const slides = document.querySelectorAll(".slider img");
    let index = 0;

    function showSlide() {
        slides.forEach((img, i) => {
            img.classList.remove("active");
        });
        slides[index].classList.add("active");
        index = (index + 1) % slides.length;
    }
    showSlide();
    setInterval(showSlide, 5000);

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
