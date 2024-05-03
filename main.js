// Bailey Simons, May 3, 2024, JS Slideshow

let i = 0;

const images = [];

images[0] = "cattongue.webp";
images[1] = "backcat.jpg";
images[2] = "meow.jpg";
images[3] = "yellcat.jpg";

const captions = ['Cat image #1', 'Cat image #2','Cat image #3','Cat image #4'];

const time = 3000;

function changeImg() {
    document.slide.src = images[i];
    const myCaption = document.querySelector('#cat-caption');
    myCaption.innerHTML = captions[i];

    if (i < images.length - 1) {
      i++;  
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg;
