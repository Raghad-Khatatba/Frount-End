var images = ['img/banner-img2.jpg', 'img/banner-img3.jpg','img/banner-img.jpg'];
var currentIndex = 0;
var section = document.getElementById('home');

function changeBackgroundImage() {
    section.style.backgroundImage = 'url(' + images[currentIndex] + ')';
    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeBackgroundImage, 3000);
