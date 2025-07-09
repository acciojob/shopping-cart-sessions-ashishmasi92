// This is the boilerplate code given for you
// You can modify this code
// Product data

const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

// DOM elements
const productList = document.getElementById("product-list");

// Render product list
function renderProducts() {
  products.forEach((product) => {
    const li = document.createElement("li");
	  const btn = document.createElement("button")
	  btn.className="add-to-cart"
	  btn.innerText = "Add to Cart";
	  btn.id = `${product.id}`
	  btn.addEventListener("click",addToCart)
	  // btn.data-id=`${product.id}`
    li.innerHTML = `${product.name} - $${product.price} `;
    productList.append(li,btn);
  });
}

// Render cart list
let cartList = document.getElementById("cart-list");
function renderCart() {
if(!sessionStorage.getItem("products")){
	return
}
	let x = JSON.parse(sessionStorage.getItem("products"))
	
	for(let t of x){
	let li = document.createElement("li");
		let btns = document.createElement("button")
		btns.innerText = "remove"
	li.innerHTML = `${t.name} - ${t.price}`
		li.append(btns)
		cartList.append(li)
		btns.addEventListener("click",removeFromCart)
	}
}
	

// Add item to cart

function addToCart(productId) {
	let id = productId.target.id;
	
let items = products.find((v)=>{
	return v.id==id
})
	if(!items){
		return
	}
	
	let cart = JSON.parse(sessionStorage.getItem("Products"))||[];
	cart.push(items)
	sessionStorage.setItem("products", JSON.stringify(cart));
	
	renderCart()
	
}

// Remove item from cart
function removeFromCart(productId) {
	let id = productId.target.id;

	
}

// Clear cart
let clearBtn = document.getElementById("clear-cart-btn")
clearBtn.addEventListener("click",clearCart)
function clearCart() {
	cartList.innerText=""
	sessionStorage.clear();
}

// Initial render
renderProducts();
// renderCart();
