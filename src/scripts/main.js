const slides = document.querySelectorAll('.slide');
let slider = [];
slides.forEach((slide) => {
    slider.push(slide.src);
    slide.remove();
});

let step = 0;
let offset = 0;
const width = 1080;

const drawImg = () => {
    const img = document.createElement('img');
    img.src = slider[step];
    img.classList.add('slide');
    img.style.left = offset*width + 'px';
    document.querySelector('#carousel').appendChild(img);

    if(step + 1 === slider.length) step = 0;
    else step++;

    offset = 1;
}

const swipe = (event) => {
    buttons.forEach(button => {
        button.removeEventListener('click', swipe);
    });
    const slidesOnPage = document.querySelectorAll('.slide');
    let offsetOnPage = 0;
    slidesOnPage.forEach(slide => {
        console.log(event.target)
        slide.style.left = offsetOnPage*width - width + 'px'; //if
        offsetOnPage++;
    });

    setTimeout(() => {
        slidesOnPage[0].remove();
        drawImg();
        buttons.forEach(button => {
            button.addEventListener('click', swipe);
        });
    }, 1000);
}

const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('click', swipe);
});

drawImg();
drawImg();


