import Vue from 'vue';
import Header from "%modules%/header/header";
import MainFilter from "%modules%/main-filter/main-filter";
import PropertyType from "%modules%/property-type/property-type";
import UniqueOffers from "%modules%/unique-offers/unique-offers";
import OurServices from "%modules%/our-services/our-services";
import PropertyItem from "%modules%/property-item/property-item";
import ObjectOptions from "%modules%/object-options/object-options";
import Calculator from "%modules%/object-calculator/object-calculator";
import Examples from "%modules%/landing-examples/landing-examples";
import ObjectNearby from "%modules%/object-nearby/object-nearby";
import InvestmentOurServices from "%modules%/investment-our-services/investment-our-services";
import Programms from "%modules%/landing-programms/landing-programms";
import CookiesForm from "%modules%/cookies-form/cookies-form";
import InvestmentFirstSlider from "%modules%/investment-first/investment-first";
import PropertyMapContent from "%modules%/property-map-content/property-map-content";
import PropertySort from "%modules%/property-sorting/property-sorting";
import InnerContacts from "%modules%/inner-contacts/inner-contacts";
import ObjectFirst from "%modules%/object-first/object-first";
import mobileFilter from "%modules%/mobile-filter/mobile-filter";
import Modals from "%modules%/modals/modals";
import ModalQuiz from "%modules%/modal-quiz/modal-quiz";


import AOS from 'aos';
AOS.init({
    disable: 'mobile',
});


window.app = new Vue({
    el: '#app',
    data: () => ({
        message: 'message',
        header: new Header(),
        mainFilter: new MainFilter({
            isOpened: false
        }),
        propertyType: new PropertyType(),
        ourServices: new OurServices(),
        uniqueOffers: new UniqueOffers(),
        propertyItem: new PropertyItem(),
        objectOptions: new ObjectOptions(),
        objectCalculator: new Calculator(),
        landingExamples: new Examples(),
        objectNearby: new ObjectNearby(),
        investmentOurServices: new InvestmentOurServices(),
        landingProgramms: new Programms(),
        cookiesForm: new CookiesForm(),
        investmentFirstSlider: new InvestmentFirstSlider(),
        propertyMapContent: new PropertyMapContent(),
        propertySort: new PropertySort(),
        innerContacts: new InnerContacts(),
        objectFirst: new ObjectFirst(),
        mobileFilter: new mobileFilter(),
        modals: new Modals({
            modalsSelector: "data-modal",
            modalsOpenerSelector: "data-modal-id",
            openedClass: "isOpened"
        }),
        sizes: {
            window: {
                width: window.innerWidth,
                height: window.innerHeight
            }
        },
        modalQuiz: new ModalQuiz()
    }),
    mounted() {
        this.header.init();
        this.mainFilter.init();
        this.propertyType.init();
        this.ourServices.init();
        this.uniqueOffers.init();
        this.propertyItem.init();
        this.objectOptions.init();
        this.objectCalculator.init();
        this.landingExamples.init();
        this.investmentOurServices.init();
        this.landingProgramms.init();
        this.cookiesForm.init();
        this.investmentFirstSlider.init();
        this.propertyMapContent.init();
        this.propertySort.init();
        this.innerContacts.init();
        this.objectFirst.init();
        this.mobileFilter.init();
        this.modals.init();
        this.modalQuiz.init();
        window.addEventListener('resize', () => {
            this.window = {
                width: window.innerWidth,
                height: window.innerHeight,
            }
        });
        document.querySelector('body').classList.add('isMounted');
    },
    computed: {
        window: {
            get() {
                console.log('sizes', this.sizes);
                return {
                    width: this.sizes.window.width,
                    height: this.sizes.window.height
                }
            },
            set(newValue) {
                this.sizes.window = newValue;
            }
        },
        calculatorMortgageTerm: {
            get() {
                return this.objectCalculator.mortgageTerm;
            },
            set(newValue) {
                console.log(newValue)
                this.objectCalculator.mortgageTerm = newValue < this.calculatorMaxYears ? newValue : this.calculatorMaxYears;
            }
        },
        calculatorOneUsdOnRub: {
            get() {
                return this.objectCalculator.oneUsdOnRub;
            },
            set(newValue) {
                this.objectCalculator.oneUsdOnRub = newValue;
            }
        },
        calculatorMaxYears: {
            get() {
                return this.objectCalculator.maxYears;
            },
            set(newValue) {
                this.objectCalculator.maxYears = newValue;
            }
        },
        calculatorCurrency: {
            get() {
                return this.objectCalculator.currency;
            },
            set(newValue) {
                this.objectCalculator.currency = newValue;
            }
        },
        calculatorFirstPayment: {
            get() {
                let payment = 0;
                if (this.objectCalculator.currency === '$') {
                    payment = this.objectCalculator.firstPayment / this.objectCalculator.oneUsdOnRub;
                } else {
                    payment = this.objectCalculator.firstPayment;
                }
                return Math.round(payment);
            },
            set(newValue) {
                let payment = 0;
                if (this.objectCalculator.currency === '$') {
                    payment = newValue * this.objectCalculator.oneUsdOnRub;
                } else {
                    payment = newValue;
                }
                if (newValue > this.calculatorPrice) {
                    payment = this.calculatorPrice;
                }
                this.objectCalculator.firstPayment =  Math.round(payment);
            }
        },
        calculatorPrice: {
            get() {
                let price = 0;
                if (this.objectCalculator.currency === '$') {
                    price = this.objectCalculator.price.split(' ').join('') / this.objectCalculator.oneUsdOnRub;
                } else {
                    price = this.objectCalculator.price.split(' ').join('');
                }
                return Math.round(price);
            },
            set(newValue) {
                this.objectCalculator.price = newValue.toLocaleString();
            }
        },
        calculatorPercentage: {
            get() {
                return this.objectCalculator.percentage;
            },
            set(newValue) {
                this.objectCalculator.percentage = newValue;
            }
        },
        calculatorResult: {
            get() {
                // let result = Math.round((this.objectCalculator.price.split(' ').join('') - this.objectCalculator.firstPayment)*(this.objectCalculator.precentage / 12)/(1-(1/(1+(this.objectCalculator.precentage / 12)))*(this.objectCalculator.mortgageTerm * 12))).toLocaleString().replace('-', '');
                let S = this.calculatorPrice - this.calculatorFirstPayment;
                let r = this.calculatorPercentage / 12
                let n = this.objectCalculator.mortgageTerm * 12;
                // let result = Math.round((S + (S*this.objectCalculator.percentage/100)) / n);
                let result = S*r/(1-(1/(1+r))*n);
                console.log(typeof S, (S + (S*this.objectCalculator.percentage/100)));
                console.log(typeof n, n);
                return result.toFixed(2).replace('-', '');
            },
            set(newValue) {
                console.log(newValue);
            }
        }
    },
})