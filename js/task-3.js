const input=document.querySelector("#name-input")
const anon=document.querySelector("#name-output")
const handleInput = (e)=>{
if (e.currentTarget.value.trim()!==""){
    anon.textContent=e.currentTarget.value.trim()
}
else{
    anon.textContent='Anonymous'}
    
}
console.log(anon.textContent)



input.addEventListener("input", handleInput)
