// javascript for checkout page
document.querySelector("#copyYear").textContent = new Date().getUTCFullYear();

// let checkoutWrapper = document.querySelector('[checkout-products]')
// let checkoutData = JSON.parse(localStorage.getItem('cart'))

// function displayData() {
//     checkoutWrapper.innerHTML = ""
//     checkoutData.forEach( item=>{
//         checkoutWrapper.innerHTML += `
//         <thead>
//         <tbody>
//         <tr>
//             <td class="text-white">${item.name}</td>
//             <td><img src="${item.image}" class="w-25 img-fluid" alt="${item.name}"</td>
//             <td class="text-white">R${item.price}.00</td>
//         </tr>
//         </thead>
//         `
//     })
// }

// /*
// <table>
//     <thead>
//         <tr>
//             <th></th>
//         </tr>
//     </thead>
//     <tbody>
//         <tr>
//             <td></td>
//         </tr>
//     </tbody>
// </table>
// */
// displayData()

let checkoutWrapper = document.querySelector("[checkout-products]");
let checkoutData = JSON.parse(localStorage.getItem("cart"));

function displayData() {
  checkoutWrapper.innerHTML = "";
  let totalAmount = 0;
  checkoutData.forEach((item) => {
    checkoutWrapper.innerHTML += `
        <thead>
        <tbody>
        <tr>
            <td class="text-white">${item.name}</td>
            <td><img src="${item.image}" class="w-25 img-fluid" alt="${item.name}"</td>
            <td class="text-white">R${item.price}.00</td>
        </tr>
        </thead>
        `;
    totalAmount += +item.price;
  });
  document.getElementById("totalAmount").textContent = `R${totalAmount}.00`;
}

displayData();
