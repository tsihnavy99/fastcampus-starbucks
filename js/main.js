const searchEl = document.querySelector('.search');
console.log(searchEl)
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', () => {
  searchInputEl.focus()
})

searchInputEl.addEventListener('focus', () => {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
})

searchInputEl.addEventListener('blur', () => {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
})


const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');
toTopEl.addEventListener('click', () => {
  gsap.to(window, .7, {
    scrollTo: 0
  })
})

window.addEventListener('scroll', _.throttle(() => {
  if(window.scrollY > 500) {
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    })
    gsap.to(toTopEl, .2, {
      x: 0
    })
  } else {
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    })
    gsap.to(toTopEl, .2, {  // CSS 선택자를 직접적으로 입력해줘도 됨
      x: 100
    })
  }
}, 300))
// _.throttle(함수, 시간) > 지정 시간동안에는 한 번만 실행되도록
// gsap.to(요소, 지속시간, 옵션) > 애니메이션, 옵션에는 css 속성과 값 입력



const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach((fadeEl, idx) => {
  gsap.to(fadeEl, 1, {
    delay: (idx+1) * .7,
    opacity: 1
  })
});


// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

new Swiper('.promotion .swiper', {
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데
  loop: true,
  autoplay: {
    delay: 5000 // 5초에 한 번씩 자동 슬라이드
  },
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
}) 

new Swiper('.awards .swiper', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
})



const promotionEl = document.querySelector('.promotion');
const promotionToggleEl = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleEl.addEventListener('click', () => {
  isHidePromotion = !isHidePromotion;

  if(isHidePromotion) {
    promotionEl.classList.add('hide');
  } else {
    promotionEl.classList.remove('hide');
  }
})


const random = (min, max) => {
  return parseFloat((Math.random() * (max-min) + min).toFixed(2))
}
const floatingObject = (selector, delay, size) => {
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1, // 무한반복
    yoyo: true, // 한 번 재생된 애니메이션 되감기
    ease: Power1.easeInOut, // https://greensock.com/docs/v2/Easing 참고
    delay: random(0, delay)
  });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);



const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach((spyEl) => {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소
      triggerHook: .8, // toggle함수를 실행할 요소의 위치(뷰포트상)
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
})



const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();