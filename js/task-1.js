const categories=document.querySelector("#categories");
const listItem=categories.querySelectorAll(".item")
console.log (`Number of categories: ${listItem.length}`)
listItem.forEach((item)=>{
const name=item.querySelector("h2");
const newName=name.textContent;
console.log(`Category: ${newName}`)
const li=item.querySelectorAll("li")
console.log(`Elements: ${li.length}`)
})






 

