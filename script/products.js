// javascript for product page
document.querySelector("#copyYear").textContent = new Date().getUTCFullYear();

const products = [
  {
    id: 1,
    name: "VW Golf 7 GTI Front Lip",
    image:
      "https://i.postimg.cc/fyz3wyPw/eng-pm-FRONT-SPLITTER-VW-GOLF-VII-GTI-FACELIFT-V-1-959-1.jpg",
    price: "1500",
  },
  {
    id: 2,
    name: "VW Golf 7 GTI Rear Spoiler",
    image: "https://i.postimg.cc/rmJmYcw7/Spoiler-Extention-0002-Layer-3.jpg",
    price: "1900",
  },
  {
    id: 3,
    name: "VW Golf 7 GTI Mirror Caps",
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
    name: "VW Golf 7 GTI Rear Diffuser",
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

// sort products by price low to high
function sortProductsByPrice() {
  try {
    let sortedProducts = products.sort((a, b) => {
      return parseInt(a.price) - parseInt(b.price); //converts the price of each product to an integer using parseInt
    });
    displayProducts(sortedProducts);
  } catch (e) {}
}
// Add event listener to the sort button
let sortButton = document.getElementById("sortButton");
sortButton.addEventListener("click", sortProductsByPrice);

// Display loading spinner
function displayLoadingSpinner() {
  const productsListDiv = document.getElementById("productsList");
  productsListDiv.innerHTML = '<div class="spinner"></div>';
}

// Fetch products
function fetchProducts() {
  setTimeout(() => {
    // used setTimeout to delay displayProducts function
    displayProducts(products);
  }, 1500); // delay by 1500 milliseconds
}

// Display loading spinner
displayLoadingSpinner();
fetchProducts();

//add to cart
function addToCart(productid) {
  const selectedProduct = products.find((product) => product.id === productid);
  let cart = JSON.parse(localStorage.getItem("cart"));
  if (!cart) {
    cart = [];
  } // Adds the product to the cart
  cart.push(selectedProduct);

  // Update in localStorage
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("You have successfully added the item to cart");
}

//delete button
function deleteProduct(id) {
  const index = checkoutData.findIndex((item) => item.id === id);
  checkoutData.splice(index, 1);

  // Update local storage
  localStorage.setItem("cart", JSON.stringify(checkoutData));
  displayData();
}

checkoutWrapper.addEventListener("click", (event) => {
  if (event.target.dataset.delete) {
    const productId = event.target.dataset.delete;
    deleteProduct(productId);
  }
});
