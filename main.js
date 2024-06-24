const menuBtn = document.querySelector("#menuButton")
const list = document.querySelector("#list")
const xarafka = document.querySelector("#xaraf")

menuBtn.addEventListener("click", function(){
    list.style.display = "flex"
    menuBtn.style.display = "none"
    xarafka.style.display ="block"  

})


    xarafka.addEventListener("click", function(){
    menuBtn.style.display = "block"
    xarafka.style.display = "none"
    list.style.display= "none"
})