"use strict";

// Cài đặt các thông số chung
let products = document.querySelector("#productList");
let notification = "";

// Lấy dữ liệu từ local storage

// localStorage.setItem("Product List", JSON.stringify(getProductList));

// Set các thông số khi có giá trị null

// Hàm render ra màn hình từ dữ liệu có sẵn và hiển thị trạng thái đăng nhập của người dùng
let renderDisplay = function () {
  let result = "";
  for (let i = 0; i < getProductList.length; i++) {
    result += `
        <div class="product col-lg-3 col-md-4 col-12 col-sm-6">
        <div class="product-wrap">
          <div class="product-img">
            <img
              src=${getProductList[i].img}
              alt=""
              class="productImg"
            />
          </div>
          <div class="product-info">
            <h4 class="productName">${getProductList[i].name}</h4>
            <!-- <p class="productBrand">Brand</p> -->
            <p class="productPrice">$${getProductList[i].price}</p>

            <button class="btn add-to-cart"  onclick="addToCart(${getProductList[i].id})">
              <i class="fa-solid fa-cart-plus" style="color: #608783"></i>
            </button>
            <button class="btn add-to-favorite " onclick="addToFavorite(${getProductList[i].id})">
              <i
                class="fa-solid fa-heart-circle-plus"
                style="color: #608783"
              ></i>
            </button>
          </div>
        </div>
      </div>`;
  }

  products.innerHTML = result;

  // Render NavBar
  navRender();
};

// Hám sự kiện khi click vào nút add to cart
let addToCart = function (itemId) {
  let index = getProductList.findIndex((e) => e.id == itemId); // Vị trí của sản phẩm trong dữ liệu
  console.log(index);
  notification = "addToCartNotify";
  if (!isLogginIn) {
    notification = "cantAddToCartError";
    createToast(notification);
  } else {
    console.log(typeof logingAcc[0].cart);
    if (logingAcc.length > 0) {
      if (logingAcc[0].cart === null) {
        logingAcc[0].cart = [];
        logingAcc[0].cart.push(getProductList[index]);
      } else {
        // console.log(1);
        let isAdded = false;
        for (let i = 0; i < logingAcc[0].cart.length; i++) {
          if (logingAcc[0].cart[i].id == itemId) {
            isAdded = true;
            break;
          }
        }

        if (isAdded) {
          let cartIndex = logingAcc[0].cart.findIndex((e) => e.id == itemId);
          logingAcc[0].cart[cartIndex].quantity++;
        } else {
          logingAcc[0].cart.push(getProductList[index]);
        }

        countDisplay("cart");
      }
      createToast(notification);
      localStorage.setItem("Login Account", JSON.stringify(logingAcc));
      // Update proxiate acc in account arr
      let accIndex = accountList.findIndex(
        (account) => account.email === logingAcc[0].email
      );
      accountList.splice(accIndex, 1, logingAcc[0]);
      localStorage.setItem("Account", JSON.stringify(accountList));
    }
  }
};

// Hàm sự kiện khi click vào nút add to favorite
let addToFavorite = function (itemId) {
  let index = getProductList.findIndex((e) => e.id == itemId); // Vị trí của sản phẩm trong dữ liệu
  console.log(index);
  notification = "addToFavoritetNotify";
  let favoriteBtn = document.querySelectorAll(".add-to-favorite");

  if (!isLogginIn) {
    notification = "cantAddToFavoriteError";
    createToast(notification);
  } else {
    if (logingAcc.length > 0) {
      if (logingAcc[0].favorite === null) {
        logingAcc[0].favorite = [];
        logingAcc[0].favorite.push(getProductList[index]);
      } else {
        let isAdded = false;
        for (let i = 0; i < logingAcc[0].favorite.length; i++) {
          if (logingAcc[0].favorite[i].id == itemId) {
            isAdded = true;
            break;
          }
        }

        if (isAdded) {
          let favoriteIndex = logingAcc[0].favorite.findIndex(
            (e) => e.id == itemId
          );
          notification = "addToFavoritetNotifyError";
        } else {
          logingAcc[0].favorite.push(getProductList[index]);
        }
        countDisplay("favorite");
      }
      createToast(notification);
      //   console.log(getProductList[itemId]);
      localStorage.setItem("Login Account", JSON.stringify(logingAcc));

      // Update proxiate acc in account arr
      let accIndex = accountList.findIndex(
        (account) => account.email === logingAcc[0].email
      );
      accountList.splice(accIndex, 1, logingAcc[0]);
      localStorage.setItem("Account", JSON.stringify(accountList));
    }
  }
};

// Các event của trang web
renderDisplay();
