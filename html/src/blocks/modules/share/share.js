export default class Share {
    constructor() {
        this.isShowDropdown = false;
    }

    init() {
        document.addEventListener('click', (e) => {
            if (!e.composedPath().find(item => item.classList?.contains('share'))) {
                this.hiddenDropdown();
            }
        });
    }

    toggleDropdown() {
        this.isShowDropdown = !this.isShowDropdown;
    }

    showDropdown() {
        this.isShowDropdown = true;
    }

    hiddenDropdown() {
        this.isShowDropdown = false;
    }

    copyUrl() {
        window.navigator.clipboard.writeText(document.location.href);
        this.isShowDropdown = false;
    }
}