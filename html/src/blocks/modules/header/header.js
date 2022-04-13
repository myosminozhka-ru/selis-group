import {
    gsap
} from "gsap";
import {
    ScrollTrigger
} from "gsap/ScrollTrigger";

import { headerMobileMenuIn } from './templates/headerMobileMenuIn';

gsap.registerPlugin(ScrollTrigger);

/**
* Программный код для шапки сайта
@class Header
@constructor
@example
    let header = new Header() {}
*/
const Header = class Header {
    constructor(isMainMenuOpened = false, isMobileMenuOpened = false, isLangMenuOpened = false, isServicesMenuOpened = false) {
        /**
        @property isMainMenuOpened
        @type Boolean
        @default false
        @example
            app.header.isMainMenuOpened = true;
        */
        this.isMainMenuOpened = isMainMenuOpened;
        /**
        @property isMobileMenuOpened
        @type Boolean
        @default false
        @example
            app.header.isMobileMenuOpened = true;
        */
        this.isMobileMenuOpened = isMobileMenuOpened

        /**
        @property isLangMenuOpened
        @type Boolean
        @default false
        @example
            app.header.isLangMenuOpened = true;
        */
            this.isLangMenuOpened = isLangMenuOpened
        
            /**
        @property isServicesMenuOpened
        @type Boolean
        @default false
        @example
            app.header.isServicesMenuOpened = true;
        */
            this.isServicesMenuOpened = isServicesMenuOpened
    }
    /** 
    * инициализирует работу скриптов в шапке
    @method init
    @static
    @example
        // вызов
        app.header.init();
        // переопределение
        app.header.init = () => {// тут код}
    */
    init() {
        // this.testRenderMobileMenu();
        if (!document.querySelector('.header')) return;
        document.addEventListener('keyup', (event) => {
            if ((event.keyCode || event.which) == 27) {
                this.closeAllMenus();
            }
        });
        document.addEventListener('click', (event) => {
            if (event.target.classList.contains('header__lang-opener')) {
                this.toggleLangMenu();
            } else {
                this.isLangMenuOpened = false;
                document.querySelector('html').classList.remove('overhidden');
                document.querySelector('body').classList.remove('overhidden');
            }
            if (event.target.classList.contains('header__main-menu-opener')) {
                this.toggleMainMenu();
            } else {
                this.isMainMenuOpened = false;
                document.querySelector('html').classList.remove('overhidden');
                document.querySelector('body').classList.remove('overhidden');
            }
            if (event.target.classList.contains('header__main-mobile-menu-opener')) {
                this.toggleMobileMenu();
            }
            if (event.target.dataset.target) {
                console.log(event.target.dataset)
                event.preventDefault();
                this.chooseScreen(event.target.dataset.target);
            }
            if (event.target.dataset.dropdown) {
                event.target.classList.toggle('isOpened');
                if (event.target.querySelector('.dropdown_body').clientHeight == 0) {
                    event.target.querySelector('.dropdown_body').style.height = event.target.querySelector('.dropdown_body__in').clientHeight + 'px';
                } else {
                    event.target.querySelector('.dropdown_body').style.height = 0
                }
            }
        })
        this.animateOnScroll();
        this.setHeight();
        this.setWidthServicesMenuDropdown();
    }
    /** 
    * Выбор экрана в мобильном меню по параметру 
    @method chooseScreen
    @static
    @example
        // вызов
        app.header.chooseScreen('main');
        // переопределение
        app.header.chooseScreen = () => {// тут код}
    */
    chooseScreen(target) {
        if (!document.querySelector(`.header__mobile_menu-in.isActive [data-target="${target}"]`).dataset.back) {
            console.log(`вперед к ${target}`);
            document.querySelector('.header__mobile_menu-in.isActive').classList.add('isSlided');
        } else {
            console.log(`назад к ${target}`);
        }
        document.querySelector('.header__mobile_menu-in.isActive').classList.remove('isActive');
        document.querySelector(`[data-screen="${target}"]`).classList.add('isActive')
        document.querySelector(`[data-screen="${target}"]`).classList.remove('isSlided')
    }
    /**
    * Открывает главное меню в шапке, принимая параметром индекс который передан в аттрибуте data-item_id 
    @method openModalMenu
    @static
    @example
        // вызов
        app.header.openModalMenu(1);
        // переопределение
        app.header.openModalMenu = (index) => {// тут код}
    */
    openModalMenu(index) {
        if (!document.querySelector(`.header__menu-modal[data-item_id="${index}"]`)) return;
        this.closeAllMenus();
        if (document.querySelector(`.header__menu-modal.isOpened`)) {
            document.querySelector(`.header__menu-modal.isOpened`).classList.remove('isOpened');
        }
        document.querySelector(`.header__menu-modal[data-item_id="${index}"]`).classList.add('isOpened');
        document.querySelector(`.header__in`).classList.add('isHovered');
    }
    /**
    * Закрывает главное меню в шапке
    @method closeModalMenu
    @static
    @example
        // вызов
        app.header.closeModalMenu();
        // переопределение
        app.header.closeModalMenu = () => {// тут код}
    */
    closeModalMenu() {
        if (!document.querySelector(`.header__menu-modal.isOpened`)) return;
        document.querySelector(`.header__menu-modal.isOpened`).classList.remove('isOpened');
        document.querySelector(`.header__in`).classList.remove('isHovered');
    }
    /**
    * Открывает/Закрывает второстепенное меню в шапке
    @method toggleMainMenu
    @static
    @example
        // вызов
        app.header.toggleMainMenu();
        // переопределение
        app.header.toggleMainMenu = () => {// тут код}
    */
    toggleMainMenu() {
        if (document.querySelector('.header__main-menu-opener')) {
            this.isMainMenuOpened = !this.isMainMenuOpened;
            this.isLangMenuOpened = false;
            this.isMobileMenuOpened = false;
            this.isServicesMenuOpened = false;
        }
    }
    /**
    * Открывает/Закрывает выбор языков
    @method toggleLangMenu
    @static
    @example
        // вызов
        app.header.toggleLangMenu();
        // переопределение
        app.header.toggleLangMenu = () => {// тут код}
    */
    toggleLangMenu() {
        if (document.querySelector('.header__lang')) {
            this.isLangMenuOpened = !this.isLangMenuOpened;
            this.isMainMenuOpened = false;
            this.isMobileMenuOpened = false;
            this.isServicesMenuOpened = false;
        }
    }
    /**
    * Открывает/Закрывает меню услуг
    @method toggleServicesMenu
    @static
    @example
        // вызов
        app.header.toggleServicesMenu();
        // переопределение
        app.header.toggleServicesMenu = () => {// тут код}
    */
    toggleServicesMenu() {
        if (document.querySelector('.header__services')) {
            console.log('open services')
            this.isServicesMenuOpened = !this.isServicesMenuOpened;
            this.isMainMenuOpened = false;
            this.isMobileMenuOpened = false;
            this.isLangMenuOpened = false;
        }
    }
    /**
    * Анимирует шапку при скролле
    @method animateOnScroll
    @static
    @example
        // вызов
        app.header.animateOnScroll();
        // переопределение
        app.header.animateOnScroll = () => {// тут код}
    */
    animateOnScroll() {
        console.log(this);
        gsap.to('.header__in', {
            scrollTrigger: {
                trigger: '.wrapper',
                start: 'top top',
                end: 'center top',
                onUpdate: (item) => {
                    document.querySelector('.header__in').style.backdropFilter = `blur(${item.progress * 100 / 2}px)`;
                    if (item.progress > 0) {
                        document.querySelector('.header__in').classList.add('isBlured');
                        document.querySelector('.header').classList.add('isBlured');
                        if (document.querySelector('.header__breadcrumbs')) {
                            document.querySelector('.header__breadcrumbs').classList.add('isHidden');
                        }
                    } else {
                        document.querySelector('.header__in').classList.remove('isBlured');
                        document.querySelector('.header').classList.remove('isBlured');
                        if (document.querySelector('.header__breadcrumbs')) {
                            document.querySelector('.header__breadcrumbs').classList.remove('isHidden');
                        }
                    }
                }
            },

        });
    }
    /**
    * Открывает/Закрывает мобильное меню
    @method toggleMobileMenu
    @static
    @example
        // вызов
        app.header.toggleMobileMenu();
        // переопределение
        app.header.toggleMobileMenu = () => {// тут код}
    */
    toggleMobileMenu() {
        if (!document.querySelector('.header__mobile_menu')) return;
        this.setHeight();
        this.isMobileMenuOpened = !this.isMobileMenuOpened;
        this.isMainMenuOpened = false;
        this.isLangMenuOpened = false;
        this.isServicesMenuOpened = false;
        if (this.isMobileMenuOpened) {
            document.querySelector('html').classList.add('overhidden');
            document.querySelector('body').classList.add('overhidden');
        } else {
            document.querySelector('html').classList.remove('overhidden');
            document.querySelector('body').classList.remove('overhidden');
        }
    }
    /**
    * Закрывает все меню в шапке 
    @method closeAllMenus
    @static
    @example
        // вызов
        app.header.closeAllMenus();
        // переопределение
        app.header.closeAllMenus = () => {// тут код}
    */
    closeAllMenus() {
        this.isMobileMenuOpened = false;
        this.isMainMenuOpened = false;
        this.isLangMenuOpened = false;
        this.isServicesMenuOpened = false;
        document.querySelector('html').classList.remove('overhidden');
        document.querySelector('body').classList.remove('overhidden');
    }
     /**
    * Высчитывает высоту '.header__mobile_menu-bottom' и устанавливает высоту для '.header__mobile_menu-in[data-screen="main"] .header__mobile_menu-top' calc( 100% - то что посчитали - 78px );
    @method setHeight
    @static
    @example
        // вызов
        app.header.setHeight();
        // переопределение
        app.header.setHeight = () => {// тут код}
    */
    setHeight() {
        if (!document.querySelector('.header__mobile_menu-in') && !document.querySelector('.header__mobile_menu-bottom')) return;
        document.querySelector('.header__mobile_menu-in[data-screen="main"] .header__mobile_menu-top').style.height = `calc(100% - ${document.querySelector('.header__mobile_menu-bottom').clientHeight + 78}px)`
    }
    /**
    * Высчитывает ширину под пункта "Услуги" в шапке
    @method setWidthServicesMenuDropdown
    @static
    @example
        // вызов
        app.header.setWidthServicesMenuDropdown();
        // переопределение
        app.header.setWidthServicesMenuDropdown = () => {// тут код}
    */
    setWidthServicesMenuDropdown() {
        if (document.querySelector('.header__services') && 
            document.querySelector('.header__services-dropdown') &&
            document.querySelector('.header__contacts')) {
                const services = document.querySelector('.header__services');
                const servicesDropdown = document.querySelector('.header__services-dropdown');
                const contacts = document.querySelector('.header__contacts');
                const servicesLeft = services.offsetLeft;
                const contactsLeft = contacts.closest('.header__right').offsetLeft;
                console.log('contactsLeft', contactsLeft, servicesLeft)
                const headerRightWidth = document.querySelector('.header__right').clientWidth;
                servicesDropdown.style.width = (contactsLeft - servicesLeft) + headerRightWidth + 'px';
        }
    }

    testRenderMobileMenu() {
        const menuList = {
            7: {
                ID: 7,
                NAME: 'Купить',
                CODE: 'sale',
                // CODE: 'kupit',
                firstSecond: {
                    2: {
                        ID: 2,
                        CODE: 'zagorodnaya',
                        NAME: 'Загородная',
                    },
                    1: {
                        ID: 1,
                        CODE: 'gorodaskaya',
                        NAME: 'Городская',
                    }
                },
                sectionSecond: {
                    22: {
                        ID: 22,
                        CODE:  'apartamenty',
                        NAME: 'Апартаменты',
                        IBLOCK_ID: 2,
                        IBLOCK_SECTION_ID: 1
                    },
                    29: {
                        ID: 29,
                        CODE: 'zemelnye-uchastki',
                        NAME: 'Земельные участки',
                        IBLOCK_ID: 2,
                        IBLOCK_SECTION_ID: 2
                    }
                }
            },
            8: {
                ID: 8,
                NAME: 'Арендовать',
                CODE: 'rent',
            },
            9: {
                ID: 9,
                NAME: 'Инвестировать',
                CODE: 'investment',
            },
            10: {
                ID: 10,
                NAME: 'Продать/Сдать',
                CODE: 'prodat-sdat',
                firstSecond: {
                    2: {
                        ID: 2,
                        CODE: 'zagorodnaya',
                        NAME: 'Загородная',
                    },
                },
                sectionSecond: {
                    26: {
                        ID: 26,
                        CODE:  'kottedzhi-doma',
                        NAME: 'Коттеджи (Дома)',
                        IBLOCK_ID: 2,
                        IBLOCK_SECTION_ID: 2
                    }
                }
            }
        }

        const mobileMenu = document.querySelector('.header__mobile_menu');
        const mobileMenuMainScreen = mobileMenu?.querySelector('[data-screen="main"]');
        const mobileMenuMainScreenTopIn = mobileMenuMainScreen?.querySelector('.header__mobile_menu-top-in');
        const mobileMenuMainScreenFirstNav = mobileMenuMainScreenTopIn?.querySelector('.header__mobile_menu-nav');
        const mobileMenuMainScreenUl = document.createElement('ul');
        
        // Создание списка 
        for (const key in menuList) {
            if (Object.hasOwnProperty.call(menuList, key)) {
                const element = menuList[key];
                const li = document.createElement('li');
                const a = document.createElement('a');
                if (element.firstSecond) {
                    a.className = "has-child";
                    a.dataset.target = element.CODE + '' + element.ID;
                    const renderOprtion = {
                        key: element.CODE + '' + element.ID
                    }
                    mobileMenu.insertAdjacentHTML("beforeend", headerMobileMenuIn(renderOprtion))

                    if (element.sectionSecond) {
                        const arrayIdSecondScreeen = [];

                        for (const key2 in element.sectionSecond) {
                            if (Object.hasOwnProperty.call(element.sectionSecond, key2)) {
                                const element2 = element.sectionSecond[key2];
                                arrayIdSecondScreeen.push({
                                    id: element2.ID,
                                    parent: element2.IBLOCK_SECTION_ID
                                })
                                console.log("element2: ", element2);
                            }
                        }

                        for (const key2 in element.firstSecond) {
                            if (Object.hasOwnProperty.call(element.firstSecond, key2)) {
                                const element3 = element.firstSecond[key2];
                                const findIdParent = arrayIdSecondScreeen.find(item => item.parent === element3.ID);
                                if (findIdParent) {
                                    mobileMenu.insertAdjacentHTML("beforeend", headerMobileMenuIn({key: element3.CODE + '' + element.ID}))
                                }
                                console.log("element3: ", element3);
                            }
                        }

                        console.log(arrayIdSecondScreeen);
                    }
                }
                a.href = element.HREF ? element.HREF : '#';
                a.innerText = element.NAME;
                li.prepend(a);
                console.log(element);
                mobileMenuMainScreenUl.append(li);
            }
        }

        mobileMenuMainScreenFirstNav.prepend(mobileMenuMainScreenUl);
    }
}

export default Header;