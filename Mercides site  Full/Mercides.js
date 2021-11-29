


const openButton = document.getElementById("openButton")
const sideBar = document.getElementById("sideBar")
const Body = document.getElementById("Body")
const closeBtn = document.getElementById("closeBtn")


openButton.addEventListener("click" , (eo) => {

    sideBar.style.width = "250px"
    

})


closeBtn.addEventListener("click" , (eo) => {

    sideBar.style.width = "0px"

})


