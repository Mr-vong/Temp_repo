import { getElement } from "../utils.js";
import displayProducts from "../displayProducts.js";


function setupCompanies(products){
  const container = getElement('companies');
  const companies = [
    'all',
    ...new Set(products.map(product => {
      return product.fields.company
    }))
  ];

  container.innerHTML = companies.map(company => {
    return `
      <button class="company-btn" data-company="${company}">${company}</button>
    `
  }).join('');

  const companyBtns = container.querySelectorAll('.company-btn');
  companyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const company = e.currentTarget.dataset.company;
      if(company === 'all'){
        displayProducts(products);
        return;
      }

      const filteredProducts = products.filter(product => {
        if(product.fields.company === company){
          return product;
        }
      });

      displayProducts(filteredProducts);
    })
  })
}

export default setupCompanies;