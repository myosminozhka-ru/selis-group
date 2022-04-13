const Modals = class Modals {
    constructor({modalsSelector, modalsOpenerSelector, openedClass}){
        this.modalsSelector = modalsSelector;
        this.modalsOpenerSelector = modalsOpenerSelector;
        this.openedClass = openedClass;
    }
    openModal(id) {
        if (!document.querySelector(`[${this.modalsSelector}="${id}"]`)) return;
        document.querySelector(`[${this.modalsSelector}="${id}"]`).classList.add(this.openedClass);
    }
    closeModal(id) {
        if (!document.querySelector(`[${this.modalsSelector}="${id}"]`)) return;
        document.querySelector(`[${this.modalsSelector}="${id}"]`).classList.remove(this.openedClass);
    }
    addClickListener() {
        document.addEventListener('click', (event) => {
            console.log('click to open modal');
            if (event.target.dataset.modalId) {
                event.preventDefault();
                this.openModal(event.target.dataset.modalId);
            }
            if (!event.target.dataset.modalId && event.target.dataset.modal) {
                this.closeModal(document.querySelector(`[${this.modalsSelector}].isOpened`).dataset.modal);
            }
            if (event.target.classList.contains('modal__closer')) {
                event.target.closest('.modal').classList.remove('isOpened')
            }
            if (event.target.closest('.property-item') && document.querySelector(`.propertyModal[data-modal="${event.target.dataset.modalId}"] .modal__left img`)) {
                console.log('image', event.target.closest('.property-item').querySelector('.property-item__left .glide__slide--active img').src);
                document.querySelector(`.propertyModal[data-modal="${event.target.dataset.modalId}"] .modal__left img`).src = event.target.closest('.property-item').querySelector('.property-item__left .glide__slide--active img').src;
                console.log('image2', document.querySelector('.propertyModal .modal__left img').src);
            }
        })
    }
    addKeyupListener() {
        document.addEventListener('keyup', (event) => {
            if (event.keyCode === 27 && document.querySelector(`[${this.modalsSelector}].isOpened`)) {
                this.closeModal(document.querySelector(`[${this.modalsSelector}].isOpened`).dataset.modal);
            }
        })
    }
    addOnSubmitListener() {
        if (!document.querySelector('.modal__form')) return;
        document.querySelector('.modal__form').addEventListener('submit', (event) => {
            event.target.closest('.modal').classList.add('isSended');
        })
    }
    init() {
        if (!this.modalsSelector && this.modalsOpenerSelector) return;
        this.addClickListener();
        this.addKeyupListener();
    }
    fakeSend(event) {
        if (event.target.closest('.modal')) {
            event.target.closest('.modal').classList.add('isSended')
        }
    }
}

export default Modals;