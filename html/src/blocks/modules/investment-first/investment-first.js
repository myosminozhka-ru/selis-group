import Glide from '@glidejs/glide'

/**
* Программный код для первого блока страницы инвестирования
@class InvestmentFirstSlider
@constructor
@example
    let investmentFirstSlider = new InvestmentFirstSlider() {}
*/

const InvestmentFirstSlider = class InvestmentFirstSlider {
    constructor() {
        /**
        @property slider
        @type Object
        @default new Glide('.glide', { type: 'carousel', startAt: 0, perView: 1, gap: 0 })
        @example
            app.investmentFirstSlider.slider = new Glide('.glide', {
                type: 'carousel',
                startAt: 0,
                perView: 1,
                gap: 0
            })
            // Передаваемые опции тут https://glidejs.com/docs/options/
        */
        if (document.querySelector('.investment-first__right')) {
            this.slider = new Glide('.glide', {
                type: 'carousel',
                startAt: 0,
                perView: 1,
                gap: 0
            })
        }
    }
    /** 
    * Инициализирует слайдеры с передаными в sliderOptions параметрами на все найденные элементы с классом .object-options__item-slider.glide
    @method moveSlider
    @static
    @example
        // вызов
        app.investmentFirstSlider.moveSlider(=3);

        // Варианты параметров
        // > - Переключить вперед на один
        // < - Переключить назад на один
        // ={i} - Перейдите к {i} слайду (экв. '=1', перейдем ко второму слайду)
        // >> - Перемотка в конец (последний слайд)
        // << - Перемотка к началу (первый слайд)

        // переопределение
        app.investmentFirstSlider.moveSlider = () => {// тут код}
    */
    moveSlider(number) {
        if (!this.slider) return;
        this.slider.go(number);
    }
    /** 
    * Инициализирует слайдер если на странице есть '.investment-first__right'
    @method initSlider
    @static
    @example
        // вызов
        app.investmentFirstSlider.initSlider();
        // переопределение
        app.investmentFirstSlider.initSlider = () => {// тут код}
    */
    initSlider() {
        if (document.querySelector('.investment-first__right')) {
            this.slider.mount()
        }
    }
    /** 
    * Инициализирует работу скриптов в первом блока страницы инвестирования
    @method init
    @static
    @example
        // вызов
        app.investmentFirstSlider.init();
        // переопределение
        app.investmentFirstSlider.init = () => {// тут код}
    */
    init() {
        this.initSlider();
    }
}

export default InvestmentFirstSlider;