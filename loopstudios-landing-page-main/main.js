const menu = document.getElementById("menu");
const close = document.getElementById("close");
const nav = document.querySelector("nav");
menu.addEventListener("click", () => {
    nav.classList.add("toggle");
    nav.style.display = "flex";
    close.style.display = "block";
});

close.addEventListener("click", () => {
    nav.classList.remove("toggle");
    nav.style.display = "none";
    close.style.display = "none";
});
