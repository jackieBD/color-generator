const wrapper = document.getElementById("wrapper")
const thisManyBtn = document.getElementById("this-many-btn")
const colorsInput = document.getElementById("colors-input")


async function getColors(){
  const colorRes = await fetch(`https://apis.scrimba.com/hexcolors?count=${colorsInput.value}`)
  const colorData = await colorRes.json()
  console.log(colorData.colors[1].value)
  const colors = colorData.colors

  displayColors(colors)
}



function displayColors(colors){
  const myColorsHTML = colors.map(color=>{
    return `<div class= "box" style="background: ${color.value};"></div>`
  }).join(" ")
wrapper.innerHTML = myColorsHTML

}

thisManyBtn.addEventListener("click", getColors)
