import "./src/toggleSidebar.js";
import "./src/cart/toggleCart.js";

import { getElement } from "./src/utils.js";
import fetchProducts from "./src/fetchProducts.js";
import displayProducts from "./src/displayProducts.js";
import { store, setupStore } from "./src/store.js";

window.addEventListener('DOMContentLoaded', init);

async function init(){
  const products = await fetchProducts();
  if(products){
    setupStore(products);
    const featured = store.filter(product => product.featured === true);
    displayProducts(featured, getElement('featured-center'));
  }
}