// javascript for product page
document.querySelector('#copyYear').textContent =
new Date().getUTCFullYear()

const products = [
    {
        id: 1 , 
        name:"Golf 7 GTI Front Lip",
        image: "https://i.postimg.cc/fyz3wyPw/eng-pm-FRONT-SPLITTER-VW-GOLF-VII-GTI-FACELIFT-V-1-959-1.jpg", 
        price:"1500",
    },
    {
        id: 2 , 
        name:"Golf 7 GTI Rear Spoiler",
        image: "https://i.postimg.cc/rmJmYcw7/Spoiler-Extention-0002-Layer-3.jpg", 
        price:"1900",
    },
    {
        id: 3 , 
        name:"Golf 7 GTI Mirror Caps",
        image: "https://i.postimg.cc/Ss24chzW/images-7-1-600x337.jpg", 
        price:"800",
    },
    {
        id: 4 , 
        name:"BMW M3 F80 Front Lip",
        image: "https://i.postimg.cc/2jKBfMMs/93-D2-CC6-B-5-AD7-4581-9-AF8-D8-CD307083-F9.webp", 
        price:"2000",
    },
    {
        id: 5 , 
        name:"BMW M3 F80 Boot Spoiler",
        image: "https://i.postimg.cc/15Fgs0gm/image-0c86151c-0c56-46b7-ae50-b71afc9c9ea8.webp", 
        price:"2500",
    },
    {
        id: 6 , 
        name:"BMW M3 F80 Mirror Caps",
        image: "https://i.postimg.cc/pTg8RPHr/image-b0b017d7-66e2-4eb5-87d3-bbb78f957208.webp", 
        price:"1000",
    }
];

//Display products from local storage
function displayProducts(products) {
    const productsListDiv = document.getElementById('productsList');
    let productsHTML = '';
    products.forEach(product => {
        productsHTML += `
        <div class="col-md-4">
        <div class="card mb-4 shadow-sm">
        <div class="card-body mb-5">
        <h3 class="card-title">${product.name}</h3>
        <img id="img" src="${product.image}" class="img-fluid rounded-start" alt="${product.name}">
        <p class="card-text">Price: R${product.price}.00</p>
        <button id="btnAddToCart" class="m-3" onclick="addToCart(${product.id})">ADD TO CART</button>
        </div>
        </div>
        </div>`;
    });
    productsListDiv.innerHTML = productsHTML;
}

// Convert products to JSON and store in localStorage
localStorage.setItem('products', JSON.stringify(products));
const storedProducts = JSON.parse(localStorage.getItem('products'));
displayProducts(storedProducts);