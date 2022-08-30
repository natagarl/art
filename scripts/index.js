'use strict';

/////////////////////////////////////////////////////////////////////////////////////////////////
// photogrid

const photogrid = document.querySelector('.photo-grid');

const gridLaptop = `
  <div class="photo-grid__column">
    <img src="./img/works/no-strength-natagarl-2022-thumb.jpg" data-src="./img/works/no-strength-natagarl-2022.jpg" alt=" " class="photo-grid__item">
    <img src="./img/works/pain-natagarl-2022-thumb.jpg" data-src="./img/works/pain-natagarl-2022.jpg" alt=" " class="photo-grid__item">
    <img src="./img/works/two-sad-years-natagarl-2022-thumb.jpg" data-src="./img/works/two-sad-years-natagarl-2022.jpg" alt=" " class="photo-grid__item">
    <img src="./img/works/warsaw-minsk-natagarl-2022-thumb.jpg" data-src="./img/works/warsaw-minsk-natagarl-2022.jpg" alt=" " class="photo-grid__item">
  </div>

  <div class="photo-grid__column">
    <img src="./img/works/belarus-and-ukraine-natagarl-2022-thumb.jpg" data-src="./img/works/belarus-and-ukraine-natagarl-2022.jpg" alt=" " class="photo-grid__item">
    <img src="./img/works/belarusians-natagarl-2022-thumb.jpg" data-src="./img/works/belarusians-natagarl-2022.jpg" alt=" " class="photo-grid__item">
    <img src="./img/works/sitting-but-doing-so-much-natagarl-2022-thumb.jpg" data-src="./img/works/sitting-but-doing-so-much-natagarl-2022.jpg" alt=" " class="photo-grid__item">
    <img src="./img/works/ordinary-day-in-the-minsk-office-natagarl-2021-thumb.jpg" data-src="./img/works/ordinary-day-in-the-minsk-office-natagarl-2021.jpg" alt=" " class="photo-grid__item">
  </div>

  <div class="photo-grid__column">
    <img src="./img/works/belarusian-language-natagarl-2022-thumb.jpg" data-src="./img/works/belarusian-language-natagarl-2022.jpg" alt=" " class="photo-grid__item">
    <img src="./img/works/coffee-and-croissant-natagarl-2022-thumb.jpg" data-src="./img/works/coffee-and-croissant-natagarl-2022.jpg" alt=" " class="photo-grid__item">
    <img src="./img/works/sea-of-people-natagarl-2021-thumb.jpg" data-src="./img/works/sea-of-people-natagarl-2021.jpg" alt=" " class="photo-grid__item">
    <img src="./img/works/reminder-natagarl-2022-thumb.jpg" data-src="./img/works/reminder-natagarl-2022.jpg" alt=" " class="photo-grid__item">
  </div>

  <div class="photo-grid__column">
    <img src="./img/works/warming-memories-natagarl-2022-thumb.jpg" data-src="./img/works/warming-memories-natagarl-2022.jpg" alt=" " class="photo-grid__item">
    <img src="./img/works/history-natagarl-2022-thumb.jpg" data-src="./img/works/history-natagarl-2022.jpg" alt=" " class="photo-grid__item">
    <img src="./img/works/home-natagarl-2022-thumb.jpg" data-src="./img/works/home-natagarl-2022.jpg" alt=" " class="photo-grid__item">
    <img src="./img/works/posters-natagarl-2021-thumb.jpg" data-src="./img/works/posters-natagarl-2021.jpg" alt=" " class="photo-grid__item">
  </div>

  <div class="photo-grid__column">
    <img src="./img/works/ideas-natagarl-2022-thumb.jpg" data-src="./img/works/ideas-natagarl-2022.jpg" alt=" " class="photo-grid__item">
    <img src="./img/works/flag-natagarl-2022-thumb.jpg" data-src="./img/works/flag-natagarl-2022.jpg" alt=" " class="photo-grid__item">
    <img src="./img/works/free-independence-avenue-natagarl-2021-thumb.jpg" data-src="./img/works/free-independence-avenue-natagarl-2021.jpg" alt=" " class="photo-grid__item">
  </div>
`;

