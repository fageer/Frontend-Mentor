const menu = document.querySelector("#menu");
const close = document.querySelector("#close");
menu.addEventListener("click", () => {
    document.querySelector("nav").classList.add("toggle");
    close.style.display = "block";
});

close.addEventListener("click", () => {
    document.querySelector("nav").classList.remove("toggle");
    close.style.display = "none";
});


