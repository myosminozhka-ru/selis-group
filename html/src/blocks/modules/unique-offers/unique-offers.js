import Glide from '@glidejs/glide'
import gsap from 'gsap';

const UniqueOffers = class UniqueOffers {
    constructor() {
        if (document.querySelector('.unique-offers__items-glide.unique-offers__items-glide--main')) {
            this.slider = new Glide('.unique-offers__items-glide.unique-offers__items-glide--main', {
                perView: 3,
                perTouch: 3,
                type: 'slider',
                autoplay: 5000,
                touchRatio: 1,
                gap: 20,
                startAt: 1,
                animationDuration: 500,
                breakpoints: {
                    800: {
                        perView: 2,
                        perTouch: 2,
                        animationDuration: 500,
                    },
                    520: {
                        perView: 1,
                        perTouch: 1,
                        animationDuration: 500,
                    }
                }
            })
        }
        if (document.querySelector('.unique-offers__items-glide.unique-offers__items-glide--object')) {
            this.slider = new Glide('.unique-offers__items-glide.unique-offers__items-glide--object', {
                perView: 3,
                perTouch: 3,
                type: 'slider',
                autoplay: 5000,
                touchRatio: 1,
                gap: 20,
                startAt: 0,
                animationDuration: 500,
                breakpoints: {
                    800: {
                        perView: 2,
                        perTouch: 2,
                        animationDuration: 500,
                    },
                    520: {
                        perView: 1,
                        perTouch: 1,
                        animationDuration: 500,
                    }
                }
            })
        }
    }
    moveSlider(number) {
        if (!this.slider) return;
        this.slider.go(number);
    }
    refreshSVGFilter() {
        gsap.to("feDisplacementMap", { 
            duration: 1, 
            attr: { scale: 30 },
            onComplete: () => {
                gsap.to("feDisplacementMap", { 
                    duration: 1, 
                    attr: { scale: 0 },
                });
            }
        });
        gsap.to("feColorMatrix", { 
            duration: 2, 
            attr: { values: 1080 },
            onComplete: () => {
                gsap.to("feColorMatrix", { 
                    duration: 0,
                    attr: { values: 0 },
                    onUpdate: () => {
                        console.log(123)
                    }
                });
            }
        });
        
    }
    init() {
        if (!this.slider) return;
        this.slider.mount();
        this.slider.on(['move'], () => {
            this.refreshSVGFilter();
        });
        this.slider.on(['run.before'], (item) => {
            console.log(item);
            
            if (item.direction == ">") {
                document.querySelector('.unique-offers__items').classList.remove('moveLeft');
                document.querySelector('.unique-offers__items').classList.add('moveRight');
            } else {
                document.querySelector('.unique-offers__items').classList.add('moveLeft');
                document.querySelector('.unique-offers__items').classList.remove('moveRight');
                document.querySelector('.unique-offers__item.glide__slide--active').previousElementSibling.classList.add('isNotFiltered')
            }
            // document.querySelector('.unique-offers__items').classList.remove('animatingItems')
        });
        this.slider.on(['run.after'], () => {
            if (document.querySelector('.unique-offers__item.isNotFiltered')) {
                document.querySelector('.unique-offers__item.isNotFiltered').classList.remove('isNotFiltered');
            }
        });
    }
}

export default UniqueOffers;