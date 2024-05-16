import { formatPrice } from "./utils.js";
import { getElement } from "./utils.js";

function displayProducts(products, container = getElement("products-container")){
  let productsList = products.map(product => {
    const { id, name, price, image } = product

    return `
      <article class="product">
        <div class="product-container">
            <img src="${image}" class="product-img img" alt="${name}">
            <div class="product-icons">
            <a href="product.html?id=${id}" class="product-icon">
                <i class="fas fa-search"></i>
            </a>
            <button class="product-cart-btn  product-icon" data-id="${id}">
                <i class="fas fa-shopping-cart"></i>
            </button>
            </div>
        </div>
        <footer>
          <p class="product-name">${name}</p>
          <h4 class="product-price">${formatPrice(price)}</h4>
        </footer>
      </article>
    `
  });

  productsList = productsList.join('');
  container.innerHTML = productsList;
}

export default displayProducts;