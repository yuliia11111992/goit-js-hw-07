function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

  const color = document.querySelector(".color")
  const changeColor = document.querySelector(".change-color")
  const body = document.body;

 const handleChangeColor = ()=>{
const randomColor = getRandomHexColor()
body.style.backgroundColor = randomColor;
color.textContent = randomColor; 
 }

   changeColor.addEventListener("click",handleChangeColor)