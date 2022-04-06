import { gsap, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);


/**
* Программный код для для блока "НАШИ УСЛУГИ" на странице инвестирования
@class InvestmentOurServices
@constructor
@example
    let investmentOurServices = new InvestmentOurServices() {}
*/

const InvestmentOurServices = class InvestmentOurServices {
    constructor() {}
    /** 
    * Инициализирует работу скриптов в блоке "НАШИ УСЛУГИ" на странице инвестирования
    @method init
    @static
    @example
        // вызов
        app.investmentOurServices.init();
        // переопределение
        app.investmentOurServices.init = () => {// тут код}
    */
    init() {
        this.initAnimation();
    }
    /** 
    * Инициализирует анимацию при скролле в блоке "НАШИ УСЛУГИ" если на странице есть '.investment-our-services__item' и размер окна больше 1023px
    @method initAnimation
    @static
    @example
        // вызов
        app.investmentOurServices.initAnimation();
        // переопределение
        app.investmentOurServices.initAnimation = () => {// тут код}
    */
    initAnimation() {
        if (!document.querySelector('.investment-our-services__item') || window.innerWidth <= 1023) return;
        gsap.to('.investment-our-services__items', {
            scrollTrigger: {
                trigger: '.investment-our-services__items',
                start: 'top top',
                end: 'center top',
                onUpdate: (item) => {
                    document.querySelectorAll('.investment-our-services__item-left').forEach(element => {
                        gsap.to(element, 2, {
                            y: -item.progress*12 + '%'
                        })
                    })
                    document.querySelectorAll('.investment-our-services__item-right').forEach(element => {
                        gsap.to(element, {
                            y: item.progress*12 + '%'
                        })
                    })
                    console.log(item);
                }
            },
            
        });
    }
}

export default InvestmentOurServices;