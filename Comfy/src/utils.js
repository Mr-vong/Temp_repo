const allProductsUrl = 'https://www.course-api.com/javascript-store-products';


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

export { allProductsUrl, getElement, formatPrice }