// 🔥 document.getElementById
// document.querySelector()
// const head = document.querySelector('#head')
// // Inner Html and textContent
// console.log(head.textContent)

// const div = document.querySelector('.container')
// div.style.transform = 'rotate(0deg)'
// console.log(div)

//🔥 get and set attribute
// const aTag = document.querySelector('a');
// aTag.style.all = 'unset';
// const atr = aTag.getAttribute('href')
// aTag.setAttribute('href','https://www.google.com/')

// const allLi = document.querySelectorAll('.list') // Giving Node List
// const tagList = document.getElementsByClassName('list') // Giving HTML Collection
// // This is array like object
// console.log(tagList)
// console.log(allLi)
// // let listArray = Array.from(tagList)
// allLi.forEach((item, index)=>{  // We can itrate over node list easyly using for each
//       item.style.color = 'red'
// })

// 🔥  We can't run for each loop in HTML Collection

// for (const li of tagList) {
//     li.addEventListener('click',()=>{
//         console.log("Gopal")
//     })
// }

//  🔥 Inner HTML and textContent

// const ul = document.querySelector('ul')

// ul.innerHTML = '<button id=\'newBtn\'>Click</button>'

// const createdBtn = document.querySelector('#newBtn')
// createdBtn.addEventListener('click',()=>{
//     console.log("Gopal")
// })

// const div =  document.querySelector('.container')
// const rootNode = document.getRootNode()
// const htmlElementNode = rootNode.childNodes[1]

// const head = document.getElementById('head');
// // console.log(head.nextElementSibling)
// // console.log(head.nextSibling)
// //  ChildNode,Parent Elements,

// const div = head.parentElement;
// const body = div.parentNode;
// const childrens = div.children
// for (const children of childrens) {
//     children.style.color = 'red';
// }
// // console.log(children)
// console.log(body)
// const heading = div.querySelector('#head')
// console.log(heading)

// 🔥 ClassList

// const Lis = document.querySelectorAll('li');
// console.log(Lis);

// for (const li of Lis) {
//     li.classList.add('newClass')
//     li.classList.toggle('newClass')

// }

// console.log(Lis);

//  🔥 Small Todo task

// createElement, append,prepend,remove,before,after

// const addBtn = document.querySelector('.container button')
// const ul = document.querySelector('.container ul')
// const taskInput = document.querySelector('input')
// ul.classList.add('style')
// addBtn.addEventListener('click',()=>{
//     //  const list = document.createElement('li')
//     //  list.textContent = 'Gopal'
//     //  const btn = document.createElement('button')
//     //  btn.textContent = 'X'
//     //  ul.append(list)
//     //  ul.append(btn)
//     // const createdBtn = document.querySelector('ul button')
//     // createdBtn.addEventListener('click',()=>{
//     //     ul.remove('li')
//     // })
//     // const taskName = taskInput.value
//     // const html = `<li>${taskName}<button>X</button></li>`
//     // ul.insertAdjacentHTML('beforeend',html)
//     // taskInput.value = ''
//     // const createdBtns = document.querySelectorAll('ul li button')
//     // createdBtns.addEventListener('click',(e)=>{
//     //       console.log(createdBtns)
//     // })

// })

//  Clone Nodes
// const list = document.querySelectorAll('li')
// console.log(list)
// const li = document.createElement('li')
// console.log(li.cloneNode(true))

//;🔥 static list vs live list
// const ul = document.querySelector('ul')
// const list = document.querySelectorAll('li')
// const li = document.createElement('li')
// //  Node list is static, HTML Collection is live list
// li.textContent= 'hello5'
// ul.append(li)
// console.log()

//;🔥 how to get the dimension of element

// const ul = document.querySelector('ul')

// const ulDimen = ul.getBoundingClientRect()
// console.log(ulDimen)

// 🔥 Event
// the value of this chenges on arrow function and anonomus funcion

// const buttons = document.querySelectorAll('.button')
// buttons.forEach((button)=>{
//     button.addEventListener('click',function(){
//         this.style.color = 'gray'
//         this.style.backgroundColor = 'yellow'
//     })
// })
//  Event bubbling and Event Capturing
const body = document.body;
const grandP = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

// body.addEventListener("click", () => {
//   console.log("You clicked on body");
// });
// grandP.addEventListener("click", () => {
//   console.log("You clicked on grandparent");
// });
// parent.addEventListener("click", () => {
//   console.log("You clicked on parent");
// });
// child.addEventListener("click", () => {
//   console.log("You clicked on chlid");
// });

// Capturing Events

// body.addEventListener("click", () => {
//     console.log("Captured!!! You clicked on body");
//   },true);
//   grandP.addEventListener("click", () => {
//     console.log("Captured!!! You clicked on grandparent");
//   },true);
//   parent.addEventListener("click", () => {
//     console.log("Captured!!! You clicked on parent");
//   },true);
//   child.addEventListener("click", () => {
//     console.log("Captured!!! You clicked on chlid");
//   },true);

// grandP.addEventListener("click", (e) => {
//    console.log(e.target)
// });


