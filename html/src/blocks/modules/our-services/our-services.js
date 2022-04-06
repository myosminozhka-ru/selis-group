import gsap from 'gsap';

/**
* Программный код для блока "НАШИ УСЛУГИ"
@class OurServices
@constructor
@example
    let ourServices = new OurServices() {}
*/

const OurServices = class OurServices {
    constructor() {
        /**
        * Расстояние между карточками
        @property gap
        @type Number
        @default ( 20 / 1920  * window.innerWidth )
        @example
            app.ourServices.gap = 40 / 1920  * window.innerWidth;
        */
        this.gap = 20 / 1920  * window.innerWidth,


        /**
        * Размеры '.our-services__blocks'
        @property parent
        @type Object
        @default { width: 0, height: 0 }
        @example
            app.ourServices.parent = {
                width: 0,
                height: 0
            };
        */
        this.parent = {
            width: 0,
            height: 0
        };

        /**
        * Размеры каждого '.our-services__block-in'
        @property block
        @type Object
        @default { width: 0, height: 0 }
        @example
            app.ourServices.block = {
                width: 0,
                height: 0
            };
        */
        this.block = {
            width: 0,
            height: 0
        };
        console.log(this.gap);
    }
    /** 
    * Рассчет размеров '.our-services__blocks' и запись результатов в app.ourServices.parent
    @method calculateParentHeight
    @static
    @example
        // вызов
        app.ourServices.calculateParentHeight();
        // переопределение
        app.ourServices.calculateParentHeight = () => {// тут код}
    */
    calculateParentHeight() {
        if (!document.querySelector('.our-services__blocks')) return;
        this.parent.height = document.querySelector('.our-services__blocks').offsetHeight;
        this.parent.width = document.querySelector('.our-services__blocks').offsetWidth;
        console.log(document.querySelector('.our-services__blocks'), `$width: ${this.parent.height}px; height: ${this.parent.width}px;`)
    }
    // calculateBlocksGaps() {
    //     if (!document.querySelector('.our-services__blocks')) return;
    //     this.gap = parseInt(window.getComputedStyle(document.querySelector('.our-services__blocks'), 'grid').getPropertyValue('grid-gap').split(' ')[0], 10);
    // }
    /** 
    * Рассчет размеров переданного элементы и запись результатов в app.ourServices.block
    @method calculateBlockSize
    @static
    @example
        // вызов
        document.querySelectorAll('.our-services__block-in').forEach((item, i) => {
            app.ourServices.calculateBlockSize(item).then( result => { console.log(result) } );
        });
        // переопределение
        app.ourServices.calculateParentHeight = () => {// тут код}
    */
    calculateBlockSize(target) {
        return new Promise((resolve, reject) => {
            this.block.height = target.clientHeight;
            this.block.width = target.clientWidth;
            resolve(this.block);
        })
    }
    /** 
    * анимирование блоков
    @method animateBlock
    @static
    @example
        // вызов
        app.ourServices.animateBlock( document.querySelectorAll('.our-services__block-in')[0], 0 );
        // переопределение
        app.ourServices.animateBlock = () => {// тут код};
    */
    animateBlock(target, i) {        
        if (window.innerWidth > 1023) {
            if (i % 2 == 0 && i != 0 && i != 3 && i != 4 && target.classList.contains('isHovered')) {
                gsap.to(target, 0.3, {
                    width: +this.parent.width + 3,
                    height: +this.parent.height,
                    right: 0 - +this.block.width - +this.gap - 2,
                });
            } else if (i % 2 == 1 && i != 0 && i != 3 && i != 4 && target.classList.contains('isHovered')) {
                gsap.to(target, 0.3, {
                    // width: +this.parent.width - +this.block.width - +this.gap,
                    width: +this.parent.width + 3,
                    height: +this.parent.height,
                    left: 0 - +this.block.width - +this.gap - 2,
                });
            } else {
                gsap.to(target, 0.3, {
                    // width: +this.parent.width - +this.block.width - +this.gap,
                    width: +this.parent.width + 3,
                    height: +this.parent.height,
                });
            }
            gsap.to(target.querySelector('.our-services__block-text'), 0.3, {
                y: '0',
            })
            gsap.to(target.querySelector('.our-services__block-button'), 0.3, {
                x: '0',
            })
        } else {
            target.closest('.our-services__block').classList.add('isOpened');
            if (i == 2 || i == 3) {
                gsap.to(target, 0.3, {
                    top: 0 - +this.block.height - (+this.gap * 3),
                    width: +this.parent.width,
                    height: +this.parent.height,
                });
            } else if (i == 4 || i == 5) {
                console.log('to top')
                gsap.to(target, 0.3, {
                    top: 0 - (+this.block.height * 2) - (+this.gap * 6),
                    width: +this.parent.width,
                    height: +this.parent.height,
                });
            }  else if (i == 6 || i == 7) {
                console.log('to top')
                gsap.to(target, 0.3, {
                    top: 0 - (+this.block.height * 3) - (+this.gap * 9),
                    width: +this.parent.width,
                    height: +this.parent.height,
                });
            } else {
                gsap.to(target, 0.3, {
                    width: +this.parent.width,
                    height: +this.parent.height,
                });
            }
            gsap.to(target.querySelector('.our-services__block-text'), 0.3, {
                y: 0,
                onComplete: () => {
                    gsap.to(target.querySelector('.our-services__block-button'), 0.3, {
                        x: 0,
                    })
                }
            });
        }
        
        
    }

    /** 
    * анимирование блоков в обратную сторону
    @method animateBlockBack
    @static
    @example
        // вызов
        app.ourServices.animateBlockBack( document.querySelectorAll('.our-services__block-in')[0], 0 );
        // переопределение
        app.ourServices.animateBlockBack = (target, i) => {// тут код};
    */
    animateBlockBack(target, i) {
        
        if (window.innerWidth <= 1023) {
            target.closest('.our-services__block').classList.remove('isOpened');
            gsap.to(target, 0.3, {
                top: 0,
                width: '100%',
                height: '100%'
            });
            gsap.to(target.querySelector('.our-services__block-text'), 0.3, {
                y: '100%',
            })
            gsap.to(target.querySelector('.our-services__block-button'), 0.3, {
                x: '-100%',
            })
        } else {
            if (i % 2 == 1 && i != 0 && i != 3 && i != 4) {
                gsap.to(target, 0.3, {
                    left: 0,
                    width: '100%',
                    height: '100%'
                });
            } else if (i % 2 == 0 && i != 0 && i != 3 && i != 4) {
                gsap.to(target, 0.3, {
                    right: 0,
                    width: '100%',
                    height: '100%'
                });
                
            } else {
                gsap.to(target, 0.3, {
                    width: '100%',
                    height: '100%'
                });
            }
            gsap.to(target.querySelector('.our-services__block-text'), 0.3, {
                y: '100%',
            })
            gsap.to(target.querySelector('.our-services__block-button'), 0.3, {
                x: '-100%',
            })
        }
    }
    /** 
    * инициализирует работу скриптов блока "НАШИ УСЛУГИ"
    @method init
    @static
    @example
        // вызов
        app.ourServices.init();
        // переопределение
        app.ourServices.init = () => {// тут код}
    */
    init() {
        this.calculateParentHeight();
        // this.calculateBlocksGaps();
        if (document.querySelector('.our-services__block-in')) {
            document.querySelectorAll('.our-services__block-in').forEach((item, i) => {
                if (window.innerWidth > 1023) {
                    item.addEventListener('mouseenter', (event) => {
                        item.classList.add('isHovered');
                        // setTimeout(() => {
                            console.log(123123123);
                            if (item.classList.contains('isHovered')) {
                                this.calculateBlockSize(event.target).then(result => {
                                    this.animateBlock(event.target, i);
                                });
                            }
                        // }, 1000)
                    });
                    item.addEventListener('mouseleave', (event) => {
                        item.classList.remove('isHovered');
                        this.animateBlockBack(event.target, i);
                    });
                } else {
                    item.addEventListener('click', (event) => {
                        document.querySelectorAll('.our-services__block-in:not(.isOpened)').forEach(element => {
                            if (!item.closest('.our-services__block').classList.contains('isOpened')) {
                                this.animateBlockBack(element, i);
                            }
                        });
                        // if (item.closest('.our-services__block').classList.contains('isOpened')) {
                        // }
                        this.calculateBlockSize(item).then(result => {
                            this.animateBlock(item, i);
                        });
                    });
                    item.querySelector('.our-services__block-closer').addEventListener('click', (event) => {
                        event.stopPropagation();
                        this.animateBlockBack(item, i);
                    })
                }
            });
        }
    }
}


export default OurServices;