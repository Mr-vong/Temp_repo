import '../toggleSidebar.js';
import '../cart/toggleCart.js';

// specific imports
import { store, setupStore } from '../store.js';
import displayProducts from '../displayProducts.js';
import { getElement } from '../utils.js';

// filter imports
import setupCompanies from '../filter/companies.js';
import setupSearch from '../filter/search.js';
import setupPrice from '../filter/price.js';

// import fetch products
import fetchProducts from '../fetchProducts.js';

window.addEventListener('DOMContentLoaded', init);

async function init(){
  const pageLoading = getElement('page-loading');

  if(store.length < 1){
    const products = await fetchProducts();
    setupStore(products);
  }

  displayProducts(store, getElement("products-container"));
  setupCompanies(store);
  setupSearch(store);
  setupPrice(store);

  pageLoading.style.display = 'none';
}