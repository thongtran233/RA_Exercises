"use strict";

// Khai báo các thông số chung
let loginEmail = document.querySelector("#loginEmail");
let loginPass = document.querySelector("#loginPassword");
let loginBtn = document.querySelector("#loginBtn");
let registerUserName = document.querySelector("#username");
let registerEmail = document.querySelector("#signUpEmail");
let registerPass = document.querySelector("#signUpPassword");
let confirmPass = document.querySelector("#confirmPass");
let policyAgreement = document.querySelector("#policyAgreement");
let registerBtn = document.querySelector("#registerBtn");
let errorUsername = document.querySelector(".errorUserName");
let errorEmail = document.querySelector(".errorEmail");
let errorPassword = document.querySelector(".errorPassword");
let errorRepassword = document.querySelector(".errorRepassword");
let errorLoginEmail = document.querySelector(".errorLoginEmail");
let errorLoginPassword = document.querySelector(".errorLoginPassword");

// Check login and forward to homepage when success
let checkLogin = function () {
  adminAccountCheck();
  let emailExisting = false;
  if (accountList.length > 0) {
    for (let i = 0; i < accountList.length; i++) {
      if (loginEmail.value === accountList[i].email) {
        emailExisting = true;

        if (loginPass.value === accountList[i].password) {
          logingAccount.push(accountList[i]);
          localStorage.setItem("Login Account", JSON.stringify(logingAccount));
          localStorage.setItem("Login Status", true);
          window.location.href = "index.html";
        } else {
          errorLoginPassword.innerHTML = "*Wrong password. Please input again";
          loginPass.classList.add("error");
        }
      }
    }

    if (emailExisting) {
      loginEmail.classList.remove("error");
      errorLoginEmail.innerHTML = " ";
    } else {
      errorLoginEmail.innerHTML = "This email doesn't existing";
      loginEmail.classList.add("error");
    }

    return;
  } else {
    errorLoginEmail.innerHTML = "This email doesn't existing";
    loginEmail.classList.add("error");
    return;
  }
};

// Create new account function
let createNewAcc = function () {
  let isValid = true;
  let isExistingAcc = checkExistingUsername(accountList);
  let isExistingEmail = checkExistingEmail(accountList);
  let isValuePass = validateRegisterPass();
  if (isExistingAcc || isExistingEmail || !isValuePass) {
    isValid = false;
  }

  // Check if password and confirm password is match
  if (registerPass.value !== confirmPass.value) {
    isValid = false;

    errorRepassword.innerHTML = "*Confirm password not match inputed Password";
    confirmPass.classList.add("error");
  } else {
    errorRepassword.innerHTML = "";
    confirmPass.classList.remove("error");
  }

  // Check if policy agreement is checked
  if (!policyAgreement.checked) {
    isValid = false;
  }

  if (isValid) {
    let account = {
      username: registerUserName.value,
      email: registerEmail.value,
      password: registerPass.value,
      isAdmin: false,
      cart: [],
      favorite: [],
      buyHistory: [],
    };
    accountList.push(account);
    createToast("accountCreateSuccess");
    localStorage.setItem("Account", JSON.stringify(accountList));

    // Reset input field
    document.querySelectorAll("input").forEach((input) => {
      input.type === "checkbox"
        ? (policyAgreement.checked = false)
        : (input.value = "");
    });
  }
};

// Check if field is empty
// let checkEmpty = function () {
//   if (registerUserName.value == "") {
//     errorUsername.innerHTML = "*This field cannot be empty";
//     registerUserName.classList.add("error");
//   } else {
//     errorUsername.innerHTML = "";
//     registerUserName.classList.remove("error");
//   }

//   if (registerEmail.value == "") {
//     errorEmail.innerHTML = "*This field cannot be empty";
//     registerUserName.classList.add("error");
//   } else {
//     errorEmail.innerHTML = "";
//     registerUserName.classList.remove("error");
//   }

//   if (registerPass.value == "") {
//     errorPassword.innerHTML = "*This field cannot be empty";
//     registerPass.classList.add("error");
//     errorPassword.classList.remove("hint-display");
//     errorPassword.classList.add("error-display");
//   } else {
//     errorPassword.innerHTML =
//       "Password need at least 1 UpperCase, number and 6-20 characters";
//     registerPass.classList.remove("error");
//     errorPassword.classList.add("hint-display");
//     errorPassword.classList.remove("error-display");
//   }

//   if (confirmPass.value == "") {
//     errorRepassword.innerHTML = "*This field cannot be empty";
//     confirmPass.classList.add("error");
//   } else {
//     errorRepassword.innerHTML = "";
//     confirmPass.classList.remove("error");
//   }
// };

// Check if login account is admin account
let adminAccountCheck = function () {
  for (let i = 0; i < accountList.length; i++) {
    if (loginEmail.value === accountList[i].email && accountList[i].isAdmin) {
      isAdmin = true;
      localStorage.setItem("Is admin", isAdmin);
    }
  }
};

// Check input password if contain at least one UpperCase character, lowercase Character, number and between 6-20 character
let validateRegisterPass = function () {
  let passCheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  if (registerPass.value.search(passCheck) < 0) {
    registerPass.classList.add("error");
    errorPassword.classList.remove("hint-display");
    errorPassword.classList.add("error-display");
    return false;
  } else {
    registerPass.classList.remove("error");
    errorPassword.classList.add("hint-display");
    errorPassword.classList.remove("error-display");
    return true;
  }
};

// Check if username already existed
let checkExistingUsername = function (accountArr) {
  if (accountArr.length > 0) {
    for (let i = 0; i < accountArr.length; i++) {
      if (registerUserName.value == accountArr[i].username) {
        errorUsername.innerHTML = "*Username already existing";
        registerUserName.classList.add("error");
        return true;
      }
    }
  }
  errorUsername.innerHTML = "";
  registerUserName.classList.remove("error");
  return false;
};

// Check if email password already existed
let checkExistingEmail = function (accountArr) {
  if (accountArr.length > 0) {
    for (let i = 0; i < accountArr.length; i++) {
      if (registerEmail.value == accountArr[i].email) {
        errorEmail.innerHTML = "*Email already Existing";
        registerEmail.classList.add("error");
        return true;
      }
    }
  }
  errorEmail.innerHTML = "";
  registerEmail.classList.remove("error");
  return false;
};

// Add event
registerBtn.addEventListener("click", createNewAcc);
loginBtn.addEventListener("click", checkLogin);
navRender();
