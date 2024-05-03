import fetchData from "./utils/fetchData.js";
import displayProduct from "./utils/displayProduct.js";
import displayButton from "./utils/displayButtons.js";
import getElement from "./utils/getElement.js";
import search from "./utils/search.js";

const username = 'Mr-vong';
const repository = 'data';
const path = 'main/products.json';
const url = `https://raw.githubusercontent.com/${username}/${repository}/${path}`;

const textInput = getElement('text-input');

document.addEventListener('DOMContentLoaded', () => {
  fetchData(url).then((products) => {
    displayProduct(products);
    displayButton(products);

    textInput.addEventListener('input', function(e){ search(e, products) })
  })
});