const allProductsUrl = 'https://www.course-api.com/javascript-store-products';
const sigleProductUrl = 'https://www.course-api.com/javascript-store-single-product';

function getElement(selector, getAll = false){
  const el = getAll ?
    document.querySelectorAll(`.${selector}`)
    :
    document.querySelector(`.${selector}`)
  ;

  if(el){
    return el;
  }
  
  throw new Error(
    `Please check "${selector}" selector, no such as element exit`
  );
}

function formatPrice(price){
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format((price / 100).toFixed(2));

  return formattedPrice;
}

function getStorageItem(item){
  let storageItem = localStorage.getItem(item);
  if(storageItem){
    storageItem = JSON.parse(localStorage.getItem(item));
  }
  else{
    storageItem = [];
  }

  return storageItem;
}

function setStorageItem(name, item){
  localStorage.setItem(name, JSON.stringify(item));
}

export { allProductsUrl, sigleProductUrl, getElement, formatPrice, getStorageItem, setStorageItem }