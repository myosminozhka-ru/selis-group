import gsap from 'gsap';

/**
* Программный код для мобильного фильтра
@class MobileFilter
@constructor
@example
    let mobileFilter = new MobileFilter() {}
*/

const mobileFilter = class MobileFilter {
    constructor() {}
    /** 
    * Показывает/Скрывает '.mobile-filter__in' при клике на '.mobile-filter__opener' анимируя высоту
    @method toggleFilter
    @static
    @example
        // вызов
        app.mobileFilter.toggleFilter();
        // переопределение
        app.mobileFilter.toggleFilter = () => {// тут код}
    */
    toggleFilter() {
        if (!document.querySelector('.mobile-filter')) return;
        document.querySelector('.mobile-filter__opener').addEventListener('click', () => {
            document.querySelector('.mobile-filter__opener').classList.toggle('isOpened');

            if (document.querySelector('.mobile-filter__opener').classList.contains('isOpened')) {
                gsap.to('.mobile-filter__in', {
                    height: 'auto'
                })
            } else {
                gsap.to('.mobile-filter__in', {
                    height: 0
                })
            }
        })
    }
    /** 
    * Показывает/Скрывает скрытые поля фильтра ('.mobile-filter__form-item' c аттрибутом data-hidden="true") анимируя высоту
    @method toggleMore
    @static
    @example
        // вызов
        app.mobileFilter.toggleMore();
        // переопределение
        app.mobileFilter.toggleMore = () => {// тут код}
    */
    toggleMore() {
        if (!document.querySelector('.mobile-filter__form-item[data-hidden="true"]')) return;
        document.querySelector('.mobile-filter .main-filter__more').addEventListener('click', () => {
            document.querySelector('.mobile-filter .main-filter__more').classList.toggle('isOpened');
            if (document.querySelector('.mobile-filter .main-filter__more').classList.contains('isOpened')) {
                gsap.to('.mobile-filter__form-item[data-hidden="true"]', {
                    height: 'auto'
                })
            } else {
                gsap.to('.mobile-filter__form-item[data-hidden="true"]', {
                    height: 0
                })
            }
        })
    }
    /** 
    * инициализирует работу скриптов мобильного фильтра
    @method init
    @static
    @example
        // вызов
        app.mobileFilter.init();
        // переопределение
        app.mobileFilter.init = () => {// тут код}
    */
    init() {
        this.toggleFilter();
        this.toggleMore();
    }
}

export default mobileFilter;
