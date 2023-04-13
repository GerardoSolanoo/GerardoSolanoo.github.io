function textEffectOnMouseMove(selector) {
    let element = document.querySelector(selector);
    let text = element.querySelector('h1, h5'); // Buscar tanto h1 como h5

    const onMouseMove = (event) => {
        const x = event.pageX - element.offsetLeft;
        const y = event.pageY - element.offsetTop;

        const centerX = element.offsetWidth / 2;
        const centerY = element.offsetHeight / 2;

        const percentX = (x - centerX) / centerX;
        const percentY = (y - centerY) / centerY;

        const maxGrow = 1.5;
        const size = Math.sqrt(percentX ** 2 + percentY ** 2) * maxGrow;

        text.style.fontSize = `${1.5 + size}rem`;
    };

    element.addEventListener('mousemove', onMouseMove);
}

textEffectOnMouseMove('text-header');
textEffectOnMouseMove('job-text');
