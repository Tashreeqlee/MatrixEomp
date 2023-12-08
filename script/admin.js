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
      {
        id: 9,
        name: "Polo Vivo 9N Front Lip",
        image:
          "https://i.postimg.cc/DfHNSzfW/image-88cdc232-9bec-4807-b512-7c117ce61f5d.webp",
        price: "895",
      },
      {
        id: 10,
        name: "Polo Vivo 9N Mudflaps",
        image:
          "https://i.postimg.cc/Df9C2Y5L/image-b7eb3ec0-5353-47bb-a066-99479b6da577.webp",
        price: "250",
      },
      {
        id: 11,
        name: "VW Golf 6 GTI Mirror Caps",
        image:
          "https://i.postimg.cc/d3P8Kgv0/image-24d89122-8c7c-4cbf-8e6b-48cbcc087758.webp",
        price: "750",
      },
      {
        id: 12,
        name: "BMW Universal Kidney Style Grills",
        image:
          "https://i.postimg.cc/hjrSSdR7/image-be241ea2-8c70-4e08-8069-c5eac41d45ea.webp",
        price: "900",
      },
      {
        id: 13,
        name: "Blue Spike Valve Caps",
        image:
          "https://i.postimg.cc/Jtwmxcbv/image-6989294a-59e5-4eec-899f-024207c40ae6.webp",
        price: "100",
      },
      {
        id: 14,
        name: "Black Spike Valve Caps",
        image:
          "https://i.postimg.cc/tTNpkVr4/image-17c0aa69-cc46-4daf-8e87-61a71f3c30ae.webp",
        price: "100",
      },
      {
        id: 15,
        name: "Red Spike Valve Caps",
        image:
          "https://i.postimg.cc/NMHQHzXm/image-7a7cbafb-8e3c-4016-9c31-df0fa5c50faf.webp",
        price: "100",
      },
      {
        id: 16,
        name: "Silver Spike Valve Caps",
        image:
          "https://i.postimg.cc/5yJWFNbW/image-f2410874-311c-40e2-87a4-9d59d446daa9.webp",
        price: "100",
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
    localStorage.setItem("products", JSON.stringify(productsData));

    clearForm();
    displayProducts();
    closeModal();
  } else {
    alert("Please fill in all fields");
  }
}

function product(idItem, name, image, price) {
  this.id = idItem;
  this.name = name;
  this.image = image;
  this.price = price;
}

function clearForm() {
  prodId.value = "";
  prodName.value = "";
  image.value = "";
  prodPrice.value = "";
}

function displayProducts() {
  productList.innerHTML = "";

  productsData.forEach((item) => {
    let row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.id}</td>
      <td>${item.name}</td>
      <td><img src="${item.image}" class="img-fluid" alt="${item.name}"></td>
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
    localStorage.setItem("products", JSON.stringify(productsData));
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
    prodId.value = product.id;
    prodPrice.value = product.price;
    addProductModal.show();
  }
}

//function to sort items on admin page
function sortProducts() {
  productsData.sort((a, b) => a.name.localeCompare(b.name));
  displayProducts();
}

let sortButton = document.getElementById("sortButton");
sortButton.addEventListener("click", sortProducts);


//close function for the modal
function closeModal() {
  addProductModal.hide();
}

displayProducts();
