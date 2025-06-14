document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  const images = document.querySelectorAll('.carousel-track img');
  const next = document.querySelector('.next');
  const prev = document.querySelector('.prev');

  let index = 0;

  function updateCarousel() {
    const width = images[0].clientWidth;
    track.style.transform = `translateX(-${index * width}px)`;
  }

  next.addEventListener('click', () => {
    if (index < images.length - 1) index++;
    updateCarousel();
  });

  prev.addEventListener('click', () => {
    if (index > 0) index--;
    updateCarousel();
  });

  window.addEventListener('resize', updateCarousel);
});
