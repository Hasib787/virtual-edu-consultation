$(function () {
   'strict mode'

   /* Program Slider Start */
   $('.program_slider_container').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      loop: true,
      prevArrow: '<i class="fas fa-chevron-left slider_arrow slider_arrow_left"></i>',
      nextArrow: '<i class="fas fa-chevron-right slider_arrow slider_arrow_right"></i>',
      responsive: [
         {
           breakpoint: 993,
           settings: {
             slidesToShow: 3,
             slidesToScroll: 3,
             infinite: true,
             dots: true
           }
         },
         {
           breakpoint: 769,
           settings: {
             slidesToShow: 3,
             slidesToScroll: 3,
             infinite: true,
             dots: true
           }
         },
         {
           breakpoint: 577,
           settings: {
             slidesToShow: 3,
             slidesToScroll: 3,
             infinite: true,
             dots: true
           }
         },
       ]
   })
   /* //Program Slider End */

   /* Country Slider Start */
   $('.country_slider_container').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      loop: true,
      prevArrow: '<i class="fas fa-chevron-left slider_arrow slider_arrow_left"></i>',
      nextArrow: '<i class="fas fa-chevron-right slider_arrow slider_arrow_right"></i>'
   })
   /* Subject Slider Start */
   $('.subject_slider_container').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      loop: true,
      prevArrow: '<i class="fas fa-chevron-left slider_arrow slider_arrow_left"></i>',
      nextArrow: '<i class="fas fa-chevron-right slider_arrow slider_arrow_right"></i>'
   })
   /* //Subject Slider End */

   /* Blog Slider Start */
   $('.blog_slider_container').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      loop: true,
      arrows: false,
      prevArrow: '<i class="fas fa-chevron-left slider_arrow slider_arrow_left"></i>',
      nextArrow: '<i class="fas fa-chevron-right slider_arrow slider_arrow_right"></i>'
   })
   /* //Blog Slider End */

   /* Brand Slider Start */
   $('.brand_slider_container').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      loop: true,
      arrows: false,
      prevArrow: '<i class="fas fa-chevron-left slider_arrow slider_arrow_left"></i>',
      nextArrow: '<i class="fas fa-chevron-right slider_arrow slider_arrow_right"></i>'
   })
   /* //Brand Slider End */

   /* Testimonial Slider Start */
   $('.testimonial_slider_container').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      loop: true,
      arrows: false,
      dots: true,
      dotsClass:'testi_dots',
      prevArrow: '<i class="fas fa-chevron-left slider_arrow slider_arrow_left"></i>',
      nextArrow: '<i class="fas fa-chevron-right slider_arrow slider_arrow_right"></i>'
   })
   /* //Testimonial Slider End */
})