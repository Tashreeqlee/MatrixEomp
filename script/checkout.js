// javascript for checkout page
document.querySelector("#copyYear").textContent = new Date().getUTCFullYear();

//function for quantity display
function handleQuantityChange(productId, quantity) {
  const productIndex = checkoutData.findIndex((item) => item.id === productId);
  checkoutData[productIndex].quantity = quantity;
  displayData();
}


//display data and total amount add up
//Added the total amount display as well 
let checkoutWrapper = document.querySelector("[checkout-products]");
let checkoutData = JSON.parse(localStorage.getItem("cart"));

function displayData() {
  checkoutWrapper.innerHTML = "";
  let totalAmount = 0;
  let addedProducts = [];

  checkoutData.forEach((item) => {

    if (!addedProducts.includes(item.id)) {
    checkoutWrapper.innerHTML += `
        <thead>
        <tr>
            <td class="text-white">${item.name}</td>
            <td><img src="${item.image}" class="w-25 img-fluid" alt="${item.name}"</td>
            <td class="text-white">R${item.price}.00</td>
            <td><input type="number" min="1" value="${item.quantity}" onchange="handleQuantityChange(${item.id}, this.value)" placeholder="input quantity amount.."></td>
            <td><button type="button" class="btn" onclick="deleteProduct()">Delete</button></td>
        </tr>
        </thead>
        
        `;
    totalAmount += +item.price * item.quantity;
    addedProducts.push(item.id);
    }
  });
  document.getElementById("totalAmount").textContent = `R${totalAmount}.00`;
}
//  Remove the product from the checkoutData array
function deleteProduct(index) {
  checkoutData.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(checkoutData)); 
  displayData();
};


displayData();


//thank you for purchasing alert
function showAlert() {
  alert("Thank you for purchasing!!");
}




