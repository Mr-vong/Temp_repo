import displayProducts from "../displayProducts.js";
import { getElement } from "../utils.js";

function setupSearch(products){
  const form = getElement('input-form');
  const nameInput = getElement('search-input');

  form.addEventListener('keyup', () => {
    const value = nameInput.value.toLowerCase();
    if(value){
      const newProducts = products.filter(product => {
        let { name } = product.fields;
        name = name.toLowerCase();
        if(name.includes(value)){
          return product;
        }
      })
      displayProducts(newProducts);
      if(newProducts.length < 1){
        const productsContainer = getElement('products-container');
        productsContainer.innerHTML = `
          <h3 class="filter-error">Sorry, no products matched your search</h3>
        `;
      }
    }
    else{
      displayProducts(products);
    }
  })
}

export default setupSearch;