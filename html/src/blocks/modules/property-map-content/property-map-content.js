import mapboxgl from 'mapbox-gl';
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import Glide from '@glidejs/glide'
// import MapboxWorker from 'mapbox-gl/dist/mapbox-gl-csp-worker';
mapboxgl.accessToken = 'pk.eyJ1IjoicnVzbGFuZ2FyYXBvdiIsImEiOiJja3d2NDNreTAxd2pyMndwbXgzZngwaXVrIn0.8J-2MovZrq77dZCecY-CRQ';
// mapboxgl.workerClass = MapboxWorker;

const PropertyMapContent = class PropertyMapContent {
    constructor(
        sliderOptions = {
            type: 'carousel',
            startAt: 0,
            gap: 0,
            perView: 1
        }
    ) {
            console.log(sliderOptions)
        this.map;
        this.drawer;
        this.sliderOptions = sliderOptions;
        this.isDrawerCrated = false;
        this.isLoading = false;
        this.isMapOpened = false;
    }
    createMap() {
        if (document.querySelector('#map_container')) {
            this.map = new mapboxgl.Map({
                container: 'map_container', // container ID
                style: 'mapbox://styles/mapbox/streets-v11', // style URL
                center: [-74.5, 40], // starting position [lng, lat]
                zoom: 9 // starting zoom
            });
            this.map.on('draw.create', () => {
                this.updateList();
            });
            this.map.on('draw.delete', () => {
                this.updateList();
            });
            this.map.on('draw.update', () => {
                this.updateList();
            });

            this.createMarker({
                position: [-74.4, 40]
            })
            this.createMarker({
                position: [-74.5, 40]
            })

            console.log(this.map);
        }
    }
    createMarker({position}) {
        new mapboxgl.Marker()
            .setLngLat(position)
            .addTo(this.map);
    }
    updateList() {
        this.isLoading = true;
        if (window.innerWidth <= 1023) {
            this.isMapOpened = false;
            this.toggleDrawerToMap();
            if (document.querySelector('.property-map-content__items')) {
                document.querySelector('.property-map-content__items').scrollIntoView({behavior: "smooth"});
            }
        }
        setTimeout(() => {
            this.isLoading = false;
        }, 1000)
    }
    createDrawer() {
        this.drawer = new MapboxDraw({
            displayControlsDefault: false,
            defaultMode: 'draw_polygon'
        });
        
    }
    toggleDrawerToMap() {
        console.log(this.isDrawerCrated);
        if (!this.isDrawerCrated) {
            this.map.addControl(this.drawer);
        } else {
            this.map.removeControl(this.drawer);
        }
        this.isDrawerCrated = !this.isDrawerCrated;
    }
    setBlockHeight() {
        if (!document.querySelector('.property-map-content__in') || !document.querySelector('.header') || window.innerWidth <= 1023) return;
            document.querySelector('.property-map-content__in').setAttribute('style', `height: calc(100vh - ${document.querySelector('.header').offsetHeight}px)`);

        if (!document.querySelector('.property-map-content__items-title') && !document.querySelector('property-map-content__items-in')  || window.innerWidth <= 1023) return;
        console.log(123321123321123321)
            document.querySelector('.property-map-content__items-in').setAttribute('style', `height: calc(100% - ${document.querySelector('.property-map-content__items-title').offsetHeight}px)`);
    }
    initSlider(item) {
        new Glide(item, this.sliderOptions).mount();
    }
    toggleMobileMap() {
        this.isMapOpened = !this.isMapOpened;
        console.log(this.isMapOpened);
    }
    init() {
        this.createMap();
        this.createDrawer();
        this.setBlockHeight();
        if (document.querySelector('.property-map-content__map-drawer')) {
            document.querySelector('.property-map-content__map-drawer').addEventListener('click', () => {
                this.toggleDrawerToMap();
            })
        }
        if (document.querySelector('.property-map-content__item-images')) {
            document.querySelectorAll('.property-map-content__item-images').forEach(item => {
                this.initSlider(item)
            })
        }
        if (document.querySelector('.property-map-first + .mobile-filter .main-filter__map')) {
            document.querySelector('.property-map-first + .mobile-filter .main-filter__map').addEventListener('click', event => {
                event.preventDefault();
                this.toggleMobileMap();
            })
        }
    }
}
export default PropertyMapContent;
// const map = new mapboxgl.Map({
//     container: 'map', // container ID
//     style: 'mapbox://styles/mapbox/streets-v11', // style URL
//     center: [-74.5, 40], // starting position [lng, lat]
//     zoom: 9 // starting zoom
// });