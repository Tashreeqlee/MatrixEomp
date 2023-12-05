// javascript for product page
document.querySelector("#copyYear").textContent = new Date().getUTCFullYear();

const products = [
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
    image: "https://i.postimg.cc/rmJmYcw7/Spoiler-Extention-0002-Layer-3.jpg",
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
    id: 6,
    name: "BMW 135i Rear Diffuser",
    image:
      "https://i.postimg.cc/k5d9ct9f/image-e8f5128f-4c38-4841-89cd-434773cbba13.webp",
    price: "1900",
  },
  {
    id: 6,
    name: "BMW F30 Rear Diffuser",
    image:
      "https://i.postimg.cc/JhnwK3v3/image-c814c26f-32e2-40d5-8b2a-a4ea4652d787.webp",
    price: "2900",
  },
];

//Display products from local storage
function displayProducts(products) {
  const productsListDiv = document.getElementById("productsList");
  let productsHTML = "";
  products.forEach((product) => {
    productsHTML += `
        <div class="col d-flex justify-content-center mb-5">
        <div class="card" style="width: 18rem;>
        <h3 class="card-title">${product.name}</h3>
        <img id="img" src="${product.image}" class="img-fluid rounded-start" alt="${product.name}" style="height: 15rem">
        <p class="card-text">Price: R${product.price}.00</p>
        <button id="btnAddToCart" class="m-3" onclick="addToCart(${product.id})">ADD TO CART</button>
        </div>
        </div>`;
  });
  productsListDiv.innerHTML = productsHTML;
}

// Convert products to JSON and store in localStorage
localStorage.setItem("products", JSON.stringify(products));
const storedProducts = JSON.parse(localStorage.getItem("products"));
displayProducts(storedProducts);

//search function
let inputSearch = document.querySelector("[searchinput]");
//addevent
inputSearch.addEventListener("keyup", () => {
  let SearchItem = products.filter((prod) => {
    return prod.name.toLowerCase().includes(inputSearch.value.toLowerCase());
  });
  if (SearchItem) {
    displayProducts(SearchItem);
  }
});

// Sort products by price low to high
function sortProductsByPrice() {
  let sortedProducts = products.sort((a, b) => {
    return parseInt(a.price) - parseInt(b.price);
  });
  displayProducts(sortedProducts);
}

// Add event listener to the sort button
let sortButton = document.getElementById("sortButton");
sortButton.addEventListener("click", sortProductsByPrice);