const gridTablet = `
  <div class="photo-grid__column">
    <img src="./img/works/no-strength-natagarl-2022-thumb.jpg" data-src="./img/works/no-strength-natagarl-2022.jpg" alt=" " class="photo-grid__item">
    <img src="./img/works/pain-natagarl-2022-thumb.jpg" data-src="./img/works/pain-natagarl-2022.jpg" alt=" " class="photo-grid__item">
    <img src="./img/works/two-sad-years-natagarl-2022-thumb.jpg" data-src="./img/works/two-sad-years-natagarl-2022.jpg" alt=" " class="photo-grid__item">
    <img src="./img/works/ideas-natagarl-2022-thumb.jpg" data-src="./img/works/ideas-natagarl-2022.jpg" alt=" " class="photo-grid__item">
    <img src="./img/works/warsaw-minsk-natagarl-2022-thumb.jpg" data-src="./img/works/warsaw-minsk-natagarl-2022.jpg" alt=" " class="photo-grid__item">
  </div>

  <div class="photo-grid__column">
    <img src="./img/works/belarus-and-ukraine-natagarl-2022-thumb.jpg" data-src="./img/works/belarus-and-ukraine-natagarl-2022.jpg" alt=" " class="photo-grid__item">
    <img src="./img/works/belarusians-natagarl-2022-thumb.jpg" data-src="./img/works/belarusians-natagarl-2022.jpg" alt=" " class="photo-grid__item">
    <img src="./img/works/sitting-but-doing-so-much-natagarl-2022-thumb.jpg" data-src="./img/works/sitting-but-doing-so-much-natagarl-2022.jpg" alt=" " class="photo-grid__item">
    <img src="./img/works/ordinary-day-in-the-minsk-office-natagarl-2021-thumb.jpg" data-src="./img/works/ordinary-day-in-the-minsk-office-natagarl-2021.jpg" alt=" " class="photo-grid__item">
    <img src="./img/works/flag-natagarl-2022-thumb.jpg" data-src="./img/works/flag-natagarl-2022.jpg" alt=" " class="photo-grid__item">
  </div>

  <div class="photo-grid__column">
    <img src="./img/works/belarusian-language-natagarl-2022-thumb.jpg" data-src="./img/works/belarusian-language-natagarl-2022.jpg" alt=" " class="photo-grid__item">
    <img src="./img/works/coffee-and-croissant-natagarl-2022-thumb.jpg" data-src="./img/works/coffee-and-croissant-natagarl-2022.jpg" alt=" " class="photo-grid__item">
    <img src="./img/works/sea-of-people-natagarl-2021-thumb.jpg" data-src="./img/works/sea-of-people-natagarl-2021.jpg" alt=" " class="photo-grid__item">
    <img src="./img/works/free-independence-avenue-natagarl-2021-thumb.jpg" data-src="./img/works/free-independence-avenue-natagarl-2021.jpg" alt=" " class="photo-grid__item">
    <img src="./img/works/reminder-natagarl-2022-thumb.jpg" data-src="./img/works/reminder-natagarl-2022.jpg" alt=" " class="photo-grid__item">
  </div>

  <div class="photo-grid__column">
    <img src="./img/works/warming-memories-natagarl-2022-thumb.jpg" data-src="./img/works/warming-memories-natagarl-2022.jpg" alt=" " class="photo-grid__item">
    <img src="./img/works/history-natagarl-2022-thumb.jpg" data-src="./img/works/history-natagarl-2022.jpg" alt=" " class="photo-grid__item">
    <img src="./img/works/home-natagarl-2022-thumb.jpg" data-src="./img/works/home-natagarl-2022.jpg" alt=" " class="photo-grid__item">
    <img src="./img/works/posters-natagarl-2021-thumb.jpg" data-src="./img/works/posters-natagarl-2021.jpg" alt=" " class="photo-grid__item">
  </div>
`;

