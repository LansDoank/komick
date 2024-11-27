const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('.navbar ul');

menuToggle.addEventListener('click', function () {
  nav.classList.toggle('slide');
});
// Telusuri End
// Live Image
if (window.matchMedia('(min-width:768px)').matches) {
  setTimeout(slideImage1, 5000);
  setTimeout(slideImage2, 10000);
  setTimeout(slideImage3, 15000);
  setInterval(slideImage, 15000);
}

if (window.matchMedia('(max-width:768px)').matches) {
  setTimeout(slideMobile1, 5000);
  setTimeout(slideMobile2, 10000);
  setTimeout(slideMobile3, 15000);
  setInterval(slideMobile, 15000);
}

function slideImage() {
  slideImage1;
  slideImage2;
  slideImage3;
  setTimeout(slideImage1, 5000);
  setTimeout(slideImage2, 10000);
  setTimeout(slideImage3, 15000);
  setInterval(slideImage, 15000);
  return slideImage;
}

function slideMobile() {
  slideMobile1;
  slideMobile2;
  slideMobile3;
  setTimeout(slideMobile1, 5000);
  setTimeout(slideMobile2, 10000);
  setTimeout(slideMobile3, 15000);
  setInterval(slideMobile, 15000);
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
// const scrollbar = document.querySelector('.scrollbar input');
// const komikSlide = document.querySelector('.komik-trending');
// const scroll = document.querySelector('.scroll');
// const Mobile = document.querySelector('header');
// if (window.matchMedia('(min-width:768px)').matches) {
//   scrollbar.addEventListener('input', function slideKomik() {
//     const s = scrollbar.value;
//     const hasil = s * 6.4;
//     const result = s * 4.8;
//     console.log(hasil);
//     komikSlide.style.transform = 'translatex(-' + hasil + 'px)';
//     scroll.style.transform = 'translatex(' + result + 'px)';
//   });
// }

// if (window.matchMedia('(max-width:768px)').matches) {
//   scrollbar.addEventListener('input', function slideKomik() {
//     const s = scrollbar.value;
//     const width = scrollbar.clientWidth;
//     const widthMbl = komikSlide.clientWidth;
//     const result = (s * width) / 130;
//     const geser = s * 9.5;
//     console.log(geser);
//     komikSlide.style.transform = 'translatex(-' + geser + 'px)';
//     scroll.style.transform = 'translatex(' + result + 'px)';
//   });
// }
// Scroll trending End
