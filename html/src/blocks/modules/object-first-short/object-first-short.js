
import NativejsSelect from 'nativejs-select';
/**
* Программный код для первого блока страницы объекта недвижимости
@class ObjectFirst
@constructor
@example
    let objectFirst = new ObjectFirst() {}
*/
const ObjectFirst = class ObjectFirst {
    constructor() {}
    /** 
    * Инициализирует 'nativejs-select' для '.object-first__price-bottom select'
    @method initSelectStyler
    @static
    @example
        // вызов
        app.objectFirst.initSelectStyler();
        // переопределение
        app.objectFirst.initSelectStyler = () => {
            // тут код
            // например
            if (!document.querySelector('.object-first__price-bottom')) return;
            new NativejsSelect({
                selector: '.object-first__price-bottom select',
                disableMobile: true,
            });
        }
    */
    initSelectStyler() {
        if (!document.querySelector('.object-first__price-bottom')) return;
        new NativejsSelect({
            selector: '.object-first__price-bottom select',
            disableMobile: true,
        });
    }
    /** 
    * инициализирует работу скриптов первого блока страницы объекта недвижимости
    @method init
    @static
    @example
        // вызов
        app.objectFirst.init();
        // переопределение
        app.objectFirst.init = () => {// тут код}
    */
    init() {
        this.initSelectStyler();
    }
}
export default ObjectFirst;