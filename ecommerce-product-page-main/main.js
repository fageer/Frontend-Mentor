const menu = document.getElementById("menu");
const close = document.getElementById("close");
const nav = document.querySelector("nav");
const cart = document.querySelector(".cart");
let quan = document.querySelector(".quan");
const emptyBasket = document.querySelector(".basket-empty");
const basket = document.querySelector(".basket");
const addToCart = document.querySelector(".btn");
let pice = document.getElementById("pice");
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const images = document.querySelectorAll(".img");
const bigImg = document.getElementById("big-img");
const del = document.getElementById("delete");
let price = document.getElementById("price");
const checkout = document.getElementById("checkout");

menu.addEventListener("click", () => {
    nav.style.display = "flex";
    nav.classList.add("toggle");
    close.style.display = "block";
});

close.addEventListener("click", () => {
    nav.style.display = "none";
    nav.classList.remove("toggle");
    close.style.display = "none";
});

cart.addEventListener("click", () => {
    emptyBasket.style.display == "none"
    basket.style.display == "none"
    if(parseInt(quan.textContent) === 0){
        if (emptyBasket.style.display == "none") {
            emptyBasket.style.display = "block";
        }else {
            emptyBasket.style.display = "none";
        }
    }else {
        if (basket.style.display == "none") {
            basket.style.display = "block";
            price.textContent = `$${125 * parseInt(quan.textContent)}.00`;
        }else {
            basket.style.display = "none";
        }
    }
});

minus.addEventListener("click", () => {
    if (parseInt(pice.textContent) > 0){
        pice.textContent = parseInt(pice.textContent) - 1;
    }
});

plus.addEventListener("click", () => {
    pice.textContent = parseInt(pice.textContent) + 1;
});

addToCart.addEventListener("click", () => {
    if (parseInt(pice.textContent) > 0) {
        quan.style.display = "block";
        quan.textContent = parseInt(pice.textContent) ;
    }
});

images.forEach((image) => {
    image.addEventListener("click", () => {
        images.forEach((image) => {
            image.classList.remove("active");
        });
        image.classList.add("active");
        bigImg.src = image.src;
    })
});

del.addEventListener("click", () => {
    basket.style.display = "none";
    emptyBasket.style.display = "block";
    quan.textContent = "0";
    pice.textContent = "0";
});

checkout.addEventListener("click", () => {
    basket.style.display = "none";
    quan.textContent = "0";
    pice.textContent = "0";
    alert(`
    Thanks for shopping with us!🙏. 
    Your order is now being prepared 🚗...
    `);
});

let currentIndex = 0;
setInterval(() => {
    if (currentIndex === images.length) {
        currentIndex = 0;
    }
    bigImg.src = images[currentIndex].src;
    images.forEach((image) => {
        image.classList.remove("active");
    });
    images[currentIndex].classList.add("active");
    currentIndex++;
}, 1500);
