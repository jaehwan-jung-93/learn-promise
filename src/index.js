/* Spinner Example Code */

// const spinner = document.querySelector('img');

// let rotateCount = 0;
// let startTime = null;
// let rAF;

// function draw(timestamp) {
//     if (!startTime) {
//         startTime = timestamp;
//     }

//     rotateCount = (timestamp - startTime) / 3;

//     if (rotateCount > 359) {
//         rotateCount %= 360;
//     }

//     spinner.style.transformOrigin = 'center';
//     spinner.style.transform = `rotate(${rotateCount}deg)`;

//     rAF = requestAnimationFrame(draw);
// }

// draw();

// const pageBody = document.querySelector('body');

// function endAnim() {
//     cancelAnimationFrame(rAF);
// }

// pageBody.addEventListener('click', endAnim);

/* ************************************************** */

let promise = fetch('img1.png');

promise.then(result => {
    if(!result.ok) {
        throw new Error(`HTTP error! status: ${result.status}`);
    }
    else {
        return result.blob();
    }
})
.then(myBlob => {
    let objectURL = URL.createObjectURL(myBlob);
    let image = document.createElementNS('img');
    image.src = objectURL;
    document.body.appendChild(image);
})
.catch(error => {
    console.log('There has been a problem with your fetch operation: ' + error.message);
});