import NativejsSelect from 'nativejs-select';

/**
* Программный код для страницы контактов
@class InnerContacts
@constructor
@example
    let innerContacts = new InnerContacts() {}
*/

const InnerContacts = class InnerContacts {
    constructor() {}
    /** 
    * Инициализирует nativejs-select для '.inner-contacts__office select'
    @method initSelectStyler
    @static
    @example
        // вызов
        app.innerContacts.initSelectStyler();
        // переопределение
        app.innerContacts.initSelectStyler = () => {
            // тут код
            // например
            if (!document.querySelector('.inner-contacts__office')) return;
            new NativejsSelect({
                selector: '.inner-contacts__office select',
                disableMobile: true,
            });
        }
    */
    initSelectStyler() {
        if (!document.querySelector('.inner-contacts__office')) return;
        new NativejsSelect({
            selector: '.inner-contacts__office select',
            disableMobile: true,
        });
    }
    /** 
    * Инициализирует работу скриптов на странице контактов
    @method init
    @static
    @example
        // вызов
        app.innerContacts.init();
        // переопределение
        app.innerContacts.init = () => {// тут код}
    */
    init() {
        this.initSelectStyler();
    }
}
export default InnerContacts;