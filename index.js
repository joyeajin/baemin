const img = document.querySelectorAll('.three-img img');
const imgSlide6 = document.querySelector('.bike-img img');
const bikeImg = document.querySelector('.bike');
const appDownload = document.querySelector('.app-download');
const pagination = document.querySelector('.swiper-pagination');
const rider = document.querySelector('.rider a img');

var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 0,
  mousewheel: true,
  speed : 700,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

swiper.on('slideChange', function () {

  const index = swiper.snapIndex
  
  if(index==2){
    img[0].classList.add('active')
  }else if(index==3){
    img[1].classList.add('active')
  }else if(index==4){
    img[2].classList.add('active')
  }else if(index==6){
    img[4].classList.add('active')
  }else if(index==5){
    imgSlide6.classList.add('active')
  }else if(index==1){
    bikeImg.classList.add('active')
  }
  
  if(index==1){
    rider.classList.add('active')
  }else if(index==0){
    rider.classList.remove('active')
  }

  if(index==0 || index==7){
    appDownload.style.opacity = 0
  }else{
    appDownload.style.opacity = 1
  }

  if(index==0 || index==7){
    pagination.style.opacity = 0
  }else{
    pagination.style.opacity = 1
  }
});