const gridMobileM = `
  <div class="photo-grid__column">
    <img src="./img/works/no-strength-natagarl-2022-thumb.jpg" data-src="./img/works/no-strength-natagarl-2022.jpg" alt=" " class="photo-grid__item">
    <img src="./img/works/pain-natagarl-2022-thumb.jpg" data-src="./img/works/pain-natagarl-2022.jpg" alt=" " class="photo-grid__item">
    <img src="./img/works/two-sad-years-natagarl-2022-thumb.jpg" data-src="./img/works/two-sad-years-natagarl-2022.jpg" alt=" " class="photo-grid__item">
    <img src="./img/works/warsaw-minsk-natagarl-2022-thumb.jpg" data-src="./img/works/warsaw-minsk-natagarl-2022.jpg" alt=" " class="photo-grid__item">
    <img src="./img/works/history-natagarl-2022-thumb.jpg" data-src="./img/works/history-natagarl-2022.jpg" alt=" " class="photo-grid__item">
    <img src="./img/works/flag-natagarl-2022-thumb.jpg" data-src="./img/works/flag-natagarl-2022.jpg" alt=" " class="photo-grid__item">
    <img src="./img/works/warming-memories-natagarl-2022-thumb.jpg" data-src="./img/works/warming-memories-natagarl-2022.jpg" alt=" " class="photo-grid__item">
  </div>

  <div class="photo-grid__column">
    <img src="./img/works/belarus-and-ukraine-natagarl-2022-thumb.jpg" data-src="./img/works/belarus-and-ukraine-natagarl-2022.jpg" alt=" " class="photo-grid__item">
    <img src="./img/works/belarusians-natagarl-2022-thumb.jpg" data-src="./img/works/belarusians-natagarl-2022.jpg" alt=" " class="photo-grid__item">
    <img src="./img/works/sitting-but-doing-so-much-natagarl-2022-thumb.jpg" data-src="./img/works/sitting-but-doing-so-much-natagarl-2022.jpg" alt=" " class="photo-grid__item">
    <img src="./img/works/ordinary-day-in-the-minsk-office-natagarl-2021-thumb.jpg" data-src="./img/works/ordinary-day-in-the-minsk-office-natagarl-2021.jpg" alt=" " class="photo-grid__item">
    <img src="./img/works/home-natagarl-2022-thumb.jpg" data-src="./img/works/home-natagarl-2022.jpg" alt=" " class="photo-grid__item">
    <img src="./img/works/posters-natagarl-2021-thumb.jpg" data-src="./img/works/posters-natagarl-2021.jpg" alt=" " class="photo-grid__item">
  </div>

  <div class="photo-grid__column">
    <img src="./img/works/belarusian-language-natagarl-2022-thumb.jpg" data-src="./img/works/belarusian-language-natagarl-2022.jpg" alt=" " class="photo-grid__item">
    <img src="./img/works/coffee-and-croissant-natagarl-2022-thumb.jpg" data-src="./img/works/coffee-and-croissant-natagarl-2022.jpg" alt=" " class="photo-grid__item">
    <img src="./img/works/ideas-natagarl-2022-thumb.jpg" data-src="./img/works/ideas-natagarl-2022.jpg" alt=" " class="photo-grid__item">
    <img src="./img/works/sea-of-people-natagarl-2021-thumb.jpg" data-src="./img/works/sea-of-people-natagarl-2021.jpg" alt=" " class="photo-grid__item">
    <img src="./img/works/free-independence-avenue-natagarl-2021-thumb.jpg" data-src="./img/works/free-independence-avenue-natagarl-2021.jpg" alt=" " class="photo-grid__item">
    <img src="./img/works/reminder-natagarl-2022-thumb.jpg" data-src="./img/works/reminder-natagarl-2022.jpg" alt=" " class="photo-grid__item">
  </div>
`;


