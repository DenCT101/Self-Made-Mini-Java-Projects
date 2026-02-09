const genbtn = document.getElementById("generateBtn");
const choosenColor = document.getElementById("colorSelect");
const container = document.getElementById("buttonsContainer");

function changecolor(color){
    document.body.style.backgroundColor = color;
}

genbtn.addEventListener("click",()=>{
    const color = choosenColor.value;
    const btn = document.createElement('button')
    const generatedBtn = container.appendChild(btn);
    generatedBtn.innerText = color;
    generatedBtn.addEventListener("click",()=>changecolor(color))
})


