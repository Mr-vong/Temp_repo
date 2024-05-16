import '../toggleSidebar.js';
import '../cart/toggleCart.js';

// specific imports
// import { store, setupStore } from '../store.js';
import displayProducts from '../displayProducts.js';
import { getElement } from '../utils.js';

// import fetch products
import fetchProducts from '../fetchProducts.js';
import setupCompanies from '../filter/companies.js';
import setupSearch from '../filter/search.js';
import setupPrice from '../filter/price.js';

window.addEventListener('DOMContentLoaded', () => {
  fetchProducts().then(products => {
    displayProducts(products, getElement("products-container"));
    setupCompanies(products);
    setupSearch(products);
    setupPrice(products);
  })
});