const gridMobileS = `
  <div class="photo-grid__column">
    <img src="./img/works/no-strength-natagarl-2022-thumb.jpg" data-src="./img/works/no-strength-natagarl-2022.jpg" alt=" " class="photo-grid__item">
    <img src="./img/works/pain-natagarl-2022-thumb.jpg" data-src="./img/works/pain-natagarl-2022.jpg" alt=" " class="photo-grid__item">
    <img src="./img/works/two-sad-years-natagarl-2022-thumb.jpg" data-src="./img/works/two-sad-years-natagarl-2022.jpg" alt=" " class="photo-grid__item">
    <img src="./img/works/warming-memories-natagarl-2022-thumb.jpg" data-src="./img/works/warming-memories-natagarl-2022.jpg" alt=" " class="photo-grid__item">
    <img src="./img/works/sitting-but-doing-so-much-natagarl-2022-thumb.jpg" data-src="./img/works/sitting-but-doing-so-much-natagarl-2022.jpg" alt=" " class="photo-grid__item">
    <img src="./img/works/history-natagarl-2022-thumb.jpg" data-src="./img/works/history-natagarl-2022.jpg" alt=" " class="photo-grid__item">
    <img src="./img/works/warsaw-minsk-natagarl-2022-thumb.jpg" data-src="./img/works/warsaw-minsk-natagarl-2022.jpg" alt=" " class="photo-grid__item">
    <img src="./img/works/sea-of-people-natagarl-2021-thumb.jpg" data-src="./img/works/sea-of-people-natagarl-2021.jpg" alt=" " class="photo-grid__item">
    <img src="./img/works/free-independence-avenue-natagarl-2021-thumb.jpg" data-src="./img/works/free-independence-avenue-natagarl-2021.jpg" alt=" " class="photo-grid__item">
    <img src="./img/works/flag-natagarl-2022-thumb.jpg" data-src="./img/works/flag-natagarl-2022.jpg" alt=" " class="photo-grid__item">
  </div>

  <div class="photo-grid__column">
    <img src="./img/works/belarus-and-ukraine-natagarl-2022-thumb.jpg" data-src="./img/works/belarus-and-ukraine-natagarl-2022.jpg" alt=" " class="photo-grid__item">
    <img src="./img/works/belarusians-natagarl-2022-thumb.jpg" data-src="./img/works/belarusians-natagarl-2022.jpg" alt=" " class="photo-grid__item">
    <img src="./img/works/belarusian-language-natagarl-2022-thumb.jpg" data-src="./img/works/belarusian-language-natagarl-2022.jpg" alt=" " class="photo-grid__item">
    <img src="./img/works/coffee-and-croissant-natagarl-2022-thumb.jpg" data-src="./img/works/coffee-and-croissant-natagarl-2022.jpg" alt=" " class="photo-grid__item">
    <img src="./img/works/ordinary-day-in-the-minsk-office-natagarl-2021-thumb.jpg" data-src="./img/works/ordinary-day-in-the-minsk-office-natagarl-2021.jpg" alt=" " class="photo-grid__item">
    <img src="./img/works/ideas-natagarl-2022-thumb.jpg" data-src="./img/works/ideas-natagarl-2022.jpg" alt=" " class="photo-grid__item">
    <img src="./img/works/home-natagarl-2022-thumb.jpg" data-src="./img/works/home-natagarl-2022.jpg" alt=" " class="photo-grid__item">
    <img src="./img/works/posters-natagarl-2021-thumb.jpg" data-src="./img/works/posters-natagarl-2021.jpg" alt=" " class="photo-grid__item">
    <img src="./img/works/reminder-natagarl-2022-thumb.jpg" data-src="./img/works/reminder-natagarl-2022.jpg" alt=" " class="photo-grid__item">
  </div>
`;

