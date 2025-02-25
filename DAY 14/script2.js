const parent = document.querySelector('.parent')
// console.log(parent);
// console.log(parent.children);
// console.log(parent.children[0].innerHTML);

for (let i = 0; i < parent.children.length; i++) {
  console.log(parent.children[i].innerHTML);
}

// parent.children[0].style.backgroundColor = 'red'
// console.log(parent.firstElementChild);
// console.log(parent.lastElementChild);

const dayOne = document.querySelector('.day')
// console.log(dayOne);
// console.log(dayOne.previousElementSibling);
// console.log(dayOne.nextElementSibling);
// console.log(dayOne.parentElement);


console.log("NODES: ",parent.childNodes);


//Create Element
const div = document.createElement('div')
div.className = "main"
div.id = "myId"
div.setAttribute("title","generated title")
div.style.padding = '12px'
div.innerText = "Chai and Code"
const addText = document.createTextNode("Anurag Raj")
div.appendChild(addText)
document.body.appendChild(div)