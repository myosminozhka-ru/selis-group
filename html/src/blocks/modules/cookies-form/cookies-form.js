/**
* Программный код для описания формы предупреждения о использовании cookie
@class CookiesForm
@constructor
@example
    let сookiesForm = new CookiesForm() {}
*/

const CookiesForm = class CookiesForm {
    constructor() {}
    /** 
    * Проверяет если в localStorage есть объект isCookiesFormAccepted
    * Если нет, то добавляет класс isVisible к .cookies-form иначе удаляет этот класс
    @method setFormVisibility
    @static
    @example
        // вызов
        app.CookiesForm.setFormVisibility();
        // переопределение
        app.CookiesForm.setFormVisibility = () => {// тут код}
    */
    setFormVisibility() {
        if (!localStorage.isCookiesFormAccepted) {
            document.querySelector('.cookies-form').classList.add('isVisible')
        } else {
            document.querySelector('.cookies-form').classList.remove('isVisible')
        }
    }
    /** 
    * Инициализирует работу скриптов в форме предупреждения о использовании cookie
    * Так же добавляет обработчик события click на кнопку '.cookies-form__button' для закрытия формы
    @method init
    @static
    @example
        // вызов
        app.CookiesForm.init();
        // переопределение
        app.CookiesForm.init = () => {// тут код}
    */
    init() {
        if (!document.querySelector('.cookies-form')) return;
        this.setFormVisibility();
        document.querySelector('.cookies-form__button').addEventListener('click', () => {
            localStorage.isCookiesFormAccepted = true;
            this.setFormVisibility();
        })
    }
}

export default CookiesForm;