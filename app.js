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

// display products
class UI {
  displayProducts(products){
    let result='';
    products.forEach(product => {
      result +=`
      <!-- single products -->
      <article class="product">
        <div class="img-container">
          <img src=${product.image} alt="product" class="product-img">
          <button class="bag-btn" data-id=${product.id}>
            <i class="fas fa-shopping-cart"></i>
            add to bag
          </button>
        </div>
        <h3>${product.title}</h3>
        <h4>${product.price} €</h4>
      </article>
      <!-- End Of single Products -->
      `
    });
    productsDOM.innerHTML = result;
  }
}

//eventlistener
document.addEventListener("DOMContentLoaded",()=> {
  const products = new Products();
  const ui = new UI();

  //get all products
  products.getProducts().then(products => ui.displayProducts(products));

});