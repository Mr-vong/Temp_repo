import { getStorageItem, setStorageItem } from "./utils.js";

let store = getStorageItem('store');

function setupStore(products){
  store = products.map(product => {
    const { id, fields } = product;
    const { company, name, price, featured, color, image: img } = fields;
    const image = img[0].url;
    
    return { id, company, name, price, featured, color, image };
  });

  setStorageItem("store", store);
}

export { store, setupStore };