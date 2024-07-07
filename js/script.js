const hero = document.querySelector('.hero');
const images = document.querySelectorAll('.images img');

const sensitivities = [25, -30, 10];

for (let i = 0; i < images.length; i++) {
  hero.addEventListener('mousemove', e => {
    setTimeout(() => {
        const x = e.clientX;
        const y = e.clientY;
        const w = hero.offsetWidth / 2;
        const h = hero.offsetHeight / 2;

        let convertX = ((x - w) * sensitivities[i]) / w;
        let convertY = ((y - h) * sensitivities[i]) / h;

        images[i].style.transform = `
            translateX(${convertX}px)
            translateY(calc(-50% - ${convertY}px)`;
    }, 200);
    });
}