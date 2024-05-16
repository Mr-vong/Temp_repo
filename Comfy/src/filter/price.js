import displayProducts from "../displayProducts.js";
import { getElement } from "../utils.js";

function setupPrice(products){
  const priceInput = getElement('price-filter');
  const priceValue = getElement('price-value');

  // Setup filter
  let maxPrive = products.map(product => product.price);
  maxPrive = Math.max(...maxPrive);
  maxPrive = Math.ceil(maxPrive / 100);
  priceInput.value = maxPrive
  priceInput.min = 0;
  priceInput.max = maxPrive;
  priceValue.textContent = `Value: $${maxPrive}`;


  priceInput.addEventListener('input', () => {
    const value = parseInt(priceInput.value);
    priceValue.textContent = `$${value}`;

    const newProducts = products.filter(product => product.fields.price / 100 <= value);
    console.log(newProducts);
    displayProducts(newProducts);

    if(newProducts.length < 1){
      const productsContainer = getElement('products-container');
      productsContainer.innerHTML = `<h3 class="filter-error">sorry, no products matched your search</h3>`;
    }
  })
}

export default setupPrice;