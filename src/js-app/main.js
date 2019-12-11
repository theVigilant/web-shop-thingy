'use strict';


const global = {
    promises: new PromiseList(),
};
let localization = {};
const basket = new Basket();
const lang = 'en';
const qsDefaultParams = {
    arrayFormat: 'indices',
    format : 'RFC3986',
};
const serverURL = 'http://localhost:3000'


const findElements = function() {
    global.$app = $('#wrapper');
    global.$header = $('#wn__header');
    global.$main = global.$app.find('.main');



    // Header Search btn
    global.$headerSearchBtn = global.$header.find('.shop_search > a');

    // Header Shopcart btn
    global.$headerCartBtn = global.$header.find('.shopcart > a');
    global.$headerCartCounter = global.$headerCartBtn.find('.product_qun');
};

const bindEvents = function() {
    // Switch page
    global.$app.on('click', '.js-switch-page', e => pageController.setActivePage(e, $(e.currentTarget)));

    // Add product to cart
    global.$app.on('click', '.js-add-to-cart', e => addToCartClickHandler($(e.currentTarget)));

    // Cart
    global.$app.on('change', '.js-input-quantity', e => changeTotalPrice($(e.currentTarget)));
    global.$app.on('click', '.js-delete-cart-item', e => deleteCartItemHandler($(e.currentTarget)));
    global.$app.on('change', '.js-input-quantity', e => changeGradTotalPrice($(e.currentTatget)));

    // Categories and Filter on Shop page
    global.$app.on('click', '.js-change-category-or-subcategory', e => categoriesHandler(e));
    global.$app.on('change', `form[name="brand-checkbox-group-form"] input`, { checkboxType: 'brand' }, e => filterCheckboxGroupHandler(e));
    global.$app.on('change', `form[name="origin-checkbox-group-form"] input`, { checkboxType: 'origin' }, e => filterCheckboxGroupHandler(e));

    global.$app.on('click', '.js-quick-view', e => quickViewHandler(e));
};

// Main
(() => {
    console.log('----------------------------');
    findElements();
    bindEvents();

    // Step: Header Menu links
    global.$menuLinks = global.$header.find('.mainmenu-link');
    pageController.init(global.$menuLinks);

    global.promises.addPromise({
        name: 'localization',
        body: getLocalization(),
    });

    global.promises.all(res => {
        localization = res.localization;

        // TODO: Step: Here is render menu with js

        // Step: Change page
        pageController.setActivePage();
    });

    // Read cached page name

})();

const snowFlake = (data) => {
    console.log(data.src)
    $(`#wrapper`).prepend(`<div class="snow-flake"><img src="${data.src}" alt="icon"></div>`);
    $(`#wrapper`).prepend(`<div class="snow-flake"><img src="${data.src}" alt="icon"></div>`);

}

snowFlake(dataIconSnow);

setInterval(function() {
    
}, 1000)
