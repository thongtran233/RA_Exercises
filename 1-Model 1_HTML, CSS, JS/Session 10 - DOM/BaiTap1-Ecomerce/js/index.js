"use strict";

let product = [];

let favorite = [];
let cart = [];
let productList = document.querySelector("#productList");

for (let i = 1; i <= 12; i++) {
  let string = `.\\img\\product\\product-${i}.jpg`;
  product.push(string);
}

// Add to cart function
function addToCart(number) {
  console.log(number);
  cart.push(product[number]);
  console.log(cart);
}

// Add to favorite function
function addToFavorite(number) {
  favorite.push(product[number]);
}

// render to display
function display(array) {
  let result = "";
  for (let i = 0; i < array.length; i++) {
    result += `      
            <div class="productCard">
            <img src="${array[i]}" id="${i}" class="productImage" />
            <button onclick="addToCart(${i})">Add to Cart</button>
            <button onclick="addToFavorite(${i})"">Add to Favorite</button>
            </div>
           
            `;
  }
  productList.innerHTML = result;
}

// display(product);

console.log(cart);
console.log(favorite);
console.log(product);
