import axios from 'axios';
import { GET_ALL_PRODUCTS } from './typesActions';

export default function getAllProducts() {  
  return dispatch => {
      axios.get('http://localhost:3001/api/products')
      .then(res => {
        const products = res.data
        dispatch(getProducts(products));
        //console.log(products)
      });
    }
}

function getProducts(products){ 
    return {
        type: GET_ALL_PRODUCTS,
        products
    }
}