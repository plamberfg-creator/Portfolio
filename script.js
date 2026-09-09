let header = document.querySelector("header");
let logo = document.querySelector("#logo");
let menue = document.querySelector("#menue");
let account = document.querySelector("#account");
let accountBtn1 = document.querySelector("#login");
let accountBtn2 = document.querySelector("#signin");
let introduction = document.querySelector("#Introduction");
let menueBtn = document.querySelector("#menue-icon");
let closeBtn = document.querySelector("#close-icon");
menueBtn.addEventListener("click", () =>{
    header.classList.add("headActive");
});

// closeBtn
closeBtn.addEventListener("click" , () => {
    header.classList.remove("headActive")
})
accountBtn1.addEventListener("click" , ()=>{
    alert("Only admin can access this")
});
accountBtn2.addEventListener("click" , ()=>{
    alert("Only admin can access this")
});
