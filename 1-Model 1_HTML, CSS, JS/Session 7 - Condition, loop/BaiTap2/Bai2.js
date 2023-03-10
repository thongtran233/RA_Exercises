let inputNumber = document.querySelector("#input");
let button = document.querySelector("#button");
let result = document.querySelector("#result");

function dayOfMonth() {
  let number = parseInt(inputNumber.value);
  switch (number) {
    case 1:
      result.innerHTML = "Tháng 1 có 31 ngày";
      break;
    case 2:
      result.innerHTML = "Tháng 2 có 28 hoặc 29 ngày";
      break;
    case 3:
      result.innerHTML = "Tháng 3 có 31 ngày";
      break;
    case 5:
      result.innerHTML = "Tháng 5 có 31 ngày";
      break;
    case 7:
      result.innerHTML = "Tháng 7 có 31 ngày";
      break;
    case 8:
      result.innerHTML = "Tháng 8 có 31 ngày";
      break;
    case 10:
      result.innerHTML = "Tháng 10 có 31 ngày";
      break;
    case 12:
      result.innerHTML = "Tháng 12 có 31 ngày";
      break;
    case 4:
      result.innerHTML = "Tháng 4 có 30 ngày";
      break;
    case 6:
      result.innerHTML = "Tháng 6 có 30 ngày";
      break;
    case 9:
      result.innerHTML = "Tháng 9 có 30 ngày";
      break;
    case 11:
      result.innerHTML = "Tháng 11 có 30 ngày";
      break;
    default:
      result.innerHTML = "Nhập từ tháng 1 -12";
  }
}

button.addEventListener("click", dayOfMonth);
