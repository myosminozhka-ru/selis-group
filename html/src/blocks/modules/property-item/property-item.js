import Glide from '@glidejs/glide'
import NativejsSelect from 'nativejs-select';

/**
* Программный код для элементов каталога
@class PropertyItem
@constructor
@example
    let propertyItem = new PropertyItem() {}
*/

const PropertyItem = class PropertyItem {
    constructor() {}

    /** 
    * Инициализирует 'nativejs-select' для '.property-item__price-in select'
    @method initSelectStyler
    @static
    @example
        // вызов
        app.propertyItem.initSelectStyler();
        // переопределение
        app.propertyItem.initSelectStyler = () => {
            // тут код
            // например
            if (!document.querySelector('.property-item__price-in')) return;
            new NativejsSelect({
                selector: '.property-item__price-in select',
                disableMobile: true,
            });
        }
    */
    initSelectStyler() {
        if (!document.querySelector('.property-item__price-in')) return;
        new NativejsSelect({
            selector: '.property-item__price-in select',
            disableMobile: true,
        });
    }
    /** 
    * Инициализирует слайдер для '.property-item__slider-glide'
    @method initSlider
    @static
    @example
        // вызов
        app.propertyItem.initSlider();
        // переопределение
        app.propertyItem.initSlider = () => {
            // тут код
            // например
            if (document.querySelector('.property-item__slider-glide')) {
                document.querySelectorAll('.property-item__slider-glide').forEach(item => {
                    new Glide(item, {
                        perView: 1,
                        type: 'slider',
                        gap: 0,
                        startAt: 0
                    }).mount();
                })
            }
        }
    */
    initSlider() {
        if (document.querySelector('.property-item__slider-glide')) {
            document.querySelectorAll('.property-item__slider-glide').forEach(item => {
                new Glide(item, {
                    perView: 1,
                    type: 'slider',
                    gap: 0,
                    startAt: 0
                }).mount();
            })
        }
    }
    /** 
    * инициализирует работу элементов каталога
    @method init
    @static
    @example
        // вызов
        app.propertyItem.init();
        // переопределение
        app.propertyItem.init = () => {// тут код}
    */
    init() {
        this.initSelectStyler();
        this.initSlider();

        if (document.querySelector('.property-item__price-in select') && document.querySelector('.property-item__price-in .from span')) {

            document.querySelectorAll('.property-item__price-in select').forEach(item => {
                item.addEventListener('change', () => {
                    item.closest('.property-item__price').querySelector('.property-item__price-in .from span').innerHTML = item.value;
                })
            })
        }

        if (document.querySelector('.object-first__price-bottom .currency') && document.querySelector('.object-first__price-bottom .price')) {

            document.querySelector('.object-first__price-bottom .currency').addEventListener('change', () => {
                document.querySelector('.object-first__price-bottom .price').innerHTML = document.querySelector('.object-first__price-bottom .currency').value;
            })
        }
    }
}

export default PropertyItem;