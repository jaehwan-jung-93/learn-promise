const spinner = document.querySelector('img');

let rotateCount = 0;
let startTime = null;
let rAF;

function draw(timestamp) {
    if (!startTime) {
        startTime = timestamp;
    }

    rotateCount = (timestamp - startTime) / 3;

    if (rotateCount > 359) {
        rotateCount %= 360;
    }

    spinner.style.transformOrigin = 'center';
    spinner.style.transform = `rotate(${rotateCount}deg)`;

    rAF = requestAnimationFrame(draw);
}

draw();

const pageBody = document.querySelector('body');

function endAnim() {
    cancelAnimationFrame(rAF);
}

pageBody.addEventListener('click', endAnim);