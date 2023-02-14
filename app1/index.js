// using DOM API

const box = document.querySelector(".alert");
const greetBtn = document.querySelector(".btn-info");
const hideBtn = document.querySelector(".btn-danger");
const showBtn = document.querySelector(".btn-primary");

greetBtn.addEventListener("click", (e) => {
  box.innerText = "good morning";
});
hideBtn.addEventListener("click", (e) => {
  box.style.display = "none";
});
showBtn.addEventListener("click", (e) => {
  box.style.display = "block";
});
