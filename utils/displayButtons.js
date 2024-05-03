import getElement from "./getElement.js";

function displayButton(products){
  const companyBtnContainer = getElement('company-btn-container');
  const companies = [
      "all",
      ...new Set(products.map(product => product.company)
      )
  ];
  let companyBtnList = companies.map(company => {
    return `<button role="button" class="company-btn" data-company="${company}">${company}</button>`
  });

  companyBtnList = companyBtnList.join("");
  companyBtnContainer.innerHTML = companyBtnList;
}

export default displayButton;