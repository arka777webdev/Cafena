$(function () {

   $('.user-nav__burger').on('click', function () { 
      $('.menu__list').toggleClass('menu__list--active');
   });

   
   $('.customer-slider__items').slick({

   prevArrow:'<button type="button" class="slick-arrow slick-prev"><img src="img/icons/arrow-slider-left.svg" alt="prev"></button>',
      nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="img/icons/arrow-slider-right.svg" alt="next"></button>',
      responsive: [
         {
            breakpoint: 425,
            settings: {
               arrows: false,
               dots: true,
               
            
            }
            }
         ]

   });

// var mixer = mixitup('.container');

// $("[data-fancybox]").fancybox();
  
   
   $(".stars").rateYo({
      starSvg: '<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.3256 15.0629C13.3933 15.0575 13.4552 15.0237 13.4959 14.9701C13.5365 14.9166 13.5521 14.8484 13.5385 14.7827L12.452 9.56824L16.432 5.9817H16.4319C16.5012 5.91995 16.5273 5.8237 16.4984 5.736C16.4697 5.64829 16.3915 5.58539 16.2985 5.57537L10.9427 4.98131L8.71875 0.136812L8.71891 0.136976C8.68031 0.0535408 8.59606 0 8.50326 0C8.41047 0 8.32621 0.0535408 8.28762 0.136976L6.06361 4.98147L0.707842 5.57553V5.57537C0.615047 5.58539 0.536867 5.64829 0.508125 5.736C0.479383 5.8237 0.505333 5.91995 0.574641 5.9817L4.55468 9.56824L3.46822 14.7827H3.46806C3.44868 14.8729 3.48464 14.966 3.55987 15.0204C3.63525 15.0749 3.73593 15.0805 3.81707 15.035L8.50347 12.4039L13.1899 15.035C13.2314 15.0575 13.2789 15.0674 13.326 15.0629H13.3256ZM12.9682 14.3708L8.61945 11.9304C8.54735 11.8901 8.45898 11.8901 8.38688 11.9304L4.03811 14.3708L5.04523 9.53473H5.04506C5.06214 9.45326 5.03406 9.36901 4.97132 9.31349L1.27786 5.98188L6.24807 5.43268C6.33085 5.42414 6.40312 5.37306 6.4381 5.29817L8.50325 0.79803L10.5684 5.29817C10.6034 5.37306 10.6757 5.42398 10.7584 5.43268L15.7286 5.98188L12.0352 9.31349C11.9725 9.36901 11.9444 9.45326 11.9614 9.53473L12.9686 14.3708H12.9682Z"fill="#EAB665"/></svg>',
      starWidth: '16px',
      spacing: '3px',
      ratedFill: 'EAB665'
   });
  
// $(".js-range-slider").ionRangeSlider();


});