const carouselWrappers = document.querySelectorAll('.unico-carousel');

carouselWrappers.forEach((carouselWrapper) => {
    let startX = 0;
    let endX = 0;

    carouselWrapper.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    carouselWrapper.addEventListener('touchmove', (e) => {
        endX = e.touches[0].clientX;
    });

    carouselWrapper.addEventListener('touchend', () => {
        if (startX > endX + 50) {
            const nextButton = carouselWrapper.querySelector('[data-carousel-next]');
            if (nextButton) nextButton.click();
        } else if (startX < endX - 50) {
            const prevButton = carouselWrapper.querySelector('[data-carousel-prev]');
            if (prevButton) prevButton.click();
        }
    });
});
