// javascript for admin page
document.querySelector("#copyYear").textContent = new Date().getUTCFullYear();

let addProductModal = new bootstrap.Modal(document.getElementById("modal"));
let prodName = document.querySelector("#nameItem");
let prodId = document.querySelector("#productId");
let prodPrice = document.querySelector("#priceItem");
let image = document.querySelector("#imageItem");
let productList = document.querySelector("#Admintable tbody");
let productsData = JSON.parse(localStorage.getItem("products"))
  ? JSON.parse(localStorage.getItem("products"))
  : [
      {
        id: 1,
        name: "Golf 7 GTI Front Lip",
        image:
          "https://i.postimg.cc/fyz3wyPw/eng-pm-FRONT-SPLITTER-VW-GOLF-VII-GTI-FACELIFT-V-1-959-1.jpg",
        price: "1500",
      },
      {
        id: 2,
        name: "Golf 7 GTI Rear Spoiler",
        image:
          "https://i.postimg.cc/rmJmYcw7/Spoiler-Extention-0002-Layer-3.jpg",
        price: "1900",
      },
      {
        id: 3,
        name: "Golf 7 GTI Mirror Caps",
        image: "https://i.postimg.cc/Ss24chzW/images-7-1-600x337.jpg",
        price: "800",
      },
      {
        id: 4,
        name: "BMW M3 F80 Front Lip",
        image:
          "https://i.postimg.cc/2jKBfMMs/93-D2-CC6-B-5-AD7-4581-9-AF8-D8-CD307083-F9.webp",
        price: "2000",
      },
      {
        id: 5,
        name: "BMW M3 F80 Boot Spoiler",
        image:
          "https://i.postimg.cc/15Fgs0gm/image-0c86151c-0c56-46b7-ae50-b71afc9c9ea8.webp",
        price: "2500",
      },
      {
        id: 6,
        name: "Golf 7 GTI Rear Diffuser",
        image:
          "https://i.postimg.cc/4xWbvpzT/image-27efa4c9-7222-43ac-8150-314305ad3558-1880x.webp",
        price: "1700",
      },
      {
        id: 7,
        name: "BMW 135i Rear Diffuser",
        image:
          "https://i.postimg.cc/k5d9ct9f/image-e8f5128f-4c38-4841-89cd-434773cbba13.webp",
        price: "1900",
      },
      {
        id: 8,
        name: "BMW F30 Rear Diffuser",
        image:
          "https://i.postimg.cc/JhnwK3v3/image-c814c26f-32e2-40d5-8b2a-a4ea4652d787.webp",
        price: "2900",
      },
    ];
let itemId =
  productsData.length > 0 ? productsData[productsData.length - 1].id + 1 : 1;

//add product function
function addProduct() {
  if (prodName.value && prodId.value && prodPrice.value && image.value) {
    const includedIds = productsData.map((item) => item.id);
    let newId = 1;
    while (includedIds.includes(newId)) {
      newId++;
    }

    productsData.push(
      new product(
        newId,
        prodName.value,
        image.value,
        prodId.value,
        prodPrice.value,
        new Date()
      )
    );
    localStorage.setItem("product-list", JSON.stringify(productsData));

    clearForm();
    displayProducts();
    closeModal();
  } else {
    alert("Please fill in all fields");
  }
}

function product(idItem, name, img, price) {
  this.id = idItem;
  this.name = name;
  this.image = img;
  this.price = price;
}

function clearForm() {
  prodName.value = "";
  prodId.value = "";
  prodPrice.value = "";
  image.value = "";
}

function displayProducts() {
  productList.innerHTML = "";

  productsData.forEach((item) => {
    let row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.id}</td>
      <td>${item.name}</td>
      <td><img src="${item.image}" class="w-25 img-fluid" alt="${item.name}"></td>
      <td>R${item.price}.00</td>
      <td>
        <button class="btn btn-primary editbtn" data-id="${item.id}">Edit</button>
        <button class="btn btn-danger deletebtn" data-id="${item.id}">Delete</button>
      </td>
    `;
    productList.appendChild(row);
  });

  attachEventListeners();
}

//attaching eventlisteners to buttons
function attachEventListeners() {
  let deleteButtons = document.querySelectorAll(".deletebtn");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const productId = parseInt(button.dataset.id);
      deleteProduct(productId);
    });
  });

  let editBtn = document.querySelectorAll(".editbtn");
  editBtn.forEach((button) => {
    button.addEventListener("click", () => {
      const productId = parseInt(button.dataset.id);
      editProduct(productId);
    });
  });
}

//delete product
function deleteProduct(productId) {
  let index = productsData.findIndex((item) => item.id === productId);
  if (index !== -1) {
    productsData.splice(index, 1);
    localStorage.setItem("product-list", JSON.stringify(productsData));
    displayProducts();
  }
}

// edit product
function editProduct(productId) {
  let product = productsData.find((item) => item.id === productId);
  if (product) {
    itemId = product.id;
    prodName.value = product.name;
    image.value = product.image;
    prodId.value = product.description;
    prodPrice.value = product.price;
    addProductModal.show();
  }
}

//function to sort

//close function for the modal
function closeModal() {
  addProductModal.hide();
}

displayProducts();
