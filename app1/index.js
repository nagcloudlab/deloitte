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

// using DOM API + Timer API

const timeNowEle = document.querySelector("#time-now");
setInterval(() => {
  timeNowEle.innerText = new Date().toLocaleTimeString("en-US", {
    timeZone: "Asia/Kolkata",
  });
}, 1000);

// using DOM API + Fetch API

const top5TodosBtn = document.querySelector("#top5-todos");
const todosBodyEle = document.querySelector("#todos-body");
top5TodosBtn.addEventListener("click", (e) => {
  const url = `https://jsonplaceholder.typicode.com/todos?_limit=5`;
  let promise = fetch(url);
  promise
    .then((response) => response.json())
    .then((todos) => {
      let rows = todos.map((todo) => {
        return `
            <tr class="${todo.completed ? "bg-success" : ""}">
                <td>${todo.id}</td>
                <td>${todo.title}</td>
                <td>${todo.completed}</td>
            </tr>
        `;
      });
      todosBodyEle.innerHTML = rows.join(" ");
    });
});
