import { allProductsUrl } from "./utils.js";

async function fetchProducts(){
  const response = await fetch(allProductsUrl);
  const data = await response.json();
  
  return data;
}

export default fetchProducts;