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

fetch('img1.png')
.then(response => {
    if(!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    else {
        return response.blob();
    }
})
.then(myBlob => {
    let objectURL = URL.createObjectURL(myBlob);
    let image = document.createElement('img');
    image.src = objectURL;
    document.body.appendChild(image);
})
.catch(error => {
    console.log('There has been a problem with your fetch operation: ' + error.message);
});