const gridMobileXS = `
    <div class="photo-grid__column">
      <img src="./img/works/no-strength-natagarl-2022-thumb.jpg" data-src="./img/works/no-strength-natagarl-2022.jpg" alt=" " class="photo-grid__item">
      <img src="./img/works/belarusians-natagarl-2022-thumb.jpg" data-src="./img/works/belarusians-natagarl-2022.jpg" alt=" " class="photo-grid__item">
      <img src="./img/works/belarusian-language-natagarl-2022-thumb.jpg" data-src="./img/works/belarusian-language-natagarl-2022.jpg" alt=" " class="photo-grid__item">
      <img src="./img/works/sitting-but-doing-so-much-natagarl-2022-thumb.jpg" data-src="./img/works/sitting-but-doing-so-much-natagarl-2022.jpg" alt=" " class="photo-grid__item">
      <img src="./img/works/belarus-and-ukraine-natagarl-2022-thumb.jpg" data-src="./img/works/belarus-and-ukraine-natagarl-2022.jpg" alt=" " class="photo-grid__item">
      <img src="./img/works/coffee-and-croissant-natagarl-2022-thumb.jpg" data-src="./img/works/coffee-and-croissant-natagarl-2022.jpg" alt=" " class="photo-grid__item">
      <img src="./img/works/warming-memories-natagarl-2022-thumb.jpg" data-src="./img/works/warming-memories-natagarl-2022.jpg" alt=" " class="photo-grid__item">
      <img src="./img/works/ideas-natagarl-2022-thumb.jpg" data-src="./img/works/ideas-natagarl-2022.jpg" alt=" " class="photo-grid__item">
      <img src="./img/works/history-natagarl-2022-thumb.jpg" data-src="./img/works/history-natagarl-2022.jpg" alt=" " class="photo-grid__item">
      <img src="./img/works/warsaw-minsk-natagarl-2022-thumb.jpg" data-src="./img/works/warsaw-minsk-natagarl-2022.jpg" alt=" " class="photo-grid__item">
      <img src="./img/works/pain-natagarl-2022-thumb.jpg" data-src="./img/works/pain-natagarl-2022.jpg" alt=" " class="photo-grid__item">
      <img src="./img/works/ordinary-day-in-the-minsk-office-natagarl-2021-thumb.jpg" data-src="./img/works/ordinary-day-in-the-minsk-office-natagarl-2021.jpg" alt=" " class="photo-grid__item">
      <img src="./img/works/home-natagarl-2022-thumb.jpg" data-src="./img/works/home-natagarl-2022.jpg" alt=" " class="photo-grid__item">
      <img src="./img/works/reminder-natagarl-2022-thumb.jpg" data-src="./img/works/reminder-natagarl-2022.jpg" alt=" " class="photo-grid__item">
      <img src="./img/works/sea-of-people-natagarl-2021-thumb.jpg" data-src="./img/works/sea-of-people-natagarl-2021.jpg" alt=" " class="photo-grid__item">
      <img src="./img/works/free-independence-avenue-natagarl-2021-thumb.jpg" data-src="./img/works/free-independence-avenue-natagarl-2021.jpg" alt=" " class="photo-grid__item">
      <img src="./img/works/flag-natagarl-2022-thumb.jpg" data-src="./img/works/flag-natagarl-2022.jpg" alt=" " class="photo-grid__item">
      <img src="./img/works/posters-natagarl-2021-thumb.jpg" data-src="./img/works/posters-natagarl-2021.jpg" alt=" " class="photo-grid__item">
      <img src="./img/works/two-sad-years-natagarl-2022-thumb.jpg" data-src="./img/works/two-sad-years-natagarl-2022.jpg" alt=" " class="photo-grid__item">
    </div>
`;

