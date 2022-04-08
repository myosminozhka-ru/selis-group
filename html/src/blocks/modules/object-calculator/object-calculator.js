import NativejsSelect from 'nativejs-select';

/**
* Программный код для калькулятора ипотеки
@class Calculator
@constructor
@example
    let сalculator = new Calculator() {
        apiUrl: "https://openexchangerates.org/api/latest.json?app_id=a8a2d37a99d5493c9e51901ea87662e0&base=USD",
        oneUsdOnRub: 70,
        currency: '₽',
        price: 8699900,
        firstPayment: 4950000,
        mortgageTerm: 20
    }
*/
const Calculator = class Calculator {
    constructor(params = {
        apiUrl: "https://openexchangerates.org/api/latest.json?app_id=a8a2d37a99d5493c9e51901ea87662e0&base=USD",
        oneUsdOnRub: 70,
        currency: '₽',
        price: document.querySelector('.object-first__price-bottom .price') ? document.querySelector('.object-first__price-bottom .price').innerHTML : 0,
        firstPayment: 1000000,
        mortgageTerm: 20,
        percentage: 5.39,
        maxYears: 30
    }) {
        /**
        * Ссылка на API для получения курса валют
        @property apiUrl
        @type String
        @default 'https://openexchangerates.org/api/latest.json?app_id=a8a2d37a99d5493c9e51901ea87662e0&base=USD'
        @example
            app.objectCalculator.apiUrl = 'https://openexchangerates.org/api/latest.json?app_id=a8a2d37a99d5493c9e51901ea87662e0&base=USD';
        */
        this.apiUrl = params.apiUrl;
        /**
        * Курс рубля по умолчанию если API недоступно
        @property oneUsdOnRub
        @type Number
        @default 70
        @example
            app.objectCalculator.oneUsdOnRub = 70;
        */
        this.oneUsdOnRub = params.oneUsdOnRub;
        /**
        * Валюта по умолчанию
        @property currency
        @type String
        @default '₽'
        @example
            // Js
            app.objectCalculator.currency = '$';
            // HTML
            <select v-model="objectCalculator.currency">
        */
        this.currency = params.currency;
        /**
        * Стоимость недвижимости 
        @property price
        @type Number
        @default 8699900
        @example
            // Js
            app.objectCalculator.price = 8699900;
            // HTML
            <input v-model="objectCalculator.price">
        */
        this.price = params.price;
        /**
        * Первый взнос
        @property firstPayment
        @type Number
        @default 4950000
        @example
            // Js
            app.objectCalculator.firstPayment = 4950000;
            // HTML
            <input v-model="objectCalculator.firstPayment">
        */
        this.firstPayment = params.firstPayment;
        /**
        * Срок ипотеки
        @property mortgageTerm
        @type Number
        @default 20
        @example
            // Js
            app.objectCalculator.mortgageTerm = 20;
            // HTML
            <input v-model="objectCalculator.mortgageTerm">
        */
        this.mortgageTerm = params.mortgageTerm;
        /**
        * Процентная ставка
        @property precentage
        @type Number
        @default 20
        @example
            // Js
            app.objectCalculator.precentage = 20;
            // HTML
            <input v-model="objectCalculator.precentage">
        */
        this.percentage = params.percentage;
        this.maxYears = params.maxYears;
    }
    /** 
    * Получает курс валют из apiUrl и записывает значение отношения доллара к рублю в oneUsdOnRub, если API недоступно, то в oneUsdOnRub остается неизменным
    @method getExchangeRate
    @static
    @example
        // вызов
        app.objectCalculator.getExchangeRate();
        // переопределение
        app.objectCalculator.getExchangeRate = () => {// тут код}
    */
    async getExchangeRate() {
        let response = await fetch(this.apiUrl);
        if (response.ok) {
            let json = await response.json();
            if (json.rates) {
                this.oneUsdOnRub = json.rates.RUB;
                console.log(json.rates.RUB);
            }
        }
    }
    /** 
    * Увеличивает на 1 mortgageTerm
    @method mortgageTermIncrease
    @static
    @example
        // вызов
        app.objectCalculator.mortgageTermIncrease();
        // переопределение
        app.objectCalculator.mortgageTermIncrease = () => {// тут код}
    */
    mortgageTermIncrease() {
        if (this.mortgageTerm >= this.maxYears) return;
        this.mortgageTerm = +this.mortgageTerm + 1;
    }
    /** 
    * Уменьшает на 1 mortgageTerm
    @method mortgageTermDecrease
    @static
    @example
        // вызов
        app.objectCalculator.mortgageTermDecrease();
        // переопределение
        app.objectCalculator.mortgageTermDecrease = () => {// тут код}
    */
    mortgageTermDecrease() {
        if (this.mortgageTerm <= 5) return;
        this.mortgageTerm = +this.mortgageTerm - 1;
    }
    initSelectStyler() {
        if (!document.querySelector('.object-calculator__currency-select')) return;
        new NativejsSelect({
            selector: '.object-calculator__currency-select',
            disableMobile: true,
        });
    }
    setPercentage(percent) {
        this.percentage = percent;
    }
    setYears(years) {
        console.log(this.mortgageTerm, this.maxYears);
        this.maxYears = years;
        if (this.mortgageTerm > this.maxYears) {
            this.mortgageTerm = this.maxYears
        }
    }
    /** 
    * инициализирует работу скриптов калькулятора
    @method init
    @static
    @example
        // вызов
        app.objectCalculator.init();
        // переопределение
        app.objectCalculator.init = () => {// тут код}
    */
    init() {
        this.getExchangeRate();
        this.initSelectStyler();
        if (document.querySelector('.object-calculator__slider-counter-button.plus')) {
            document.querySelector('.object-calculator__slider-counter-button.plus').addEventListener('click', () => {
                this.mortgageTermIncrease();
            });
        }
        if (document.querySelector('.object-calculator__slider-counter-button.minus')) {
            document.querySelector('.object-calculator__slider-counter-button.minus').addEventListener('click', () => {
                this.mortgageTermDecrease();
            });
        }
    }
}

export default Calculator;