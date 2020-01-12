//variablse
const cartBtn = document.querySelector('.cart-btn');
const closeCartBtn = document.querySelector('.close-cart');
const clearCartBtn = document.querySelector('.clear-cart');
const cartDOM = document.querySelector('.cart');
const cartOverlay = document.querySelector('.cart-overlay');
const cartItems = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.cart-total');
const cartContent = document.querySelector('.cart-content');
const productsDOM = document.querySelector('.products-center');
//Cart
let cart = [];



// getting the produts
class Products {
  async getProducts(){
    try{
      let result = await fetch('products.json');
      let data = await result.json();

      let products = data.items;

      products = products.map(item =>{
        const id = item.id;
        const title = item.title;
        const price = item.price;
        const image = item.image;
        return {title,price,id,image};
      })
      return products;
      
    }catch(error){
      console.log("some error found",error);
    }    
  }
}

//eventlistener
document.addEventListener("DOMContentLoaded",()=> {
  const products = new Products();

  //get all products
  products.getProducts().then(products => console.log(products));

});