import Glide from '@glidejs/glide'
import gsap from 'gsap';
 
/**
* Программный код для блока "ОБЪЕКТЫ РЯДОМ"
@class ObjectNearby
@constructor
@example
    let objectNearby = new ObjectNearby() {}
*/

const ObjectNearby = class ObjectNearby {
    constructor() {

        /**
        @property slider
        @type Object
        @default new Glide('.object-nearby__middle.glide', { perView: 2, type: 'slider', gap: 20, startAt: 1, breakpoints: { 600: { perView: 1, gap: 0, startAt: 0, } } })
        @example
            app.investmentFirstSlider.slider = new Glide('.object-nearby__middle.glide', {
                perView: 2,
                type: 'slider',
                gap: 20,
                startAt: 1,
                breakpoints: {
                    600: {
                        perView: 1,
                        gap: 0,
                        startAt: 0,
                    }
                }
            })
            // Передаваемые опции тут https://glidejs.com/docs/options/
        */
        if (document.querySelector('.object-nearby__middle.glide')) {
            this.slider = new Glide('.object-nearby__middle.glide', {
                perView: 2,
                type: 'slider',
                gap: 20,
                startAt: 1,
                breakpoints: {
                    600: {
                        perView: 1,
                        gap: 0,
                        startAt: 0,
                    }
                }
            })
        } else {
            this.slider = "";
        }
        setTimeout(() => {
            this.toggleSliderOnWindowResize();
        }, 500);
    }
    /** 
    * Монтирует слайдер
    @method mountSlider
    @static
    @example
        // вызов
        app.objectNearby.mountSlider();
        // переопределение
        app.objectNearby.mountSlider = () => {// тут код}
    */
    mountSlider() {
        console.log(this.slider);
        if (this.slider != "") {
            this.slider.mount();
        }
    }
    /** 
    * Размонтирует слайдер
    @method unmountSlider
    @static
    @example
        // вызов
        app.objectNearby.unmountSlider();
        // переопределение
        app.objectNearby.unmountSlider = () => {// тут код}
    */
    unmountSlider() {
        if (this.slider != "") {
            this.slider.destroy();
        }
    }
    /** 
    * при window.innerWidth > 1023 размонтирует слайдер ( app.objectNearby.unmountSlider(); ) иначе монтирует слайдер ( app.objectNearby.mountSlider(); )
    @method toggleSliderOnWindowResize
    @static
    @example
        // вызов
        app.objectNearby.toggleSliderOnWindowResize();
        // переопределение
        app.objectNearby.toggleSliderOnWindowResize = () => {// тут код}
    */
    toggleSliderOnWindowResize() {
        if (window.innerWidth > 1023 && this.slider.index) {
            this.unmountSlider();
        } else {
            this.mountSlider();
        }
        window.addEventListener('resize', () => {
            if (window.innerWidth > 1023 && this.slider.index) {
                this.unmountSlider();
            } else {
                this.mountSlider();
            }
        })

        if (window.innerWidth > 1023 && document.querySelector('.object-nearby__slides') && document.querySelector('.object-nearby__bottom .button')) {
            let startHeight = document.querySelector('.object-nearby__slides').offsetHeight;
            console.log(startHeight);
            document.querySelector('.object-nearby__slides').style.height = document.querySelector('.object-nearby__slides .unique-offers__item').offsetHeight + 'px';
            console.log('height', document.querySelector('.object-nearby__slides .unique-offers__item').offsetHeight + 'px');

            document.querySelector('.object-nearby__bottom .button').addEventListener('click', (event) => {
                event.preventDefault();
                gsap.to('.object-nearby__slides', {
                    height: startHeight
                })
                document.querySelector('.object-nearby__bottom').style.display = 'none';
            })
        } 
    }
}

 export default ObjectNearby;