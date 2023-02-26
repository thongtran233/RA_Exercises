let amount = document.querySelector("#amount");
let btn = document.querySelector("#button");
let result = document.querySelector("#result");

btn.addEventListener("click", function () {
  result.innerHTML = "Result: " + parseInt(amount.value) / 23000 + "$";
});
