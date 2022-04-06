import NativejsSelect from 'nativejs-select';
import gsap from 'gsap';

/**
* Программный код для фильтра на главной
@class MainFilter
@constructor
@example
    let mainFilter = new MainFilter() {{
        isOpened: false
    }}
*/

const MainFilter = class MainFilter {
    constructor({ isOpened }) {
        /**
        * Маркер открытости/закрытости фильтра по умолчанию
        @property isOpened
        @type Boolean
        @default false
        @example
            app.mainFilter.isOpened = true;
        */
        this.isOpened = isOpened;
    }
    /** 
    * Открывает/Закрывает фильтр
    @method toggleFilter
    @static
    @example
        // вызов
        app.mainFilter.toggleFilter();
        // переопределение
        app.mainFilter.toggleFilter = () => {// тут код}
    */
    toggleFilter() {
        this.isOpened = !this.isOpened;
    }
    /** 
    * Инициализирует 'nativejs-select' для '.main-filter__field select'
    @method initSelectStyler
    @static
    @example
        // вызов
        app.mainFilter.initSelectStyler();
        // переопределение
        app.mainFilter.initSelectStyler = () => {
            // тут код
            // например
            if (!document.querySelector('.main-filter__field')) return;
            new NativejsSelect({
                selector: '.main-filter__field select',
                disableMobile: true,
            });
        }
    */
    initSelectStyler() {
        if (!document.querySelector('.main-filter__field')) return;
        new NativejsSelect({
            selector: '.main-filter__field select',
            disableMobile: true,
        });
    }
    /** 
    * Инициализирует событие window.scrollTo через опеределенное количество времени (параметр delay)
    @method dispatchScroll
    @static
    @example
        // вызов
        app.mainFilter.dispatchScroll(1000);
        // переопределение
        app.mainFilter.dispatchScroll = (delay) => {// тут код}
    */
    dispatchScroll(delay) {
        setTimeout(() => {
            window.scrollTo({
                top: +window.scrollY
            })
        }, delay)
    }
    /** 
    * Показывает/Скрывает скрытые поля фильтра ('.main-filter__fields-in' c аттрибутом hidden) анимируя высоту
    @method toggleHiddenFields
    @static
    @example
        // вызов
        app.mainFilter.toggleHiddenFields();
        // переопределение
        app.mainFilter.toggleHiddenFields = () => {// тут код}
    */
    toggleHiddenFields() {
        if (!document.querySelector('.main-filter__fields-in[hidden]')) return;
        if (document.querySelector('.main-filter__fields-in[hidden]').classList.contains('isOpened')) {
            gsap.to('.main-filter__fields-in[hidden]', 0.5, {
                height: 0
            })
        } else {
            gsap.to('.main-filter__fields-in[hidden]', 0.5, {
                height: 'auto'
            })
        }
        document.querySelector('.main-filter__fields-in[hidden]').classList.toggle('isOpened');
        this.dispatchScroll(1000)
    }
    /** 
    * Высчитывает пересечение кнопки открытия фильтра с блоками и меняет градиент в ней
    @method changeFilterOpenerColor
    @static
    @example
        // вызов
        app.mainFilter.changeFilterOpenerColor();
        // переопределение
        app.mainFilter.changeFilterOpenerColor = () => {// тут код}
    */
    changeFilterOpenerColor() {
    if (!document.querySelector('.main-filter__opener') && window.innerWidth <= 1023 && CSS.supports("(-webkit-backdrop-filter: none) or (backdrop-filter: none)")) return;
        document.querySelectorAll('.scroll-section').forEach(section => {
            if (section.getBoundingClientRect().top < window.innerHeight) {
                let btnHeightDiff = 0;
                let wrapHeightDiff = window.innerHeight - section.getBoundingClientRect().top;
                if (document.querySelector('.main-filter__opener').classList.contains('isOpened')) {
                    btnHeightDiff = window.innerHeight - document.querySelector('.main-filter__fields').offsetHeight - section.getBoundingClientRect().top;
                } else {
                    btnHeightDiff = window.innerHeight - section.getBoundingClientRect().top;
                }
                let btnHeight = document.querySelector('.main-filter__opener').clientHeight;
                let wrapHeight = document.querySelector('.main-filter__fields').clientHeight;
                let btnGradientPercent = btnHeightDiff * 100 / btnHeight;
                let wrapGradientPercent = wrapHeightDiff * 100 / wrapHeight;
                switch (section.dataset.sectionColor) {
                    case 'dark':
                        gsap.to('.main-filter__opener', 0, {
                            background: `linear-gradient(to top, #fff 0%, #fff ${btnGradientPercent - 2}%, #FFBC19 ${btnGradientPercent}%, #FFBC19)`
                        })
                        gsap.to('.main-filter__fields', 0, {
                            background: `linear-gradient(to top, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) ${wrapGradientPercent - 5}%, rgba(0, 0, 0, 0.7) ${wrapGradientPercent}%, rgba(0, 0, 0, 0.7))`
                        })
                        break;
                    case 'light':
                        gsap.to('.main-filter__opener', 0, {
                            background: `linear-gradient(to top, #FFBC19 0%, #FFBC19 ${btnGradientPercent - 2}%, #fff ${btnGradientPercent}%, #fff)`
                        })
                        gsap.to('.main-filter__fields', 0, {
                            background: `linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.7) ${wrapGradientPercent - 5}%, rgba(255, 255, 255, 0.1) ${wrapGradientPercent}%, rgba(255, 255, 255, 0.1))`
                        })
                        break;
                    default:
                        console.log('some section on screen');
                }
            }
        })
    }
    /** 
    * инициализирует работу скриптов фильтра
    @method init
    @static
    @example
        // вызов
        app.mainFilter.init();
        // переопределение
        app.mainFilter.init = () => {// тут код}
    */
    init() {
        if (!document.querySelector('.main-filter__opener')) return;
        document.querySelector('.main-filter__opener').addEventListener('click', () => this.toggleFilter());
        this.initSelectStyler();
        this.changeFilterOpenerColor();
        window.addEventListener('scroll', () => {
            this.changeFilterOpenerColor();
        })
        if (document.querySelector('.main-filter__more')) {
            document.querySelector('.main-filter__more').addEventListener('click', () => {
                this.toggleHiddenFields()
            })
        }
    }
}

export default MainFilter;