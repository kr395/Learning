//  Code for Todo list

const todoFild = document.querySelector(".todo-fild");
const inputFild = document.querySelector("#input-fild");
const submitBtn = document.querySelector("#submit-btn");
const form = document.querySelector(".add-form");

// const submitBtn = document.querySelector('#submit-btn')

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (inputFild.value == "") {
    window.alert("Give a task name");
  } else {
    const taskName = inputFild.value;
    const newDiv = document.createElement("div");
    let newHTML = `<ul class="task-div">
    <span class="task-name">${taskName}</span>
    <input type="button" value="✔" class="done-btn" />
    <input type="button" value="❌" class="remove-btn" />
  </ul>`;
    newDiv.innerHTML = newHTML;
    todoFild.append(newDiv);
    inputFild.value = "";
  }
});
// console.log(todoFild.parentNode)
let count ;
todoFild.addEventListener("click", (e) => {
  if (e.target.classList.contains("done-btn")) {
      if (count == 1) {
        const divChildrens = e.target.parentNode.childNodes;
        divChildrens[1].style.textDecoration = 'none';
        count = 0;
      } else{ 
        const divChildrens = e.target.parentNode.childNodes;
        divChildrens[1].style.textDecoration = 'line-through';
        count = 1;
      }
  }
  if (e.target.classList.contains("remove-btn")) {
     const divNode = e.target.parentNode;
     divNode.remove(true)
     divNode.style.padding = '0'
  }
});
