import NativejsSelect from 'nativejs-select';

/**
* Программный код для сортировки каталога
@class PropertySort
@constructor
@example
    let propertySort = new PropertySort() {}
*/

const PropertySort = class PropertySort {
    constructor() {}

    /** 
    * Инициализирует 'nativejs-select' для '.property-sorting__right select'
    @method initSelectStyler
    @static
    @example
        // вызов
        app.propertySort.initSelectStyler();
        // переопределение
        app.propertySort.initSelectStyler = () => {
            // тут код
            // например
            if (!document.querySelector('.property-sorting__right')) return;
            new NativejsSelect({
                selector: '.property-sorting__right select',
                disableMobile: true,
            });
        }
    */
    initSelectStyler() {
        if (!document.querySelector('.property-sorting__right')) return;
        new NativejsSelect({
            selector: '.property-sorting__right select',
            disableMobile: true,
        });
    }
    /** 
    * инициализирует работу сортировки каталога
    @method init
    @static
    @example
        // вызов
        app.propertySort.init();
        // переопределение
        app.propertySort.init = () => {// тут код}
    */
    init() {
        this.initSelectStyler();
    }
}
export default PropertySort;