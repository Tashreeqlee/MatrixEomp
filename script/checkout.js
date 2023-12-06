// javascript for checkout page
document.querySelector('#copyYear').textContent =
new Date().getUTCFullYear()

let checkoutWrapper = document.querySelector('[checkout-products]')
let checkoutData = JSON.parse(localStorage.getItem('cart'))

function displayData() {
    checkoutWrapper.innerHTML = ""
    checkoutData.forEach( item=>{
        checkoutWrapper.innerHTML = `
        <thead>
        <tbody>
        <tr>
        <th scope="row">1</th>
        <td class="text-white">${item.name}</td>
        <td><img src="${item.image}" class="w-25 img-fluid" alt="${item.name}"</td>
        <td class="text-white">R${item.price}.00</td>
        </tr>
        </thead>
        `
    })
}
displayData()