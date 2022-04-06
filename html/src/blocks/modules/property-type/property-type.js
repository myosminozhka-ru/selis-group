import Glide from '@glidejs/glide'
import { SVG } from '@svgdotjs/svg.js'

const PropertyType = class PropertyType {
    constructor() {
        if (document.querySelector('.property-type__items-glide.glide')) {
            this.slider = new Glide('.property-type__items-glide.glide', {
                perView: 3,
                type: 'slider',
                gap: `${window.innerWidth * (20 / 1920) }`,
                startAt: 1,
                // autoplay: 2000,
                hoverpause: false,
                animationDuration: 500,
                breakpoints: {
                    800: {
                        perView: 2
                    },
                    540: {
                        perView: 1
                    }
                }
            })
        }
        this.slidedRange = 0;
        this.slidedRangeNew = 0;
        this.svgItems = [];
        this.isAnimationStarted = false;
        this.frame = 1000 / 60;
        this.curve = 22;
        this.curveMax = 40;
        this.curveMin = this.curveMax / 2;
        this.isBack = false;
        this.interval;
        this.fireInterval;
        this.diff = 0;
    }
    getSlidedRange(element) {
        let values = element.style.transform.split(/\w+\(|\);?/);
        let transform = values[1].split(/,\s?/g).map(parseInt);
        this.slidedRange = transform[0];
    }
    moveSlider(number) {
        if (!this.slider) return;
        this.slider.go(number);
    }
    createSVG() {
        if (!document.querySelector('.property-type__item-bg')) return;
        document.querySelectorAll('.property-type__item-bg').forEach(item => {
            let svg = SVG().addTo(item).size('100%', '100%');
            setTimeout(() => {
                // console.log(svg.node.width.animVal.value)
                let path = svg.path().plot(`
                    M ${this.curveMax / 2}, ${this.curveMax / 2}
                    L ${svg.node.width.animVal.value - this.curveMax / 2}, ${this.curveMax / 2}
                    Q ${svg.node.width.animVal.value - this.curveMax / 2}, ${svg.node.height.animVal.value / 2} ${svg.node.width.animVal.value - this.curveMax / 2}, ${svg.node.height.animVal.value - this.curveMax / 2}
                    L ${svg.node.width.animVal.value - this.curveMax / 2}, ${svg.node.height.animVal.value - this.curveMax / 2}
                    L ${this.curveMax / 2}, ${svg.node.height.animVal.value - this.curveMax / 2}
                    Q ${this.curveMax / 2}, ${svg.node.height.animVal.value / 2} ${this.curveMax / 2}, ${this.curveMax / 2}
                `).attr({fill: '#fff'});
                let itemObj = {
                    svg: svg,
                    path: path
                }            
                this.svgItems.push(itemObj);
            }, 300)
        });
    }
    setPlot(curve, direction) {
        console.log(`curve is ${curve}`);
        this.svgItems.forEach(item => {
            if (direction == '<') {
                item.path.plot(`
                    M ${this.curveMax / 2}, ${this.curveMax / 2}
                    L ${item.svg.node.width.animVal.value - this.curveMax / 2}, ${this.curveMax / 2}
                    Q ${item.svg.node.width.animVal.value - curve}, ${item.svg.node.height.animVal.value / 2} ${item.svg.node.width.animVal.value - this.curveMax / 2}, ${item.svg.node.height.animVal.value - this.curveMax / 2}
                    L ${item.svg.node.width.animVal.value - this.curveMax / 2}, ${item.svg.node.height.animVal.value - this.curveMax / 2}
                    L ${this.curveMax / 2}, ${item.svg.node.height.animVal.value - this.curveMax / 2}
                    Q ${this.curveMax - curve}, ${item.svg.node.height.animVal.value / 2} ${this.curveMax / 2}, ${this.curveMax / 2}
                `);
            } else {
                item.path.plot(`
                    M ${this.curveMax / 2}, ${this.curveMax / 2}
                    L ${item.svg.node.width.animVal.value - this.curveMax / 2}, ${this.curveMax / 2}
                    Q ${item.svg.node.width.animVal.value - (this.curveMax - curve)}, ${item.svg.node.height.animVal.value / 2} ${item.svg.node.width.animVal.value - this.curveMax / 2}, ${item.svg.node.height.animVal.value - this.curveMax / 2}
                    L ${item.svg.node.width.animVal.value - this.curveMax / 2}, ${item.svg.node.height.animVal.value - this.curveMax / 2}
                    L ${this.curveMax / 2}, ${item.svg.node.height.animVal.value - this.curveMax / 2}
                    Q ${curve}, ${item.svg.node.height.animVal.value / 2} ${this.curveMax / 2}, ${this.curveMax / 2}
                `);
            }
        });
    }
    animateItemsForward() {
        if (this.diff < 300 && this.diff > -300) {
            this.setPlot(this.diff / 10 + this.curveMin, '<')
        }
    }
    // animateItemsBack() {
    //     if (this.diff < 300 && this.diff > -300) {
    //         this.setPlot(this.diff / 10 + this.curveMin, '<')
    //         // console.log(this.diff / 10)
    //     }
    // }
    animateItems(direction) {
        this.curve = this.curveMin;
        this.isAnimationStarted = true;
        this.interval = setInterval(() => {          
            if (this.curve < this.curveMin) {
                this.isBack = false;
                this.isAnimationStarted = false;
                clearInterval(this.interval);
            }
            if (this.curve < this.curveMax && !this.isBack) {
                this.curve++;
            } else {
                this.isBack = true;
                this.curve--;
            } 
            this.setPlot(this.curve, direction);
        }, this.frame)
    }
    // checkDiff() {
    //     // console.log(this.slidedRange - )
    // }
    // setInterval() {
    //     this.clearInterval();
    //     this.fireInterval = setInterval(() => {
    //         this.slidedRangeNew = this.slidedRange;
            
    //         // console.log('fire');
    //     }, 50, () => {
    //         this.clearInterval();            
    //     })
    // }
    // clearInterval() {
    //     clearInterval(this.fireInterval);
    //     // this.animateItems();
    //     console.log(`interval ${this.fireInterval} was cleared;`)
    // }
    init() {
        this.createSVG();
        if (!this.slider) return;
        this.slider.mount();
        
        this.slider.on(['run.before'], (item) => {
            this.getSlidedRange(document.querySelector('.property-type__items.glide__slides'));
            if (!this.isAnimationStarted) {
                this.animateItems(item.direction);
            }
        });
        this.slider.on(['swipe.start'], (item) => {
            this.getSlidedRange(document.querySelector('.property-type__items.glide__slides'));
            this.slidedRangeNew = this.slidedRange;
            // console.log('slided range ' + this.slidedRange)
        });
        this.slider.on(['swipe.move'], (item) => {
            // this.setInterval();
            // this.setInterval();
            this.getSlidedRange(document.querySelector('.property-type__items.glide__slides'));
            this.diff = this.slidedRange - this.slidedRangeNew;
            // console.log(this.diff);
            this.animateItemsForward();
        });
        this.slider.on(['swipe.end'], (item) => {
            // this.clearInterval();
            this.getSlidedRange(document.querySelector('.property-type__items.glide__slides'));
            this.slidedRangeNew = this.slidedRange;
            // console.log('slided range ' + this.slidedRange)
        });
    }
}

export default PropertyType;