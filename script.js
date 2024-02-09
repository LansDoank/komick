// Telusuri
const search = document.querySelector('.telusuri input');
const telusuri = document.querySelector('.telusuri p');
search.addEventListener('click', function () {
  telusuri.style.display = 'none';
});

search.addEventListener('', function () {
  telusuri.style.display = 'block';
});

const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('.navbar ul');

menuToggle.addEventListener('click', function () {
  nav.classList.toggle('slide');
});
// Telusuri End
// Live Image
if (window.matchMedia('(min-width:768px)').matches) {
  setTimeout(slideImage1, 4000);
  setTimeout(slideImage2, 8000);
  setTimeout(slideImage3, 12000);
  setInterval(slideImage, 12000);
}

if (window.matchMedia('(max-width:768px)').matches) {
  setTimeout(slideMobile1, 4000);
  setTimeout(slideMobile2, 8000);
  setTimeout(slideMobile3, 12000);
  setInterval(slideMobile, 12000);
}

function slideImage() {
  slideImage1;
  slideImage2;
  slideImage3;
  setTimeout(slideImage1, 4000);
  setTimeout(slideImage2, 8000);
  setTimeout(slideImage3, 12000);
  setInterval(slideImage, 12000);
  return slideImage;
}

function slideMobile() {
  slideMobile1;
  slideMobile2;
  slideMobile3;
  setTimeout(slideMobile1, 4000);
  setTimeout(slideMobile2, 8000);
  setTimeout(slideMobile3, 12000);
  setInterval(slideMobile, 12000);
}

function slideImage1() {
  const liveImage = document.querySelector('.live-image');
  liveImage.style.transition = '2s all';
  liveImage.style.transform = 'translatex(700px)';
}

function slideImage2() {
  const liveImage = document.querySelector('.live-image');
  liveImage.style.transition = '2s all';
  liveImage.style.transform = 'translatex(-700px)';
}

function slideImage3() {
  const liveImage = document.querySelector('.live-image');
  liveImage.style.transition = '2s all';
  liveImage.style.transform = 'translatex(0px)';
}

function slideMobile1() {
  const liveImage = document.querySelector('.live-image');
  liveImage.style.transition = '2s all';
  liveImage.style.transform = 'translatex(430px)';
}
function slideMobile2() {
  const liveImage = document.querySelector('.live-image');
  liveImage.style.transition = '2s all';
  liveImage.style.transform = 'translatex(-430px)';
}
function slideMobile3() {
  const liveImage = document.querySelector('.live-image');
  liveImage.style.transition = '2s all';
  liveImage.style.transform = 'translatex(0px)';
}
// Live Image End
// Scroll Trending
const scrollbar = document.querySelector('.scrollbar input');
const komikSlide = document.querySelector('.komik-trending');
const scroll = document.querySelector('.scroll');
if (window.matchMedia('(min-width:768px)').matches) {
  scrollbar.addEventListener('input', function slideKomik() {
    const s = scrollbar.value;
    const hasil = s * 6.4;
    const result = s * 4.8;
    console.log(hasil);
    komikSlide.style.transform = 'translatex(-' + hasil + 'px)';
    scroll.style.transform = 'translatex(' + result + 'px)';
  });
}

if (window.matchMedia('(max-width:768px)').matches) {
  scrollbar.addEventListener('input', function slideKomik() {
    const s = scrollbar.value;
    const hasil = s * 7.12;
    const result = s * 3.35;
    console.log(hasil);
    komikSlide.style.transform = 'translatex(-' + hasil + 'px)';
    scroll.style.transform = 'translatex(' + result + 'px)';
  });
}
// Scroll trending End
