import gsap from "gsap";

/**
* Программный код для блока "ПРОГРАММЫ ОФОРМЛЕНИЯ ВНЖ И ПМЖ" на странице landing
@class Programms
@constructor
@example
    let landingProgramms = new Programms() {}
*/

const Programms = class Programms {
    constructor() {}
    /** 
    * Инициализирует работу скриптов в блокe "ПРОГРАММЫ ОФОРМЛЕНИЯ ВНЖ И ПМЖ" на странице landing
    * Добавляет обработчик события click на каждый '.landing-programms__item-trigger' передавая его же как параметр в  app.landingProgramms.toggleItem(item)
    @method init
    @static
    @example
        // вызов
        app.landingProgramms.init();
        // переопределение
        app.landingProgramms.init = () => {// тут код}
    */
    init() {
        if (!document.querySelector('.landing-programms__item-trigger')) return;
        document.querySelectorAll('.landing-programms__item-trigger').forEach(item => {
            item.addEventListener('click', (event) => {
                this.toggleItem(item)
            });
        })
    }
    /** 
    * Добавляет/Удаляет ближайшему родителю с классом '.landing-programms__item' переданного элемента класс 'isOpened' и анимирует высоту
    @method toggleItem
    @static
    @example
        // вызов
        document.querySelectorAll('.landing-programms__item-trigger').forEach(item => {
            item.addEventListener('click', (event) => {
                this.toggleItem(item)
            });
        })
        // переопределение
        app.landingProgramms.toggleItem = (item) => {// тут код}
    */
    toggleItem(item) {
        console.log(item);
        item.closest('.landing-programms__item').classList.toggle('isOpened');
        if (item.closest('.landing-programms__item').classList.contains('isOpened')) {
            gsap.to(item.nextElementSibling, {
                height: 'auto'
            });
        } else {
            gsap.to(item.nextElementSibling, {
                height: 0
            });
        }
    }
}

export default Programms;