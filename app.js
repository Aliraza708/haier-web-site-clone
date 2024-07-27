const clickHeader = document.getElementById("clickHeader");
const close1 = document.getElementById("close");
const barNone = document.getElementById("barNone");
const cancel = document.getElementById("cancel");
const headernone = document.getElementById("headernone");
const search = document.getElementById("search");
const serachiIcon = document.getElementById("serachiIcon");


window.bar = bar

function bar(){
    clickHeader.style.display = "block"
    barNone.style.display ="none"
    close1.style.display = "block"
}

close1.addEventListener("click",()=>{
close1.style.display = "none"
clickHeader.style.display = "none"
  barNone.style.display ="block"
})

cancel.addEventListener("click",()=>{
    headernone.style.display = "flex"
    search.style.display = "none"

})
serachiIcon.addEventListener("click",()=>{
    headernone.style.display = "none"
    search.style.display = "flex"
})
