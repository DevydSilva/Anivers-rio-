// Script para Efeitos de Estrelas

document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.querySelector('.hero');
    if (!heroSection) return;

    const numberOfStars = 50; // Número de estrelas

    for (let i = 0; i < numberOfStars; i++) {
        let star = document.createElement('div');
        star.classList.add('star');

        // Posição aleatória dentro da hero section
        let x = Math.random() * heroSection.offsetWidth;
        let y = Math.random() * heroSection.offsetHeight;
        star.style.left = `${x}px`;
        star.style.top = `${y}px`;

        // Tamanho aleatório
        let size = Math.random() * 3 + 1; // Tamanho entre 1px e 4px
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        // Duração da animação aleatória para twinkling
        let duration = Math.random() * 2 + 1; // Duração entre 1s e 3s
        star.style.animationDuration = `${duration}s`;
        star.style.animationDelay = `${Math.random() * duration}s`; // Delay aleatório para não piscarem todas juntas

        heroSection.appendChild(star);
    }
}); 