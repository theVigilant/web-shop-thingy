'use strict';

const global = {
    basket: [],
};

const findElemets = function() {
    global.$app = $('#wrapper');
    global.$header = $('#wn__header');
    global.$main = global.$app.find('.main');

    // Header Menu links
    global.$menuLinks = global.$header.find('.mainmenu-link');

    // Header Search btn
    global.$headerSearchBtn = global.$header.find('.shop_search > a');

    // Header Shopcart btn
    global.$headerCartBtn = global.$header.find('.shopcart > a');
    global.$headerCartCounter = global.$headerCartBtn.find('.product_qun');

};

const bindEvents = function() {
    // Switch page
    global.$app.on('click', '.js-switch-page', e => pageController.setActivePage(e, $(e.currentTarget)));
};


// Main
(() => {
    console.log('----------------------------')
    findElemets();
    bindEvents();

    pageController.init(global.$menuLinks);
    pageController.setActivePage();

    // Read cached page name

})();