const laptop = window.matchMedia('screen and (min-width: 1024px)');
const tablet = window.matchMedia('screen and (min-width: 767px)');
const mobileM = window.matchMedia('screen and (min-width: 540px)');
const mobileS = window.matchMedia('screen and (min-width: 320px)');
const mobileXS = window.matchMedia('screen and (min-width: 0px');

function handleScreenChange() {
  if (laptop.matches) {
    photogrid.innerHTML = gridLaptop;
  } else if (tablet.matches) {
    photogrid.innerHTML = gridTablet;
  } else if (mobileM.matches) {
    photogrid.innerHTML = gridMobileM;
  } else if (mobileS.matches) {
    photogrid.innerHTML = gridMobileS;
  } else {
    photogrid.innerHTML = gridMobileXS;
  }
};

// function handleScreenChange() {
//   if (mobileXS.matches) photogrid.innerHTML = gridMobileXS;

//   if (mobileS.matches) {
//     photogrid.innerHTML = gridMobileS;
//   };

//   if (mobileM.matches) {
//     photogrid.innerHTML = gridMobileM;
//   };

//   if (tablet.matches) {
//     photogrid.innerHTML = gridTablet;
//   };

//   if (laptop.matches) {
//     photogrid.innerHTML = gridLaptop;
//   };
// };


laptop.addEventListener('change', handleScreenChange);
tablet.addEventListener('change', handleScreenChange);
mobileM.addEventListener('change', handleScreenChange);
mobileS.addEventListener('change', handleScreenChange);
mobileXS.addEventListener('change', handleScreenChange);


handleScreenChange(laptop);
handleScreenChange(tablet);
handleScreenChange(mobileM);
handleScreenChange(mobileS);
handleScreenChange(mobileXS);

/////////////////////////////////////////////////////////////////////////////////////////////////
// fullscreen


const fullScreen = document.querySelector('.fullscreen');
const imgItems = document.querySelectorAll('.photo-grid__item');
const fullScreenPictureContainer = document.querySelector('.fullscreen__picture-container');
const btnFullScreenEsc = document.querySelector('.fullscreen__esc');
const btnLeftArrow = document.querySelector('.fullscreen__arrow_left');
const btnRightArrow = document.querySelector('.fullscreen__arrow_right');


let currentImgInd;

function closeFullScreen() {
  fullScreen.classList.add('fullscreen_disabled');
};

function openPrevFullScreen () {
  if (currentImgInd === 0) {
    currentImgInd = imgItems.length - 1;
  } else {
    currentImgInd --;
  };
  fullScreenPictureContainer.innerHTML = `
    <img src="${imgItems[currentImgInd].dataset.src}" alt=" " class="fullscreen__picture">
  `;
};

function openNextFullScreen () {
  if (currentImgInd === imgItems.length - 1) {
    currentImgInd = 0;
  } else {
    currentImgInd ++;
  };
  fullScreenPictureContainer.innerHTML = `
    <img src="${imgItems[currentImgInd].dataset.src}" alt=" " class="fullscreen__picture">
  `;
};

imgItems.forEach((img, i) => img.addEventListener('click', function() {
  fullScreen.classList.remove('fullscreen_disabled');
  currentImgInd = i;
  fullScreenPictureContainer.innerHTML = `
    <img src="${img.dataset.src}" alt=" " class="fullscreen__picture">
  `;
}));


btnFullScreenEsc.addEventListener('click', closeFullScreen);
btnLeftArrow.addEventListener('click', openPrevFullScreen);
btnRightArrow.addEventListener('click', openNextFullScreen);


document.addEventListener('keydown', function(e) {
  if (!fullScreen.classList.contains('fullscreen_disabled')) {
    if (e.key === 'Escape') closeFullScreen();
    if (e.key === 'ArrowRight') openNextFullScreen();
    if (e.key === 'ArrowLeft') openPrevFullScreen();
  };
});
