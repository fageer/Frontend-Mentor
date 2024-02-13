const screen = document.getElementById("screen");
const deletebtn = document.getElementById("del");
const theme = document.getElementById("theme");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");

deletebtn.addEventListener("click", del);
function del() {
  screen.value = screen.value.substring(0, screen.value.length - 1);
}

one.addEventListener("click", () => {
  theme.style.marginLeft = "0px";
  document.body.classList.remove("active3");
  document.body.classList.remove("active2");
});

two.addEventListener("click", () => {
  theme.style.marginLeft = "15px";
  document.body.classList.add("active2");
  document.body.classList.remove("active3");
});

three.addEventListener("click", () => {
  theme.style.marginLeft = "30px";
  document.body.classList.add("active3");
  document.body.classList.remove("active2");
});
