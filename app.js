let showQr = document.querySelector(".qr-code")
let generateButton = document.querySelector("button")
let inputText = document.querySelector("input")
let image = document.querySelector("img")
let gen = document.querySelector(".content")

generateButton.addEventListener('click',()=>{
    let qrValue = inputText.value
    if(qrValue=="")
    {
        return
    }
    showQr.classList.add("displayqr")
    image.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`
    console.log(qrValue)
})
