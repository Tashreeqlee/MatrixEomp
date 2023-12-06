// javascript for admin page
document.querySelector('#copyYear').textContent =
new Date().getUTCFullYear()

let modal = new bootstrap.Modal(document.querySelector('.modal')); // Initialize the modal
let addProducts=document.querySelector('addProducts')
addProducts.addEventListener('click',function () {
  let inputP=document.querySelector('[data-inputP]')
  let inputN=document.querySelector('[data-inputN]')
  let inputpR=document.querySelector('[data-inputpR]')
  let inputI=document.querySelector('[data-inputI]')
  let newObj= new displayProducts(inputP,inputN,inputpR,inputI)
  alert('hi')
  products.push[newObj]
  modal.show();
})