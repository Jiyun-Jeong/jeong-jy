$(document).ready(function () {


    //cnt3 "swiper"
    var storySwiper = new Swiper('#cnt3 .swiper-container', {
        direction: 'vertical',
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
          clickable: true, //bullet 타입일 경우 버튼 클릭시 이동 가능함
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        a11y: {
          prevSlideMessage: '이전 슬라이드 보기',
          nextSlideMessage: '다음 슬라이드 보기',
          firstSlideMessage: '첫번째 슬라이드',
          lastSlideMessage: '마지막 슬라이드',
        },
      })

    //work page work1 "swiper"
    var work1Swiper = new Swiper('#work .gopro .swiper-container', {
        //direction: 'vertical',
        pagination: {
          el: '.swiper-pagination',
          //type: 'fraction',
          //clickable: true, //bullet 타입일 경우 버튼 클릭시 이동 가능함
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        slidesPerView: 'auto',
        a11y: {
            prevSlideMessage: '이전 슬라이드 보기',
            nextSlideMessage: '다음 슬라이드 보기',
          },
      })
    //work page work2 "swiper"
    var work2Swiper = new Swiper('#work .helinox .swiper-container', {
        pagination: {
          el: '.swiper-pagination',
          //clickable: true, //bullet 타입일 경우 버튼 클릭시 이동 가능함
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        slidesPerView: 'auto',
        a11y: {
            prevSlideMessage: '이전 슬라이드 보기',
            nextSlideMessage: '다음 슬라이드 보기',
          },
      })
    //work page work3 "swiper"
    var work3Swiper = new Swiper('#work .heyri .swiper-container', {
        pagination: {
          el: '.swiper-pagination',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        slidesPerView: 'auto',
        a11y: {
            prevSlideMessage: '이전 슬라이드 보기',
            nextSlideMessage: '다음 슬라이드 보기',
          },
      })

      //project1-GoPro page "swiper"
      var gopro7Swiper = new Swiper('#gopro7 .swiper-container', {
        /* pagination: {
          el: '.swiper-pagination',
        }, */
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        slidesPerView: 'auto',
        a11y: {
            prevSlideMessage: '이전 슬라이드 보기',
            nextSlideMessage: '다음 슬라이드 보기',
          },
      })
});