import smartAI from './smartAI.jpg'
console.log(smartAI)

function addImage() {
    const img = document.createElement('img');
    img.alt = 'UI';
    img.width = 300;
    img.src = smartAI;
    const body = document.querySelector('body');
    body.appendChild(img);
}

export default addImage;