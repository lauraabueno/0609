let index = 0;
const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.indicator');

function showSlide(n) {
    if (n >= slides.length) index = 0;
    if (n < 0) index = slides.length - 1;

    const offset = -index * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;

    // Update indicators
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
    });
}

function showNextImage() {
    index = (index + 1) % slides.length;
    showSlide(index);
}

function showPrevImage() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
}

function goToSlide(n) {
    index = n;
    showSlide(index);
}

setInterval(showNextImage, 3000); // Muda a imagem a cada 3 segundos

// Initialize indicators
showSlide(index);