const form= document.querySelector(".login-form")

const handleSubmit=(e)=>{
e.preventDefault()

const mail= e.target.elements.email.value;
const password=e.target.elements.password.value;
if (mail==="" || password==="") {
return alert('All form fields must be filled in')
}
const dataForm={
    mail:mail,
    password:password

}
console.log(dataForm)
form.reset()
}
 
form.addEventListener('submit',handleSubmit)

