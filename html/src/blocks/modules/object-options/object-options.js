import Glide from '@glidejs/glide'
import lightOrDarkImage from '@check-light-or-dark/image';
import {
    gsap,
    ScrollTrigger
} from "gsap/all";


gsap.registerPlugin(ScrollTrigger);

/**
* Программный код для описания карточки объекта
@class ObjectOptions
@constructor
@example
    let objectOptions = new ObjectOptions() {}
*/

const ObjectOptions = class ObjectOptions {
    constructor(sliderOptions = {
        perView: 1,
        gap: 0,
        type: 'carousel'
    }) {
        /**
        @property sliderOptions
        @type Object
        @default {perView: 1, gap: 0}
        @example
            app.objectOptions.sliderOptions = {
                perView: 1,
                autoplay: 2000,
            };
            // Передаваемые опции тут https://glidejs.com/docs/options/
        */
        this.sliderOptions = sliderOptions;
        if (document.querySelector('.object-options__item-slider_first')) {
            this.firstSlider = new Glide('.object-options__item-slider_first', this.sliderOptions)
        }
        if (document.querySelector('.object-options__item-slider_second')) {
            this.secondSlider = new Glide('.object-options__item-slider_second', this.sliderOptions)
        }
        if (document.querySelector('.object-options__item-slider_third')) {
            this.thirdSlider = new Glide('.object-options__item-slider_third', this.sliderOptions)
        }
    }
    /** 
    * Инициализирует работу скриптов в карточке объекта
    @method init
    @static
    @example
        // вызов
        app.objectOptions.init();
        // переопределение
        app.objectOptions.init = () => {// тут код}
    */
    init() {
        console.log('tratata');
        this.initSliders();
        this.initAnimation();
    }
    /** 
    * Инициализирует Анимацию
    @method initAnimation
    @static
    @example
        // вызов
        app.objectOptions.initAnimation();
        // переопределение
        app.objectOptions.initAnimation = () => {// тут код}
    */
    initAnimation() {
        if (!document.querySelector('.object-options__item') || window.innerWidth <= 1023) return;
        gsap.utils.toArray(".object-options__item").forEach((section, i) => {
            ScrollTrigger.create({
                trigger: section,
                start: "top top",
                end: `bottom top`,
                pin: true,
                pinSpacing: false,
                // markers: true
            });
        });
    }
    /** 
    * Инициализирует слайдеры
    @method initSliders
    @static
    @example
        // вызов
        app.objectOptions.initSliders();
        // переопределение
        app.objectOptions.initSliders = () => {// тут код}
    */
    initSliders() {
        if (this.firstSlider) {
            this.firstSlider.mount();
        }
        if (this.secondSlider) {
            this.secondSlider.mount();
        }
        if (this.thirdSlider) {
            this.thirdSlider.mount();
        }
    }
}


export default ObjectOptions;