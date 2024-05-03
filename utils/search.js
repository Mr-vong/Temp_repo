import displayProduct from "./displayProduct.js";
import getElement from "./getElement.js";

function search(e, products){
  let filterProducts;
  const value = e.currentTarget.value;
  
  filterProducts = products.filter(product => {
    if(product.title.includes(value)){
      return product;
    }
  });

  displayProduct(filterProducts);
}
export default search;