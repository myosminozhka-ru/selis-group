export const headerMobileMenuIn = (data) => {
    const templateTop = `
        <div data-screen="${data.key}" class="header__mobile_menu-in">
            <div class="header__mobile_menu-top">
                <div class="header__mobile_menu-top-in">
                    <nav class="header__mobile_menu-nav child">
                        <ul>`
    let templateMenu = '';
    data.links?.forEach(item => {
        if (item.children) {
            templateMenu+= `
                <li>
                    <div data-target="${item.key}" data-back="true" class="arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 33 11" fill="none">
                            <path d="M0.998946 5.31019L31.0001 5.31019M31.0001 5.31019L26.1005 0.818362M31.0001 5.31019L26.0628 9.90892" stroke="#050505" stroke-width="2"></path>
                        </svg>
                    </div>
                    <a href="${item.href}">${item.text}</a>
                </li>
            `
        } else {
            templateMenu += `
                <li>
                    <a href="#" class="arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 33 11" fill="none">
                            <path d="M0.998946 5.31019L31.0001 5.31019M31.0001 5.31019L26.1005 0.818362M31.0001 5.31019L26.0628 9.90892" stroke="#050505" stroke-width="2"></path>
                        </svg>
                    </a>
                    <a href="${item.href}">${item.text}</a>
                </li>
            `
        }
        
    });
    const templateBottom =`</ul>
                    </nav>
                </div>
            </div>
        </div>
    `;
    return templateTop + templateMenu + templateBottom;
};