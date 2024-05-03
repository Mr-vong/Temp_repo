import fetchData from "./utils/fetchData.js";
import displayProduct from "./utils/displayProduct.js";
import displayButton from "./utils/displayButtons.js";

const username = 'Mr-vong';
const repository = 'data';
const path = 'main/products.json';
const url = `https://raw.githubusercontent.com/${username}/${repository}/${path}`;

document.addEventListener('DOMContentLoaded', () => {
  fetchData(url).then((products) => {
    displayProduct(products);
    displayButton(products);
  })
});