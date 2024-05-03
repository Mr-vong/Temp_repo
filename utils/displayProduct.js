import getElement from './getElement.js';

function displayProduct(products){
  const productsContainer = getElement('products-container');
  let productList = products.map(product => {
    return `
      <div class="product">
        <img 
          src="${product.image}"
          class="product-img img"
        >
        <footer>
          <h5 class="product-name">${product.title}</h5>
          <span class="product-price">${product.price}</span>
        </footer>
      </div>
    `
  });

  productList = productList.join("");
  productsContainer.innerHTML = productList;
}

export default displayProduct;