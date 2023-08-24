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
    let htmlText = `<div id=\"task-div\"><span class=\"task-name\"></span><input type=\"button\" value=\"✔\" id=\"done-btn\" /><input type=\"button\" value=\"❌\" id=\"remove-btn\" /></div>`;
    todoFild.appendChild(Node(htmlText));
    const spanTaskName = document.querySelector(".task-name");
    let taskName = inputFild.value;
    spanTaskName.textContent = taskName;
    inputFild.value = "";

  }
});
const doneBtn = document.querySelector("#done-btn");
const removeBtn = document.querySelector("#remove-btn");
if (doneBtn === null) {
} else {
}

// if (!doneBtn) {
//     return
// } else {
//     doneBtn.addEventListener('click',(e)=>{
//         console.log(e.target)
//     })

// }
