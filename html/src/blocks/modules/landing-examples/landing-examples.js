import Swiper, { Navigation, EffectFade, Pagination, Autoplay } from 'swiper';

const Examples = class Examples {
    constructor() {
        this.outerSlider = document.querySelector('.landing-examples__outer-slider');
        this.innerSlider = document.querySelector('.landing-examples__inner-slider');
    }

    init() {
        this.initOuterSlider();
        this.initInnerSlider();
    }

    initOuterSlider() {
        if (this.outerSlider) {
            new Swiper('.landing-examples-outer-slider', {
                modules: [Navigation, EffectFade, Pagination],
                speed: 1000,
                slidesPerView: 1,
                allowTouchMove: false,
                effect: 'fade',
                fadeEffect: {
                    crossFade: true
                },
                pagination: {
                    el: '.landing-examples-outer-slider__counter',
                    type: 'fraction',
                },
                navigation: {
                    prevEl: '.landing-examples-outer-slider__button--prev',
                    nextEl: '.landing-examples-outer-slider__button--next',
                },
            })
        }
    }

    initInnerSlider() {
        if (this.innerSlider) {
            new Swiper('.landing-examples__inner-slider', {
                modules: [Pagination, Autoplay],
                loop: true,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
                allowTouchMove: true,
                pagination: {
                    el: '.landing-examples-inner-slider__pagination',
                    clickable: true,
                    bulletClass: 'landing-examples-inner-slider__dot',
                    bulletActiveClass: 'landing-examples-inner-slider__dot--active'
                },
            })
        }
    }
}

export default Examples;