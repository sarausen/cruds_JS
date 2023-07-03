// variable creation
// get total price
//create product
// local storage
// clear data after inputs
//read
//count
// delete
//update
//search
// clean data

// 1- variable creation

let title = document.getElementById("title");
console.log(title);
let price = document.getElementById("price");
console.log(price);
let taxes = document.getElementById("taxes");
console.log(taxes);
let ads = document.getElementById("ads");
console.log(ads);
let discount = document.getElementById("discount");
console.log(discount);
let total = document.getElementById("total");
console.log(total);
let count = document.getElementById("count");
console.log(count);
let Category = document.getElementById("Category");
console.log(Category);
let submit = document.getElementById("submit");
console.log(submit);

// 2- get total price
function getTotalPrice() {
  //   console.log("test total");
  if (price.value != "") {
    let netPrice = +price.value + +taxes.value + +ads.value - +discount.value;
    total.value = netPrice;
    // total.style.backgroundColor = "blue";
    total.style.color = "red";
  } else {
    total.value = "";
    taxes.value = "";
    ads.value = "";
    discount.value = "";
    total.style.color = "black";
  }
}

