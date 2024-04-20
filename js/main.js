$(function(){
    $('.bike-slider, .slider__items').slick({
        arrows: false, /* кнопки пред. и след. */ 
        dots: true, /* кнопки пункты списка */ 
        fade:true, /* анимация плавного переключения */ 
        autoplay: true, /* автоматическая смена слайда */ 
        autoplaySpeed: 2000,
    });
});