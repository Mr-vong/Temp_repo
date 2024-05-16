// global imports
import '../toggleSidebar.js';
import '../cart/toggleCart.js';

// specific
import { sigleProductUrl, getElement, formatPrice } from '../utils.js';

// selections
const centerDOM = getElement('sigle-product-center');
const pageLoading = getElement('page-loading');
const pageTitleDOM = getElement('page-hero-title');
const imgDOM = getElement('sigle-product-img');
const titleDOM = getElement('sigle-product-title');
const companyDOM = getElement('sigle-product-company');
const priceDOM = getElement('sigle-product-price');
const descDOM = getElement('sigle-product-desc');

window.addEventListener('DOMContentLoaded', async function() {
  const urlID = window.location.search;
  
  try{
    const response = await fetch(`${sigleProductUrl}${urlID}`);

    if(response.status >= 200 || response.status <= 299){
      const product = await response.json();
      const { id, fields } = product;
      const { name, company, price, description } = fields;
      const image = fields.image[0].url;

      document.title = `${name.toUpperCase()} | Comfy`
      pageTitleDOM.textContent = `home / ${name}`;
      imgDOM.src = image;
      titleDOM.textContent = name;
      companyDOM.textContent = `by ${company}`;
      priceDOM.textContent = formatPrice(price);
      descDOM.textContent = description;
    }
    else{
      console.log(response.status, response.statusText);
      centerDOM.innerHTML = `
        <div>
        <h3 class="error">sorry, something went wrong</h3>
        <a href="index.html" class="btn">back home</a>
        </div> 
      `;
    }

    pageLoading.style.display = "none";
  }
  catch(error){
    console.log(error);
  }
})