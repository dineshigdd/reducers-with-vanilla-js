//you need to specify the type: 'json' import assertion. 
//This tells the JavaScript compiler that the file that is being imported is a JSON file.
import  inventoryList from './product.json' assert { type: 'json' };
import { productReducer } from './productReducer.js';


let  productList ='';
const initialState = inventoryList;

//getting the product list
productList = productReducer( initialState,{});
displayProductList();

//adding a new product 
document.querySelector('#addProductBtn').onclick = () => {
    productList = productReducer( initialState, {
      type: "add_product",
      payload:{ 
          "id": 4,
          "name": "Product D",
          "price": '40'
        }
    })

    displayProductList();
}

//deleting a specific product
document.querySelector('#deleteProductBtn').onclick = () => {
    productList = productReducer( initialState, {
      type: "remove_product",
      payload:{ "id": 2 }
    })
  
    displayProductList();
}

//updating a specific product
document.querySelector('#updateProductBtn').onclick = () => {
    productList = productReducer( initialState, {
      type: "update_product",
      payload: {
        "id": 2,
        "name": "Product D",
        "price": 12.25
      }
    })

    displayProductList();
}



function displayProductList(){
      document.querySelector('#app').innerHTML = `
      <ol>
      ${ productList.map( product => `<li>${product.name}  ||  price: $${product.price }</li>`).join('') }
      </ol>
    `

    /*
I added .join('') method to the map result because the map function generates 
an array of strings representing each product item within <li> elements. 
By default, these strings are separated by commas (,).

The .join('') method is used to concatenate these array elements (strings) into a single 
string with no separator between them. 
This results in valid HTML structure without unnecessary commas.
*/
}




