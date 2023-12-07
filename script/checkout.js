// javascript for checkout page
document.querySelector("#copyYear").textContent = new Date().getUTCFullYear();

//
function handleQuantityChange(productId, quantity) {
  const productIndex = checkoutData.findIndex((item) => item.id === productId);
  checkoutData[productIndex].quantity = quantity;
  displayData();
}

//display data and total amount add up
let checkoutWrapper = document.querySelector("[checkout-products]");
let checkoutData = JSON.parse(localStorage.getItem("cart"));

function displayData() {
  checkoutWrapper.innerHTML = "";
  let totalAmount = 0;
  checkoutData.forEach((item) => {
    checkoutWrapper.innerHTML += `
        <thead>
        <tr>
            <td class="text-white">${item.name}</td>
            <td><img src="${item.image}" class="w-25 img-fluid" alt="${item.name}"</td>
            <td class="text-white">R${item.price}.00</td>
            <td><input type="number" min="1" value="${item.quantity}" onchange="handleQuantityChange(${item.id}, this.value)"></td>
            <td><button data-delete">Delete</button></td>
        </tr>
        </thead>
        `;
    totalAmount += +item.price * item.quantity;
  });
  document.getElementById("totalAmount").textContent = `R${totalAmount}.00`;
}

displayData();



